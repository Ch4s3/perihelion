// march_webgl.mjs — WebGL nebula rendering for March programs compiled with
// --target js. Renders Perihelion.Nebula's cloud field (domain-warped
// fractal noise, curving filaments, density-based holes) to an offscreen
// <canvas>, composited into the game's 2D canvas via Canvas.draw_image.
// The offscreen canvas is created by March (Dom.create("canvas")) and
// never appended to the visible DOM tree.

const MAX_CLOUDS = 16;

function some(v) { return { $: "Some", _0: v }; }
const none = { $: "None" };
function opt(v) { return (v != null) ? some(v) : none; }

const VERTEX_SRC = `
attribute vec2 a_position;
varying vec2 vUv;
void main() {
  vUv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;

const FRAGMENT_SRC = `
precision mediump float;
#define MAX_CLOUDS ${MAX_CLOUDS}

uniform vec2 u_resolution;
uniform int u_cloudCount;
uniform vec2 u_cloudPos[MAX_CLOUDS];
uniform float u_cloudRadius[MAX_CLOUDS];
uniform float u_cloudStrength[MAX_CLOUDS];
uniform float u_cloudSeed[MAX_CLOUDS];

varying vec2 vUv;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

float valueNoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

float fbm(vec2 p) {
  float sum = 0.0;
  float amp = 0.5;
  float freq = 1.0;
  for (int i = 0; i < 4; i++) {
    sum += amp * valueNoise(p * freq);
    freq *= 2.0;
    amp *= 0.5;
  }
  return sum;
}

float smoothFalloff(float dist, float radius) {
  if (dist >= radius) return 0.0;
  float t = 1.0 - dist / radius;
  return t * t * (3.0 - 2.0 * t);
}

float filaments(vec2 rel, float dist, float radius, float seed) {
  // atan2's angle becomes numerically unstable as dist -> 0 (tiny position
  // changes near the origin swing the computed angle wildly), producing a
  // visible tight pinwheel/moire artifact right at a cloud's center. Fade
  // filament contribution out smoothly over the innermost ~12% of the
  // radius so the unstable region never contributes visible detail --
  // filaments still look correct everywhere else in the cloud.
  float centerFade = smoothstep(0.0, radius * 0.12, dist);
  if (centerFade <= 0.0) return 0.0;
  float angle = atan(rel.y, rel.x);
  float total = 0.0;
  for (int i = 0; i < 3; i++) {
    float fi = float(i);
    float baseAngle = seed * 6.2831853 + fi * 2.0943951;
    float warpedAngle = baseAngle
      + (fbm(rel * 0.01 + vec2(seed * 13.0 + fi, seed * 7.0)) - 0.5) * 2.0;
    float angleDiff = mod(angle - warpedAngle + 3.14159265, 6.2831853) - 3.14159265;
    float angularFalloff = exp(-angleDiff * angleDiff * 10.0);
    float radialFalloff = smoothFalloff(dist, radius * 0.9);
    total += angularFalloff * radialFalloff * 0.5;
  }
  return total * centerFade;
}

void main() {
  vec2 fragCoord = vec2(vUv.x, 1.0 - vUv.y) * u_resolution;
  float density = 0.0;

  for (int i = 0; i < MAX_CLOUDS; i++) {
    if (i >= u_cloudCount) break;
    vec2 rel = fragCoord - u_cloudPos[i];
    float dist = length(rel);
    float radius = u_cloudRadius[i];
    if (dist >= radius) continue;

    vec2 uv = rel / radius;
    vec2 warpOffset = vec2(
      fbm(uv * 2.0 + vec2(u_cloudSeed[i] * 13.0, 0.0)) - 0.5,
      fbm(uv * 2.0 + vec2(u_cloudSeed[i] * 29.0, 5.0)) - 0.5
    ) * 0.6;
    vec2 warpedUv = uv + warpOffset;

    float base = fbm(warpedUv * 3.0 + vec2(u_cloudSeed[i] * 7.0, 0.0));
    float radial = smoothFalloff(dist, radius);
    float d = base * radial;

    d += filaments(rel, dist, radius, u_cloudSeed[i]);

    float holeNoise = fbm(uv * 5.0 + vec2(u_cloudSeed[i] * 41.0, 100.0));
    if (dist < radius * 0.6 && holeNoise < 0.28) {
      d *= holeNoise / 0.28;
    }

    density += clamp(d, 0.0, 1.0) * u_cloudStrength[i];
  }

  density = clamp(density, 0.0, 1.0);
  gl_FragColor = vec4(1.0, 1.0, 1.0, density * 0.6);
}
`;

function compileShader(gl, type, src) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, src);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(shader);
    gl.deleteShader(shader);
    throw new Error("march_webgl: shader compile failed: " + log);
  }
  return shader;
}

function linkProgram(gl, vertSrc, fragSrc) {
  const vert = compileShader(gl, gl.VERTEX_SHADER, vertSrc);
  const frag = compileShader(gl, gl.FRAGMENT_SHADER, fragSrc);
  const program = gl.createProgram();
  gl.attachShader(program, vert);
  gl.attachShader(program, frag);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program);
    throw new Error("march_webgl: program link failed: " + log);
  }
  gl.deleteShader(vert);
  gl.deleteShader(frag);
  return program;
}

// One renderer state (program, buffer, uniform locations) per WebGL
// context, built lazily on first draw and cached for the context's
// lifetime -- mirrors march_canvas.mjs's cached noise tile.
const __state = new WeakMap();

function stateFor(gl) {
  let st = __state.get(gl);
  if (st !== undefined) return st;

  const program = linkProgram(gl, VERTEX_SRC, FRAGMENT_SRC);

  const quad = new Float32Array([
    -1, -1, 1, -1, -1, 1,
    -1, 1, 1, -1, 1, 1,
  ]);
  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, quad, gl.STATIC_DRAW);

  const aPosition = gl.getAttribLocation(program, "a_position");
  const uniforms = {
    resolution: gl.getUniformLocation(program, "u_resolution"),
    cloudCount: gl.getUniformLocation(program, "u_cloudCount"),
    cloudPos: gl.getUniformLocation(program, "u_cloudPos"),
    cloudRadius: gl.getUniformLocation(program, "u_cloudRadius"),
    cloudStrength: gl.getUniformLocation(program, "u_cloudStrength"),
    cloudSeed: gl.getUniformLocation(program, "u_cloudSeed"),
  };

  st = { program, buffer, aPosition, uniforms };
  __state.set(gl, st);
  return st;
}

// Walks a March List(Cloud) (Cons/Nil cells, records with named fields) into
// flat Float32Arrays sized MAX_CLOUDS, capping silently past that count.
function cloudsToArrays(clouds) {
  const pos = new Float32Array(MAX_CLOUDS * 2);
  const radius = new Float32Array(MAX_CLOUDS);
  const strength = new Float32Array(MAX_CLOUDS);
  const seed = new Float32Array(MAX_CLOUDS);
  let node = clouds;
  let count = 0;
  while (node.$ === "Cons" && count < MAX_CLOUDS) {
    const c = node._0;
    pos[count * 2] = c.x;
    pos[count * 2 + 1] = c.y;
    radius[count] = c.radius;
    strength[count] = c.strength;
    seed[count] = c.seed;
    count++;
    node = node._1;
  }
  return { pos, radius, strength, seed, count };
}

export function march_webgl_get_context(node) {
  const gl = node.getContext("webgl") || node.getContext("experimental-webgl");
  return opt(gl);
}

export function march_webgl_resize(gl, w, h) {
  // Assigning canvas.width/height reallocates and clears the WebGL
  // drawing buffer even when the value is unchanged -- and this is now
  // called every frame (see the March-side resize_gl comment for why a
  // change-detection guard there caused a worse bug previously). Compare
  // against the canvas's own actual current size instead of March-side
  // game state, which can drift out of sync with the canvas; the canvas's
  // own width/height can't.
  if (gl.canvas.width !== w || gl.canvas.height !== h) {
    gl.canvas.width = w;
    gl.canvas.height = h;
  }
  gl.viewport(0, 0, w, h);
}

export function march_webgl_canvas_node(gl) {
  return gl.canvas;
}

export function march_webgl_draw_nebula(gl, clouds, viewW, viewH, _t) {
  const st = stateFor(gl);
  const { pos, radius, strength, seed, count } = cloudsToArrays(clouds);

  gl.useProgram(st.program);
  gl.bindBuffer(gl.ARRAY_BUFFER, st.buffer);
  gl.enableVertexAttribArray(st.aPosition);
  gl.vertexAttribPointer(st.aPosition, 2, gl.FLOAT, false, 0, 0);

  gl.uniform2f(st.uniforms.resolution, viewW, viewH);
  gl.uniform1i(st.uniforms.cloudCount, count);
  gl.uniform2fv(st.uniforms.cloudPos, pos);
  gl.uniform1fv(st.uniforms.cloudRadius, radius);
  gl.uniform1fv(st.uniforms.cloudStrength, strength);
  gl.uniform1fv(st.uniforms.cloudSeed, seed);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
}
