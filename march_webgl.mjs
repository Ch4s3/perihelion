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

// A noise-turbulent expanding ring (shockwave) plus a fast-fading core
// flash, both driven by u_progress going 0 (birth) -> 1 (fully faded).
// Shares the hash/valueNoise/fbm/smoothFalloff building blocks with the
// nebula shader above (same GLSL, just not literally shared source since
// each fragment shader is its own self-contained string).
const EXPLOSION_FRAGMENT_SRC = `
precision mediump float;

uniform vec2 u_resolution;
uniform vec2 u_center;
uniform float u_radius;
uniform float u_progress;
uniform float u_seed;

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
  if (radius <= 0.0) return 0.0;
  if (dist >= radius) return 0.0;
  float t = 1.0 - dist / radius;
  return t * t * (3.0 - 2.0 * t);
}

void main() {
  vec2 fragCoord = vec2(vUv.x, 1.0 - vUv.y) * u_resolution;
  vec2 rel = fragCoord - u_center;
  float dist = length(rel);
  float angle = atan(rel.y, rel.x);

  // The ring expands outward from the center as progress advances, its
  // own width narrowing slightly so it reads as a sharpening shockwave
  // rather than a static soft blob.
  float ringRadius = u_progress * u_radius;
  float ringWidth = u_radius * 0.22 * (1.0 - u_progress * 0.4);
  float ring = smoothFalloff(abs(dist - ringRadius), ringWidth);

  // Angle-dependent turbulence roughens the ring's edge into something
  // jagged/energetic instead of a perfect circle.
  float turb = fbm(vec2(cos(angle), sin(angle)) * 3.5 + u_seed * 17.0 + u_progress * 2.5);
  ring *= 0.55 + 0.45 * turb;

  // A bright core flash at the center, shrinking and fading fast --
  // reads as the initial blast before the shockwave takes over.
  float core = smoothFalloff(dist, u_radius * 0.3 * (1.0 - u_progress));
  core *= (1.0 - u_progress) * (1.0 - u_progress);

  float intensity = clamp(ring + core, 0.0, 1.0);
  float fade = 1.0 - u_progress;
  gl_FragColor = vec4(1.0, 1.0, 1.0, intensity * fade);
}
`;

const MAX_STARS = 12;

// Every star gets a slowly-advected domain-warped fbm swirl clipped to its
// disc (roiling plasma read, brighter toward the limb). Stars flagged
// `ejections` additionally get up to 2 loop-shaped filament flares per star,
// timed by a per-star seeded cycle (fract(t * speed + offset), same
// pure-function-of-time shape as the March-side pulse_speed/pulse_phase
// pattern) so different stars' flares desync. Shares the hash/valueNoise/fbm
// building blocks with the nebula/explosion shaders (not literally shared
// source -- each fragment shader is its own self-contained string).
const STAR_FRAGMENT_SRC = `
precision mediump float;
#define MAX_STARS ${MAX_STARS}

uniform vec2 u_resolution;
uniform float u_time;
uniform int u_starCount;
uniform vec2 u_starPos[MAX_STARS];
uniform float u_starRadius[MAX_STARS];
uniform float u_starSeed[MAX_STARS];
uniform float u_starEjections[MAX_STARS];

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
  if (radius <= 0.0) return 0.0;
  if (dist >= radius) return 0.0;
  float t = 1.0 - dist / radius;
  return t * t * (3.0 - 2.0 * t);
}

vec2 rotate(vec2 v, float a) {
  float c = cos(a);
  float s = sin(a);
  return vec2(c * v.x - s * v.y, s * v.x + c * v.y);
}

// A single loop-shaped coronal filament: anchored at angle baseAngle on
// the rim, stretching out to reach * radius at the cycle's peak and
// curling as it extends (curl bends the target angle proportionally to how
// far out the fragment is), envelope fades in/hold/out across phase.
float filament(vec2 rel, float dist, float radius, float baseAngle, float curlSign, float phase) {
  // Fade in over the first third of the cycle, hold briefly, fade out over
  // the last half -- reads as a flare erupting and subsiding rather than a
  // linear pulse.
  float envelope = smoothstep(0.0, 0.32, phase) * (1.0 - smoothstep(0.55, 1.0, phase));
  if (envelope <= 0.0) return 0.0;

  // Reach and width both kept modest so this reads as a thin curling
  // tongue of plasma, not a soft blob the size of the star itself.
  float reach = radius * (0.35 + 0.55 * envelope);
  float outer = radius + reach;
  // Smooth base instead of a hard dist < radius*0.85 cutoff -- avoids a
  // seam where the filament would otherwise pop in abruptly.
  float baseFade = smoothstep(radius * 0.8, radius * 0.95, dist);
  if (dist > outer || baseFade <= 0.0) return 0.0;

  float ext = clamp((dist - radius) / reach, 0.0, 1.0);
  float curl = curlSign * 0.9 * ext * ext;
  float targetAngle = baseAngle + curl;

  float angle = atan(rel.y, rel.x);
  float angleDiff = mod(angle - targetAngle + 3.14159265, 6.2831853) - 3.14159265;
  // Tapering width: narrow at the base, narrowing further toward the tip.
  float width = 0.32 - 0.2 * ext;
  float angular = exp(-(angleDiff * angleDiff) / (width * width));
  float radialFade = pow(1.0 - ext, 1.6);

  return angular * radialFade * envelope * baseFade;
}

void main() {
  vec2 fragCoord = vec2(vUv.x, 1.0 - vUv.y) * u_resolution;
  float intensity = 0.0;

  for (int i = 0; i < MAX_STARS; i++) {
    if (i >= u_starCount) break;
    vec2 pos = u_starPos[i];
    float radius = u_starRadius[i];
    float seed = u_starSeed[i];
    bool hasEjections = u_starEjections[i] > 0.5;

    vec2 rel = fragCoord - pos;
    float dist = length(rel);
    float maxReach = hasEjections ? radius * 2.0 : radius * 1.05;
    if (dist > maxReach) continue;

    float starIntensity = 0.0;

    if (dist < radius + 1.5) {
      vec2 uv = rel / radius;
      vec2 rotated = rotate(uv, u_time * 0.08 + seed * 6.2831853);
      vec2 warpOffset = vec2(
        fbm(rotated * 2.2 + vec2(seed * 13.0, u_time * 0.05)) - 0.5,
        fbm(rotated * 2.2 + vec2(seed * 29.0, u_time * 0.05 + 5.0)) - 0.5
      ) * 0.5;
      float surface = fbm(rotated * 3.0 + warpOffset + vec2(seed * 7.0, u_time * 0.07));

      // Limb brightening: darker/lower-contrast near the center, brighter
      // toward the edge, so the swirl reads as a lit plasma surface rather
      // than a flat noisy disc.
      float limb = smoothstep(radius * 0.3, radius, dist);
      float shade = mix(0.72, 1.0, mix(surface, 1.0, limb * 0.5));

      // Crisp antialiased disc edge.
      float edge = smoothstep(radius + 1.5, radius - 1.5, dist);
      starIntensity = max(starIntensity, shade * edge);
    }

    if (hasEjections) {
      float period1 = 5.0 + 3.0 * fract(seed * 17.0);
      float phase1 = fract(u_time / period1 + fract(seed * 31.0));
      float baseAngle1 = fract(seed * 53.0) * 6.2831853;
      float f1 = filament(rel, dist, radius, baseAngle1, sign(fract(seed * 71.0) - 0.5), phase1);

      float period2 = 6.0 + 4.0 * fract(seed * 23.0 + 0.5);
      float phase2 = fract(u_time / period2 + fract(seed * 41.0) + 0.5);
      float baseAngle2 = baseAngle1 + 3.14159265 + (fract(seed * 61.0) - 0.5) * 1.5;
      float f2 = filament(rel, dist, radius, baseAngle2, sign(fract(seed * 83.0) - 0.5), phase2);

      starIntensity = max(starIntensity, max(f1, f2));
    }

    intensity = max(intensity, starIntensity);
  }

  gl_FragColor = vec4(1.0, 1.0, 1.0, clamp(intensity, 0.0, 1.0));
}
`;

const __starState = new WeakMap();

function starStateFor(gl) {
  let st = __starState.get(gl);
  if (st !== undefined) return st;

  const program = linkProgram(gl, VERTEX_SRC, STAR_FRAGMENT_SRC);

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
    time: gl.getUniformLocation(program, "u_time"),
    starCount: gl.getUniformLocation(program, "u_starCount"),
    starPos: gl.getUniformLocation(program, "u_starPos"),
    starRadius: gl.getUniformLocation(program, "u_starRadius"),
    starSeed: gl.getUniformLocation(program, "u_starSeed"),
    starEjections: gl.getUniformLocation(program, "u_starEjections"),
  };

  st = { program, buffer, aPosition, uniforms };
  __starState.set(gl, st);
  return st;
}

// Walks a March List(StarGl) into flat Float32Arrays sized MAX_STARS,
// capping silently past that count -- same shape as cloudsToArrays.
function starsToArrays(stars) {
  const pos = new Float32Array(MAX_STARS * 2);
  const radius = new Float32Array(MAX_STARS);
  const seed = new Float32Array(MAX_STARS);
  const ejections = new Float32Array(MAX_STARS);
  let node = stars;
  let count = 0;
  while (node.$ === "Cons" && count < MAX_STARS) {
    const s = node._0;
    pos[count * 2] = s.x;
    pos[count * 2 + 1] = s.y;
    radius[count] = s.radius;
    seed[count] = s.seed;
    ejections[count] = s.ejections ? 1.0 : 0.0;
    count++;
    node = node._1;
  }
  return { pos, radius, seed, ejections, count };
}

const __explosionState = new WeakMap();

function explosionStateFor(gl) {
  let st = __explosionState.get(gl);
  if (st !== undefined) return st;

  const program = linkProgram(gl, VERTEX_SRC, EXPLOSION_FRAGMENT_SRC);

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
    center: gl.getUniformLocation(program, "u_center"),
    radius: gl.getUniformLocation(program, "u_radius"),
    progress: gl.getUniformLocation(program, "u_progress"),
    seed: gl.getUniformLocation(program, "u_seed"),
  };

  st = { program, buffer, aPosition, uniforms };
  __explosionState.set(gl, st);
  return st;
}

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

export function march_webgl_draw_stars(gl, stars, viewW, viewH, t) {
  const st = starStateFor(gl);
  const { pos, radius, seed, ejections, count } = starsToArrays(stars);

  gl.useProgram(st.program);
  gl.bindBuffer(gl.ARRAY_BUFFER, st.buffer);
  gl.enableVertexAttribArray(st.aPosition);
  gl.vertexAttribPointer(st.aPosition, 2, gl.FLOAT, false, 0, 0);

  gl.uniform2f(st.uniforms.resolution, viewW, viewH);
  gl.uniform1f(st.uniforms.time, t);
  gl.uniform1i(st.uniforms.starCount, count);
  gl.uniform2fv(st.uniforms.starPos, pos);
  gl.uniform1fv(st.uniforms.starRadius, radius);
  gl.uniform1fv(st.uniforms.starSeed, seed);
  gl.uniform1fv(st.uniforms.starEjections, ejections);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
}

export function march_webgl_draw_explosion(gl, x, y, radius, progress, seed, viewW, viewH) {
  const st = explosionStateFor(gl);

  gl.useProgram(st.program);
  gl.bindBuffer(gl.ARRAY_BUFFER, st.buffer);
  gl.enableVertexAttribArray(st.aPosition);
  gl.vertexAttribPointer(st.aPosition, 2, gl.FLOAT, false, 0, 0);

  gl.uniform2f(st.uniforms.resolution, viewW, viewH);
  gl.uniform2f(st.uniforms.center, x, y);
  gl.uniform1f(st.uniforms.radius, radius);
  gl.uniform1f(st.uniforms.progress, progress);
  gl.uniform1f(st.uniforms.seed, seed);

  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.drawArrays(gl.TRIANGLES, 0, 6);
}
