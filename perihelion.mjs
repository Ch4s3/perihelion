import { march_float_round, march_float_to_string, march_int_and, march_int_div, march_int_div_euclid, march_int_mod, march_int_mod_euclid, march_int_not, march_int_or, march_int_popcount, march_int_shl, march_int_shr, march_int_xor, march_print, march_string_byte_length, march_string_join, march_string_slice, march_string_split, march_string_to_int, march_unix_time } from "./march_runtime.mjs";

import { march_dom_request_animation_frame as dom_request_animation_frame, march_dom_window_size as dom_window_size, march_dom_pointer_pos as dom_pointer_pos, march_dom_store_set as dom_store_set, march_dom_store_get as dom_store_get, march_dom_key_presses as dom_key_presses, march_dom_taps as dom_taps, march_dom_set_attribute as dom_set_attribute, march_dom_create_element as dom_create_element, march_dom_get_element_by_id as dom_get_element_by_id } from "./march_dom.mjs";
import { march_webgl_canvas_node as webgl_canvas_node, march_webgl_draw_nebula as webgl_draw_nebula, march_webgl_resize as webgl_resize, march_webgl_get_context as webgl_get_context } from "./march_webgl.mjs";
import { march_audio_noise_burst as audio_noise_burst, march_audio_sweep as audio_sweep, march_audio_beep as audio_beep, march_audio_resume as audio_resume, march_audio_create as audio_create } from "./march_audio.mjs";
import { march_canvas_draw_image as canvas_draw_node, march_canvas_set_text_align as canvas_set_text_align, march_canvas_fill_text as canvas_fill_text, march_canvas_stroke as canvas_stroke, march_canvas_fill as canvas_fill, march_canvas_arc as canvas_arc, march_canvas_line_to as canvas_line_to, march_canvas_move_to as canvas_move_to, march_canvas_close_path as canvas_close_path, march_canvas_begin_path as canvas_begin_path, march_canvas_stroke_rect as canvas_stroke_rect, march_canvas_fill_rect as canvas_fill_rect, march_canvas_set_font as canvas_set_font, march_canvas_set_global_alpha as canvas_set_global_alpha, march_canvas_set_line_width as canvas_set_line_width, march_canvas_set_stroke_style as canvas_set_stroke_style, march_canvas_set_fill_style as canvas_set_fill_style, march_canvas_rotate as canvas_rotate, march_canvas_translate as canvas_translate, march_canvas_restore as canvas_restore, march_canvas_save as canvas_save, march_canvas_get_context as canvas_get_context } from "./march_canvas.mjs";


const int_to_string   = { _0: ($_, x) => String(x) };
const bool_to_string  = { _0: ($_, x) => String(x) };
const int_to_float    = { _0: ($_, x) => x };
const float_to_int    = { _0: ($_, x) => Math.trunc(x) };
const float_truncate  = { _0: ($_, x) => Math.trunc(x) };
const string_is_empty = { _0: ($_, x) => x === "" };
const not_bool        = { _0: ($_, x) => !x };
const negate_int      = { _0: ($_, x) => -x };
const negate_float    = { _0: ($_, x) => -x };
const float_abs       = { _0: ($_, x) => Math.abs(x) };
const float_floor     = { _0: ($_, x) => Math.floor(x) };
const float_ceil      = { _0: ($_, x) => Math.ceil(x) };
const float_to_string    = { _0: ($_, x) => march_float_to_string(x) };
const string_length      = { _0: ($_, x) => march_string_byte_length(x) };
const string_byte_length = { _0: ($_, x) => march_string_byte_length(x) };
const int_and = { _0: ($_, a, b) => march_int_and(a, b) };
const int_or = { _0: ($_, a, b) => march_int_or(a, b) };
const int_xor = { _0: ($_, a, b) => march_int_xor(a, b) };
const int_shl = { _0: ($_, a, b) => march_int_shl(a, b) };
const int_shr = { _0: ($_, a, b) => march_int_shr(a, b) };
const int_mod = { _0: ($_, a, b) => march_int_mod(a, b) };
const int_div = { _0: ($_, a, b) => march_int_div(a, b) };
const int_mod_euclid = { _0: ($_, a, b) => march_int_mod_euclid(a, b) };
const int_div_euclid = { _0: ($_, a, b) => march_int_div_euclid(a, b) };
const int_not = { _0: ($_, a) => march_int_not(a) };
const int_popcount = { _0: ($_, a) => march_int_popcount(a) };
const int_abs     = { _0: ($_, a) => Math.abs(a) };
const unix_time   = { _0: ($_) => march_unix_time() };
const float_round = { _0: ($_, a) => march_float_round(a) };
const dom_get_element_by_id$clo = { _0: ($_, p0) => dom_get_element_by_id(p0) };
const dom_create_element$clo = { _0: ($_, p0) => dom_create_element(p0) };
const dom_set_attribute$clo = { _0: ($_, p0, p1, p2) => dom_set_attribute(p0, p1, p2) };
const dom_taps$clo = { _0: ($_, p0) => dom_taps(p0) };
const dom_key_presses$clo = { _0: ($_, ) => dom_key_presses() };
const dom_store_get$clo = { _0: ($_, p0) => dom_store_get(p0) };
const dom_store_set$clo = { _0: ($_, p0, p1) => dom_store_set(p0, p1) };
const dom_pointer_pos$clo = { _0: ($_, p0) => dom_pointer_pos(p0) };
const dom_window_size$clo = { _0: ($_, ) => dom_window_size() };
const dom_request_animation_frame$clo = { _0: ($_, p0) => dom_request_animation_frame(p0) };
const canvas_get_context$clo = { _0: ($_, p0) => canvas_get_context(p0) };
const canvas_save$clo = { _0: ($_, p0) => canvas_save(p0) };
const canvas_restore$clo = { _0: ($_, p0) => canvas_restore(p0) };
const canvas_translate$clo = { _0: ($_, p0, p1, p2) => canvas_translate(p0, p1, p2) };
const canvas_rotate$clo = { _0: ($_, p0, p1) => canvas_rotate(p0, p1) };
const canvas_set_fill_style$clo = { _0: ($_, p0, p1) => canvas_set_fill_style(p0, p1) };
const canvas_set_stroke_style$clo = { _0: ($_, p0, p1) => canvas_set_stroke_style(p0, p1) };
const canvas_set_line_width$clo = { _0: ($_, p0, p1) => canvas_set_line_width(p0, p1) };
const canvas_set_global_alpha$clo = { _0: ($_, p0, p1) => canvas_set_global_alpha(p0, p1) };
const canvas_set_font$clo = { _0: ($_, p0, p1) => canvas_set_font(p0, p1) };
const canvas_fill_rect$clo = { _0: ($_, p0, p1, p2, p3, p4) => canvas_fill_rect(p0, p1, p2, p3, p4) };
const canvas_stroke_rect$clo = { _0: ($_, p0, p1, p2, p3, p4) => canvas_stroke_rect(p0, p1, p2, p3, p4) };
const canvas_begin_path$clo = { _0: ($_, p0) => canvas_begin_path(p0) };
const canvas_close_path$clo = { _0: ($_, p0) => canvas_close_path(p0) };
const canvas_move_to$clo = { _0: ($_, p0, p1, p2) => canvas_move_to(p0, p1, p2) };
const canvas_line_to$clo = { _0: ($_, p0, p1, p2) => canvas_line_to(p0, p1, p2) };
const canvas_arc$clo = { _0: ($_, p0, p1, p2, p3, p4, p5) => canvas_arc(p0, p1, p2, p3, p4, p5) };
const canvas_fill$clo = { _0: ($_, p0) => canvas_fill(p0) };
const canvas_stroke$clo = { _0: ($_, p0) => canvas_stroke(p0) };
const canvas_fill_text$clo = { _0: ($_, p0, p1, p2, p3) => canvas_fill_text(p0, p1, p2, p3) };
const canvas_set_text_align$clo = { _0: ($_, p0, p1) => canvas_set_text_align(p0, p1) };
const canvas_draw_node$clo = { _0: ($_, p0, p1, p2, p3) => canvas_draw_node(p0, p1, p2, p3) };
const audio_create$clo = { _0: ($_, ) => audio_create() };
const audio_resume$clo = { _0: ($_, p0) => audio_resume(p0) };
const audio_beep$clo = { _0: ($_, p0, p1, p2, p3) => audio_beep(p0, p1, p2, p3) };
const audio_sweep$clo = { _0: ($_, p0, p1, p2, p3, p4) => audio_sweep(p0, p1, p2, p3, p4) };
const audio_noise_burst$clo = { _0: ($_, p0, p1, p2) => audio_noise_burst(p0, p1, p2) };
const webgl_get_context$clo = { _0: ($_, p0) => webgl_get_context(p0) };
const webgl_resize$clo = { _0: ($_, p0, p1, p2) => webgl_resize(p0, p1, p2) };
const webgl_draw_nebula$clo = { _0: ($_, p0, p1, p2, p3, p4) => webgl_draw_nebula(p0, p1, p2, p3, p4) };
const webgl_canvas_node$clo = { _0: ($_, p0) => webgl_canvas_node(p0) };

function __eq_Option(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "None": {
      return true;
    }
    case "Some": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Result(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Ok": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Err": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_List(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Nil": {
      return true;
    }
    case "Cons": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Hamt$HEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HEmpty": {
      return true;
    }
    case "HLeaf": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "HBranch": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "HCollision": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Map$Map(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HamtMap": {
      if (!__eq_HEntry(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Map$HEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HEmpty": {
      return true;
    }
    case "HLeaf": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "HBranch": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "HCollision": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_IOList$IOList(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Empty": {
      return true;
    }
    case "Str": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Segments": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Html$Safe(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Safe": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$Method(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Get": {
      return true;
    }
    case "Post": {
      return true;
    }
    case "Put": {
      return true;
    }
    case "Patch": {
      return true;
    }
    case "Delete": {
      return true;
    }
    case "Head": {
      return true;
    }
    case "Options": {
      return true;
    }
    case "Trace": {
      return true;
    }
    case "Connect": {
      return true;
    }
    case "Other": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$Scheme(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SchemeHttp": {
      return true;
    }
    case "SchemeHttps": {
      return true;
    }
  }
  return true;
}

function __eq_Http$Status(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Status": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$Header(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Header": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$UrlError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "InvalidScheme": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "MissingHost": {
      return true;
    }
    case "InvalidPort": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "MalformedUrl": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$Request(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Request": {
      if (!__eq_Method(a._0, b._0)) return false;
      if (!__eq_Scheme(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_Option(a._3, b._3)) return false;
      if (a._4 !== b._4) return false;
      if (!__eq_Option(a._5, b._5)) return false;
      if (!__eq_List(a._6, b._6)) return false;
      if (a._7 !== b._7) return false;
      return true;
    }
  }
  return true;
}

function __eq_Http$Response(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Response": {
      if (!__eq_Status(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpTransport$TransportError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ConnectionRefused": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ConnTimeout": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SendError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RecvError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ConnParseError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Closed": {
      return true;
    }
    case "SchemeNotSupported": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$TransportError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ConnectionRefused": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ConnTimeout": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SendError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RecvError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ConnParseError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Closed": {
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$HttpError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HttpTransportError": {
      if (!__eq_TransportError(a._0, b._0)) return false;
      return true;
    }
    case "StepError": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "TooManyRedirects": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$RequestStepEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RequestStepEntry": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$ResponseStepEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ResponseStepEntry": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$ErrorRecovery(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Recover": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Fail": {
      if (!__eq_HttpError(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$ErrorStepEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ErrorStepEntry": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpClient$Client(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Client": {
      if (!__eq_List(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
  }
  return true;
}

function __eq_Seq$Step(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Continue": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Halt": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Seq$Seq(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Seq": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_File$FileError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NotFound": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Permission": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "IsDirectory": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "NotEmpty": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "IoError": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_File$FileKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RegularFile": {
      return true;
    }
    case "Directory": {
      return true;
    }
    case "Symlink": {
      return true;
    }
    case "OtherKind": {
      return true;
    }
  }
  return true;
}

function __eq_File$FileStat(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "FileStat": {
      if (a._0 !== b._0) return false;
      if (!__eq_FileKind(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
  }
  return true;
}

function __eq_File$Seq(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Seq": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Sort$Heap(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HLeaf": {
      return true;
    }
    case "HNode": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Heap(a._2, b._2)) return false;
      if (!__eq_Heap(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Csv$CsvError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "FileError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CsvParseError": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Csv$CsvRow(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "CsvEof": {
      return true;
    }
    case "Row": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_WebSocket$WsFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TextFrame": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "BinaryFrame": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Ping": {
      return true;
    }
    case "Pong": {
      return true;
    }
    case "Close": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_WebSocket$WsSocket(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "WsSocket": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_WebSocket$SelectResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "WsData": {
      if (!__eq_WsFrame(a._0, b._0)) return false;
      return true;
    }
    case "ActorMsg": {
      return true;
    }
    case "Timeout": {
      return true;
    }
  }
  return true;
}

function __eq_WebSocket$Header(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Header": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_WebSocket$Upgrade(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NoUpgrade": {
      return true;
    }
    case "WebSocketUpgrade": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_WebSocket$Conn(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Conn": {
      if (a._0 !== b._0) return false;
      if (!__eq_Atom(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      if (a._4 !== b._4) return false;
      if (!__eq_List(a._5, b._5)) return false;
      if (a._6 !== b._6) return false;
      if (a._7 !== b._7) return false;
      if (!__eq_List(a._8, b._8)) return false;
      if (a._9 !== b._9) return false;
      if (a._10 !== b._10) return false;
      if (!__eq_List(a._11, b._11)) return false;
      if (!__eq_Upgrade(a._12, b._12)) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpServer$Upgrade(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NoUpgrade": {
      return true;
    }
    case "WebSocketUpgrade": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpServer$Conn(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Conn": {
      if (a._0 !== b._0) return false;
      if (!__eq_Atom(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      if (a._4 !== b._4) return false;
      if (!__eq_List(a._5, b._5)) return false;
      if (a._6 !== b._6) return false;
      if (a._7 !== b._7) return false;
      if (!__eq_List(a._8, b._8)) return false;
      if (a._9 !== b._9) return false;
      if (a._10 !== b._10) return false;
      if (!__eq_List(a._11, b._11)) return false;
      if (!__eq_Upgrade(a._12, b._12)) return false;
      return true;
    }
  }
  return true;
}

function __eq_HttpServer$Server(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Server": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
  }
  return true;
}

function __eq_Set$SEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SEmpty": {
      return true;
    }
    case "SLeaf": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "SBranch": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "SCollision": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Set$Set(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HamtSet": {
      if (a._0 !== b._0) return false;
      if (!__eq_SEntry(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_HashMap$HEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HEmpty": {
      return true;
    }
    case "HLeaf": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "HBranch": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "HCollision": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_HashMap$HashMap(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "HamtHashMap": {
      if (!__eq_HEntry(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Array$TrieNode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TrieEmpty": {
      return true;
    }
    case "TrieLeaf": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "TrieBranch": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Array$PVec(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PVec": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_TrieNode(a._2, b._2)) return false;
      if (!__eq_List(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_BigInt$BigInt(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "BigInt": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Decimal$Decimal(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Decimal": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Duration$Duration(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Duration": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Bytes$Bytes(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Bytes": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Msgpack$Value(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Null": {
      return true;
    }
    case "Bool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Int": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Str": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Bin": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "Array": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "Map": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Toml$TomlValue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TStr": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TInt": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TFloat": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TNull": {
      return true;
    }
    case "TDatetime": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TArray": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "TTable": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Toml$TomlError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TomlError": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Xml$XmlNode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Element": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      return true;
    }
    case "Text": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "CData": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Comment": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ProcessingInstruction": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Xml$XmlDoc(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "XmlDoc": {
      if (!__eq_Option(a._0, b._0)) return false;
      if (!__eq_XmlNode(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Xml$XmlError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "XmlError": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Xml$XmlFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "XmlFrame": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Yaml$YamlValue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "YStr": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "YInt": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "YFloat": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "YBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "YNull": {
      return true;
    }
    case "YSeq": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "YMap": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Yaml$YamlError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "YamlError": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Socket$SocketError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ConnectionFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "WriteFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RecvFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Dns$DnsError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NotFound": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ResolveError": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Process$ProcessResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ProcessResult": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Process$LiveProcess(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LiveProcess": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_System$ProcessResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ProcessResult": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Cluster$NodeAddr(a, b) {
  if (a.host !== b.host) return false;
  if (a.port !== b.port) return false;
  return true;
}

function __eq_ClusterLoad$NodeLoad(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (a.cpu_count !== b.cpu_count) return false;
  if (a.cpu_load_milli !== b.cpu_load_milli) return false;
  if (a.mem_total_mb !== b.mem_total_mb) return false;
  if (a.mem_avail_mb !== b.mem_avail_mb) return false;
  if (a.sampled_at !== b.sampled_at) return false;
  return true;
}

function __eq_Logger$Level(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Debug": {
      return true;
    }
    case "Info": {
      return true;
    }
    case "Warn": {
      return true;
    }
    case "Error": {
      return true;
    }
  }
  return true;
}

function __eq_Logger$LogValue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LStr": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LInt": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LFloat": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LAtom": {
      if (!__eq_Atom(a._0, b._0)) return false;
      return true;
    }
    case "LNull": {
      return true;
    }
  }
  return true;
}

function __eq_Logger$LogField(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LogField": {
      if (a._0 !== b._0) return false;
      if (!__eq_LogValue(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Logger$LogEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LogEntry": {
      if (!__eq_Level(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (!__eq_List(a._4, b._4)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Logger$Appender(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Appender": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Flow$Stage(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Stage": {
      if (!__eq_Seq(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Json$JsonValue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Null": {
      return true;
    }
    case "Bool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Number": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Str": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Array": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "Object": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Json$JsonPath(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Key": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Index": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Regex$RegexAtom(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RALit": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RAAny": {
      return true;
    }
    case "RAClass": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "RADigit": {
      return true;
    }
    case "RAWord": {
      return true;
    }
    case "RASpace": {
      return true;
    }
    case "RANotDigit": {
      return true;
    }
    case "RANotWord": {
      return true;
    }
    case "RANotSpace": {
      return true;
    }
  }
  return true;
}

function __eq_Regex$RegexQuant(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "QOne": {
      return true;
    }
    case "QZeroOrMore": {
      return true;
    }
    case "QOneOrMore": {
      return true;
    }
    case "QOptional": {
      return true;
    }
  }
  return true;
}

function __eq_Regex$RegexItem(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RegexItem": {
      if (!__eq_RegexAtom(a._0, b._0)) return false;
      if (!__eq_RegexQuant(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Regex$RegexPattern(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RegexPattern": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Regex$RegexOpts(a, b) {
  if (a.case_insensitive !== b.case_insensitive) return false;
  if (a.multiline !== b.multiline) return false;
  return true;
}

function __eq_DateTime$Date(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Date": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_DateTime$Time(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Time": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_DateTime$DateTime(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DateTime": {
      if (!__eq_Date(a._0, b._0)) return false;
      if (!__eq_Time(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DateTime$Tz(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Tz": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_DateTime$LocalDateTime(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LocalDateTime": {
      if (!__eq_DateTime(a._0, b._0)) return false;
      if (!__eq_Tz(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Queue$Queue(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Queue": {
      if (!__eq_List(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Random$Rng(a, b) {
  if (a.s0 !== b.s0) return false;
  if (a.s1 !== b.s1) return false;
  if (a.s2 !== b.s2) return false;
  if (a.s3 !== b.s3) return false;
  return true;
}

function __eq_Gen$Thunk(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Thunk": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Gen$GenTree(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GenTree": {
      if (a._0 !== b._0) return false;
      if (!__eq_Thunk(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Gen$GenRng(a, b) {
  if (a.s0 !== b.s0) return false;
  if (a.s1 !== b.s1) return false;
  if (a.s2 !== b.s2) return false;
  if (a.s3 !== b.s3) return false;
  return true;
}

function __eq_Gen$Generator(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Generator": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Check$CheckConfig(a, b) {
  if (a.num_runs !== b.num_runs) return false;
  if (!__eq_Option(a.seed, b.seed)) return false;
  if (a.max_shrink_steps !== b.max_shrink_steps) return false;
  if (a.max_size !== b.max_size) return false;
  return true;
}

function __eq_Stats$QuantileMethod(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "InvertedCdf": {
      return true;
    }
    case "AveragedInvertedCdf": {
      return true;
    }
    case "ClosestObservation": {
      return true;
    }
    case "InterpolatedInvertedCdf": {
      return true;
    }
    case "Hazen": {
      return true;
    }
    case "Weibull": {
      return true;
    }
    case "Linear": {
      return true;
    }
    case "MedianUnbiased": {
      return true;
    }
    case "NormalUnbiased": {
      return true;
    }
  }
  return true;
}

function __eq_Plot$Color(a, b) {
  if (a.r !== b.r) return false;
  if (a.g !== b.g) return false;
  if (a.b !== b.b) return false;
  return true;
}

function __eq_Plot$Style(a, b) {
  if (!__eq_Color(a.line_color, b.line_color)) return false;
  if (!__eq_Color(a.fill_color, b.fill_color)) return false;
  if (a.line_width !== b.line_width) return false;
  if (a.point_radius !== b.point_radius) return false;
  if (a.font_size !== b.font_size) return false;
  if (a.opacity !== b.opacity) return false;
  return true;
}

function __eq_Plot$SeriesKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Line": {
      return true;
    }
    case "Scatter": {
      return true;
    }
    case "Bar": {
      return true;
    }
    case "HistogramSeries": {
      return true;
    }
  }
  return true;
}

function __eq_Plot$Series(a, b) {
  if (!__eq_SeriesKind(a.kind, b.kind)) return false;
  if (!__eq_List(a.xs, b.xs)) return false;
  if (!__eq_List(a.ys, b.ys)) return false;
  if (!__eq_Option(a.label, b.label)) return false;
  if (!__eq_Style(a.style, b.style)) return false;
  return true;
}

function __eq_Plot$Axis(a, b) {
  if (!__eq_Option(a.label, b.label)) return false;
  if (!__eq_Option(a.data_min, b.data_min)) return false;
  if (!__eq_Option(a.data_max, b.data_max)) return false;
  if (a.tick_count !== b.tick_count) return false;
  return true;
}

function __eq_Plot$Plot(a, b) {
  if (!__eq_Option(a.title, b.title)) return false;
  if (!__eq_List(a.series, b.series)) return false;
  if (!__eq_Axis(a.x_axis, b.x_axis)) return false;
  if (!__eq_Axis(a.y_axis, b.y_axis)) return false;
  if (a.width !== b.width) return false;
  if (a.height !== b.height) return false;
  if (a.margin !== b.margin) return false;
  if (a.show_legend !== b.show_legend) return false;
  if (a.show_grid !== b.show_grid) return false;
  return true;
}

function __eq_DataFrame$Value(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "IntVal": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "FloatVal": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "StrVal": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "BoolVal": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "NullVal": {
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$Column(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "IntCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_NativeIntArr(a._1, b._1)) return false;
      return true;
    }
    case "FloatCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_NativeFloatArr(a._1, b._1)) return false;
      return true;
    }
    case "StrCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_TypedArray(a._1, b._1)) return false;
      return true;
    }
    case "BoolCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_TypedArray(a._1, b._1)) return false;
      return true;
    }
    case "NullableIntCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_NativeIntArr(a._1, b._1)) return false;
      if (!__eq_TypedArray(a._2, b._2)) return false;
      return true;
    }
    case "NullableFloatCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_NativeFloatArr(a._1, b._1)) return false;
      if (!__eq_TypedArray(a._2, b._2)) return false;
      return true;
    }
    case "NullableStrCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_TypedArray(a._1, b._1)) return false;
      if (!__eq_TypedArray(a._2, b._2)) return false;
      return true;
    }
    case "NullableBoolCol": {
      if (a._0 !== b._0) return false;
      if (!__eq_TypedArray(a._1, b._1)) return false;
      if (!__eq_TypedArray(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$Row(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Row": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$DataFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DataFrame": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$ColumnBuilder(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "IntBuilder": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "FloatBuilder": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "StrBuilder": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "BoolBuilder": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "NullBuilder": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$ColExpr(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Col": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LitInt": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LitFloat": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LitStr": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "LitBool": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Eq": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Neq": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Lt": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Lte": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Gt": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Gte": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "And": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Or": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Not": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      return true;
    }
    case "Add": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Sub": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Mul": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "Div": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "StrContains": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "StrStartsWith": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "StrEndsWith": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "IsNull": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      return true;
    }
    case "IsNotNull": {
      if (!__eq_ColExpr(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$SortDir(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Asc": {
      return true;
    }
    case "Desc": {
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$JoinKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Inner": {
      return true;
    }
    case "Left": {
      return true;
    }
    case "Right": {
      return true;
    }
    case "Outer": {
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$Plan(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Source": {
      if (!__eq_DataFrame(a._0, b._0)) return false;
      return true;
    }
    case "Select": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "Filter": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (!__eq_ColExpr(a._1, b._1)) return false;
      return true;
    }
    case "WithColumn": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "SortBy": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "Limit": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Offset": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Rename": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "DropCols": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
    case "Join": {
      if (!__eq_Plan(a._0, b._0)) return false;
      if (!__eq_Plan(a._1, b._1)) return false;
      if (!__eq_List(a._2, b._2)) return false;
      if (!__eq_JoinKind(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$LazyFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LazyFrame": {
      if (!__eq_Plan(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$CsvWriteOpts(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "CsvWriteOpts": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$AggExpr(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Sum": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Mean": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Min": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Max": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Count": {
      return true;
    }
    case "CountDistinct": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Std": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Variance": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "First": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Last": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Median": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "AggAs": {
      if (!__eq_AggExpr(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$GroupKey(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GroupKey": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$GroupedFrame(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GroupedFrame": {
      if (!__eq_DataFrame(a._0, b._0)) return false;
      if (!__eq_List(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$ColStats(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ColStats": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_Option(a._3, b._3)) return false;
      if (!__eq_Option(a._4, b._4)) return false;
      if (!__eq_Option(a._5, b._5)) return false;
      if (!__eq_Option(a._6, b._6)) return false;
      if (!__eq_Option(a._7, b._7)) return false;
      if (!__eq_Option(a._8, b._8)) return false;
      if (!__eq_Option(a._9, b._9)) return false;
      return true;
    }
  }
  return true;
}

function __eq_DataFrame$WindowExpr(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "RowNum": {
      return true;
    }
    case "Rank": {
      if (a._0 !== b._0) return false;
      if (!__eq_SortDir(a._1, b._1)) return false;
      return true;
    }
    case "DenseRank": {
      if (a._0 !== b._0) return false;
      if (!__eq_SortDir(a._1, b._1)) return false;
      return true;
    }
    case "RunningSum": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "RunningMean": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Lag": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Value(a._2, b._2)) return false;
      return true;
    }
    case "Lead": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Value(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Tls$TlsVersion(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Tls12": {
      return true;
    }
    case "Tls13": {
      return true;
    }
  }
  return true;
}

function __eq_Tls$TlsError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TlsHandshakeFailed": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TlsCertError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TlsReadError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TlsWriteError": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TlsContextError": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Tls$TlsConfig(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TlsConfig": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      if (!__eq_TlsVersion(a._4, b._4)) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
  }
  return true;
}

function __eq_Tls$TlsCtx(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TlsCtx": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Tls$TlsConn(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "TlsConn": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_UUID$UUID(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "UUID": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$Socket(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Socket": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      if (a._4 !== b._4) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$HandleResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Reply": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "NoReply": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "Stop": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$ChannelMailbox(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ChannelIn": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "ChannelBroadcast": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "ChannelBroadcastFrom": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
    case "ChannelPush": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "ChannelLeave": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "ChannelStop": {
      return true;
    }
  }
  return true;
}

function __eq_Channel$PubSubMsg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PubSubSubscribe": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "PubSubUnsubscribe": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "PubSubBroadcast": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$BroadcastMsg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "BroadcastMsg": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$LeaveReason(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "NormalLeave": {
      return true;
    }
    case "Disconnect": {
      return true;
    }
    case "Kicked": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$ChannelRoute(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ChannelRoute": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Channel$ChannelMsg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ChannelMsg": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      return true;
    }
  }
  return true;
}

function __eq_PubSub$PubSubState(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PubSubState": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_ChannelServer$JoinResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "JoinOk": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "JoinErr": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_ChannelServer$ChannelConfig(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ChannelConfig": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
  }
  return true;
}

function __eq_ChannelSocket$SocketConfig(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SocketConfig": {
      if (a._0 !== b._0) return false;
      if (!__eq_List(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_List(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_ChannelSocket$ActiveChannels(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ActiveChannels": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Presence$PresenceMeta(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PresenceMeta": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Presence$PresenceEntry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PresenceEntry": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Presence$PresenceState(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PresenceState": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Cli$FlagArity(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "BoolFlag": {
      return true;
    }
    case "ValueFlag": {
      return true;
    }
  }
  return true;
}

function __eq_Cli$FlagSpec(a, b) {
  if (a.long !== b.long) return false;
  if (!__eq_Option(a.short, b.short)) return false;
  if (!__eq_FlagArity(a.arity, b.arity)) return false;
  if (!__eq_Option(a.default, b.default)) return false;
  if (a.required !== b.required) return false;
  if (a.help !== b.help) return false;
  return true;
}

function __eq_Cli$CliError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "UnknownFlag": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "MissingValue": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "MissingRequired": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_Cli$ParsedArgs(a, b) {
  if (!__eq_List(a.values, b.values)) return false;
  if (!__eq_List(a.positional, b.positional)) return false;
  return true;
}

function __eq_OrderedMap$Tree(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Leaf": {
      return true;
    }
    case "Node": {
      if (!__eq_Tree(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_Tree(a._3, b._3)) return false;
      if (a._4 !== b._4) return false;
      return true;
    }
  }
  return true;
}

function __eq_SortedSet$Tree(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Leaf": {
      return true;
    }
    case "Node": {
      if (!__eq_Tree(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Tree(a._2, b._2)) return false;
      if (a._3 !== b._3) return false;
      return true;
    }
  }
  return true;
}

function __eq_RRB$Vec(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Vec": {
      if (!__eq_Array(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_RRB$Slice(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Slice": {
      if (!__eq_Array(a._0, b._0)) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
  }
  return true;
}

function __eq_Uri$URI(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "URI": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (!__eq_Option(a._2, b._2)) return false;
      if (a._3 !== b._3) return false;
      if (a._4 !== b._4) return false;
      if (a._5 !== b._5) return false;
      return true;
    }
  }
  return true;
}

function __eq_Handle$Handle(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Handle": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_VectorClock$VectorClock(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "VectorClock": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_VectorClock$ClockOrder(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Before": {
      return true;
    }
    case "After": {
      return true;
    }
    case "Concurrent": {
      return true;
    }
    case "Equal": {
      return true;
    }
  }
  return true;
}

function __eq_CRDT$GCounter$T(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "GCounter": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_CRDT$PNCounter$T(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PNCounter": {
      if (!__eq_Map(a._0, b._0)) return false;
      if (!__eq_Map(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_CRDT$LWWRegister$T(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "LWWRegister": {
      if (a._0 !== b._0) return false;
      if (!__eq_VectorClock(a._1, b._1)) return false;
      return true;
    }
  }
  return true;
}

function __eq_CRDT$ORSet$T(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ORSet": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Merkle$MerkleTree(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "MLeaf": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "MBranch": {
      if (a._0 !== b._0) return false;
      if (!__eq_MerkleTree(a._1, b._1)) return false;
      if (!__eq_MerkleTree(a._2, b._2)) return false;
      return true;
    }
  }
  return true;
}

function __eq_NodeIdentity$Identity(a, b) {
  if (a.name !== b.name) return false;
  if (a.node_id !== b.node_id) return false;
  if (a.incarnation !== b.incarnation) return false;
  return true;
}

function __eq_Handshake$Hello(a, b) {
  if (!__eq_NodeIdentity$Identity(a.identity, b.identity)) return false;
  if (a.nonce !== b.nonce) return false;
  return true;
}

function __eq_GlobalPid$Pid(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (a.local_pid !== b.local_pid) return false;
  if (a.creation !== b.creation) return false;
  return true;
}

function __eq_RemoteCall$RemoteRef(a, b) {
  if (a.module_name !== b.module_name) return false;
  if (a.fn_name !== b.fn_name) return false;
  if (a.sig_hash !== b.sig_hash) return false;
  if (a.impl_hash !== b.impl_hash) return false;
  return true;
}

function __eq_RemoteCall$CallError(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "DeadlineExceeded": {
      return true;
    }
    case "NoConnection": {
      return true;
    }
    case "RemoteExit": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "TypeMismatch": {
      return true;
    }
    case "VersionSkew": {
      return true;
    }
    case "NoTarget": {
      return true;
    }
  }
  return true;
}

function __eq_RemoteCall$Verdict(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Accept": {
      return true;
    }
    case "Reject": {
      if (!__eq_CallError(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_RemoteCall$ReplyResult(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Returned": {
      if (!__eq_List(a._0, b._0)) return false;
      return true;
    }
    case "Failed": {
      if (!__eq_CallError(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_RemoteCall$CallRequest(a, b) {
  if (!__eq_RemoteRef(a.fref, b.fref)) return false;
  if (!__eq_List(a.args, b.args)) return false;
  if (!__eq_Pid(a.reply_to, b.reply_to)) return false;
  if (a.deadline !== b.deadline) return false;
  if (a.correlation !== b.correlation) return false;
  return true;
}

function __eq_RemoteCall$CallReply(a, b) {
  if (a.correlation !== b.correlation) return false;
  if (!__eq_ReplyResult(a.result, b.result)) return false;
  return true;
}

function __eq_NodeRpc$Target(a, b) {
  if (a.sig_hash !== b.sig_hash) return false;
  if (a.impl_hash !== b.impl_hash) return false;
  if (a.invoke !== b.invoke) return false;
  return true;
}

function __eq_NodeRpc$Targets(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Targets": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_PeerRegistry$Peer(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (!__eq_NodeIdentity$Identity(a.identity, b.identity)) return false;
  if (a.fd !== b.fd) return false;
  return true;
}

function __eq_PeerRegistry$Registry(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Registry": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Membership$MemberStatus(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Alive": {
      return true;
    }
    case "Suspect": {
      return true;
    }
    case "Dead": {
      return true;
    }
  }
  return true;
}

function __eq_Membership$Member(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (!__eq_MemberStatus(a.status, b.status)) return false;
  if (a.incarnation !== b.incarnation) return false;
  return true;
}

function __eq_Membership$Members(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Members": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Swim$Config(a, b) {
  if (a.ack_timeout_ms !== b.ack_timeout_ms) return false;
  if (a.suspect_timeout_ms !== b.suspect_timeout_ms) return false;
  if (a.indirect_k !== b.indirect_k) return false;
  return true;
}

function __eq_Swim$Probe(a, b) {
  if (a.target !== b.target) return false;
  if (a.sent_at !== b.sent_at) return false;
  if (a.indirect_sent !== b.indirect_sent) return false;
  if (a.acked !== b.acked) return false;
  return true;
}

function __eq_Swim$State(a, b) {
  if (a.me !== b.me) return false;
  if (a.incarnation !== b.incarnation) return false;
  if (!__eq_Members(a.members, b.members)) return false;
  if (!__eq_Config(a.config, b.config)) return false;
  if (!__eq_Option(a.probe, b.probe)) return false;
  if (!__eq_Map(a.suspect_deadlines, b.suspect_deadlines)) return false;
  return true;
}

function __eq_Swim$Action(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SendPing": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SendPingReq": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "Gossip": {
      if (!__eq_Member(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_SwimDriver$State(a, b) {
  if (!__eq_Swim$State(a.swim, b.swim)) return false;
  if (!__eq_Random$Rng(a.rng, b.rng)) return false;
  if (a.period_ms !== b.period_ms) return false;
  if (a.period_end !== b.period_end) return false;
  if (!__eq_Map(a.peer_loads, b.peer_loads)) return false;
  if (a.anti_entropy_next !== b.anti_entropy_next) return false;
  return true;
}

function __eq_SwimDriver$Event(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "PingAck": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "GossipFrame": {
      if (!__eq_Member(a._0, b._0)) return false;
      return true;
    }
    case "GossipWithLoad": {
      if (!__eq_Member(a._0, b._0)) return false;
      if (!__eq_NodeLoad(a._1, b._1)) return false;
      return true;
    }
    case "PeerDown": {
      if (a._0 !== b._0) return false;
      return true;
    }
  }
  return true;
}

function __eq_SwimDriver$WireMsg(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "SwimPing": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SwimPingAck": {
      if (a._0 !== b._0) return false;
      return true;
    }
    case "SwimPingReq": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "SwimGossip": {
      if (a._0 !== b._0) return false;
      if (!__eq_MemberStatus(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "SwimGossipLoad": {
      if (a._0 !== b._0) return false;
      if (!__eq_MemberStatus(a._1, b._1)) return false;
      if (a._2 !== b._2) return false;
      if (!__eq_NodeLoad(a._3, b._3)) return false;
      return true;
    }
  }
  return true;
}

function __eq_GlobalRegistry$Entry(a, b) {
  if (a.node_id !== b.node_id) return false;
  if (a.pid !== b.pid) return false;
  if (!__eq_VectorClock(a.clock, b.clock)) return false;
  if (a.present !== b.present) return false;
  return true;
}

function __eq_GlobalRegistry$Names(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Names": {
      if (!__eq_Map(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Dom$Node(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_Dom$Event(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_Canvas$Context(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_Canvas$Image(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_Audio$Ctx(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_WebGL$Context(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
  }
  return true;
}

function __eq_WebGL$Cloud(a, b) {
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  if (a.radius !== b.radius) return false;
  if (a.strength !== b.strength) return false;
  if (a.seed !== b.seed) return false;
  return true;
}

function __eq_Perihelion$Combat$AsteroidMode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "AsteroidDrifting": {
      return true;
    }
    case "AsteroidOrbiting": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Perihelion$Combat$Asteroid(a, b) {
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  if (a.vx !== b.vx) return false;
  if (a.vy !== b.vy) return false;
  if (a.radius !== b.radius) return false;
  if (a.shape_seed !== b.shape_seed) return false;
  if (!__eq_AsteroidMode(a.mode, b.mode)) return false;
  return true;
}

function __eq_Perihelion$Combat$ShipMode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "ShipOrbiting": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
    case "ShipFlying": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Perihelion$Combat$Ship(a, b) {
  if (a.star_idx !== b.star_idx) return false;
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  if (!__eq_ShipMode(a.mode, b.mode)) return false;
  if (a.fire_cooldown !== b.fire_cooldown) return false;
  if (a.idle_timer !== b.idle_timer) return false;
  if (a.hunter !== b.hunter) return false;
  return true;
}

function __eq_Perihelion$Combat$Shot(a, b) {
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  if (a.vx !== b.vx) return false;
  if (a.vy !== b.vy) return false;
  if (a.ttl !== b.ttl) return false;
  if (a.homing !== b.homing) return false;
  if (a.star_killer !== b.star_killer) return false;
  if (a.target_x !== b.target_x) return false;
  if (a.target_y !== b.target_y) return false;
  return true;
}

function __eq_Perihelion$Combat$Pickup(a, b) {
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  if (a.ttl !== b.ttl) return false;
  if (!__eq_Perihelion$Upgrades$UpgradeKind(a.kind, b.kind)) return false;
  return true;
}

function __eq_Perihelion$Core$Orbit(a, b) {
  if (a.radius !== b.radius) return false;
  if (a.speed_mult !== b.speed_mult) return false;
  return true;
}

function __eq_Perihelion$Core$Star(a, b) {
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  if (a.radius !== b.radius) return false;
  if (a.capture_radius !== b.capture_radius) return false;
  if (a.speed_mult !== b.speed_mult) return false;
  if (!__eq_List(a.orbits, b.orbits)) return false;
  return true;
}

function __eq_Perihelion$Core$BallMode(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Orbiting": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      if (a._2 !== b._2) return false;
      return true;
    }
    case "Flying": {
      if (a._0 !== b._0) return false;
      if (a._1 !== b._1) return false;
      return true;
    }
  }
  return true;
}

function __eq_Perihelion$Core$Phase(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Ready": {
      return true;
    }
    case "Playing": {
      return true;
    }
    case "Over": {
      return true;
    }
    case "Milestone": {
      return true;
    }
  }
  return true;
}

function __eq_Perihelion$Core$RunRecord(a, b) {
  if (a.score !== b.score) return false;
  if (a.stars !== b.stars) return false;
  if (a.max_mult !== b.max_mult) return false;
  return true;
}

function __eq_Perihelion$Core$Game(a, b) {
  if (a.seed !== b.seed) return false;
  if (!__eq_Phase(a.phase, b.phase)) return false;
  if (a.ball_x !== b.ball_x) return false;
  if (a.ball_y !== b.ball_y) return false;
  if (!__eq_BallMode(a.mode, b.mode)) return false;
  if (!__eq_List(a.stars, b.stars)) return false;
  if (a.current !== b.current) return false;
  if (a.score !== b.score) return false;
  if (a.best !== b.best) return false;
  if (a.camera_y !== b.camera_y) return false;
  if (a.camera_x !== b.camera_x) return false;
  if (!__eq_Random$Rng(a.rng, b.rng)) return false;
  if (!__eq_List(a.asteroids, b.asteroids)) return false;
  if (!__eq_List(a.ships, b.ships)) return false;
  if (!__eq_List(a.player_shots, b.player_shots)) return false;
  if (!__eq_List(a.enemy_shots, b.enemy_shots)) return false;
  if (!__eq_List(a.pickups, b.pickups)) return false;
  if (a.shield !== b.shield) return false;
  if (a.multiplier !== b.multiplier) return false;
  if (a.max_mult !== b.max_mult) return false;
  if (a.ship_kill_streak !== b.ship_kill_streak) return false;
  if (a.asteroid_kill_streak !== b.asteroid_kill_streak) return false;
  if (!__eq_List(a.owned_weapons, b.owned_weapons)) return false;
  if (a.active_weapon_idx !== b.active_weapon_idx) return false;
  if (a.fire_rate_stacks !== b.fire_rate_stacks) return false;
  if (a.bullet_ward !== b.bullet_ward) return false;
  if (a.deflector_plating !== b.deflector_plating) return false;
  if (a.shield_reinforced !== b.shield_reinforced) return false;
  if (!__eq_Option(a.special, b.special)) return false;
  if (a.special_charges !== b.special_charges) return false;
  if (a.starkiller_target_offset !== b.starkiller_target_offset) return false;
  if (a.starkiller_cooldown !== b.starkiller_cooldown) return false;
  if (!__eq_List(a.milestone_choices, b.milestone_choices)) return false;
  if (a.stars_chained !== b.stars_chained) return false;
  if (a.loop_angle !== b.loop_angle) return false;
  if (a.fire_cooldown !== b.fire_cooldown) return false;
  if (a.spawn_timer !== b.spawn_timer) return false;
  if (!__eq_List(a.runs, b.runs)) return false;
  if (a.view_w !== b.view_w) return false;
  if (a.view_h !== b.view_h) return false;
  if (!__eq_List(a.fx_bursts, b.fx_bursts)) return false;
  if (!__eq_Option(a.capture_flash, b.capture_flash)) return false;
  return true;
}

function __eq_Perihelion$Nebula$Cloud(a, b) {
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  if (a.radius !== b.radius) return false;
  if (a.strength !== b.strength) return false;
  return true;
}

function __eq_Perihelion$Upgrades$WeaponKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "Base": {
      return true;
    }
    case "Homing": {
      return true;
    }
    case "Spread": {
      return true;
    }
    case "StarKiller": {
      return true;
    }
  }
  return true;
}

function __eq_Perihelion$Upgrades$SpecialKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "StarThrust": {
      return true;
    }
    case "StarJump": {
      return true;
    }
    case "TrajectoryPreview": {
      return true;
    }
  }
  return true;
}

function __eq_Perihelion$Upgrades$UpgradeKind(a, b) {
  if (a.$ !== b.$) return false;
  switch (a.$) {
    case "OffenseWeapon": {
      if (!__eq_WeaponKind(a._0, b._0)) return false;
      return true;
    }
    case "OffenseFireRate": {
      return true;
    }
    case "DefenseBulletWard": {
      return true;
    }
    case "DefenseDeflector": {
      return true;
    }
    case "DefenseShield": {
      return true;
    }
    case "SpecialItem": {
      if (!__eq_SpecialKind(a._0, b._0)) return false;
      return true;
    }
  }
  return true;
}

function __eq_Particle(a, b) {
  if (a.x !== b.x) return false;
  if (a.y !== b.y) return false;
  if (a.vx !== b.vx) return false;
  if (a.vy !== b.vy) return false;
  if (a.life !== b.life) return false;
  if (a.max_life !== b.max_life) return false;
  return true;
}

function __eq_Fx(a, b) {
  if (!__eq_List(a.trail, b.trail)) return false;
  if (a.t !== b.t) return false;
  if (!__eq_List(a.particles, b.particles)) return false;
  if (!__eq_Option(a.flash, b.flash)) return false;
  if (!__eq_Audio$Ctx(a.actx, b.actx)) return false;
  if (a.muted !== b.muted) return false;
  if (!__eq_Option(a.gl, b.gl)) return false;
  if (!__eq_Option(a.player_sprite, b.player_sprite)) return false;
  return true;
}

function Random$mix32(x) {
  {
    const x$sh1 = (() => {
      {
        const $t15536 = (x + 2654435769);
        return march_int_and($t15536, 4294967295);
      }
    })();
    {
      const x$sh2 = (() => {
        {
          const $t15538 = (() => {
            {
              const $t15537 = march_int_shr(x$sh1, 16);
              return march_int_xor(x$sh1, $t15537);
            }
          })();
          {
            const xh_i9872 = march_int_shr($t15538, 16);
            {
              const xl_i9873 = march_int_and($t15538, 65535);
              {
                const $t15527_i9878 = (() => {
                  {
                    const $t15525_i9876 = (() => {
                      {
                        const $t15524_i9875 = (() => {
                          {
                            const $t15523_i9874 = (xh_i9872 * 569420461);
                            return march_int_and($t15523_i9874, 65535);
                          }
                        })();
                        return ($t15524_i9875 * 65536);
                      }
                    })();
                    {
                      const $t15526_i9877 = (xl_i9873 * 569420461);
                      return ($t15525_i9876 + $t15526_i9877);
                    }
                  }
                })();
                return march_int_and($t15527_i9878, 4294967295);
              }
            }
          }
        }
      })();
      {
        const x$sh3 = (() => {
          {
            const $t15540 = (() => {
              {
                const $t15539 = march_int_shr(x$sh2, 15);
                return march_int_xor(x$sh2, $t15539);
              }
            })();
            {
              const xh_i9861 = march_int_shr($t15540, 16);
              {
                const xl_i9862 = march_int_and($t15540, 65535);
                {
                  const $t15527_i9867 = (() => {
                    {
                      const $t15525_i9865 = (() => {
                        {
                          const $t15524_i9864 = (() => {
                            {
                              const $t15523_i9863 = (xh_i9861 * 1935289751);
                              return march_int_and($t15523_i9863, 65535);
                            }
                          })();
                          return ($t15524_i9864 * 65536);
                        }
                      })();
                      {
                        const $t15526_i9866 = (xl_i9862 * 1935289751);
                        return ($t15525_i9865 + $t15526_i9866);
                      }
                    }
                  })();
                  return march_int_and($t15527_i9867, 4294967295);
                }
              }
            }
          }
        })();
        {
          const $t15541 = march_int_shr(x$sh3, 15);
          return march_int_xor(x$sh3, $t15541);
        }
      }
    }
  }
}
const Random$mix32$clo = { _0: ($_, x) => Random$mix32(x) };

function Random$warmup(rng, k) {
  {
    const $t15542 = (k <= 0);
    if ($t15542 === true) {
      return rng;
    } else {
      return (() => {
        {
          const $p15544 = Random$next_raw(rng);
          {
            const r2 = $p15544._1;
            {
              const $t15543 = (k - 1);
              return Random$warmup(r2, $t15543);
            }
          }
        }
      })();
    }
  }
}
const Random$warmup$clo = { _0: ($_, rng, k) => Random$warmup(rng, k) };

function Random$seed(n) {
  {
    const lo = march_int_and(n, 4294967295);
    {
      const hi = (() => {
        {
          const $t15547 = (() => {
            {
              const $t15545 = (n - lo);
              return Math.trunc($t15545 / 4294967296);
            }
          })();
          return march_int_and($t15547, 4294967295);
        }
      })();
      {
        const a = Random$mix32(lo);
        {
          const b = (() => {
            {
              const $t15548 = march_int_xor(hi, a);
              return Random$mix32($t15548);
            }
          })();
          {
            const c = (() => {
              {
                const $t15549 = march_int_xor(lo, b);
                return Random$mix32($t15549);
              }
            })();
            {
              const $t15550 = ({ s0: a, s1: b, s2: c, s3: 1 });
              return Random$warmup($t15550, 12);
            }
          }
        }
      }
    }
  }
}
const Random$seed$clo = { _0: ($_, n) => Random$seed(n) };

function Random$next_raw(rng) {
  {
    const t = (() => {
      {
        const $t15555 = (() => {
          {
            const $t15553 = (() => {
              {
                const $t15551 = rng.s0;
                {
                  const $t15552 = rng.s1;
                  return ($t15551 + $t15552);
                }
              }
            })();
            {
              const $t15554 = rng.s3;
              return ($t15553 + $t15554);
            }
          }
        })();
        return march_int_and($t15555, 4294967295);
      }
    })();
    {
      const a = (() => {
        {
          const $t15556 = rng.s1;
          {
            const $t15558 = (() => {
              {
                const $t15557 = rng.s1;
                return march_int_shr($t15557, 9);
              }
            })();
            return march_int_xor($t15556, $t15558);
          }
        }
      })();
      {
        const b = (() => {
          {
            const $t15563 = (() => {
              {
                const $t15559 = rng.s2;
                {
                  const $t15562 = (() => {
                    {
                      const $t15561 = (() => {
                        {
                          const $t15560 = rng.s2;
                          return march_int_shl($t15560, 3);
                        }
                      })();
                      return march_int_and($t15561, 4294967295);
                    }
                  })();
                  return ($t15559 + $t15562);
                }
              }
            })();
            return march_int_and($t15563, 4294967295);
          }
        })();
        {
          const c = (() => {
            {
              const $t15566 = (() => {
                {
                  const $t15565 = (() => {
                    {
                      const $t15564 = rng.s2;
                      {
                        const keep_i1518 = (() => {
                          {
                            const $t15530_i1517 = march_int_shr(4294967295, 21);
                            return march_int_and($t15564, $t15530_i1517);
                          }
                        })();
                        {
                          const $t15531_i1519 = march_int_shl(keep_i1518, 21);
                          {
                            const $t15533_i1521 = march_int_shr($t15564, 11);
                            return march_int_or($t15531_i1519, $t15533_i1521);
                          }
                        }
                      }
                    }
                  })();
                  return ($t15565 + t);
                }
              })();
              return march_int_and($t15566, 4294967295);
            }
          })();
          {
            const $t15570 = (() => {
              {
                const $t15569 = (() => {
                  {
                    const $t15568 = (() => {
                      {
                        const $t15567 = rng.s3;
                        return ($t15567 + 1);
                      }
                    })();
                    return march_int_and($t15568, 4294967295);
                  }
                })();
                return ({ s0: a, s1: b, s2: c, s3: $t15569 });
              }
            })();
            return { _0: t, _1: $t15570 };
          }
        }
      }
    }
  }
}
const Random$next_raw$clo = { _0: ($_, rng) => Random$next_raw(rng) };

function Dom$find(id) {
  {
    const $rc_744 = dom_get_element_by_id$clo._0(dom_get_element_by_id$clo, id);
    return $rc_744;
  }
}
const Dom$find$clo = { _0: ($_, id) => Dom$find(id) };

function Dom$create(tag) {
  {
    const $rc_747 = dom_create_element$clo._0(dom_create_element$clo, tag);
    return $rc_747;
  }
}
const Dom$create$clo = { _0: ($_, tag) => Dom$create(tag) };

function Dom$set_attr(el, name, val) {
  {
    const $rc_761 = dom_set_attribute$clo._0(dom_set_attribute$clo, el, name, val);
    return $rc_761;
  }
}
const Dom$set_attr$clo = { _0: ($_, el, name, val) => Dom$set_attr(el, name, val) };

function Dom$taps(el) {
  {
    const $rc_781 = dom_taps$clo._0(dom_taps$clo, el);
    return $rc_781;
  }
}
const Dom$taps$clo = { _0: ($_, el) => Dom$taps(el) };

function Dom$store_get(key) {
  {
    const $rc_782 = dom_store_get$clo._0(dom_store_get$clo, key);
    return $rc_782;
  }
}
const Dom$store_get$clo = { _0: ($_, key) => Dom$store_get(key) };

function Dom$store_set(key, val) {
  {
    const $rc_783 = dom_store_set$clo._0(dom_store_set$clo, key, val);
    return $rc_783;
  }
}
const Dom$store_set$clo = { _0: ($_, key, val) => Dom$store_set(key, val) };

function Dom$pointer_pos(el) {
  {
    const $rc_784 = dom_pointer_pos$clo._0(dom_pointer_pos$clo, el);
    return $rc_784;
  }
}
const Dom$pointer_pos$clo = { _0: ($_, el) => Dom$pointer_pos(el) };

function Dom$on_frame(cb) {
  return dom_request_animation_frame$clo._0(dom_request_animation_frame$clo, cb);
}
const Dom$on_frame$clo = { _0: ($_, cb) => Dom$on_frame(cb) };

function Canvas$get_context(node) {
  {
    const $rc_787 = canvas_get_context$clo._0(canvas_get_context$clo, node);
    return $rc_787;
  }
}
const Canvas$get_context$clo = { _0: ($_, node) => Canvas$get_context(node) };

function Canvas$save(ctx) {
  {
    const $rc_788 = canvas_save$clo._0(canvas_save$clo, ctx);
    return $rc_788;
  }
}
const Canvas$save$clo = { _0: ($_, ctx) => Canvas$save(ctx) };

function Canvas$restore(ctx) {
  {
    const $rc_789 = canvas_restore$clo._0(canvas_restore$clo, ctx);
    return $rc_789;
  }
}
const Canvas$restore$clo = { _0: ($_, ctx) => Canvas$restore(ctx) };

function Canvas$translate(ctx, x, y) {
  {
    const $rc_790 = canvas_translate$clo._0(canvas_translate$clo, ctx, x, y);
    return $rc_790;
  }
}
const Canvas$translate$clo = { _0: ($_, ctx, x, y) => Canvas$translate(ctx, x, y) };

function Canvas$rotate(ctx, angle) {
  {
    const $rc_791 = canvas_rotate$clo._0(canvas_rotate$clo, ctx, angle);
    return $rc_791;
  }
}
const Canvas$rotate$clo = { _0: ($_, ctx, angle) => Canvas$rotate(ctx, angle) };

function Canvas$set_fill_style(ctx, color) {
  {
    const $rc_793 = canvas_set_fill_style$clo._0(canvas_set_fill_style$clo, ctx, color);
    return $rc_793;
  }
}
const Canvas$set_fill_style$clo = { _0: ($_, ctx, color) => Canvas$set_fill_style(ctx, color) };

function Canvas$set_stroke_style(ctx, color) {
  {
    const $rc_794 = canvas_set_stroke_style$clo._0(canvas_set_stroke_style$clo, ctx, color);
    return $rc_794;
  }
}
const Canvas$set_stroke_style$clo = { _0: ($_, ctx, color) => Canvas$set_stroke_style(ctx, color) };

function Canvas$set_line_width(ctx, w) {
  {
    const $rc_795 = canvas_set_line_width$clo._0(canvas_set_line_width$clo, ctx, w);
    return $rc_795;
  }
}
const Canvas$set_line_width$clo = { _0: ($_, ctx, w) => Canvas$set_line_width(ctx, w) };

function Canvas$set_global_alpha(ctx, a) {
  {
    const $rc_796 = canvas_set_global_alpha$clo._0(canvas_set_global_alpha$clo, ctx, a);
    return $rc_796;
  }
}
const Canvas$set_global_alpha$clo = { _0: ($_, ctx, a) => Canvas$set_global_alpha(ctx, a) };

function Canvas$set_font(ctx, font) {
  {
    const $rc_797 = canvas_set_font$clo._0(canvas_set_font$clo, ctx, font);
    return $rc_797;
  }
}
const Canvas$set_font$clo = { _0: ($_, ctx, font) => Canvas$set_font(ctx, font) };

function Canvas$fill_rect(ctx, x, y, w, h) {
  {
    const $rc_799 = canvas_fill_rect$clo._0(canvas_fill_rect$clo, ctx, x, y, w, h);
    return $rc_799;
  }
}
const Canvas$fill_rect$clo = { _0: ($_, ctx, x, y, w, h) => Canvas$fill_rect(ctx, x, y, w, h) };

function Canvas$stroke_rect(ctx, x, y, w, h) {
  {
    const $rc_800 = canvas_stroke_rect$clo._0(canvas_stroke_rect$clo, ctx, x, y, w, h);
    return $rc_800;
  }
}
const Canvas$stroke_rect$clo = { _0: ($_, ctx, x, y, w, h) => Canvas$stroke_rect(ctx, x, y, w, h) };

function Canvas$begin_path(ctx) {
  {
    const $rc_801 = canvas_begin_path$clo._0(canvas_begin_path$clo, ctx);
    return $rc_801;
  }
}
const Canvas$begin_path$clo = { _0: ($_, ctx) => Canvas$begin_path(ctx) };

function Canvas$close_path(ctx) {
  {
    const $rc_802 = canvas_close_path$clo._0(canvas_close_path$clo, ctx);
    return $rc_802;
  }
}
const Canvas$close_path$clo = { _0: ($_, ctx) => Canvas$close_path(ctx) };

function Canvas$move_to(ctx, x, y) {
  {
    const $rc_803 = canvas_move_to$clo._0(canvas_move_to$clo, ctx, x, y);
    return $rc_803;
  }
}
const Canvas$move_to$clo = { _0: ($_, ctx, x, y) => Canvas$move_to(ctx, x, y) };

function Canvas$line_to(ctx, x, y) {
  {
    const $rc_804 = canvas_line_to$clo._0(canvas_line_to$clo, ctx, x, y);
    return $rc_804;
  }
}
const Canvas$line_to$clo = { _0: ($_, ctx, x, y) => Canvas$line_to(ctx, x, y) };

function Canvas$arc(ctx, x, y, radius, start_angle, end_angle) {
  {
    const $rc_805 = canvas_arc$clo._0(canvas_arc$clo, ctx, x, y, radius, start_angle, end_angle);
    return $rc_805;
  }
}
const Canvas$arc$clo = { _0: ($_, ctx, x, y, radius, start_angle, end_angle) => Canvas$arc(ctx, x, y, radius, start_angle, end_angle) };

function Canvas$fill(ctx) {
  {
    const $rc_808 = canvas_fill$clo._0(canvas_fill$clo, ctx);
    return $rc_808;
  }
}
const Canvas$fill$clo = { _0: ($_, ctx) => Canvas$fill(ctx) };

function Canvas$stroke(ctx) {
  {
    const $rc_809 = canvas_stroke$clo._0(canvas_stroke$clo, ctx);
    return $rc_809;
  }
}
const Canvas$stroke$clo = { _0: ($_, ctx) => Canvas$stroke(ctx) };

function Canvas$fill_text(ctx, text, x, y) {
  {
    const $rc_811 = canvas_fill_text$clo._0(canvas_fill_text$clo, ctx, text, x, y);
    return $rc_811;
  }
}
const Canvas$fill_text$clo = { _0: ($_, ctx, text, x, y) => Canvas$fill_text(ctx, text, x, y) };

function Canvas$set_text_align(ctx, align) {
  {
    const $rc_813 = canvas_set_text_align$clo._0(canvas_set_text_align$clo, ctx, align);
    return $rc_813;
  }
}
const Canvas$set_text_align$clo = { _0: ($_, ctx, align) => Canvas$set_text_align(ctx, align) };

function Canvas$draw_node(ctx, node, x, y) {
  {
    const $rc_816 = canvas_draw_node$clo._0(canvas_draw_node$clo, ctx, node, x, y);
    return $rc_816;
  }
}
const Canvas$draw_node$clo = { _0: ($_, ctx, node, x, y) => Canvas$draw_node(ctx, node, x, y) };

function Audio$resume(actx) {
  {
    const $rc_818 = audio_resume$clo._0(audio_resume$clo, actx);
    return $rc_818;
  }
}
const Audio$resume$clo = { _0: ($_, actx) => Audio$resume(actx) };

function Audio$beep(actx, freq, duration, wave) {
  {
    const $rc_819 = audio_beep$clo._0(audio_beep$clo, actx, freq, duration, wave);
    return $rc_819;
  }
}
const Audio$beep$clo = { _0: ($_, actx, freq, duration, wave) => Audio$beep(actx, freq, duration, wave) };

function Audio$sweep(actx, freq_from, freq_to, duration, wave) {
  {
    const $rc_820 = audio_sweep$clo._0(audio_sweep$clo, actx, freq_from, freq_to, duration, wave);
    return $rc_820;
  }
}
const Audio$sweep$clo = { _0: ($_, actx, freq_from, freq_to, duration, wave) => Audio$sweep(actx, freq_from, freq_to, duration, wave) };

function Audio$noise_burst(actx, duration, filter_freq) {
  {
    const $rc_821 = audio_noise_burst$clo._0(audio_noise_burst$clo, actx, duration, filter_freq);
    return $rc_821;
  }
}
const Audio$noise_burst$clo = { _0: ($_, actx, duration, filter_freq) => Audio$noise_burst(actx, duration, filter_freq) };

function WebGL$get_context(node) {
  {
    const $rc_823 = webgl_get_context$clo._0(webgl_get_context$clo, node);
    return $rc_823;
  }
}
const WebGL$get_context$clo = { _0: ($_, node) => WebGL$get_context(node) };

function WebGL$resize(ctx, w, h) {
  {
    const $rc_824 = webgl_resize$clo._0(webgl_resize$clo, ctx, w, h);
    return $rc_824;
  }
}
const WebGL$resize$clo = { _0: ($_, ctx, w, h) => WebGL$resize(ctx, w, h) };

function WebGL$draw_nebula(ctx, clouds, view_w, view_h, t) {
  {
    const $rc_825 = webgl_draw_nebula$clo._0(webgl_draw_nebula$clo, ctx, clouds, view_w, view_h, t);
    return $rc_825;
  }
}
const WebGL$draw_nebula$clo = { _0: ($_, ctx, clouds, view_w, view_h, t) => WebGL$draw_nebula(ctx, clouds, view_w, view_h, t) };

function WebGL$canvas_node(ctx) {
  {
    const $rc_826 = webgl_canvas_node$clo._0(webgl_canvas_node$clo, ctx);
    return $rc_826;
  }
}
const WebGL$canvas_node$clo = { _0: ($_, ctx) => WebGL$canvas_node(ctx) };

function Perihelion$Combat$starkiller_target_idx(game) {
  {
    const raw = (() => {
      {
        const $t27350 = (() => {
          {
            const $t27349 = game.current;
            return ($t27349 + 1);
          }
        })();
        {
          const $t27351 = game.starkiller_target_offset;
          return ($t27350 + $t27351);
        }
      }
    })();
    {
      const max_idx = (() => {
        {
          const $t27353 = (() => {
            {
              const $t27352 = game.stars;
              {
                const go_i3627 = { $: "$Clo_go$4758", _0: go$apply$4758 };
                return go$apply$4758(go_i3627, $t27352, 0);
              }
            }
          })();
          return ($t27353 - 1);
        }
      })();
      {
        const $t27354 = (raw > max_idx);
        if ($t27354 === true) {
          return max_idx;
        } else {
          return raw;
        }
      }
    }
  }
}
const Perihelion$Combat$starkiller_target_idx$clo = { _0: ($_, game) => Perihelion$Combat$starkiller_target_idx(game) };

function Perihelion$Combat$step_spawn(game, dt_s) {
  {
    const t = (() => {
      {
        const $t27363 = game.spawn_timer;
        return ($t27363 - dt_s);
      }
    })();
    {
      const $t27364 = (t > 0.);
      if ($t27364 === true) {
        return ({ ...game, spawn_timer: t });
      } else {
        return (() => {
          {
            const $p27390 = (() => {
              {
                const $t27365 = game.rng;
                {
                  const $p29052_i10520_i10819_i11013 = (() => {
                    {
                      const $p15579_i10199_i10515_i10814_i11008 = (() => {
                        {
                          const $p15576_i1532_i10189_i10506_i10805_i10999 = Random$next_raw($t27365);
                          {
                            const hi_i1533_i10190_i10507_i10806_i11000 = $p15576_i1532_i10189_i10506_i10805_i10999._0;
                            {
                              const rng2_i1534_i10191_i10508_i10807_i11001 = $p15576_i1532_i10189_i10506_i10805_i10999._1;
                              {
                                const $p15575_i1535_i10192_i10509_i10808_i11002 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11001);
                                {
                                  const lo_i1536_i10193_i10510_i10809_i11003 = $p15575_i1535_i10192_i10509_i10808_i11002._0;
                                  {
                                    const rng3_i1537_i10194_i10511_i10810_i11004 = $p15575_i1535_i10192_i10509_i10808_i11002._1;
                                    {
                                      const $t15574_i1541_i10198_i10514_i10813_i11007 = (() => {
                                        {
                                          const $t15573_i1540_i10197_i10513_i10812_i11006 = (() => {
                                            {
                                              const $t15571_i1538_i10195_i10512_i10811_i11005 = march_int_and(hi_i1533_i10190_i10507_i10806_i11000, 1048575);
                                              return ($t15571_i1538_i10195_i10512_i10811_i11005 * 4294967296);
                                            }
                                          })();
                                          return ($t15573_i1540_i10197_i10513_i10812_i11006 + lo_i1536_i10193_i10510_i10809_i11003);
                                        }
                                      })();
                                      return { _0: $t15574_i1541_i10198_i10514_i10813_i11007, _1: rng3_i1537_i10194_i10511_i10810_i11004 };
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      })();
                      {
                        const bits_i10200_i10516_i10815_i11009 = $p15579_i10199_i10515_i10814_i11008._0;
                        {
                          const rng2_i10201_i10517_i10816_i11010 = $p15579_i10199_i10515_i10814_i11008._1;
                          {
                            const $t15578_i10203_i10519_i10818_i11012 = (() => {
                              {
                                const $t15577_i10202_i10518_i10817_i11011 = bits_i10200_i10516_i10815_i11009;
                                return ($t15577_i10202_i10518_i10817_i11011 / 4.50359962737e+15);
                              }
                            })();
                            return { _0: $t15578_i10203_i10519_i10818_i11012, _1: rng2_i10201_i10517_i10816_i11010 };
                          }
                        }
                      }
                    }
                  })();
                  {
                    const t_i10521_i10820_i11014 = $p29052_i10520_i10819_i11013._0;
                    {
                      const rng2_i10522_i10821_i11015 = $p29052_i10520_i10819_i11013._1;
                      {
                        const out_i10523_i10822_i11016 = { _0: rng2_i10522_i10821_i11015, _1: t_i10521_i10820_i11014 };
                        return out_i10523_i10822_i11016;
                      }
                    }
                  }
                }
              }
            })();
            {
              const r1 = $p27390._0;
              {
                const side_f = $p27390._1;
                {
                  const $p27389 = (() => {
                    {
                      const $p29052_i10520_i10819_i10994 = (() => {
                        {
                          const $p15579_i10199_i10515_i10814_i10989 = (() => {
                            {
                              const $p15576_i1532_i10189_i10506_i10805_i10980 = Random$next_raw(r1);
                              {
                                const hi_i1533_i10190_i10507_i10806_i10981 = $p15576_i1532_i10189_i10506_i10805_i10980._0;
                                {
                                  const rng2_i1534_i10191_i10508_i10807_i10982 = $p15576_i1532_i10189_i10506_i10805_i10980._1;
                                  {
                                    const $p15575_i1535_i10192_i10509_i10808_i10983 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i10982);
                                    {
                                      const lo_i1536_i10193_i10510_i10809_i10984 = $p15575_i1535_i10192_i10509_i10808_i10983._0;
                                      {
                                        const rng3_i1537_i10194_i10511_i10810_i10985 = $p15575_i1535_i10192_i10509_i10808_i10983._1;
                                        {
                                          const $t15574_i1541_i10198_i10514_i10813_i10988 = (() => {
                                            {
                                              const $t15573_i1540_i10197_i10513_i10812_i10987 = (() => {
                                                {
                                                  const $t15571_i1538_i10195_i10512_i10811_i10986 = march_int_and(hi_i1533_i10190_i10507_i10806_i10981, 1048575);
                                                  return ($t15571_i1538_i10195_i10512_i10811_i10986 * 4294967296);
                                                }
                                              })();
                                              return ($t15573_i1540_i10197_i10513_i10812_i10987 + lo_i1536_i10193_i10510_i10809_i10984);
                                            }
                                          })();
                                          return { _0: $t15574_i1541_i10198_i10514_i10813_i10988, _1: rng3_i1537_i10194_i10511_i10810_i10985 };
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          })();
                          {
                            const bits_i10200_i10516_i10815_i10990 = $p15579_i10199_i10515_i10814_i10989._0;
                            {
                              const rng2_i10201_i10517_i10816_i10991 = $p15579_i10199_i10515_i10814_i10989._1;
                              {
                                const $t15578_i10203_i10519_i10818_i10993 = (() => {
                                  {
                                    const $t15577_i10202_i10518_i10817_i10992 = bits_i10200_i10516_i10815_i10990;
                                    return ($t15577_i10202_i10518_i10817_i10992 / 4.50359962737e+15);
                                  }
                                })();
                                return { _0: $t15578_i10203_i10519_i10818_i10993, _1: rng2_i10201_i10517_i10816_i10991 };
                              }
                            }
                          }
                        }
                      })();
                      {
                        const t_i10521_i10820_i10995 = $p29052_i10520_i10819_i10994._0;
                        {
                          const rng2_i10522_i10821_i10996 = $p29052_i10520_i10819_i10994._1;
                          {
                            const out_i10523_i10822_i10997 = { _0: rng2_i10522_i10821_i10996, _1: t_i10521_i10820_i10995 };
                            return out_i10523_i10822_i10997;
                          }
                        }
                      }
                    }
                  })();
                  {
                    const r2 = $p27389._0;
                    {
                      const y_f = $p27389._1;
                      {
                        const $p27388 = (() => {
                          {
                            const $p29052_i10520_i10819_i10975 = (() => {
                              {
                                const $p15579_i10199_i10515_i10814_i10970 = (() => {
                                  {
                                    const $p15576_i1532_i10189_i10506_i10805_i10961 = Random$next_raw(r2);
                                    {
                                      const hi_i1533_i10190_i10507_i10806_i10962 = $p15576_i1532_i10189_i10506_i10805_i10961._0;
                                      {
                                        const rng2_i1534_i10191_i10508_i10807_i10963 = $p15576_i1532_i10189_i10506_i10805_i10961._1;
                                        {
                                          const $p15575_i1535_i10192_i10509_i10808_i10964 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i10963);
                                          {
                                            const lo_i1536_i10193_i10510_i10809_i10965 = $p15575_i1535_i10192_i10509_i10808_i10964._0;
                                            {
                                              const rng3_i1537_i10194_i10511_i10810_i10966 = $p15575_i1535_i10192_i10509_i10808_i10964._1;
                                              {
                                                const $t15574_i1541_i10198_i10514_i10813_i10969 = (() => {
                                                  {
                                                    const $t15573_i1540_i10197_i10513_i10812_i10968 = (() => {
                                                      {
                                                        const $t15571_i1538_i10195_i10512_i10811_i10967 = march_int_and(hi_i1533_i10190_i10507_i10806_i10962, 1048575);
                                                        return ($t15571_i1538_i10195_i10512_i10811_i10967 * 4294967296);
                                                      }
                                                    })();
                                                    return ($t15573_i1540_i10197_i10513_i10812_i10968 + lo_i1536_i10193_i10510_i10809_i10965);
                                                  }
                                                })();
                                                return { _0: $t15574_i1541_i10198_i10514_i10813_i10969, _1: rng3_i1537_i10194_i10511_i10810_i10966 };
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                })();
                                {
                                  const bits_i10200_i10516_i10815_i10971 = $p15579_i10199_i10515_i10814_i10970._0;
                                  {
                                    const rng2_i10201_i10517_i10816_i10972 = $p15579_i10199_i10515_i10814_i10970._1;
                                    {
                                      const $t15578_i10203_i10519_i10818_i10974 = (() => {
                                        {
                                          const $t15577_i10202_i10518_i10817_i10973 = bits_i10200_i10516_i10815_i10971;
                                          return ($t15577_i10202_i10518_i10817_i10973 / 4.50359962737e+15);
                                        }
                                      })();
                                      return { _0: $t15578_i10203_i10519_i10818_i10974, _1: rng2_i10201_i10517_i10816_i10972 };
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const t_i10521_i10820_i10976 = $p29052_i10520_i10819_i10975._0;
                              {
                                const rng2_i10522_i10821_i10977 = $p29052_i10520_i10819_i10975._1;
                                {
                                  const out_i10523_i10822_i10978 = { _0: rng2_i10522_i10821_i10977, _1: t_i10521_i10820_i10976 };
                                  return out_i10523_i10822_i10978;
                                }
                              }
                            }
                          }
                        })();
                        {
                          const r3 = $p27388._0;
                          {
                            const ang_f = $p27388._1;
                            {
                              const $p27387 = (() => {
                                {
                                  const $p29052_i10520_i10819_i10956 = (() => {
                                    {
                                      const $p15579_i10199_i10515_i10814_i10951 = (() => {
                                        {
                                          const $p15576_i1532_i10189_i10506_i10805_i10942 = Random$next_raw(r3);
                                          {
                                            const hi_i1533_i10190_i10507_i10806_i10943 = $p15576_i1532_i10189_i10506_i10805_i10942._0;
                                            {
                                              const rng2_i1534_i10191_i10508_i10807_i10944 = $p15576_i1532_i10189_i10506_i10805_i10942._1;
                                              {
                                                const $p15575_i1535_i10192_i10509_i10808_i10945 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i10944);
                                                {
                                                  const lo_i1536_i10193_i10510_i10809_i10946 = $p15575_i1535_i10192_i10509_i10808_i10945._0;
                                                  {
                                                    const rng3_i1537_i10194_i10511_i10810_i10947 = $p15575_i1535_i10192_i10509_i10808_i10945._1;
                                                    {
                                                      const $t15574_i1541_i10198_i10514_i10813_i10950 = (() => {
                                                        {
                                                          const $t15573_i1540_i10197_i10513_i10812_i10949 = (() => {
                                                            {
                                                              const $t15571_i1538_i10195_i10512_i10811_i10948 = march_int_and(hi_i1533_i10190_i10507_i10806_i10943, 1048575);
                                                              return ($t15571_i1538_i10195_i10512_i10811_i10948 * 4294967296);
                                                            }
                                                          })();
                                                          return ($t15573_i1540_i10197_i10513_i10812_i10949 + lo_i1536_i10193_i10510_i10809_i10946);
                                                        }
                                                      })();
                                                      return { _0: $t15574_i1541_i10198_i10514_i10813_i10950, _1: rng3_i1537_i10194_i10511_i10810_i10947 };
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      })();
                                      {
                                        const bits_i10200_i10516_i10815_i10952 = $p15579_i10199_i10515_i10814_i10951._0;
                                        {
                                          const rng2_i10201_i10517_i10816_i10953 = $p15579_i10199_i10515_i10814_i10951._1;
                                          {
                                            const $t15578_i10203_i10519_i10818_i10955 = (() => {
                                              {
                                                const $t15577_i10202_i10518_i10817_i10954 = bits_i10200_i10516_i10815_i10952;
                                                return ($t15577_i10202_i10518_i10817_i10954 / 4.50359962737e+15);
                                              }
                                            })();
                                            return { _0: $t15578_i10203_i10519_i10818_i10955, _1: rng2_i10201_i10517_i10816_i10953 };
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const t_i10521_i10820_i10957 = $p29052_i10520_i10819_i10956._0;
                                    {
                                      const rng2_i10522_i10821_i10958 = $p29052_i10520_i10819_i10956._1;
                                      {
                                        const out_i10523_i10822_i10959 = { _0: rng2_i10522_i10821_i10958, _1: t_i10521_i10820_i10957 };
                                        return out_i10523_i10822_i10959;
                                      }
                                    }
                                  }
                                }
                              })();
                              {
                                const r4 = $p27387._0;
                                {
                                  const next_f = $p27387._1;
                                  {
                                    const $p27386 = (() => {
                                      {
                                        const $p29052_i10520_i10819_i10937 = (() => {
                                          {
                                            const $p15579_i10199_i10515_i10814_i10932 = (() => {
                                              {
                                                const $p15576_i1532_i10189_i10506_i10805_i10923 = Random$next_raw(r4);
                                                {
                                                  const hi_i1533_i10190_i10507_i10806_i10924 = $p15576_i1532_i10189_i10506_i10805_i10923._0;
                                                  {
                                                    const rng2_i1534_i10191_i10508_i10807_i10925 = $p15576_i1532_i10189_i10506_i10805_i10923._1;
                                                    {
                                                      const $p15575_i1535_i10192_i10509_i10808_i10926 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i10925);
                                                      {
                                                        const lo_i1536_i10193_i10510_i10809_i10927 = $p15575_i1535_i10192_i10509_i10808_i10926._0;
                                                        {
                                                          const rng3_i1537_i10194_i10511_i10810_i10928 = $p15575_i1535_i10192_i10509_i10808_i10926._1;
                                                          {
                                                            const $t15574_i1541_i10198_i10514_i10813_i10931 = (() => {
                                                              {
                                                                const $t15573_i1540_i10197_i10513_i10812_i10930 = (() => {
                                                                  {
                                                                    const $t15571_i1538_i10195_i10512_i10811_i10929 = march_int_and(hi_i1533_i10190_i10507_i10806_i10924, 1048575);
                                                                    return ($t15571_i1538_i10195_i10512_i10811_i10929 * 4294967296);
                                                                  }
                                                                })();
                                                                return ($t15573_i1540_i10197_i10513_i10812_i10930 + lo_i1536_i10193_i10510_i10809_i10927);
                                                              }
                                                            })();
                                                            return { _0: $t15574_i1541_i10198_i10514_i10813_i10931, _1: rng3_i1537_i10194_i10511_i10810_i10928 };
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            })();
                                            {
                                              const bits_i10200_i10516_i10815_i10933 = $p15579_i10199_i10515_i10814_i10932._0;
                                              {
                                                const rng2_i10201_i10517_i10816_i10934 = $p15579_i10199_i10515_i10814_i10932._1;
                                                {
                                                  const $t15578_i10203_i10519_i10818_i10936 = (() => {
                                                    {
                                                      const $t15577_i10202_i10518_i10817_i10935 = bits_i10200_i10516_i10815_i10933;
                                                      return ($t15577_i10202_i10518_i10817_i10935 / 4.50359962737e+15);
                                                    }
                                                  })();
                                                  return { _0: $t15578_i10203_i10519_i10818_i10936, _1: rng2_i10201_i10517_i10816_i10934 };
                                                }
                                              }
                                            }
                                          }
                                        })();
                                        {
                                          const t_i10521_i10820_i10938 = $p29052_i10520_i10819_i10937._0;
                                          {
                                            const rng2_i10522_i10821_i10939 = $p29052_i10520_i10819_i10937._1;
                                            {
                                              const out_i10523_i10822_i10940 = { _0: rng2_i10522_i10821_i10939, _1: t_i10521_i10820_i10938 };
                                              return out_i10523_i10822_i10940;
                                            }
                                          }
                                        }
                                      }
                                    })();
                                    {
                                      const r5 = $p27386._0;
                                      {
                                        const shape_f = $p27386._1;
                                        {
                                          const from_left = (side_f < 0.5);
                                          {
                                            let x;
                                            if (from_left === true) {
                                              x = (0. - 20.);
                                            } else {
                                              x = (() => {
                                                {
                                                  const $t27366 = game.view_w;
                                                  return ($t27366 + 20.);
                                                }
                                              })();
                                            }
                                            {
                                              const y = (() => {
                                                {
                                                  const $t27367 = game.camera_y;
                                                  {
                                                    const $t27369 = (() => {
                                                      {
                                                        const $t27368 = game.view_h;
                                                        return (y_f * $t27368);
                                                      }
                                                    })();
                                                    return ($t27367 + $t27369);
                                                  }
                                                }
                                              })();
                                              {
                                                const jitter = (() => {
                                                  {
                                                    const $t27370 = (ang_f - 0.5);
                                                    return ($t27370 * 1.0472);
                                                  }
                                                })();
                                                {
                                                  let dir_x;
                                                  if (from_left === true) {
                                                    dir_x = 1.;
                                                  } else {
                                                    dir_x = (0. - 1.);
                                                  }
                                                  {
                                                    const vx = (() => {
                                                      {
                                                        const $t27372 = (dir_x * 90.);
                                                        {
                                                          const $t27373 = Math.cos(jitter);
                                                          return ($t27372 * $t27373);
                                                        }
                                                      }
                                                    })();
                                                    {
                                                      const vy = (() => {
                                                        {
                                                          const $t27375 = Math.sin(jitter);
                                                          return (90. * $t27375);
                                                        }
                                                      })();
                                                      {
                                                        const a = (() => {
                                                          {
                                                            const $t27377 = { $: "AsteroidDrifting" };
                                                            return ({ x: x, y: y, vx: vx, vy: vy, radius: 10., shape_seed: shape_f, mode: $t27377 });
                                                          }
                                                        })();
                                                        {
                                                          const $t27378 = game.asteroids;
                                                          {
                                                            const $t27379 = (() => {
                                                              return { $: "Cons", _0: a, _1: $t27378 };
                                                            })();
                                                            {
                                                              const $t27385 = (() => {
                                                                {
                                                                  const $t27384 = (() => {
                                                                    {
                                                                      const $t27382 = (() => {
                                                                        {
                                                                          const $t27381 = (next_f - 0.5);
                                                                          return ($t27381 * 2.);
                                                                        }
                                                                      })();
                                                                      return ($t27382 * 1.);
                                                                    }
                                                                  })();
                                                                  return (4. + $t27384);
                                                                }
                                                              })();
                                                              return ({ ...game, asteroids: $t27379, rng: r5, spawn_timer: $t27385 });
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })();
      }
    }
  }
}
const Perihelion$Combat$step_spawn$clo = { _0: ($_, game, dt_s) => Perihelion$Combat$step_spawn(game, dt_s) };

function Perihelion$Combat$in_band(game, x, y) {
  {
    const $t27402 = (() => {
      {
        const $t27399 = (() => {
          {
            const $t27393 = (() => {
              {
                const $t27392 = (() => {
                  {
                    const $t27391 = game.camera_y;
                    return ($t27391 - 100.);
                  }
                })();
                return (y > $t27392);
              }
            })();
            {
              const $t27398 = (() => {
                {
                  const $t27397 = (() => {
                    {
                      const $t27396 = (() => {
                        {
                          const $t27394 = game.camera_y;
                          {
                            const $t27395 = game.view_h;
                            return ($t27394 + $t27395);
                          }
                        }
                      })();
                      return ($t27396 + 100.);
                    }
                  })();
                  return (y < $t27397);
                }
              })();
              return ($t27393 && $t27398);
            }
          }
        })();
        {
          const $t27401 = (() => {
            {
              const $t27400 = (0. - 100.);
              return (x > $t27400);
            }
          })();
          return ($t27399 && $t27401);
        }
      }
    })();
    {
      const $t27405 = (() => {
        {
          const $t27404 = (() => {
            {
              const $t27403 = game.view_w;
              return ($t27403 + 100.);
            }
          })();
          return (x < $t27404);
        }
      })();
      return ($t27402 && $t27405);
    }
  }
}
const Perihelion$Combat$in_band$clo = { _0: ($_, game, x, y) => Perihelion$Combat$in_band(game, x, y) };

function Perihelion$Combat$nearest_in_list_ast(x, y, asteroids, best_d2, best) {
  switch (asteroids.$) {
    case "Nil": {
      return { _0: best_d2, _1: best };
      break;
    }
    case "Cons": {
      const $f27415 = asteroids._0;
      const $f27416 = asteroids._1;
      {
        const rest = (() => {
          return $f27416;
        })();
        {
          const a = (() => {
            return $f27415;
          })();
          {
            const dx = (() => {
              {
                const $t27406 = a.x;
                return ($t27406 - x);
              }
            })();
            {
              const dy = (() => {
                {
                  const $t27407 = a.y;
                  return ($t27407 - y);
                }
              })();
              {
                const d2 = (() => {
                  {
                    const $t27408 = (dx * dx);
                    {
                      const $t27409 = (dy * dy);
                      return ($t27408 + $t27409);
                    }
                  }
                })();
                {
                  const $t27410 = (d2 < best_d2);
                  if ($t27410 === true) {
                    return (() => {
                      {
                        const $t27414 = (() => {
                          {
                            const $t27413 = (() => {
                              {
                                const $t27411 = a.x;
                                {
                                  const $t27412 = a.y;
                                  return { _0: $t27411, _1: $t27412 };
                                }
                              }
                            })();
                            return { $: "Some", _0: $t27413 };
                          }
                        })();
                        return Perihelion$Combat$nearest_in_list_ast(x, y, rest, d2, $t27414);
                      }
                    })();
                  } else {
                    return (() => {
                      return Perihelion$Combat$nearest_in_list_ast(x, y, rest, best_d2, best);
                    })();
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Combat$nearest_in_list_ast$clo = { _0: ($_, x, y, asteroids, best_d2, best) => Perihelion$Combat$nearest_in_list_ast(x, y, asteroids, best_d2, best) };

function Perihelion$Combat$nearest_in_list_ship(x, y, ships, best_d2, best) {
  switch (ships.$) {
    case "Nil": {
      return { _0: best_d2, _1: best };
      break;
    }
    case "Cons": {
      const $f27427 = ships._0;
      const $f27428 = ships._1;
      {
        const rest = (() => {
          return $f27428;
        })();
        {
          const sh = (() => {
            return $f27427;
          })();
          {
            const pos = (() => {
              {
                const pos_i3643 = (() => {
                  {
                    const $t27355_i3641 = sh.x;
                    {
                      const $t27356_i3642 = sh.y;
                      return { _0: $t27355_i3641, _1: $t27356_i3642 };
                    }
                  }
                })();
                return pos_i3643;
              }
            })();
            {
              const sx = pos._0;
              {
                const sy = pos._1;
                {
                  const dx = (sx - x);
                  {
                    const dy = (sy - y);
                    {
                      const d2 = (() => {
                        {
                          const $t27421 = (dx * dx);
                          {
                            const $t27422 = (dy * dy);
                            return ($t27421 + $t27422);
                          }
                        }
                      })();
                      {
                        const $t27423 = (d2 < best_d2);
                        if ($t27423 === true) {
                          return (() => {
                            {
                              const $t27425 = (() => {
                                {
                                  const $t27424 = { _0: sx, _1: sy };
                                  return { $: "Some", _0: $t27424 };
                                }
                              })();
                              return Perihelion$Combat$nearest_in_list_ship(x, y, rest, d2, $t27425);
                            }
                          })();
                        } else {
                          return (() => {
                            return Perihelion$Combat$nearest_in_list_ship(x, y, rest, best_d2, best);
                          })();
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Combat$nearest_in_list_ship$clo = { _0: ($_, x, y, ships, best_d2, best) => Perihelion$Combat$nearest_in_list_ship(x, y, ships, best_d2, best) };

function Perihelion$Combat$nearest_hazard_dir(x, y, asteroids, ships) {
  {
    const $p27447 = (() => {
      {
        const $t27435 = (220. * 220.);
        {
          const $t27436 = { $: "None" };
          return Perihelion$Combat$nearest_in_list_ast(x, y, asteroids, $t27435, $t27436);
        }
      }
    })();
    {
      const d2a = $p27447._0;
      {
        const besta = $p27447._1;
        {
          const $p27446 = (() => {
            return Perihelion$Combat$nearest_in_list_ship(x, y, ships, d2a, besta);
          })();
          {
            const bests = $p27446._1;
            switch (bests.$) {
              case "None": {
                return { $: "None" };
                break;
              }
              case "Some": {
                const $f27445 = bests._0;
                {
                  const pair = (() => {
                    return $f27445;
                  })();
                  {
                    const tx = pair._0;
                    {
                      const ty = pair._1;
                      {
                        const dx = (tx - x);
                        {
                          const dy = (ty - y);
                          {
                            const d = (() => {
                              {
                                const $t27439 = (() => {
                                  {
                                    const $t27437 = (dx * dx);
                                    {
                                      const $t27438 = (dy * dy);
                                      return ($t27437 + $t27438);
                                    }
                                  }
                                })();
                                return Math.sqrt($t27439);
                              }
                            })();
                            {
                              const $t27440 = (d > 0.);
                              if ($t27440 === true) {
                                return (() => {
                                  {
                                    const $t27443 = (() => {
                                      {
                                        const $t27441 = (dx / d);
                                        {
                                          const $t27442 = (dy / d);
                                          return { _0: $t27441, _1: $t27442 };
                                        }
                                      }
                                    })();
                                    return { $: "Some", _0: $t27443 };
                                  }
                                })();
                              } else {
                                return { $: "None" };
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Combat$nearest_hazard_dir$clo = { _0: ($_, x, y, asteroids, ships) => Perihelion$Combat$nearest_hazard_dir(x, y, asteroids, ships) };

function Perihelion$Combat$age_shot(s, dt_s, asteroids, ships) {
  {
    const moved = (() => {
      {
        const $t27451 = (() => {
          {
            const $t27448 = s.x;
            {
              const $t27450 = (() => {
                {
                  const $t27449 = s.vx;
                  return ($t27449 * dt_s);
                }
              })();
              return ($t27448 + $t27450);
            }
          }
        })();
        {
          const $t27455 = (() => {
            {
              const $t27452 = s.y;
              {
                const $t27454 = (() => {
                  {
                    const $t27453 = s.vy;
                    return ($t27453 * dt_s);
                  }
                })();
                return ($t27452 + $t27454);
              }
            }
          })();
          {
            const $t27457 = (() => {
              {
                const $t27456 = s.ttl;
                return ($t27456 - dt_s);
              }
            })();
            return ({ ...s, x: $t27451, y: $t27455, ttl: $t27457 });
          }
        }
      }
    })();
    {
      const $t27459 = (() => {
        {
          const $t27458 = s.homing;
          return (!$t27458);
        }
      })();
      if ($t27459 === true) {
        return moved;
      } else {
        return (() => {
          {
            const $t27462 = (() => {
              {
                const $t27460 = s.x;
                {
                  const $t27461 = s.y;
                  return Perihelion$Combat$nearest_hazard_dir($t27460, $t27461, asteroids, ships);
                }
              }
            })();
            switch ($t27462.$) {
              case "None": {
                return moved;
                break;
              }
              case "Some": {
                const $f27488 = $t27462._0;
                {
                  const pair = $f27488;
                  {
                    const tx = pair._0;
                    {
                      const ty = pair._1;
                      {
                        const speed = (() => {
                          {
                            const $t27469 = (() => {
                              {
                                const $t27465 = (() => {
                                  {
                                    const $t27463 = s.vx;
                                    {
                                      const $t27464 = s.vx;
                                      return ($t27463 * $t27464);
                                    }
                                  }
                                })();
                                {
                                  const $t27468 = (() => {
                                    {
                                      const $t27466 = s.vy;
                                      {
                                        const $t27467 = s.vy;
                                        return ($t27466 * $t27467);
                                      }
                                    }
                                  })();
                                  return ($t27465 + $t27468);
                                }
                              }
                            })();
                            return Math.sqrt($t27469);
                          }
                        })();
                        {
                          const cur_ax = (() => {
                            {
                              const $t27470 = s.vx;
                              return ($t27470 / speed);
                            }
                          })();
                          {
                            const cur_ay = (() => {
                              {
                                const $t27471 = s.vy;
                                return ($t27471 / speed);
                              }
                            })();
                            {
                              const turned_ax = (() => {
                                {
                                  const $t27475 = (() => {
                                    {
                                      const $t27474 = (() => {
                                        {
                                          const $t27472 = (tx - cur_ax);
                                          return ($t27472 * 3.);
                                        }
                                      })();
                                      return ($t27474 * dt_s);
                                    }
                                  })();
                                  return (cur_ax + $t27475);
                                }
                              })();
                              {
                                const turned_ay = (() => {
                                  {
                                    const $t27479 = (() => {
                                      {
                                        const $t27478 = (() => {
                                          {
                                            const $t27476 = (ty - cur_ay);
                                            return ($t27476 * 3.);
                                          }
                                        })();
                                        return ($t27478 * dt_s);
                                      }
                                    })();
                                    return (cur_ay + $t27479);
                                  }
                                })();
                                {
                                  const norm = (() => {
                                    {
                                      const $t27482 = (() => {
                                        {
                                          const $t27480 = (turned_ax * turned_ax);
                                          {
                                            const $t27481 = (turned_ay * turned_ay);
                                            return ($t27480 + $t27481);
                                          }
                                        }
                                      })();
                                      return Math.sqrt($t27482);
                                    }
                                  })();
                                  {
                                    const $t27484 = (() => {
                                      {
                                        const $t27483 = (turned_ax / norm);
                                        return ($t27483 * speed);
                                      }
                                    })();
                                    {
                                      const $t27486 = (() => {
                                        {
                                          const $t27485 = (turned_ay / norm);
                                          return ($t27485 * speed);
                                        }
                                      })();
                                      return ({ ...moved, vx: $t27484, vy: $t27486 });
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          }
        })();
      }
    }
  }
}
const Perihelion$Combat$age_shot$clo = { _0: ($_, s, dt_s, asteroids, ships) => Perihelion$Combat$age_shot(s, dt_s, asteroids, ships) };

function Perihelion$Combat$step_entities(game, dt_s) {
  {
    const g1 = Perihelion$Combat$step_asteroids(game, dt_s);
    {
      const $t27489 = g1.player_shots;
      {
        const $t27493 = { $: "$Clo_$lam27490$3672", _0: $lam27490$apply$3672, _1: dt_s, _2: g1 };
        {
          const $t27494 = (() => {
            {
              const f_i3670 = $t27493;
              {
                const go_i3671 = { $: "$Clo_go$4766", _0: go$apply$4766, _1: f_i3670 };
                {
                  const $t270_i3672 = { $: "Nil" };
                  return go$apply$4766(go_i3671, $t27489, $t270_i3672);
                }
              }
            }
          })();
          {
            const $t27501 = { $: "$Clo_$lam27495$3673", _0: $lam27495$apply$3673, _1: g1 };
            {
              const p_shots = (() => {
                {
                  const pred_i3666 = $t27501;
                  {
                    const go_i3667 = { $: "$Clo_go$4764", _0: go$apply$4764, _1: pred_i3666 };
                    {
                      const $t302_i3668 = { $: "Nil" };
                      return go$apply$4764(go_i3667, $t27494, $t302_i3668);
                    }
                  }
                }
              })();
              {
                const $t27502 = g1.enemy_shots;
                {
                  const $t27506 = { $: "$Clo_$lam27503$3674", _0: $lam27503$apply$3674, _1: dt_s, _2: g1 };
                  {
                    const $t27507 = (() => {
                      {
                        const f_i3662 = $t27506;
                        {
                          const go_i3663 = { $: "$Clo_go$4766", _0: go$apply$4766, _1: f_i3662 };
                          {
                            const $t270_i3664 = { $: "Nil" };
                            return go$apply$4766(go_i3663, $t27502, $t270_i3664);
                          }
                        }
                      }
                    })();
                    {
                      const $t27514 = { $: "$Clo_$lam27508$3675", _0: $lam27508$apply$3675, _1: g1 };
                      {
                        const e_shots = (() => {
                          {
                            const pred_i3658 = $t27514;
                            {
                              const go_i3659 = { $: "$Clo_go$4764", _0: go$apply$4764, _1: pred_i3658 };
                              {
                                const $t302_i3660 = { $: "Nil" };
                                return go$apply$4764(go_i3659, $t27507, $t302_i3660);
                              }
                            }
                          }
                        })();
                        {
                          const $t27515 = g1.pickups;
                          {
                            const $t27519 = { $: "$Clo_$lam27516$3676", _0: $lam27516$apply$3676, _1: dt_s };
                            {
                              const $t27520 = (() => {
                                {
                                  const f_i3654 = $t27519;
                                  {
                                    const go_i3655 = { $: "$Clo_go$4762", _0: go$apply$4762, _1: f_i3654 };
                                    {
                                      const $t270_i3656 = { $: "Nil" };
                                      return go$apply$4762(go_i3655, $t27515, $t270_i3656);
                                    }
                                  }
                                }
                              })();
                              {
                                const $t27523 = { $: "$Clo_$lam27521$3677", _0: $lam27521$apply$3677 };
                                {
                                  const pickups = (() => {
                                    {
                                      const pred_i3650 = $t27523;
                                      {
                                        const go_i3651 = { $: "$Clo_go$4760", _0: go$apply$4760, _1: pred_i3650 };
                                        {
                                          const $t302_i3652 = { $: "Nil" };
                                          return go$apply$4760(go_i3651, $t27520, $t302_i3652);
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const $t27527 = (() => {
                                      {
                                        const $t27525 = (() => {
                                          {
                                            const $t27524 = g1.fire_cooldown;
                                            return ($t27524 > 0.);
                                          }
                                        })();
                                        if ($t27525 === true) {
                                          return (() => {
                                            {
                                              const $t27526 = g1.fire_cooldown;
                                              return ($t27526 - dt_s);
                                            }
                                          })();
                                        } else {
                                          return 0.;
                                        }
                                      }
                                    })();
                                    {
                                      const $t27531 = (() => {
                                        {
                                          const $t27529 = (() => {
                                            {
                                              const $t27528 = g1.starkiller_cooldown;
                                              return ($t27528 > 0.);
                                            }
                                          })();
                                          if ($t27529 === true) {
                                            return (() => {
                                              {
                                                const $t27530 = g1.starkiller_cooldown;
                                                return ($t27530 - dt_s);
                                              }
                                            })();
                                          } else {
                                            return 0.;
                                          }
                                        }
                                      })();
                                      return ({ ...g1, player_shots: p_shots, enemy_shots: e_shots, pickups: pickups, fire_cooldown: $t27527, starkiller_cooldown: $t27531 });
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Combat$step_entities$clo = { _0: ($_, game, dt_s) => Perihelion$Combat$step_entities(game, dt_s) };

function Perihelion$Combat$nearest_star_for_asteroid(x, y, stars, best, best_d) {
  switch (stars.$) {
    case "Nil": {
      return best;
      break;
    }
    case "Cons": {
      const $f27538 = stars._0;
      const $f27539 = stars._1;
      {
        const rest = $f27539;
        {
          const s = $f27538;
          {
            const dx = (() => {
              {
                const $t27532 = s.x;
                return ($t27532 - x);
              }
            })();
            {
              const dy = (() => {
                {
                  const $t27533 = s.y;
                  return ($t27533 - y);
                }
              })();
              {
                const d = (() => {
                  {
                    const $t27534 = (dx * dx);
                    {
                      const $t27535 = (dy * dy);
                      return ($t27534 + $t27535);
                    }
                  }
                })();
                {
                  const $t27536 = (d < best_d);
                  if ($t27536 === true) {
                    return (() => {
                      {
                        const $t27537 = { $: "Some", _0: s };
                        return Perihelion$Combat$nearest_star_for_asteroid(x, y, rest, $t27537, d);
                      }
                    })();
                  } else {
                    return Perihelion$Combat$nearest_star_for_asteroid(x, y, rest, best, best_d);
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Combat$nearest_star_for_asteroid$clo = { _0: ($_, x, y, stars, best, best_d) => Perihelion$Combat$nearest_star_for_asteroid(x, y, stars, best, best_d) };

function Perihelion$Combat$arc_velocity(x, y, vx, vy, stars, dt_s) {
  {
    const $t27546 = (() => {
      {
        const $t27544 = { $: "None" };
        {
          const $t27545 = (240. * 240.);
          return Perihelion$Combat$nearest_star_for_asteroid(x, y, stars, $t27544, $t27545);
        }
      }
    })();
    switch ($t27546.$) {
      case "None": {
        {
          const out = { _0: vx, _1: vy };
          return out;
        }
        break;
      }
      case "Some": {
        const $f27572 = $t27546._0;
        {
          const s = $f27572;
          {
            const dx = (() => {
              {
                const $t27547 = s.x;
                return ($t27547 - x);
              }
            })();
            {
              const dy = (() => {
                {
                  const $t27548 = s.y;
                  return ($t27548 - y);
                }
              })();
              {
                const dist = (() => {
                  {
                    const $t27551 = (() => {
                      {
                        const $t27549 = (dx * dx);
                        {
                          const $t27550 = (dy * dy);
                          return ($t27549 + $t27550);
                        }
                      }
                    })();
                    return Math.sqrt($t27551);
                  }
                })();
                {
                  const $t27552 = (dist > 0.);
                  if ($t27552 === true) {
                    return (() => {
                      {
                        const speed = (() => {
                          {
                            const $t27555 = (() => {
                              {
                                const $t27553 = (vx * vx);
                                {
                                  const $t27554 = (vy * vy);
                                  return ($t27553 + $t27554);
                                }
                              }
                            })();
                            return Math.sqrt($t27555);
                          }
                        })();
                        {
                          const nvx = (() => {
                            {
                              const $t27559 = (() => {
                                {
                                  const $t27558 = (() => {
                                    {
                                      const $t27556 = (dx / dist);
                                      return ($t27556 * 500.);
                                    }
                                  })();
                                  return ($t27558 * dt_s);
                                }
                              })();
                              return (vx + $t27559);
                            }
                          })();
                          {
                            const nvy = (() => {
                              {
                                const $t27563 = (() => {
                                  {
                                    const $t27562 = (() => {
                                      {
                                        const $t27560 = (dy / dist);
                                        return ($t27560 * 500.);
                                      }
                                    })();
                                    return ($t27562 * dt_s);
                                  }
                                })();
                                return (vy + $t27563);
                              }
                            })();
                            {
                              const nspeed = (() => {
                                {
                                  const $t27566 = (() => {
                                    {
                                      const $t27564 = (nvx * nvx);
                                      {
                                        const $t27565 = (nvy * nvy);
                                        return ($t27564 + $t27565);
                                      }
                                    }
                                  })();
                                  return Math.sqrt($t27566);
                                }
                              })();
                              {
                                const $t27567 = (nspeed > 0.);
                                if ($t27567 === true) {
                                  return (() => {
                                    {
                                      const $t27569 = (() => {
                                        {
                                          const $t27568 = (nvx / nspeed);
                                          return ($t27568 * speed);
                                        }
                                      })();
                                      {
                                        const $t27571 = (() => {
                                          {
                                            const $t27570 = (nvy / nspeed);
                                            return ($t27570 * speed);
                                          }
                                        })();
                                        return { _0: $t27569, _1: $t27571 };
                                      }
                                    }
                                  })();
                                } else {
                                  return { _0: vx, _1: vy };
                                }
                              }
                            }
                          }
                        }
                      }
                    })();
                  } else {
                    return (() => {
                      {
                        const out = { _0: vx, _1: vy };
                        return out;
                      }
                    })();
                  }
                }
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Combat$arc_velocity$clo = { _0: ($_, x, y, vx, vy, stars, dt_s) => Perihelion$Combat$arc_velocity(x, y, vx, vy, stars, dt_s) };

function Perihelion$Combat$step_asteroids_go(game, asteroids, acc, dt_s) {
  switch (asteroids.$) {
    case "Nil": {
      {
        const $t27573 = (() => {
          {
            const go_i3680 = { $: "$Clo_go$4768", _0: go$apply$4768 };
            {
              const $t253_i3681 = { $: "Nil" };
              return go$apply$4768(go_i3680, acc, $t253_i3681);
            }
          }
        })();
        return ({ ...game, asteroids: $t27573 });
      }
      break;
    }
    case "Cons": {
      const $f27637 = asteroids._0;
      const $f27638 = asteroids._1;
      {
        const rest = $f27638;
        {
          const a = $f27637;
          {
            const $t27574 = a.mode;
            switch ($t27574.$) {
              case "AsteroidOrbiting": {
                const $f27631 = $t27574._0;
                const $f27632 = $t27574._1;
                {
                  const angle = (() => {
                    return $f27632;
                  })();
                  {
                    const idx = (() => {
                      return $f27631;
                    })();
                    {
                      const $t27575 = Perihelion$Core$star_at(game, idx);
                      switch ($t27575.$) {
                        case "None": {
                          return Perihelion$Combat$step_asteroids_go(game, rest, acc, dt_s);
                          break;
                        }
                        case "Some": {
                          const $f27590 = $t27575._0;
                          {
                            const s = $f27590;
                            {
                              const angle2 = (() => {
                                {
                                  const $t27577 = (1. * dt_s);
                                  return (angle + $t27577);
                                }
                              })();
                              {
                                const r = (() => {
                                  {
                                    const $t27578 = s.capture_radius;
                                    return ($t27578 * 0.8);
                                  }
                                })();
                                {
                                  const a2 = (() => {
                                    {
                                      const $t27583 = (() => {
                                        {
                                          const $t27580 = s.x;
                                          {
                                            const $t27582 = (() => {
                                              {
                                                const $t27581 = Math.cos(angle2);
                                                return ($t27581 * r);
                                              }
                                            })();
                                            return ($t27580 + $t27582);
                                          }
                                        }
                                      })();
                                      {
                                        const $t27587 = (() => {
                                          {
                                            const $t27584 = s.y;
                                            {
                                              const $t27586 = (() => {
                                                {
                                                  const $t27585 = Math.sin(angle2);
                                                  return ($t27585 * r);
                                                }
                                              })();
                                              return ($t27584 + $t27586);
                                            }
                                          }
                                        })();
                                        {
                                          const $t27588 = { $: "AsteroidOrbiting", _0: idx, _1: angle2 };
                                          return ({ ...a, x: $t27583, y: $t27587, mode: $t27588 });
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const $t27589 = { $: "Cons", _0: a2, _1: acc };
                                    return Perihelion$Combat$step_asteroids_go(game, rest, $t27589, dt_s);
                                  }
                                }
                              }
                            }
                          }
                          break;
                        }
                        default: {
                          return (() => { throw new Error("non-exhaustive pattern match"); })();
                        }
                      }
                    }
                  }
                }
                break;
              }
              case "AsteroidDrifting": {
                {
                  const vel = (() => {
                    {
                      const $t27591 = a.x;
                      {
                        const $t27592 = a.y;
                        {
                          const $t27593 = a.vx;
                          {
                            const $t27594 = a.vy;
                            {
                              const $t27595 = game.stars;
                              return Perihelion$Combat$arc_velocity($t27591, $t27592, $t27593, $t27594, $t27595, dt_s);
                            }
                          }
                        }
                      }
                    }
                  })();
                  {
                    const vx2 = vel._0;
                    {
                      const vy2 = vel._1;
                      {
                        const x2 = (() => {
                          {
                            const $t27596 = a.x;
                            {
                              const $t27597 = (vx2 * dt_s);
                              return ($t27596 + $t27597);
                            }
                          }
                        })();
                        {
                          const y2 = (() => {
                            {
                              const $t27598 = a.y;
                              {
                                const $t27599 = (vy2 * dt_s);
                                return ($t27598 + $t27599);
                              }
                            }
                          })();
                          {
                            const $t27601 = (() => {
                              {
                                const $t27600 = Perihelion$Combat$in_band(game, x2, y2);
                                return (!$t27600);
                              }
                            })();
                            if ($t27601 === true) {
                              return Perihelion$Combat$step_asteroids_go(game, rest, acc, dt_s);
                            } else {
                              return (() => {
                                {
                                  const $t27603 = (() => {
                                    {
                                      const $t27602 = game.stars;
                                      return Perihelion$Combat$arrived_star($t27602, x2, y2, 0);
                                    }
                                  })();
                                  switch ($t27603.$) {
                                    case "None": {
                                      {
                                        const a2 = ({ ...a, x: x2, y: y2, vx: vx2, vy: vy2 });
                                        {
                                          const $t27604 = { $: "Cons", _0: a2, _1: acc };
                                          return Perihelion$Combat$step_asteroids_go(game, rest, $t27604, dt_s);
                                        }
                                      }
                                      break;
                                    }
                                    case "Some": {
                                      const $f27629 = $t27603._0;
                                      {
                                        const pair = $f27629;
                                        {
                                          const idx = pair._0;
                                          {
                                            const s = pair._1;
                                            {
                                              const $p27627 = (() => {
                                                {
                                                  const $t27605 = game.rng;
                                                  {
                                                    const $p29052_i10520_i10819_i11032 = (() => {
                                                      {
                                                        const $p15579_i10199_i10515_i10814_i11027 = (() => {
                                                          {
                                                            const $p15576_i1532_i10189_i10506_i10805_i11018 = Random$next_raw($t27605);
                                                            {
                                                              const hi_i1533_i10190_i10507_i10806_i11019 = $p15576_i1532_i10189_i10506_i10805_i11018._0;
                                                              {
                                                                const rng2_i1534_i10191_i10508_i10807_i11020 = $p15576_i1532_i10189_i10506_i10805_i11018._1;
                                                                {
                                                                  const $p15575_i1535_i10192_i10509_i10808_i11021 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11020);
                                                                  {
                                                                    const lo_i1536_i10193_i10510_i10809_i11022 = $p15575_i1535_i10192_i10509_i10808_i11021._0;
                                                                    {
                                                                      const rng3_i1537_i10194_i10511_i10810_i11023 = $p15575_i1535_i10192_i10509_i10808_i11021._1;
                                                                      {
                                                                        const $t15574_i1541_i10198_i10514_i10813_i11026 = (() => {
                                                                          {
                                                                            const $t15573_i1540_i10197_i10513_i10812_i11025 = (() => {
                                                                              {
                                                                                const $t15571_i1538_i10195_i10512_i10811_i11024 = march_int_and(hi_i1533_i10190_i10507_i10806_i11019, 1048575);
                                                                                return ($t15571_i1538_i10195_i10512_i10811_i11024 * 4294967296);
                                                                              }
                                                                            })();
                                                                            return ($t15573_i1540_i10197_i10513_i10812_i11025 + lo_i1536_i10193_i10510_i10809_i11022);
                                                                          }
                                                                        })();
                                                                        return { _0: $t15574_i1541_i10198_i10514_i10813_i11026, _1: rng3_i1537_i10194_i10511_i10810_i11023 };
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        })();
                                                        {
                                                          const bits_i10200_i10516_i10815_i11028 = $p15579_i10199_i10515_i10814_i11027._0;
                                                          {
                                                            const rng2_i10201_i10517_i10816_i11029 = $p15579_i10199_i10515_i10814_i11027._1;
                                                            {
                                                              const $t15578_i10203_i10519_i10818_i11031 = (() => {
                                                                {
                                                                  const $t15577_i10202_i10518_i10817_i11030 = bits_i10200_i10516_i10815_i11028;
                                                                  return ($t15577_i10202_i10518_i10817_i11030 / 4.50359962737e+15);
                                                                }
                                                              })();
                                                              return { _0: $t15578_i10203_i10519_i10818_i11031, _1: rng2_i10201_i10517_i10816_i11029 };
                                                            }
                                                          }
                                                        }
                                                      }
                                                    })();
                                                    {
                                                      const t_i10521_i10820_i11033 = $p29052_i10520_i10819_i11032._0;
                                                      {
                                                        const rng2_i10522_i10821_i11034 = $p29052_i10520_i10819_i11032._1;
                                                        {
                                                          const out_i10523_i10822_i11035 = { _0: rng2_i10522_i10821_i11034, _1: t_i10521_i10820_i11033 };
                                                          return out_i10523_i10822_i11035;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              })();
                                              {
                                                const rng2 = $p27627._0;
                                                {
                                                  const roll = $p27627._1;
                                                  {
                                                    const $t27607 = (roll < 0.35);
                                                    if ($t27607 === true) {
                                                      return (() => {
                                                        {
                                                          const angle = (() => {
                                                            {
                                                              const $t27609 = (() => {
                                                                {
                                                                  const $t27608 = s.y;
                                                                  return (y2 - $t27608);
                                                                }
                                                              })();
                                                              {
                                                                const $t27611 = (() => {
                                                                  {
                                                                    const $t27610 = s.x;
                                                                    return (x2 - $t27610);
                                                                  }
                                                                })();
                                                                return Math.atan2($t27609, $t27611);
                                                              }
                                                            }
                                                          })();
                                                          {
                                                            const r = (() => {
                                                              {
                                                                const $t27612 = s.capture_radius;
                                                                return ($t27612 * 0.8);
                                                              }
                                                            })();
                                                            {
                                                              const a2 = (() => {
                                                                {
                                                                  const $t27617 = (() => {
                                                                    {
                                                                      const $t27614 = s.x;
                                                                      {
                                                                        const $t27616 = (() => {
                                                                          {
                                                                            const $t27615 = Math.cos(angle);
                                                                            return ($t27615 * r);
                                                                          }
                                                                        })();
                                                                        return ($t27614 + $t27616);
                                                                      }
                                                                    }
                                                                  })();
                                                                  {
                                                                    const $t27621 = (() => {
                                                                      {
                                                                        const $t27618 = s.y;
                                                                        {
                                                                          const $t27620 = (() => {
                                                                            {
                                                                              const $t27619 = Math.sin(angle);
                                                                              return ($t27619 * r);
                                                                            }
                                                                          })();
                                                                          return ($t27618 + $t27620);
                                                                        }
                                                                      }
                                                                    })();
                                                                    {
                                                                      const $t27622 = { $: "AsteroidOrbiting", _0: idx, _1: angle };
                                                                      return ({ ...a, x: $t27617, y: $t27621, mode: $t27622 });
                                                                    }
                                                                  }
                                                                }
                                                              })();
                                                              {
                                                                const $t27623 = ({ ...game, rng: rng2 });
                                                                {
                                                                  const $t27624 = { $: "Cons", _0: a2, _1: acc };
                                                                  return Perihelion$Combat$step_asteroids_go($t27623, rest, $t27624, dt_s);
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      })();
                                                    } else {
                                                      return (() => {
                                                        {
                                                          const a2 = ({ ...a, x: x2, y: y2, vx: vx2, vy: vy2 });
                                                          {
                                                            const $t27625 = ({ ...game, rng: rng2 });
                                                            {
                                                              const $t27626 = { $: "Cons", _0: a2, _1: acc };
                                                              return Perihelion$Combat$step_asteroids_go($t27625, rest, $t27626, dt_s);
                                                            }
                                                          }
                                                        }
                                                      })();
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      break;
                                    }
                                    default: {
                                      return (() => { throw new Error("non-exhaustive pattern match"); })();
                                    }
                                  }
                                }
                              })();
                            }
                          }
                        }
                      }
                    }
                  }
                }
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Combat$step_asteroids_go$clo = { _0: ($_, game, asteroids, acc, dt_s) => Perihelion$Combat$step_asteroids_go(game, asteroids, acc, dt_s) };

function Perihelion$Combat$step_asteroids(game, dt_s) {
  {
    const $t27643 = game.asteroids;
    {
      const $t27644 = { $: "Nil" };
      return Perihelion$Combat$step_asteroids_go(game, $t27643, $t27644, dt_s);
    }
  }
}
const Perihelion$Combat$step_asteroids$clo = { _0: ($_, game, dt_s) => Perihelion$Combat$step_asteroids(game, dt_s) };

function Perihelion$Combat$step_ships(game, dt_s) {
  {
    const $t27645 = game.ships;
    {
      const $t27646 = { $: "Nil" };
      {
        const $t27647 = { $: "Nil" };
        return Perihelion$Combat$step_ships_go(game, $t27645, $t27646, $t27647, dt_s);
      }
    }
  }
}
const Perihelion$Combat$step_ships$clo = { _0: ($_, game, dt_s) => Perihelion$Combat$step_ships(game, dt_s) };

function Perihelion$Combat$nearest_other_star(from_x, from_y, skip_idx, stars, i, best, best_d) {
  switch (stars.$) {
    case "Nil": {
      return best;
      break;
    }
    case "Cons": {
      const $f27658 = stars._0;
      const $f27659 = stars._1;
      {
        const rest = (() => {
          return $f27659;
        })();
        {
          const s = (() => {
            return $f27658;
          })();
          {
            const $t27648 = (i === skip_idx);
            if ($t27648 === true) {
              return (() => {
                {
                  const $t27649 = (i + 1);
                  return Perihelion$Combat$nearest_other_star(from_x, from_y, skip_idx, rest, $t27649, best, best_d);
                }
              })();
            } else {
              return (() => {
                {
                  const dx = (() => {
                    {
                      const $t27650 = s.x;
                      return ($t27650 - from_x);
                    }
                  })();
                  {
                    const dy = (() => {
                      {
                        const $t27651 = s.y;
                        return ($t27651 - from_y);
                      }
                    })();
                    {
                      const d = (() => {
                        {
                          const $t27652 = (dx * dx);
                          {
                            const $t27653 = (dy * dy);
                            return ($t27652 + $t27653);
                          }
                        }
                      })();
                      {
                        const $t27654 = (d < best_d);
                        {
                          const $jp997_$t27655 = (i + 1);
                          if ($t27654 === true) {
                            return (() => {
                              {
                                const $t27656 = { $: "Some", _0: i };
                                return Perihelion$Combat$nearest_other_star(from_x, from_y, skip_idx, rest, $jp997_$t27655, $t27656, d);
                              }
                            })();
                          } else {
                            return (() => {
                              return Perihelion$Combat$nearest_other_star(from_x, from_y, skip_idx, rest, $jp997_$t27655, best, best_d);
                            })();
                          }
                        }
                      }
                    }
                  }
                }
              })();
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Combat$nearest_other_star$clo = { _0: ($_, from_x, from_y, skip_idx, stars, i, best, best_d) => Perihelion$Combat$nearest_other_star(from_x, from_y, skip_idx, stars, i, best, best_d) };

function Perihelion$Combat$arrived_star(stars, x, y, i) {
  switch (stars.$) {
    case "Nil": {
      return { $: "None" };
      break;
    }
    case "Cons": {
      const $f27674 = stars._0;
      const $f27675 = stars._1;
      {
        const rest = $f27675;
        {
          const s = $f27674;
          {
            const dx = (() => {
              {
                const $t27664 = s.x;
                return ($t27664 - x);
              }
            })();
            {
              const dy = (() => {
                {
                  const $t27665 = s.y;
                  return ($t27665 - y);
                }
              })();
              {
                const $t27671 = (() => {
                  {
                    const $t27669 = (() => {
                      {
                        const $t27668 = (() => {
                          {
                            const $t27666 = (dx * dx);
                            {
                              const $t27667 = (dy * dy);
                              return ($t27666 + $t27667);
                            }
                          }
                        })();
                        return Math.sqrt($t27668);
                      }
                    })();
                    {
                      const $t27670 = s.capture_radius;
                      return ($t27669 <= $t27670);
                    }
                  }
                })();
                if ($t27671 === true) {
                  return (() => {
                    {
                      const $t27672 = { _0: i, _1: s };
                      return { $: "Some", _0: $t27672 };
                    }
                  })();
                } else {
                  return (() => {
                    {
                      const $t27673 = (i + 1);
                      return Perihelion$Combat$arrived_star(rest, x, y, $t27673);
                    }
                  })();
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Combat$arrived_star$clo = { _0: ($_, stars, x, y, i) => Perihelion$Combat$arrived_star(stars, x, y, i) };

function Perihelion$Combat$ship_fire_shot(sx, sy, game) {
  {
    const dx = (() => {
      {
        const $t27680 = game.ball_x;
        return ($t27680 - sx);
      }
    })();
    {
      const dy = (() => {
        {
          const $t27681 = game.ball_y;
          return ($t27681 - sy);
        }
      })();
      {
        const dist = (() => {
          {
            const $t27684 = (() => {
              {
                const $t27682 = (dx * dx);
                {
                  const $t27683 = (dy * dy);
                  return ($t27682 + $t27683);
                }
              }
            })();
            return Math.sqrt($t27684);
          }
        })();
        {
          const $t27685 = (dist > 0.);
          if ($t27685 === true) {
            return (() => {
              {
                const $t27688 = (() => {
                  {
                    const $t27686 = (dx / dist);
                    return ($t27686 * 150.);
                  }
                })();
                {
                  const $t27691 = (() => {
                    {
                      const $t27689 = (dy / dist);
                      return ($t27689 * 150.);
                    }
                  })();
                  return ({ x: sx, y: sy, vx: $t27688, vy: $t27691, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                }
              }
            })();
          } else {
            return ({ x: sx, y: sy, vx: 0., vy: 150., ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
          }
        }
      }
    }
  }
}
const Perihelion$Combat$ship_fire_shot$clo = { _0: ($_, sx, sy, game) => Perihelion$Combat$ship_fire_shot(sx, sy, game) };

function Perihelion$Combat$pick_ring_idx(rng, s) {
  {
    const $p27698 = (() => {
      {
        const $p29052_i10520_i10819_i11051 = (() => {
          {
            const $p15579_i10199_i10515_i10814_i11046 = (() => {
              {
                const $p15576_i1532_i10189_i10506_i10805_i11037 = Random$next_raw(rng);
                {
                  const hi_i1533_i10190_i10507_i10806_i11038 = $p15576_i1532_i10189_i10506_i10805_i11037._0;
                  {
                    const rng2_i1534_i10191_i10508_i10807_i11039 = $p15576_i1532_i10189_i10506_i10805_i11037._1;
                    {
                      const $p15575_i1535_i10192_i10509_i10808_i11040 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11039);
                      {
                        const lo_i1536_i10193_i10510_i10809_i11041 = $p15575_i1535_i10192_i10509_i10808_i11040._0;
                        {
                          const rng3_i1537_i10194_i10511_i10810_i11042 = $p15575_i1535_i10192_i10509_i10808_i11040._1;
                          {
                            const $t15574_i1541_i10198_i10514_i10813_i11045 = (() => {
                              {
                                const $t15573_i1540_i10197_i10513_i10812_i11044 = (() => {
                                  {
                                    const $t15571_i1538_i10195_i10512_i10811_i11043 = march_int_and(hi_i1533_i10190_i10507_i10806_i11038, 1048575);
                                    return ($t15571_i1538_i10195_i10512_i10811_i11043 * 4294967296);
                                  }
                                })();
                                return ($t15573_i1540_i10197_i10513_i10812_i11044 + lo_i1536_i10193_i10510_i10809_i11041);
                              }
                            })();
                            return { _0: $t15574_i1541_i10198_i10514_i10813_i11045, _1: rng3_i1537_i10194_i10511_i10810_i11042 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const bits_i10200_i10516_i10815_i11047 = $p15579_i10199_i10515_i10814_i11046._0;
              {
                const rng2_i10201_i10517_i10816_i11048 = $p15579_i10199_i10515_i10814_i11046._1;
                {
                  const $t15578_i10203_i10519_i10818_i11050 = (() => {
                    {
                      const $t15577_i10202_i10518_i10817_i11049 = bits_i10200_i10516_i10815_i11047;
                      return ($t15577_i10202_i10518_i10817_i11049 / 4.50359962737e+15);
                    }
                  })();
                  return { _0: $t15578_i10203_i10519_i10818_i11050, _1: rng2_i10201_i10517_i10816_i11048 };
                }
              }
            }
          }
        })();
        {
          const t_i10521_i10820_i11052 = $p29052_i10520_i10819_i11051._0;
          {
            const rng2_i10522_i10821_i11053 = $p29052_i10520_i10819_i11051._1;
            {
              const out_i10523_i10822_i11054 = { _0: rng2_i10522_i10821_i11053, _1: t_i10521_i10820_i11052 };
              return out_i10523_i10822_i11054;
            }
          }
        }
      }
    })();
    {
      const rng2 = $p27698._0;
      {
        const t = $p27698._1;
        {
          const n = Perihelion$Core$ring_count(s);
          {
            const idx = (() => {
              {
                const $t27696 = (() => {
                  {
                    const $t27695 = n;
                    return (t * $t27695);
                  }
                })();
                return Math.trunc($t27696);
              }
            })();
            {
              const clamped = (() => {
                {
                  const $t27697 = (idx >= n);
                  if ($t27697 === true) {
                    return (n - 1);
                  } else {
                    return idx;
                  }
                }
              })();
              return { _0: rng2, _1: clamped };
            }
          }
        }
      }
    }
  }
}
const Perihelion$Combat$pick_ring_idx$clo = { _0: ($_, rng, s) => Perihelion$Combat$pick_ring_idx(rng, s) };

function Perihelion$Combat$step_ships_go(game, ships, acc, new_shots, dt_s) {
  switch (ships.$) {
    case "Nil": {
      {
        const $t27699 = (() => {
          {
            const go_i3697 = { $: "$Clo_go$4772", _0: go$apply$4772 };
            {
              const $t253_i3698 = { $: "Nil" };
              return go$apply$4772(go_i3697, acc, $t253_i3698);
            }
          }
        })();
        {
          const $t27700 = game.enemy_shots;
          {
            const $t27701 = (() => {
              {
                const go_i9883 = { $: "$Clo_go$4770", _0: go$apply$4770 };
                {
                  const $t261_i9886 = (() => {
                    {
                      const go_i4508_i9884 = { $: "$Clo_go$5253", _0: go$apply$5253 };
                      {
                        const $t253_i4509_i9885 = { $: "Nil" };
                        return go$apply$5253(go_i4508_i9884, new_shots, $t253_i4509_i9885);
                      }
                    }
                  })();
                  return go$apply$4770(go_i9883, $t261_i9886, $t27700);
                }
              }
            })();
            return ({ ...game, ships: $t27699, enemy_shots: $t27701 });
          }
        }
      }
      break;
    }
    case "Cons": {
      const $f27816 = ships._0;
      const $f27817 = ships._1;
      {
        const rest = $f27817;
        {
          const sh = $f27816;
          {
            const $t27702 = sh.mode;
            switch ($t27702.$) {
              case "ShipOrbiting": {
                const $f27804 = $t27702._0;
                const $f27805 = $t27702._1;
                {
                  const angle = (() => {
                    return $f27805;
                  })();
                  {
                    const ring_idx = (() => {
                      return $f27804;
                    })();
                    {
                      const $t27704 = (() => {
                        {
                          const $t27703 = sh.star_idx;
                          return Perihelion$Core$star_at(game, $t27703);
                        }
                      })();
                      switch ($t27704.$) {
                        case "None": {
                          return Perihelion$Combat$step_ships_go(game, rest, acc, new_shots, dt_s);
                          break;
                        }
                        case "Some": {
                          const $f27770 = $t27704._0;
                          {
                            const s = $f27770;
                            {
                              const idle2 = (() => {
                                {
                                  const $t27705 = sh.idle_timer;
                                  return ($t27705 - dt_s);
                                }
                              })();
                              {
                                const $t27706 = (idle2 <= 0.);
                                if ($t27706 === true) {
                                  return (() => {
                                    {
                                      const $p27741 = (() => {
                                        {
                                          const $t27707 = sh.hunter;
                                          if ($t27707 === true) {
                                            return (() => {
                                              {
                                                const $t27708 = game.ball_x;
                                                {
                                                  const $t27709 = game.ball_y;
                                                  return { _0: $t27708, _1: $t27709 };
                                                }
                                              }
                                            })();
                                          } else {
                                            return (() => {
                                              {
                                                const $t27710 = sh.x;
                                                {
                                                  const $t27711 = sh.y;
                                                  return { _0: $t27710, _1: $t27711 };
                                                }
                                              }
                                            })();
                                          }
                                        }
                                      })();
                                      {
                                        const tx = $p27741._0;
                                        {
                                          const ty = $p27741._1;
                                          {
                                            const $t27715 = (() => {
                                              {
                                                const $t27712 = sh.star_idx;
                                                {
                                                  const $t27713 = game.stars;
                                                  {
                                                    const $t27714 = { $: "None" };
                                                    return Perihelion$Combat$nearest_other_star(tx, ty, $t27712, $t27713, 0, $t27714, 999999999.);
                                                  }
                                                }
                                              }
                                            })();
                                            switch ($t27715.$) {
                                              case "None": {
                                                {
                                                  const sh2 = ({ ...sh, idle_timer: 6. });
                                                  {
                                                    const $t27717 = { $: "Cons", _0: sh2, _1: acc };
                                                    return Perihelion$Combat$step_ships_go(game, rest, $t27717, new_shots, dt_s);
                                                  }
                                                }
                                                break;
                                              }
                                              case "Some": {
                                                const $f27740 = $t27715._0;
                                                {
                                                  const target_idx = $f27740;
                                                  {
                                                    const $t27718 = Perihelion$Core$star_at(game, target_idx);
                                                    switch ($t27718.$) {
                                                      case "None": {
                                                        {
                                                          const sh2 = ({ ...sh, idle_timer: 6. });
                                                          {
                                                            const $t27720 = { $: "Cons", _0: sh2, _1: acc };
                                                            return Perihelion$Combat$step_ships_go(game, rest, $t27720, new_shots, dt_s);
                                                          }
                                                        }
                                                        break;
                                                      }
                                                      case "Some": {
                                                        const $f27739 = $t27718._0;
                                                        {
                                                          const t = $f27739;
                                                          {
                                                            const dx = (() => {
                                                              {
                                                                const $t27721 = t.x;
                                                                {
                                                                  const $t27722 = sh.x;
                                                                  return ($t27721 - $t27722);
                                                                }
                                                              }
                                                            })();
                                                            {
                                                              const dy = (() => {
                                                                {
                                                                  const $t27723 = t.y;
                                                                  {
                                                                    const $t27724 = sh.y;
                                                                    return ($t27723 - $t27724);
                                                                  }
                                                                }
                                                              })();
                                                              {
                                                                const dist = (() => {
                                                                  {
                                                                    const $t27727 = (() => {
                                                                      {
                                                                        const $t27725 = (dx * dx);
                                                                        {
                                                                          const $t27726 = (dy * dy);
                                                                          return ($t27725 + $t27726);
                                                                        }
                                                                      }
                                                                    })();
                                                                    return Math.sqrt($t27727);
                                                                  }
                                                                })();
                                                                {
                                                                  const vel = (() => {
                                                                    {
                                                                      const $t27728 = (dist > 0.);
                                                                      if ($t27728 === true) {
                                                                        return (() => {
                                                                          {
                                                                            const $t27731 = (() => {
                                                                              {
                                                                                const $t27729 = (dx / dist);
                                                                                return ($t27729 * 180.);
                                                                              }
                                                                            })();
                                                                            {
                                                                              const $t27734 = (() => {
                                                                                {
                                                                                  const $t27732 = (dy / dist);
                                                                                  return ($t27732 * 180.);
                                                                                }
                                                                              })();
                                                                              return { _0: $t27731, _1: $t27734 };
                                                                            }
                                                                          }
                                                                        })();
                                                                      } else {
                                                                        return { _0: 0., _1: 180. };
                                                                      }
                                                                    }
                                                                  })();
                                                                  {
                                                                    const vx = vel._0;
                                                                    {
                                                                      const vy = vel._1;
                                                                      {
                                                                        const sh2 = (() => {
                                                                          {
                                                                            const $t27736 = { $: "ShipFlying", _0: vx, _1: vy };
                                                                            return ({ ...sh, mode: $t27736 });
                                                                          }
                                                                        })();
                                                                        {
                                                                          const $t27737 = { $: "Cons", _0: sh2, _1: acc };
                                                                          return Perihelion$Combat$step_ships_go(game, rest, $t27737, new_shots, dt_s);
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                        break;
                                                      }
                                                      default: {
                                                        return (() => { throw new Error("non-exhaustive pattern match"); })();
                                                      }
                                                    }
                                                  }
                                                }
                                                break;
                                              }
                                              default: {
                                                return (() => { throw new Error("non-exhaustive pattern match"); })();
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  })();
                                } else {
                                  return (() => {
                                    {
                                      const o = Perihelion$Core$ring_at(s, ring_idx);
                                      {
                                        const d = (0. - 1.);
                                        {
                                          const angle2 = (() => {
                                            {
                                              const $t27748 = (() => {
                                                {
                                                  const $t27747 = (() => {
                                                    {
                                                      const $t27745 = (d * 1.4);
                                                      {
                                                        const $t27746 = o.speed_mult;
                                                        return ($t27745 * $t27746);
                                                      }
                                                    }
                                                  })();
                                                  return ($t27747 * dt_s);
                                                }
                                              })();
                                              return (angle + $t27748);
                                            }
                                          })();
                                          {
                                            const r = o.radius;
                                            {
                                              const sx = (() => {
                                                {
                                                  const $t27749 = s.x;
                                                  {
                                                    const $t27751 = (() => {
                                                      {
                                                        const $t27750 = Math.cos(angle2);
                                                        return ($t27750 * r);
                                                      }
                                                    })();
                                                    return ($t27749 + $t27751);
                                                  }
                                                }
                                              })();
                                              {
                                                const sy = (() => {
                                                  {
                                                    const $t27752 = s.y;
                                                    {
                                                      const $t27754 = (() => {
                                                        {
                                                          const $t27753 = Math.sin(angle2);
                                                          return ($t27753 * r);
                                                        }
                                                      })();
                                                      return ($t27752 + $t27754);
                                                    }
                                                  }
                                                })();
                                                {
                                                  const cd2 = (() => {
                                                    {
                                                      const $t27755 = sh.fire_cooldown;
                                                      return ($t27755 - dt_s);
                                                    }
                                                  })();
                                                  {
                                                    const in_range = (() => {
                                                      {
                                                        const $t27758 = (() => {
                                                          {
                                                            const $t27756 = game.ball_x;
                                                            {
                                                              const $t27757 = game.ball_y;
                                                              {
                                                                const dx_i3705 = ($t27756 - sx);
                                                                {
                                                                  const dy_i3706 = ($t27757 - sy);
                                                                  {
                                                                    const $t27357_i3707 = (dx_i3705 * dx_i3705);
                                                                    {
                                                                      const $t27358_i3708 = (dy_i3706 * dy_i3706);
                                                                      return ($t27357_i3707 + $t27358_i3708);
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        })();
                                                        {
                                                          const $t27761 = (380. * 380.);
                                                          return ($t27758 <= $t27761);
                                                        }
                                                      }
                                                    })();
                                                    {
                                                      const $t27763 = (() => {
                                                        {
                                                          const $t27762 = (cd2 <= 0.);
                                                          return ($t27762 && in_range);
                                                        }
                                                      })();
                                                      if ($t27763 === true) {
                                                        return (() => {
                                                          {
                                                            const shot = Perihelion$Combat$ship_fire_shot(sx, sy, game);
                                                            {
                                                              const sh2 = (() => {
                                                                {
                                                                  const $t27764 = { $: "ShipOrbiting", _0: ring_idx, _1: angle2 };
                                                                  return ({ ...sh, x: sx, y: sy, mode: $t27764, idle_timer: idle2, fire_cooldown: 2.5 });
                                                                }
                                                              })();
                                                              {
                                                                const $t27766 = { $: "Cons", _0: sh2, _1: acc };
                                                                {
                                                                  const $t27767 = { $: "Cons", _0: shot, _1: new_shots };
                                                                  return Perihelion$Combat$step_ships_go(game, rest, $t27766, $t27767, dt_s);
                                                                }
                                                              }
                                                            }
                                                          }
                                                        })();
                                                      } else {
                                                        return (() => {
                                                          {
                                                            const sh2 = (() => {
                                                              {
                                                                const $t27768 = { $: "ShipOrbiting", _0: ring_idx, _1: angle2 };
                                                                return ({ ...sh, x: sx, y: sy, mode: $t27768, idle_timer: idle2, fire_cooldown: cd2 });
                                                              }
                                                            })();
                                                            {
                                                              const $t27769 = { $: "Cons", _0: sh2, _1: acc };
                                                              return Perihelion$Combat$step_ships_go(game, rest, $t27769, new_shots, dt_s);
                                                            }
                                                          }
                                                        })();
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  })();
                                }
                              }
                            }
                          }
                          break;
                        }
                        default: {
                          return (() => { throw new Error("non-exhaustive pattern match"); })();
                        }
                      }
                    }
                  }
                }
                break;
              }
              case "ShipFlying": {
                const $f27810 = $t27702._0;
                const $f27811 = $t27702._1;
                {
                  const vy = (() => {
                    return $f27811;
                  })();
                  {
                    const vx = (() => {
                      return $f27810;
                    })();
                    {
                      const x2 = (() => {
                        {
                          const $t27771 = sh.x;
                          {
                            const $t27772 = (vx * dt_s);
                            return ($t27771 + $t27772);
                          }
                        }
                      })();
                      {
                        const y2 = (() => {
                          {
                            const $t27773 = sh.y;
                            {
                              const $t27774 = (vy * dt_s);
                              return ($t27773 + $t27774);
                            }
                          }
                        })();
                        {
                          const $t27776 = (() => {
                            {
                              const $t27775 = game.stars;
                              return Perihelion$Combat$arrived_star($t27775, x2, y2, 0);
                            }
                          })();
                          switch ($t27776.$) {
                            case "Some": {
                              const $f27803 = $t27776._0;
                              {
                                const pair = $f27803;
                                {
                                  const idx = pair._0;
                                  {
                                    const t = pair._1;
                                    {
                                      const angle = (() => {
                                        {
                                          const $t27778 = (() => {
                                            {
                                              const $t27777 = t.y;
                                              return (y2 - $t27777);
                                            }
                                          })();
                                          {
                                            const $t27780 = (() => {
                                              {
                                                const $t27779 = t.x;
                                                return (x2 - $t27779);
                                              }
                                            })();
                                            return Math.atan2($t27778, $t27780);
                                          }
                                        }
                                      })();
                                      {
                                        const $p27799 = (() => {
                                          {
                                            const $t27781 = game.rng;
                                            {
                                              const $p29052_i10520_i10819_i11070 = (() => {
                                                {
                                                  const $p15579_i10199_i10515_i10814_i11065 = (() => {
                                                    {
                                                      const $p15576_i1532_i10189_i10506_i10805_i11056 = Random$next_raw($t27781);
                                                      {
                                                        const hi_i1533_i10190_i10507_i10806_i11057 = $p15576_i1532_i10189_i10506_i10805_i11056._0;
                                                        {
                                                          const rng2_i1534_i10191_i10508_i10807_i11058 = $p15576_i1532_i10189_i10506_i10805_i11056._1;
                                                          {
                                                            const $p15575_i1535_i10192_i10509_i10808_i11059 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11058);
                                                            {
                                                              const lo_i1536_i10193_i10510_i10809_i11060 = $p15575_i1535_i10192_i10509_i10808_i11059._0;
                                                              {
                                                                const rng3_i1537_i10194_i10511_i10810_i11061 = $p15575_i1535_i10192_i10509_i10808_i11059._1;
                                                                {
                                                                  const $t15574_i1541_i10198_i10514_i10813_i11064 = (() => {
                                                                    {
                                                                      const $t15573_i1540_i10197_i10513_i10812_i11063 = (() => {
                                                                        {
                                                                          const $t15571_i1538_i10195_i10512_i10811_i11062 = march_int_and(hi_i1533_i10190_i10507_i10806_i11057, 1048575);
                                                                          return ($t15571_i1538_i10195_i10512_i10811_i11062 * 4294967296);
                                                                        }
                                                                      })();
                                                                      return ($t15573_i1540_i10197_i10513_i10812_i11063 + lo_i1536_i10193_i10510_i10809_i11060);
                                                                    }
                                                                  })();
                                                                  return { _0: $t15574_i1541_i10198_i10514_i10813_i11064, _1: rng3_i1537_i10194_i10511_i10810_i11061 };
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  })();
                                                  {
                                                    const bits_i10200_i10516_i10815_i11066 = $p15579_i10199_i10515_i10814_i11065._0;
                                                    {
                                                      const rng2_i10201_i10517_i10816_i11067 = $p15579_i10199_i10515_i10814_i11065._1;
                                                      {
                                                        const $t15578_i10203_i10519_i10818_i11069 = (() => {
                                                          {
                                                            const $t15577_i10202_i10518_i10817_i11068 = bits_i10200_i10516_i10815_i11066;
                                                            return ($t15577_i10202_i10518_i10817_i11068 / 4.50359962737e+15);
                                                          }
                                                        })();
                                                        return { _0: $t15578_i10203_i10519_i10818_i11069, _1: rng2_i10201_i10517_i10816_i11067 };
                                                      }
                                                    }
                                                  }
                                                }
                                              })();
                                              {
                                                const t_i10521_i10820_i11071 = $p29052_i10520_i10819_i11070._0;
                                                {
                                                  const rng2_i10522_i10821_i11072 = $p29052_i10520_i10819_i11070._1;
                                                  {
                                                    const out_i10523_i10822_i11073 = { _0: rng2_i10522_i10821_i11072, _1: t_i10521_i10820_i11071 };
                                                    return out_i10523_i10822_i11073;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        })();
                                        {
                                          const rng2 = $p27799._0;
                                          {
                                            const idle_f = $p27799._1;
                                            {
                                              const $p27798 = Perihelion$Combat$pick_ring_idx(rng2, t);
                                              {
                                                const rng3 = $p27798._0;
                                                {
                                                  const ring_idx = $p27798._1;
                                                  {
                                                    const idle = (() => {
                                                      {
                                                        const $t27786 = (() => {
                                                          {
                                                            const $t27785 = (6. - 3.);
                                                            return (idle_f * $t27785);
                                                          }
                                                        })();
                                                        return (3. + $t27786);
                                                      }
                                                    })();
                                                    {
                                                      const o = Perihelion$Core$ring_at(t, ring_idx);
                                                      {
                                                        const r = o.radius;
                                                        {
                                                          const sh2 = (() => {
                                                            {
                                                              const $t27790 = (() => {
                                                                {
                                                                  const $t27787 = t.x;
                                                                  {
                                                                    const $t27789 = (() => {
                                                                      {
                                                                        const $t27788 = Math.cos(angle);
                                                                        return ($t27788 * r);
                                                                      }
                                                                    })();
                                                                    return ($t27787 + $t27789);
                                                                  }
                                                                }
                                                              })();
                                                              {
                                                                const $t27794 = (() => {
                                                                  {
                                                                    const $t27791 = t.y;
                                                                    {
                                                                      const $t27793 = (() => {
                                                                        {
                                                                          const $t27792 = Math.sin(angle);
                                                                          return ($t27792 * r);
                                                                        }
                                                                      })();
                                                                      return ($t27791 + $t27793);
                                                                    }
                                                                  }
                                                                })();
                                                                {
                                                                  const $t27795 = { $: "ShipOrbiting", _0: ring_idx, _1: angle };
                                                                  return ({ ...sh, x: $t27790, y: $t27794, star_idx: idx, mode: $t27795, idle_timer: idle });
                                                                }
                                                              }
                                                            }
                                                          })();
                                                          {
                                                            const $t27796 = ({ ...game, rng: rng3 });
                                                            {
                                                              const $t27797 = { $: "Cons", _0: sh2, _1: acc };
                                                              return Perihelion$Combat$step_ships_go($t27796, rest, $t27797, new_shots, dt_s);
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              break;
                            }
                            case "None": {
                              {
                                const $t27801 = Perihelion$Combat$in_band(game, x2, y2);
                                if ($t27801 === true) {
                                  return (() => {
                                    {
                                      const sh2 = ({ ...sh, x: x2, y: y2 });
                                      {
                                        const $t27802 = { $: "Cons", _0: sh2, _1: acc };
                                        return Perihelion$Combat$step_ships_go(game, rest, $t27802, new_shots, dt_s);
                                      }
                                    }
                                  })();
                                } else {
                                  return Perihelion$Combat$step_ships_go(game, rest, acc, new_shots, dt_s);
                                }
                              }
                              break;
                            }
                            default: {
                              return (() => { throw new Error("non-exhaustive pattern match"); })();
                            }
                          }
                        }
                      }
                    }
                  }
                }
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Combat$step_ships_go$clo = { _0: ($_, game, ships, acc, new_shots, dt_s) => Perihelion$Combat$step_ships_go(game, ships, acc, new_shots, dt_s) };

function Perihelion$Combat$fire_fallback_aim(game) {
  {
    const $t27822 = game.mode;
    switch ($t27822.$) {
      case "Orbiting": {
        const $f27843 = $t27822._0;
        const $f27844 = $t27822._1;
        const $f27845 = $t27822._2;
        {
          const idx = (() => {
            return $f27843;
          })();
          {
            const $t27823 = Perihelion$Core$star_at(game, idx);
            switch ($t27823.$) {
              case "None": {
                return { $: "None" };
                break;
              }
              case "Some": {
                const $f27835 = $t27823._0;
                {
                  const s = $f27835;
                  {
                    const rdx = (() => {
                      {
                        const $t27824 = game.ball_x;
                        {
                          const $t27825 = s.x;
                          return ($t27824 - $t27825);
                        }
                      }
                    })();
                    {
                      const rdy = (() => {
                        {
                          const $t27826 = game.ball_y;
                          {
                            const $t27827 = s.y;
                            return ($t27826 - $t27827);
                          }
                        }
                      })();
                      {
                        const rdist = (() => {
                          {
                            const $t27830 = (() => {
                              {
                                const $t27828 = (rdx * rdx);
                                {
                                  const $t27829 = (rdy * rdy);
                                  return ($t27828 + $t27829);
                                }
                              }
                            })();
                            return Math.sqrt($t27830);
                          }
                        })();
                        {
                          const $t27831 = (rdist > 0.);
                          if ($t27831 === true) {
                            return (() => {
                              {
                                const $t27834 = (() => {
                                  {
                                    const $t27832 = (rdx / rdist);
                                    {
                                      const $t27833 = (rdy / rdist);
                                      return { _0: $t27832, _1: $t27833 };
                                    }
                                  }
                                })();
                                return { $: "Some", _0: $t27834 };
                              }
                            })();
                          } else {
                            return { $: "None" };
                          }
                        }
                      }
                    }
                  }
                }
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          }
        }
        break;
      }
      case "Flying": {
        const $f27854 = $t27822._0;
        const $f27855 = $t27822._1;
        {
          const vy = (() => {
            return $f27855;
          })();
          {
            const vx = (() => {
              return $f27854;
            })();
            {
              const speed = (() => {
                {
                  const $t27838 = (() => {
                    {
                      const $t27836 = (vx * vx);
                      {
                        const $t27837 = (vy * vy);
                        return ($t27836 + $t27837);
                      }
                    }
                  })();
                  return Math.sqrt($t27838);
                }
              })();
              {
                const $t27839 = (speed > 0.);
                if ($t27839 === true) {
                  return (() => {
                    {
                      const $t27842 = (() => {
                        {
                          const $t27840 = (vx / speed);
                          {
                            const $t27841 = (vy / speed);
                            return { _0: $t27840, _1: $t27841 };
                          }
                        }
                      })();
                      return { $: "Some", _0: $t27842 };
                    }
                  })();
                } else {
                  return { $: "None" };
                }
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Combat$fire_fallback_aim$clo = { _0: ($_, game) => Perihelion$Combat$fire_fallback_aim(game) };

function Perihelion$Combat$apply_recoil(game, ax, ay) {
  {
    const $t27860 = game.mode;
    switch ($t27860.$) {
      case "Orbiting": {
        const $f27868 = $t27860._0;
        const $f27869 = $t27860._1;
        const $f27870 = $t27860._2;
        return game;
        break;
      }
      case "Flying": {
        const $f27879 = $t27860._0;
        const $f27880 = $t27860._1;
        {
          const vy = (() => {
            return $f27880;
          })();
          {
            const vx = (() => {
              return $f27879;
            })();
            {
              const $t27867 = (() => {
                {
                  const $t27863 = (() => {
                    {
                      const $t27862 = (ax * 14.);
                      return (vx - $t27862);
                    }
                  })();
                  {
                    const $t27866 = (() => {
                      {
                        const $t27865 = (ay * 14.);
                        return (vy - $t27865);
                      }
                    })();
                    return { $: "Flying", _0: $t27863, _1: $t27866 };
                  }
                }
              })();
              return ({ ...game, mode: $t27867 });
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Combat$apply_recoil$clo = { _0: ($_, game, ax, ay) => Perihelion$Combat$apply_recoil(game, ax, ay) };

function Perihelion$Combat$spread_shots(x, y, ax, ay) {
  {
    const $p27926 = (() => {
      {
        const $t27906 = (0. - 0.5236);
        {
          const $t27899_i9963 = (() => {
            {
              const $t27896_i9960 = (() => {
                {
                  const $t27895_i9959 = Math.cos($t27906);
                  return (ax * $t27895_i9959);
                }
              })();
              {
                const $t27898_i9962 = (() => {
                  {
                    const $t27897_i9961 = Math.sin($t27906);
                    return (ay * $t27897_i9961);
                  }
                })();
                return ($t27896_i9960 - $t27898_i9962);
              }
            }
          })();
          {
            const $t27904_i9968 = (() => {
              {
                const $t27901_i9965 = (() => {
                  {
                    const $t27900_i9964 = Math.sin($t27906);
                    return (ax * $t27900_i9964);
                  }
                })();
                {
                  const $t27903_i9967 = (() => {
                    {
                      const $t27902_i9966 = Math.cos($t27906);
                      return (ay * $t27902_i9966);
                    }
                  })();
                  return ($t27901_i9965 + $t27903_i9967);
                }
              }
            })();
            return { _0: $t27899_i9963, _1: $t27904_i9968 };
          }
        }
      }
    })();
    {
      const a1x = $p27926._0;
      {
        const a1y = $p27926._1;
        {
          const $p27925 = (() => {
            {
              const $t27909 = (() => {
                {
                  const $t27908 = (0.5236 / 2.);
                  return (0. - $t27908);
                }
              })();
              {
                const $t27899_i9950 = (() => {
                  {
                    const $t27896_i9947 = (() => {
                      {
                        const $t27895_i9946 = Math.cos($t27909);
                        return (ax * $t27895_i9946);
                      }
                    })();
                    {
                      const $t27898_i9949 = (() => {
                        {
                          const $t27897_i9948 = Math.sin($t27909);
                          return (ay * $t27897_i9948);
                        }
                      })();
                      return ($t27896_i9947 - $t27898_i9949);
                    }
                  }
                })();
                {
                  const $t27904_i9955 = (() => {
                    {
                      const $t27901_i9952 = (() => {
                        {
                          const $t27900_i9951 = Math.sin($t27909);
                          return (ax * $t27900_i9951);
                        }
                      })();
                      {
                        const $t27903_i9954 = (() => {
                          {
                            const $t27902_i9953 = Math.cos($t27909);
                            return (ay * $t27902_i9953);
                          }
                        })();
                        return ($t27901_i9952 + $t27903_i9954);
                      }
                    }
                  })();
                  return { _0: $t27899_i9950, _1: $t27904_i9955 };
                }
              }
            }
          })();
          {
            const a2x = $p27925._0;
            {
              const a2y = $p27925._1;
              {
                const $p27924 = (() => {
                  {
                    const $t27911 = (0.5236 / 2.);
                    {
                      const $t27899_i9937 = (() => {
                        {
                          const $t27896_i9934 = (() => {
                            {
                              const $t27895_i9933 = Math.cos($t27911);
                              return (ax * $t27895_i9933);
                            }
                          })();
                          {
                            const $t27898_i9936 = (() => {
                              {
                                const $t27897_i9935 = Math.sin($t27911);
                                return (ay * $t27897_i9935);
                              }
                            })();
                            return ($t27896_i9934 - $t27898_i9936);
                          }
                        }
                      })();
                      {
                        const $t27904_i9942 = (() => {
                          {
                            const $t27901_i9939 = (() => {
                              {
                                const $t27900_i9938 = Math.sin($t27911);
                                return (ax * $t27900_i9938);
                              }
                            })();
                            {
                              const $t27903_i9941 = (() => {
                                {
                                  const $t27902_i9940 = Math.cos($t27911);
                                  return (ay * $t27902_i9940);
                                }
                              })();
                              return ($t27901_i9939 + $t27903_i9941);
                            }
                          }
                        })();
                        return { _0: $t27899_i9937, _1: $t27904_i9942 };
                      }
                    }
                  }
                })();
                {
                  const a3x = $p27924._0;
                  {
                    const a3y = $p27924._1;
                    {
                      const $p27923 = (() => {
                        {
                          const $t27899_i9924 = (() => {
                            {
                              const $t27896_i9921 = (() => {
                                {
                                  const $t27895_i9920 = Math.cos(0.5236);
                                  return (ax * $t27895_i9920);
                                }
                              })();
                              {
                                const $t27898_i9923 = (() => {
                                  {
                                    const $t27897_i9922 = Math.sin(0.5236);
                                    return (ay * $t27897_i9922);
                                  }
                                })();
                                return ($t27896_i9921 - $t27898_i9923);
                              }
                            }
                          })();
                          {
                            const $t27904_i9929 = (() => {
                              {
                                const $t27901_i9926 = (() => {
                                  {
                                    const $t27900_i9925 = Math.sin(0.5236);
                                    return (ax * $t27900_i9925);
                                  }
                                })();
                                {
                                  const $t27903_i9928 = (() => {
                                    {
                                      const $t27902_i9927 = Math.cos(0.5236);
                                      return (ay * $t27902_i9927);
                                    }
                                  })();
                                  return ($t27901_i9926 + $t27903_i9928);
                                }
                              }
                            })();
                            return { _0: $t27899_i9924, _1: $t27904_i9929 };
                          }
                        }
                      })();
                      {
                        const a4x = $p27923._0;
                        {
                          const a4y = $p27923._1;
                          {
                            const $t27913 = (() => {
                              {
                                const $t27886_i9915 = (ax * 420.);
                                {
                                  const $t27888_i9916 = (ay * 420.);
                                  return ({ x: x, y: y, vx: $t27886_i9915, vy: $t27888_i9916, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                }
                              }
                            })();
                            {
                              const $t27914 = (() => {
                                {
                                  const $t27886_i9909 = (a1x * 420.);
                                  {
                                    const $t27888_i9910 = (a1y * 420.);
                                    return ({ x: x, y: y, vx: $t27886_i9909, vy: $t27888_i9910, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                  }
                                }
                              })();
                              {
                                const $t27915 = (() => {
                                  {
                                    const $t27886_i9903 = (a2x * 420.);
                                    {
                                      const $t27888_i9904 = (a2y * 420.);
                                      return ({ x: x, y: y, vx: $t27886_i9903, vy: $t27888_i9904, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                    }
                                  }
                                })();
                                {
                                  const $t27916 = (() => {
                                    {
                                      const $t27886_i9897 = (a3x * 420.);
                                      {
                                        const $t27888_i9898 = (a3y * 420.);
                                        return ({ x: x, y: y, vx: $t27886_i9897, vy: $t27888_i9898, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                      }
                                    }
                                  })();
                                  {
                                    const $t27917 = (() => {
                                      {
                                        const $t27886_i9891 = (a4x * 420.);
                                        {
                                          const $t27888_i9892 = (a4y * 420.);
                                          return ({ x: x, y: y, vx: $t27886_i9891, vy: $t27888_i9892, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                        }
                                      }
                                    })();
                                    {
                                      const $t27918 = { $: "Nil" };
                                      {
                                        const $t27919 = { $: "Cons", _0: $t27917, _1: $t27918 };
                                        {
                                          const $t27920 = { $: "Cons", _0: $t27916, _1: $t27919 };
                                          {
                                            const $t27921 = { $: "Cons", _0: $t27915, _1: $t27920 };
                                            {
                                              const $t27922 = { $: "Cons", _0: $t27914, _1: $t27921 };
                                              return { $: "Cons", _0: $t27913, _1: $t27922 };
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Combat$spread_shots$clo = { _0: ($_, x, y, ax, ay) => Perihelion$Combat$spread_shots(x, y, ax, ay) };

function Perihelion$Combat$starkiller_on_cooldown(game) {
  {
    const $t27927 = Perihelion$Core$active_weapon(game);
    switch ($t27927.$) {
      case "StarKiller": {
        {
          const $t27928 = game.starkiller_cooldown;
          return ($t27928 > 0.);
        }
        break;
      }
      default: {
        return false;
      }
    }
  }
}
const Perihelion$Combat$starkiller_on_cooldown$clo = { _0: ($_, game) => Perihelion$Combat$starkiller_on_cooldown(game) };

function Perihelion$Combat$fire(game, keys, cursor, _dt_s) {
  {
    const pressed = (() => {
      {
        const $t27930 = { $: "$Clo_$lam27929$3694", _0: $lam27929$apply$3694 };
        return List$any$List_String$Fn_String_Bool(keys, $t27930);
      }
    })();
    {
      const $t27936 = (() => {
        {
          const $t27934 = (() => {
            {
              const $t27931 = (!pressed);
              {
                const $t27933 = (() => {
                  {
                    const $t27932 = game.fire_cooldown;
                    return ($t27932 > 0.);
                  }
                })();
                return ($t27931 || $t27933);
              }
            }
          })();
          {
            const $t27935 = Perihelion$Combat$starkiller_on_cooldown(game);
            return ($t27934 || $t27935);
          }
        }
      })();
      if ($t27936 === true) {
        return game;
      } else {
        return (() => {
          {
            const cx = cursor._0;
            {
              const cy = cursor._1;
              {
                const cursor_world_x = (() => {
                  {
                    const $t27937 = cx;
                    {
                      const $t27938 = game.camera_x;
                      return ($t27937 + $t27938);
                    }
                  }
                })();
                {
                  const cursor_world_y = (() => {
                    {
                      const $t27939 = cy;
                      {
                        const $t27940 = game.camera_y;
                        return ($t27939 + $t27940);
                      }
                    }
                  })();
                  {
                    const dx = (() => {
                      {
                        const $t27941 = game.ball_x;
                        return (cursor_world_x - $t27941);
                      }
                    })();
                    {
                      const dy = (() => {
                        {
                          const $t27942 = game.ball_y;
                          return (cursor_world_y - $t27942);
                        }
                      })();
                      {
                        const dist = (() => {
                          {
                            const $t27945 = (() => {
                              {
                                const $t27943 = (dx * dx);
                                {
                                  const $t27944 = (dy * dy);
                                  return ($t27943 + $t27944);
                                }
                              }
                            })();
                            return Math.sqrt($t27945);
                          }
                        })();
                        {
                          const aim = (() => {
                            {
                              const $t27946 = (dist > 0.);
                              if ($t27946 === true) {
                                return (() => {
                                  {
                                    const $t27949 = (() => {
                                      {
                                        const $t27947 = (dx / dist);
                                        {
                                          const $t27948 = (dy / dist);
                                          return { _0: $t27947, _1: $t27948 };
                                        }
                                      }
                                    })();
                                    return { $: "Some", _0: $t27949 };
                                  }
                                })();
                              } else {
                                return Perihelion$Combat$fire_fallback_aim(game);
                              }
                            }
                          })();
                          switch (aim.$) {
                            case "None": {
                              return game;
                              break;
                            }
                            case "Some": {
                              const $f27996 = aim._0;
                              {
                                const pair = $f27996;
                                {
                                  const ax = pair._0;
                                  {
                                    const ay = pair._1;
                                    {
                                      const g2 = Perihelion$Combat$apply_recoil(game, ax, ay);
                                      {
                                        const $t27950 = Perihelion$Core$active_weapon(game);
                                        {
                                          let new_shots;
                                          switch ($t27950.$) {
                                            case "Base": {
                                              new_shots = (() => {
                                                {
                                                  const $t27953 = (() => {
                                                    {
                                                      const $t27951 = game.ball_x;
                                                      {
                                                        const $t27952 = game.ball_y;
                                                        {
                                                          const $t27886_i9985 = (ax * 420.);
                                                          {
                                                            const $t27888_i9986 = (ay * 420.);
                                                            return ({ x: $t27951, y: $t27952, vx: $t27886_i9985, vy: $t27888_i9986, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                                          }
                                                        }
                                                      }
                                                    }
                                                  })();
                                                  {
                                                    const $t27954 = { $: "Nil" };
                                                    return { $: "Cons", _0: $t27953, _1: $t27954 };
                                                  }
                                                }
                                              })();
                                              break;
                                            }
                                            case "Homing": {
                                              new_shots = (() => {
                                                {
                                                  const $t27957 = (() => {
                                                    {
                                                      const $t27955 = game.ball_x;
                                                      {
                                                        const $t27956 = game.ball_y;
                                                        {
                                                          const $t27891_i9991 = (ax * 420.);
                                                          {
                                                            const $t27893_i9992 = (ay * 420.);
                                                            return ({ x: $t27955, y: $t27956, vx: $t27891_i9991, vy: $t27893_i9992, ttl: 3., homing: true, star_killer: false, target_x: 0., target_y: 0. });
                                                          }
                                                        }
                                                      }
                                                    }
                                                  })();
                                                  {
                                                    const $t27958 = { $: "Nil" };
                                                    return { $: "Cons", _0: $t27957, _1: $t27958 };
                                                  }
                                                }
                                              })();
                                              break;
                                            }
                                            case "Spread": {
                                              new_shots = (() => {
                                                {
                                                  const $t27959 = game.ball_x;
                                                  {
                                                    const $t27960 = game.ball_y;
                                                    return Perihelion$Combat$spread_shots($t27959, $t27960, ax, ay);
                                                  }
                                                }
                                              })();
                                              break;
                                            }
                                            case "StarKiller": {
                                              new_shots = (() => {
                                                {
                                                  const $t27962 = (() => {
                                                    {
                                                      const $t27961 = Perihelion$Combat$starkiller_target_idx(game);
                                                      return Perihelion$Core$star_at(game, $t27961);
                                                    }
                                                  })();
                                                  switch ($t27962.$) {
                                                    case "None": {
                                                      return { $: "Nil" };
                                                      break;
                                                    }
                                                    case "Some": {
                                                      const $f27985 = $t27962._0;
                                                      {
                                                        const target = $f27985;
                                                        {
                                                          const tdx = (() => {
                                                            {
                                                              const $t27963 = target.x;
                                                              {
                                                                const $t27964 = game.ball_x;
                                                                return ($t27963 - $t27964);
                                                              }
                                                            }
                                                          })();
                                                          {
                                                            const tdy = (() => {
                                                              {
                                                                const $t27965 = target.y;
                                                                {
                                                                  const $t27966 = game.ball_y;
                                                                  return ($t27965 - $t27966);
                                                                }
                                                              }
                                                            })();
                                                            {
                                                              const tdist = (() => {
                                                                {
                                                                  const $t27969 = (() => {
                                                                    {
                                                                      const $t27967 = (tdx * tdx);
                                                                      {
                                                                        const $t27968 = (tdy * tdy);
                                                                        return ($t27967 + $t27968);
                                                                      }
                                                                    }
                                                                  })();
                                                                  return Math.sqrt($t27969);
                                                                }
                                                              })();
                                                              {
                                                                const $t27970 = (tdist <= 0.);
                                                                if ($t27970 === true) {
                                                                  return { $: "Nil" };
                                                                } else {
                                                                  return (() => {
                                                                    {
                                                                      const $t27983 = (() => {
                                                                        {
                                                                          const $t27971 = game.ball_x;
                                                                          {
                                                                            const $t27972 = game.ball_y;
                                                                            {
                                                                              const $t27975 = (() => {
                                                                                {
                                                                                  const $t27973 = (tdx / tdist);
                                                                                  return ($t27973 * 420.);
                                                                                }
                                                                              })();
                                                                              {
                                                                                const $t27978 = (() => {
                                                                                  {
                                                                                    const $t27976 = (tdy / tdist);
                                                                                    return ($t27976 * 420.);
                                                                                  }
                                                                                })();
                                                                                {
                                                                                  const $t27980 = (3. * 3.);
                                                                                  {
                                                                                    const $t27981 = target.x;
                                                                                    {
                                                                                      const $t27982 = target.y;
                                                                                      return ({ x: $t27971, y: $t27972, vx: $t27975, vy: $t27978, ttl: $t27980, homing: false, star_killer: true, target_x: $t27981, target_y: $t27982 });
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      })();
                                                                      {
                                                                        const $t27984 = { $: "Nil" };
                                                                        return { $: "Cons", _0: $t27983, _1: $t27984 };
                                                                      }
                                                                    }
                                                                  })();
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                      break;
                                                    }
                                                    default: {
                                                      return (() => { throw new Error("non-exhaustive pattern match"); })();
                                                    }
                                                  }
                                                }
                                              })();
                                              break;
                                            }
                                            default: {
                                              new_shots = (() => {
                                                return (() => { throw new Error("non-exhaustive pattern match"); })();
                                              })();
                                              break;
                                            }
                                          }
                                          {
                                            const cooldown2 = (() => {
                                              {
                                                const $t27986 = Perihelion$Core$active_weapon(game);
                                                switch ($t27986.$) {
                                                  case "StarKiller": {
                                                    return game.fire_cooldown;
                                                    break;
                                                  }
                                                  default: {
                                                    {
                                                      const reduced_i9979 = (() => {
                                                        {
                                                          const $t27346_i9978 = (() => {
                                                            {
                                                              const $t27344_i9977 = (() => {
                                                                {
                                                                  const $t27343_i9976 = game.fire_rate_stacks;
                                                                  return $t27343_i9976;
                                                                }
                                                              })();
                                                              return ($t27344_i9977 * 0.05);
                                                            }
                                                          })();
                                                          return (0.4 - $t27346_i9978);
                                                        }
                                                      })();
                                                      {
                                                        const $t27348_i9980 = (reduced_i9979 < 0.15);
                                                        if ($t27348_i9980 === true) {
                                                          return 0.15;
                                                        } else {
                                                          return reduced_i9979;
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            })();
                                            {
                                              const starkiller_cd2 = (() => {
                                                {
                                                  const $t27989 = Perihelion$Core$active_weapon(game);
                                                  switch ($t27989.$) {
                                                    case "StarKiller": {
                                                      {
                                                        let $t27990;
                                                        switch (new_shots.$) {
                                                          case "Nil": {
                                                            $t27990 = true;
                                                            break;
                                                          }
                                                          default: {
                                                            $t27990 = false;
                                                            break;
                                                          }
                                                        }
                                                        if ($t27990 === true) {
                                                          return game.starkiller_cooldown;
                                                        } else {
                                                          return 12.;
                                                        }
                                                      }
                                                      break;
                                                    }
                                                    default: {
                                                      return game.starkiller_cooldown;
                                                    }
                                                  }
                                                }
                                              })();
                                              {
                                                const $t27993 = g2.player_shots;
                                                {
                                                  const $t27994 = (() => {
                                                    {
                                                      const go_i9971 = { $: "$Clo_go$4770", _0: go$apply$4770 };
                                                      {
                                                        const $t261_i9974 = (() => {
                                                          {
                                                            const go_i4508_i9972 = { $: "$Clo_go$5253", _0: go$apply$5253 };
                                                            {
                                                              const $t253_i4509_i9973 = { $: "Nil" };
                                                              return go$apply$5253(go_i4508_i9972, $t27993, $t253_i4509_i9973);
                                                            }
                                                          }
                                                        })();
                                                        return go$apply$4770(go_i9971, $t261_i9974, new_shots);
                                                      }
                                                    }
                                                  })();
                                                  return ({ ...g2, player_shots: $t27994, fire_cooldown: cooldown2, starkiller_cooldown: starkiller_cd2 });
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              break;
                            }
                            default: {
                              return (() => { throw new Error("non-exhaustive pattern match"); })();
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })();
      }
    }
  }
}
const Perihelion$Combat$fire$clo = { _0: ($_, game, keys, cursor, _dt_s) => Perihelion$Combat$fire(game, keys, cursor, _dt_s) };

function Perihelion$Combat$find_star_by_pos(stars, tx, ty, i) {
  switch (stars.$) {
    case "Nil": {
      return { $: "None" };
      break;
    }
    case "Cons": {
      const $f28012 = stars._0;
      const $f28013 = stars._1;
      {
        const rest = (() => {
          return $f28013;
        })();
        {
          const s = (() => {
            return $f28012;
          })();
          {
            const $t28010 = (() => {
              {
                const $t28008 = s.x;
                {
                  const $t28009 = s.y;
                  {
                    const $t27359_i10003 = (() => {
                      {
                        const dx_i3632_i9999 = (tx - $t28008);
                        {
                          const dy_i3633_i10000 = (ty - $t28009);
                          {
                            const $t27357_i3634_i10001 = (dx_i3632_i9999 * dx_i3632_i9999);
                            {
                              const $t27358_i3635_i10002 = (dy_i3633_i10000 * dy_i3633_i10000);
                              return ($t27357_i3634_i10001 + $t27358_i3635_i10002);
                            }
                          }
                        }
                      }
                    })();
                    {
                      const $t27362_i10006 = (() => {
                        {
                          const $t27360_i10004 = (0.001 + 0.);
                          {
                            const $t27361_i10005 = (0.001 + 0.);
                            return ($t27360_i10004 * $t27361_i10005);
                          }
                        }
                      })();
                      return ($t27359_i10003 <= $t27362_i10006);
                    }
                  }
                }
              }
            })();
            if ($t28010 === true) {
              return { $: "Some", _0: i };
            } else {
              return (() => {
                {
                  const $t28011 = (i + 1);
                  return Perihelion$Combat$find_star_by_pos(rest, tx, ty, $t28011);
                }
              })();
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Combat$find_star_by_pos$clo = { _0: ($_, stars, tx, ty, i) => Perihelion$Combat$find_star_by_pos(stars, tx, ty, i) };

function Perihelion$Combat$collide_shots_stars(game) {
  {
    const $t28018 = game.player_shots;
    {
      const $t28020 = { $: "$Clo_$lam28019$3700", _0: $lam28019$apply$3700 };
      {
        const sk_shots = (() => {
          {
            const pred_i3755 = $t28020;
            {
              const go_i3756 = { $: "$Clo_go$4764", _0: go$apply$4764, _1: pred_i3755 };
              {
                const $t302_i3757 = { $: "Nil" };
                return go$apply$4764(go_i3756, $t28018, $t302_i3757);
              }
            }
          }
        })();
        switch (sk_shots.$) {
          case "Nil": {
            return game;
            break;
          }
          case "Cons": {
            const $f28044 = sk_shots._0;
            const $f28045 = sk_shots._1;
            {
              const s = $f28044;
              {
                const $t28026 = (() => {
                  {
                    const $t28021 = s.x;
                    {
                      const $t28022 = s.y;
                      {
                        const $t28024 = s.target_x;
                        {
                          const $t28025 = s.target_y;
                          {
                            const $t27359_i10028 = (() => {
                              {
                                const dx_i3632_i10024 = ($t28024 - $t28021);
                                {
                                  const dy_i3633_i10025 = ($t28025 - $t28022);
                                  {
                                    const $t27357_i3634_i10026 = (dx_i3632_i10024 * dx_i3632_i10024);
                                    {
                                      const $t27358_i3635_i10027 = (dy_i3633_i10025 * dy_i3633_i10025);
                                      return ($t27357_i3634_i10026 + $t27358_i3635_i10027);
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const $t27362_i10031 = (() => {
                                {
                                  const $t27360_i10029 = (20. + 0.);
                                  {
                                    const $t27361_i10030 = (20. + 0.);
                                    return ($t27360_i10029 * $t27361_i10030);
                                  }
                                }
                              })();
                              return ($t27359_i10028 <= $t27362_i10031);
                            }
                          }
                        }
                      }
                    }
                  }
                })();
                if ($t28026 === true) {
                  return (() => {
                    {
                      const $t28030 = (() => {
                        {
                          const $t28027 = game.stars;
                          {
                            const $t28028 = s.target_x;
                            {
                              const $t28029 = s.target_y;
                              return Perihelion$Combat$find_star_by_pos($t28027, $t28028, $t28029, 0);
                            }
                          }
                        }
                      })();
                      switch ($t28030.$) {
                        case "None": {
                          {
                            const $t28031 = game.player_shots;
                            {
                              const $t28034 = { $: "$Clo_$lam28032$3702", _0: $lam28032$apply$3702 };
                              {
                                const $t28035 = (() => {
                                  {
                                    const pred_i3747 = $t28034;
                                    {
                                      const go_i3748 = { $: "$Clo_go$4764", _0: go$apply$4764, _1: pred_i3747 };
                                      {
                                        const $t302_i3749 = { $: "Nil" };
                                        return go$apply$4764(go_i3748, $t28031, $t302_i3749);
                                      }
                                    }
                                  }
                                })();
                                return ({ ...game, player_shots: $t28035 });
                              }
                            }
                          }
                          break;
                        }
                        case "Some": {
                          const $f28043 = $t28030._0;
                          {
                            const tidx = $f28043;
                            {
                              const g2 = Perihelion$Core$remove_star(game, tidx);
                              {
                                const $t28036 = g2.ships;
                                {
                                  const $t28037 = (() => {
                                    {
                                      const $t28000_i10009 = { $: "$Clo_$lam27998$3697", _0: $lam27998$apply$3697, _1: tidx };
                                      {
                                        const $t28001_i10013 = (() => {
                                          {
                                            const pred_i3740_i10010 = $t28000_i10009;
                                            {
                                              const go_i3741_i10011 = { $: "$Clo_go$4776", _0: go$apply$4776, _1: pred_i3740_i10010 };
                                              {
                                                const $t302_i3742_i10012 = { $: "Nil" };
                                                return go$apply$4776(go_i3741_i10011, $t28036, $t302_i3742_i10012);
                                              }
                                            }
                                          }
                                        })();
                                        {
                                          const $t28007_i10014 = { $: "$Clo_$lam28002$3698", _0: $lam28002$apply$3698, _1: tidx };
                                          {
                                            const f_i3736_i10015 = $t28007_i10014;
                                            {
                                              const go_i3737_i10016 = { $: "$Clo_go$4774", _0: go$apply$4774, _1: f_i3736_i10015 };
                                              {
                                                const $t270_i3738_i10017 = { $: "Nil" };
                                                return go$apply$4774(go_i3737_i10016, $t28001_i10013, $t270_i3738_i10017);
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const $t28038 = game.player_shots;
                                    {
                                      const $t28041 = { $: "$Clo_$lam28039$3703", _0: $lam28039$apply$3703 };
                                      {
                                        const $t28042 = (() => {
                                          {
                                            const pred_i3751 = $t28041;
                                            {
                                              const go_i3752 = { $: "$Clo_go$4764", _0: go$apply$4764, _1: pred_i3751 };
                                              {
                                                const $t302_i3753 = { $: "Nil" };
                                                return go$apply$4764(go_i3752, $t28038, $t302_i3753);
                                              }
                                            }
                                          }
                                        })();
                                        return ({ ...g2, ships: $t28037, player_shots: $t28042 });
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          break;
                        }
                        default: {
                          return (() => { throw new Error("non-exhaustive pattern match"); })();
                        }
                      }
                    }
                  })();
                } else {
                  return game;
                }
              }
            }
            break;
          }
          default: {
            return (() => { throw new Error("non-exhaustive pattern match"); })();
          }
        }
      }
    }
  }
}
const Perihelion$Combat$collide_shots_stars$clo = { _0: ($_, game) => Perihelion$Combat$collide_shots_stars(game) };

function Perihelion$Combat$streak_bumps(old_streak, new_streak, threshold) {
  {
    const $t28057 = Math.trunc(new_streak / threshold);
    {
      const $t28058 = Math.trunc(old_streak / threshold);
      return ($t28057 - $t28058);
    }
  }
}
const Perihelion$Combat$streak_bumps$clo = { _0: ($_, old_streak, new_streak, threshold) => Perihelion$Combat$streak_bumps(old_streak, new_streak, threshold) };

function Perihelion$Combat$collide_shots_asteroids(game) {
  {
    const $p28093 = (() => {
      {
        const $t28061 = game.asteroids;
        {
          const $t28069 = { $: "$Clo_$lam28062$3705", _0: $lam28062$apply$3705, _1: game };
          {
            const pred_i3769 = $t28069;
            {
              const go_i3770 = { $: "$Clo_go$4783", _0: go$apply$4783, _1: pred_i3769 };
              {
                const $t557_i3771 = { $: "Nil" };
                {
                  const $t558_i3772 = { $: "Nil" };
                  return go$apply$4783(go_i3770, $t28061, $t557_i3771, $t558_i3772);
                }
              }
            }
          }
        }
      }
    })();
    {
      const dead = $p28093._0;
      {
        const alive = $p28093._1;
        {
          const $t28070 = game.player_shots;
          {
            const $t28079 = { $: "$Clo_$lam28071$3707", _0: $lam28071$apply$3707, _1: game };
            {
              const shots = (() => {
                {
                  const pred_i3765 = $t28079;
                  {
                    const go_i3766 = { $: "$Clo_go$4764", _0: go$apply$4764, _1: pred_i3765 };
                    {
                      const $t302_i3767 = { $: "Nil" };
                      return go$apply$4764(go_i3766, $t28070, $t302_i3767);
                    }
                  }
                }
              })();
              {
                const killed = (() => {
                  {
                    const go_i3763 = { $: "$Clo_go$4780", _0: go$apply$4780 };
                    return go$apply$4780(go_i3763, dead, 0);
                  }
                })();
                {
                  const $t28080 = (killed === 0);
                  if ($t28080 === true) {
                    return (() => {
                      {
                        const $t28081 = (() => {
                          {
                            const $t28056_i10056 = { $: "$Clo_$lam28053$3704", _0: $lam28053$apply$3704 };
                            {
                              const f_i3759_i10057 = $t28056_i10056;
                              {
                                const go_i3760_i10058 = { $: "$Clo_go$4778", _0: go$apply$4778, _1: f_i3759_i10057 };
                                {
                                  const $t270_i3761_i10059 = { $: "Nil" };
                                  return go$apply$4778(go_i3760_i10058, dead, $t270_i3761_i10059);
                                }
                              }
                            }
                          }
                        })();
                        return ({ ...game, asteroids: alive, player_shots: shots, fx_bursts: $t28081 });
                      }
                    })();
                  } else {
                    return (() => {
                      {
                        const new_streak = (() => {
                          {
                            const $t28082 = game.asteroid_kill_streak;
                            return ($t28082 + killed);
                          }
                        })();
                        {
                          const bumps = (() => {
                            {
                              const $t28083 = game.asteroid_kill_streak;
                              return Perihelion$Combat$streak_bumps($t28083, new_streak, 5);
                            }
                          })();
                          {
                            const new_mult = (() => {
                              {
                                const $t28085 = game.multiplier;
                                {
                                  const raw_i10053 = ($t28085 + bumps);
                                  {
                                    const $t28060_i10054 = (raw_i10053 > 5);
                                    if ($t28060_i10054 === true) {
                                      return 5;
                                    } else {
                                      return raw_i10053;
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const $t28088 = (() => {
                                {
                                  const $t28086 = game.score;
                                  {
                                    const $t28087 = (killed * new_mult);
                                    return ($t28086 + $t28087);
                                  }
                                }
                              })();
                              {
                                const $t28089 = (() => {
                                  {
                                    const $t28056_i10047 = { $: "$Clo_$lam28053$3704", _0: $lam28053$apply$3704 };
                                    {
                                      const f_i3759_i10048 = $t28056_i10047;
                                      {
                                        const go_i3760_i10049 = { $: "$Clo_go$4778", _0: go$apply$4778, _1: f_i3759_i10048 };
                                        {
                                          const $t270_i3761_i10050 = { $: "Nil" };
                                          return go$apply$4778(go_i3760_i10049, dead, $t270_i3761_i10050);
                                        }
                                      }
                                    }
                                  }
                                })();
                                {
                                  const $t28092 = (() => {
                                    {
                                      const $t28091 = (() => {
                                        {
                                          const $t28090 = game.max_mult;
                                          return (new_mult > $t28090);
                                        }
                                      })();
                                      if ($t28091 === true) {
                                        return new_mult;
                                      } else {
                                        return game.max_mult;
                                      }
                                    }
                                  })();
                                  return ({ ...game, asteroids: alive, player_shots: shots, score: $t28088, fx_bursts: $t28089, asteroid_kill_streak: new_streak, ship_kill_streak: 0, multiplier: new_mult, max_mult: $t28092 });
                                }
                              }
                            }
                          }
                        }
                      }
                    })();
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Combat$collide_shots_asteroids$clo = { _0: ($_, game) => Perihelion$Combat$collide_shots_asteroids(game) };

function Perihelion$Combat$ship_shot_hit(sh, s) {
  {
    const pos = (() => {
      {
        const pos_i3776 = (() => {
          {
            const $t27355_i3774 = sh.x;
            {
              const $t27356_i3775 = sh.y;
              return { _0: $t27355_i3774, _1: $t27356_i3775 };
            }
          }
        })();
        return pos_i3776;
      }
    })();
    {
      const sx = pos._0;
      {
        const sy = pos._1;
        {
          const $t28050_i10481 = s.x;
          {
            const $t28051_i10482 = s.y;
            {
              const $t27359_i10042_i10487 = (() => {
                {
                  const dx_i3632_i10038_i10483 = (sx - $t28050_i10481);
                  {
                    const dy_i3633_i10039_i10484 = (sy - $t28051_i10482);
                    {
                      const $t27357_i3634_i10040_i10485 = (dx_i3632_i10038_i10483 * dx_i3632_i10038_i10483);
                      {
                        const $t27358_i3635_i10041_i10486 = (dy_i3633_i10039_i10484 * dy_i3633_i10039_i10484);
                        return ($t27357_i3634_i10040_i10485 + $t27358_i3635_i10041_i10486);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10045_i10490 = (() => {
                  {
                    const $t27360_i10043_i10488 = (3. + 10.);
                    {
                      const $t27361_i10044_i10489 = (3. + 10.);
                      return ($t27360_i10043_i10488 * $t27361_i10044_i10489);
                    }
                  }
                })();
                return ($t27359_i10042_i10487 <= $t27362_i10045_i10490);
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Combat$ship_shot_hit$clo = { _0: ($_, sh, s) => Perihelion$Combat$ship_shot_hit(sh, s) };

function Perihelion$Combat$collide_shots_ships(game) {
  {
    const $p28121 = (() => {
      {
        const $t28096 = game.ships;
        {
          const $t28101 = { $: "$Clo_$lam28097$3709", _0: $lam28097$apply$3709, _1: game };
          {
            const pred_i3784 = $t28101;
            {
              const go_i3785 = { $: "$Clo_go$4789", _0: go$apply$4789, _1: pred_i3784 };
              {
                const $t557_i3786 = { $: "Nil" };
                {
                  const $t558_i3787 = { $: "Nil" };
                  return go$apply$4789(go_i3785, $t28096, $t557_i3786, $t558_i3787);
                }
              }
            }
          }
        }
      }
    })();
    {
      const dead = $p28121._0;
      {
        const alive = $p28121._1;
        {
          const $t28102 = game.player_shots;
          {
            const $t28108 = { $: "$Clo_$lam28103$3711", _0: $lam28103$apply$3711, _1: game };
            {
              const shots = (() => {
                {
                  const pred_i3780 = $t28108;
                  {
                    const go_i3781 = { $: "$Clo_go$4764", _0: go$apply$4764, _1: pred_i3780 };
                    {
                      const $t302_i3782 = { $: "Nil" };
                      return go$apply$4764(go_i3781, $t28102, $t302_i3782);
                    }
                  }
                }
              })();
              {
                const killed = (() => {
                  {
                    const go_i3778 = { $: "$Clo_go$4786", _0: go$apply$4786 };
                    return go$apply$4786(go_i3778, dead, 0);
                  }
                })();
                {
                  const g2 = (() => {
                    {
                      const $t28109 = (killed === 0);
                      if ($t28109 === true) {
                        return (() => {
                          return ({ ...game, ships: alive, player_shots: shots });
                        })();
                      } else {
                        return (() => {
                          {
                            const new_streak = (() => {
                              {
                                const $t28110 = game.ship_kill_streak;
                                return ($t28110 + killed);
                              }
                            })();
                            {
                              const bumps = (() => {
                                {
                                  const $t28111 = game.ship_kill_streak;
                                  return Perihelion$Combat$streak_bumps($t28111, new_streak, 2);
                                }
                              })();
                              {
                                const new_mult = (() => {
                                  {
                                    const $t28113 = game.multiplier;
                                    {
                                      const raw_i10062 = ($t28113 + bumps);
                                      {
                                        const $t28060_i10063 = (raw_i10062 > 5);
                                        if ($t28060_i10063 === true) {
                                          return 5;
                                        } else {
                                          return raw_i10062;
                                        }
                                      }
                                    }
                                  }
                                })();
                                {
                                  const $t28117 = (() => {
                                    {
                                      const $t28114 = game.score;
                                      {
                                        const $t28116 = (() => {
                                          {
                                            const $t28115 = (() => {
                                              {
                                                const sr_s1 = (killed + killed);
                                                return sr_s1;
                                              }
                                            })();
                                            return ($t28115 * new_mult);
                                          }
                                        })();
                                        return ($t28114 + $t28116);
                                      }
                                    }
                                  })();
                                  {
                                    const $t28120 = (() => {
                                      {
                                        const $t28119 = (() => {
                                          {
                                            const $t28118 = game.max_mult;
                                            return (new_mult > $t28118);
                                          }
                                        })();
                                        if ($t28119 === true) {
                                          return new_mult;
                                        } else {
                                          return game.max_mult;
                                        }
                                      }
                                    })();
                                    return ({ ...game, ships: alive, player_shots: shots, score: $t28117, ship_kill_streak: new_streak, asteroid_kill_streak: 0, multiplier: new_mult, max_mult: $t28120 });
                                  }
                                }
                              }
                            }
                          }
                        })();
                      }
                    }
                  })();
                  return Perihelion$Combat$roll_drops(g2, dead);
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Combat$collide_shots_ships$clo = { _0: ($_, game) => Perihelion$Combat$collide_shots_ships(game) };

function Perihelion$Combat$roll_drops(game, dead) {
  switch (dead.$) {
    case "Nil": {
      return game;
      break;
    }
    case "Cons": {
      const $f28147 = dead._0;
      const $f28148 = dead._1;
      {
        const rest = $f28148;
        {
          const sh = $f28147;
          {
            const pos = (() => {
              {
                const pos_i3795 = (() => {
                  {
                    const $t27355_i3793 = sh.x;
                    {
                      const $t27356_i3794 = sh.y;
                      return { _0: $t27355_i3793, _1: $t27356_i3794 };
                    }
                  }
                })();
                return pos_i3795;
              }
            })();
            {
              const sx = pos._0;
              {
                const sy = pos._1;
                {
                  const $p28145 = (() => {
                    {
                      const $t28122 = game.rng;
                      {
                        const $p29052_i10520_i10819_i11108 = (() => {
                          {
                            const $p15579_i10199_i10515_i10814_i11103 = (() => {
                              {
                                const $p15576_i1532_i10189_i10506_i10805_i11094 = Random$next_raw($t28122);
                                {
                                  const hi_i1533_i10190_i10507_i10806_i11095 = $p15576_i1532_i10189_i10506_i10805_i11094._0;
                                  {
                                    const rng2_i1534_i10191_i10508_i10807_i11096 = $p15576_i1532_i10189_i10506_i10805_i11094._1;
                                    {
                                      const $p15575_i1535_i10192_i10509_i10808_i11097 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11096);
                                      {
                                        const lo_i1536_i10193_i10510_i10809_i11098 = $p15575_i1535_i10192_i10509_i10808_i11097._0;
                                        {
                                          const rng3_i1537_i10194_i10511_i10810_i11099 = $p15575_i1535_i10192_i10509_i10808_i11097._1;
                                          {
                                            const $t15574_i1541_i10198_i10514_i10813_i11102 = (() => {
                                              {
                                                const $t15573_i1540_i10197_i10513_i10812_i11101 = (() => {
                                                  {
                                                    const $t15571_i1538_i10195_i10512_i10811_i11100 = march_int_and(hi_i1533_i10190_i10507_i10806_i11095, 1048575);
                                                    return ($t15571_i1538_i10195_i10512_i10811_i11100 * 4294967296);
                                                  }
                                                })();
                                                return ($t15573_i1540_i10197_i10513_i10812_i11101 + lo_i1536_i10193_i10510_i10809_i11098);
                                              }
                                            })();
                                            return { _0: $t15574_i1541_i10198_i10514_i10813_i11102, _1: rng3_i1537_i10194_i10511_i10810_i11099 };
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const bits_i10200_i10516_i10815_i11104 = $p15579_i10199_i10515_i10814_i11103._0;
                              {
                                const rng2_i10201_i10517_i10816_i11105 = $p15579_i10199_i10515_i10814_i11103._1;
                                {
                                  const $t15578_i10203_i10519_i10818_i11107 = (() => {
                                    {
                                      const $t15577_i10202_i10518_i10817_i11106 = bits_i10200_i10516_i10815_i11104;
                                      return ($t15577_i10202_i10518_i10817_i11106 / 4.50359962737e+15);
                                    }
                                  })();
                                  return { _0: $t15578_i10203_i10519_i10818_i11107, _1: rng2_i10201_i10517_i10816_i11105 };
                                }
                              }
                            }
                          }
                        })();
                        {
                          const t_i10521_i10820_i11109 = $p29052_i10520_i10819_i11108._0;
                          {
                            const rng2_i10522_i10821_i11110 = $p29052_i10520_i10819_i11108._1;
                            {
                              const out_i10523_i10822_i11111 = { _0: rng2_i10522_i10821_i11110, _1: t_i10521_i10820_i11109 };
                              return out_i10523_i10822_i11111;
                            }
                          }
                        }
                      }
                    }
                  })();
                  {
                    const rng2 = $p28145._0;
                    {
                      const roll = $p28145._1;
                      {
                        const g2 = (() => {
                          {
                            const $t28124 = (roll < 0.25);
                            if ($t28124 === true) {
                              return (() => {
                                {
                                  const owns_starkiller = (() => {
                                    {
                                      const $t28125 = game.owned_weapons;
                                      {
                                        const $t28126 = { $: "StarKiller" };
                                        {
                                          const $t669_i3791 = { $: "$Clo_$lam668$4791", _0: $lam668$apply$4791, _1: $t28126 };
                                          return List$any$List_WeaponKind$Fn_WeaponKind_Bool($t28125, $t669_i3791);
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const $p28144 = (() => {
                                      {
                                        const $p29052_i10520_i10819_i11089 = (() => {
                                          {
                                            const $p15579_i10199_i10515_i10814_i11084 = (() => {
                                              {
                                                const $p15576_i1532_i10189_i10506_i10805_i11075 = Random$next_raw(rng2);
                                                {
                                                  const hi_i1533_i10190_i10507_i10806_i11076 = $p15576_i1532_i10189_i10506_i10805_i11075._0;
                                                  {
                                                    const rng2_i1534_i10191_i10508_i10807_i11077 = $p15576_i1532_i10189_i10506_i10805_i11075._1;
                                                    {
                                                      const $p15575_i1535_i10192_i10509_i10808_i11078 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11077);
                                                      {
                                                        const lo_i1536_i10193_i10510_i10809_i11079 = $p15575_i1535_i10192_i10509_i10808_i11078._0;
                                                        {
                                                          const rng3_i1537_i10194_i10511_i10810_i11080 = $p15575_i1535_i10192_i10509_i10808_i11078._1;
                                                          {
                                                            const $t15574_i1541_i10198_i10514_i10813_i11083 = (() => {
                                                              {
                                                                const $t15573_i1540_i10197_i10513_i10812_i11082 = (() => {
                                                                  {
                                                                    const $t15571_i1538_i10195_i10512_i10811_i11081 = march_int_and(hi_i1533_i10190_i10507_i10806_i11076, 1048575);
                                                                    return ($t15571_i1538_i10195_i10512_i10811_i11081 * 4294967296);
                                                                  }
                                                                })();
                                                                return ($t15573_i1540_i10197_i10513_i10812_i11082 + lo_i1536_i10193_i10510_i10809_i11079);
                                                              }
                                                            })();
                                                            return { _0: $t15574_i1541_i10198_i10514_i10813_i11083, _1: rng3_i1537_i10194_i10511_i10810_i11080 };
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            })();
                                            {
                                              const bits_i10200_i10516_i10815_i11085 = $p15579_i10199_i10515_i10814_i11084._0;
                                              {
                                                const rng2_i10201_i10517_i10816_i11086 = $p15579_i10199_i10515_i10814_i11084._1;
                                                {
                                                  const $t15578_i10203_i10519_i10818_i11088 = (() => {
                                                    {
                                                      const $t15577_i10202_i10518_i10817_i11087 = bits_i10200_i10516_i10815_i11085;
                                                      return ($t15577_i10202_i10518_i10817_i11087 / 4.50359962737e+15);
                                                    }
                                                  })();
                                                  return { _0: $t15578_i10203_i10519_i10818_i11088, _1: rng2_i10201_i10517_i10816_i11086 };
                                                }
                                              }
                                            }
                                          }
                                        })();
                                        {
                                          const t_i10521_i10820_i11090 = $p29052_i10520_i10819_i11089._0;
                                          {
                                            const rng2_i10522_i10821_i11091 = $p29052_i10520_i10819_i11089._1;
                                            {
                                              const out_i10523_i10822_i11092 = { _0: rng2_i10522_i10821_i11091, _1: t_i10521_i10820_i11090 };
                                              return out_i10523_i10822_i11092;
                                            }
                                          }
                                        }
                                      }
                                    })();
                                    {
                                      const rng3 = $p28144._0;
                                      {
                                        const sk_roll = $p28144._1;
                                        {
                                          const $t28130 = (() => {
                                            {
                                              const $t28127 = (!owns_starkiller);
                                              {
                                                const $t28129 = (sk_roll < 0.08);
                                                return ($t28127 && $t28129);
                                              }
                                            }
                                          })();
                                          if ($t28130 === true) {
                                            return (() => {
                                              {
                                                const $t28134 = (() => {
                                                  {
                                                    const $t28133 = (() => {
                                                      {
                                                        const $t28132 = { $: "StarKiller" };
                                                        return { $: "OffenseWeapon", _0: $t28132 };
                                                      }
                                                    })();
                                                    return ({ x: sx, y: sy, ttl: 8., kind: $t28133 });
                                                  }
                                                })();
                                                {
                                                  const $t28135 = game.pickups;
                                                  {
                                                    const $t28136 = (() => {
                                                      return { $: "Cons", _0: $t28134, _1: $t28135 };
                                                    })();
                                                    return ({ ...game, rng: rng3, pickups: $t28136 });
                                                  }
                                                }
                                              }
                                            })();
                                          } else {
                                            return (() => {
                                              {
                                                const $p28143 = (() => {
                                                  {
                                                    const $t28137 = game.owned_weapons;
                                                    {
                                                      const $t28138 = game.special;
                                                      return Perihelion$Upgrades$roll_one(rng3, $t28137, $t28138);
                                                    }
                                                  }
                                                })();
                                                {
                                                  const rng4 = $p28143._0;
                                                  {
                                                    const upgrade = $p28143._1;
                                                    {
                                                      const $t28140 = (() => {
                                                        return ({ x: sx, y: sy, ttl: 8., kind: upgrade });
                                                      })();
                                                      {
                                                        const $t28141 = game.pickups;
                                                        {
                                                          const $t28142 = (() => {
                                                            return { $: "Cons", _0: $t28140, _1: $t28141 };
                                                          })();
                                                          return ({ ...game, rng: rng4, pickups: $t28142 });
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            })();
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              })();
                            } else {
                              return ({ ...game, rng: rng2 });
                            }
                          }
                        })();
                        return Perihelion$Combat$roll_drops(g2, rest);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Combat$roll_drops$clo = { _0: ($_, game, dead) => Perihelion$Combat$roll_drops(game, dead) };

function Perihelion$Combat$collide_ball_pickups(game) {
  {
    const $t28162 = (() => {
      {
        const $t28159 = game.pickups;
        {
          const $t28161 = { $: "$Clo_$lam28160$3714", _0: $lam28160$apply$3714, _1: game };
          return List$find$List_R_kind_UpgradeKind_ttl_Float_x_Float_y_Float$Fn_R_kind_UpgradeKind_ttl_Float_x_Float_y_Float_Bool($t28159, $t28161);
        }
      }
    })();
    switch ($t28162.$) {
      case "None": {
        return game;
        break;
      }
      case "Some": {
        const $f28188 = $t28162._0;
        {
          const p = $f28188;
          {
            const $t28163 = game.pickups;
            {
              const $t28166 = { $: "$Clo_$lam28164$3715", _0: $lam28164$apply$3715, _1: game };
              {
                const remaining = (() => {
                  {
                    const pred_i3799 = $t28166;
                    {
                      const go_i3800 = { $: "$Clo_go$4760", _0: go$apply$4760, _1: pred_i3799 };
                      {
                        const $t302_i3801 = { $: "Nil" };
                        return go$apply$4760(go_i3800, $t28163, $t302_i3801);
                      }
                    }
                  }
                })();
                {
                  const $t28167 = p.kind;
                  switch ($t28167.$) {
                    case "SpecialItem": {
                      const $f28181 = $t28167._0;
                      {
                        const $jp_clo28183 = (() => {
                          return { $: "$Clo_$jp28182$3716", _0: $jp28182$apply$3716, _1: game, _2: p, _3: remaining };
                        })();
                        {
                          const $t28168 = game.special;
                          switch ($t28168.$) {
                            case "None": {
                              {
                                const $t28170 = (() => {
                                  {
                                    const $t28169 = p.kind;
                                    return Perihelion$Core$apply_upgrade(game, $t28169);
                                  }
                                })();
                                return ({ ...$t28170, pickups: remaining });
                              }
                              break;
                            }
                            case "Some": {
                              const $f28175 = $t28168._0;
                              {
                                const $t28171 = { $: "Milestone" };
                                {
                                  const $t28172 = p.kind;
                                  {
                                    const $t28173 = { $: "Nil" };
                                    {
                                      const $t28174 = (() => {
                                        return { $: "Cons", _0: $t28172, _1: $t28173 };
                                      })();
                                      return ({ ...game, pickups: remaining, phase: $t28171, milestone_choices: $t28174 });
                                    }
                                  }
                                }
                              }
                              break;
                            }
                            default: {
                              return (() => { throw new Error("non-exhaustive pattern match"); })();
                            }
                          }
                        }
                      }
                      break;
                    }
                    case "DefenseShield": {
                      {
                        const $jp_clo28187 = (() => {
                          return { $: "$Clo_$jp28186$3717", _0: $jp28186$apply$3717, _1: game, _2: p, _3: remaining };
                        })();
                        {
                          const grant = (() => {
                            {
                              const $t28176 = game.shield_reinforced;
                              if ($t28176 === true) {
                                return 2;
                              } else {
                                return 1;
                              }
                            }
                          })();
                          {
                            const $t28178 = (() => {
                              {
                                const $t28177 = game.shield;
                                return ($t28177 + grant);
                              }
                            })();
                            return ({ ...game, shield: $t28178, pickups: remaining });
                          }
                        }
                      }
                      break;
                    }
                    default: {
                      {
                        const $t28180 = (() => {
                          {
                            const $t28179 = p.kind;
                            return Perihelion$Core$apply_upgrade(game, $t28179);
                          }
                        })();
                        return ({ ...$t28180, pickups: remaining });
                      }
                    }
                  }
                }
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Combat$collide_ball_pickups$clo = { _0: ($_, game) => Perihelion$Combat$collide_ball_pickups(game) };

function Perihelion$Combat$ball_hits_ship(game, sh) {
  {
    const pos = (() => {
      {
        const pos_i3805 = (() => {
          {
            const $t27355_i3803 = sh.x;
            {
              const $t27356_i3804 = sh.y;
              return { _0: $t27355_i3803, _1: $t27356_i3804 };
            }
          }
        })();
        return pos_i3805;
      }
    })();
    {
      const sx = pos._0;
      {
        const sy = pos._1;
        {
          const $t28190 = game.ball_x;
          {
            const $t28191 = game.ball_y;
            {
              const $t27359_i10088 = (() => {
                {
                  const dx_i3632_i10084 = ($t28190 - sx);
                  {
                    const dy_i3633_i10085 = ($t28191 - sy);
                    {
                      const $t27357_i3634_i10086 = (dx_i3632_i10084 * dx_i3632_i10084);
                      {
                        const $t27358_i3635_i10087 = (dy_i3633_i10085 * dy_i3633_i10085);
                        return ($t27357_i3634_i10086 + $t27358_i3635_i10087);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10091 = (() => {
                  {
                    const $t27360_i10089 = (10. + 6.);
                    {
                      const $t27361_i10090 = (10. + 6.);
                      return ($t27360_i10089 * $t27361_i10090);
                    }
                  }
                })();
                return ($t27359_i10088 <= $t27362_i10091);
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Combat$ball_hits_ship$clo = { _0: ($_, game, sh) => Perihelion$Combat$ball_hits_ship(game, sh) };

function Perihelion$Combat$deflector_roll(game) {
  {
    const $p28205 = (() => {
      {
        const $t28203 = game.rng;
        {
          const $p29052_i10520_i10819_i11127 = (() => {
            {
              const $p15579_i10199_i10515_i10814_i11122 = (() => {
                {
                  const $p15576_i1532_i10189_i10506_i10805_i11113 = Random$next_raw($t28203);
                  {
                    const hi_i1533_i10190_i10507_i10806_i11114 = $p15576_i1532_i10189_i10506_i10805_i11113._0;
                    {
                      const rng2_i1534_i10191_i10508_i10807_i11115 = $p15576_i1532_i10189_i10506_i10805_i11113._1;
                      {
                        const $p15575_i1535_i10192_i10509_i10808_i11116 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11115);
                        {
                          const lo_i1536_i10193_i10510_i10809_i11117 = $p15575_i1535_i10192_i10509_i10808_i11116._0;
                          {
                            const rng3_i1537_i10194_i10511_i10810_i11118 = $p15575_i1535_i10192_i10509_i10808_i11116._1;
                            {
                              const $t15574_i1541_i10198_i10514_i10813_i11121 = (() => {
                                {
                                  const $t15573_i1540_i10197_i10513_i10812_i11120 = (() => {
                                    {
                                      const $t15571_i1538_i10195_i10512_i10811_i11119 = march_int_and(hi_i1533_i10190_i10507_i10806_i11114, 1048575);
                                      return ($t15571_i1538_i10195_i10512_i10811_i11119 * 4294967296);
                                    }
                                  })();
                                  return ($t15573_i1540_i10197_i10513_i10812_i11120 + lo_i1536_i10193_i10510_i10809_i11117);
                                }
                              })();
                              return { _0: $t15574_i1541_i10198_i10514_i10813_i11121, _1: rng3_i1537_i10194_i10511_i10810_i11118 };
                            }
                          }
                        }
                      }
                    }
                  }
                }
              })();
              {
                const bits_i10200_i10516_i10815_i11123 = $p15579_i10199_i10515_i10814_i11122._0;
                {
                  const rng2_i10201_i10517_i10816_i11124 = $p15579_i10199_i10515_i10814_i11122._1;
                  {
                    const $t15578_i10203_i10519_i10818_i11126 = (() => {
                      {
                        const $t15577_i10202_i10518_i10817_i11125 = bits_i10200_i10516_i10815_i11123;
                        return ($t15577_i10202_i10518_i10817_i11125 / 4.50359962737e+15);
                      }
                    })();
                    return { _0: $t15578_i10203_i10519_i10818_i11126, _1: rng2_i10201_i10517_i10816_i11124 };
                  }
                }
              }
            }
          })();
          {
            const t_i10521_i10820_i11128 = $p29052_i10520_i10819_i11127._0;
            {
              const rng2_i10522_i10821_i11129 = $p29052_i10520_i10819_i11127._1;
              {
                const out_i10523_i10822_i11130 = { _0: rng2_i10522_i10821_i11129, _1: t_i10521_i10820_i11128 };
                return out_i10523_i10822_i11130;
              }
            }
          }
        }
      }
    })();
    {
      const rng2 = $p28205._0;
      {
        const t = $p28205._1;
        {
          const $t28204 = (t < 0.5);
          return { _0: rng2, _1: $t28204 };
        }
      }
    }
  }
}
const Perihelion$Combat$deflector_roll$clo = { _0: ($_, game) => Perihelion$Combat$deflector_roll(game) };

function Perihelion$Combat$collide_ball_hazards(game) {
  {
    const shot_hit = (() => {
      {
        const $t28206 = game.enemy_shots;
        {
          const $t28208 = { $: "$Clo_$lam28207$3718", _0: $lam28207$apply$3718, _1: game };
          return List$any$List_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float_Bool($t28206, $t28208);
        }
      }
    })();
    {
      const $t28210 = (() => {
        {
          const $t28209 = game.bullet_ward;
          return (shot_hit && $t28209);
        }
      })();
      if ($t28210 === true) {
        return (() => {
          {
            const $t28211 = game.enemy_shots;
            {
              const $t28214 = { $: "$Clo_$lam28212$3719", _0: $lam28212$apply$3719, _1: game };
              {
                const $t28215 = (() => {
                  {
                    const pred_i3807 = $t28214;
                    {
                      const go_i3808 = { $: "$Clo_go$4764", _0: go$apply$4764, _1: pred_i3807 };
                      {
                        const $t302_i3809 = { $: "Nil" };
                        return go$apply$4764(go_i3808, $t28211, $t302_i3809);
                      }
                    }
                  }
                })();
                return ({ ...game, bullet_ward: false, enemy_shots: $t28215 });
              }
            }
          }
        })();
      } else {
        return (() => {
          {
            const ast_hit = (() => {
              {
                const $t28216 = game.asteroids;
                {
                  const $t28218 = { $: "$Clo_$lam28217$3720", _0: $lam28217$apply$3720, _1: game };
                  return List$any$List_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float_Bool($t28216, $t28218);
                }
              }
            })();
            {
              const ship_hit = (() => {
                {
                  const $t28219 = game.ships;
                  {
                    const $t28221 = { $: "$Clo_$lam28220$3721", _0: $lam28220$apply$3721, _1: game };
                    return List$any$List_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float$Fn_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float_Bool($t28219, $t28221);
                  }
                }
              })();
              {
                const $t28224 = (() => {
                  {
                    const $t28223 = (() => {
                      {
                        const $t28222 = (ast_hit || shot_hit);
                        return ($t28222 || ship_hit);
                      }
                    })();
                    return (!$t28223);
                  }
                })();
                if ($t28224 === true) {
                  return game;
                } else {
                  return (() => {
                    {
                      const $t28230 = (() => {
                        {
                          const $t28228 = (() => {
                            {
                              const $t28226 = (() => {
                                {
                                  const $t28225 = (!shot_hit);
                                  return (ast_hit && $t28225);
                                }
                              })();
                              {
                                const $t28227 = (!ship_hit);
                                return ($t28226 && $t28227);
                              }
                            }
                          })();
                          {
                            const $t28229 = game.deflector_plating;
                            return ($t28228 && $t28229);
                          }
                        }
                      })();
                      if ($t28230 === true) {
                        return (() => {
                          {
                            const $p28232 = Perihelion$Combat$deflector_roll(game);
                            {
                              const rng2 = $p28232._0;
                              {
                                const deflected = $p28232._1;
                                if (deflected === true) {
                                  return ({ ...game, rng: rng2 });
                                } else {
                                  return (() => {
                                    {
                                      const $t28231 = ({ ...game, rng: rng2 });
                                      return Perihelion$Combat$collide_ball_hazards_shield_or_die($t28231);
                                    }
                                  })();
                                }
                              }
                            }
                          }
                        })();
                      } else {
                        return Perihelion$Combat$collide_ball_hazards_shield_or_die(game);
                      }
                    }
                  })();
                }
              }
            }
          }
        })();
      }
    }
  }
}
const Perihelion$Combat$collide_ball_hazards$clo = { _0: ($_, game) => Perihelion$Combat$collide_ball_hazards(game) };

function Perihelion$Combat$collide_ball_hazards_shield_or_die(game) {
  {
    const $t28234 = (() => {
      {
        const $t28233 = game.shield;
        return ($t28233 > 0);
      }
    })();
    if ($t28234 === true) {
      return (() => {
        {
          const $t28235 = game.asteroids;
          {
            const $t28237 = { $: "$Clo_$lam28236$3722", _0: $lam28236$apply$3722, _1: game };
            {
              const dead_ast = (() => {
                {
                  const pred_i3823 = $t28237;
                  {
                    const go_i3824 = { $: "$Clo_go$4795", _0: go$apply$4795, _1: pred_i3823 };
                    {
                      const $t302_i3825 = { $: "Nil" };
                      return go$apply$4795(go_i3824, $t28235, $t302_i3825);
                    }
                  }
                }
              })();
              {
                const $t28239 = (() => {
                  {
                    const $t28238 = game.shield;
                    return ($t28238 - 1);
                  }
                })();
                {
                  const $t28240 = game.asteroids;
                  {
                    const $t28243 = { $: "$Clo_$lam28241$3723", _0: $lam28241$apply$3723, _1: game };
                    {
                      const $t28244 = (() => {
                        {
                          const pred_i3819 = $t28243;
                          {
                            const go_i3820 = { $: "$Clo_go$4795", _0: go$apply$4795, _1: pred_i3819 };
                            {
                              const $t302_i3821 = { $: "Nil" };
                              return go$apply$4795(go_i3820, $t28240, $t302_i3821);
                            }
                          }
                        }
                      })();
                      {
                        const $t28245 = game.enemy_shots;
                        {
                          const $t28248 = { $: "$Clo_$lam28246$3724", _0: $lam28246$apply$3724, _1: game };
                          {
                            const $t28249 = (() => {
                              {
                                const pred_i3815 = $t28248;
                                {
                                  const go_i3816 = { $: "$Clo_go$4764", _0: go$apply$4764, _1: pred_i3815 };
                                  {
                                    const $t302_i3817 = { $: "Nil" };
                                    return go$apply$4764(go_i3816, $t28245, $t302_i3817);
                                  }
                                }
                              }
                            })();
                            {
                              const $t28250 = game.ships;
                              {
                                const $t28253 = { $: "$Clo_$lam28251$3725", _0: $lam28251$apply$3725, _1: game };
                                {
                                  const $t28254 = (() => {
                                    {
                                      const pred_i3811 = $t28253;
                                      {
                                        const go_i3812 = { $: "$Clo_go$4776", _0: go$apply$4776, _1: pred_i3811 };
                                        {
                                          const $t302_i3813 = { $: "Nil" };
                                          return go$apply$4776(go_i3812, $t28250, $t302_i3813);
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const $t28255 = game.fx_bursts;
                                    {
                                      const $t28256 = (() => {
                                        {
                                          const $t28056_i10113 = { $: "$Clo_$lam28053$3704", _0: $lam28053$apply$3704 };
                                          {
                                            const f_i3759_i10114 = $t28056_i10113;
                                            {
                                              const go_i3760_i10115 = { $: "$Clo_go$4778", _0: go$apply$4778, _1: f_i3759_i10114 };
                                              {
                                                const $t270_i3761_i10116 = { $: "Nil" };
                                                return go$apply$4778(go_i3760_i10115, dead_ast, $t270_i3761_i10116);
                                              }
                                            }
                                          }
                                        }
                                      })();
                                      {
                                        const $t28257 = (() => {
                                          {
                                            const go_i10108 = { $: "$Clo_go$4793", _0: go$apply$4793 };
                                            {
                                              const $t261_i10111 = (() => {
                                                {
                                                  const go_i4515_i10109 = { $: "$Clo_go$4318", _0: go$apply$4318 };
                                                  {
                                                    const $t253_i4516_i10110 = { $: "Nil" };
                                                    return go$apply$4318(go_i4515_i10109, $t28255, $t253_i4516_i10110);
                                                  }
                                                }
                                              })();
                                              return go$apply$4793(go_i10108, $t261_i10111, $t28256);
                                            }
                                          }
                                        })();
                                        return ({ ...game, shield: $t28239, asteroids: $t28244, enemy_shots: $t28249, ships: $t28254, fx_bursts: $t28257 });
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })();
    } else {
      return Perihelion$Core$end_run(game);
    }
  }
}
const Perihelion$Combat$collide_ball_hazards_shield_or_die$clo = { _0: ($_, game) => Perihelion$Combat$collide_ball_hazards_shield_or_die(game) };

function Perihelion$Combat$spawn_star_turret(game, star_idx, rng) {
  {
    const $t28258 = Perihelion$Core$star_at(game, star_idx);
    switch ($t28258.$) {
      case "None": {
        return ({ ...game, rng: rng });
        break;
      }
      case "Some": {
        const $f28278 = $t28258._0;
        {
          const s = $f28278;
          {
            const $p28277 = (() => {
              {
                const $p29052_i10520_i10819_i11146 = (() => {
                  {
                    const $p15579_i10199_i10515_i10814_i11141 = (() => {
                      {
                        const $p15576_i1532_i10189_i10506_i10805_i11132 = Random$next_raw(rng);
                        {
                          const hi_i1533_i10190_i10507_i10806_i11133 = $p15576_i1532_i10189_i10506_i10805_i11132._0;
                          {
                            const rng2_i1534_i10191_i10508_i10807_i11134 = $p15576_i1532_i10189_i10506_i10805_i11132._1;
                            {
                              const $p15575_i1535_i10192_i10509_i10808_i11135 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11134);
                              {
                                const lo_i1536_i10193_i10510_i10809_i11136 = $p15575_i1535_i10192_i10509_i10808_i11135._0;
                                {
                                  const rng3_i1537_i10194_i10511_i10810_i11137 = $p15575_i1535_i10192_i10509_i10808_i11135._1;
                                  {
                                    const $t15574_i1541_i10198_i10514_i10813_i11140 = (() => {
                                      {
                                        const $t15573_i1540_i10197_i10513_i10812_i11139 = (() => {
                                          {
                                            const $t15571_i1538_i10195_i10512_i10811_i11138 = march_int_and(hi_i1533_i10190_i10507_i10806_i11133, 1048575);
                                            return ($t15571_i1538_i10195_i10512_i10811_i11138 * 4294967296);
                                          }
                                        })();
                                        return ($t15573_i1540_i10197_i10513_i10812_i11139 + lo_i1536_i10193_i10510_i10809_i11136);
                                      }
                                    })();
                                    return { _0: $t15574_i1541_i10198_i10514_i10813_i11140, _1: rng3_i1537_i10194_i10511_i10810_i11137 };
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    })();
                    {
                      const bits_i10200_i10516_i10815_i11142 = $p15579_i10199_i10515_i10814_i11141._0;
                      {
                        const rng2_i10201_i10517_i10816_i11143 = $p15579_i10199_i10515_i10814_i11141._1;
                        {
                          const $t15578_i10203_i10519_i10818_i11145 = (() => {
                            {
                              const $t15577_i10202_i10518_i10817_i11144 = bits_i10200_i10516_i10815_i11142;
                              return ($t15577_i10202_i10518_i10817_i11144 / 4.50359962737e+15);
                            }
                          })();
                          return { _0: $t15578_i10203_i10519_i10818_i11145, _1: rng2_i10201_i10517_i10816_i11143 };
                        }
                      }
                    }
                  }
                })();
                {
                  const t_i10521_i10820_i11147 = $p29052_i10520_i10819_i11146._0;
                  {
                    const rng2_i10522_i10821_i11148 = $p29052_i10520_i10819_i11146._1;
                    {
                      const out_i10523_i10822_i11149 = { _0: rng2_i10522_i10821_i11148, _1: t_i10521_i10820_i11147 };
                      return out_i10523_i10822_i11149;
                    }
                  }
                }
              }
            })();
            {
              const rng2 = $p28277._0;
              {
                const idle_f = $p28277._1;
                {
                  const $p28276 = Perihelion$Combat$pick_ring_idx(rng2, s);
                  {
                    const rng3 = $p28276._0;
                    {
                      const ring_idx = $p28276._1;
                      {
                        const o = Perihelion$Core$ring_at(s, ring_idx);
                        {
                          const r = o.radius;
                          {
                            const idle = (() => {
                              {
                                const $t28263 = (() => {
                                  {
                                    const $t28262 = (6. - 3.);
                                    return (idle_f * $t28262);
                                  }
                                })();
                                return (3. + $t28263);
                              }
                            })();
                            {
                              const ship = (() => {
                                {
                                  const $t28267 = (() => {
                                    {
                                      const $t28264 = s.x;
                                      {
                                        const $t28266 = (() => {
                                          {
                                            const $t28265 = Math.cos(0.);
                                            return ($t28265 * r);
                                          }
                                        })();
                                        return ($t28264 + $t28266);
                                      }
                                    }
                                  })();
                                  {
                                    const $t28271 = (() => {
                                      {
                                        const $t28268 = s.y;
                                        {
                                          const $t28270 = (() => {
                                            {
                                              const $t28269 = Math.sin(0.);
                                              return ($t28269 * r);
                                            }
                                          })();
                                          return ($t28268 + $t28270);
                                        }
                                      }
                                    })();
                                    {
                                      const $t28272 = { $: "ShipOrbiting", _0: ring_idx, _1: 0. };
                                      return ({ star_idx: star_idx, x: $t28267, y: $t28271, mode: $t28272, fire_cooldown: 2.5, idle_timer: idle, hunter: false });
                                    }
                                  }
                                }
                              })();
                              {
                                const $t28274 = game.ships;
                                {
                                  const $t28275 = (() => {
                                    return { $: "Cons", _0: ship, _1: $t28274 };
                                  })();
                                  return ({ ...game, rng: rng3, ships: $t28275 });
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Combat$spawn_star_turret$clo = { _0: ($_, game, star_idx, rng) => Perihelion$Combat$spawn_star_turret(game, star_idx, rng) };

function Perihelion$Combat$spawn_hunter(game, rng) {
  {
    const idx = (() => {
      {
        const $t28280 = (() => {
          {
            const $t28279 = game.current;
            return ($t28279 > 0);
          }
        })();
        if ($t28280 === true) {
          return (() => {
            {
              const $t28281 = game.current;
              return ($t28281 - 1);
            }
          })();
        } else {
          return 0;
        }
      }
    })();
    {
      const $t28282 = Perihelion$Core$star_at(game, idx);
      switch ($t28282.$) {
        case "None": {
          return ({ ...game, rng: rng });
          break;
        }
        case "Some": {
          const $f28302 = $t28282._0;
          {
            const s = $f28302;
            {
              const $p28301 = (() => {
                {
                  const $p29052_i10520_i10819_i11165 = (() => {
                    {
                      const $p15579_i10199_i10515_i10814_i11160 = (() => {
                        {
                          const $p15576_i1532_i10189_i10506_i10805_i11151 = Random$next_raw(rng);
                          {
                            const hi_i1533_i10190_i10507_i10806_i11152 = $p15576_i1532_i10189_i10506_i10805_i11151._0;
                            {
                              const rng2_i1534_i10191_i10508_i10807_i11153 = $p15576_i1532_i10189_i10506_i10805_i11151._1;
                              {
                                const $p15575_i1535_i10192_i10509_i10808_i11154 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11153);
                                {
                                  const lo_i1536_i10193_i10510_i10809_i11155 = $p15575_i1535_i10192_i10509_i10808_i11154._0;
                                  {
                                    const rng3_i1537_i10194_i10511_i10810_i11156 = $p15575_i1535_i10192_i10509_i10808_i11154._1;
                                    {
                                      const $t15574_i1541_i10198_i10514_i10813_i11159 = (() => {
                                        {
                                          const $t15573_i1540_i10197_i10513_i10812_i11158 = (() => {
                                            {
                                              const $t15571_i1538_i10195_i10512_i10811_i11157 = march_int_and(hi_i1533_i10190_i10507_i10806_i11152, 1048575);
                                              return ($t15571_i1538_i10195_i10512_i10811_i11157 * 4294967296);
                                            }
                                          })();
                                          return ($t15573_i1540_i10197_i10513_i10812_i11158 + lo_i1536_i10193_i10510_i10809_i11155);
                                        }
                                      })();
                                      return { _0: $t15574_i1541_i10198_i10514_i10813_i11159, _1: rng3_i1537_i10194_i10511_i10810_i11156 };
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      })();
                      {
                        const bits_i10200_i10516_i10815_i11161 = $p15579_i10199_i10515_i10814_i11160._0;
                        {
                          const rng2_i10201_i10517_i10816_i11162 = $p15579_i10199_i10515_i10814_i11160._1;
                          {
                            const $t15578_i10203_i10519_i10818_i11164 = (() => {
                              {
                                const $t15577_i10202_i10518_i10817_i11163 = bits_i10200_i10516_i10815_i11161;
                                return ($t15577_i10202_i10518_i10817_i11163 / 4.50359962737e+15);
                              }
                            })();
                            return { _0: $t15578_i10203_i10519_i10818_i11164, _1: rng2_i10201_i10517_i10816_i11162 };
                          }
                        }
                      }
                    }
                  })();
                  {
                    const t_i10521_i10820_i11166 = $p29052_i10520_i10819_i11165._0;
                    {
                      const rng2_i10522_i10821_i11167 = $p29052_i10520_i10819_i11165._1;
                      {
                        const out_i10523_i10822_i11168 = { _0: rng2_i10522_i10821_i11167, _1: t_i10521_i10820_i11166 };
                        return out_i10523_i10822_i11168;
                      }
                    }
                  }
                }
              })();
              {
                const rng2 = $p28301._0;
                {
                  const idle_f = $p28301._1;
                  {
                    const $p28300 = Perihelion$Combat$pick_ring_idx(rng2, s);
                    {
                      const rng3 = $p28300._0;
                      {
                        const ring_idx = $p28300._1;
                        {
                          const o = Perihelion$Core$ring_at(s, ring_idx);
                          {
                            const r = o.radius;
                            {
                              const idle = (() => {
                                {
                                  const $t28287 = (() => {
                                    {
                                      const $t28286 = (6. - 3.);
                                      return (idle_f * $t28286);
                                    }
                                  })();
                                  return (3. + $t28287);
                                }
                              })();
                              {
                                const ship = (() => {
                                  {
                                    const $t28291 = (() => {
                                      {
                                        const $t28288 = s.x;
                                        {
                                          const $t28290 = (() => {
                                            {
                                              const $t28289 = Math.cos(0.);
                                              return ($t28289 * r);
                                            }
                                          })();
                                          return ($t28288 + $t28290);
                                        }
                                      }
                                    })();
                                    {
                                      const $t28295 = (() => {
                                        {
                                          const $t28292 = s.y;
                                          {
                                            const $t28294 = (() => {
                                              {
                                                const $t28293 = Math.sin(0.);
                                                return ($t28293 * r);
                                              }
                                            })();
                                            return ($t28292 + $t28294);
                                          }
                                        }
                                      })();
                                      {
                                        const $t28296 = { $: "ShipOrbiting", _0: ring_idx, _1: 0. };
                                        return ({ star_idx: idx, x: $t28291, y: $t28295, mode: $t28296, fire_cooldown: 2.5, idle_timer: idle, hunter: true });
                                      }
                                    }
                                  }
                                })();
                                {
                                  const $t28298 = game.ships;
                                  {
                                    const $t28299 = (() => {
                                      return { $: "Cons", _0: ship, _1: $t28298 };
                                    })();
                                    return ({ ...game, rng: rng3, ships: $t28299 });
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const Perihelion$Combat$spawn_hunter$clo = { _0: ($_, game, rng) => Perihelion$Combat$spawn_hunter(game, rng) };

function Perihelion$Combat$maybe_spawn_ship(game, star_idx) {
  {
    const $t28305 = (() => {
      {
        const $t28303 = game.score;
        return ($t28303 < 4);
      }
    })();
    if ($t28305 === true) {
      return game;
    } else {
      return (() => {
        {
          const $p28317 = (() => {
            {
              const $t28306 = game.rng;
              {
                const $p29052_i10520_i10819_i11203 = (() => {
                  {
                    const $p15579_i10199_i10515_i10814_i11198 = (() => {
                      {
                        const $p15576_i1532_i10189_i10506_i10805_i11189 = Random$next_raw($t28306);
                        {
                          const hi_i1533_i10190_i10507_i10806_i11190 = $p15576_i1532_i10189_i10506_i10805_i11189._0;
                          {
                            const rng2_i1534_i10191_i10508_i10807_i11191 = $p15576_i1532_i10189_i10506_i10805_i11189._1;
                            {
                              const $p15575_i1535_i10192_i10509_i10808_i11192 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11191);
                              {
                                const lo_i1536_i10193_i10510_i10809_i11193 = $p15575_i1535_i10192_i10509_i10808_i11192._0;
                                {
                                  const rng3_i1537_i10194_i10511_i10810_i11194 = $p15575_i1535_i10192_i10509_i10808_i11192._1;
                                  {
                                    const $t15574_i1541_i10198_i10514_i10813_i11197 = (() => {
                                      {
                                        const $t15573_i1540_i10197_i10513_i10812_i11196 = (() => {
                                          {
                                            const $t15571_i1538_i10195_i10512_i10811_i11195 = march_int_and(hi_i1533_i10190_i10507_i10806_i11190, 1048575);
                                            return ($t15571_i1538_i10195_i10512_i10811_i11195 * 4294967296);
                                          }
                                        })();
                                        return ($t15573_i1540_i10197_i10513_i10812_i11196 + lo_i1536_i10193_i10510_i10809_i11193);
                                      }
                                    })();
                                    return { _0: $t15574_i1541_i10198_i10514_i10813_i11197, _1: rng3_i1537_i10194_i10511_i10810_i11194 };
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    })();
                    {
                      const bits_i10200_i10516_i10815_i11199 = $p15579_i10199_i10515_i10814_i11198._0;
                      {
                        const rng2_i10201_i10517_i10816_i11200 = $p15579_i10199_i10515_i10814_i11198._1;
                        {
                          const $t15578_i10203_i10519_i10818_i11202 = (() => {
                            {
                              const $t15577_i10202_i10518_i10817_i11201 = bits_i10200_i10516_i10815_i11199;
                              return ($t15577_i10202_i10518_i10817_i11201 / 4.50359962737e+15);
                            }
                          })();
                          return { _0: $t15578_i10203_i10519_i10818_i11202, _1: rng2_i10201_i10517_i10816_i11200 };
                        }
                      }
                    }
                  }
                })();
                {
                  const t_i10521_i10820_i11204 = $p29052_i10520_i10819_i11203._0;
                  {
                    const rng2_i10522_i10821_i11205 = $p29052_i10520_i10819_i11203._1;
                    {
                      const out_i10523_i10822_i11206 = { _0: rng2_i10522_i10821_i11205, _1: t_i10521_i10820_i11204 };
                      return out_i10523_i10822_i11206;
                    }
                  }
                }
              }
            }
          })();
          {
            const rng2 = $p28317._0;
            {
              const roll = $p28317._1;
              {
                const chance_raw = (() => {
                  {
                    const $t28311 = (() => {
                      {
                        const $t28310 = (() => {
                          {
                            const $t28309 = (() => {
                              {
                                const $t28307 = game.score;
                                return ($t28307 - 4);
                              }
                            })();
                            return $t28309;
                          }
                        })();
                        return (0.04 * $t28310);
                      }
                    })();
                    return (0.16 + $t28311);
                  }
                })();
                {
                  const chance = (() => {
                    {
                      const $t28312 = (chance_raw > 0.45);
                      if ($t28312 === true) {
                        return 0.45;
                      } else {
                        return chance_raw;
                      }
                    }
                  })();
                  {
                    const $t28313 = (roll < chance);
                    if ($t28313 === true) {
                      return (() => {
                        {
                          const $p28316 = (() => {
                            {
                              const $p29052_i10520_i10819_i11184 = (() => {
                                {
                                  const $p15579_i10199_i10515_i10814_i11179 = (() => {
                                    {
                                      const $p15576_i1532_i10189_i10506_i10805_i11170 = Random$next_raw(rng2);
                                      {
                                        const hi_i1533_i10190_i10507_i10806_i11171 = $p15576_i1532_i10189_i10506_i10805_i11170._0;
                                        {
                                          const rng2_i1534_i10191_i10508_i10807_i11172 = $p15576_i1532_i10189_i10506_i10805_i11170._1;
                                          {
                                            const $p15575_i1535_i10192_i10509_i10808_i11173 = Random$next_raw(rng2_i1534_i10191_i10508_i10807_i11172);
                                            {
                                              const lo_i1536_i10193_i10510_i10809_i11174 = $p15575_i1535_i10192_i10509_i10808_i11173._0;
                                              {
                                                const rng3_i1537_i10194_i10511_i10810_i11175 = $p15575_i1535_i10192_i10509_i10808_i11173._1;
                                                {
                                                  const $t15574_i1541_i10198_i10514_i10813_i11178 = (() => {
                                                    {
                                                      const $t15573_i1540_i10197_i10513_i10812_i11177 = (() => {
                                                        {
                                                          const $t15571_i1538_i10195_i10512_i10811_i11176 = march_int_and(hi_i1533_i10190_i10507_i10806_i11171, 1048575);
                                                          return ($t15571_i1538_i10195_i10512_i10811_i11176 * 4294967296);
                                                        }
                                                      })();
                                                      return ($t15573_i1540_i10197_i10513_i10812_i11177 + lo_i1536_i10193_i10510_i10809_i11174);
                                                    }
                                                  })();
                                                  return { _0: $t15574_i1541_i10198_i10514_i10813_i11178, _1: rng3_i1537_i10194_i10511_i10810_i11175 };
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const bits_i10200_i10516_i10815_i11180 = $p15579_i10199_i10515_i10814_i11179._0;
                                    {
                                      const rng2_i10201_i10517_i10816_i11181 = $p15579_i10199_i10515_i10814_i11179._1;
                                      {
                                        const $t15578_i10203_i10519_i10818_i11183 = (() => {
                                          {
                                            const $t15577_i10202_i10518_i10817_i11182 = bits_i10200_i10516_i10815_i11180;
                                            return ($t15577_i10202_i10518_i10817_i11182 / 4.50359962737e+15);
                                          }
                                        })();
                                        return { _0: $t15578_i10203_i10519_i10818_i11183, _1: rng2_i10201_i10517_i10816_i11181 };
                                      }
                                    }
                                  }
                                }
                              })();
                              {
                                const t_i10521_i10820_i11185 = $p29052_i10520_i10819_i11184._0;
                                {
                                  const rng2_i10522_i10821_i11186 = $p29052_i10520_i10819_i11184._1;
                                  {
                                    const out_i10523_i10822_i11187 = { _0: rng2_i10522_i10821_i11186, _1: t_i10521_i10820_i11185 };
                                    return out_i10523_i10822_i11187;
                                  }
                                }
                              }
                            }
                          })();
                          {
                            const rng3 = $p28316._0;
                            {
                              const kind_roll = $p28316._1;
                              {
                                const $t28315 = (kind_roll < 0.5);
                                if ($t28315 === true) {
                                  return Perihelion$Combat$spawn_hunter(game, rng3);
                                } else {
                                  return Perihelion$Combat$spawn_star_turret(game, star_idx, rng3);
                                }
                              }
                            }
                          }
                        }
                      })();
                    } else {
                      return ({ ...game, rng: rng2 });
                    }
                  }
                }
              }
            }
          }
        }
      })();
    }
  }
}
const Perihelion$Combat$maybe_spawn_ship$clo = { _0: ($_, game, star_idx) => Perihelion$Combat$maybe_spawn_ship(game, star_idx) };

function Perihelion$Core$star_at(game, i) {
  {
    const $t28318 = game.stars;
    return List$nth_opt$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int($t28318, i);
  }
}
const Perihelion$Core$star_at$clo = { _0: ($_, game, i) => Perihelion$Core$star_at(game, i) };

function Perihelion$Core$remove_at(xs, idx) {
  {
    const $t28319 = (() => {
      {
        const go_i3834 = { $: "$Clo_go$4801", _0: go$apply$4801 };
        {
          const $t508_i3835 = { $: "Nil" };
          return go$apply$4801(go_i3834, xs, idx, $t508_i3835);
        }
      }
    })();
    {
      const $t28320 = (idx + 1);
      {
        const $t28321 = List$drop$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int(xs, $t28320);
        {
          const go_i10119 = { $: "$Clo_go$4798", _0: go$apply$4798 };
          {
            const $t261_i10122 = (() => {
              {
                const go_i4519_i10120 = { $: "$Clo_go$5256", _0: go$apply$5256 };
                {
                  const $t253_i4520_i10121 = { $: "Nil" };
                  return go$apply$5256(go_i4519_i10120, $t28319, $t253_i4520_i10121);
                }
              }
            })();
            return go$apply$4798(go_i10119, $t261_i10122, $t28321);
          }
        }
      }
    }
  }
}
const Perihelion$Core$remove_at$clo = { _0: ($_, xs, idx) => Perihelion$Core$remove_at(xs, idx) };

function Perihelion$Core$remove_star(game, idx) {
  {
    const $t28322 = game.stars;
    {
      const $t28323 = (() => {
        return Perihelion$Core$remove_at($t28322, idx);
      })();
      return ({ ...game, stars: $t28323 });
    }
  }
}
const Perihelion$Core$remove_star$clo = { _0: ($_, game, idx) => Perihelion$Core$remove_star(game, idx) };

function Perihelion$Core$ring_count(s) {
  {
    const $t28324 = s.orbits;
    {
      const go_i3837 = { $: "$Clo_go$4803", _0: go$apply$4803 };
      return go$apply$4803(go_i3837, $t28324, 0);
    }
  }
}
const Perihelion$Core$ring_count$clo = { _0: ($_, s) => Perihelion$Core$ring_count(s) };

function Perihelion$Core$ring_at(s, i) {
  {
    const $t28326 = (() => {
      {
        const $t28325 = s.orbits;
        return List$nth_opt$List_R_radius_Float_speed_mult_Float$Int($t28325, i);
      }
    })();
    switch ($t28326.$) {
      case "Some": {
        const $f28329 = $t28326._0;
        {
          const o = $f28329;
          return o;
        }
        break;
      }
      case "None": {
        {
          const $t28327 = s.capture_radius;
          {
            const $t28328 = s.speed_mult;
            return ({ radius: $t28327, speed_mult: $t28328 });
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Core$ring_at$clo = { _0: ($_, s, i) => Perihelion$Core$ring_at(s, i) };

function Perihelion$Core$adjust_ring(ring_idx, keys, n) {
  {
    const out = (() => {
      {
        const $t28334 = { $: "$Clo_$lam28331$3726", _0: $lam28331$apply$3726 };
        return List$any$List_String$Fn_String_Bool(keys, $t28334);
      }
    })();
    {
      const inn = (() => {
        {
          const $t28338 = { $: "$Clo_$lam28335$3727", _0: $lam28335$apply$3727 };
          return List$any$List_String$Fn_String_Bool(keys, $t28338);
        }
      })();
      {
        const delta = (() => {
          {
            let $t28339;
            if (out === true) {
              $t28339 = 1;
            } else {
              $t28339 = 0;
            }
            {
              let $t28340;
              if (inn === true) {
                $t28340 = 1;
              } else {
                $t28340 = 0;
              }
              return ($t28339 - $t28340);
            }
          }
        })();
        {
          const target = (ring_idx + delta);
          {
            const $t28341 = (target < 0);
            if ($t28341 === true) {
              return 0;
            } else {
              return (() => {
                {
                  const $t28343 = (() => {
                    {
                      const $t28342 = (n - 1);
                      return (target > $t28342);
                    }
                  })();
                  if ($t28343 === true) {
                    return (n - 1);
                  } else {
                    return target;
                  }
                }
              })();
            }
          }
        }
      }
    }
  }
}
const Perihelion$Core$adjust_ring$clo = { _0: ($_, ring_idx, keys, n) => Perihelion$Core$adjust_ring(ring_idx, keys, n) };

function Perihelion$Core$active_weapon(game) {
  {
    const n = (() => {
      {
        const $t28344 = game.owned_weapons;
        {
          const go_i3841 = { $: "$Clo_go$4807", _0: go$apply$4807 };
          return go$apply$4807(go_i3841, $t28344, 0);
        }
      }
    })();
    {
      const idx = (() => {
        {
          const $t28346 = (() => {
            {
              const $t28345 = game.active_weapon_idx;
              return ($t28345 >= n);
            }
          })();
          if ($t28346 === true) {
            return 0;
          } else {
            return game.active_weapon_idx;
          }
        }
      })();
      {
        const $t28348 = (() => {
          {
            const $t28347 = game.owned_weapons;
            return List$nth_opt$List_WeaponKind$Int($t28347, idx);
          }
        })();
        switch ($t28348.$) {
          case "Some": {
            const $f28349 = $t28348._0;
            {
              const w = $f28349;
              return w;
            }
            break;
          }
          case "None": {
            return { $: "Base" };
            break;
          }
          default: {
            return (() => { throw new Error("non-exhaustive pattern match"); })();
          }
        }
      }
    }
  }
}
const Perihelion$Core$active_weapon$clo = { _0: ($_, game) => Perihelion$Core$active_weapon(game) };

function Perihelion$Core$adjust_weapon(idx, keys, n) {
  {
    const next = (() => {
      {
        const $t28353 = { $: "$Clo_$lam28350$3728", _0: $lam28350$apply$3728 };
        return List$any$List_String$Fn_String_Bool(keys, $t28353);
      }
    })();
    {
      const prev = (() => {
        {
          const $t28357 = { $: "$Clo_$lam28354$3729", _0: $lam28354$apply$3729 };
          return List$any$List_String$Fn_String_Bool(keys, $t28357);
        }
      })();
      {
        const delta = (() => {
          {
            let $t28358;
            if (next === true) {
              $t28358 = 1;
            } else {
              $t28358 = 0;
            }
            {
              let $t28359;
              if (prev === true) {
                $t28359 = 1;
              } else {
                $t28359 = 0;
              }
              return ($t28358 - $t28359);
            }
          }
        })();
        {
          const raw = (() => {
            {
              const $t28360 = (idx + delta);
              return march_int_mod($t28360, n);
            }
          })();
          {
            const $t28361 = (raw < 0);
            if ($t28361 === true) {
              return (raw + n);
            } else {
              return raw;
            }
          }
        }
      }
    }
  }
}
const Perihelion$Core$adjust_weapon$clo = { _0: ($_, idx, keys, n) => Perihelion$Core$adjust_weapon(idx, keys, n) };

function Perihelion$Core$adjust_starkiller_target(offset, keys) {
  {
    const dn = (() => {
      {
        const $t28365 = { $: "$Clo_$lam28362$3730", _0: $lam28362$apply$3730 };
        return List$any$List_String$Fn_String_Bool(keys, $t28365);
      }
    })();
    {
      const up = (() => {
        {
          const $t28369 = { $: "$Clo_$lam28366$3731", _0: $lam28366$apply$3731 };
          return List$any$List_String$Fn_String_Bool(keys, $t28369);
        }
      })();
      {
        const delta = (() => {
          {
            let $t28370;
            if (dn === true) {
              $t28370 = 1;
            } else {
              $t28370 = 0;
            }
            {
              let $t28371;
              if (up === true) {
                $t28371 = 1;
              } else {
                $t28371 = 0;
              }
              return ($t28370 - $t28371);
            }
          }
        })();
        {
          const $t28373 = (() => {
            {
              const $t28372 = (offset + delta);
              return ($t28372 + 3);
            }
          })();
          return march_int_mod($t28373, 3);
        }
      }
    }
  }
}
const Perihelion$Core$adjust_starkiller_target$clo = { _0: ($_, offset, keys) => Perihelion$Core$adjust_starkiller_target(offset, keys) };

function Perihelion$Core$nearest_star_dir_go(game, stars, best, best_d2) {
  switch (stars.$) {
    case "Nil": {
      {
        const dx = (() => {
          {
            const $t28376 = best.x;
            {
              const $t28377 = game.ball_x;
              return ($t28376 - $t28377);
            }
          }
        })();
        {
          const dy = (() => {
            {
              const $t28378 = best.y;
              {
                const $t28379 = game.ball_y;
                return ($t28378 - $t28379);
              }
            }
          })();
          {
            const d = Math.sqrt(best_d2);
            {
              const $t28380 = (d > 0.);
              if ($t28380 === true) {
                return (() => {
                  {
                    const $t28383 = (() => {
                      {
                        const $t28381 = (dx / d);
                        {
                          const $t28382 = (dy / d);
                          return { _0: $t28381, _1: $t28382 };
                        }
                      }
                    })();
                    return { $: "Some", _0: $t28383 };
                  }
                })();
              } else {
                return { $: "None" };
              }
            }
          }
        }
      }
      break;
    }
    case "Cons": {
      const $f28389 = stars._0;
      const $f28390 = stars._1;
      {
        const rest = (() => {
          return $f28390;
        })();
        {
          const s = (() => {
            return $f28389;
          })();
          {
            const d2 = (() => {
              {
                const $t28384 = game.ball_x;
                {
                  const $t28385 = game.ball_y;
                  {
                    const $t28386 = s.x;
                    {
                      const $t28387 = s.y;
                      {
                        const dx_i3848 = ($t28384 - $t28386);
                        {
                          const dy_i3849 = ($t28385 - $t28387);
                          {
                            const $t28374_i3850 = (dx_i3848 * dx_i3848);
                            {
                              const $t28375_i3851 = (dy_i3849 * dy_i3849);
                              return ($t28374_i3850 + $t28375_i3851);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const $t28388 = (d2 < best_d2);
              if ($t28388 === true) {
                return (() => {
                  return Perihelion$Core$nearest_star_dir_go(game, rest, s, d2);
                })();
              } else {
                return (() => {
                  return Perihelion$Core$nearest_star_dir_go(game, rest, best, best_d2);
                })();
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Core$nearest_star_dir_go$clo = { _0: ($_, game, stars, best, best_d2) => Perihelion$Core$nearest_star_dir_go(game, stars, best, best_d2) };

function Perihelion$Core$nearest_star_dir(game) {
  {
    const $t28395 = game.stars;
    switch ($t28395.$) {
      case "Nil": {
        return { $: "None" };
        break;
      }
      case "Cons": {
        const $f28401 = $t28395._0;
        const $f28402 = $t28395._1;
        {
          const rest = (() => {
            return $f28402;
          })();
          {
            const s0 = (() => {
              return $f28401;
            })();
            {
              const $t28400 = (() => {
                {
                  const $t28396 = game.ball_x;
                  {
                    const $t28397 = game.ball_y;
                    {
                      const $t28398 = s0.x;
                      {
                        const $t28399 = s0.y;
                        {
                          const dx_i3857 = ($t28396 - $t28398);
                          {
                            const dy_i3858 = ($t28397 - $t28399);
                            {
                              const $t28374_i3859 = (dx_i3857 * dx_i3857);
                              {
                                const $t28375_i3860 = (dy_i3858 * dy_i3858);
                                return ($t28374_i3859 + $t28375_i3860);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              })();
              {
                const $rc_827 = Perihelion$Core$nearest_star_dir_go(game, rest, s0, $t28400);
                return $rc_827;
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Core$nearest_star_dir$clo = { _0: ($_, game) => Perihelion$Core$nearest_star_dir(game) };

function Perihelion$Core$apply_star_jump(game) {
  {
    const $p28418 = (() => {
      {
        const $t28407 = game.rng;
        {
          const $p29052_i10520_i10838 = (() => {
            {
              const $p15579_i10199_i10515_i10833 = (() => {
                {
                  const $p15576_i1532_i10189_i10506_i10824 = Random$next_raw($t28407);
                  {
                    const hi_i1533_i10190_i10507_i10825 = $p15576_i1532_i10189_i10506_i10824._0;
                    {
                      const rng2_i1534_i10191_i10508_i10826 = $p15576_i1532_i10189_i10506_i10824._1;
                      {
                        const $p15575_i1535_i10192_i10509_i10827 = Random$next_raw(rng2_i1534_i10191_i10508_i10826);
                        {
                          const lo_i1536_i10193_i10510_i10828 = $p15575_i1535_i10192_i10509_i10827._0;
                          {
                            const rng3_i1537_i10194_i10511_i10829 = $p15575_i1535_i10192_i10509_i10827._1;
                            {
                              const $t15574_i1541_i10198_i10514_i10832 = (() => {
                                {
                                  const $t15573_i1540_i10197_i10513_i10831 = (() => {
                                    {
                                      const $t15571_i1538_i10195_i10512_i10830 = march_int_and(hi_i1533_i10190_i10507_i10825, 1048575);
                                      return ($t15571_i1538_i10195_i10512_i10830 * 4294967296);
                                    }
                                  })();
                                  return ($t15573_i1540_i10197_i10513_i10831 + lo_i1536_i10193_i10510_i10828);
                                }
                              })();
                              return { _0: $t15574_i1541_i10198_i10514_i10832, _1: rng3_i1537_i10194_i10511_i10829 };
                            }
                          }
                        }
                      }
                    }
                  }
                }
              })();
              {
                const bits_i10200_i10516_i10834 = $p15579_i10199_i10515_i10833._0;
                {
                  const rng2_i10201_i10517_i10835 = $p15579_i10199_i10515_i10833._1;
                  {
                    const $t15578_i10203_i10519_i10837 = (() => {
                      {
                        const $t15577_i10202_i10518_i10836 = bits_i10200_i10516_i10834;
                        return ($t15577_i10202_i10518_i10836 / 4.50359962737e+15);
                      }
                    })();
                    return { _0: $t15578_i10203_i10519_i10837, _1: rng2_i10201_i10517_i10835 };
                  }
                }
              }
            }
          })();
          {
            const t_i10521_i10839 = $p29052_i10520_i10838._0;
            {
              const rng2_i10522_i10840 = $p29052_i10520_i10838._1;
              {
                const out_i10523_i10841 = { _0: rng2_i10522_i10840, _1: t_i10521_i10839 };
                return out_i10523_i10841;
              }
            }
          }
        }
      }
    })();
    {
      const rng2 = $p28418._0;
      {
        const t = $p28418._1;
        {
          const jump = (() => {
            {
              const $t28411 = (() => {
                {
                  const $t28410 = (() => {
                    {
                      const $t28409 = 4;
                      return (t * $t28409);
                    }
                  })();
                  return Math.trunc($t28410);
                }
              })();
              return (1 + $t28411);
            }
          })();
          {
            const target_idx = (() => {
              {
                const $t28412 = game.current;
                return ($t28412 + jump);
              }
            })();
            {
              const $t28413 = Perihelion$Core$star_at(game, target_idx);
              switch ($t28413.$) {
                case "None": {
                  return ({ ...game, rng: rng2 });
                  break;
                }
                case "Some": {
                  const $f28417 = $t28413._0;
                  {
                    const target = $f28417;
                    {
                      const $t28416 = (() => {
                        {
                          const $t28415 = (() => {
                            {
                              const $t28414 = game.special_charges;
                              return ($t28414 - 1);
                            }
                          })();
                          return ({ ...game, rng: rng2, special_charges: $t28415 });
                        }
                      })();
                      return Perihelion$Core$on_capture($t28416, target, target_idx);
                    }
                  }
                  break;
                }
                default: {
                  return (() => { throw new Error("non-exhaustive pattern match"); })();
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Core$apply_star_jump$clo = { _0: ($_, game) => Perihelion$Core$apply_star_jump(game) };

function Perihelion$Core$apply_special(game, keys) {
  {
    const pressed = (() => {
      {
        const $t28422 = { $: "$Clo_$lam28419$3734", _0: $lam28419$apply$3734 };
        return List$any$List_String$Fn_String_Bool(keys, $t28422);
      }
    })();
    {
      const $t28426 = (() => {
        {
          const $t28423 = (!pressed);
          {
            const $t28425 = (() => {
              {
                const $t28424 = game.special_charges;
                return ($t28424 <= 0);
              }
            })();
            return ($t28423 || $t28425);
          }
        }
      })();
      if ($t28426 === true) {
        return game;
      } else {
        return (() => {
          {
            const $t28427 = game.special;
            switch ($t28427.$) {
              case "None": {
                return game;
                break;
              }
              case "Some": {
                const $f28458 = $t28427._0;
                switch ($f28458.$) {
                  case "StarThrust": {
                    {
                      const $t28428 = Perihelion$Core$nearest_star_dir(game);
                      switch ($t28428.$) {
                        case "None": {
                          return game;
                          break;
                        }
                        case "Some": {
                          const $f28457 = $t28428._0;
                          {
                            const pair = $f28457;
                            {
                              const dx = pair._0;
                              {
                                const dy = pair._1;
                                {
                                  const $t28429 = game.mode;
                                  switch ($t28429.$) {
                                    case "Flying": {
                                      const $f28439 = $t28429._0;
                                      const $f28440 = $t28429._1;
                                      {
                                        const vy = (() => {
                                          return $f28440;
                                        })();
                                        {
                                          const vx = (() => {
                                            return $f28439;
                                          })();
                                          {
                                            const $t28436 = (() => {
                                              {
                                                const $t28432 = (() => {
                                                  {
                                                    const $t28431 = (dx * 60.);
                                                    return (vx + $t28431);
                                                  }
                                                })();
                                                {
                                                  const $t28435 = (() => {
                                                    {
                                                      const $t28434 = (dy * 60.);
                                                      return (vy + $t28434);
                                                    }
                                                  })();
                                                  return { $: "Flying", _0: $t28432, _1: $t28435 };
                                                }
                                              }
                                            })();
                                            {
                                              const $t28438 = (() => {
                                                {
                                                  const $t28437 = game.special_charges;
                                                  return ($t28437 - 1);
                                                }
                                              })();
                                              return ({ ...game, mode: $t28436, special_charges: $t28438 });
                                            }
                                          }
                                        }
                                      }
                                      break;
                                    }
                                    case "Orbiting": {
                                      const $f28445 = $t28429._0;
                                      const $f28446 = $t28429._1;
                                      const $f28447 = $t28429._2;
                                      return game;
                                      break;
                                    }
                                    default: {
                                      return (() => { throw new Error("non-exhaustive pattern match"); })();
                                    }
                                  }
                                }
                              }
                            }
                          }
                          break;
                        }
                        default: {
                          return (() => { throw new Error("non-exhaustive pattern match"); })();
                        }
                      }
                    }
                    break;
                  }
                  case "StarJump": {
                    return Perihelion$Core$apply_star_jump(game);
                    break;
                  }
                  case "TrajectoryPreview": {
                    return game;
                    break;
                  }
                  default: {
                    return (() => { throw new Error("non-exhaustive pattern match"); })();
                  }
                }
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          }
        })();
      }
    }
  }
}
const Perihelion$Core$apply_special$clo = { _0: ($_, game, keys) => Perihelion$Core$apply_special(game, keys) };

function Perihelion$Core$update(game, taps, keys, cursor, view_w, view_h, dt_s) {
  {
    const g0 = (() => {
      {
        const $t28463 = { $: "Nil" };
        {
          const $t28464 = { $: "None" };
          return ({ ...game, view_w: view_w, view_h: view_h, fx_bursts: $t28463, capture_flash: $t28464 });
        }
      }
    })();
    {
      const $t28465 = (() => {
        {
          const $t28462_i3870 = { $: "$Clo_$lam28459$3739", _0: $lam28459$apply$3739 };
          return List$any$List_String$Fn_String_Bool(keys, $t28462_i3870);
        }
      })();
      if ($t28465 === true) {
        return Perihelion$Core$reset(g0);
      } else {
        return (() => {
          {
            const tapped = (() => {
              {
                let $t28466;
                switch (taps.$) {
                  case "Nil": {
                    $t28466 = true;
                    break;
                  }
                  default: {
                    $t28466 = false;
                    break;
                  }
                }
                return (!$t28466);
              }
            })();
            {
              const $t28467 = g0.phase;
              switch ($t28467.$) {
                case "Ready": {
                  if (tapped === true) {
                    return (() => {
                      {
                        const $t28468 = { $: "Playing" };
                        return ({ ...g0, phase: $t28468 });
                      }
                    })();
                  } else {
                    return g0;
                  }
                  break;
                }
                case "Over": {
                  if (tapped === true) {
                    return Perihelion$Core$restart(g0);
                  } else {
                    return g0;
                  }
                  break;
                }
                case "Playing": {
                  return Perihelion$Core$step_playing(g0, tapped, keys, cursor, dt_s);
                  break;
                }
                case "Milestone": {
                  if (tapped === true) {
                    return (() => {
                      {
                        const $t28470 = (() => {
                          {
                            const $t28469 = g0.milestone_choices;
                            return List$nth_opt$List_UpgradeKind$Int($t28469, 0);
                          }
                        })();
                        switch ($t28470.$) {
                          case "None": {
                            return g0;
                            break;
                          }
                          case "Some": {
                            const $f28475 = $t28470._0;
                            {
                              const choice = $f28475;
                              {
                                const $t28474 = (() => {
                                  {
                                    const $t28471 = Perihelion$Core$apply_upgrade(g0, choice);
                                    {
                                      const $t28472 = { $: "Playing" };
                                      {
                                        const $t28473 = { $: "Nil" };
                                        return ({ ...$t28471, phase: $t28472, milestone_choices: $t28473 });
                                      }
                                    }
                                  }
                                })();
                                return Perihelion$Core$top_up($t28474);
                              }
                            }
                            break;
                          }
                          default: {
                            return (() => { throw new Error("non-exhaustive pattern match"); })();
                          }
                        }
                      }
                    })();
                  } else {
                    return g0;
                  }
                  break;
                }
                default: {
                  return (() => { throw new Error("non-exhaustive pattern match"); })();
                }
              }
            }
          }
        })();
      }
    }
  }
}
const Perihelion$Core$update$clo = { _0: ($_, game, taps, keys, cursor, view_w, view_h, dt_s) => Perihelion$Core$update(game, taps, keys, cursor, view_w, view_h, dt_s) };

function Perihelion$Core$step_playing(game, tapped, keys, cursor, dt_s) {
  {
    const g0 = (() => {
      {
        const $t28476 = game.mode;
        switch ($t28476.$) {
          case "Orbiting": {
            const $f28477 = $t28476._0;
            const $f28478 = $t28476._1;
            const $f28479 = $t28476._2;
            {
              const angle = (() => {
                return $f28479;
              })();
              {
                const ring = (() => {
                  return $f28478;
                })();
                {
                  const idx = (() => {
                    return $f28477;
                  })();
                  return Perihelion$Core$step_orbit(game, idx, ring, angle, tapped, keys, dt_s);
                }
              }
            }
            break;
          }
          case "Flying": {
            const $f28488 = $t28476._0;
            const $f28489 = $t28476._1;
            {
              const vy = (() => {
                return $f28489;
              })();
              {
                const vx = (() => {
                  return $f28488;
                })();
                return Perihelion$Core$step_flight(game, vx, vy, dt_s);
              }
            }
            break;
          }
          default: {
            return (() => { throw new Error("non-exhaustive pattern match"); })();
          }
        }
      }
    })();
    {
      const n = (() => {
        {
          const $t28494 = g0.owned_weapons;
          {
            const go_i3881 = { $: "$Clo_go$4807", _0: go$apply$4807 };
            return go$apply$4807(go_i3881, $t28494, 0);
          }
        }
      })();
      {
        const g1a = (() => {
          {
            const $t28496 = (() => {
              {
                const $t28495 = g0.active_weapon_idx;
                return Perihelion$Core$adjust_weapon($t28495, keys, n);
              }
            })();
            return ({ ...g0, active_weapon_idx: $t28496 });
          }
        })();
        {
          const g1 = (() => {
            {
              const $t28498 = (() => {
                {
                  const $t28497 = g1a.starkiller_target_offset;
                  return Perihelion$Core$adjust_starkiller_target($t28497, keys);
                }
              })();
              return ({ ...g1a, starkiller_target_offset: $t28498 });
            }
          })();
          {
            const g1x = (() => {
              return Perihelion$Core$apply_special(g1, keys);
            })();
            {
              const $t28499 = g1x.phase;
              switch ($t28499.$) {
                case "Playing": {
                  {
                    const g2 = (() => {
                      {
                        const g1_i3878 = Perihelion$Combat$step_spawn(g1x, dt_s);
                        {
                          const g2_i3879 = Perihelion$Combat$step_entities(g1_i3878, dt_s);
                          return Perihelion$Combat$step_ships(g2_i3879, dt_s);
                        }
                      }
                    })();
                    {
                      const g3 = Perihelion$Combat$fire(g2, keys, cursor, dt_s);
                      {
                        const g4 = (() => {
                          {
                            const g0_i3872 = Perihelion$Combat$collide_shots_stars(g3);
                            {
                              const g1_i3873 = Perihelion$Combat$collide_shots_asteroids(g0_i3872);
                              {
                                const g2_i3874 = Perihelion$Combat$collide_shots_ships(g1_i3873);
                                {
                                  const g3_i3875 = Perihelion$Combat$collide_ball_pickups(g2_i3874);
                                  return Perihelion$Combat$collide_ball_hazards(g3_i3875);
                                }
                              }
                            }
                          }
                        })();
                        {
                          const $t28500 = (() => {
                            return g4.phase;
                          })();
                          switch ($t28500.$) {
                            case "Playing": {
                              {
                                const $t28501 = (() => {
                                  {
                                    const $rc_828 = Perihelion$Core$step_camera(g4, dt_s);
                                    return $rc_828;
                                  }
                                })();
                                return Perihelion$Core$top_up($t28501);
                              }
                              break;
                            }
                            default: {
                              return g4;
                            }
                          }
                        }
                      }
                    }
                  }
                  break;
                }
                default: {
                  return g1x;
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Core$step_playing$clo = { _0: ($_, game, tapped, keys, cursor, dt_s) => Perihelion$Core$step_playing(game, tapped, keys, cursor, dt_s) };

function Perihelion$Core$step_orbit(game, idx, ring, angle, tapped, keys, dt_s) {
  {
    const $t28502 = Perihelion$Core$star_at(game, idx);
    switch ($t28502.$) {
      case "None": {
        return game;
        break;
      }
      case "Some": {
        const $f28525 = $t28502._0;
        {
          const s = $f28525;
          if (tapped === true) {
            return (() => {
              {
                const vx_i10130 = (() => {
                  {
                    const $t28529_i10129 = (() => {
                      {
                        const $t28527_i10127 = (1. * 340.);
                        {
                          const $t28528_i10128 = Math.sin(angle);
                          return ($t28527_i10127 * $t28528_i10128);
                        }
                      }
                    })();
                    return (0. - $t28529_i10129);
                  }
                })();
                {
                  const vy_i10133 = (() => {
                    {
                      const $t28531_i10131 = (1. * 340.);
                      {
                        const $t28532_i10132 = Math.cos(angle);
                        return ($t28531_i10131 * $t28532_i10132);
                      }
                    }
                  })();
                  {
                    const $t28533_i10134 = { $: "Flying", _0: vx_i10130, _1: vy_i10133 };
                    return ({ ...game, mode: $t28533_i10134 });
                  }
                }
              }
            })();
          } else {
            return (() => {
              {
                const ring2 = (() => {
                  {
                    const $t28503 = Perihelion$Core$ring_count(s);
                    return Perihelion$Core$adjust_ring(ring, keys, $t28503);
                  }
                })();
                {
                  const o = Perihelion$Core$ring_at(s, ring2);
                  {
                    const a2 = (() => {
                      {
                        const $t28509 = (() => {
                          {
                            const $t28508 = (() => {
                              {
                                const $t28506 = (1. * 1.8);
                                {
                                  const $t28507 = o.speed_mult;
                                  return ($t28506 * $t28507);
                                }
                              }
                            })();
                            return ($t28508 * dt_s);
                          }
                        })();
                        return (angle + $t28509);
                      }
                    })();
                    {
                      const r = o.radius;
                      {
                        const $t28510 = { $: "Orbiting", _0: idx, _1: ring2, _2: a2 };
                        {
                          const $t28516 = (() => {
                            {
                              const $t28511 = game.loop_angle;
                              {
                                const $t28515 = (() => {
                                  {
                                    const $t28514 = (() => {
                                      {
                                        const $t28513 = o.speed_mult;
                                        return (1.8 * $t28513);
                                      }
                                    })();
                                    return ($t28514 * dt_s);
                                  }
                                })();
                                return ($t28511 + $t28515);
                              }
                            }
                          })();
                          {
                            const $t28520 = (() => {
                              {
                                const $t28517 = s.x;
                                {
                                  const $t28519 = (() => {
                                    {
                                      const $t28518 = Math.cos(a2);
                                      return ($t28518 * r);
                                    }
                                  })();
                                  return ($t28517 + $t28519);
                                }
                              }
                            })();
                            {
                              const $t28524 = (() => {
                                {
                                  const $t28521 = s.y;
                                  {
                                    const $t28523 = (() => {
                                      {
                                        const $t28522 = Math.sin(a2);
                                        return ($t28522 * r);
                                      }
                                    })();
                                    return ($t28521 + $t28523);
                                  }
                                }
                              })();
                              return ({ ...game, mode: $t28510, loop_angle: $t28516, ball_x: $t28520, ball_y: $t28524 });
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Core$step_orbit$clo = { _0: ($_, game, idx, ring, angle, tapped, keys, dt_s) => Perihelion$Core$step_orbit(game, idx, ring, angle, tapped, keys, dt_s) };

function Perihelion$Core$renormalize(vx, vy) {
  {
    const m = (() => {
      {
        const $t28536 = (() => {
          {
            const $t28534 = (vx * vx);
            {
              const $t28535 = (vy * vy);
              return ($t28534 + $t28535);
            }
          }
        })();
        return Math.sqrt($t28536);
      }
    })();
    {
      const $t28537 = (m > 0.);
      if ($t28537 === true) {
        return (() => {
          {
            const out = (() => {
              {
                const $t28540 = (() => {
                  {
                    const $t28538 = (vx / m);
                    return ($t28538 * 340.);
                  }
                })();
                {
                  const $t28543 = (() => {
                    {
                      const $t28541 = (vy / m);
                      return ($t28541 * 340.);
                    }
                  })();
                  return { _0: $t28540, _1: $t28543 };
                }
              }
            })();
            return out;
          }
        })();
      } else {
        return (() => {
          {
            const out = { _0: vx, _1: vy };
            return out;
          }
        })();
      }
    }
  }
}
const Perihelion$Core$renormalize$clo = { _0: ($_, vx, vy) => Perihelion$Core$renormalize(vx, vy) };

function Perihelion$Core$nearest_assist_target(game, vx, vy, stars, best, best_d) {
  switch (stars.$) {
    case "Nil": {
      return best;
      break;
    }
    case "Cons": {
      const $f28562 = stars._0;
      const $f28563 = stars._1;
      {
        const rest = $f28563;
        {
          const s = $f28562;
          {
            const dx = (() => {
              {
                const $t28544 = s.x;
                {
                  const $t28545 = game.ball_x;
                  return ($t28544 - $t28545);
                }
              }
            })();
            {
              const dy = (() => {
                {
                  const $t28546 = s.y;
                  {
                    const $t28547 = game.ball_y;
                    return ($t28546 - $t28547);
                  }
                }
              })();
              {
                const d = (() => {
                  {
                    const $t28550 = (() => {
                      {
                        const $t28548 = (dx * dx);
                        {
                          const $t28549 = (dy * dy);
                          return ($t28548 + $t28549);
                        }
                      }
                    })();
                    return Math.sqrt($t28550);
                  }
                })();
                {
                  const approaching = (() => {
                    {
                      const $t28553 = (() => {
                        {
                          const $t28551 = (vx * dx);
                          {
                            const $t28552 = (vy * dy);
                            return ($t28551 + $t28552);
                          }
                        }
                      })();
                      return ($t28553 > 0.);
                    }
                  })();
                  {
                    const $t28560 = (() => {
                      {
                        const $t28558 = (() => {
                          {
                            const $t28557 = (() => {
                              {
                                const $t28556 = (() => {
                                  {
                                    const $t28555 = s.capture_radius;
                                    return (2.4 * $t28555);
                                  }
                                })();
                                return (d < $t28556);
                              }
                            })();
                            return (approaching && $t28557);
                          }
                        })();
                        {
                          const $t28559 = (d < best_d);
                          return ($t28558 && $t28559);
                        }
                      }
                    })();
                    if ($t28560 === true) {
                      return (() => {
                        {
                          const $t28561 = { $: "Some", _0: s };
                          return Perihelion$Core$nearest_assist_target(game, vx, vy, rest, $t28561, d);
                        }
                      })();
                    } else {
                      return Perihelion$Core$nearest_assist_target(game, vx, vy, rest, best, best_d);
                    }
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Core$nearest_assist_target$clo = { _0: ($_, game, vx, vy, stars, best, best_d) => Perihelion$Core$nearest_assist_target(game, vx, vy, stars, best, best_d) };

function Perihelion$Core$assisted_velocity(game, vx, vy, dt_s) {
  {
    const $t28570 = (() => {
      {
        const $t28568 = game.stars;
        {
          const $t28569 = { $: "None" };
          return Perihelion$Core$nearest_assist_target(game, vx, vy, $t28568, $t28569, 999999.);
        }
      }
    })();
    switch ($t28570.$) {
      case "None": {
        {
          const out = { _0: vx, _1: vy };
          return out;
        }
        break;
      }
      case "Some": {
        const $f28589 = $t28570._0;
        {
          const t = $f28589;
          {
            const dx = (() => {
              {
                const $t28571 = t.x;
                {
                  const $t28572 = game.ball_x;
                  return ($t28571 - $t28572);
                }
              }
            })();
            {
              const dy = (() => {
                {
                  const $t28573 = t.y;
                  {
                    const $t28574 = game.ball_y;
                    return ($t28573 - $t28574);
                  }
                }
              })();
              {
                const dist = (() => {
                  {
                    const $t28577 = (() => {
                      {
                        const $t28575 = (dx * dx);
                        {
                          const $t28576 = (dy * dy);
                          return ($t28575 + $t28576);
                        }
                      }
                    })();
                    return Math.sqrt($t28577);
                  }
                })();
                {
                  const $t28578 = (dist > 0.);
                  if ($t28578 === true) {
                    return (() => {
                      {
                        const $t28583 = (() => {
                          {
                            const $t28582 = (() => {
                              {
                                const $t28581 = (() => {
                                  {
                                    const $t28579 = (dx / dist);
                                    return ($t28579 * 1600.);
                                  }
                                })();
                                return ($t28581 * dt_s);
                              }
                            })();
                            return (vx + $t28582);
                          }
                        })();
                        {
                          const $t28588 = (() => {
                            {
                              const $t28587 = (() => {
                                {
                                  const $t28586 = (() => {
                                    {
                                      const $t28584 = (dy / dist);
                                      return ($t28584 * 1600.);
                                    }
                                  })();
                                  return ($t28586 * dt_s);
                                }
                              })();
                              return (vy + $t28587);
                            }
                          })();
                          return Perihelion$Core$renormalize($t28583, $t28588);
                        }
                      }
                    })();
                  } else {
                    return (() => {
                      {
                        const out = { _0: vx, _1: vy };
                        return out;
                      }
                    })();
                  }
                }
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Core$assisted_velocity$clo = { _0: ($_, game, vx, vy, dt_s) => Perihelion$Core$assisted_velocity(game, vx, vy, dt_s) };

function Perihelion$Core$predict_trajectory_go(game, x, y, vx, vy, n, acc) {
  {
    const $t28590 = (n === 0);
    if ($t28590 === true) {
      return (() => {
        {
          const go_i3896 = { $: "$Clo_go$4318", _0: go$apply$4318 };
          {
            const $t253_i3897 = { $: "Nil" };
            return go$apply$4318(go_i3896, acc, $t253_i3897);
          }
        }
      })();
    } else {
      return (() => {
        {
          const simmed = ({ ...game, ball_x: x, ball_y: y });
          {
            const $p28599 = Perihelion$Core$assisted_velocity(simmed, vx, vy, 0.05);
            {
              const vx2 = $p28599._0;
              {
                const vy2 = $p28599._1;
                {
                  const x2 = (() => {
                    {
                      const $t28593 = (vx2 * 0.05);
                      return (x + $t28593);
                    }
                  })();
                  {
                    const y2 = (() => {
                      {
                        const $t28595 = (vy2 * 0.05);
                        return (y + $t28595);
                      }
                    })();
                    {
                      const $t28596 = (n - 1);
                      {
                        const $t28597 = { _0: x2, _1: y2 };
                        {
                          const $t28598 = { $: "Cons", _0: $t28597, _1: acc };
                          return Perihelion$Core$predict_trajectory_go(game, x2, y2, vx2, vy2, $t28596, $t28598);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      })();
    }
  }
}
const Perihelion$Core$predict_trajectory_go$clo = { _0: ($_, game, x, y, vx, vy, n, acc) => Perihelion$Core$predict_trajectory_go(game, x, y, vx, vy, n, acc) };

function Perihelion$Core$predict_trajectory(game, idx, ring, angle) {
  {
    const $t28600 = Perihelion$Core$star_at(game, idx);
    switch ($t28600.$) {
      case "None": {
        return { $: "Nil" };
        break;
      }
      case "Some": {
        const $f28630 = $t28600._0;
        {
          const s = $f28630;
          {
            const o = Perihelion$Core$ring_at(s, ring);
            {
              const start_x = (() => {
                {
                  const $t28601 = s.x;
                  {
                    const $t28604 = (() => {
                      {
                        const $t28602 = Math.cos(angle);
                        {
                          const $t28603 = o.radius;
                          return ($t28602 * $t28603);
                        }
                      }
                    })();
                    return ($t28601 + $t28604);
                  }
                }
              })();
              {
                const start_y = (() => {
                  {
                    const $t28605 = s.y;
                    {
                      const $t28608 = (() => {
                        {
                          const $t28606 = Math.sin(angle);
                          {
                            const $t28607 = o.radius;
                            return ($t28606 * $t28607);
                          }
                        }
                      })();
                      return ($t28605 + $t28608);
                    }
                  }
                })();
                {
                  const $t28610 = (() => {
                    {
                      const $t28609 = (() => {
                        {
                          const vx_i10142 = (() => {
                            {
                              const $t28529_i10141 = (() => {
                                {
                                  const $t28527_i10139 = (1. * 340.);
                                  {
                                    const $t28528_i10140 = Math.sin(angle);
                                    return ($t28527_i10139 * $t28528_i10140);
                                  }
                                }
                              })();
                              return (0. - $t28529_i10141);
                            }
                          })();
                          {
                            const vy_i10145 = (() => {
                              {
                                const $t28531_i10143 = (1. * 340.);
                                {
                                  const $t28532_i10144 = Math.cos(angle);
                                  return ($t28531_i10143 * $t28532_i10144);
                                }
                              }
                            })();
                            {
                              const $t28533_i10146 = { $: "Flying", _0: vx_i10142, _1: vy_i10145 };
                              return ({ ...game, mode: $t28533_i10146 });
                            }
                          }
                        }
                      })();
                      return $t28609.mode;
                    }
                  })();
                  switch ($t28610.$) {
                    case "Flying": {
                      const $f28613 = $t28610._0;
                      const $f28614 = $t28610._1;
                      {
                        const vy0 = $f28614;
                        {
                          const vx0 = $f28613;
                          {
                            const $t28612 = { $: "Nil" };
                            return Perihelion$Core$predict_trajectory_go(game, start_x, start_y, vx0, vy0, 24, $t28612);
                          }
                        }
                      }
                      break;
                    }
                    case "Orbiting": {
                      const $f28619 = $t28610._0;
                      const $f28620 = $t28610._1;
                      const $f28621 = $t28610._2;
                      return { $: "Nil" };
                      break;
                    }
                    default: {
                      return (() => { throw new Error("non-exhaustive pattern match"); })();
                    }
                  }
                }
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Core$predict_trajectory$clo = { _0: ($_, game, idx, ring, angle) => Perihelion$Core$predict_trajectory(game, idx, ring, angle) };

function Perihelion$Core$find_capture(game, vx, vy, stars, i) {
  switch (stars.$) {
    case "Nil": {
      return { $: "None" };
      break;
    }
    case "Cons": {
      const $f28651 = stars._0;
      const $f28652 = stars._1;
      {
        const rest = $f28652;
        {
          const s = $f28651;
          {
            const dx = (() => {
              {
                const $t28631 = s.x;
                {
                  const $t28632 = game.ball_x;
                  return ($t28631 - $t28632);
                }
              }
            })();
            {
              const dy = (() => {
                {
                  const $t28633 = s.y;
                  {
                    const $t28634 = game.ball_y;
                    return ($t28633 - $t28634);
                  }
                }
              })();
              {
                const grace = (() => {
                  {
                    const $t28635 = s.capture_radius;
                    return ($t28635 + 6.);
                  }
                })();
                {
                  const approaching = (() => {
                    {
                      const $t28639 = (() => {
                        {
                          const $t28637 = (vx * dx);
                          {
                            const $t28638 = (vy * dy);
                            return ($t28637 + $t28638);
                          }
                        }
                      })();
                      return ($t28639 > 0.);
                    }
                  })();
                  {
                    const $t28648 = (() => {
                      {
                        const $t28642 = (() => {
                          {
                            const $t28641 = (() => {
                              {
                                const $t28640 = game.current;
                                return (i !== $t28640);
                              }
                            })();
                            return ($t28641 && approaching);
                          }
                        })();
                        {
                          const $t28647 = (() => {
                            {
                              const $t28646 = (() => {
                                {
                                  const $t28645 = (() => {
                                    {
                                      const $t28643 = (dx * dx);
                                      {
                                        const $t28644 = (dy * dy);
                                        return ($t28643 + $t28644);
                                      }
                                    }
                                  })();
                                  return Math.sqrt($t28645);
                                }
                              })();
                              return ($t28646 <= grace);
                            }
                          })();
                          return ($t28642 && $t28647);
                        }
                      }
                    })();
                    if ($t28648 === true) {
                      return (() => {
                        {
                          const $t28649 = { _0: i, _1: s };
                          return { $: "Some", _0: $t28649 };
                        }
                      })();
                    } else {
                      return (() => {
                        {
                          const $t28650 = (i + 1);
                          return Perihelion$Core$find_capture(game, vx, vy, rest, $t28650);
                        }
                      })();
                    }
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Core$find_capture$clo = { _0: ($_, game, vx, vy, stars, i) => Perihelion$Core$find_capture(game, vx, vy, stars, i) };

function Perihelion$Core$step_flight(game, vx, vy, dt_s) {
  {
    const $p28673 = Perihelion$Core$assisted_velocity(game, vx, vy, dt_s);
    {
      const vx2 = $p28673._0;
      {
        const vy2 = $p28673._1;
        {
          const g = (() => {
            {
              const $t28659 = (() => {
                {
                  const $t28657 = game.ball_x;
                  {
                    const $t28658 = (vx2 * dt_s);
                    return ($t28657 + $t28658);
                  }
                }
              })();
              {
                const $t28662 = (() => {
                  {
                    const $t28660 = game.ball_y;
                    {
                      const $t28661 = (vy2 * dt_s);
                      return ($t28660 + $t28661);
                    }
                  }
                })();
                {
                  const $t28663 = { $: "Flying", _0: vx2, _1: vy2 };
                  return ({ ...game, ball_x: $t28659, ball_y: $t28662, mode: $t28663 });
                }
              }
            }
          })();
          {
            const $t28665 = (() => {
              {
                const $t28664 = g.stars;
                return Perihelion$Core$find_capture(g, vx2, vy2, $t28664, 0);
              }
            })();
            switch ($t28665.$) {
              case "None": {
                return Perihelion$Core$check_death(g);
                break;
              }
              case "Some": {
                const $f28666 = $t28665._0;
                const $f28667 = $f28666._0;
                const $f28668 = $f28666._1;
                {
                  const t = $f28668;
                  {
                    const idx = $f28667;
                    return Perihelion$Core$on_capture(g, t, idx);
                  }
                }
                return (() => { throw new Error("non-exhaustive pattern match"); })();
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Core$step_flight$clo = { _0: ($_, game, vx, vy, dt_s) => Perihelion$Core$step_flight(game, vx, vy, dt_s) };

function Perihelion$Core$on_capture(game, captured, idx) {
  {
    const angle = (() => {
      {
        const $t28676 = (() => {
          {
            const $t28674 = game.ball_y;
            {
              const $t28675 = captured.y;
              return ($t28674 - $t28675);
            }
          }
        })();
        {
          const $t28679 = (() => {
            {
              const $t28677 = game.ball_x;
              {
                const $t28678 = captured.x;
                return ($t28677 - $t28678);
              }
            }
          })();
          return Math.atan2($t28676, $t28679);
        }
      }
    })();
    {
      const snapped = (() => {
        {
          const $t28681 = (() => {
            {
              const $t28680 = (() => {
                {
                  const $t28330_i3912 = Perihelion$Core$ring_count(captured);
                  return ($t28330_i3912 - 1);
                }
              })();
              return { $: "Orbiting", _0: idx, _1: $t28680, _2: angle };
            }
          })();
          {
            const $t28686 = (() => {
              {
                const $t28682 = captured.x;
                {
                  const $t28685 = (() => {
                    {
                      const $t28683 = Math.cos(angle);
                      {
                        const $t28684 = captured.capture_radius;
                        return ($t28683 * $t28684);
                      }
                    }
                  })();
                  return ($t28682 + $t28685);
                }
              }
            })();
            {
              const $t28691 = (() => {
                {
                  const $t28687 = captured.y;
                  {
                    const $t28690 = (() => {
                      {
                        const $t28688 = Math.sin(angle);
                        {
                          const $t28689 = captured.capture_radius;
                          return ($t28688 * $t28689);
                        }
                      }
                    })();
                    return ($t28687 + $t28690);
                  }
                }
              })();
              return ({ ...game, mode: $t28681, loop_angle: 0., ball_x: $t28686, ball_y: $t28691 });
            }
          }
        }
      })();
      {
        const $t28693 = (() => {
          {
            const $t28692 = game.current;
            return (idx > $t28692);
          }
        })();
        if ($t28693 === true) {
          return (() => {
            {
              const new_mult = (() => {
                {
                  const $t28696 = (() => {
                    {
                      const $t28694 = game.loop_angle;
                      return ($t28694 < 6.28318530718);
                    }
                  })();
                  if ($t28696 === true) {
                    return (() => {
                      {
                        const $t28700 = (() => {
                          {
                            const $t28698 = (() => {
                              {
                                const $t28697 = game.multiplier;
                                return ($t28697 + 1);
                              }
                            })();
                            return ($t28698 > 5);
                          }
                        })();
                        if ($t28700 === true) {
                          return 5;
                        } else {
                          return (() => {
                            {
                              const $t28701 = game.multiplier;
                              return ($t28701 + 1);
                            }
                          })();
                        }
                      }
                    })();
                  } else {
                    return 1;
                  }
                }
              })();
              {
                const new_chained = (() => {
                  {
                    const $t28702 = game.stars_chained;
                    return ($t28702 + 1);
                  }
                })();
                {
                  const streaks_live = (new_mult > 1);
                  {
                    const captured_game = (() => {
                      {
                        const $t28704 = (() => {
                          {
                            const $t28703 = game.score;
                            return ($t28703 + new_mult);
                          }
                        })();
                        {
                          const $t28706 = (() => {
                            {
                              const $t28705 = game.max_mult;
                              {
                                const $t28779_i3908 = ($t28705 > new_mult);
                                if ($t28779_i3908 === true) {
                                  return $t28705;
                                } else {
                                  return new_mult;
                                }
                              }
                            }
                          })();
                          {
                            let $t28707;
                            if (streaks_live === true) {
                              $t28707 = game.ship_kill_streak;
                            } else {
                              $t28707 = 0;
                            }
                            {
                              let $t28708;
                              if (streaks_live === true) {
                                $t28708 = game.asteroid_kill_streak;
                              } else {
                                $t28708 = 0;
                              }
                              {
                                const $t28712 = (() => {
                                  {
                                    const $t28711 = (() => {
                                      {
                                        const $t28709 = captured.x;
                                        {
                                          const $t28710 = captured.y;
                                          return { _0: $t28709, _1: $t28710 };
                                        }
                                      }
                                    })();
                                    return { $: "Some", _0: $t28711 };
                                  }
                                })();
                                return ({ ...snapped, current: idx, score: $t28704, stars_chained: new_chained, multiplier: new_mult, max_mult: $t28706, ship_kill_streak: $t28707, asteroid_kill_streak: $t28708, capture_flash: $t28712 });
                              }
                            }
                          }
                        }
                      }
                    })();
                    {
                      const $p28720 = (() => {
                        {
                          const $t28713 = captured_game.rng;
                          return Perihelion$Upgrades$milestone_check($t28713, new_chained);
                        }
                      })();
                      {
                        const rng_after_check = $p28720._0;
                        {
                          const triggered = $p28720._1;
                          if (triggered === true) {
                            return (() => {
                              {
                                const $p28718 = (() => {
                                  {
                                    const $t28714 = captured_game.owned_weapons;
                                    {
                                      const $t28715 = captured_game.special;
                                      return Perihelion$Upgrades$draw_choices(rng_after_check, $t28714, $t28715);
                                    }
                                  }
                                })();
                                {
                                  const rng2 = $p28718._0;
                                  {
                                    const choices = $p28718._1;
                                    {
                                      const $t28717 = (() => {
                                        {
                                          const $t28716 = { $: "Milestone" };
                                          return ({ ...captured_game, phase: $t28716, rng: rng2, milestone_choices: choices });
                                        }
                                      })();
                                      return Perihelion$Core$top_up($t28717);
                                    }
                                  }
                                }
                              }
                            })();
                          } else {
                            return (() => {
                              {
                                const $t28719 = ({ ...captured_game, rng: rng_after_check });
                                return Perihelion$Core$top_up($t28719);
                              }
                            })();
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          })();
        } else {
          return ({ ...snapped, current: idx, multiplier: 1, ship_kill_streak: 0, asteroid_kill_streak: 0 });
        }
      }
    }
  }
}
const Perihelion$Core$on_capture$clo = { _0: ($_, game, captured, idx) => Perihelion$Core$on_capture(game, captured, idx) };

function Perihelion$Core$pick_milestone(game, choice_idx) {
  {
    const g0 = (() => {
      {
        const $t28721 = { $: "Nil" };
        {
          const $t28722 = { $: "None" };
          return ({ ...game, fx_bursts: $t28721, capture_flash: $t28722 });
        }
      }
    })();
    switch (choice_idx.$) {
      case "None": {
        return g0;
        break;
      }
      case "Some": {
        const $f28730 = choice_idx._0;
        {
          const i = $f28730;
          {
            const $t28724 = (() => {
              {
                const $t28723 = g0.milestone_choices;
                return List$nth_opt$List_UpgradeKind$Int($t28723, i);
              }
            })();
            switch ($t28724.$) {
              case "None": {
                return g0;
                break;
              }
              case "Some": {
                const $f28729 = $t28724._0;
                {
                  const choice = $f28729;
                  {
                    const $t28728 = (() => {
                      {
                        const $t28725 = Perihelion$Core$apply_upgrade(g0, choice);
                        {
                          const $t28726 = { $: "Playing" };
                          {
                            const $t28727 = { $: "Nil" };
                            return ({ ...$t28725, phase: $t28726, milestone_choices: $t28727 });
                          }
                        }
                      }
                    })();
                    return Perihelion$Core$top_up($t28728);
                  }
                }
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const Perihelion$Core$pick_milestone$clo = { _0: ($_, game, choice_idx) => Perihelion$Core$pick_milestone(game, choice_idx) };

function Perihelion$Core$apply_upgrade(game, u) {
  switch (u.$) {
    case "OffenseWeapon": {
      const $f28743 = u._0;
      {
        const k = $f28743;
        {
          const $t28732 = (() => {
            {
              const $t28731 = game.owned_weapons;
              {
                const $t669_i3920 = { $: "$Clo_$lam668$4791", _0: $lam668$apply$4791, _1: k };
                return List$any$List_WeaponKind$Fn_WeaponKind_Bool($t28731, $t669_i3920);
              }
            }
          })();
          if ($t28732 === true) {
            return game;
          } else {
            return (() => {
              {
                const $t28733 = game.owned_weapons;
                {
                  const $t28734 = { $: "Nil" };
                  {
                    const $t28735 = { $: "Cons", _0: k, _1: $t28734 };
                    {
                      const $t28736 = (() => {
                        {
                          const go_i10149 = { $: "$Clo_go$4810", _0: go$apply$4810 };
                          {
                            const $t261_i10152 = (() => {
                              {
                                const go_i4526_i10150 = { $: "$Clo_go$5258", _0: go$apply$5258 };
                                {
                                  const $t253_i4527_i10151 = { $: "Nil" };
                                  return go$apply$5258(go_i4526_i10150, $t28733, $t253_i4527_i10151);
                                }
                              }
                            })();
                            return go$apply$4810(go_i10149, $t261_i10152, $t28735);
                          }
                        }
                      })();
                      return ({ ...game, owned_weapons: $t28736 });
                    }
                  }
                }
              }
            })();
          }
        }
      }
      break;
    }
    case "OffenseFireRate": {
      {
        const $t28738 = (() => {
          {
            const $t28737 = game.fire_rate_stacks;
            return ($t28737 + 1);
          }
        })();
        return ({ ...game, fire_rate_stacks: $t28738 });
      }
      break;
    }
    case "DefenseBulletWard": {
      return ({ ...game, bullet_ward: true });
      break;
    }
    case "DefenseDeflector": {
      return ({ ...game, deflector_plating: true });
      break;
    }
    case "DefenseShield": {
      {
        const $t28740 = (() => {
          {
            const $t28739 = game.shield;
            return ($t28739 + 1);
          }
        })();
        return ({ ...game, shield: $t28740, shield_reinforced: true });
      }
      break;
    }
    case "SpecialItem": {
      const $f28744 = u._0;
      {
        const k = $f28744;
        {
          const $t28741 = (() => {
            return { $: "Some", _0: k };
          })();
          {
            const $t28742 = (() => {
              {
                let $rc_829;
                switch (k.$) {
                  case "StarThrust": {
                    $rc_829 = 3;
                    break;
                  }
                  case "StarJump": {
                    $rc_829 = 1;
                    break;
                  }
                  case "TrajectoryPreview": {
                    $rc_829 = 0;
                    break;
                  }
                  default: {
                    $rc_829 = (() => { throw new Error("non-exhaustive pattern match"); })();
                    break;
                  }
                }
                return $rc_829;
              }
            })();
            return ({ ...game, special: $t28741, special_charges: $t28742 });
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Core$apply_upgrade$clo = { _0: ($_, game, u) => Perihelion$Core$apply_upgrade(game, u) };

function Perihelion$Core$top_up(game) {
  {
    const fallback = (() => {
      {
        const $t28746 = (() => {
          {
            const $t28745 = game.view_w;
            return ($t28745 / 2.);
          }
        })();
        {
          const $t28747 = ({ radius: 54., speed_mult: 1. });
          {
            const $t28748 = { $: "Nil" };
            {
              const $t28749 = { $: "Cons", _0: $t28747, _1: $t28748 };
              return ({ x: $t28746, y: 520., radius: 18., capture_radius: 54., speed_mult: 1., orbits: $t28749 });
            }
          }
        }
      }
    })();
    {
      const top = (() => {
        {
          const $t28750 = game.stars;
          return Perihelion$Core$top_star($t28750, fallback);
        }
      })();
      {
        const $t28757 = (() => {
          {
            const $t28751 = top.y;
            {
              const $t28756 = (() => {
                {
                  const $t28752 = game.camera_y;
                  {
                    const $t28755 = (() => {
                      {
                        const $t28753 = game.view_h;
                        return ($t28753 * 1.5);
                      }
                    })();
                    return ($t28752 - $t28755);
                  }
                }
              })();
              return ($t28751 > $t28756);
            }
          }
        })();
        if ($t28757 === true) {
          return (() => {
            {
              const $p28768 = (() => {
                {
                  const $t28758 = game.rng;
                  {
                    const $t28759 = game.view_w;
                    return Perihelion$Level$next_star($t28758, top, $t28759);
                  }
                }
              })();
              {
                const fresh = $p28768._0;
                {
                  const rng2 = $p28768._1;
                  {
                    const g2 = (() => {
                      {
                        const $t28760 = game.stars;
                        {
                          const $t28761 = { $: "Nil" };
                          {
                            const $t28762 = { $: "Cons", _0: fresh, _1: $t28761 };
                            {
                              const $t28763 = (() => {
                                {
                                  const go_i10156 = { $: "$Clo_go$4798", _0: go$apply$4798 };
                                  {
                                    const $t261_i10159 = (() => {
                                      {
                                        const go_i4519_i10157 = { $: "$Clo_go$5256", _0: go$apply$5256 };
                                        {
                                          const $t253_i4520_i10158 = { $: "Nil" };
                                          return go$apply$5256(go_i4519_i10157, $t28760, $t253_i4520_i10158);
                                        }
                                      }
                                    })();
                                    return go$apply$4798(go_i10156, $t261_i10159, $t28762);
                                  }
                                }
                              })();
                              return ({ ...game, stars: $t28763, rng: rng2 });
                            }
                          }
                        }
                      }
                    })();
                    {
                      const $t28767 = (() => {
                        {
                          const $t28766 = (() => {
                            {
                              const $t28765 = (() => {
                                {
                                  const $t28764 = g2.stars;
                                  {
                                    const go_i3923 = { $: "$Clo_go$4758", _0: go$apply$4758 };
                                    return go$apply$4758(go_i3923, $t28764, 0);
                                  }
                                }
                              })();
                              return ($t28765 - 1);
                            }
                          })();
                          return Perihelion$Combat$maybe_spawn_ship(g2, $t28766);
                        }
                      })();
                      return Perihelion$Core$top_up($t28767);
                    }
                  }
                }
              }
            }
          })();
        } else {
          return game;
        }
      }
    }
  }
}
const Perihelion$Core$top_up$clo = { _0: ($_, game) => Perihelion$Core$top_up(game) };

function Perihelion$Core$top_star(stars, fallback) {
  switch (stars.$) {
    case "Nil": {
      return fallback;
      break;
    }
    case "Cons": {
      const $f28769 = stars._0;
      const $f28770 = stars._1;
      {
        const $jp_clo28776 = (() => {
          return { $: "$Clo_$jp28775$3751", _0: $jp28775$apply$3751, _1: $f28770, _2: fallback };
        })();
        switch ($f28770.$) {
          case "Nil": {
            {
              const s = $f28769;
              return s;
            }
            break;
          }
          default: {
            return $jp28775$apply$3751($jp_clo28776);
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Core$top_star$clo = { _0: ($_, stars, fallback) => Perihelion$Core$top_star(stars, fallback) };

function Perihelion$Core$end_run(game) {
  {
    const rec = (() => {
      {
        const $t28780 = game.score;
        {
          const $t28781 = game.stars_chained;
          {
            const $t28782 = game.max_mult;
            return ({ score: $t28780, stars: $t28781, max_mult: $t28782 });
          }
        }
      }
    })();
    {
      const $t28783 = { $: "Over" };
      {
        const $t28786 = (() => {
          {
            const $t28784 = game.best;
            {
              const $t28785 = game.score;
              {
                const $t28779_i3931 = ($t28784 > $t28785);
                if ($t28779_i3931 === true) {
                  return $t28784;
                } else {
                  return $t28785;
                }
              }
            }
          }
        })();
        {
          const $t28787 = game.runs;
          {
            const $t28788 = (() => {
              return { $: "Cons", _0: rec, _1: $t28787 };
            })();
            {
              const $t28789 = (() => {
                {
                  const go_i3927 = { $: "$Clo_go$4812", _0: go$apply$4812 };
                  {
                    const $t508_i3928 = { $: "Nil" };
                    return go$apply$4812(go_i3927, $t28788, 10, $t508_i3928);
                  }
                }
              })();
              return ({ ...game, phase: $t28783, best: $t28786, runs: $t28789 });
            }
          }
        }
      }
    }
  }
}
const Perihelion$Core$end_run$clo = { _0: ($_, game) => Perihelion$Core$end_run(game) };

function Perihelion$Core$check_death(game) {
  {
    const below = (() => {
      {
        const $t28790 = game.ball_y;
        {
          const $t28795 = (() => {
            {
              const $t28793 = (() => {
                {
                  const $t28791 = game.camera_y;
                  {
                    const $t28792 = game.view_h;
                    return ($t28791 + $t28792);
                  }
                }
              })();
              return ($t28793 + 40.);
            }
          })();
          return ($t28790 > $t28795);
        }
      }
    })();
    {
      const off_side = (() => {
        {
          const $t28799 = (() => {
            {
              const $t28796 = game.ball_x;
              {
                const $t28798 = (0. - 40.);
                return ($t28796 < $t28798);
              }
            }
          })();
          {
            const $t28804 = (() => {
              {
                const $t28800 = game.ball_x;
                {
                  const $t28803 = (() => {
                    {
                      const $t28801 = game.view_w;
                      return ($t28801 + 40.);
                    }
                  })();
                  return ($t28800 > $t28803);
                }
              }
            })();
            return ($t28799 || $t28804);
          }
        }
      })();
      {
        const fallback = (() => {
          {
            const $t28806 = (() => {
              {
                const $t28805 = game.view_w;
                return ($t28805 / 2.);
              }
            })();
            {
              const $t28807 = ({ radius: 54., speed_mult: 1. });
              {
                const $t28808 = { $: "Nil" };
                {
                  const $t28809 = { $: "Cons", _0: $t28807, _1: $t28808 };
                  return ({ x: $t28806, y: 520., radius: 18., capture_radius: 54., speed_mult: 1., orbits: $t28809 });
                }
              }
            }
          }
        })();
        {
          const topmost = (() => {
            {
              const $t28810 = game.stars;
              return Perihelion$Core$top_star($t28810, fallback);
            }
          })();
          {
            const overshot = (() => {
              {
                const $t28811 = game.ball_y;
                {
                  const $t28814 = (() => {
                    {
                      const $t28812 = topmost.y;
                      return ($t28812 - 150.);
                    }
                  })();
                  return ($t28811 < $t28814);
                }
              }
            })();
            {
              const fallen = (() => {
                {
                  const $t28815 = Perihelion$Core$star_at(game, 0);
                  switch ($t28815.$) {
                    case "None": {
                      return false;
                      break;
                    }
                    case "Some": {
                      const $f28820 = $t28815._0;
                      {
                        const c = $f28820;
                        {
                          const $t28816 = game.ball_y;
                          {
                            const $t28819 = (() => {
                              {
                                const $t28817 = c.y;
                                return ($t28817 + 200.);
                              }
                            })();
                            return ($t28816 > $t28819);
                          }
                        }
                      }
                      break;
                    }
                    default: {
                      return (() => { throw new Error("non-exhaustive pattern match"); })();
                    }
                  }
                }
              })();
              {
                const $t28823 = (() => {
                  {
                    const $t28822 = (() => {
                      {
                        const $t28821 = (below || off_side);
                        return ($t28821 || overshot);
                      }
                    })();
                    return ($t28822 || fallen);
                  }
                })();
                if ($t28823 === true) {
                  return Perihelion$Core$end_run(game);
                } else {
                  return game;
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Core$check_death$clo = { _0: ($_, game) => Perihelion$Core$check_death(game) };

function Perihelion$Core$step_camera(game, dt_s) {
  {
    const focus_x = (() => {
      {
        const $t28824 = game.mode;
        switch ($t28824.$) {
          case "Flying": {
            const $f28831 = $t28824._0;
            const $f28832 = $t28824._1;
            (() => {
              return $f28831;
            })();
            return game.ball_x;
            break;
          }
          case "Orbiting": {
            const $f28837 = $t28824._0;
            const $f28838 = $t28824._1;
            const $f28839 = $t28824._2;
            {
              const $t28826 = (() => {
                {
                  const $t28825 = game.current;
                  return Perihelion$Core$star_at(game, $t28825);
                }
              })();
              switch ($t28826.$) {
                case "None": {
                  {
                    const $t28827 = game.camera_x;
                    {
                      const $t28829 = (() => {
                        {
                          const $t28828 = game.view_w;
                          return ($t28828 / 2.);
                        }
                      })();
                      return ($t28827 + $t28829);
                    }
                  }
                  break;
                }
                case "Some": {
                  const $f28830 = $t28826._0;
                  {
                    const s = $f28830;
                    return s.x;
                  }
                  break;
                }
                default: {
                  return (() => { throw new Error("non-exhaustive pattern match"); })();
                }
              }
            }
            break;
          }
          default: {
            return (() => { throw new Error("non-exhaustive pattern match"); })();
          }
        }
      }
    })();
    {
      const target_y = (() => {
        {
          const $t28848 = game.mode;
          switch ($t28848.$) {
            case "Flying": {
              const $f28860 = $t28848._0;
              const $f28861 = $t28848._1;
              {
                const $t28849 = game.ball_y;
                {
                  const $t28852 = (() => {
                    {
                      const $t28851 = game.view_h;
                      return (0.6 * $t28851);
                    }
                  })();
                  return ($t28849 - $t28852);
                }
              }
              break;
            }
            case "Orbiting": {
              const $f28866 = $t28848._0;
              const $f28867 = $t28848._1;
              const $f28868 = $t28848._2;
              {
                const $t28854 = (() => {
                  {
                    const $t28853 = game.current;
                    return Perihelion$Core$star_at(game, $t28853);
                  }
                })();
                switch ($t28854.$) {
                  case "None": {
                    return game.camera_y;
                    break;
                  }
                  case "Some": {
                    const $f28859 = $t28854._0;
                    {
                      const s = $f28859;
                      {
                        const $t28855 = s.y;
                        {
                          const $t28858 = (() => {
                            {
                              const $t28857 = game.view_h;
                              return (0.6 * $t28857);
                            }
                          })();
                          return ($t28855 - $t28858);
                        }
                      }
                    }
                    break;
                  }
                  default: {
                    return (() => { throw new Error("non-exhaustive pattern match"); })();
                  }
                }
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        }
      })();
      {
        const left_edge = (() => {
          {
            const $t28877 = game.view_w;
            return ($t28877 * 0.25);
          }
        })();
        {
          const right_edge = (() => {
            {
              const $t28879 = game.view_w;
              {
                const $t28881 = (1. - 0.25);
                return ($t28879 * $t28881);
              }
            }
          })();
          {
            const screen_x = (() => {
              {
                const $t28882 = game.camera_x;
                return (focus_x - $t28882);
              }
            })();
            {
              const target_x = (() => {
                {
                  const $t28883 = (screen_x < left_edge);
                  if ($t28883 === true) {
                    return (focus_x - left_edge);
                  } else {
                    return (() => {
                      {
                        const $t28884 = (screen_x > right_edge);
                        if ($t28884 === true) {
                          return (focus_x - right_edge);
                        } else {
                          return game.camera_x;
                        }
                      }
                    })();
                  }
                }
              })();
              {
                const $t28891 = (() => {
                  {
                    const $t28885 = game.camera_y;
                    {
                      const $t28890 = (() => {
                        {
                          const $t28889 = (() => {
                            {
                              const $t28887 = (() => {
                                {
                                  const $t28886 = game.camera_y;
                                  return (target_y - $t28886);
                                }
                              })();
                              return ($t28887 * 3.);
                            }
                          })();
                          return ($t28889 * dt_s);
                        }
                      })();
                      return ($t28885 + $t28890);
                    }
                  }
                })();
                {
                  const $t28898 = (() => {
                    {
                      const $t28892 = game.camera_x;
                      {
                        const $t28897 = (() => {
                          {
                            const $t28896 = (() => {
                              {
                                const $t28894 = (() => {
                                  {
                                    const $t28893 = game.camera_x;
                                    return (target_x - $t28893);
                                  }
                                })();
                                return ($t28894 * 3.);
                              }
                            })();
                            return ($t28896 * dt_s);
                          }
                        })();
                        return ($t28892 + $t28897);
                      }
                    }
                  })();
                  return ({ ...game, camera_y: $t28891, camera_x: $t28898 });
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Core$step_camera$clo = { _0: ($_, game, dt_s) => Perihelion$Core$step_camera(game, dt_s) };

function Perihelion$Core$fresh_run(seed, best, runs, view_w, view_h) {
  {
    const $p28952 = (() => {
      {
        const $t28899 = Random$seed(seed);
        return Perihelion$Level$initial_stars($t28899, view_w);
      }
    })();
    {
      const stars = $p28952._0;
      {
        const rng2 = $p28952._1;
        {
          const start_angle = (3.14159265359 / 2.);
          switch (stars.$) {
            case "Nil": {
              {
                const $t28901 = { $: "Ready" };
                {
                  const $t28902 = { $: "Orbiting", _0: 0, _1: 0, _2: start_angle };
                  {
                    const $t28903 = { $: "Nil" };
                    {
                      const $t28904 = { $: "Nil" };
                      {
                        const $t28905 = { $: "Nil" };
                        {
                          const $t28906 = { $: "Nil" };
                          {
                            const $t28907 = { $: "Nil" };
                            {
                              const $t28908 = { $: "Nil" };
                              {
                                const $t28909 = { $: "Base" };
                                {
                                  const $t28910 = { $: "Nil" };
                                  {
                                    const $t28911 = { $: "Cons", _0: $t28909, _1: $t28910 };
                                    {
                                      const $t28912 = { $: "None" };
                                      {
                                        const $t28913 = { $: "Nil" };
                                        {
                                          const $t28915 = { $: "Nil" };
                                          {
                                            const $t28916 = { $: "None" };
                                            return ({ seed: seed, phase: $t28901, ball_x: 0., ball_y: 0., mode: $t28902, stars: $t28903, current: 0, score: 0, best: best, camera_y: 0., camera_x: 0., rng: rng2, asteroids: $t28904, ships: $t28905, player_shots: $t28906, enemy_shots: $t28907, pickups: $t28908, shield: 0, multiplier: 1, max_mult: 1, ship_kill_streak: 0, asteroid_kill_streak: 0, owned_weapons: $t28911, active_weapon_idx: 0, fire_rate_stacks: 0, bullet_ward: false, deflector_plating: false, shield_reinforced: false, special: $t28912, special_charges: 0, starkiller_target_offset: 0, starkiller_cooldown: 0., milestone_choices: $t28913, stars_chained: 0, loop_angle: 0., fire_cooldown: 0., spawn_timer: 4., runs: runs, view_w: view_w, view_h: view_h, fx_bursts: $t28915, capture_flash: $t28916 });
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              break;
            }
            case "Cons": {
              const $f28946 = stars._0;
              const $f28947 = stars._1;
              {
                const s0 = (() => {
                  return $f28946;
                })();
                {
                  const $t28917 = { $: "Ready" };
                  {
                    const $t28922 = (() => {
                      {
                        const $t28918 = s0.x;
                        {
                          const $t28921 = (() => {
                            {
                              const $t28919 = Math.cos(start_angle);
                              {
                                const $t28920 = s0.capture_radius;
                                return ($t28919 * $t28920);
                              }
                            }
                          })();
                          return ($t28918 + $t28921);
                        }
                      }
                    })();
                    {
                      const $t28927 = (() => {
                        {
                          const $t28923 = s0.y;
                          {
                            const $t28926 = (() => {
                              {
                                const $t28924 = Math.sin(start_angle);
                                {
                                  const $t28925 = s0.capture_radius;
                                  return ($t28924 * $t28925);
                                }
                              }
                            })();
                            return ($t28923 + $t28926);
                          }
                        }
                      })();
                      {
                        const $t28928 = { $: "Orbiting", _0: 0, _1: 0, _2: start_angle };
                        {
                          const $t28932 = (() => {
                            {
                              const $t28929 = s0.y;
                              {
                                const $t28931 = (0.6 * view_h);
                                return ($t28929 - $t28931);
                              }
                            }
                          })();
                          {
                            const $t28933 = { $: "Nil" };
                            {
                              const $t28934 = { $: "Nil" };
                              {
                                const $t28935 = { $: "Nil" };
                                {
                                  const $t28936 = { $: "Nil" };
                                  {
                                    const $t28937 = { $: "Nil" };
                                    {
                                      const $t28938 = { $: "Base" };
                                      {
                                        const $t28939 = { $: "Nil" };
                                        {
                                          const $t28940 = { $: "Cons", _0: $t28938, _1: $t28939 };
                                          {
                                            const $t28941 = { $: "None" };
                                            {
                                              const $t28942 = { $: "Nil" };
                                              {
                                                const $t28944 = { $: "Nil" };
                                                {
                                                  const $t28945 = { $: "None" };
                                                  return ({ seed: seed, phase: $t28917, ball_x: $t28922, ball_y: $t28927, mode: $t28928, stars: stars, current: 0, score: 0, best: best, camera_y: $t28932, camera_x: 0., rng: rng2, asteroids: $t28933, ships: $t28934, player_shots: $t28935, enemy_shots: $t28936, pickups: $t28937, shield: 0, multiplier: 1, max_mult: 1, ship_kill_streak: 0, asteroid_kill_streak: 0, owned_weapons: $t28940, active_weapon_idx: 0, fire_rate_stacks: 0, bullet_ward: false, deflector_plating: false, shield_reinforced: false, special: $t28941, special_charges: 0, starkiller_target_offset: 0, starkiller_cooldown: 0., milestone_choices: $t28942, stars_chained: 0, loop_angle: 0., fire_cooldown: 0., spawn_timer: 4., runs: runs, view_w: view_w, view_h: view_h, fx_bursts: $t28944, capture_flash: $t28945 });
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        }
      }
    }
  }
}
const Perihelion$Core$fresh_run$clo = { _0: ($_, seed, best, runs, view_w, view_h) => Perihelion$Core$fresh_run(seed, best, runs, view_w, view_h) };

function Perihelion$Core$restart(game) {
  {
    const g0 = (() => {
      {
        const $t28958 = (() => {
          {
            const $p28957_i10172 = (() => {
              {
                const $t28956_i10161 = game.rng;
                {
                  const $p15576_i3946_i10162 = Random$next_raw($t28956_i10161);
                  {
                    const hi_i3947_i10163 = $p15576_i3946_i10162._0;
                    {
                      const rng2_i3948_i10164 = $p15576_i3946_i10162._1;
                      {
                        const $p15575_i3949_i10165 = Random$next_raw(rng2_i3948_i10164);
                        {
                          const lo_i3950_i10166 = $p15575_i3949_i10165._0;
                          {
                            const rng3_i3951_i10167 = $p15575_i3949_i10165._1;
                            {
                              const $t15574_i3955_i10171 = (() => {
                                {
                                  const $t15573_i3954_i10170 = (() => {
                                    {
                                      const $t15571_i3952_i10168 = march_int_and(hi_i3947_i10163, 1048575);
                                      return ($t15571_i3952_i10168 * 4294967296);
                                    }
                                  })();
                                  return ($t15573_i3954_i10170 + lo_i3950_i10166);
                                }
                              })();
                              return { _0: $t15574_i3955_i10171, _1: rng3_i3951_i10167 };
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const s_i10173 = $p28957_i10172._0;
              return s_i10173;
            }
          }
        })();
        {
          const $t28959 = game.best;
          {
            const $t28960 = game.runs;
            {
              const $t28961 = game.view_w;
              {
                const $t28962 = game.view_h;
                return Perihelion$Core$fresh_run($t28958, $t28959, $t28960, $t28961, $t28962);
              }
            }
          }
        }
      }
    })();
    {
      const $t28963 = game.owned_weapons;
      {
        const $t28964 = game.fire_rate_stacks;
        {
          const $t28965 = game.bullet_ward;
          {
            const $t28966 = game.deflector_plating;
            {
              const $t28967 = game.shield_reinforced;
              {
                const $t28968 = game.special;
                {
                  const held = (() => {
                    return Perihelion$Upgrades$owned_upgrades($t28963, $t28964, $t28965, $t28966, $t28967, $t28968);
                  })();
                  {
                    const $p28972 = (() => {
                      {
                        const $t28969 = g0.rng;
                        return Perihelion$Upgrades$pick_carryover($t28969, held);
                      }
                    })();
                    {
                      const rng2 = $p28972._0;
                      {
                        const carry = $p28972._1;
                        {
                          let g1;
                          switch (carry.$) {
                            case "None": {
                              g1 = g0;
                              break;
                            }
                            case "Some": {
                              const $f28970 = carry._0;
                              g1 = (() => {
                                {
                                  const u = (() => {
                                    return $f28970;
                                  })();
                                  return Perihelion$Core$apply_upgrade(g0, u);
                                }
                              })();
                              break;
                            }
                            default: {
                              g1 = (() => { throw new Error("non-exhaustive pattern match"); })();
                              break;
                            }
                          }
                          {
                            const $t28971 = { $: "Playing" };
                            return ({ ...g1, rng: rng2, phase: $t28971 });
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Core$restart$clo = { _0: ($_, game) => Perihelion$Core$restart(game) };

function Perihelion$Core$reset(game) {
  {
    const $t28973 = (() => {
      {
        const $p28957_i10186 = (() => {
          {
            const $t28956_i10175 = game.rng;
            {
              const $p15576_i3946_i10176 = Random$next_raw($t28956_i10175);
              {
                const hi_i3947_i10177 = $p15576_i3946_i10176._0;
                {
                  const rng2_i3948_i10178 = $p15576_i3946_i10176._1;
                  {
                    const $p15575_i3949_i10179 = Random$next_raw(rng2_i3948_i10178);
                    {
                      const lo_i3950_i10180 = $p15575_i3949_i10179._0;
                      {
                        const rng3_i3951_i10181 = $p15575_i3949_i10179._1;
                        {
                          const $t15574_i3955_i10185 = (() => {
                            {
                              const $t15573_i3954_i10184 = (() => {
                                {
                                  const $t15571_i3952_i10182 = march_int_and(hi_i3947_i10177, 1048575);
                                  return ($t15571_i3952_i10182 * 4294967296);
                                }
                              })();
                              return ($t15573_i3954_i10184 + lo_i3950_i10180);
                            }
                          })();
                          return { _0: $t15574_i3955_i10185, _1: rng3_i3951_i10181 };
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })();
        {
          const s_i10187 = $p28957_i10186._0;
          return s_i10187;
        }
      }
    })();
    {
      const $t28974 = game.best;
      {
        const $t28975 = game.runs;
        {
          const $t28976 = game.view_w;
          {
            const $t28977 = game.view_h;
            return Perihelion$Core$fresh_run($t28973, $t28974, $t28975, $t28976, $t28977);
          }
        }
      }
    }
  }
}
const Perihelion$Core$reset$clo = { _0: ($_, game) => Perihelion$Core$reset(game) };

function Perihelion$Core$encode_run(r) {
  {
    const $t28984 = (() => {
      {
        const $t28983 = (() => {
          {
            const $t28980 = (() => {
              {
                const $t28979 = (() => {
                  {
                    const $t28978 = r.score;
                    return String($t28978);
                  }
                })();
                {
                  const $rc_833 = ($t28979 + ":");
                  return $rc_833;
                }
              }
            })();
            {
              const $t28982 = (() => {
                {
                  const $t28981 = r.stars;
                  return String($t28981);
                }
              })();
              {
                const $rc_832 = ($t28980 + $t28982);
                return $rc_832;
              }
            }
          }
        })();
        {
          const $rc_831 = ($t28983 + ":");
          return $rc_831;
        }
      }
    })();
    {
      const $t28986 = (() => {
        {
          const $t28985 = r.max_mult;
          return String($t28985);
        }
      })();
      {
        const $rc_830 = ($t28984 + $t28986);
        return $rc_830;
      }
    }
  }
}
const Perihelion$Core$encode_run$clo = { _0: ($_, r) => Perihelion$Core$encode_run(r) };

function Perihelion$Core$encode_save(best, runs) {
  {
    const $t28988 = (() => {
      {
        const $t28987 = String(best);
        {
          const $rc_835 = ($t28987 + "|");
          return $rc_835;
        }
      }
    })();
    {
      const $t28992 = (() => {
        {
          const $t28990 = { $: "$Clo_$lam28989$3763", _0: $lam28989$apply$3763 };
          {
            const $t28991 = (() => {
              {
                const f_i3960 = $t28990;
                {
                  const go_i3961 = { $: "$Clo_go$4814", _0: go$apply$4814, _1: f_i3960 };
                  {
                    const $t270_i3962 = { $: "Nil" };
                    return go$apply$4814(go_i3961, runs, $t270_i3962);
                  }
                }
              }
            })();
            return march_string_join($t28991, ";");
          }
        }
      })();
      {
        const $rc_834 = ($t28988 + $t28992);
        return $rc_834;
      }
    }
  }
}
const Perihelion$Core$encode_save$clo = { _0: ($_, best, runs) => Perihelion$Core$encode_save(best, runs) };

function Perihelion$Core$decode_run(s) {
  {
    const $t28993 = march_string_split(s, ":");
    switch ($t28993.$) {
      case "Cons": {
        const $f29001 = $t28993._0;
        const $f29002 = $t28993._1;
        {
          const $jp_clo29004 = { $: "$Clo_$jp29003$3764", _0: $jp29003$apply$3764 };
          {
            const $jp_clo29008 = { $: "$Clo_$jp29007$3765", _0: $jp29007$apply$3765$clo, _1: $jp_clo29004 };
            switch ($f29002.$) {
              case "Cons": {
                const $f29009 = $f29002._0;
                const $f29010 = $f29002._1;
                {
                  const $jp_clo29012 = { $: "$Clo_$jp29011$3767", _0: $jp29011$apply$3767, _1: $jp_clo29008 };
                  {
                    const $jp_clo29016 = { $: "$Clo_$jp29015$3768", _0: $jp29015$apply$3768, _1: $jp_clo29012 };
                    switch ($f29010.$) {
                      case "Cons": {
                        const $f29017 = $f29010._0;
                        const $f29018 = $f29010._1;
                        {
                          const $jp_clo29020 = { $: "$Clo_$jp29019$3770", _0: $jp29019$apply$3770, _1: $jp_clo29016 };
                          {
                            const $jp_clo29024 = { $: "$Clo_$jp29023$3771", _0: $jp29023$apply$3771, _1: $jp_clo29020 };
                            switch ($f29018.$) {
                              case "Nil": {
                                {
                                  const c = $f29017;
                                  {
                                    const b = $f29009;
                                    {
                                      const a = $f29001;
                                      {
                                        const $t28994 = (() => {
                                          {
                                            const $rc_838 = march_string_to_int(a);
                                            return $rc_838;
                                          }
                                        })();
                                        switch ($t28994.$) {
                                          case "None": {
                                            return { $: "None" };
                                            break;
                                          }
                                          case "Some": {
                                            const $f29000 = $t28994._0;
                                            {
                                              const score = $f29000;
                                              {
                                                const $t28995 = (() => {
                                                  {
                                                    const $rc_837 = march_string_to_int(b);
                                                    return $rc_837;
                                                  }
                                                })();
                                                switch ($t28995.$) {
                                                  case "None": {
                                                    return { $: "None" };
                                                    break;
                                                  }
                                                  case "Some": {
                                                    const $f28999 = $t28995._0;
                                                    {
                                                      const stars = $f28999;
                                                      {
                                                        const $t28996 = (() => {
                                                          {
                                                            const $rc_836 = march_string_to_int(c);
                                                            return $rc_836;
                                                          }
                                                        })();
                                                        switch ($t28996.$) {
                                                          case "None": {
                                                            return { $: "None" };
                                                            break;
                                                          }
                                                          case "Some": {
                                                            const $f28998 = $t28996._0;
                                                            {
                                                              const mm = $f28998;
                                                              {
                                                                const $t28997 = ({ score: score, stars: stars, max_mult: mm });
                                                                return { $: "Some", _0: $t28997 };
                                                              }
                                                            }
                                                            break;
                                                          }
                                                          default: {
                                                            return (() => { throw new Error("non-exhaustive pattern match"); })();
                                                          }
                                                        }
                                                      }
                                                    }
                                                    break;
                                                  }
                                                  default: {
                                                    return (() => { throw new Error("non-exhaustive pattern match"); })();
                                                  }
                                                }
                                              }
                                            }
                                            break;
                                          }
                                          default: {
                                            return (() => { throw new Error("non-exhaustive pattern match"); })();
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                break;
                              }
                              default: {
                                return $jp29023$apply$3771($jp_clo29024);
                              }
                            }
                          }
                        }
                        break;
                      }
                      default: {
                        return $jp29015$apply$3768($jp_clo29016);
                      }
                    }
                  }
                }
                break;
              }
              default: {
                return $jp29007$apply$3765($jp_clo29008);
              }
            }
          }
        }
        break;
      }
      default: {
        return { $: "None" };
      }
    }
  }
}
const Perihelion$Core$decode_run$clo = { _0: ($_, s) => Perihelion$Core$decode_run(s) };

function Perihelion$Core$decode_runs(parts, acc) {
  switch (parts.$) {
    case "Nil": {
      {
        const $t29027 = (() => {
          {
            const go_i3970 = { $: "$Clo_go$4816", _0: go$apply$4816 };
            {
              const $t253_i3971 = { $: "Nil" };
              return go$apply$4816(go_i3970, acc, $t253_i3971);
            }
          }
        })();
        return { $: "Some", _0: $t29027 };
      }
      break;
    }
    case "Cons": {
      const $f29031 = parts._0;
      const $f29032 = parts._1;
      {
        const rest = $f29032;
        {
          const p = $f29031;
          {
            const $t29028 = (() => {
              {
                const $rc_839 = Perihelion$Core$decode_run(p);
                return $rc_839;
              }
            })();
            switch ($t29028.$) {
              case "None": {
                return { $: "None" };
                break;
              }
              case "Some": {
                const $f29030 = $t29028._0;
                {
                  const r = $f29030;
                  {
                    const $t29029 = { $: "Cons", _0: r, _1: acc };
                    return Perihelion$Core$decode_runs(rest, $t29029);
                  }
                }
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Core$decode_runs$clo = { _0: ($_, parts, acc) => Perihelion$Core$decode_runs(parts, acc) };

function Perihelion$Core$decode_save(s) {
  {
    const zero = (() => {
      {
        const $t29037 = { $: "Nil" };
        return { _0: 0, _1: $t29037 };
      }
    })();
    {
      const $t29038 = march_string_split(s, "|");
      switch ($t29038.$) {
        case "Cons": {
          const $f29048 = $t29038._0;
          const $f29049 = $t29038._1;
          switch ($f29049.$) {
            case "Cons": {
              const $f29050 = $f29049._0;
              const $f29051 = $f29049._1;
              switch ($f29051.$) {
                case "Nil": {
                  {
                    const runs_s = $f29050;
                    {
                      const best_s = $f29048;
                      {
                        const $t29039 = (() => {
                          {
                            const $rc_841 = march_string_to_int(best_s);
                            return $rc_841;
                          }
                        })();
                        switch ($t29039.$) {
                          case "None": {
                            return zero;
                            break;
                          }
                          case "Some": {
                            const $f29047 = $t29039._0;
                            {
                              const best = $f29047;
                              if (runs_s === "") {
                                return (() => {
                                  {
                                    const $t29040 = { $: "Nil" };
                                    return { _0: best, _1: $t29040 };
                                  }
                                })();
                              } else {
                                return (() => {
                                  {
                                    const $t29043 = (() => {
                                      {
                                        const $t29041 = (() => {
                                          {
                                            const $rc_840 = march_string_split(runs_s, ";");
                                            return $rc_840;
                                          }
                                        })();
                                        {
                                          const $t29042 = { $: "Nil" };
                                          return Perihelion$Core$decode_runs($t29041, $t29042);
                                        }
                                      }
                                    })();
                                    switch ($t29043.$) {
                                      case "None": {
                                        return zero;
                                        break;
                                      }
                                      case "Some": {
                                        const $f29044 = $t29043._0;
                                        {
                                          const rs = $f29044;
                                          return { _0: best, _1: rs };
                                        }
                                        break;
                                      }
                                      default: {
                                        return (() => { throw new Error("non-exhaustive pattern match"); })();
                                      }
                                    }
                                  }
                                })();
                              }
                            }
                            break;
                          }
                          default: {
                            return (() => { throw new Error("non-exhaustive pattern match"); })();
                          }
                        }
                      }
                    }
                  }
                  break;
                }
                default: {
                  return zero;
                }
              }
              break;
            }
            default: {
              return zero;
            }
          }
          break;
        }
        default: {
          return zero;
        }
      }
    }
  }
}
const Perihelion$Core$decode_save$clo = { _0: ($_, s) => Perihelion$Core$decode_save(s) };

function Perihelion$Level$make_orbits(outer_r, outer_sp, n) {
  if (n === 1) {
    return (() => {
      {
        const $t29057 = ({ radius: outer_r, speed_mult: outer_sp });
        {
          const $t29058 = { $: "Nil" };
          return { $: "Cons", _0: $t29057, _1: $t29058 };
        }
      }
    })();
  } else if (n === 2) {
    return (() => {
      {
        const $t29061 = (() => {
          {
            const $t29059 = (outer_r * 0.6);
            {
              const $t29060 = (outer_sp * 1.5);
              return ({ radius: $t29059, speed_mult: $t29060 });
            }
          }
        })();
        {
          const $t29062 = ({ radius: outer_r, speed_mult: outer_sp });
          {
            const $t29063 = { $: "Nil" };
            {
              const $t29064 = { $: "Cons", _0: $t29062, _1: $t29063 };
              return { $: "Cons", _0: $t29061, _1: $t29064 };
            }
          }
        }
      }
    })();
  } else {
    return (() => {
      {
        const $t29067 = (() => {
          {
            const $t29065 = (outer_r * 0.5);
            {
              const $t29066 = (outer_sp * 1.8);
              return ({ radius: $t29065, speed_mult: $t29066 });
            }
          }
        })();
        {
          const $t29070 = (() => {
            {
              const $t29068 = (outer_r * 0.75);
              {
                const $t29069 = (outer_sp * 1.35);
                return ({ radius: $t29068, speed_mult: $t29069 });
              }
            }
          })();
          {
            const $t29071 = ({ radius: outer_r, speed_mult: outer_sp });
            {
              const $t29072 = { $: "Nil" };
              {
                const $t29073 = { $: "Cons", _0: $t29071, _1: $t29072 };
                {
                  const $t29074 = { $: "Cons", _0: $t29070, _1: $t29073 };
                  return { $: "Cons", _0: $t29067, _1: $t29074 };
                }
              }
            }
          }
        }
      }
    })();
  }
}
const Perihelion$Level$make_orbits$clo = { _0: ($_, outer_r, outer_sp, n) => Perihelion$Level$make_orbits(outer_r, outer_sp, n) };

function Perihelion$Level$next_star(rng, prev, view_w) {
  {
    const $p29104 = (() => {
      {
        const $p29052_i10634 = (() => {
          {
            const $p15579_i10199_i10629 = (() => {
              {
                const $p15576_i1532_i10189_i10620 = Random$next_raw(rng);
                {
                  const hi_i1533_i10190_i10621 = $p15576_i1532_i10189_i10620._0;
                  {
                    const rng2_i1534_i10191_i10622 = $p15576_i1532_i10189_i10620._1;
                    {
                      const $p15575_i1535_i10192_i10623 = Random$next_raw(rng2_i1534_i10191_i10622);
                      {
                        const lo_i1536_i10193_i10624 = $p15575_i1535_i10192_i10623._0;
                        {
                          const rng3_i1537_i10194_i10625 = $p15575_i1535_i10192_i10623._1;
                          {
                            const $t15574_i1541_i10198_i10628 = (() => {
                              {
                                const $t15573_i1540_i10197_i10627 = (() => {
                                  {
                                    const $t15571_i1538_i10195_i10626 = march_int_and(hi_i1533_i10190_i10621, 1048575);
                                    return ($t15571_i1538_i10195_i10626 * 4294967296);
                                  }
                                })();
                                return ($t15573_i1540_i10197_i10627 + lo_i1536_i10193_i10624);
                              }
                            })();
                            return { _0: $t15574_i1541_i10198_i10628, _1: rng3_i1537_i10194_i10625 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const bits_i10200_i10630 = $p15579_i10199_i10629._0;
              {
                const rng2_i10201_i10631 = $p15579_i10199_i10629._1;
                {
                  const $t15578_i10203_i10633 = (() => {
                    {
                      const $t15577_i10202_i10632 = bits_i10200_i10630;
                      return ($t15577_i10202_i10632 / 4.50359962737e+15);
                    }
                  })();
                  return { _0: $t15578_i10203_i10633, _1: rng2_i10201_i10631 };
                }
              }
            }
          }
        })();
        {
          const t_i10635 = $p29052_i10634._0;
          {
            const rng2_i10636 = $p29052_i10634._1;
            {
              const out_i10637 = { _0: rng2_i10636, _1: t_i10635 };
              return out_i10637;
            }
          }
        }
      }
    })();
    {
      const r1 = $p29104._0;
      {
        const ty = $p29104._1;
        {
          const $p29103 = (() => {
            {
              const $p29052_i10615 = (() => {
                {
                  const $p15579_i10199_i10610 = (() => {
                    {
                      const $p15576_i1532_i10189_i10601 = Random$next_raw(r1);
                      {
                        const hi_i1533_i10190_i10602 = $p15576_i1532_i10189_i10601._0;
                        {
                          const rng2_i1534_i10191_i10603 = $p15576_i1532_i10189_i10601._1;
                          {
                            const $p15575_i1535_i10192_i10604 = Random$next_raw(rng2_i1534_i10191_i10603);
                            {
                              const lo_i1536_i10193_i10605 = $p15575_i1535_i10192_i10604._0;
                              {
                                const rng3_i1537_i10194_i10606 = $p15575_i1535_i10192_i10604._1;
                                {
                                  const $t15574_i1541_i10198_i10609 = (() => {
                                    {
                                      const $t15573_i1540_i10197_i10608 = (() => {
                                        {
                                          const $t15571_i1538_i10195_i10607 = march_int_and(hi_i1533_i10190_i10602, 1048575);
                                          return ($t15571_i1538_i10195_i10607 * 4294967296);
                                        }
                                      })();
                                      return ($t15573_i1540_i10197_i10608 + lo_i1536_i10193_i10605);
                                    }
                                  })();
                                  return { _0: $t15574_i1541_i10198_i10609, _1: rng3_i1537_i10194_i10606 };
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  })();
                  {
                    const bits_i10200_i10611 = $p15579_i10199_i10610._0;
                    {
                      const rng2_i10201_i10612 = $p15579_i10199_i10610._1;
                      {
                        const $t15578_i10203_i10614 = (() => {
                          {
                            const $t15577_i10202_i10613 = bits_i10200_i10611;
                            return ($t15577_i10202_i10613 / 4.50359962737e+15);
                          }
                        })();
                        return { _0: $t15578_i10203_i10614, _1: rng2_i10201_i10612 };
                      }
                    }
                  }
                }
              })();
              {
                const t_i10616 = $p29052_i10615._0;
                {
                  const rng2_i10617 = $p29052_i10615._1;
                  {
                    const out_i10618 = { _0: rng2_i10617, _1: t_i10616 };
                    return out_i10618;
                  }
                }
              }
            }
          })();
          {
            const r2 = $p29103._0;
            {
              const tx = $p29103._1;
              {
                const $p29102 = (() => {
                  {
                    const $p29052_i10596 = (() => {
                      {
                        const $p15579_i10199_i10591 = (() => {
                          {
                            const $p15576_i1532_i10189_i10582 = Random$next_raw(r2);
                            {
                              const hi_i1533_i10190_i10583 = $p15576_i1532_i10189_i10582._0;
                              {
                                const rng2_i1534_i10191_i10584 = $p15576_i1532_i10189_i10582._1;
                                {
                                  const $p15575_i1535_i10192_i10585 = Random$next_raw(rng2_i1534_i10191_i10584);
                                  {
                                    const lo_i1536_i10193_i10586 = $p15575_i1535_i10192_i10585._0;
                                    {
                                      const rng3_i1537_i10194_i10587 = $p15575_i1535_i10192_i10585._1;
                                      {
                                        const $t15574_i1541_i10198_i10590 = (() => {
                                          {
                                            const $t15573_i1540_i10197_i10589 = (() => {
                                              {
                                                const $t15571_i1538_i10195_i10588 = march_int_and(hi_i1533_i10190_i10583, 1048575);
                                                return ($t15571_i1538_i10195_i10588 * 4294967296);
                                              }
                                            })();
                                            return ($t15573_i1540_i10197_i10589 + lo_i1536_i10193_i10586);
                                          }
                                        })();
                                        return { _0: $t15574_i1541_i10198_i10590, _1: rng3_i1537_i10194_i10587 };
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        })();
                        {
                          const bits_i10200_i10592 = $p15579_i10199_i10591._0;
                          {
                            const rng2_i10201_i10593 = $p15579_i10199_i10591._1;
                            {
                              const $t15578_i10203_i10595 = (() => {
                                {
                                  const $t15577_i10202_i10594 = bits_i10200_i10592;
                                  return ($t15577_i10202_i10594 / 4.50359962737e+15);
                                }
                              })();
                              return { _0: $t15578_i10203_i10595, _1: rng2_i10201_i10593 };
                            }
                          }
                        }
                      }
                    })();
                    {
                      const t_i10597 = $p29052_i10596._0;
                      {
                        const rng2_i10598 = $p29052_i10596._1;
                        {
                          const out_i10599 = { _0: rng2_i10598, _1: t_i10597 };
                          return out_i10599;
                        }
                      }
                    }
                  }
                })();
                {
                  const r3 = $p29102._0;
                  {
                    const tr = $p29102._1;
                    {
                      const $p29101 = (() => {
                        {
                          const $p29052_i10577 = (() => {
                            {
                              const $p15579_i10199_i10572 = (() => {
                                {
                                  const $p15576_i1532_i10189_i10563 = Random$next_raw(r3);
                                  {
                                    const hi_i1533_i10190_i10564 = $p15576_i1532_i10189_i10563._0;
                                    {
                                      const rng2_i1534_i10191_i10565 = $p15576_i1532_i10189_i10563._1;
                                      {
                                        const $p15575_i1535_i10192_i10566 = Random$next_raw(rng2_i1534_i10191_i10565);
                                        {
                                          const lo_i1536_i10193_i10567 = $p15575_i1535_i10192_i10566._0;
                                          {
                                            const rng3_i1537_i10194_i10568 = $p15575_i1535_i10192_i10566._1;
                                            {
                                              const $t15574_i1541_i10198_i10571 = (() => {
                                                {
                                                  const $t15573_i1540_i10197_i10570 = (() => {
                                                    {
                                                      const $t15571_i1538_i10195_i10569 = march_int_and(hi_i1533_i10190_i10564, 1048575);
                                                      return ($t15571_i1538_i10195_i10569 * 4294967296);
                                                    }
                                                  })();
                                                  return ($t15573_i1540_i10197_i10570 + lo_i1536_i10193_i10567);
                                                }
                                              })();
                                              return { _0: $t15574_i1541_i10198_i10571, _1: rng3_i1537_i10194_i10568 };
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              })();
                              {
                                const bits_i10200_i10573 = $p15579_i10199_i10572._0;
                                {
                                  const rng2_i10201_i10574 = $p15579_i10199_i10572._1;
                                  {
                                    const $t15578_i10203_i10576 = (() => {
                                      {
                                        const $t15577_i10202_i10575 = bits_i10200_i10573;
                                        return ($t15577_i10202_i10575 / 4.50359962737e+15);
                                      }
                                    })();
                                    return { _0: $t15578_i10203_i10576, _1: rng2_i10201_i10574 };
                                  }
                                }
                              }
                            }
                          })();
                          {
                            const t_i10578 = $p29052_i10577._0;
                            {
                              const rng2_i10579 = $p29052_i10577._1;
                              {
                                const out_i10580 = { _0: rng2_i10579, _1: t_i10578 };
                                return out_i10580;
                              }
                            }
                          }
                        }
                      })();
                      {
                        const r4 = $p29101._0;
                        {
                          const tcm = $p29101._1;
                          {
                            const $p29100 = (() => {
                              {
                                const $p29052_i10558 = (() => {
                                  {
                                    const $p15579_i10199_i10553 = (() => {
                                      {
                                        const $p15576_i1532_i10189_i10544 = Random$next_raw(r4);
                                        {
                                          const hi_i1533_i10190_i10545 = $p15576_i1532_i10189_i10544._0;
                                          {
                                            const rng2_i1534_i10191_i10546 = $p15576_i1532_i10189_i10544._1;
                                            {
                                              const $p15575_i1535_i10192_i10547 = Random$next_raw(rng2_i1534_i10191_i10546);
                                              {
                                                const lo_i1536_i10193_i10548 = $p15575_i1535_i10192_i10547._0;
                                                {
                                                  const rng3_i1537_i10194_i10549 = $p15575_i1535_i10192_i10547._1;
                                                  {
                                                    const $t15574_i1541_i10198_i10552 = (() => {
                                                      {
                                                        const $t15573_i1540_i10197_i10551 = (() => {
                                                          {
                                                            const $t15571_i1538_i10195_i10550 = march_int_and(hi_i1533_i10190_i10545, 1048575);
                                                            return ($t15571_i1538_i10195_i10550 * 4294967296);
                                                          }
                                                        })();
                                                        return ($t15573_i1540_i10197_i10551 + lo_i1536_i10193_i10548);
                                                      }
                                                    })();
                                                    return { _0: $t15574_i1541_i10198_i10552, _1: rng3_i1537_i10194_i10549 };
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    })();
                                    {
                                      const bits_i10200_i10554 = $p15579_i10199_i10553._0;
                                      {
                                        const rng2_i10201_i10555 = $p15579_i10199_i10553._1;
                                        {
                                          const $t15578_i10203_i10557 = (() => {
                                            {
                                              const $t15577_i10202_i10556 = bits_i10200_i10554;
                                              return ($t15577_i10202_i10556 / 4.50359962737e+15);
                                            }
                                          })();
                                          return { _0: $t15578_i10203_i10557, _1: rng2_i10201_i10555 };
                                        }
                                      }
                                    }
                                  }
                                })();
                                {
                                  const t_i10559 = $p29052_i10558._0;
                                  {
                                    const rng2_i10560 = $p29052_i10558._1;
                                    {
                                      const out_i10561 = { _0: rng2_i10560, _1: t_i10559 };
                                      return out_i10561;
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const r5 = $p29100._0;
                              {
                                const tsm = $p29100._1;
                                {
                                  const $p29099 = (() => {
                                    {
                                      const $p29052_i10539 = (() => {
                                        {
                                          const $p15579_i10199_i10534 = (() => {
                                            {
                                              const $p15576_i1532_i10189_i10525 = Random$next_raw(r5);
                                              {
                                                const hi_i1533_i10190_i10526 = $p15576_i1532_i10189_i10525._0;
                                                {
                                                  const rng2_i1534_i10191_i10527 = $p15576_i1532_i10189_i10525._1;
                                                  {
                                                    const $p15575_i1535_i10192_i10528 = Random$next_raw(rng2_i1534_i10191_i10527);
                                                    {
                                                      const lo_i1536_i10193_i10529 = $p15575_i1535_i10192_i10528._0;
                                                      {
                                                        const rng3_i1537_i10194_i10530 = $p15575_i1535_i10192_i10528._1;
                                                        {
                                                          const $t15574_i1541_i10198_i10533 = (() => {
                                                            {
                                                              const $t15573_i1540_i10197_i10532 = (() => {
                                                                {
                                                                  const $t15571_i1538_i10195_i10531 = march_int_and(hi_i1533_i10190_i10526, 1048575);
                                                                  return ($t15571_i1538_i10195_i10531 * 4294967296);
                                                                }
                                                              })();
                                                              return ($t15573_i1540_i10197_i10532 + lo_i1536_i10193_i10529);
                                                            }
                                                          })();
                                                          return { _0: $t15574_i1541_i10198_i10533, _1: rng3_i1537_i10194_i10530 };
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          })();
                                          {
                                            const bits_i10200_i10535 = $p15579_i10199_i10534._0;
                                            {
                                              const rng2_i10201_i10536 = $p15579_i10199_i10534._1;
                                              {
                                                const $t15578_i10203_i10538 = (() => {
                                                  {
                                                    const $t15577_i10202_i10537 = bits_i10200_i10535;
                                                    return ($t15577_i10202_i10537 / 4.50359962737e+15);
                                                  }
                                                })();
                                                return { _0: $t15578_i10203_i10538, _1: rng2_i10201_i10536 };
                                              }
                                            }
                                          }
                                        }
                                      })();
                                      {
                                        const t_i10540 = $p29052_i10539._0;
                                        {
                                          const rng2_i10541 = $p29052_i10539._1;
                                          {
                                            const out_i10542 = { _0: rng2_i10541, _1: t_i10540 };
                                            return out_i10542;
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const r6 = $p29099._0;
                                    {
                                      const trings = $p29099._1;
                                      {
                                        const gap = (() => {
                                          {
                                            const $t29054_i4011 = (() => {
                                              {
                                                const $t29053_i4010 = (260. - 160.);
                                                return (ty * $t29053_i4010);
                                              }
                                            })();
                                            return (160. + $t29054_i4011);
                                          }
                                        })();
                                        {
                                          const dx = (() => {
                                            {
                                              const $t29082 = (0. - 220.);
                                              {
                                                const $t29054_i4006 = (() => {
                                                  {
                                                    const $t29053_i4005 = (220. - $t29082);
                                                    return (tx * $t29053_i4005);
                                                  }
                                                })();
                                                return ($t29082 + $t29054_i4006);
                                              }
                                            }
                                          })();
                                          {
                                            const x = (() => {
                                              {
                                                const $t29085 = (() => {
                                                  {
                                                    const $t29084 = prev.x;
                                                    return ($t29084 + dx);
                                                  }
                                                })();
                                                {
                                                  const $t29088 = (view_w - 60.);
                                                  {
                                                    const $t1580_i4000 = ($t29085 < 60.);
                                                    if ($t1580_i4000 === true) {
                                                      return 60.;
                                                    } else {
                                                      return (() => {
                                                        {
                                                          const $t1581_i4001 = ($t29085 > $t29088);
                                                          if ($t1581_i4001 === true) {
                                                            return $t29088;
                                                          } else {
                                                            return $t29085;
                                                          }
                                                        }
                                                      })();
                                                    }
                                                  }
                                                }
                                              }
                                            })();
                                            {
                                              const r = (() => {
                                                {
                                                  const $t29091 = (tr * tr);
                                                  {
                                                    const $t29054_i3996 = (() => {
                                                      {
                                                        const $t29053_i3995 = (20. - 8.);
                                                        return ($t29091 * $t29053_i3995);
                                                      }
                                                    })();
                                                    return (8. + $t29054_i3996);
                                                  }
                                                }
                                              })();
                                              {
                                                const cm = (() => {
                                                  {
                                                    const $t29054_i3991 = (() => {
                                                      {
                                                        const $t29053_i3990 = (5.2 - 2.8);
                                                        return (tcm * $t29053_i3990);
                                                      }
                                                    })();
                                                    return (2.8 + $t29054_i3991);
                                                  }
                                                })();
                                                {
                                                  const sm = (() => {
                                                    {
                                                      const $t29054_i3986 = (() => {
                                                        {
                                                          const $t29053_i3985 = (1.6 - 0.7);
                                                          return (tsm * $t29053_i3985);
                                                        }
                                                      })();
                                                      return (0.7 + $t29054_i3986);
                                                    }
                                                  })();
                                                  {
                                                    const cap = (r * cm);
                                                    {
                                                      const $t29096 = (() => {
                                                        {
                                                          const $t29055_i3980 = (trings < 0.55);
                                                          if ($t29055_i3980 === true) {
                                                            return 1;
                                                          } else {
                                                            return (() => {
                                                              {
                                                                const $t29056_i3981 = (trings < 0.85);
                                                                if ($t29056_i3981 === true) {
                                                                  return 2;
                                                                } else {
                                                                  return 3;
                                                                }
                                                              }
                                                            })();
                                                          }
                                                        }
                                                      })();
                                                      {
                                                        const orbits = Perihelion$Level$make_orbits(cap, sm, $t29096);
                                                        {
                                                          const s = (() => {
                                                            {
                                                              const $t29098 = (() => {
                                                                {
                                                                  const $t29097 = prev.y;
                                                                  return ($t29097 - gap);
                                                                }
                                                              })();
                                                              return ({ x: x, y: $t29098, radius: r, capture_radius: cap, speed_mult: sm, orbits: orbits });
                                                            }
                                                          })();
                                                          {
                                                            const result = { _0: s, _1: r6 };
                                                            return result;
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Level$next_star$clo = { _0: ($_, rng, prev, view_w) => Perihelion$Level$next_star(rng, prev, view_w) };

function Perihelion$Level$initial_stars(rng, view_w) {
  {
    const first = (() => {
      {
        const $t29105 = (view_w / 2.);
        {
          const $t29106 = ({ radius: 54., speed_mult: 1. });
          {
            const $t29107 = { $: "Nil" };
            {
              const $t29108 = { $: "Cons", _0: $t29106, _1: $t29107 };
              return ({ x: $t29105, y: 520., radius: 18., capture_radius: 54., speed_mult: 1., orbits: $t29108 });
            }
          }
        }
      }
    })();
    {
      const $p29113 = Perihelion$Level$next_star(rng, first, view_w);
      {
        const s2 = $p29113._0;
        {
          const rng2 = $p29113._1;
          {
            const $p29112 = Perihelion$Level$next_star(rng2, s2, view_w);
            {
              const s3 = $p29112._0;
              {
                const rng3 = $p29112._1;
                {
                  const $t29109 = { $: "Nil" };
                  {
                    const $t29110 = { $: "Cons", _0: s3, _1: $t29109 };
                    {
                      const $t29111 = { $: "Cons", _0: s2, _1: $t29110 };
                      {
                        const stars = { $: "Cons", _0: first, _1: $t29111 };
                        {
                          const result = { _0: stars, _1: rng3 };
                          return result;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Level$initial_stars$clo = { _0: ($_, rng, view_w) => Perihelion$Level$initial_stars(rng, view_w) };

function Perihelion$Nebula$star_cloud(sx, sy, seed) {
  {
    const $t29125 = (() => {
      {
        const $t29123 = (() => {
          {
            const x_i10261 = (() => {
              {
                const $t29119_i10260 = (() => {
                  {
                    const $t29118_i10259 = (() => {
                      {
                        const $t29116_i10257 = (() => {
                          {
                            const $t29114_i10255 = (sx * 12.9898);
                            {
                              const $t29115_i10256 = (sy * 78.233);
                              return ($t29114_i10255 + $t29115_i10256);
                            }
                          }
                        })();
                        {
                          const $t29117_i10258 = (seed * 37.719);
                          return ($t29116_i10257 + $t29117_i10258);
                        }
                      }
                    })();
                    return Math.sin($t29118_i10259);
                  }
                })();
                return ($t29119_i10260 * 43758.5453);
              }
            })();
            {
              const $t29120_i10263 = (() => {
                {
                  const $t1582_i4013_i10262 = Math.floor(x_i10261);
                  return $t1582_i4013_i10262;
                }
              })();
              return (x_i10261 - $t29120_i10263);
            }
          }
        })();
        return ($t29123 > 0.55);
      }
    })();
    if ($t29125 === true) {
      return { $: "None" };
    } else {
      return (() => {
        {
          const jx = (() => {
            {
              const $t29129 = (() => {
                {
                  const $t29128 = (() => {
                    {
                      const $t29127 = (() => {
                        {
                          const $t29126 = (sx + 1.);
                          {
                            const x_i10249 = (() => {
                              {
                                const $t29119_i10248 = (() => {
                                  {
                                    const $t29118_i10247 = (() => {
                                      {
                                        const $t29116_i10245 = (() => {
                                          {
                                            const $t29114_i10243 = ($t29126 * 12.9898);
                                            {
                                              const $t29115_i10244 = (sy * 78.233);
                                              return ($t29114_i10243 + $t29115_i10244);
                                            }
                                          }
                                        })();
                                        {
                                          const $t29117_i10246 = (seed * 37.719);
                                          return ($t29116_i10245 + $t29117_i10246);
                                        }
                                      }
                                    })();
                                    return Math.sin($t29118_i10247);
                                  }
                                })();
                                return ($t29119_i10248 * 43758.5453);
                              }
                            })();
                            {
                              const $t29120_i10251 = (() => {
                                {
                                  const $t1582_i4013_i10250 = Math.floor(x_i10249);
                                  return $t1582_i4013_i10250;
                                }
                              })();
                              return (x_i10249 - $t29120_i10251);
                            }
                          }
                        }
                      })();
                      return ($t29127 - 0.5);
                    }
                  })();
                  return ($t29128 * 2.);
                }
              })();
              return ($t29129 * 90.);
            }
          })();
          {
            const jy = (() => {
              {
                const $t29134 = (() => {
                  {
                    const $t29133 = (() => {
                      {
                        const $t29132 = (() => {
                          {
                            const $t29131 = (sy + 1.);
                            {
                              const x_i10237 = (() => {
                                {
                                  const $t29119_i10236 = (() => {
                                    {
                                      const $t29118_i10235 = (() => {
                                        {
                                          const $t29116_i10233 = (() => {
                                            {
                                              const $t29114_i10231 = (sx * 12.9898);
                                              {
                                                const $t29115_i10232 = ($t29131 * 78.233);
                                                return ($t29114_i10231 + $t29115_i10232);
                                              }
                                            }
                                          })();
                                          {
                                            const $t29117_i10234 = (seed * 37.719);
                                            return ($t29116_i10233 + $t29117_i10234);
                                          }
                                        }
                                      })();
                                      return Math.sin($t29118_i10235);
                                    }
                                  })();
                                  return ($t29119_i10236 * 43758.5453);
                                }
                              })();
                              {
                                const $t29120_i10239 = (() => {
                                  {
                                    const $t1582_i4013_i10238 = Math.floor(x_i10237);
                                    return $t1582_i4013_i10238;
                                  }
                                })();
                                return (x_i10237 - $t29120_i10239);
                              }
                            }
                          }
                        })();
                        return ($t29132 - 0.5);
                      }
                    })();
                    return ($t29133 * 2.);
                  }
                })();
                return ($t29134 * 90.);
              }
            })();
            {
              const rt = (() => {
                {
                  const $t29136 = (sx + 2.);
                  {
                    const x_i10225 = (() => {
                      {
                        const $t29119_i10224 = (() => {
                          {
                            const $t29118_i10223 = (() => {
                              {
                                const $t29116_i10221 = (() => {
                                  {
                                    const $t29114_i10219 = ($t29136 * 12.9898);
                                    {
                                      const $t29115_i10220 = (sy * 78.233);
                                      return ($t29114_i10219 + $t29115_i10220);
                                    }
                                  }
                                })();
                                {
                                  const $t29117_i10222 = (seed * 37.719);
                                  return ($t29116_i10221 + $t29117_i10222);
                                }
                              }
                            })();
                            return Math.sin($t29118_i10223);
                          }
                        })();
                        return ($t29119_i10224 * 43758.5453);
                      }
                    })();
                    {
                      const $t29120_i10227 = (() => {
                        {
                          const $t1582_i4013_i10226 = Math.floor(x_i10225);
                          return $t1582_i4013_i10226;
                        }
                      })();
                      return (x_i10225 - $t29120_i10227);
                    }
                  }
                }
              })();
              {
                const r = (() => {
                  {
                    const $t29139 = (rt * rt);
                    {
                      const $t29122_i4019 = (() => {
                        {
                          const $t29121_i4018 = (700. - 240.);
                          return ($t29139 * $t29121_i4018);
                        }
                      })();
                      return (240. + $t29122_i4019);
                    }
                  }
                })();
                {
                  const strength = (() => {
                    {
                      const $t29142 = (() => {
                        {
                          const $t29141 = (() => {
                            {
                              const $t29140 = (sy + 2.);
                              {
                                const x_i10213 = (() => {
                                  {
                                    const $t29119_i10212 = (() => {
                                      {
                                        const $t29118_i10211 = (() => {
                                          {
                                            const $t29116_i10209 = (() => {
                                              {
                                                const $t29114_i10207 = (sx * 12.9898);
                                                {
                                                  const $t29115_i10208 = ($t29140 * 78.233);
                                                  return ($t29114_i10207 + $t29115_i10208);
                                                }
                                              }
                                            })();
                                            {
                                              const $t29117_i10210 = (seed * 37.719);
                                              return ($t29116_i10209 + $t29117_i10210);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29118_i10211);
                                      }
                                    })();
                                    return ($t29119_i10212 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29120_i10215 = (() => {
                                    {
                                      const $t1582_i4013_i10214 = Math.floor(x_i10213);
                                      return $t1582_i4013_i10214;
                                    }
                                  })();
                                  return (x_i10213 - $t29120_i10215);
                                }
                              }
                            }
                          })();
                          return (0.65 * $t29141);
                        }
                      })();
                      return (0.35 + $t29142);
                    }
                  })();
                  {
                    const $t29145 = (() => {
                      {
                        const $t29143 = (sx + jx);
                        {
                          const $t29144 = (sy + jy);
                          return ({ x: $t29143, y: $t29144, radius: r, strength: strength });
                        }
                      }
                    })();
                    return { $: "Some", _0: $t29145 };
                  }
                }
              }
            }
          }
        }
      })();
    }
  }
}
const Perihelion$Nebula$star_cloud$clo = { _0: ($_, sx, sy, seed) => Perihelion$Nebula$star_cloud(sx, sy, seed) };

function Perihelion$Nebula$collect_star_clouds(stars, seed, acc) {
  switch (stars.$) {
    case "Nil": {
      return acc;
      break;
    }
    case "Cons": {
      const $f29178 = stars._0;
      const $f29179 = stars._1;
      {
        const rest = $f29179;
        {
          const s = $f29178;
          {
            const $t29176 = (() => {
              {
                const $t29174 = s.x;
                {
                  const $t29175 = s.y;
                  return Perihelion$Nebula$star_cloud($t29174, $t29175, seed);
                }
              }
            })();
            {
              let acc2;
              switch ($t29176.$) {
                case "None": {
                  acc2 = acc;
                  break;
                }
                case "Some": {
                  const $f29177 = $t29176._0;
                  acc2 = (() => {
                    {
                      const c = $f29177;
                      return { $: "Cons", _0: c, _1: acc };
                    }
                  })();
                  break;
                }
                default: {
                  acc2 = (() => {
                    return (() => { throw new Error("non-exhaustive pattern match"); })();
                  })();
                  break;
                }
              }
              return Perihelion$Nebula$collect_star_clouds(rest, seed, acc2);
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Nebula$collect_star_clouds$clo = { _0: ($_, stars, seed, acc) => Perihelion$Nebula$collect_star_clouds(stars, seed, acc) };

function Perihelion$Nebula$filter_visible(stars, cam_y, view_h, margin, acc) {
  switch (stars.$) {
    case "Nil": {
      return acc;
      break;
    }
    case "Cons": {
      const $f29192 = stars._0;
      const $f29193 = stars._1;
      {
        const rest = $f29193;
        {
          const s = $f29192;
          {
            const $t29191 = (() => {
              {
                const $t29186_i4038 = (() => {
                  {
                    const $t29184_i4036 = s.y;
                    {
                      const $t29185_i4037 = (cam_y - margin);
                      return ($t29184_i4036 >= $t29185_i4037);
                    }
                  }
                })();
                {
                  const $t29190_i4042 = (() => {
                    {
                      const $t29187_i4039 = s.y;
                      {
                        const $t29189_i4041 = (() => {
                          {
                            const $t29188_i4040 = (cam_y + view_h);
                            return ($t29188_i4040 + margin);
                          }
                        })();
                        return ($t29187_i4039 <= $t29189_i4041);
                      }
                    }
                  })();
                  return ($t29186_i4038 && $t29190_i4042);
                }
              }
            })();
            {
              let acc2;
              if ($t29191 === true) {
                acc2 = { $: "Cons", _0: s, _1: acc };
              } else {
                acc2 = acc;
              }
              return Perihelion$Nebula$filter_visible(rest, cam_y, view_h, margin, acc2);
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Nebula$filter_visible$clo = { _0: ($_, stars, cam_y, view_h, margin, acc) => Perihelion$Nebula$filter_visible(stars, cam_y, view_h, margin, acc) };

function Perihelion$Upgrades$is_milestone(stars_chained) {
  {
    const $t29203 = (stars_chained > 0);
    {
      const $t29206 = (() => {
        {
          const $t29205 = march_int_mod(stars_chained, 10);
          return ($t29205 === 0);
        }
      })();
      return ($t29203 && $t29206);
    }
  }
}
const Perihelion$Upgrades$is_milestone$clo = { _0: ($_, stars_chained) => Perihelion$Upgrades$is_milestone(stars_chained) };

function Perihelion$Upgrades$milestone_check(rng, stars_chained) {
  {
    const $t29208 = (stars_chained === 5);
    if ($t29208 === true) {
      return (() => {
        {
          const $p29211 = (() => {
            {
              const $p29052_i10520_i10857 = (() => {
                {
                  const $p15579_i10199_i10515_i10852 = (() => {
                    {
                      const $p15576_i1532_i10189_i10506_i10843 = Random$next_raw(rng);
                      {
                        const hi_i1533_i10190_i10507_i10844 = $p15576_i1532_i10189_i10506_i10843._0;
                        {
                          const rng2_i1534_i10191_i10508_i10845 = $p15576_i1532_i10189_i10506_i10843._1;
                          {
                            const $p15575_i1535_i10192_i10509_i10846 = Random$next_raw(rng2_i1534_i10191_i10508_i10845);
                            {
                              const lo_i1536_i10193_i10510_i10847 = $p15575_i1535_i10192_i10509_i10846._0;
                              {
                                const rng3_i1537_i10194_i10511_i10848 = $p15575_i1535_i10192_i10509_i10846._1;
                                {
                                  const $t15574_i1541_i10198_i10514_i10851 = (() => {
                                    {
                                      const $t15573_i1540_i10197_i10513_i10850 = (() => {
                                        {
                                          const $t15571_i1538_i10195_i10512_i10849 = march_int_and(hi_i1533_i10190_i10507_i10844, 1048575);
                                          return ($t15571_i1538_i10195_i10512_i10849 * 4294967296);
                                        }
                                      })();
                                      return ($t15573_i1540_i10197_i10513_i10850 + lo_i1536_i10193_i10510_i10847);
                                    }
                                  })();
                                  return { _0: $t15574_i1541_i10198_i10514_i10851, _1: rng3_i1537_i10194_i10511_i10848 };
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  })();
                  {
                    const bits_i10200_i10516_i10853 = $p15579_i10199_i10515_i10852._0;
                    {
                      const rng2_i10201_i10517_i10854 = $p15579_i10199_i10515_i10852._1;
                      {
                        const $t15578_i10203_i10519_i10856 = (() => {
                          {
                            const $t15577_i10202_i10518_i10855 = bits_i10200_i10516_i10853;
                            return ($t15577_i10202_i10518_i10855 / 4.50359962737e+15);
                          }
                        })();
                        return { _0: $t15578_i10203_i10519_i10856, _1: rng2_i10201_i10517_i10854 };
                      }
                    }
                  }
                }
              })();
              {
                const t_i10521_i10858 = $p29052_i10520_i10857._0;
                {
                  const rng2_i10522_i10859 = $p29052_i10520_i10857._1;
                  {
                    const out_i10523_i10860 = { _0: rng2_i10522_i10859, _1: t_i10521_i10858 };
                    return out_i10523_i10860;
                  }
                }
              }
            }
          })();
          {
            const rng2 = $p29211._0;
            {
              const t = $p29211._1;
              {
                const $t29210 = (t < 0.25);
                return { _0: rng2, _1: $t29210 };
              }
            }
          }
        }
      })();
    } else {
      return (() => {
        {
          const $t29212 = Perihelion$Upgrades$is_milestone(stars_chained);
          return { _0: rng, _1: $t29212 };
        }
      })();
    }
  }
}
const Perihelion$Upgrades$milestone_check$clo = { _0: ($_, rng, stars_chained) => Perihelion$Upgrades$milestone_check(rng, stars_chained) };

function Perihelion$Upgrades$milestone_pool(owned) {
  {
    const $t29214 = (() => {
      {
        const $t29213 = { $: "Homing" };
        return { $: "OffenseWeapon", _0: $t29213 };
      }
    })();
    {
      const $t29216 = (() => {
        {
          const $t29215 = { $: "Spread" };
          return { $: "OffenseWeapon", _0: $t29215 };
        }
      })();
      {
        const $t29217 = { $: "Nil" };
        {
          const $t29218 = { $: "Cons", _0: $t29216, _1: $t29217 };
          {
            const all_weapons = { $: "Cons", _0: $t29214, _1: $t29218 };
            {
              const $t29222 = { $: "$Clo_$lam29219$3781", _0: $lam29219$apply$3781, _1: owned };
              {
                const unowned_weapons = (() => {
                  {
                    const pred_i4044 = $t29222;
                    {
                      const go_i4045 = { $: "$Clo_go$4820", _0: go$apply$4820, _1: pred_i4044 };
                      {
                        const $t302_i4046 = { $: "Nil" };
                        return go$apply$4820(go_i4045, all_weapons, $t302_i4046);
                      }
                    }
                  }
                })();
                {
                  const $t29223 = { $: "OffenseFireRate" };
                  {
                    const $t29224 = { $: "DefenseBulletWard" };
                    {
                      const $t29225 = { $: "DefenseDeflector" };
                      {
                        const $t29226 = { $: "DefenseShield" };
                        {
                          const $t29228 = (() => {
                            {
                              const $t29227 = { $: "StarThrust" };
                              return { $: "SpecialItem", _0: $t29227 };
                            }
                          })();
                          {
                            const $t29230 = (() => {
                              {
                                const $t29229 = { $: "StarJump" };
                                return { $: "SpecialItem", _0: $t29229 };
                              }
                            })();
                            {
                              const $t29232 = (() => {
                                {
                                  const $t29231 = { $: "TrajectoryPreview" };
                                  return { $: "SpecialItem", _0: $t29231 };
                                }
                              })();
                              {
                                const $t29233 = { $: "Nil" };
                                {
                                  const $t29234 = { $: "Cons", _0: $t29232, _1: $t29233 };
                                  {
                                    const $t29235 = { $: "Cons", _0: $t29230, _1: $t29234 };
                                    {
                                      const $t29236 = { $: "Cons", _0: $t29228, _1: $t29235 };
                                      {
                                        const $t29237 = { $: "Cons", _0: $t29226, _1: $t29236 };
                                        {
                                          const $t29238 = { $: "Cons", _0: $t29225, _1: $t29237 };
                                          {
                                            const $t29239 = { $: "Cons", _0: $t29224, _1: $t29238 };
                                            {
                                              const $t29240 = { $: "Cons", _0: $t29223, _1: $t29239 };
                                              {
                                                const go_i10266 = { $: "$Clo_go$4818", _0: go$apply$4818 };
                                                {
                                                  const $t261_i10269 = (() => {
                                                    {
                                                      const go_i4529_i10267 = { $: "$Clo_go$5260", _0: go$apply$5260 };
                                                      {
                                                        const $t253_i4530_i10268 = { $: "Nil" };
                                                        return go$apply$5260(go_i4529_i10267, unowned_weapons, $t253_i4530_i10268);
                                                      }
                                                    }
                                                  })();
                                                  return go$apply$4818(go_i10266, $t261_i10269, $t29240);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Upgrades$milestone_pool$clo = { _0: ($_, owned) => Perihelion$Upgrades$milestone_pool(owned) };

function Perihelion$Upgrades$remove_upgrade_at(xs, idx) {
  {
    const $t29241 = (() => {
      {
        const go_i4049 = { $: "$Clo_go$4823", _0: go$apply$4823 };
        {
          const $t508_i4050 = { $: "Nil" };
          return go$apply$4823(go_i4049, xs, idx, $t508_i4050);
        }
      }
    })();
    {
      const $t29242 = (idx + 1);
      {
        const $t29243 = List$drop$List_UpgradeKind$Int(xs, $t29242);
        {
          const go_i10272 = { $: "$Clo_go$4818", _0: go$apply$4818 };
          {
            const $t261_i10275 = (() => {
              {
                const go_i4529_i10273 = { $: "$Clo_go$5260", _0: go$apply$5260 };
                {
                  const $t253_i4530_i10274 = { $: "Nil" };
                  return go$apply$5260(go_i4529_i10273, $t29241, $t253_i4530_i10274);
                }
              }
            })();
            return go$apply$4818(go_i10272, $t261_i10275, $t29243);
          }
        }
      }
    }
  }
}
const Perihelion$Upgrades$remove_upgrade_at$clo = { _0: ($_, xs, idx) => Perihelion$Upgrades$remove_upgrade_at(xs, idx) };

function Perihelion$Upgrades$pick_and_remove(rng, pool) {
  {
    const $p29247 = (() => {
      {
        const $p29052_i10520_i10876_i11222 = (() => {
          {
            const $p15579_i10199_i10515_i10871_i11217 = (() => {
              {
                const $p15576_i1532_i10189_i10506_i10862_i11208 = Random$next_raw(rng);
                {
                  const hi_i1533_i10190_i10507_i10863_i11209 = $p15576_i1532_i10189_i10506_i10862_i11208._0;
                  {
                    const rng2_i1534_i10191_i10508_i10864_i11210 = $p15576_i1532_i10189_i10506_i10862_i11208._1;
                    {
                      const $p15575_i1535_i10192_i10509_i10865_i11211 = Random$next_raw(rng2_i1534_i10191_i10508_i10864_i11210);
                      {
                        const lo_i1536_i10193_i10510_i10866_i11212 = $p15575_i1535_i10192_i10509_i10865_i11211._0;
                        {
                          const rng3_i1537_i10194_i10511_i10867_i11213 = $p15575_i1535_i10192_i10509_i10865_i11211._1;
                          {
                            const $t15574_i1541_i10198_i10514_i10870_i11216 = (() => {
                              {
                                const $t15573_i1540_i10197_i10513_i10869_i11215 = (() => {
                                  {
                                    const $t15571_i1538_i10195_i10512_i10868_i11214 = march_int_and(hi_i1533_i10190_i10507_i10863_i11209, 1048575);
                                    return ($t15571_i1538_i10195_i10512_i10868_i11214 * 4294967296);
                                  }
                                })();
                                return ($t15573_i1540_i10197_i10513_i10869_i11215 + lo_i1536_i10193_i10510_i10866_i11212);
                              }
                            })();
                            return { _0: $t15574_i1541_i10198_i10514_i10870_i11216, _1: rng3_i1537_i10194_i10511_i10867_i11213 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const bits_i10200_i10516_i10872_i11218 = $p15579_i10199_i10515_i10871_i11217._0;
              {
                const rng2_i10201_i10517_i10873_i11219 = $p15579_i10199_i10515_i10871_i11217._1;
                {
                  const $t15578_i10203_i10519_i10875_i11221 = (() => {
                    {
                      const $t15577_i10202_i10518_i10874_i11220 = bits_i10200_i10516_i10872_i11218;
                      return ($t15577_i10202_i10518_i10874_i11220 / 4.50359962737e+15);
                    }
                  })();
                  return { _0: $t15578_i10203_i10519_i10875_i11221, _1: rng2_i10201_i10517_i10873_i11219 };
                }
              }
            }
          }
        })();
        {
          const t_i10521_i10877_i11223 = $p29052_i10520_i10876_i11222._0;
          {
            const rng2_i10522_i10878_i11224 = $p29052_i10520_i10876_i11222._1;
            {
              const out_i10523_i10879_i11225 = { _0: rng2_i10522_i10878_i11224, _1: t_i10521_i10877_i11223 };
              return out_i10523_i10879_i11225;
            }
          }
        }
      }
    })();
    {
      const rng2 = $p29247._0;
      {
        const t = $p29247._1;
        {
          const n = (() => {
            {
              const go_i4052 = { $: "$Clo_go$4826", _0: go$apply$4826 };
              return go$apply$4826(go_i4052, pool, 0);
            }
          })();
          {
            const idx = (() => {
              {
                const $t29245 = (() => {
                  {
                    const $t29244 = n;
                    return (t * $t29244);
                  }
                })();
                return Math.trunc($t29245);
              }
            })();
            {
              const clamped = (() => {
                {
                  const $t29246 = (idx >= n);
                  if ($t29246 === true) {
                    return (n - 1);
                  } else {
                    return idx;
                  }
                }
              })();
              {
                const picked = (() => {
                  return List$nth$List_UpgradeKind$Int(pool, clamped);
                })();
                {
                  const rest = Perihelion$Upgrades$remove_upgrade_at(pool, clamped);
                  return { _0: rng2, _1: picked, _2: rest };
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Upgrades$pick_and_remove$clo = { _0: ($_, rng, pool) => Perihelion$Upgrades$pick_and_remove(rng, pool) };

function Perihelion$Upgrades$draw_n(rng, pool, n, acc) {
  {
    const $t29250 = (() => {
      {
        const $t29248 = (n === 0);
        {
          let $t29249;
          switch (pool.$) {
            case "Nil": {
              $t29249 = true;
              break;
            }
            default: {
              $t29249 = false;
              break;
            }
          }
          return ($t29248 || $t29249);
        }
      }
    })();
    if ($t29250 === true) {
      return { _0: rng, _1: acc };
    } else {
      return (() => {
        {
          const $p29253 = Perihelion$Upgrades$pick_and_remove(rng, pool);
          {
            const rng2 = $p29253._0;
            {
              const picked = $p29253._1;
              {
                const rest = $p29253._2;
                {
                  const $t29251 = (n - 1);
                  {
                    const $t29252 = (() => {
                      return { $: "Cons", _0: picked, _1: acc };
                    })();
                    return Perihelion$Upgrades$draw_n(rng2, rest, $t29251, $t29252);
                  }
                }
              }
            }
          }
        }
      })();
    }
  }
}
const Perihelion$Upgrades$draw_n$clo = { _0: ($_, rng, pool, n, acc) => Perihelion$Upgrades$draw_n(rng, pool, n, acc) };

function Perihelion$Upgrades$draw_choices(rng, owned_weapons, current_special) {
  switch (current_special.$) {
    case "None": {
      {
        const $t29254 = Perihelion$Upgrades$milestone_pool(owned_weapons);
        {
          const $t29255 = { $: "Nil" };
          return Perihelion$Upgrades$draw_n(rng, $t29254, 3, $t29255);
        }
      }
      break;
    }
    case "Some": {
      const $f29264 = current_special._0;
      {
        const k = $f29264;
        {
          const $t29256 = Perihelion$Upgrades$milestone_pool(owned_weapons);
          {
            const $t29259 = (() => {
              return { $: "$Clo_$lam29257$3782", _0: $lam29257$apply$3782, _1: k };
            })();
            {
              const pool = (() => {
                {
                  const pred_i4056 = $t29259;
                  {
                    const go_i4057 = { $: "$Clo_go$4820", _0: go$apply$4820, _1: pred_i4056 };
                    {
                      const $t302_i4058 = { $: "Nil" };
                      return go$apply$4820(go_i4057, $t29256, $t302_i4058);
                    }
                  }
                }
              })();
              {
                const $p29263 = (() => {
                  {
                    const $t29260 = { $: "Nil" };
                    return Perihelion$Upgrades$draw_n(rng, pool, 2, $t29260);
                  }
                })();
                {
                  const rng2 = $p29263._0;
                  {
                    const two = $p29263._1;
                    {
                      const $t29261 = { $: "SpecialItem", _0: k };
                      {
                        const $t29262 = (() => {
                          return { $: "Cons", _0: $t29261, _1: two };
                        })();
                        return { _0: rng2, _1: $t29262 };
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Upgrades$draw_choices$clo = { _0: ($_, rng, owned_weapons, current_special) => Perihelion$Upgrades$draw_choices(rng, owned_weapons, current_special) };

function Perihelion$Upgrades$roll_one(rng, owned_weapons, current_special) {
  {
    const $p29266 = (() => {
      {
        const $t29265 = Perihelion$Upgrades$milestone_pool(owned_weapons);
        return Perihelion$Upgrades$pick_and_remove(rng, $t29265);
      }
    })();
    {
      const rng2 = $p29266._0;
      {
        const picked = $p29266._1;
        return { _0: rng2, _1: picked };
      }
    }
  }
}
const Perihelion$Upgrades$roll_one$clo = { _0: ($_, rng, owned_weapons, current_special) => Perihelion$Upgrades$roll_one(rng, owned_weapons, current_special) };

function Perihelion$Upgrades$owned_weapon_upgrades(weapons) {
  switch (weapons.$) {
    case "Nil": {
      return { $: "Nil" };
      break;
    }
    case "Cons": {
      const $f29269 = weapons._0;
      const $f29270 = weapons._1;
      switch ($f29269.$) {
        case "Base": {
          {
            const $jp_clo29276 = (() => {
              return { $: "$Clo_$jp29275$3783", _0: $jp29275$apply$3783, _1: $f29269, _2: $f29270 };
            })();
            {
              const rest = $f29270;
              return Perihelion$Upgrades$owned_weapon_upgrades(rest);
            }
          }
          break;
        }
        default: {
          {
            const rest = $f29270;
            {
              const k = $f29269;
              {
                const $t29267 = { $: "OffenseWeapon", _0: k };
                {
                  const $t29268 = Perihelion$Upgrades$owned_weapon_upgrades(rest);
                  return { $: "Cons", _0: $t29267, _1: $t29268 };
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Upgrades$owned_weapon_upgrades$clo = { _0: ($_, weapons) => Perihelion$Upgrades$owned_weapon_upgrades(weapons) };

function Perihelion$Upgrades$owned_upgrades(owned_weapons, fire_rate_stacks, bullet_ward, deflector_plating, shield_reinforced, special) {
  {
    const weapons = Perihelion$Upgrades$owned_weapon_upgrades(owned_weapons);
    {
      const $t29279 = (fire_rate_stacks > 0);
      {
        let fire_rate;
        if ($t29279 === true) {
          fire_rate = (() => {
            {
              const $t29280 = { $: "OffenseFireRate" };
              {
                const $t29281 = { $: "Nil" };
                return { $: "Cons", _0: $t29280, _1: $t29281 };
              }
            }
          })();
        } else {
          fire_rate = { $: "Nil" };
        }
        {
          let ward;
          if (bullet_ward === true) {
            ward = (() => {
              {
                const $t29282 = { $: "DefenseBulletWard" };
                {
                  const $t29283 = { $: "Nil" };
                  return { $: "Cons", _0: $t29282, _1: $t29283 };
                }
              }
            })();
          } else {
            ward = { $: "Nil" };
          }
          {
            let deflect;
            if (deflector_plating === true) {
              deflect = (() => {
                {
                  const $t29284 = { $: "DefenseDeflector" };
                  {
                    const $t29285 = { $: "Nil" };
                    return { $: "Cons", _0: $t29284, _1: $t29285 };
                  }
                }
              })();
            } else {
              deflect = { $: "Nil" };
            }
            {
              let shield;
              if (shield_reinforced === true) {
                shield = (() => {
                  {
                    const $t29286 = { $: "DefenseShield" };
                    {
                      const $t29287 = { $: "Nil" };
                      return { $: "Cons", _0: $t29286, _1: $t29287 };
                    }
                  }
                })();
              } else {
                shield = { $: "Nil" };
              }
              {
                let spec;
                switch (special.$) {
                  case "None": {
                    spec = { $: "Nil" };
                    break;
                  }
                  case "Some": {
                    const $f29290 = special._0;
                    spec = (() => {
                      {
                        const k = $f29290;
                        {
                          const $t29288 = { $: "SpecialItem", _0: k };
                          {
                            const $t29289 = { $: "Nil" };
                            return { $: "Cons", _0: $t29288, _1: $t29289 };
                          }
                        }
                      }
                    })();
                    break;
                  }
                  default: {
                    spec = (() => {
                      return (() => { throw new Error("non-exhaustive pattern match"); })();
                    })();
                    break;
                  }
                }
                {
                  const $t29291 = (() => {
                    {
                      const go_i10302 = { $: "$Clo_go$4818", _0: go$apply$4818 };
                      {
                        const $t261_i10305 = (() => {
                          {
                            const go_i4529_i10303 = { $: "$Clo_go$5260", _0: go$apply$5260 };
                            {
                              const $t253_i4530_i10304 = { $: "Nil" };
                              return go$apply$5260(go_i4529_i10303, shield, $t253_i4530_i10304);
                            }
                          }
                        })();
                        return go$apply$4818(go_i10302, $t261_i10305, spec);
                      }
                    }
                  })();
                  {
                    const $t29292 = (() => {
                      {
                        const go_i10296 = { $: "$Clo_go$4818", _0: go$apply$4818 };
                        {
                          const $t261_i10299 = (() => {
                            {
                              const go_i4529_i10297 = { $: "$Clo_go$5260", _0: go$apply$5260 };
                              {
                                const $t253_i4530_i10298 = { $: "Nil" };
                                return go$apply$5260(go_i4529_i10297, deflect, $t253_i4530_i10298);
                              }
                            }
                          })();
                          return go$apply$4818(go_i10296, $t261_i10299, $t29291);
                        }
                      }
                    })();
                    {
                      const $t29293 = (() => {
                        {
                          const go_i10290 = { $: "$Clo_go$4818", _0: go$apply$4818 };
                          {
                            const $t261_i10293 = (() => {
                              {
                                const go_i4529_i10291 = { $: "$Clo_go$5260", _0: go$apply$5260 };
                                {
                                  const $t253_i4530_i10292 = { $: "Nil" };
                                  return go$apply$5260(go_i4529_i10291, ward, $t253_i4530_i10292);
                                }
                              }
                            })();
                            return go$apply$4818(go_i10290, $t261_i10293, $t29292);
                          }
                        }
                      })();
                      {
                        const $t29294 = (() => {
                          {
                            const go_i10284 = { $: "$Clo_go$4818", _0: go$apply$4818 };
                            {
                              const $t261_i10287 = (() => {
                                {
                                  const go_i4529_i10285 = { $: "$Clo_go$5260", _0: go$apply$5260 };
                                  {
                                    const $t253_i4530_i10286 = { $: "Nil" };
                                    return go$apply$5260(go_i4529_i10285, fire_rate, $t253_i4530_i10286);
                                  }
                                }
                              })();
                              return go$apply$4818(go_i10284, $t261_i10287, $t29293);
                            }
                          }
                        })();
                        {
                          const go_i10278 = { $: "$Clo_go$4818", _0: go$apply$4818 };
                          {
                            const $t261_i10281 = (() => {
                              {
                                const go_i4529_i10279 = { $: "$Clo_go$5260", _0: go$apply$5260 };
                                {
                                  const $t253_i4530_i10280 = { $: "Nil" };
                                  return go$apply$5260(go_i4529_i10279, weapons, $t253_i4530_i10280);
                                }
                              }
                            })();
                            return go$apply$4818(go_i10278, $t261_i10281, $t29294);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const Perihelion$Upgrades$owned_upgrades$clo = { _0: ($_, owned_weapons, fire_rate_stacks, bullet_ward, deflector_plating, shield_reinforced, special) => Perihelion$Upgrades$owned_upgrades(owned_weapons, fire_rate_stacks, bullet_ward, deflector_plating, shield_reinforced, special) };

function Perihelion$Upgrades$pick_carryover(rng, held) {
  switch (held.$) {
    case "Nil": {
      {
        const $t29295 = { $: "None" };
        return { _0: rng, _1: $t29295 };
      }
      break;
    }
    case "Cons": {
      const $f29298 = held._0;
      const $f29299 = held._1;
      {
        const $p29297 = Perihelion$Upgrades$pick_and_remove(rng, held);
        {
          const rng2 = $p29297._0;
          {
            const picked = $p29297._1;
            {
              const $t29296 = (() => {
                return { $: "Some", _0: picked };
              })();
              return { _0: rng2, _1: $t29296 };
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const Perihelion$Upgrades$pick_carryover$clo = { _0: ($_, rng, held) => Perihelion$Upgrades$pick_carryover(rng, held) };

function boot_seed() {
  {
    const $t29306 = (() => {
      {
        const $t29305 = (() => {
          {
            const $t29304 = {  };
            return march_unix_time();
          }
        })();
        return ($t29305 * 1000000.);
      }
    })();
    return Math.trunc($t29306);
  }
}
const boot_seed$clo = { _0: ($_) => boot_seed() };

function player_sprite_grid() {
  {
    const $t29307 = { $: "Nil" };
    {
      const $t29308 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29307 };
      {
        const $t29309 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29308 };
        {
          const $t29310 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29309 };
          {
            const $t29311 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29310 };
            {
              const $t29312 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29311 };
              {
                const $t29313 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29312 };
                {
                  const $t29314 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29313 };
                  {
                    const $t29315 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29314 };
                    {
                      const $t29316 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29315 };
                      {
                        const $t29317 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29316 };
                        {
                          const $t29318 = { $: "Cons", _0: "0000000000000000000020000200000000000020000200000000000000000000", _1: $t29317 };
                          {
                            const $t29319 = { $: "Cons", _0: "0000000000000000000012002100000000000032004100000000000000000000", _1: $t29318 };
                            {
                              const $t29320 = { $: "Cons", _0: "0000000000000000000031141100000000000031111100000000000000000000", _1: $t29319 };
                              {
                                const $t29321 = { $: "Cons", _0: "0000000000000000000013311400000000000013331400000000000000000000", _1: $t29320 };
                                {
                                  const $t29322 = { $: "Cons", _0: "0000000000000000000004314000000000000001312000000000000000000000", _1: $t29321 };
                                  {
                                    const $t29323 = { $: "Cons", _0: "0000000000000000000002442000000000000002442000000000000000000000", _1: $t29322 };
                                    {
                                      const $t29324 = { $: "Cons", _0: "0000000000000000000022222220000000000002242200000000000000000000", _1: $t29323 };
                                      {
                                        const $t29325 = { $: "Cons", _0: "0000000000000000000233422442000000000023333120000000000000000000", _1: $t29324 };
                                        {
                                          const $t29326 = { $: "Cons", _0: "0000000000000000000233024442000000000023333320000000000000000000", _1: $t29325 };
                                          {
                                            const $t29327 = { $: "Cons", _0: "0000000000000000002433024442000000000023333342000000000000000000", _1: $t29326 };
                                            {
                                              const $t29328 = { $: "Cons", _0: "0000000000000000024333024442000000000023333332000000000000000000", _1: $t29327 };
                                              {
                                                const $t29329 = { $: "Cons", _0: "0000000000000000041333024442000000000023333334200000000000000000", _1: $t29328 };
                                                {
                                                  const $t29330 = { $: "Cons", _0: "0000000000000000041333024442000000000023333331400000000000000000", _1: $t29329 };
                                                  {
                                                    const $t29331 = { $: "Cons", _0: "0000000000000000041333024442022222222223333331400000000000000000", _1: $t29330 };
                                                    {
                                                      const $t29332 = { $: "Cons", _0: "0000000000000000041333004442013333333223331331400000000000000000", _1: $t29331 };
                                                      {
                                                        const $t29333 = { $: "Cons", _0: "0000000000000000041333004442013333333223314331400000000000000000", _1: $t29332 };
                                                        {
                                                          const $t29334 = { $: "Cons", _0: "0000000000000000041333000042013333333223423331400000000000000000", _1: $t29333 };
                                                          {
                                                            const $t29335 = { $: "Cons", _0: "0000000000000000041333220020013333333141413331400000000000000000", _1: $t29334 };
                                                            {
                                                              const $t29336 = { $: "Cons", _0: "0000000000000000041333442000013333333334133331400000000000000000", _1: $t29335 };
                                                              {
                                                                const $t29337 = { $: "Cons", _0: "0000000000000000041333444400002331333223333331400000000000000000", _1: $t29336 };
                                                                {
                                                                  const $t29338 = { $: "Cons", _0: "0000000000000000041333444420024332413223333334200000000000000000", _1: $t29337 };
                                                                  {
                                                                    const $t29339 = { $: "Cons", _0: "0000000000000000041333444442013312043223333334200000000000000000", _1: $t29338 };
                                                                    {
                                                                      const $t29340 = { $: "Cons", _0: "0000000000000000041333444442013312022223333334200000000000000000", _1: $t29339 };
                                                                      {
                                                                        const $t29341 = { $: "Cons", _0: "0000000000000000043333444442013312020023333334200000000000000000", _1: $t29340 };
                                                                        {
                                                                          const $t29342 = { $: "Cons", _0: "0000000000000000041333444442024312043223333334200000000000000000", _1: $t29341 };
                                                                          {
                                                                            const $t29343 = { $: "Cons", _0: "0000000000000000004333344442043312043223333312000000000000000000", _1: $t29342 };
                                                                            {
                                                                              const $t29344 = { $: "Cons", _0: "0000000000000000002313311442013312043223333132000000000000000000", _1: $t29343 };
                                                                              {
                                                                                const $t29345 = { $: "Cons", _0: "0000000000000000002413331442013312043423331342000000000000000000", _1: $t29344 };
                                                                                {
                                                                                  const $t29346 = { $: "Cons", _0: "0000000000000000000011133142013312043423331320000000000000000000", _1: $t29345 };
                                                                                  {
                                                                                    const $t29347 = { $: "Cons", _0: "0000000000000000000004113342013312023423333200000000000000000000", _1: $t29346 };
                                                                                    {
                                                                                      const $t29348 = { $: "Cons", _0: "0000000000000000000004313342233312021223333000000000000000000000", _1: $t29347 };
                                                                                      {
                                                                                        const $t29349 = { $: "Cons", _0: "0000000000000000000000011104333312000003140000000000000000000000", _1: $t29348 };
                                                                                        {
                                                                                          const $t29350 = { $: "Cons", _0: "0000000000000000000000044341333312222221420000000000000000000000", _1: $t29349 };
                                                                                          {
                                                                                            const $t29351 = { $: "Cons", _0: "0000000000000000000000000333333312133312000000000000000000000000", _1: $t29350 };
                                                                                            {
                                                                                              const $t29352 = { $: "Cons", _0: "0000000000000000000000002333333312133142200000000000000000000000", _1: $t29351 };
                                                                                              {
                                                                                                const $t29353 = { $: "Cons", _0: "0000000000000000000000003333133312133221200000000000000000000000", _1: $t29352 };
                                                                                                {
                                                                                                  const $t29354 = { $: "Cons", _0: "0000000000000000000000003331444312133111200000000000000000000000", _1: $t29353 };
                                                                                                  {
                                                                                                    const $t29355 = { $: "Cons", _0: "0000000000000000000000003334224312133331200000000000000000000000", _1: $t29354 };
                                                                                                    {
                                                                                                      const $t29356 = { $: "Cons", _0: "0000000000000000000000003342200002133441200000000000000000000000", _1: $t29355 };
                                                                                                      {
                                                                                                        const $t29357 = { $: "Cons", _0: "0000000000000000000000003344400002133111200000000000000000000000", _1: $t29356 };
                                                                                                        {
                                                                                                          const $t29358 = { $: "Cons", _0: "0000000000000000000000003341300002133331200000000000000000000000", _1: $t29357 };
                                                                                                          {
                                                                                                            const $t29359 = { $: "Cons", _0: "0000000000000000000000003333344442133311200000000000000000000000", _1: $t29358 };
                                                                                                            {
                                                                                                              const $t29360 = { $: "Cons", _0: "0000000000000000000000003333314442133311200000000000000000000000", _1: $t29359 };
                                                                                                              {
                                                                                                                const $t29361 = { $: "Cons", _0: "0000000000000000000000003333314442133111200000000000000000000000", _1: $t29360 };
                                                                                                                {
                                                                                                                  const $t29362 = { $: "Cons", _0: "0000000000000000000000002333314442133421200000000000000000000000", _1: $t29361 };
                                                                                                                  {
                                                                                                                    const $t29363 = { $: "Cons", _0: "0000000000000000000000041333314442133421200000000000000000000000", _1: $t29362 };
                                                                                                                    {
                                                                                                                      const $t29364 = { $: "Cons", _0: "0000000000000000000000043333314442133420000000000000000000000000", _1: $t29363 };
                                                                                                                      {
                                                                                                                        const $t29365 = { $: "Cons", _0: "0000000000000000000000003333314442133422000000000000000000000000", _1: $t29364 };
                                                                                                                        {
                                                                                                                          const $t29366 = { $: "Cons", _0: "0000000000000000000000003333314442133423400000000000000000000000", _1: $t29365 };
                                                                                                                          {
                                                                                                                            const $t29367 = { $: "Cons", _0: "0000000000000000000000003333314442133423310000000000000000000000", _1: $t29366 };
                                                                                                                            {
                                                                                                                              const $t29368 = { $: "Cons", _0: "0000000000000000000000000333314442133423312000000000000000000000", _1: $t29367 };
                                                                                                                              {
                                                                                                                                const $t29369 = { $: "Cons", _0: "0000000000000000000000000333314420213423312000000000000000000000", _1: $t29368 };
                                                                                                                                {
                                                                                                                                  const $t29370 = { $: "Cons", _0: "0000000000000000000000000333314400043423312000000000000000000000", _1: $t29369 };
                                                                                                                                  {
                                                                                                                                    const $t29371 = { $: "Cons", _0: "0000000000000000000000000333314000043123312000000000000000000000", _1: $t29370 };
                                                                                                                                    {
                                                                                                                                      const $t29372 = { $: "Cons", _0: "0000000000000000000000000333311000043313312000000000000000000000", _1: $t29371 };
                                                                                                                                      {
                                                                                                                                        const $t29373 = { $: "Cons", _0: "0000000000000000000000000333311420043333312000000000000000000000", _1: $t29372 };
                                                                                                                                        {
                                                                                                                                          const $t29374 = { $: "Cons", _0: "0000000000000000000000000333311440043333312000000000000000000000", _1: $t29373 };
                                                                                                                                          {
                                                                                                                                            const $t29375 = { $: "Cons", _0: "0000000000000000000000000333331444043333314000000000000000000000", _1: $t29374 };
                                                                                                                                            {
                                                                                                                                              const $t29376 = { $: "Cons", _0: "0000000000000000000000000333334244043333314000000000000000000000", _1: $t29375 };
                                                                                                                                              {
                                                                                                                                                const $t29377 = { $: "Cons", _0: "0000000000000000000000000333332244243333314000000000000000000000", _1: $t29376 };
                                                                                                                                                {
                                                                                                                                                  const $t29378 = { $: "Cons", _0: "0000000000000000000000000333331444243333314000000000000000000000", _1: $t29377 };
                                                                                                                                                  {
                                                                                                                                                    const $t29379 = { $: "Cons", _0: "0000000000000000000000000333331444243333334000000000000000000000", _1: $t29378 };
                                                                                                                                                    {
                                                                                                                                                      const $t29380 = { $: "Cons", _0: "0000000000000000000000000433331444243333312000000000000000000000", _1: $t29379 };
                                                                                                                                                      {
                                                                                                                                                        const $t29381 = { $: "Cons", _0: "0000000000000000000000000333331444243333310000000000000000000000", _1: $t29380 };
                                                                                                                                                        {
                                                                                                                                                          const $t29382 = { $: "Cons", _0: "0000000000000000000000000133331444223334200000000000000000000000", _1: $t29381 };
                                                                                                                                                          {
                                                                                                                                                            const $t29383 = { $: "Cons", _0: "0000000000000000000000000013331444224310000000000000000000000000", _1: $t29382 };
                                                                                                                                                            {
                                                                                                                                                              const $t29384 = { $: "Cons", _0: "0000000000000000000000000021331444222200000000000000000000000000", _1: $t29383 };
                                                                                                                                                              {
                                                                                                                                                                const $t29385 = { $: "Cons", _0: "0000000000000000000000000002331444220000000000000000000000000000", _1: $t29384 };
                                                                                                                                                                {
                                                                                                                                                                  const $t29386 = { $: "Cons", _0: "0000000000000000000000000001334244022000000000000000000000000000", _1: $t29385 };
                                                                                                                                                                  {
                                                                                                                                                                    const $t29387 = { $: "Cons", _0: "0000000000000000000000000001142242044000000000000000000000000000", _1: $t29386 };
                                                                                                                                                                    {
                                                                                                                                                                      const $t29388 = { $: "Cons", _0: "0000000000000000000000000001100240011000000000000000000000000000", _1: $t29387 };
                                                                                                                                                                      {
                                                                                                                                                                        const $t29389 = { $: "Cons", _0: "0000000000000000000000000001100000011000000000000000000000000000", _1: $t29388 };
                                                                                                                                                                        {
                                                                                                                                                                          const $t29390 = { $: "Cons", _0: "0000000000000000000000000001100000011000000000000000000000000000", _1: $t29389 };
                                                                                                                                                                          {
                                                                                                                                                                            const $t29391 = { $: "Cons", _0: "0000000000000000000000000001100000011000000000000000000000000000", _1: $t29390 };
                                                                                                                                                                            {
                                                                                                                                                                              const $t29392 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29391 };
                                                                                                                                                                              {
                                                                                                                                                                                const $t29393 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29392 };
                                                                                                                                                                                {
                                                                                                                                                                                  const $t29394 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29393 };
                                                                                                                                                                                  {
                                                                                                                                                                                    const $t29395 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29394 };
                                                                                                                                                                                    {
                                                                                                                                                                                      const $t29396 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29395 };
                                                                                                                                                                                      {
                                                                                                                                                                                        const $t29397 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29396 };
                                                                                                                                                                                        {
                                                                                                                                                                                          const $t29398 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29397 };
                                                                                                                                                                                          {
                                                                                                                                                                                            const $t29399 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29398 };
                                                                                                                                                                                            {
                                                                                                                                                                                              const $t29400 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29399 };
                                                                                                                                                                                              {
                                                                                                                                                                                                const $t29401 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29400 };
                                                                                                                                                                                                {
                                                                                                                                                                                                  const $t29402 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29401 };
                                                                                                                                                                                                  return { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29402 };
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const player_sprite_grid$clo = { _0: ($_) => player_sprite_grid() };

function draw_sprite_run(ctx, row_idx, start_col, end_col, tone, grid_w, grid_h, target_w, target_h) {
  {
    const $t29403 = (() => {
      return (tone === "0");
    })();
    if ($t29403 === true) {
      return {  };
    } else {
      return (() => {
        {
          const x0 = (() => {
            {
              const $t29407 = (() => {
                {
                  const $t29406 = (() => {
                    {
                      const $t29404 = start_col;
                      {
                        const $t29405 = grid_w;
                        return ($t29404 / $t29405);
                      }
                    }
                  })();
                  return ($t29406 * target_w);
                }
              })();
              {
                const $t1584_i4070 = march_float_round($t29407);
                return $t1584_i4070;
              }
            }
          })();
          {
            const x1 = (() => {
              {
                const $t29412 = (() => {
                  {
                    const $t29411 = (() => {
                      {
                        const $t29409 = (() => {
                          {
                            const $t29408 = (end_col + 1);
                            return $t29408;
                          }
                        })();
                        {
                          const $t29410 = grid_w;
                          return ($t29409 / $t29410);
                        }
                      }
                    })();
                    return ($t29411 * target_w);
                  }
                })();
                {
                  const $t1584_i4068 = march_float_round($t29412);
                  return $t1584_i4068;
                }
              }
            })();
            {
              const y0 = (() => {
                {
                  const $t29416 = (() => {
                    {
                      const $t29415 = (() => {
                        {
                          const $t29413 = row_idx;
                          {
                            const $t29414 = grid_h;
                            return ($t29413 / $t29414);
                          }
                        }
                      })();
                      return ($t29415 * target_h);
                    }
                  })();
                  {
                    const $t1584_i4066 = march_float_round($t29416);
                    return $t1584_i4066;
                  }
                }
              })();
              {
                const y1 = (() => {
                  {
                    const $t29421 = (() => {
                      {
                        const $t29420 = (() => {
                          {
                            const $t29418 = (() => {
                              {
                                const $t29417 = (row_idx + 1);
                                return $t29417;
                              }
                            })();
                            {
                              const $t29419 = grid_h;
                              return ($t29418 / $t29419);
                            }
                          }
                        })();
                        return ($t29420 * target_h);
                      }
                    })();
                    {
                      const $t1584_i4064 = march_float_round($t29421);
                      return $t1584_i4064;
                    }
                  }
                })();
                (() => {
                  {
                    const $t29422 = (() => {
                      {
                        let $rc_842;
                        if (tone === "1") {
                          $rc_842 = "#e2e2e2";
                        } else if (tone === "2") {
                          $rc_842 = "#333333";
                        } else if (tone === "3") {
                          $rc_842 = "#ffffff";
                        } else {
                          $rc_842 = "#9a9a9a";
                        }
                        return $rc_842;
                      }
                    })();
                    return Canvas$set_fill_style(ctx, $t29422);
                  }
                })();
                {
                  const $t29423 = (x1 - x0);
                  {
                    const $t29424 = (y1 - y0);
                    return Canvas$fill_rect(ctx, x0, y0, $t29423, $t29424);
                  }
                }
              }
            }
          }
        }
      })();
    }
  }
}
const draw_sprite_run$clo = { _0: ($_, ctx, row_idx, start_col, end_col, tone, grid_w, grid_h, target_w, target_h) => draw_sprite_run(ctx, row_idx, start_col, end_col, tone, grid_w, grid_h, target_w, target_h) };

function draw_sprite_row_go(ctx, row, row_idx, col, run_start, run_tone, grid_w, grid_h, target_w, target_h) {
  {
    const $t29425 = (col >= grid_w);
    if ($t29425 === true) {
      return (() => {
        {
          const $t29426 = (grid_w - 1);
          return draw_sprite_run(ctx, row_idx, run_start, $t29426, run_tone, grid_w, grid_h, target_w, target_h);
        }
      })();
    } else {
      return (() => {
        {
          const tone = march_string_slice(row, col, 1);
          {
            const $t29427 = (() => {
              return (tone === run_tone);
            })();
            if ($t29427 === true) {
              return (() => {
                {
                  const $t29428 = (col + 1);
                  return draw_sprite_row_go(ctx, row, row_idx, $t29428, run_start, run_tone, grid_w, grid_h, target_w, target_h);
                }
              })();
            } else {
              return (() => {
                (() => {
                  {
                    const $t29429 = (col - 1);
                    return draw_sprite_run(ctx, row_idx, run_start, $t29429, run_tone, grid_w, grid_h, target_w, target_h);
                  }
                })();
                {
                  const $t29430 = (col + 1);
                  return draw_sprite_row_go(ctx, row, row_idx, $t29430, col, tone, grid_w, grid_h, target_w, target_h);
                }
              })();
            }
          }
        }
      })();
    }
  }
}
const draw_sprite_row_go$clo = { _0: ($_, ctx, row, row_idx, col, run_start, run_tone, grid_w, grid_h, target_w, target_h) => draw_sprite_row_go(ctx, row, row_idx, col, run_start, run_tone, grid_w, grid_h, target_w, target_h) };

function draw_sprite_rows(ctx, rows, row_idx, grid_w, grid_h, target_w, target_h) {
  switch (rows.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29433 = rows._0;
      const $f29434 = rows._1;
      {
        const rest = (() => {
          return $f29434;
        })();
        {
          const row = (() => {
            return $f29433;
          })();
          (() => {
            {
              const $rc_843 = (() => {
                {
                  const $t29431_i10313 = march_string_slice(row, 0, 1);
                  return draw_sprite_row_go(ctx, row, row_idx, 1, 0, $t29431_i10313, grid_w, grid_h, target_w, target_h);
                }
              })();
              return $rc_843;
            }
          })();
          {
            const $t29432 = (row_idx + 1);
            return draw_sprite_rows(ctx, rest, $t29432, grid_w, grid_h, target_w, target_h);
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_sprite_rows$clo = { _0: ($_, ctx, rows, row_idx, grid_w, grid_h, target_w, target_h) => draw_sprite_rows(ctx, rows, row_idx, grid_w, grid_h, target_w, target_h) };

function draw_player_sprite_pixels(ctx) {
  {
    const $t29439 = player_sprite_grid();
    {
      const $rc_844 = draw_sprite_rows(ctx, $t29439, 0, 64, 96, 32., 48.);
      return $rc_844;
    }
  }
}
const draw_player_sprite_pixels$clo = { _0: ($_, ctx) => draw_player_sprite_pixels(ctx) };

function fx_init() {
  {
    const gl_node = Dom$create("canvas");
    {
      const sprite_node = Dom$create("canvas");
      (() => {
        return Dom$set_attr(sprite_node, "width", "32");
      })();
      (() => {
        return Dom$set_attr(sprite_node, "height", "48");
      })();
      {
        const sprite_ctx = (() => {
          return Canvas$get_context(sprite_node);
        })();
        (() => {
          switch (sprite_ctx.$) {
            case "None": {
              return {  };
              break;
            }
            case "Some": {
              const $f29440 = sprite_ctx._0;
              {
                const sctx = $f29440;
                return draw_player_sprite_pixels(sctx);
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        })();
        {
          const $t29441 = { $: "Nil" };
          {
            const $t29442 = { $: "Nil" };
            {
              const $t29443 = { $: "None" };
              {
                const $t29444 = audio_create();
                {
                  const $t29445 = WebGL$get_context(gl_node);
                  {
                    const $t29446 = { $: "Some", _0: sprite_node };
                    return ({ trail: $t29441, t: 0., particles: $t29442, flash: $t29443, actx: $t29444, muted: false, gl: $t29445, player_sprite: $t29446 });
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const fx_init$clo = { _0: ($_) => fx_init() };

function spawn_burst_particles(x, y, t, i, acc) {
  {
    const $t29453 = (i >= 10);
    if ($t29453 === true) {
      return acc;
    } else {
      return (() => {
        {
          const seed = (() => {
            {
              const $t29455 = (() => {
                {
                  const $t29454 = i;
                  return ($t29454 * 7.);
                }
              })();
              return (t + $t29455);
            }
          })();
          {
            const a = (() => {
              {
                const $t29456 = (() => {
                  {
                    const x_i10338 = (() => {
                      {
                        const $t29450_i10337 = (() => {
                          {
                            const $t29449_i10336 = (() => {
                              {
                                const $t29447_i10334 = (seed * 12.9898);
                                {
                                  const $t29448_i10335 = (1. * 78.233);
                                  return ($t29447_i10334 + $t29448_i10335);
                                }
                              }
                            })();
                            return Math.sin($t29449_i10336);
                          }
                        })();
                        return ($t29450_i10337 * 43758.5453);
                      }
                    })();
                    {
                      const $t29451_i10340 = (() => {
                        {
                          const $t1582_i4080_i10339 = Math.floor(x_i10338);
                          return $t1582_i4080_i10339;
                        }
                      })();
                      return (x_i10338 - $t29451_i10340);
                    }
                  }
                })();
                return ($t29456 * 6.28318530718);
              }
            })();
            {
              const speed = (() => {
                {
                  const $t29459 = (() => {
                    {
                      const $t29458 = (() => {
                        {
                          const x_i10329 = (() => {
                            {
                              const $t29450_i10328 = (() => {
                                {
                                  const $t29449_i10327 = (() => {
                                    {
                                      const $t29447_i10325 = (seed * 12.9898);
                                      {
                                        const $t29448_i10326 = (2. * 78.233);
                                        return ($t29447_i10325 + $t29448_i10326);
                                      }
                                    }
                                  })();
                                  return Math.sin($t29449_i10327);
                                }
                              })();
                              return ($t29450_i10328 * 43758.5453);
                            }
                          })();
                          {
                            const $t29451_i10331 = (() => {
                              {
                                const $t1582_i4080_i10330 = Math.floor(x_i10329);
                                return $t1582_i4080_i10330;
                              }
                            })();
                            return (x_i10329 - $t29451_i10331);
                          }
                        }
                      })();
                      return ($t29458 * 90.);
                    }
                  })();
                  return (40. + $t29459);
                }
              })();
              {
                const life = (() => {
                  {
                    const $t29463 = (() => {
                      {
                        const $t29462 = (() => {
                          {
                            const $t29461 = (() => {
                              {
                                const x_i10320 = (() => {
                                  {
                                    const $t29450_i10319 = (() => {
                                      {
                                        const $t29449_i10318 = (() => {
                                          {
                                            const $t29447_i10316 = (seed * 12.9898);
                                            {
                                              const $t29448_i10317 = (3. * 78.233);
                                              return ($t29447_i10316 + $t29448_i10317);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29449_i10318);
                                      }
                                    })();
                                    return ($t29450_i10319 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29451_i10322 = (() => {
                                    {
                                      const $t1582_i4080_i10321 = Math.floor(x_i10320);
                                      return $t1582_i4080_i10321;
                                    }
                                  })();
                                  return (x_i10320 - $t29451_i10322);
                                }
                              }
                            })();
                            return (0.4 * $t29461);
                          }
                        })();
                        return (0.6 + $t29462);
                      }
                    })();
                    return (0.5 * $t29463);
                  }
                })();
                {
                  const p = (() => {
                    {
                      const $t29465 = (() => {
                        {
                          const $t29464 = Math.cos(a);
                          return ($t29464 * speed);
                        }
                      })();
                      {
                        const $t29467 = (() => {
                          {
                            const $t29466 = Math.sin(a);
                            return ($t29466 * speed);
                          }
                        })();
                        return ({ x: x, y: y, vx: $t29465, vy: $t29467, life: life, max_life: life });
                      }
                    }
                  })();
                  {
                    const $t29468 = (i + 1);
                    {
                      const $t29469 = { $: "Cons", _0: p, _1: acc };
                      return spawn_burst_particles(x, y, t, $t29468, $t29469);
                    }
                  }
                }
              }
            }
          }
        }
      })();
    }
  }
}
const spawn_burst_particles$clo = { _0: ($_, x, y, t, i, acc) => spawn_burst_particles(x, y, t, i, acc) };

function spawn_bursts(bursts, t, acc) {
  switch (bursts.$) {
    case "Nil": {
      return acc;
      break;
    }
    case "Cons": {
      const $f29472 = bursts._0;
      const $f29473 = bursts._1;
      {
        const rest = (() => {
          return $f29473;
        })();
        {
          const pt = (() => {
            return $f29472;
          })();
          {
            const x = pt._0;
            {
              const y = pt._1;
              {
                const $t29470 = spawn_burst_particles(x, y, t, 0, acc);
                return spawn_bursts(rest, t, $t29470);
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const spawn_bursts$clo = { _0: ($_, bursts, t, acc) => spawn_bursts(bursts, t, acc) };

function step_flash(flash, dt_s) {
  switch (flash.$) {
    case "None": {
      return { $: "None" };
      break;
    }
    case "Some": {
      const $f29499 = flash._0;
      {
        const f = $f29499;
        {
          const x = f._0;
          {
            const y = f._1;
            {
              const tr = f._2;
              {
                const tr2 = (tr - dt_s);
                {
                  const $t29496 = (tr2 > 0.);
                  if ($t29496 === true) {
                    return (() => {
                      {
                        const $t29497 = { _0: x, _1: y, _2: tr2 };
                        return { $: "Some", _0: $t29497 };
                      }
                    })();
                  } else {
                    return { $: "None" };
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const step_flash$clo = { _0: ($_, flash, dt_s) => step_flash(flash, dt_s) };

function step_fx(fx, game, dt_s) {
  {
    const t2 = (() => {
      {
        const $t29500 = fx.t;
        return ($t29500 + dt_s);
      }
    })();
    {
      const $t29501 = (() => {
        {
          const $t30122_i4100 = game.phase;
          switch ($t30122_i4100.$) {
            case "Playing": {
              return true;
              break;
            }
            default: {
              return false;
            }
          }
        }
      })();
      {
        let trail2;
        if ($t29501 === true) {
          trail2 = (() => {
            {
              const $t29502 = fx.trail;
              {
                const $t29505 = (() => {
                  {
                    const $t29503 = game.ball_x;
                    {
                      const $t29504 = game.ball_y;
                      return { _0: $t29503, _1: $t29504 };
                    }
                  }
                })();
                {
                  const $t29494_i10354 = { $: "Cons", _0: $t29505, _1: $t29502 };
                  {
                    const go_i4095_i10355 = { $: "$Clo_go$4832", _0: go$apply$4832 };
                    {
                      const $t508_i4096_i10356 = { $: "Nil" };
                      return go$apply$4832(go_i4095_i10355, $t29494_i10354, 22, $t508_i4096_i10356);
                    }
                  }
                }
              }
            }
          })();
        } else {
          trail2 = fx.trail;
        }
        {
          const $t29506 = game.fx_bursts;
          {
            const $t29507 = fx.particles;
            {
              const $t29508 = (() => {
                return spawn_bursts($t29506, t2, $t29507);
              })();
              {
                const particles2 = (() => {
                  {
                    const $t29489_i10343 = { $: "$Clo_$lam29488$3789", _0: $lam29488$apply$3789, _1: dt_s };
                    {
                      const $t29490_i10347 = (() => {
                        {
                          const f_i4090_i10344 = $t29489_i10343;
                          {
                            const go_i4091_i10345 = { $: "$Clo_go$4830", _0: go$apply$4830, _1: f_i4090_i10344 };
                            {
                              const $t270_i4092_i10346 = { $: "Nil" };
                              return go$apply$4830(go_i4091_i10345, $t29508, $t270_i4092_i10346);
                            }
                          }
                        }
                      })();
                      {
                        const $t29493_i10348 = { $: "$Clo_$lam29491$3790", _0: $lam29491$apply$3790 };
                        {
                          const pred_i4086_i10349 = $t29493_i10348;
                          {
                            const go_i4087_i10350 = { $: "$Clo_go$4828", _0: go$apply$4828, _1: pred_i4086_i10349 };
                            {
                              const $t302_i4088_i10351 = { $: "Nil" };
                              return go$apply$4828(go_i4087_i10350, $t29490_i10347, $t302_i4088_i10351);
                            }
                          }
                        }
                      }
                    }
                  }
                })();
                {
                  const flash1 = (() => {
                    {
                      const $t29509 = fx.flash;
                      return step_flash($t29509, dt_s);
                    }
                  })();
                  {
                    const flash2 = (() => {
                      {
                        const $t29510 = game.capture_flash;
                        switch ($t29510.$) {
                          case "None": {
                            return flash1;
                            break;
                          }
                          case "Some": {
                            const $f29514 = $t29510._0;
                            {
                              const pt = (() => {
                                return $f29514;
                              })();
                              {
                                const x = pt._0;
                                {
                                  const y = pt._1;
                                  {
                                    const $t29512 = { _0: x, _1: y, _2: 0.45 };
                                    return { $: "Some", _0: $t29512 };
                                  }
                                }
                              }
                            }
                            break;
                          }
                          default: {
                            return (() => { throw new Error("non-exhaustive pattern match"); })();
                          }
                        }
                      }
                    })();
                    return ({ ...fx, trail: trail2, t: t2, particles: particles2, flash: flash2 });
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const step_fx$clo = { _0: ($_, fx, game, dt_s) => step_fx(fx, game, dt_s) };

function draw_trail(ctx, trail, i, n) {
  switch (trail.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29524 = trail._0;
      const $f29525 = trail._1;
      {
        const rest = (() => {
          return $f29525;
        })();
        {
          const pt = (() => {
            return $f29524;
          })();
          {
            const x = pt._0;
            {
              const y = pt._1;
              {
                const f = (() => {
                  {
                    const $t29517 = (() => {
                      {
                        const $t29515 = i;
                        {
                          const $t29516 = n;
                          return ($t29515 / $t29516);
                        }
                      }
                    })();
                    return (1. - $t29517);
                  }
                })();
                (() => {
                  {
                    const $t29518 = (f * 0.38);
                    return Canvas$set_global_alpha(ctx, $t29518);
                  }
                })();
                (() => {
                  return Canvas$set_fill_style(ctx, "#ffffff");
                })();
                (() => {
                  return Canvas$begin_path(ctx);
                })();
                (() => {
                  {
                    const $t29520 = (() => {
                      {
                        const $t29519 = (2.6 * f);
                        return (1.2 + $t29519);
                      }
                    })();
                    return Canvas$arc(ctx, x, y, $t29520, 0., 6.28318530718);
                  }
                })();
                (() => {
                  return Canvas$fill(ctx);
                })();
                {
                  const $t29522 = (i + 1);
                  return draw_trail(ctx, rest, $t29522, n);
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_trail$clo = { _0: ($_, ctx, trail, i, n) => draw_trail(ctx, trail, i, n) };

function draw_particles(ctx, particles) {
  switch (particles.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29537 = particles._0;
      const $f29538 = particles._1;
      {
        const rest = (() => {
          return $f29538;
        })();
        {
          const p = (() => {
            return $f29537;
          })();
          {
            const f = (() => {
              {
                const $t29530 = p.life;
                {
                  const $t29531 = p.max_life;
                  return ($t29530 / $t29531);
                }
              }
            })();
            (() => {
              return Canvas$set_global_alpha(ctx, f);
            })();
            (() => {
              return Canvas$set_fill_style(ctx, "#e8e8e8");
            })();
            (() => {
              return Canvas$begin_path(ctx);
            })();
            (() => {
              {
                const $t29532 = p.x;
                {
                  const $t29533 = p.y;
                  {
                    const $t29535 = (() => {
                      {
                        const $t29534 = (1.5 * f);
                        return (0.5 + $t29534);
                      }
                    })();
                    return Canvas$arc(ctx, $t29532, $t29533, $t29535, 0., 6.28318530718);
                  }
                }
              }
            })();
            (() => {
              return Canvas$fill(ctx);
            })();
            return draw_particles(ctx, rest);
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_particles$clo = { _0: ($_, ctx, particles) => draw_particles(ctx, particles) };

function draw_flash(ctx, flash) {
  switch (flash.$) {
    case "None": {
      return {  };
      break;
    }
    case "Some": {
      const $f29553 = flash._0;
      {
        const f = (() => {
          return $f29553;
        })();
        {
          const x = f._0;
          {
            const y = f._1;
            {
              const tr = f._2;
              {
                const prog = (() => {
                  {
                    const $t29544 = (tr / 0.45);
                    return (1. - $t29544);
                  }
                })();
                {
                  const r = (() => {
                    {
                      const $t29545 = (prog * 60.);
                      return (8. + $t29545);
                    }
                  })();
                  (() => {
                    {
                      const $t29547 = (() => {
                        {
                          const $t29546 = (1. - prog);
                          return ($t29546 * 0.7);
                        }
                      })();
                      return Canvas$set_global_alpha(ctx, $t29547);
                    }
                  })();
                  (() => {
                    return Canvas$set_stroke_style(ctx, "#ffffff");
                  })();
                  (() => {
                    {
                      const $t29550 = (() => {
                        {
                          const $t29549 = (() => {
                            {
                              const $t29548 = (1. - prog);
                              return (2.5 * $t29548);
                            }
                          })();
                          return ($t29549 + 0.5);
                        }
                      })();
                      return Canvas$set_line_width(ctx, $t29550);
                    }
                  })();
                  (() => {
                    return Canvas$begin_path(ctx);
                  })();
                  (() => {
                    return Canvas$arc(ctx, x, y, r, 0., 6.28318530718);
                  })();
                  return Canvas$stroke(ctx);
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_flash$clo = { _0: ($_, ctx, flash) => draw_flash(ctx, flash) };

function pulse_style(s) {
  {
    const r = (() => {
      {
        const $t29558 = (() => {
          {
            const $t29557 = s.x;
            return ($t29557 + 1.);
          }
        })();
        {
          const $t29560 = (() => {
            {
              const $t29559 = s.y;
              return ($t29559 + 1.);
            }
          })();
          {
            const x_i10372 = (() => {
              {
                const $t29450_i10371 = (() => {
                  {
                    const $t29449_i10370 = (() => {
                      {
                        const $t29447_i10368 = ($t29558 * 12.9898);
                        {
                          const $t29448_i10369 = ($t29560 * 78.233);
                          return ($t29447_i10368 + $t29448_i10369);
                        }
                      }
                    })();
                    return Math.sin($t29449_i10370);
                  }
                })();
                return ($t29450_i10371 * 43758.5453);
              }
            })();
            {
              const $t29451_i10374 = (() => {
                {
                  const $t1582_i4080_i10373 = Math.floor(x_i10372);
                  return $t1582_i4080_i10373;
                }
              })();
              return (x_i10372 - $t29451_i10374);
            }
          }
        }
      }
    })();
    {
      const $t29561 = (r < 0.34);
      if ($t29561 === true) {
        return 0;
      } else {
        return (() => {
          {
            const $t29562 = (r < 0.67);
            if ($t29562 === true) {
              return 1;
            } else {
              return 2;
            }
          }
        })();
      }
    }
  }
}
const pulse_style$clo = { _0: ($_, s) => pulse_style(s) };

function dot_count(s) {
  {
    const $t29581 = (() => {
      {
        const $t29580 = (() => {
          {
            const $t29579 = (() => {
              {
                const $t29576 = (() => {
                  {
                    const $t29575 = s.x;
                    return ($t29575 + 4.);
                  }
                })();
                {
                  const $t29578 = (() => {
                    {
                      const $t29577 = s.y;
                      return ($t29577 + 4.);
                    }
                  })();
                  {
                    const x_i10399 = (() => {
                      {
                        const $t29450_i10398 = (() => {
                          {
                            const $t29449_i10397 = (() => {
                              {
                                const $t29447_i10395 = ($t29576 * 12.9898);
                                {
                                  const $t29448_i10396 = ($t29578 * 78.233);
                                  return ($t29447_i10395 + $t29448_i10396);
                                }
                              }
                            })();
                            return Math.sin($t29449_i10397);
                          }
                        })();
                        return ($t29450_i10398 * 43758.5453);
                      }
                    })();
                    {
                      const $t29451_i10401 = (() => {
                        {
                          const $t1582_i4080_i10400 = Math.floor(x_i10399);
                          return $t1582_i4080_i10400;
                        }
                      })();
                      return (x_i10399 - $t29451_i10401);
                    }
                  }
                }
              }
            })();
            return ($t29579 * 4.);
          }
        })();
        return Math.trunc($t29580);
      }
    })();
    return (2 + $t29581);
  }
}
const dot_count$clo = { _0: ($_, s) => dot_count(s) };

function draw_pulse_ring(ctx, s, pulse) {
  (() => {
    {
      const $t29588 = (0.1 * pulse);
      return Canvas$set_global_alpha(ctx, $t29588);
    }
  })();
  (() => {
    return Canvas$set_stroke_style(ctx, "#cfcfcf");
  })();
  (() => {
    {
      const $t29590 = (() => {
        {
          const $t29589 = (0.6 * pulse);
          return (1. + $t29589);
        }
      })();
      return Canvas$set_line_width(ctx, $t29590);
    }
  })();
  (() => {
    return Canvas$begin_path(ctx);
  })();
  (() => {
    {
      const $t29591 = s.x;
      {
        const $t29592 = s.y;
        {
          const $t29593 = s.capture_radius;
          return Canvas$arc(ctx, $t29591, $t29592, $t29593, 0., 6.28318530718);
        }
      }
    }
  })();
  return Canvas$stroke(ctx);
}
const draw_pulse_ring$clo = { _0: ($_, ctx, s, pulse) => draw_pulse_ring(ctx, s, pulse) };

function draw_pulse_halo(ctx, s, pulse) {
  (() => {
    {
      const $t29596 = (() => {
        {
          const $t29595 = (0.035 * pulse);
          return (0.025 + $t29595);
        }
      })();
      return Canvas$set_global_alpha(ctx, $t29596);
    }
  })();
  (() => {
    return Canvas$set_fill_style(ctx, "#ffffff");
  })();
  (() => {
    return Canvas$begin_path(ctx);
  })();
  (() => {
    {
      const $t29597 = s.x;
      {
        const $t29598 = s.y;
        {
          const $t29602 = (() => {
            {
              const $t29599 = s.radius;
              {
                const $t29601 = (() => {
                  {
                    const $t29600 = (0.9 * pulse);
                    return (1.6 + $t29600);
                  }
                })();
                return ($t29599 * $t29601);
              }
            }
          })();
          return Canvas$arc(ctx, $t29597, $t29598, $t29602, 0., 6.28318530718);
        }
      }
    }
  })();
  return Canvas$fill(ctx);
}
const draw_pulse_halo$clo = { _0: ($_, ctx, s, pulse) => draw_pulse_halo(ctx, s, pulse) };

function draw_pulse_particle(ctx, s, t, n, i) {
  {
    const $t29604 = (i >= n);
    if ($t29604 === true) {
      return {  };
    } else {
      return (() => {
        {
          const a = (() => {
            {
              const $t29608 = (() => {
                {
                  const $t29606 = (() => {
                    {
                      const $t29605 = (() => {
                        {
                          const $t29587_i10664 = (() => {
                            {
                              const $t29586_i10663 = (() => {
                                {
                                  const $t29583_i10653 = (() => {
                                    {
                                      const $t29582_i10652 = s.x;
                                      return ($t29582_i10652 + 5.);
                                    }
                                  })();
                                  {
                                    const $t29585_i10655 = (() => {
                                      {
                                        const $t29584_i10654 = s.y;
                                        return ($t29584_i10654 + 5.);
                                      }
                                    })();
                                    {
                                      const x_i10408_i10660 = (() => {
                                        {
                                          const $t29450_i10407_i10659 = (() => {
                                            {
                                              const $t29449_i10406_i10658 = (() => {
                                                {
                                                  const $t29447_i10404_i10656 = ($t29583_i10653 * 12.9898);
                                                  {
                                                    const $t29448_i10405_i10657 = ($t29585_i10655 * 78.233);
                                                    return ($t29447_i10404_i10656 + $t29448_i10405_i10657);
                                                  }
                                                }
                                              })();
                                              return Math.sin($t29449_i10406_i10658);
                                            }
                                          })();
                                          return ($t29450_i10407_i10659 * 43758.5453);
                                        }
                                      })();
                                      {
                                        const $t29451_i10410_i10662 = (() => {
                                          {
                                            const $t1582_i4080_i10409_i10661 = Math.floor(x_i10408_i10660);
                                            return $t1582_i4080_i10409_i10661;
                                          }
                                        })();
                                        return (x_i10408_i10660 - $t29451_i10410_i10662);
                                      }
                                    }
                                  }
                                }
                              })();
                              return ($t29586_i10663 * 2.4);
                            }
                          })();
                          return (0.4 + $t29587_i10664);
                        }
                      })();
                      return (t * $t29605);
                    }
                  })();
                  {
                    const $t29607 = (() => {
                      {
                        const $t29573_i10650 = (() => {
                          {
                            const $t29570_i10640 = (() => {
                              {
                                const $t29569_i10639 = s.x;
                                return ($t29569_i10639 + 3.);
                              }
                            })();
                            {
                              const $t29572_i10642 = (() => {
                                {
                                  const $t29571_i10641 = s.y;
                                  return ($t29571_i10641 + 3.);
                                }
                              })();
                              {
                                const x_i10390_i10647 = (() => {
                                  {
                                    const $t29450_i10389_i10646 = (() => {
                                      {
                                        const $t29449_i10388_i10645 = (() => {
                                          {
                                            const $t29447_i10386_i10643 = ($t29570_i10640 * 12.9898);
                                            {
                                              const $t29448_i10387_i10644 = ($t29572_i10642 * 78.233);
                                              return ($t29447_i10386_i10643 + $t29448_i10387_i10644);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29449_i10388_i10645);
                                      }
                                    })();
                                    return ($t29450_i10389_i10646 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29451_i10392_i10649 = (() => {
                                    {
                                      const $t1582_i4080_i10391_i10648 = Math.floor(x_i10390_i10647);
                                      return $t1582_i4080_i10391_i10648;
                                    }
                                  })();
                                  return (x_i10390_i10647 - $t29451_i10392_i10649);
                                }
                              }
                            }
                          }
                        })();
                        return ($t29573_i10650 * 6.28318530718);
                      }
                    })();
                    return ($t29606 + $t29607);
                  }
                }
              })();
              {
                const $t29613 = (() => {
                  {
                    const $t29609 = i;
                    {
                      const $t29612 = (() => {
                        {
                          const $t29611 = n;
                          return (6.28318530718 / $t29611);
                        }
                      })();
                      return ($t29609 * $t29612);
                    }
                  }
                })();
                return ($t29608 + $t29613);
              }
            }
          })();
          {
            const r = (() => {
              {
                const $t29614 = s.radius;
                return ($t29614 * 1.8);
              }
            })();
            {
              const px = (() => {
                {
                  const $t29615 = s.x;
                  {
                    const $t29617 = (() => {
                      {
                        const $t29616 = Math.cos(a);
                        return ($t29616 * r);
                      }
                    })();
                    return ($t29615 + $t29617);
                  }
                }
              })();
              {
                const py = (() => {
                  {
                    const $t29618 = s.y;
                    {
                      const $t29620 = (() => {
                        {
                          const $t29619 = Math.sin(a);
                          return ($t29619 * r);
                        }
                      })();
                      return ($t29618 + $t29620);
                    }
                  }
                })();
                (() => {
                  return Canvas$set_global_alpha(ctx, 0.14);
                })();
                (() => {
                  return Canvas$set_fill_style(ctx, "#cfcfcf");
                })();
                (() => {
                  return Canvas$begin_path(ctx);
                })();
                (() => {
                  return Canvas$arc(ctx, px, py, 1.3, 0., 6.28318530718);
                })();
                (() => {
                  return Canvas$fill(ctx);
                })();
                {
                  const $t29622 = (i + 1);
                  return draw_pulse_particle(ctx, s, t, n, $t29622);
                }
              }
            }
          }
        }
      })();
    }
  }
}
const draw_pulse_particle$clo = { _0: ($_, ctx, s, t, n, i) => draw_pulse_particle(ctx, s, t, n, i) };

function draw_orbit_rings(ctx, s, orbits) {
  switch (orbits.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29631 = orbits._0;
      const $f29632 = orbits._1;
      {
        const $jp_clo29638 = (() => {
          return { $: "$Clo_$jp29637$3793", _0: $jp29637$apply$3793, _1: $f29631, _2: $f29632, _3: ctx, _4: s };
        })();
        switch ($f29632.$) {
          case "Nil": {
            {
              const o = $f29631;
              (() => {
                return Canvas$set_global_alpha(ctx, 0.28);
              })();
              (() => {
                return Canvas$set_stroke_style(ctx, "#9a9a9a");
              })();
              (() => {
                return Canvas$set_line_width(ctx, 1.);
              })();
              (() => {
                return Canvas$begin_path(ctx);
              })();
              (() => {
                {
                  const $t29623 = s.x;
                  {
                    const $t29624 = s.y;
                    {
                      const $t29625 = o.radius;
                      return Canvas$arc(ctx, $t29623, $t29624, $t29625, 0., 6.28318530718);
                    }
                  }
                }
              })();
              return Canvas$stroke(ctx);
            }
            break;
          }
          default: {
            return $jp29637$apply$3793($jp_clo29638);
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_orbit_rings$clo = { _0: ($_, ctx, s, orbits) => draw_orbit_rings(ctx, s, orbits) };

function star_targeted(s, aim) {
  switch (aim.$) {
    case "None": {
      return false;
      break;
    }
    case "Some": {
      const $f29654 = aim._0;
      {
        const a = (() => {
          return $f29654;
        })();
        {
          const px = a._0;
          {
            const py = a._1;
            {
              const vx = a._2;
              {
                const vy = a._3;
                {
                  const dx = (() => {
                    {
                      const $t29641 = s.x;
                      return ($t29641 - px);
                    }
                  })();
                  {
                    const dy = (() => {
                      {
                        const $t29642 = s.y;
                        return ($t29642 - py);
                      }
                    })();
                    {
                      const range = (() => {
                        {
                          const $t29643 = s.capture_radius;
                          return ($t29643 * 4.);
                        }
                      })();
                      {
                        const $t29647 = (() => {
                          {
                            const $t29646 = (() => {
                              {
                                const $t29644 = (vx * dx);
                                {
                                  const $t29645 = (vy * dy);
                                  return ($t29644 + $t29645);
                                }
                              }
                            })();
                            return ($t29646 > 0.);
                          }
                        })();
                        {
                          const $t29652 = (() => {
                            {
                              const $t29650 = (() => {
                                {
                                  const $t29648 = (dx * dx);
                                  {
                                    const $t29649 = (dy * dy);
                                    return ($t29648 + $t29649);
                                  }
                                }
                              })();
                              {
                                const $t29651 = (range * range);
                                return ($t29650 < $t29651);
                              }
                            }
                          })();
                          return ($t29647 && $t29652);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const star_targeted$clo = { _0: ($_, s, aim) => star_targeted(s, aim) };

function draw_target_pulse(ctx, s, t) {
  {
    const pulse = (() => {
      {
        const $t29657 = (() => {
          {
            const $t29656 = (() => {
              {
                const $t29655 = (t * 6.);
                return Math.sin($t29655);
              }
            })();
            return (0.5 * $t29656);
          }
        })();
        return (0.5 + $t29657);
      }
    })();
    (() => {
      {
        const $t29659 = (() => {
          {
            const $t29658 = (0.45 * pulse);
            return (0.3 + $t29658);
          }
        })();
        return Canvas$set_global_alpha(ctx, $t29659);
      }
    })();
    (() => {
      return Canvas$set_stroke_style(ctx, "#ffffff");
    })();
    (() => {
      {
        const $t29661 = (() => {
          {
            const $t29660 = (1.6 * pulse);
            return (1.2 + $t29660);
          }
        })();
        return Canvas$set_line_width(ctx, $t29661);
      }
    })();
    (() => {
      return Canvas$begin_path(ctx);
    })();
    (() => {
      {
        const $t29662 = s.x;
        {
          const $t29663 = s.y;
          {
            const $t29664 = s.capture_radius;
            return Canvas$arc(ctx, $t29662, $t29663, $t29664, 0., 6.28318530718);
          }
        }
      }
    })();
    return Canvas$stroke(ctx);
  }
}
const draw_target_pulse$clo = { _0: ($_, ctx, s, t) => draw_target_pulse(ctx, s, t) };

function draw_star(ctx, s, t, aim) {
  (() => {
    {
      const $t29666 = s.orbits;
      return draw_orbit_rings(ctx, s, $t29666);
    }
  })();
  (() => {
    {
      const $t29667 = (() => {
        {
          const $t29556_i10702 = (() => {
            {
              const $t29554_i10693 = s.x;
              {
                const $t29555_i10694 = s.y;
                {
                  const x_i10363_i10699 = (() => {
                    {
                      const $t29450_i10362_i10698 = (() => {
                        {
                          const $t29449_i10361_i10697 = (() => {
                            {
                              const $t29447_i10359_i10695 = ($t29554_i10693 * 12.9898);
                              {
                                const $t29448_i10360_i10696 = ($t29555_i10694 * 78.233);
                                return ($t29447_i10359_i10695 + $t29448_i10360_i10696);
                              }
                            }
                          })();
                          return Math.sin($t29449_i10361_i10697);
                        }
                      })();
                      return ($t29450_i10362_i10698 * 43758.5453);
                    }
                  })();
                  {
                    const $t29451_i10365_i10701 = (() => {
                      {
                        const $t1582_i4080_i10364_i10700 = Math.floor(x_i10363_i10699);
                        return $t1582_i4080_i10364_i10700;
                      }
                    })();
                    return (x_i10363_i10699 - $t29451_i10365_i10701);
                  }
                }
              }
            }
          })();
          return ($t29556_i10702 < 0.8);
        }
      })();
      if ($t29667 === true) {
        return (() => {
          {
            const pulse = (() => {
              {
                const $t29673 = (() => {
                  {
                    const $t29672 = (() => {
                      {
                        const $t29671 = (() => {
                          {
                            const $t29669 = (() => {
                              {
                                const $t29668 = (() => {
                                  {
                                    const $t29568_i10691 = (() => {
                                      {
                                        const $t29567_i10690 = (() => {
                                          {
                                            const $t29564_i10680 = (() => {
                                              {
                                                const $t29563_i10679 = s.x;
                                                return ($t29563_i10679 + 2.);
                                              }
                                            })();
                                            {
                                              const $t29566_i10682 = (() => {
                                                {
                                                  const $t29565_i10681 = s.y;
                                                  return ($t29565_i10681 + 2.);
                                                }
                                              })();
                                              {
                                                const x_i10381_i10687 = (() => {
                                                  {
                                                    const $t29450_i10380_i10686 = (() => {
                                                      {
                                                        const $t29449_i10379_i10685 = (() => {
                                                          {
                                                            const $t29447_i10377_i10683 = ($t29564_i10680 * 12.9898);
                                                            {
                                                              const $t29448_i10378_i10684 = ($t29566_i10682 * 78.233);
                                                              return ($t29447_i10377_i10683 + $t29448_i10378_i10684);
                                                            }
                                                          }
                                                        })();
                                                        return Math.sin($t29449_i10379_i10685);
                                                      }
                                                    })();
                                                    return ($t29450_i10380_i10686 * 43758.5453);
                                                  }
                                                })();
                                                {
                                                  const $t29451_i10383_i10689 = (() => {
                                                    {
                                                      const $t1582_i4080_i10382_i10688 = Math.floor(x_i10381_i10687);
                                                      return $t1582_i4080_i10382_i10688;
                                                    }
                                                  })();
                                                  return (x_i10381_i10687 - $t29451_i10383_i10689);
                                                }
                                              }
                                            }
                                          }
                                        })();
                                        return ($t29567_i10690 * 1.8);
                                      }
                                    })();
                                    return (0.6 + $t29568_i10691);
                                  }
                                })();
                                return (t * $t29668);
                              }
                            })();
                            {
                              const $t29670 = (() => {
                                {
                                  const $t29573_i10677 = (() => {
                                    {
                                      const $t29570_i10667 = (() => {
                                        {
                                          const $t29569_i10666 = s.x;
                                          return ($t29569_i10666 + 3.);
                                        }
                                      })();
                                      {
                                        const $t29572_i10669 = (() => {
                                          {
                                            const $t29571_i10668 = s.y;
                                            return ($t29571_i10668 + 3.);
                                          }
                                        })();
                                        {
                                          const x_i10390_i10674 = (() => {
                                            {
                                              const $t29450_i10389_i10673 = (() => {
                                                {
                                                  const $t29449_i10388_i10672 = (() => {
                                                    {
                                                      const $t29447_i10386_i10670 = ($t29570_i10667 * 12.9898);
                                                      {
                                                        const $t29448_i10387_i10671 = ($t29572_i10669 * 78.233);
                                                        return ($t29447_i10386_i10670 + $t29448_i10387_i10671);
                                                      }
                                                    }
                                                  })();
                                                  return Math.sin($t29449_i10388_i10672);
                                                }
                                              })();
                                              return ($t29450_i10389_i10673 * 43758.5453);
                                            }
                                          })();
                                          {
                                            const $t29451_i10392_i10676 = (() => {
                                              {
                                                const $t1582_i4080_i10391_i10675 = Math.floor(x_i10390_i10674);
                                                return $t1582_i4080_i10391_i10675;
                                              }
                                            })();
                                            return (x_i10390_i10674 - $t29451_i10392_i10676);
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  return ($t29573_i10677 * 6.28318530718);
                                }
                              })();
                              return ($t29669 + $t29670);
                            }
                          }
                        })();
                        return Math.sin($t29671);
                      }
                    })();
                    return (0.5 * $t29672);
                  }
                })();
                return (0.5 + $t29673);
              }
            })();
            {
              const $t29674 = pulse_style(s);
              if ($t29674 === 0) {
                return (() => {
                  {
                    const $jp_clo29677 = (() => {
                      return { $: "$Clo_$jp29676$3796", _0: $jp29676$apply$3796, _1: ctx, _2: s, _3: t };
                    })();
                    return draw_pulse_ring(ctx, s, pulse);
                  }
                })();
              } else if ($t29674 === 1) {
                return (() => {
                  {
                    const $jp_clo29679 = (() => {
                      return { $: "$Clo_$jp29678$3797", _0: $jp29678$apply$3797, _1: ctx, _2: s, _3: t };
                    })();
                    return draw_pulse_halo(ctx, s, pulse);
                  }
                })();
              } else {
                return (() => {
                  {
                    const $t29675 = dot_count(s);
                    return draw_pulse_particle(ctx, s, t, $t29675, 0);
                  }
                })();
              }
            }
          }
        })();
      } else {
        return {  };
      }
    }
  })();
  (() => {
    {
      const $t29680 = star_targeted(s, aim);
      if ($t29680 === true) {
        return (() => {
          return draw_target_pulse(ctx, s, t);
        })();
      } else {
        return {  };
      }
    }
  })();
  (() => {
    return Canvas$set_global_alpha(ctx, 1.);
  })();
  (() => {
    return Canvas$set_fill_style(ctx, "#f2f2f2");
  })();
  (() => {
    return Canvas$begin_path(ctx);
  })();
  (() => {
    {
      const $t29681 = s.x;
      {
        const $t29682 = s.y;
        {
          const $t29683 = s.radius;
          return Canvas$arc(ctx, $t29681, $t29682, $t29683, 0., 6.28318530718);
        }
      }
    }
  })();
  return Canvas$fill(ctx);
}
const draw_star$clo = { _0: ($_, ctx, s, t, aim) => draw_star(ctx, s, t, aim) };

function bg_hash(gx, gy, seed) {
  {
    const fx = gx;
    {
      const fy = gy;
      {
        const h1 = (() => {
          {
            const $t29691 = (() => {
              {
                const $t29690 = (seed * 37.719);
                return (fx + $t29690);
              }
            })();
            {
              const $t29693 = (() => {
                {
                  const $t29692 = (seed * 12.9898);
                  return (fy - $t29692);
                }
              })();
              {
                const x_i10435 = (() => {
                  {
                    const $t29688_i10434 = (() => {
                      {
                        const $t29687_i10433 = (() => {
                          {
                            const $t29685_i10431 = ($t29691 * 12.9898);
                            {
                              const $t29686_i10432 = ($t29693 * 78.233);
                              return ($t29685_i10431 + $t29686_i10432);
                            }
                          }
                        })();
                        return Math.sin($t29687_i10433);
                      }
                    })();
                    return ($t29688_i10434 * 43758.5453);
                  }
                })();
                {
                  const $t29689_i10437 = (() => {
                    {
                      const $t1582_i4111_i10436 = Math.floor(x_i10435);
                      return $t1582_i4111_i10436;
                    }
                  })();
                  return (x_i10435 - $t29689_i10437);
                }
              }
            }
          }
        })();
        {
          const h2 = (() => {
            {
              const $t29696 = (() => {
                {
                  const $t29694 = (fy * 3.271);
                  {
                    const $t29695 = (seed * 71.238);
                    return ($t29694 - $t29695);
                  }
                }
              })();
              {
                const $t29699 = (() => {
                  {
                    const $t29697 = (fx * 1.373);
                    {
                      const $t29698 = (seed * 5.113);
                      return ($t29697 + $t29698);
                    }
                  }
                })();
                {
                  const x_i10426 = (() => {
                    {
                      const $t29688_i10425 = (() => {
                        {
                          const $t29687_i10424 = (() => {
                            {
                              const $t29685_i10422 = ($t29696 * 12.9898);
                              {
                                const $t29686_i10423 = ($t29699 * 78.233);
                                return ($t29685_i10422 + $t29686_i10423);
                              }
                            }
                          })();
                          return Math.sin($t29687_i10424);
                        }
                      })();
                      return ($t29688_i10425 * 43758.5453);
                    }
                  })();
                  {
                    const $t29689_i10428 = (() => {
                      {
                        const $t1582_i4111_i10427 = Math.floor(x_i10426);
                        return $t1582_i4111_i10427;
                      }
                    })();
                    return (x_i10426 - $t29689_i10428);
                  }
                }
              }
            }
          })();
          {
            const $t29702 = (() => {
              {
                const $t29700 = (h1 * 269.5);
                {
                  const $t29701 = (h2 * 183.3);
                  return ($t29700 + $t29701);
                }
              }
            })();
            {
              const $t29706 = (() => {
                {
                  const $t29705 = (() => {
                    {
                      const $t29703 = (fx * 0.618);
                      {
                        const $t29704 = (fy * 0.573);
                        return ($t29703 + $t29704);
                      }
                    }
                  })();
                  return ($t29705 + seed);
                }
              })();
              {
                const x_i10417 = (() => {
                  {
                    const $t29688_i10416 = (() => {
                      {
                        const $t29687_i10415 = (() => {
                          {
                            const $t29685_i10413 = ($t29702 * 12.9898);
                            {
                              const $t29686_i10414 = ($t29706 * 78.233);
                              return ($t29685_i10413 + $t29686_i10414);
                            }
                          }
                        })();
                        return Math.sin($t29687_i10415);
                      }
                    })();
                    return ($t29688_i10416 * 43758.5453);
                  }
                })();
                {
                  const $t29689_i10419 = (() => {
                    {
                      const $t1582_i4111_i10418 = Math.floor(x_i10417);
                      return $t1582_i4111_i10418;
                    }
                  })();
                  return (x_i10417 - $t29689_i10419);
                }
              }
            }
          }
        }
      }
    }
  }
}
const bg_hash$clo = { _0: ($_, gx, gy, seed) => bg_hash(gx, gy, seed) };

function draw_bg_cell(ctx, gx, gy, cell, seed, t) {
  {
    const h = bg_hash(gx, gy, seed);
    {
      const $t29708 = (h > 0.5);
      if ($t29708 === true) {
        return {  };
      } else {
        return (() => {
          {
            const jx = (() => {
              {
                const $t29709 = (gy + 1000);
                return bg_hash(gx, $t29709, seed);
              }
            })();
            {
              const jy = (() => {
                {
                  const $t29710 = (gx + 1000);
                  return bg_hash($t29710, gy, seed);
                }
              })();
              {
                const x = (() => {
                  {
                    const $t29712 = (() => {
                      {
                        const $t29711 = gx;
                        return ($t29711 * cell);
                      }
                    })();
                    {
                      const $t29713 = (jx * cell);
                      return ($t29712 + $t29713);
                    }
                  }
                })();
                {
                  const y = (() => {
                    {
                      const $t29715 = (() => {
                        {
                          const $t29714 = gy;
                          return ($t29714 * cell);
                        }
                      })();
                      {
                        const $t29716 = (jy * cell);
                        return ($t29715 + $t29716);
                      }
                    }
                  })();
                  {
                    const br = (() => {
                      {
                        const $t29720 = (() => {
                          {
                            const $t29719 = (() => {
                              {
                                const $t29717 = (gx + 2000);
                                {
                                  const $t29718 = (gy + 2000);
                                  return bg_hash($t29717, $t29718, seed);
                                }
                              }
                            })();
                            return (0.45 * $t29719);
                          }
                        })();
                        return (0.12 + $t29720);
                      }
                    })();
                    {
                      const st = (() => {
                        {
                          const $t29721 = (gx - 2000);
                          {
                            const $t29722 = (gy - 2000);
                            return bg_hash($t29721, $t29722, seed);
                          }
                        }
                      })();
                      {
                        const sz = (() => {
                          {
                            const $t29724 = (() => {
                              {
                                const $t29723 = (1.8 * st);
                                return ($t29723 * st);
                              }
                            })();
                            return (1. + $t29724);
                          }
                        })();
                        {
                          const is_pulsing = (() => {
                            {
                              const $t29727 = (() => {
                                {
                                  const $t29725 = (gx + 3000);
                                  {
                                    const $t29726 = (gy + 3000);
                                    return bg_hash($t29725, $t29726, seed);
                                  }
                                }
                              })();
                              return ($t29727 < 0.04);
                            }
                          })();
                          {
                            let pulse;
                            if (is_pulsing === true) {
                              pulse = (() => {
                                {
                                  const speed = (() => {
                                    {
                                      const $t29731 = (() => {
                                        {
                                          const $t29730 = (() => {
                                            {
                                              const $t29729 = (gx + 4000);
                                              return bg_hash($t29729, gy, seed);
                                            }
                                          })();
                                          return (0.45 * $t29730);
                                        }
                                      })();
                                      return (0.35 + $t29731);
                                    }
                                  })();
                                  {
                                    const phase = (() => {
                                      {
                                        const $t29733 = (() => {
                                          {
                                            const $t29732 = (gy + 4000);
                                            return bg_hash(gx, $t29732, seed);
                                          }
                                        })();
                                        return ($t29733 * 6.28318530718);
                                      }
                                    })();
                                    {
                                      const $t29738 = (() => {
                                        {
                                          const $t29737 = (() => {
                                            {
                                              const $t29736 = (() => {
                                                {
                                                  const $t29735 = (t * speed);
                                                  return ($t29735 + phase);
                                                }
                                              })();
                                              return Math.sin($t29736);
                                            }
                                          })();
                                          return (0.5 * $t29737);
                                        }
                                      })();
                                      return (0.5 + $t29738);
                                    }
                                  }
                                }
                              })();
                            } else {
                              pulse = 0.;
                            }
                            {
                              let br2;
                              if (is_pulsing === true) {
                                br2 = (() => {
                                  {
                                    const $t29741 = (() => {
                                      {
                                        const $t29740 = (() => {
                                          {
                                            const $t29739 = (1. - br);
                                            return ($t29739 * 0.6);
                                          }
                                        })();
                                        return ($t29740 * pulse);
                                      }
                                    })();
                                    return (br + $t29741);
                                  }
                                })();
                              } else {
                                br2 = br;
                              }
                              {
                                let sz2;
                                if (is_pulsing === true) {
                                  sz2 = (() => {
                                    {
                                      const $t29743 = (() => {
                                        {
                                          const $t29742 = (0.35 * pulse);
                                          return (1. + $t29742);
                                        }
                                      })();
                                      return (sz * $t29743);
                                    }
                                  })();
                                } else {
                                  sz2 = sz;
                                }
                                (() => {
                                  return Canvas$set_global_alpha(ctx, br2);
                                })();
                                (() => {
                                  return Canvas$begin_path(ctx);
                                })();
                                (() => {
                                  return Canvas$arc(ctx, x, y, sz2, 0., 6.28318530718);
                                })();
                                return Canvas$fill(ctx);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        })();
      }
    }
  }
}
const draw_bg_cell$clo = { _0: ($_, ctx, gx, gy, cell, seed, t) => draw_bg_cell(ctx, gx, gy, cell, seed, t) };

function draw_bg_row(ctx, gx, gx_max, gy, cell, seed, t) {
  {
    const $t29745 = (gx > gx_max);
    if ($t29745 === true) {
      return {  };
    } else {
      return (() => {
        (() => {
          return draw_bg_cell(ctx, gx, gy, cell, seed, t);
        })();
        {
          const $t29746 = (gx + 1);
          return draw_bg_row(ctx, $t29746, gx_max, gy, cell, seed, t);
        }
      })();
    }
  }
}
const draw_bg_row$clo = { _0: ($_, ctx, gx, gx_max, gy, cell, seed, t) => draw_bg_row(ctx, gx, gx_max, gy, cell, seed, t) };

function draw_bg_rows(ctx, gx0, gx1, gy, gy_max, cell, seed, t) {
  {
    const $t29747 = (gy > gy_max);
    if ($t29747 === true) {
      return {  };
    } else {
      return (() => {
        (() => {
          return draw_bg_row(ctx, gx0, gx1, gy, cell, seed, t);
        })();
        {
          const $t29748 = (gy + 1);
          return draw_bg_rows(ctx, gx0, gx1, $t29748, gy_max, cell, seed, t);
        }
      })();
    }
  }
}
const draw_bg_rows$clo = { _0: ($_, ctx, gx0, gx1, gy, gy_max, cell, seed, t) => draw_bg_rows(ctx, gx0, gx1, gy, gy_max, cell, seed, t) };

function draw_starfield(ctx, cam_x, cam, view_w, view_h, seed, t) {
  {
    const gx0 = (() => {
      {
        const $t29751 = (() => {
          {
            const $t29750 = (() => {
              {
                const $t29749 = (cam_x / 70.);
                {
                  const $t1582_i4121 = Math.floor($t29749);
                  return $t1582_i4121;
                }
              }
            })();
            return Math.trunc($t29750);
          }
        })();
        return ($t29751 - 1);
      }
    })();
    {
      const gx1 = (() => {
        {
          const $t29755 = (() => {
            {
              const $t29754 = (() => {
                {
                  const $t29753 = (() => {
                    {
                      const $t29752 = (cam_x + view_w);
                      return ($t29752 / 70.);
                    }
                  })();
                  {
                    const $t1582_i4119 = Math.floor($t29753);
                    return $t1582_i4119;
                  }
                }
              })();
              return Math.trunc($t29754);
            }
          })();
          return ($t29755 + 1);
        }
      })();
      {
        const gy0 = (() => {
          {
            const $t29758 = (() => {
              {
                const $t29757 = (() => {
                  {
                    const $t29756 = (cam / 70.);
                    {
                      const $t1582_i4117 = Math.floor($t29756);
                      return $t1582_i4117;
                    }
                  }
                })();
                return Math.trunc($t29757);
              }
            })();
            return ($t29758 - 1);
          }
        })();
        {
          const gy1 = (() => {
            {
              const $t29762 = (() => {
                {
                  const $t29761 = (() => {
                    {
                      const $t29760 = (() => {
                        {
                          const $t29759 = (cam + view_h);
                          return ($t29759 / 70.);
                        }
                      })();
                      {
                        const $t1582_i4115 = Math.floor($t29760);
                        return $t1582_i4115;
                      }
                    }
                  })();
                  return Math.trunc($t29761);
                }
              })();
              return ($t29762 + 1);
            }
          })();
          (() => {
            return Canvas$set_fill_style(ctx, "#ffffff");
          })();
          (() => {
            return draw_bg_rows(ctx, gx0, gx1, gy0, gy1, 70., seed, t);
          })();
          return Canvas$set_global_alpha(ctx, 1.);
        }
      }
    }
  }
}
const draw_starfield$clo = { _0: ($_, ctx, cam_x, cam, view_w, view_h, seed, t) => draw_starfield(ctx, cam_x, cam, view_w, view_h, seed, t) };

function to_screen_clouds(clouds, cam_x, cam_y) {
  switch (clouds.$) {
    case "Nil": {
      return { $: "Nil" };
      break;
    }
    case "Cons": {
      const $f29774 = clouds._0;
      const $f29775 = clouds._1;
      {
        const rest = $f29775;
        {
          const c = $f29774;
          {
            const $t29772 = (() => {
              {
                const $t29764 = (() => {
                  {
                    const $t29763 = c.x;
                    return ($t29763 - cam_x);
                  }
                })();
                {
                  const $t29766 = (() => {
                    {
                      const $t29765 = c.y;
                      return ($t29765 - cam_y);
                    }
                  })();
                  {
                    const $t29767 = c.radius;
                    {
                      const $t29768 = c.strength;
                      {
                        const $t29771 = (() => {
                          {
                            const $t29769 = c.x;
                            {
                              const $t29770 = c.y;
                              {
                                const x_i10444 = (() => {
                                  {
                                    const $t29450_i10443 = (() => {
                                      {
                                        const $t29449_i10442 = (() => {
                                          {
                                            const $t29447_i10440 = ($t29769 * 12.9898);
                                            {
                                              const $t29448_i10441 = ($t29770 * 78.233);
                                              return ($t29447_i10440 + $t29448_i10441);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29449_i10442);
                                      }
                                    })();
                                    return ($t29450_i10443 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29451_i10446 = (() => {
                                    {
                                      const $t1582_i4080_i10445 = Math.floor(x_i10444);
                                      return $t1582_i4080_i10445;
                                    }
                                  })();
                                  return (x_i10444 - $t29451_i10446);
                                }
                              }
                            }
                          }
                        })();
                        return ({ x: $t29764, y: $t29766, radius: $t29767, strength: $t29768, seed: $t29771 });
                      }
                    }
                  }
                }
              }
            })();
            {
              const $t29773 = to_screen_clouds(rest, cam_x, cam_y);
              return { $: "Cons", _0: $t29772, _1: $t29773 };
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const to_screen_clouds$clo = { _0: ($_, clouds, cam_x, cam_y) => to_screen_clouds(clouds, cam_x, cam_y) };

function draw_nebula_gl(ctx, gl_opt, game, seed) {
  switch (gl_opt.$) {
    case "None": {
      return {  };
      break;
    }
    case "Some": {
      const $f29788 = gl_opt._0;
      {
        const gl = $f29788;
        {
          const $t29780 = game.stars;
          {
            const $t29781 = game.camera_y;
            {
              const $t29782 = game.view_h;
              {
                const clouds = (() => {
                  {
                    const margin_i10451 = (700. + 90.);
                    {
                      const $t29200_i10452 = { $: "Nil" };
                      {
                        const $t29201_i10453 = Perihelion$Nebula$filter_visible($t29780, $t29781, $t29782, margin_i10451, $t29200_i10452);
                        {
                          const $t29202_i10454 = { $: "Nil" };
                          return Perihelion$Nebula$collect_star_clouds($t29201_i10453, seed, $t29202_i10454);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t29783 = game.camera_x;
                  {
                    const $t29784 = game.camera_y;
                    {
                      const screen_clouds = to_screen_clouds(clouds, $t29783, $t29784);
                      (() => {
                        {
                          const $t29785 = game.view_w;
                          {
                            const $t29786 = game.view_h;
                            return WebGL$draw_nebula(gl, screen_clouds, $t29785, $t29786, seed);
                          }
                        }
                      })();
                      {
                        const $t29787 = WebGL$canvas_node(gl);
                        return Canvas$draw_node(ctx, $t29787, 0., 0.);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_nebula_gl$clo = { _0: ($_, ctx, gl_opt, game, seed) => draw_nebula_gl(ctx, gl_opt, game, seed) };

function draw_stars(ctx, stars, cam, view_h, t, aim) {
  switch (stars.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29797 = stars._0;
      const $f29798 = stars._1;
      {
        const rest = $f29798;
        {
          const s = $f29797;
          (() => {
            {
              const $t29796 = (() => {
                {
                  const $t29792 = (() => {
                    {
                      const $t29789 = s.y;
                      {
                        const $t29791 = (() => {
                          {
                            const $t29790 = (cam + view_h);
                            return ($t29790 + 100.);
                          }
                        })();
                        return ($t29789 < $t29791);
                      }
                    }
                  })();
                  {
                    const $t29795 = (() => {
                      {
                        const $t29793 = s.y;
                        {
                          const $t29794 = (cam - 100.);
                          return ($t29793 > $t29794);
                        }
                      }
                    })();
                    return ($t29792 && $t29795);
                  }
                }
              })();
              if ($t29796 === true) {
                return (() => {
                  return draw_star(ctx, s, t, aim);
                })();
              } else {
                return {  };
              }
            }
          })();
          return draw_stars(ctx, rest, cam, view_h, t, aim);
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_stars$clo = { _0: ($_, ctx, stars, cam, view_h, t, aim) => draw_stars(ctx, stars, cam, view_h, t, aim) };

function asteroid_vertex(a, i) {
  {
    const angle = (() => {
      {
        const $t29809 = i;
        {
          const $t29811 = (6.28318530718 / 8.);
          return ($t29809 * $t29811);
        }
      }
    })();
    {
      const jitter = (() => {
        {
          const $t29814 = (() => {
            {
              const $t29813 = (() => {
                {
                  const $t29812 = a.shape_seed;
                  {
                    const x_i10462 = (() => {
                      {
                        const $t29807_i10461 = (() => {
                          {
                            const $t29806_i10460 = (() => {
                              {
                                const $t29803_i10457 = ($t29812 * 12.9898);
                                {
                                  const $t29805_i10459 = (() => {
                                    {
                                      const $t29804_i10458 = i;
                                      return ($t29804_i10458 * 78.233);
                                    }
                                  })();
                                  return ($t29803_i10457 + $t29805_i10459);
                                }
                              }
                            })();
                            return Math.sin($t29806_i10460);
                          }
                        })();
                        return ($t29807_i10461 * 43758.5453);
                      }
                    })();
                    {
                      const $t29808_i10464 = (() => {
                        {
                          const $t1582_i4126_i10463 = Math.floor(x_i10462);
                          return $t1582_i4126_i10463;
                        }
                      })();
                      return (x_i10462 - $t29808_i10464);
                    }
                  }
                }
              })();
              return (0.6 * $t29813);
            }
          })();
          return (0.7 + $t29814);
        }
      })();
      {
        const r = (() => {
          {
            const $t29815 = a.radius;
            return ($t29815 * jitter);
          }
        })();
        {
          const pt = (() => {
            {
              const $t29819 = (() => {
                {
                  const $t29816 = a.x;
                  {
                    const $t29818 = (() => {
                      {
                        const $t29817 = Math.cos(angle);
                        return ($t29817 * r);
                      }
                    })();
                    return ($t29816 + $t29818);
                  }
                }
              })();
              {
                const $t29823 = (() => {
                  {
                    const $t29820 = a.y;
                    {
                      const $t29822 = (() => {
                        {
                          const $t29821 = Math.sin(angle);
                          return ($t29821 * r);
                        }
                      })();
                      return ($t29820 + $t29822);
                    }
                  }
                })();
                return { _0: $t29819, _1: $t29823 };
              }
            }
          })();
          return pt;
        }
      }
    }
  }
}
const asteroid_vertex$clo = { _0: ($_, a, i) => asteroid_vertex(a, i) };

function draw_asteroid_edges(ctx, a, i) {
  {
    const $t29824 = (i > 7);
    if ($t29824 === true) {
      return (() => {
        (() => {
          return Canvas$close_path(ctx);
        })();
        return Canvas$fill(ctx);
      })();
    } else {
      return (() => {
        {
          const pt = asteroid_vertex(a, i);
          {
            const px = pt._0;
            {
              const py = pt._1;
              (() => {
                if (i === 0) {
                  return (() => {
                    {
                      const $jp_clo29826 = (() => {
                        return { $: "$Clo_$jp29825$3800", _0: $jp29825$apply$3800, _1: ctx, _2: px, _3: py };
                      })();
                      return Canvas$move_to(ctx, px, py);
                    }
                  })();
                } else {
                  return (() => {
                    return Canvas$line_to(ctx, px, py);
                  })();
                }
              })();
              {
                const $t29827 = (i + 1);
                return draw_asteroid_edges(ctx, a, $t29827);
              }
            }
          }
        }
      })();
    }
  }
}
const draw_asteroid_edges$clo = { _0: ($_, ctx, a, i) => draw_asteroid_edges(ctx, a, i) };

function draw_asteroids(ctx, asteroids) {
  switch (asteroids.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29836 = asteroids._0;
      const $f29837 = asteroids._1;
      {
        const rest = (() => {
          return $f29837;
        })();
        {
          const a = (() => {
            return $f29836;
          })();
          {
            const color = (() => {
              {
                const $t29829 = a.mode;
                switch ($t29829.$) {
                  case "AsteroidDrifting": {
                    return "#8a8a94";
                    break;
                  }
                  case "AsteroidOrbiting": {
                    const $f29830 = $t29829._0;
                    const $f29831 = $t29829._1;
                    return "#e8e8e8";
                    break;
                  }
                  default: {
                    return (() => { throw new Error("non-exhaustive pattern match"); })();
                  }
                }
              }
            })();
            (() => {
              return Canvas$set_fill_style(ctx, color);
            })();
            (() => {
              return Canvas$begin_path(ctx);
            })();
            (() => {
              return draw_asteroid_edges(ctx, a, 0);
            })();
            return draw_asteroids(ctx, rest);
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_asteroids$clo = { _0: ($_, ctx, asteroids) => draw_asteroids(ctx, asteroids) };

function draw_shots(ctx, shots, color, r) {
  switch (shots.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29845 = shots._0;
      const $f29846 = shots._1;
      {
        const rest = (() => {
          return $f29846;
        })();
        {
          const s = (() => {
            return $f29845;
          })();
          (() => {
            return Canvas$set_fill_style(ctx, color);
          })();
          (() => {
            return Canvas$begin_path(ctx);
          })();
          (() => {
            {
              const $t29842 = s.x;
              {
                const $t29843 = s.y;
                return Canvas$arc(ctx, $t29842, $t29843, r, 0., 6.28318530718);
              }
            }
          })();
          (() => {
            return Canvas$fill(ctx);
          })();
          return draw_shots(ctx, rest, color, r);
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_shots$clo = { _0: ($_, ctx, shots, color, r) => draw_shots(ctx, shots, color, r) };

function ship_heading(sh) {
  {
    const $t29851 = sh.mode;
    switch ($t29851.$) {
      case "ShipOrbiting": {
        const $f29855 = $t29851._0;
        const $f29856 = $t29851._1;
        {
          const angle = (() => {
            return $f29856;
          })();
          {
            const d = (0. - 1.);
            {
              const $t29854 = (d * 1.5707963);
              return (angle + $t29854);
            }
          }
        }
        break;
      }
      case "ShipFlying": {
        const $f29861 = $t29851._0;
        const $f29862 = $t29851._1;
        {
          const vy = (() => {
            return $f29862;
          })();
          {
            const vx = (() => {
              return $f29861;
            })();
            return Math.atan2(vy, vx);
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const ship_heading$clo = { _0: ($_, sh) => ship_heading(sh) };

function ball_heading(game) {
  {
    const $t29867 = game.mode;
    switch ($t29867.$) {
      case "Flying": {
        const $f29868 = $t29867._0;
        const $f29869 = $t29867._1;
        {
          const vy = (() => {
            return $f29869;
          })();
          {
            const vx = (() => {
              return $f29868;
            })();
            return Math.atan2(vy, vx);
          }
        }
        break;
      }
      case "Orbiting": {
        const $f29874 = $t29867._0;
        const $f29875 = $t29867._1;
        const $f29876 = $t29867._2;
        {
          const angle = (() => {
            return $f29876;
          })();
          return (angle - 1.5707963);
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const ball_heading$clo = { _0: ($_, game) => ball_heading(game) };

function draw_ships(ctx, ships) {
  switch (ships.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29889 = ships._0;
      const $f29890 = ships._1;
      {
        const rest = (() => {
          return $f29890;
        })();
        {
          const sh = (() => {
            return $f29889;
          })();
          {
            const pos = (() => {
              {
                const pos_i4144 = (() => {
                  {
                    const $t27355_i4142 = sh.x;
                    {
                      const $t27356_i4143 = sh.y;
                      return { _0: $t27355_i4142, _1: $t27356_i4143 };
                    }
                  }
                })();
                return pos_i4144;
              }
            })();
            {
              const sx = pos._0;
              {
                const sy = pos._1;
                {
                  const heading = ship_heading(sh);
                  (() => {
                    return Canvas$save(ctx);
                  })();
                  (() => {
                    return Canvas$translate(ctx, sx, sy);
                  })();
                  (() => {
                    return Canvas$rotate(ctx, heading);
                  })();
                  (() => {
                    return Canvas$set_fill_style(ctx, "#e2e2e2");
                  })();
                  (() => {
                    return Canvas$set_stroke_style(ctx, "#333333");
                  })();
                  (() => {
                    return Canvas$set_line_width(ctx, 1.2);
                  })();
                  (() => {
                    return Canvas$begin_path(ctx);
                  })();
                  (() => {
                    return Canvas$move_to(ctx, 9., 0.);
                  })();
                  (() => {
                    {
                      const $t29885 = (0. - 6.);
                      return Canvas$line_to(ctx, $t29885, 5.);
                    }
                  })();
                  (() => {
                    {
                      const $t29886 = (0. - 6.);
                      {
                        const $t29887 = (0. - 5.);
                        return Canvas$line_to(ctx, $t29886, $t29887);
                      }
                    }
                  })();
                  (() => {
                    return Canvas$close_path(ctx);
                  })();
                  (() => {
                    return Canvas$fill(ctx);
                  })();
                  (() => {
                    return Canvas$stroke(ctx);
                  })();
                  (() => {
                    return Canvas$restore(ctx);
                  })();
                  return draw_ships(ctx, rest);
                }
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_ships$clo = { _0: ($_, ctx, ships) => draw_ships(ctx, ships) };

function draw_pickups(ctx, pickups) {
  switch (pickups.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29898 = pickups._0;
      const $f29899 = pickups._1;
      {
        const rest = (() => {
          return $f29899;
        })();
        {
          const pk = (() => {
            return $f29898;
          })();
          (() => {
            return Canvas$set_stroke_style(ctx, "#ffffff");
          })();
          (() => {
            return Canvas$set_line_width(ctx, 2.);
          })();
          (() => {
            return Canvas$begin_path(ctx);
          })();
          (() => {
            {
              const $t29895 = pk.x;
              {
                const $t29896 = pk.y;
                return Canvas$arc(ctx, $t29895, $t29896, 8., 0., 6.28318530718);
              }
            }
          })();
          (() => {
            return Canvas$stroke(ctx);
          })();
          return draw_pickups(ctx, rest);
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_pickups$clo = { _0: ($_, ctx, pickups) => draw_pickups(ctx, pickups) };

function draw_runs(ctx, runs, view_w, y, i) {
  {
    const $t29904 = (i >= 5);
    if ($t29904 === true) {
      return {  };
    } else {
      return (() => {
        switch (runs.$) {
          case "Nil": {
            return {  };
            break;
          }
          case "Cons": {
            const $f29919 = runs._0;
            const $f29920 = runs._1;
            {
              const rest = (() => {
                return $f29920;
              })();
              {
                const r = (() => {
                  return $f29919;
                })();
                (() => {
                  return Canvas$set_font(ctx, "14px sans-serif");
                })();
                (() => {
                  {
                    const $t29915 = (() => {
                      {
                        const $t29914 = (() => {
                          {
                            const $t29911 = (() => {
                              {
                                const $t29910 = (() => {
                                  {
                                    const $t29907 = (() => {
                                      {
                                        const $t29906 = (() => {
                                          {
                                            const $t29905 = r.score;
                                            return String($t29905);
                                          }
                                        })();
                                        {
                                          const $rc_849 = ($t29906 + " x");
                                          return $rc_849;
                                        }
                                      }
                                    })();
                                    {
                                      const $t29909 = (() => {
                                        {
                                          const $t29908 = r.max_mult;
                                          return String($t29908);
                                        }
                                      })();
                                      {
                                        const $rc_848 = ($t29907 + $t29909);
                                        return $rc_848;
                                      }
                                    }
                                  }
                                })();
                                {
                                  const $rc_847 = ($t29910 + " · ");
                                  return $rc_847;
                                }
                              }
                            })();
                            {
                              const $t29913 = (() => {
                                {
                                  const $t29912 = r.stars;
                                  return String($t29912);
                                }
                              })();
                              {
                                const $rc_846 = ($t29911 + $t29913);
                                return $rc_846;
                              }
                            }
                          }
                        })();
                        {
                          const $rc_845 = ($t29914 + " stars");
                          return $rc_845;
                        }
                      }
                    })();
                    {
                      const $t29916 = (view_w / 2.);
                      return Canvas$fill_text(ctx, $t29915, $t29916, y);
                    }
                  }
                })();
                {
                  const $t29917 = (y + 20.);
                  {
                    const $t29918 = (i + 1);
                    return draw_runs(ctx, rest, view_w, $t29917, $t29918);
                  }
                }
              }
            }
            break;
          }
          default: {
            return (() => { throw new Error("non-exhaustive pattern match"); })();
          }
        }
      })();
    }
  }
}
const draw_runs$clo = { _0: ($_, ctx, runs, view_w, y, i) => draw_runs(ctx, runs, view_w, y, i) };

function draw_ball(ctx, game, fx) {
  (() => {
    {
      const $t29925 = fx.player_sprite;
      switch ($t29925.$) {
        case "None": {
          (() => {
            return Canvas$set_fill_style(ctx, "#ffffff");
          })();
          (() => {
            return Canvas$begin_path(ctx);
          })();
          (() => {
            {
              const $t29926 = game.ball_x;
              {
                const $t29927 = game.ball_y;
                return Canvas$arc(ctx, $t29926, $t29927, 6., 0., 6.28318530718);
              }
            }
          })();
          return Canvas$fill(ctx);
          break;
        }
        case "Some": {
          const $f29935 = $t29925._0;
          {
            const sprite = (() => {
              return $f29935;
            })();
            (() => {
              return Canvas$save(ctx);
            })();
            (() => {
              {
                const $t29929 = game.ball_x;
                {
                  const $t29930 = game.ball_y;
                  return Canvas$translate(ctx, $t29929, $t29930);
                }
              }
            })();
            (() => {
              {
                const $t29932 = (() => {
                  {
                    const $t29931 = ball_heading(game);
                    return ($t29931 - 1.5707963);
                  }
                })();
                return Canvas$rotate(ctx, $t29932);
              }
            })();
            (() => {
              {
                const $t29933 = (0. - 16.);
                {
                  const $t29934 = (0. - 24.);
                  return Canvas$draw_node(ctx, sprite, $t29933, $t29934);
                }
              }
            })();
            return Canvas$restore(ctx);
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  })();
  {
    const $t29937 = (() => {
      {
        const $t29936 = game.shield;
        return ($t29936 > 0);
      }
    })();
    if ($t29937 === true) {
      return (() => {
        (() => {
          return Canvas$set_stroke_style(ctx, "#cccccc");
        })();
        (() => {
          return Canvas$set_line_width(ctx, 2.);
        })();
        (() => {
          return Canvas$begin_path(ctx);
        })();
        (() => {
          {
            const $t29938 = game.ball_x;
            {
              const $t29939 = game.ball_y;
              return Canvas$arc(ctx, $t29938, $t29939, 10., 0., 6.28318530718);
            }
          }
        })();
        return Canvas$stroke(ctx);
      })();
    } else {
      return (() => {
        return {  };
      })();
    }
  }
}
const draw_ball$clo = { _0: ($_, ctx, game, fx) => draw_ball(ctx, game, fx) };

function draw_milestone_card(ctx, u, cx, view_h) {
  (() => {
    return Canvas$set_stroke_style(ctx, "#ffffff");
  })();
  (() => {
    return Canvas$set_line_width(ctx, 2.);
  })();
  (() => {
    {
      const $t29945 = (cx - 60.);
      {
        const $t29947 = (() => {
          {
            const $t29946 = (view_h / 2.);
            return ($t29946 - 60.);
          }
        })();
        return Canvas$stroke_rect(ctx, $t29945, $t29947, 120., 120.);
      }
    }
  })();
  (() => {
    return Canvas$set_text_align(ctx, "center");
  })();
  (() => {
    return Canvas$set_font(ctx, "14px sans-serif");
  })();
  (() => {
    {
      let $t29948;
      switch (u.$) {
        case "OffenseWeapon": {
          const $f29941_i10469 = u._0;
          $t29948 = (() => {
            switch ($f29941_i10469.$) {
              case "Homing": {
                return "Homing Missiles";
                break;
              }
              case "Spread": {
                return "Spread Fire";
                break;
              }
              case "StarKiller": {
                return "Star Killer";
                break;
              }
              case "Base": {
                return "Base Weapon";
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          })();
          break;
        }
        case "OffenseFireRate": {
          $t29948 = "Faster Fire";
          break;
        }
        case "DefenseBulletWard": {
          $t29948 = "Bullet Ward";
          break;
        }
        case "DefenseDeflector": {
          $t29948 = "Deflector Plating";
          break;
        }
        case "DefenseShield": {
          $t29948 = "Reinforced Shield";
          break;
        }
        case "SpecialItem": {
          const $f29942_i10470 = u._0;
          $t29948 = (() => {
            switch ($f29942_i10470.$) {
              case "StarThrust": {
                return "Star Thrust";
                break;
              }
              case "StarJump": {
                return "Star Jump";
                break;
              }
              case "TrajectoryPreview": {
                return "Trajectory Preview";
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          })();
          break;
        }
        default: {
          $t29948 = (() => { throw new Error("non-exhaustive pattern match"); })();
          break;
        }
      }
      {
        const $t29949 = (view_h / 2.);
        return Canvas$fill_text(ctx, $t29948, cx, $t29949);
      }
    }
  })();
  (() => {
    return Canvas$set_font(ctx, "10px sans-serif");
  })();
  {
    let $t29950;
    switch (u.$) {
      case "OffenseWeapon": {
        const $f29943_i10466 = u._0;
        $t29950 = (() => {
          switch ($f29943_i10466.$) {
            case "Homing": {
              return "Curves toward threats";
              break;
            }
            case "Spread": {
              return "5-shot fan";
              break;
            }
            case "StarKiller": {
              return "Destroys a distant star";
              break;
            }
            case "Base": {
              return "Standard radial shot";
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        })();
        break;
      }
      case "OffenseFireRate": {
        $t29950 = "Faster shooting";
        break;
      }
      case "DefenseBulletWard": {
        $t29950 = "Blocks one enemy shot";
        break;
      }
      case "DefenseDeflector": {
        $t29950 = "Bounces asteroids";
        break;
      }
      case "DefenseShield": {
        $t29950 = "Adds a shield charge";
        break;
      }
      case "SpecialItem": {
        const $f29944_i10467 = u._0;
        $t29950 = (() => {
          switch ($f29944_i10467.$) {
            case "StarThrust": {
              return "X: thrust to nearest star";
              break;
            }
            case "StarJump": {
              return "X: jump the ladder";
              break;
            }
            case "TrajectoryPreview": {
              return "Shows your flight path";
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        })();
        break;
      }
      default: {
        $t29950 = (() => { throw new Error("non-exhaustive pattern match"); })();
        break;
      }
    }
    {
      const $t29952 = (() => {
        {
          const $t29951 = (view_h / 2.);
          return ($t29951 + 20.);
        }
      })();
      return Canvas$fill_text(ctx, $t29950, cx, $t29952);
    }
  }
}
const draw_milestone_card$clo = { _0: ($_, ctx, u, cx, view_h) => draw_milestone_card(ctx, u, cx, view_h) };

function draw_milestone_cards(ctx, choices, view_w, view_h, i) {
  switch (choices.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29957 = choices._0;
      const $f29958 = choices._1;
      {
        const rest = (() => {
          return $f29958;
        })();
        {
          const u = (() => {
            return $f29957;
          })();
          {
            const col_w = (view_w / 3.);
            (() => {
              {
                const $t29955 = (() => {
                  {
                    const $t29954 = (() => {
                      {
                        const $t29953 = i;
                        return ($t29953 + 0.5);
                      }
                    })();
                    return (col_w * $t29954);
                  }
                })();
                {
                  const $rc_850 = (() => {
                    return draw_milestone_card(ctx, u, $t29955, view_h);
                  })();
                  return $rc_850;
                }
              }
            })();
            {
              const $t29956 = (i + 1);
              return draw_milestone_cards(ctx, rest, view_w, view_h, $t29956);
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_milestone_cards$clo = { _0: ($_, ctx, choices, view_w, view_h, i) => draw_milestone_cards(ctx, choices, view_w, view_h, i) };

function draw_hud(ctx, game) {
  (() => {
    return Canvas$set_fill_style(ctx, "#eeeeee");
  })();
  (() => {
    return Canvas$set_font(ctx, "18px sans-serif");
  })();
  (() => {
    return Canvas$set_text_align(ctx, "left");
  })();
  (() => {
    {
      const $t29964 = (() => {
        {
          const $t29963 = game.score;
          return String($t29963);
        }
      })();
      return Canvas$fill_text(ctx, $t29964, 14., 28.);
    }
  })();
  (() => {
    return Canvas$set_text_align(ctx, "right");
  })();
  (() => {
    {
      const $t29967 = (() => {
        {
          const $t29966 = (() => {
            {
              const $t29965 = game.best;
              return String($t29965);
            }
          })();
          {
            const $rc_861 = ("best " + $t29966);
            return $rc_861;
          }
        }
      })();
      {
        const $t29969 = (() => {
          {
            const $t29968 = game.view_w;
            return ($t29968 - 14.);
          }
        })();
        return Canvas$fill_text(ctx, $t29967, $t29969, 28.);
      }
    }
  })();
  (() => {
    {
      const $t29971 = (() => {
        {
          const $t29970 = game.multiplier;
          return ($t29970 > 1);
        }
      })();
      if ($t29971 === true) {
        return (() => {
          (() => {
            return Canvas$set_text_align(ctx, "left");
          })();
          {
            const $t29974 = (() => {
              {
                const $t29973 = (() => {
                  {
                    const $t29972 = game.multiplier;
                    return String($t29972);
                  }
                })();
                {
                  const $rc_860 = ("x" + $t29973);
                  return $rc_860;
                }
              }
            })();
            return Canvas$fill_text(ctx, $t29974, 14., 52.);
          }
        })();
      } else {
        return {  };
      }
    }
  })();
  (() => {
    return Canvas$set_text_align(ctx, "left");
  })();
  (() => {
    return Canvas$set_font(ctx, "13px sans-serif");
  })();
  (() => {
    {
      const $t29977 = (() => {
        {
          const $t29976 = (() => {
            {
              const $t29975 = Perihelion$Core$active_weapon(game);
              return { $: "OffenseWeapon", _0: $t29975 };
            }
          })();
          {
            let $rc_859;
            switch ($t29976.$) {
              case "OffenseWeapon": {
                const $f29941_i10475 = $t29976._0;
                $rc_859 = (() => {
                  switch ($f29941_i10475.$) {
                    case "Homing": {
                      return "Homing Missiles";
                      break;
                    }
                    case "Spread": {
                      return "Spread Fire";
                      break;
                    }
                    case "StarKiller": {
                      return "Star Killer";
                      break;
                    }
                    case "Base": {
                      return "Base Weapon";
                      break;
                    }
                    default: {
                      return (() => { throw new Error("non-exhaustive pattern match"); })();
                    }
                  }
                })();
                break;
              }
              case "OffenseFireRate": {
                $rc_859 = "Faster Fire";
                break;
              }
              case "DefenseBulletWard": {
                $rc_859 = "Bullet Ward";
                break;
              }
              case "DefenseDeflector": {
                $rc_859 = "Deflector Plating";
                break;
              }
              case "DefenseShield": {
                $rc_859 = "Reinforced Shield";
                break;
              }
              case "SpecialItem": {
                const $f29942_i10476 = $t29976._0;
                $rc_859 = (() => {
                  switch ($f29942_i10476.$) {
                    case "StarThrust": {
                      return "Star Thrust";
                      break;
                    }
                    case "StarJump": {
                      return "Star Jump";
                      break;
                    }
                    case "TrajectoryPreview": {
                      return "Trajectory Preview";
                      break;
                    }
                    default: {
                      return (() => { throw new Error("non-exhaustive pattern match"); })();
                    }
                  }
                })();
                break;
              }
              default: {
                $rc_859 = (() => { throw new Error("non-exhaustive pattern match"); })();
                break;
              }
            }
            return $rc_859;
          }
        }
      })();
      {
        const $t29979 = (() => {
          {
            const $t29978 = game.view_h;
            return ($t29978 - 60.);
          }
        })();
        return Canvas$fill_text(ctx, $t29977, 14., $t29979);
      }
    }
  })();
  (() => {
    {
      const $t29980 = game.special;
      switch ($t29980.$) {
        case "None": {
          return {  };
          break;
        }
        case "Some": {
          const $f29989 = $t29980._0;
          {
            const k = (() => {
              return $f29989;
            })();
            {
              const $t29986 = (() => {
                {
                  const $t29983 = (() => {
                    {
                      const $t29982 = (() => {
                        {
                          const $t29981 = { $: "SpecialItem", _0: k };
                          {
                            let $rc_858;
                            switch ($t29981.$) {
                              case "OffenseWeapon": {
                                const $f29941_i10472 = $t29981._0;
                                $rc_858 = (() => {
                                  switch ($f29941_i10472.$) {
                                    case "Homing": {
                                      return "Homing Missiles";
                                      break;
                                    }
                                    case "Spread": {
                                      return "Spread Fire";
                                      break;
                                    }
                                    case "StarKiller": {
                                      return "Star Killer";
                                      break;
                                    }
                                    case "Base": {
                                      return "Base Weapon";
                                      break;
                                    }
                                    default: {
                                      return (() => { throw new Error("non-exhaustive pattern match"); })();
                                    }
                                  }
                                })();
                                break;
                              }
                              case "OffenseFireRate": {
                                $rc_858 = "Faster Fire";
                                break;
                              }
                              case "DefenseBulletWard": {
                                $rc_858 = "Bullet Ward";
                                break;
                              }
                              case "DefenseDeflector": {
                                $rc_858 = "Deflector Plating";
                                break;
                              }
                              case "DefenseShield": {
                                $rc_858 = "Reinforced Shield";
                                break;
                              }
                              case "SpecialItem": {
                                const $f29942_i10473 = $t29981._0;
                                $rc_858 = (() => {
                                  switch ($f29942_i10473.$) {
                                    case "StarThrust": {
                                      return "Star Thrust";
                                      break;
                                    }
                                    case "StarJump": {
                                      return "Star Jump";
                                      break;
                                    }
                                    case "TrajectoryPreview": {
                                      return "Trajectory Preview";
                                      break;
                                    }
                                    default: {
                                      return (() => { throw new Error("non-exhaustive pattern match"); })();
                                    }
                                  }
                                })();
                                break;
                              }
                              default: {
                                $rc_858 = (() => { throw new Error("non-exhaustive pattern match"); })();
                                break;
                              }
                            }
                            return $rc_858;
                          }
                        }
                      })();
                      {
                        const $rc_857 = ($t29982 + " x");
                        return $rc_857;
                      }
                    }
                  })();
                  {
                    const $t29985 = (() => {
                      {
                        const $t29984 = game.special_charges;
                        return String($t29984);
                      }
                    })();
                    {
                      const $rc_856 = ($t29983 + $t29985);
                      return $rc_856;
                    }
                  }
                }
              })();
              {
                const $t29988 = (() => {
                  {
                    const $t29987 = game.view_h;
                    return ($t29987 - 40.);
                  }
                })();
                return Canvas$fill_text(ctx, $t29986, 14., $t29988);
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  })();
  {
    const defense_tags = (() => {
      {
        const $t29994 = (() => {
          {
            const $t29991 = (() => {
              {
                const $t29990 = game.bullet_ward;
                if ($t29990 === true) {
                  return "ward ";
                } else {
                  return "";
                }
              }
            })();
            {
              const $t29993 = (() => {
                {
                  const $t29992 = game.deflector_plating;
                  if ($t29992 === true) {
                    return "deflect ";
                  } else {
                    return "";
                  }
                }
              })();
              {
                const $rc_855 = ($t29991 + $t29993);
                return $rc_855;
              }
            }
          }
        })();
        {
          const $t29999 = (() => {
            {
              const $t29996 = (() => {
                {
                  const $t29995 = game.shield;
                  return ($t29995 > 0);
                }
              })();
              if ($t29996 === true) {
                return (() => {
                  {
                    const $t29998 = (() => {
                      {
                        const $t29997 = game.shield;
                        return String($t29997);
                      }
                    })();
                    {
                      const $rc_854 = ("shield x" + $t29998);
                      return $rc_854;
                    }
                  }
                })();
              } else {
                return "";
              }
            }
          })();
          {
            const $rc_853 = ($t29994 + $t29999);
            return $rc_853;
          }
        }
      }
    })();
    (() => {
      {
        const $t30001 = (() => {
          {
            const $t30000 = game.view_h;
            return ($t30000 - 20.);
          }
        })();
        return Canvas$fill_text(ctx, defense_tags, 14., $t30001);
      }
    })();
    (() => {
      return Canvas$set_text_align(ctx, "center");
    })();
    {
      const $t30002 = game.phase;
      switch ($t30002.$) {
        case "Ready": {
          (() => {
            return Canvas$set_font(ctx, "22px sans-serif");
          })();
          {
            const $t30004 = (() => {
              {
                const $t30003 = game.view_w;
                return ($t30003 / 2.);
              }
            })();
            {
              const $t30006 = (() => {
                {
                  const $t30005 = game.view_h;
                  return ($t30005 / 2.);
                }
              })();
              return Canvas$fill_text(ctx, "tap to start", $t30004, $t30006);
            }
          }
          break;
        }
        case "Over": {
          (() => {
            return Canvas$set_font(ctx, "22px sans-serif");
          })();
          (() => {
            {
              const $t30010 = (() => {
                {
                  const $t30009 = (() => {
                    {
                      const $t30008 = (() => {
                        {
                          const $t30007 = game.score;
                          return String($t30007);
                        }
                      })();
                      {
                        const $rc_852 = ("score " + $t30008);
                        return $rc_852;
                      }
                    }
                  })();
                  {
                    const $rc_851 = ($t30009 + " — tap to retry");
                    return $rc_851;
                  }
                }
              })();
              {
                const $t30012 = (() => {
                  {
                    const $t30011 = game.view_w;
                    return ($t30011 / 2.);
                  }
                })();
                {
                  const $t30014 = (() => {
                    {
                      const $t30013 = game.view_h;
                      return ($t30013 / 2.);
                    }
                  })();
                  return Canvas$fill_text(ctx, $t30010, $t30012, $t30014);
                }
              }
            }
          })();
          {
            const $t30015 = game.runs;
            {
              const $t30016 = game.view_w;
              {
                const $t30019 = (() => {
                  {
                    const $t30018 = (() => {
                      {
                        const $t30017 = game.view_h;
                        return ($t30017 / 2.);
                      }
                    })();
                    return ($t30018 + 36.);
                  }
                })();
                return draw_runs(ctx, $t30015, $t30016, $t30019, 0);
              }
            }
          }
          break;
        }
        case "Playing": {
          return {  };
          break;
        }
        case "Milestone": {
          (() => {
            return Canvas$set_font(ctx, "20px sans-serif");
          })();
          (() => {
            {
              const $t30021 = (() => {
                {
                  const $t30020 = game.view_w;
                  return ($t30020 / 2.);
                }
              })();
              {
                const $t30024 = (() => {
                  {
                    const $t30023 = (() => {
                      {
                        const $t30022 = game.view_h;
                        return ($t30022 / 2.);
                      }
                    })();
                    return ($t30023 - 90.);
                  }
                })();
                return Canvas$fill_text(ctx, "Choose an upgrade", $t30021, $t30024);
              }
            }
          })();
          {
            const $t30025 = game.milestone_choices;
            {
              const $t30026 = game.view_w;
              {
                const $t30027 = game.view_h;
                return draw_milestone_cards(ctx, $t30025, $t30026, $t30027, 0);
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const draw_hud$clo = { _0: ($_, ctx, game) => draw_hud(ctx, game) };

function draw(ctx, game, fx) {
  (() => {
    return Canvas$set_global_alpha(ctx, 1.);
  })();
  (() => {
    return Canvas$set_fill_style(ctx, "#0a0a0a");
  })();
  (() => {
    {
      const $t30028 = game.view_w;
      {
        const $t30029 = game.view_h;
        return Canvas$fill_rect(ctx, 0., 0., $t30028, $t30029);
      }
    }
  })();
  {
    const seedf = (() => {
      {
        const $t30030 = game.seed;
        return $t30030;
      }
    })();
    (() => {
      {
        const $t30031 = fx.gl;
        return draw_nebula_gl(ctx, $t30031, game, seedf);
      }
    })();
    (() => {
      return Canvas$save(ctx);
    })();
    (() => {
      {
        const $t30033 = (() => {
          {
            const $t30032 = game.camera_x;
            return (0. - $t30032);
          }
        })();
        {
          const $t30035 = (() => {
            {
              const $t30034 = game.camera_y;
              return (0. - $t30034);
            }
          })();
          return Canvas$translate(ctx, $t30033, $t30035);
        }
      }
    })();
    (() => {
      {
        const $t30036 = game.camera_x;
        {
          const $t30037 = game.camera_y;
          {
            const $t30038 = game.view_w;
            {
              const $t30039 = game.view_h;
              {
                const $t30040 = fx.t;
                return draw_starfield(ctx, $t30036, $t30037, $t30038, $t30039, seedf, $t30040);
              }
            }
          }
        }
      }
    })();
    {
      const aim = (() => {
        {
          const $t30041 = game.mode;
          switch ($t30041.$) {
            case "Flying": {
              const $f30045 = $t30041._0;
              const $f30046 = $t30041._1;
              {
                const vy = (() => {
                  return $f30046;
                })();
                {
                  const vx = (() => {
                    return $f30045;
                  })();
                  {
                    const $t30044 = (() => {
                      {
                        const $t30042 = game.ball_x;
                        {
                          const $t30043 = game.ball_y;
                          return { _0: $t30042, _1: $t30043, _2: vx, _3: vy };
                        }
                      }
                    })();
                    return { $: "Some", _0: $t30044 };
                  }
                }
              }
              break;
            }
            case "Orbiting": {
              const $f30051 = $t30041._0;
              const $f30052 = $t30041._1;
              const $f30053 = $t30041._2;
              return { $: "None" };
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        }
      })();
      (() => {
        {
          const $t30062 = game.stars;
          {
            const $t30063 = game.camera_y;
            {
              const $t30064 = game.view_h;
              {
                const $t30065 = fx.t;
                {
                  const $rc_863 = (() => {
                    return draw_stars(ctx, $t30062, $t30063, $t30064, $t30065, aim);
                  })();
                  return $rc_863;
                }
              }
            }
          }
        }
      })();
      (() => {
        {
          const $t30066 = Perihelion$Core$active_weapon(game);
          switch ($t30066.$) {
            case "StarKiller": {
              return draw_starkiller_reticle(ctx, game);
              break;
            }
            default: {
              return {  };
            }
          }
        }
      })();
      (() => {
        {
          const $t30069 = game.mode;
          switch ($t30069.$) {
            case "Orbiting": {
              const $f30077 = $t30069._0;
              const $f30078 = $t30069._1;
              const $f30079 = $t30069._2;
              {
                const angle = (() => {
                  return $f30079;
                })();
                {
                  const ring = (() => {
                    return $f30078;
                  })();
                  {
                    const idx = (() => {
                      return $f30077;
                    })();
                    {
                      const $t30070 = game.special;
                      switch ($t30070.$) {
                        case "Some": {
                          const $f30072 = $t30070._0;
                          switch ($f30072.$) {
                            case "TrajectoryPreview": {
                              {
                                const $t30071 = Perihelion$Core$predict_trajectory(game, idx, ring, angle);
                                {
                                  const $rc_862 = (() => {
                                    return draw_trajectory_preview(ctx, $t30071);
                                  })();
                                  return $rc_862;
                                }
                              }
                              break;
                            }
                            default: {
                              return {  };
                            }
                          }
                          break;
                        }
                        default: {
                          return {  };
                        }
                      }
                    }
                  }
                }
              }
              break;
            }
            case "Flying": {
              const $f30088 = $t30069._0;
              const $f30089 = $t30069._1;
              return {  };
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        }
      })();
      (() => {
        {
          const $t30094 = fx.flash;
          return draw_flash(ctx, $t30094);
        }
      })();
      (() => {
        {
          const $t30095 = game.asteroids;
          return draw_asteroids(ctx, $t30095);
        }
      })();
      (() => {
        {
          const $t30096 = game.ships;
          return draw_ships(ctx, $t30096);
        }
      })();
      (() => {
        {
          const $t30097 = game.player_shots;
          return draw_shots(ctx, $t30097, "#ffffff", 3.);
        }
      })();
      (() => {
        {
          const $t30098 = game.enemy_shots;
          return draw_shots(ctx, $t30098, "#8a8a94", 2.5);
        }
      })();
      (() => {
        {
          const $t30099 = game.pickups;
          return draw_pickups(ctx, $t30099);
        }
      })();
      (() => {
        {
          const $t30100 = fx.trail;
          return draw_trail(ctx, $t30100, 0, 22);
        }
      })();
      (() => {
        {
          const $t30102 = fx.particles;
          return draw_particles(ctx, $t30102);
        }
      })();
      (() => {
        return Canvas$set_global_alpha(ctx, 1.);
      })();
      (() => {
        return draw_ball(ctx, game, fx);
      })();
      (() => {
        return Canvas$restore(ctx);
      })();
      return draw_hud(ctx, game);
    }
  }
}
const draw$clo = { _0: ($_, ctx, game, fx) => draw(ctx, game, fx) };

function draw_starkiller_reticle(ctx, game) {
  {
    const $t30104 = (() => {
      {
        const $t30103 = Perihelion$Combat$starkiller_target_idx(game);
        return Perihelion$Core$star_at(game, $t30103);
      }
    })();
    switch ($t30104.$) {
      case "None": {
        return {  };
        break;
      }
      case "Some": {
        const $f30110 = $t30104._0;
        {
          const s = $f30110;
          (() => {
            return Canvas$set_stroke_style(ctx, "#ff5555");
          })();
          (() => {
            return Canvas$set_line_width(ctx, 2.);
          })();
          (() => {
            return Canvas$begin_path(ctx);
          })();
          (() => {
            {
              const $t30105 = s.x;
              {
                const $t30106 = s.y;
                {
                  const $t30108 = (() => {
                    {
                      const $t30107 = s.capture_radius;
                      return ($t30107 + 12.);
                    }
                  })();
                  return Canvas$arc(ctx, $t30105, $t30106, $t30108, 0., 6.28318530718);
                }
              }
            }
          })();
          return Canvas$stroke(ctx);
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const draw_starkiller_reticle$clo = { _0: ($_, ctx, game) => draw_starkiller_reticle(ctx, game) };

function draw_trajectory_preview(ctx, points) {
  (() => {
    return Canvas$set_fill_style(ctx, "#888888");
  })();
  return draw_trajectory_dots(ctx, points, 0);
}
const draw_trajectory_preview$clo = { _0: ($_, ctx, points) => draw_trajectory_preview(ctx, points) };

function draw_trajectory_dots(ctx, points, i) {
  switch (points.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f30116 = points._0;
      const $f30117 = points._1;
      {
        const rest = (() => {
          return $f30117;
        })();
        {
          const pt = (() => {
            return $f30116;
          })();
          {
            const x = pt._0;
            {
              const y = pt._1;
              (() => {
                {
                  const $t30112 = (() => {
                    {
                      const $t30111 = march_int_mod(i, 3);
                      return ($t30111 === 0);
                    }
                  })();
                  if ($t30112 === true) {
                    return (() => {
                      (() => {
                        return Canvas$begin_path(ctx);
                      })();
                      (() => {
                        return Canvas$arc(ctx, x, y, 2., 0., 6.28318530718);
                      })();
                      return Canvas$fill(ctx);
                    })();
                  } else {
                    return {  };
                  }
                }
              })();
              {
                const $t30114 = (i + 1);
                return draw_trajectory_dots(ctx, rest, $t30114);
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const draw_trajectory_dots$clo = { _0: ($_, ctx, points, i) => draw_trajectory_dots(ctx, points, i) };

function resize_canvas(el, game, w, h) {
  {
    const $t30128 = (() => {
      {
        const $t30125 = (() => {
          {
            const $t30124 = game.view_w;
            return (w === $t30124);
          }
        })();
        {
          const $t30127 = (() => {
            {
              const $t30126 = game.view_h;
              return (h === $t30126);
            }
          })();
          return ($t30125 && $t30127);
        }
      }
    })();
    if ($t30128 === true) {
      return {  };
    } else {
      return (() => {
        (() => {
          {
            const $t30130 = (() => {
              {
                const $t30129 = Math.trunc(w);
                return String($t30129);
              }
            })();
            return Dom$set_attr(el, "width", $t30130);
          }
        })();
        {
          const $t30132 = (() => {
            {
              const $t30131 = Math.trunc(h);
              return String($t30131);
            }
          })();
          return Dom$set_attr(el, "height", $t30132);
        }
      })();
    }
  }
}
const resize_canvas$clo = { _0: ($_, el, game, w, h) => resize_canvas(el, game, w, h) };

function resize_gl(gl_opt, w, h) {
  switch (gl_opt.$) {
    case "None": {
      return {  };
      break;
    }
    case "Some": {
      const $f30133 = gl_opt._0;
      {
        const gl = $f30133;
        return WebGL$resize(gl, w, h);
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const resize_gl$clo = { _0: ($_, gl_opt, w, h) => resize_gl(gl_opt, w, h) };

function play_sfx(actx, muted, game, g2) {
  if (muted === true) {
    return {  };
  } else {
    return (() => {
      (() => {
        {
          const $t30147 = (() => {
            {
              const $t30145 = (() => {
                {
                  const $t30144 = game.phase;
                  switch ($t30144.$) {
                    case "Ready": {
                      return true;
                      break;
                    }
                    default: {
                      return false;
                    }
                  }
                }
              })();
              {
                const $t30146 = (() => {
                  {
                    const $t30122_i4189 = g2.phase;
                    switch ($t30122_i4189.$) {
                      case "Playing": {
                        return true;
                        break;
                      }
                      default: {
                        return false;
                      }
                    }
                  }
                })();
                return ($t30145 && $t30146);
              }
            }
          })();
          if ($t30147 === true) {
            return (() => {
              return Audio$resume(actx);
            })();
          } else {
            return {  };
          }
        }
      })();
      (() => {
        {
          const $t30152 = (() => {
            {
              const $t30149 = (() => {
                {
                  const $t30148 = game.mode;
                  switch ($t30148.$) {
                    case "Orbiting": {
                      const $f30134_i4185 = $t30148._0;
                      const $f30135_i4186 = $t30148._1;
                      const $f30136_i4187 = $t30148._2;
                      return true;
                      break;
                    }
                    default: {
                      return false;
                    }
                  }
                }
              })();
              {
                const $t30151 = (() => {
                  {
                    const $t30150 = g2.mode;
                    switch ($t30150.$) {
                      case "Flying": {
                        const $f30137_i4182 = $t30150._0;
                        const $f30138_i4183 = $t30150._1;
                        return true;
                        break;
                      }
                      default: {
                        return false;
                      }
                    }
                  }
                })();
                return ($t30149 && $t30151);
              }
            }
          })();
          if ($t30152 === true) {
            return (() => {
              return Audio$beep(actx, 500., 0.04, "square");
            })();
          } else {
            return {  };
          }
        }
      })();
      (() => {
        {
          const $t30153 = g2.capture_flash;
          switch ($t30153.$) {
            case "None": {
              return {  };
              break;
            }
            case "Some": {
              const $f30154 = $t30153._0;
              return Audio$sweep(actx, 400., 900., 0.12, "sine");
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        }
      })();
      (() => {
        {
          const $t30159 = (() => {
            {
              const $t30156 = (() => {
                {
                  const $t30155 = g2.player_shots;
                  {
                    const go_i4179 = { $: "$Clo_go$4834", _0: go$apply$4834 };
                    return go$apply$4834(go_i4179, $t30155, 0);
                  }
                }
              })();
              {
                const $t30158 = (() => {
                  {
                    const $t30157 = game.player_shots;
                    {
                      const go_i4177 = { $: "$Clo_go$4834", _0: go$apply$4834 };
                      return go$apply$4834(go_i4177, $t30157, 0);
                    }
                  }
                })();
                return ($t30156 > $t30158);
              }
            }
          })();
          if ($t30159 === true) {
            return (() => {
              return Audio$beep(actx, 900., 0.05, "square");
            })();
          } else {
            return {  };
          }
        }
      })();
      (() => {
        {
          const $t30164 = (() => {
            {
              const $t30161 = (() => {
                {
                  const $t30160 = g2.enemy_shots;
                  {
                    const go_i4175 = { $: "$Clo_go$4834", _0: go$apply$4834 };
                    return go$apply$4834(go_i4175, $t30160, 0);
                  }
                }
              })();
              {
                const $t30163 = (() => {
                  {
                    const $t30162 = game.enemy_shots;
                    {
                      const go_i4173 = { $: "$Clo_go$4834", _0: go$apply$4834 };
                      return go$apply$4834(go_i4173, $t30162, 0);
                    }
                  }
                })();
                return ($t30161 > $t30163);
              }
            }
          })();
          if ($t30164 === true) {
            return (() => {
              return Audio$beep(actx, 500., 0.05, "sawtooth");
            })();
          } else {
            return {  };
          }
        }
      })();
      (() => {
        {
          const $t30167 = (() => {
            {
              const $t30166 = (() => {
                {
                  const $t30165 = g2.fx_bursts;
                  switch ($t30165.$) {
                    case "Nil": {
                      return true;
                      break;
                    }
                    default: {
                      return false;
                    }
                  }
                }
              })();
              return (!$t30166);
            }
          })();
          if ($t30167 === true) {
            return (() => {
              return Audio$noise_burst(actx, 0.2, 900.);
            })();
          } else {
            return {  };
          }
        }
      })();
      (() => {
        {
          const $t30172 = (() => {
            {
              const $t30169 = (() => {
                {
                  const $t30168 = g2.ships;
                  {
                    const go_i4170 = { $: "$Clo_go$4786", _0: go$apply$4786 };
                    return go$apply$4786(go_i4170, $t30168, 0);
                  }
                }
              })();
              {
                const $t30171 = (() => {
                  {
                    const $t30170 = game.ships;
                    {
                      const go_i4168 = { $: "$Clo_go$4786", _0: go$apply$4786 };
                      return go$apply$4786(go_i4168, $t30170, 0);
                    }
                  }
                })();
                return ($t30169 < $t30171);
              }
            }
          })();
          if ($t30172 === true) {
            return (() => {
              return Audio$noise_burst(actx, 0.3, 400.);
            })();
          } else {
            return {  };
          }
        }
      })();
      (() => {
        {
          const $t30177 = (() => {
            {
              const $t30174 = (() => {
                {
                  const $t30173 = game.shield;
                  return ($t30173 === 0);
                }
              })();
              {
                const $t30176 = (() => {
                  {
                    const $t30175 = g2.shield;
                    return ($t30175 > 0);
                  }
                })();
                return ($t30174 && $t30176);
              }
            }
          })();
          if ($t30177 === true) {
            return (() => {
              return Audio$beep(actx, 700., 0.06, "sine");
            })();
          } else {
            return {  };
          }
        }
      })();
      {
        const $t30180 = (() => {
          {
            const $t30178 = (() => {
              {
                const $t30122_i4166 = game.phase;
                switch ($t30122_i4166.$) {
                  case "Playing": {
                    return true;
                    break;
                  }
                  default: {
                    return false;
                  }
                }
              }
            })();
            {
              const $t30179 = (() => {
                {
                  const $t30123_i4164 = g2.phase;
                  switch ($t30123_i4164.$) {
                    case "Over": {
                      return true;
                      break;
                    }
                    default: {
                      return false;
                    }
                  }
                }
              })();
              return ($t30178 && $t30179);
            }
          }
        })();
        if ($t30180 === true) {
          return Audio$sweep(actx, 300., 60., 0.5, "sawtooth");
        } else {
          return (() => {
            return {  };
          })();
        }
      }
    })();
  }
}
const play_sfx$clo = { _0: ($_, actx, muted, game, g2) => play_sfx(actx, muted, game, g2) };

function milestone_tap_choice(taps, view_w, _view_h) {
  switch (taps.$) {
    case "Nil": {
      return { $: "None" };
      break;
    }
    case "Cons": {
      const $f30186 = taps._0;
      const $f30187 = taps._1;
      {
        const tap = (() => {
          return $f30186;
        })();
        {
          const tx = tap._0;
          {
            const col_w = (view_w / 3.);
            {
              const idx = (() => {
                {
                  const $t30182 = (() => {
                    {
                      const $t30181 = tx;
                      return ($t30181 / col_w);
                    }
                  })();
                  return Math.trunc($t30182);
                }
              })();
              {
                const $t30184 = (() => {
                  {
                    const $t30183 = (idx > 2);
                    if ($t30183 === true) {
                      return 2;
                    } else {
                      return idx;
                    }
                  }
                })();
                return { $: "Some", _0: $t30184 };
              }
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const milestone_tap_choice$clo = { _0: ($_, taps, view_w, _view_h) => milestone_tap_choice(taps, view_w, _view_h) };

function tick(ctx, el, game, fx) {
  {
    const taps = (() => {
      return Dom$taps(el);
    })();
    {
      const keys = dom_key_presses();
      {
        const cursor = (() => {
          return Dom$pointer_pos(el);
        })();
        {
          const $p30211 = dom_window_size();
          {
            const win_w = $p30211._0;
            {
              const win_h = $p30211._1;
              {
                const view_w = win_w;
                {
                  const view_h = win_h;
                  (() => {
                    return resize_canvas(el, game, view_w, view_h);
                  })();
                  (() => {
                    {
                      const $t30192 = fx.gl;
                      return resize_gl($t30192, view_w, view_h);
                    }
                  })();
                  {
                    const g2 = (() => {
                      {
                        const $t30193 = game.phase;
                        switch ($t30193.$) {
                          case "Milestone": {
                            {
                              const $jp_clo30199 = (() => {
                                return { $: "$Clo_$jp30198$3828", _0: $jp30198$apply$3828, _1: cursor, _2: game, _3: keys, _4: taps, _5: view_h, _6: view_w };
                              })();
                              {
                                const $t30194 = (() => {
                                  {
                                    const $t28462_i4201 = { $: "$Clo_$lam28459$3739", _0: $lam28459$apply$3739 };
                                    return List$any$List_String$Fn_String_Bool(keys, $t28462_i4201);
                                  }
                                })();
                                if ($t30194 === true) {
                                  return (() => {
                                    {
                                      const $rc_864 = (() => {
                                        return Perihelion$Core$update(game, taps, keys, cursor, view_w, view_h, 0.0166667);
                                      })();
                                      return $rc_864;
                                    }
                                  })();
                                } else {
                                  return (() => {
                                    {
                                      const $t30196 = (() => {
                                        {
                                          const $rc_865 = milestone_tap_choice(taps, view_w, view_h);
                                          return $rc_865;
                                        }
                                      })();
                                      return Perihelion$Core$pick_milestone(game, $t30196);
                                    }
                                  })();
                                }
                              }
                            }
                            break;
                          }
                          default: {
                            {
                              const $rc_866 = (() => {
                                return Perihelion$Core$update(game, taps, keys, cursor, view_w, view_h, 0.0166667);
                              })();
                              return $rc_866;
                            }
                          }
                        }
                      }
                    })();
                    {
                      const muted2 = (() => {
                        {
                          const $t30200 = fx.muted;
                          {
                            const $t30143_i4199 = (() => {
                              {
                                const $t30142_i4198 = { $: "$Clo_$lam30139$3826", _0: $lam30139$apply$3826 };
                                return List$any$List_String$Fn_String_Bool(keys, $t30142_i4198);
                              }
                            })();
                            if ($t30143_i4199 === true) {
                              return (!$t30200);
                            } else {
                              return $t30200;
                            }
                          }
                        }
                      })();
                      (() => {
                        {
                          const $t30201 = fx.actx;
                          return play_sfx($t30201, muted2, game, g2);
                        }
                      })();
                      {
                        const fx1 = step_fx(fx, g2, 0.0166667);
                        {
                          const fx2 = ({ ...fx1, muted: muted2 });
                          (() => {
                            {
                              const $t30205 = (() => {
                                {
                                  const $t30203 = (() => {
                                    {
                                      const $t30122_i4195 = game.phase;
                                      switch ($t30122_i4195.$) {
                                        case "Playing": {
                                          return true;
                                          break;
                                        }
                                        default: {
                                          return false;
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const $t30204 = (() => {
                                      {
                                        const $t30123_i4193 = g2.phase;
                                        switch ($t30123_i4193.$) {
                                          case "Over": {
                                            return true;
                                            break;
                                          }
                                          default: {
                                            return false;
                                          }
                                        }
                                      }
                                    })();
                                    return ($t30203 && $t30204);
                                  }
                                }
                              })();
                              if ($t30205 === true) {
                                return (() => {
                                  {
                                    const $t30208 = (() => {
                                      {
                                        const $t30206 = g2.best;
                                        {
                                          const $t30207 = g2.runs;
                                          return Perihelion$Core$encode_save($t30206, $t30207);
                                        }
                                      }
                                    })();
                                    return Dom$store_set("perihelion.v1", $t30208);
                                  }
                                })();
                              } else {
                                return {  };
                              }
                            }
                          })();
                          (() => {
                            return draw(ctx, g2, fx2);
                          })();
                          {
                            const $t30210 = { $: "$Clo_$lam30209$3829", _0: $lam30209$apply$3829, _1: ctx, _2: el, _3: fx2, _4: g2 };
                            return Dom$on_frame($t30210);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
const tick$clo = { _0: ($_, ctx, el, game, fx) => tick(ctx, el, game, fx) };

function boot(ctx, node, best, runs) {
  {
    const $p30217 = dom_window_size();
    {
      const win_w = $p30217._0;
      {
        const win_h = $p30217._1;
        {
          const view_w = win_w;
          {
            const view_h = win_h;
            (() => {
              {
                const $t30212 = String(win_w);
                return Dom$set_attr(node, "width", $t30212);
              }
            })();
            (() => {
              {
                const $t30213 = String(win_h);
                return Dom$set_attr(node, "height", $t30213);
              }
            })();
            {
              const $t30215 = (() => {
                {
                  const $t30214 = boot_seed();
                  return Perihelion$Core$fresh_run($t30214, best, runs, view_w, view_h);
                }
              })();
              {
                const $t30216 = fx_init();
                return tick(ctx, node, $t30215, $t30216);
              }
            }
          }
        }
      }
    }
  }
}
const boot$clo = { _0: ($_, ctx, node, best, runs) => boot(ctx, node, best, runs) };

function main() {
  {
    const $t30218 = Dom$find("game-canvas");
    switch ($t30218.$) {
      case "None": {
        return println$String("no #game-canvas found");
        break;
      }
      case "Some": {
        const $f30226 = $t30218._0;
        {
          const node = $f30226;
          {
            const $t30219 = (() => {
              return Canvas$get_context(node);
            })();
            switch ($t30219.$) {
              case "None": {
                return println$String("2d context unavailable");
                break;
              }
              case "Some": {
                const $f30225 = $t30219._0;
                {
                  const ctx = $f30225;
                  {
                    const saved = (() => {
                      {
                        const $t30220 = Dom$store_get("perihelion.v1");
                        switch ($t30220.$) {
                          case "None": {
                            return "";
                            break;
                          }
                          case "Some": {
                            const $f30221 = $t30220._0;
                            {
                              const sv = $f30221;
                              return sv;
                            }
                            break;
                          }
                          default: {
                            return (() => { throw new Error("non-exhaustive pattern match"); })();
                          }
                        }
                      }
                    })();
                    {
                      const $p30224 = (() => {
                        {
                          const $rc_867 = Perihelion$Core$decode_save(saved);
                          return $rc_867;
                        }
                      })();
                      {
                        const best = $p30224._0;
                        {
                          const runs = $p30224._1;
                          {
                            const $t30223 = (() => {
                              return { $: "$Clo_$lam30222$3830", _0: $lam30222$apply$3830, _1: best, _2: ctx, _3: node, _4: runs };
                            })();
                            return Dom$on_frame($t30223);
                          }
                        }
                      }
                    }
                  }
                }
                break;
              }
              default: {
                return (() => { throw new Error("non-exhaustive pattern match"); })();
              }
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const main$clo = { _0: ($_) => main() };

function println$String(x) {
  (() => {
    {
      const $t107 = x;
      {
        const $rc_874 = march_print(x);
        return $rc_874;
      }
    }
  })();
  return march_print("\n");
}
const println$String$clo = { _0: ($_, x) => println$String(x) };

function List$any$List_String$Fn_String_Bool(xs, pred) {
  switch (xs.$) {
    case "Nil": {
      return false;
      break;
    }
    case "Cons": {
      const $f417 = xs._0;
      const $f418 = xs._1;
      {
        const t = $f418;
        {
          const h = $f417;
          {
            const $t416 = (() => {
              return pred._0(pred, h);
            })();
            if ($t416 === true) {
              return true;
            } else {
              return List$any$List_String$Fn_String_Bool(t, pred);
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$any$List_String$Fn_String_Bool$clo = { _0: ($_, xs, pred) => List$any$List_String$Fn_String_Bool(xs, pred) };

function List$any$List_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float_Bool(xs, pred) {
  switch (xs.$) {
    case "Nil": {
      return false;
      break;
    }
    case "Cons": {
      const $f417 = xs._0;
      const $f418 = xs._1;
      {
        const t = $f418;
        {
          const h = $f417;
          {
            const $t416 = (() => {
              return pred._0(pred, h);
            })();
            if ($t416 === true) {
              return true;
            } else {
              return List$any$List_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float_Bool(t, pred);
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$any$List_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float_Bool$clo = { _0: ($_, xs, pred) => List$any$List_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float_Bool(xs, pred) };

function List$any$List_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float_Bool(xs, pred) {
  switch (xs.$) {
    case "Nil": {
      return false;
      break;
    }
    case "Cons": {
      const $f417 = xs._0;
      const $f418 = xs._1;
      {
        const t = $f418;
        {
          const h = $f417;
          {
            const $t416 = (() => {
              return pred._0(pred, h);
            })();
            if ($t416 === true) {
              return true;
            } else {
              return List$any$List_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float_Bool(t, pred);
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$any$List_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float_Bool$clo = { _0: ($_, xs, pred) => List$any$List_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float_Bool(xs, pred) };

function List$any$List_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float$Fn_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float_Bool(xs, pred) {
  switch (xs.$) {
    case "Nil": {
      return false;
      break;
    }
    case "Cons": {
      const $f417 = xs._0;
      const $f418 = xs._1;
      {
        const t = $f418;
        {
          const h = $f417;
          {
            const $t416 = (() => {
              return pred._0(pred, h);
            })();
            if ($t416 === true) {
              return true;
            } else {
              return List$any$List_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float$Fn_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float_Bool(t, pred);
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$any$List_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float$Fn_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float_Bool$clo = { _0: ($_, xs, pred) => List$any$List_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float$Fn_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float_Bool(xs, pred) };

function List$find$List_R_kind_UpgradeKind_ttl_Float_x_Float_y_Float$Fn_R_kind_UpgradeKind_ttl_Float_x_Float_y_Float_Bool(xs, pred) {
  switch (xs.$) {
    case "Nil": {
      return { $: "None" };
      break;
    }
    case "Cons": {
      const $f402 = xs._0;
      const $f403 = xs._1;
      {
        const t = $f403;
        {
          const h = $f402;
          {
            const $t401 = (() => {
              return pred._0(pred, h);
            })();
            if ($t401 === true) {
              return { $: "Some", _0: h };
            } else {
              return List$find$List_R_kind_UpgradeKind_ttl_Float_x_Float_y_Float$Fn_R_kind_UpgradeKind_ttl_Float_x_Float_y_Float_Bool(t, pred);
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$find$List_R_kind_UpgradeKind_ttl_Float_x_Float_y_Float$Fn_R_kind_UpgradeKind_ttl_Float_x_Float_y_Float_Bool$clo = { _0: ($_, xs, pred) => List$find$List_R_kind_UpgradeKind_ttl_Float_x_Float_y_Float$Fn_R_kind_UpgradeKind_ttl_Float_x_Float_y_Float_Bool(xs, pred) };

function List$nth_opt$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int(xs, n) {
  switch (xs.$) {
    case "Nil": {
      return { $: "None" };
      break;
    }
    case "Cons": {
      const $f233 = xs._0;
      const $f234 = xs._1;
      {
        const t = $f234;
        {
          const h = $f233;
          {
            const $t231 = (n === 0);
            if ($t231 === true) {
              return { $: "Some", _0: h };
            } else {
              return (() => {
                {
                  const $t232 = (n - 1);
                  return List$nth_opt$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int(t, $t232);
                }
              })();
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$nth_opt$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int$clo = { _0: ($_, xs, n) => List$nth_opt$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int(xs, n) };

function List$drop$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int(xs, n) {
  {
    const $t509 = (n <= 0);
    if ($t509 === true) {
      return xs;
    } else {
      return (() => {
        switch (xs.$) {
          case "Nil": {
            return { $: "Nil" };
            break;
          }
          case "Cons": {
            const $f511 = xs._0;
            const $f512 = xs._1;
            {
              const t = $f512;
              {
                const $t510 = (n - 1);
                return List$drop$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int(t, $t510);
              }
            }
            break;
          }
          default: {
            return (() => { throw new Error("non-exhaustive pattern match"); })();
          }
        }
      })();
    }
  }
}
const List$drop$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int$clo = { _0: ($_, xs, n) => List$drop$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int(xs, n) };

function List$nth_opt$List_R_radius_Float_speed_mult_Float$Int(xs, n) {
  switch (xs.$) {
    case "Nil": {
      return { $: "None" };
      break;
    }
    case "Cons": {
      const $f233 = xs._0;
      const $f234 = xs._1;
      {
        const t = $f234;
        {
          const h = $f233;
          {
            const $t231 = (n === 0);
            if ($t231 === true) {
              return { $: "Some", _0: h };
            } else {
              return (() => {
                {
                  const $t232 = (n - 1);
                  return List$nth_opt$List_R_radius_Float_speed_mult_Float$Int(t, $t232);
                }
              })();
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$nth_opt$List_R_radius_Float_speed_mult_Float$Int$clo = { _0: ($_, xs, n) => List$nth_opt$List_R_radius_Float_speed_mult_Float$Int(xs, n) };

function List$nth_opt$List_WeaponKind$Int(xs, n) {
  switch (xs.$) {
    case "Nil": {
      return { $: "None" };
      break;
    }
    case "Cons": {
      const $f233 = xs._0;
      const $f234 = xs._1;
      {
        const t = $f234;
        {
          const h = $f233;
          {
            const $t231 = (n === 0);
            if ($t231 === true) {
              return { $: "Some", _0: h };
            } else {
              return (() => {
                {
                  const $t232 = (n - 1);
                  return List$nth_opt$List_WeaponKind$Int(t, $t232);
                }
              })();
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$nth_opt$List_WeaponKind$Int$clo = { _0: ($_, xs, n) => List$nth_opt$List_WeaponKind$Int(xs, n) };

function List$nth_opt$List_UpgradeKind$Int(xs, n) {
  switch (xs.$) {
    case "Nil": {
      return { $: "None" };
      break;
    }
    case "Cons": {
      const $f233 = xs._0;
      const $f234 = xs._1;
      {
        const t = $f234;
        {
          const h = $f233;
          {
            const $t231 = (n === 0);
            if ($t231 === true) {
              return { $: "Some", _0: h };
            } else {
              return (() => {
                {
                  const $t232 = (n - 1);
                  return List$nth_opt$List_UpgradeKind$Int(t, $t232);
                }
              })();
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$nth_opt$List_UpgradeKind$Int$clo = { _0: ($_, xs, n) => List$nth_opt$List_UpgradeKind$Int(xs, n) };

function List$drop$List_UpgradeKind$Int(xs, n) {
  {
    const $t509 = (n <= 0);
    if ($t509 === true) {
      return xs;
    } else {
      return (() => {
        switch (xs.$) {
          case "Nil": {
            return { $: "Nil" };
            break;
          }
          case "Cons": {
            const $f511 = xs._0;
            const $f512 = xs._1;
            {
              const t = $f512;
              {
                const $t510 = (n - 1);
                return List$drop$List_UpgradeKind$Int(t, $t510);
              }
            }
            break;
          }
          default: {
            return (() => { throw new Error("non-exhaustive pattern match"); })();
          }
        }
      })();
    }
  }
}
const List$drop$List_UpgradeKind$Int$clo = { _0: ($_, xs, n) => List$drop$List_UpgradeKind$Int(xs, n) };

function List$nth$List_UpgradeKind$Int(xs, n) {
  switch (xs.$) {
    case "Nil": {
      return (() => { throw new Error("List.nth: index out of bounds"); })();
      break;
    }
    case "Cons": {
      const $f225 = xs._0;
      const $f226 = xs._1;
      {
        const t = $f226;
        {
          const h = $f225;
          {
            const $t223 = (n === 0);
            if ($t223 === true) {
              return h;
            } else {
              return (() => {
                {
                  const $t224 = (n - 1);
                  return List$nth$List_UpgradeKind$Int(t, $t224);
                }
              })();
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$nth$List_UpgradeKind$Int$clo = { _0: ($_, xs, n) => List$nth$List_UpgradeKind$Int(xs, n) };

function List$any$List_WeaponKind$Fn_WeaponKind_Bool(xs, pred) {
  switch (xs.$) {
    case "Nil": {
      return false;
      break;
    }
    case "Cons": {
      const $f417 = xs._0;
      const $f418 = xs._1;
      {
        const t = $f418;
        {
          const h = $f417;
          {
            const $t416 = (() => {
              return pred._0(pred, h);
            })();
            if ($t416 === true) {
              return true;
            } else {
              return List$any$List_WeaponKind$Fn_WeaponKind_Bool(t, pred);
            }
          }
        }
      }
      break;
    }
    default: {
      return (() => { throw new Error("non-exhaustive pattern match"); })();
    }
  }
}
const List$any$List_WeaponKind$Fn_WeaponKind_Bool$clo = { _0: ($_, xs, pred) => List$any$List_WeaponKind$Fn_WeaponKind_Bool(xs, pred) };

function $lam27490$apply$3672($clo, s) {
  {
    const dt_s = (() => {
      return $clo._1;
    })();
    {
      const g1 = (() => {
        return $clo._2;
      })();
      {
        const $t27491 = g1.asteroids;
        {
          const $t27492 = g1.ships;
          return Perihelion$Combat$age_shot(s, dt_s, $t27491, $t27492);
        }
      }
    }
  }
}
const $lam27490$apply$3672$clo = { _0: ($_, $clo, s) => $lam27490$apply$3672($clo, s) };

function $lam27495$apply$3673($clo, s) {
  {
    const g1 = (() => {
      return $clo._1;
    })();
    {
      const $t27497 = (() => {
        {
          const $t27496 = s.ttl;
          return ($t27496 > 0.);
        }
      })();
      {
        const $t27500 = (() => {
          {
            const $t27498 = s.x;
            {
              const $t27499 = s.y;
              return Perihelion$Combat$in_band(g1, $t27498, $t27499);
            }
          }
        })();
        return ($t27497 && $t27500);
      }
    }
  }
}
const $lam27495$apply$3673$clo = { _0: ($_, $clo, s) => $lam27495$apply$3673($clo, s) };

function $lam27503$apply$3674($clo, s) {
  {
    const dt_s = (() => {
      return $clo._1;
    })();
    {
      const g1 = (() => {
        return $clo._2;
      })();
      {
        const $t27504 = g1.asteroids;
        {
          const $t27505 = g1.ships;
          return Perihelion$Combat$age_shot(s, dt_s, $t27504, $t27505);
        }
      }
    }
  }
}
const $lam27503$apply$3674$clo = { _0: ($_, $clo, s) => $lam27503$apply$3674($clo, s) };

function $lam27508$apply$3675($clo, s) {
  {
    const g1 = (() => {
      return $clo._1;
    })();
    {
      const $t27510 = (() => {
        {
          const $t27509 = s.ttl;
          return ($t27509 > 0.);
        }
      })();
      {
        const $t27513 = (() => {
          {
            const $t27511 = s.x;
            {
              const $t27512 = s.y;
              return Perihelion$Combat$in_band(g1, $t27511, $t27512);
            }
          }
        })();
        return ($t27510 && $t27513);
      }
    }
  }
}
const $lam27508$apply$3675$clo = { _0: ($_, $clo, s) => $lam27508$apply$3675($clo, s) };

function $lam27516$apply$3676($clo, p) {
  {
    const dt_s = (() => {
      return $clo._1;
    })();
    {
      const $t27518 = (() => {
        {
          const $t27517 = p.ttl;
          return ($t27517 - dt_s);
        }
      })();
      return ({ ...p, ttl: $t27518 });
    }
  }
}
const $lam27516$apply$3676$clo = { _0: ($_, $clo, p) => $lam27516$apply$3676($clo, p) };

function $lam27521$apply$3677($clo, p) {
  {
    const $t27522 = p.ttl;
    return ($t27522 > 0.);
  }
}
const $lam27521$apply$3677$clo = { _0: ($_, $clo, p) => $lam27521$apply$3677($clo, p) };

function $lam27929$apply$3694($clo, k) {
  return (k === " ");
}
const $lam27929$apply$3694$clo = { _0: ($_, $clo, k) => $lam27929$apply$3694($clo, k) };

function $lam27998$apply$3697($clo, sh) {
  {
    const tidx = (() => {
      return $clo._1;
    })();
    {
      const $t27999 = sh.star_idx;
      return ($t27999 !== tidx);
    }
  }
}
const $lam27998$apply$3697$clo = { _0: ($_, $clo, sh) => $lam27998$apply$3697($clo, sh) };

function $lam28002$apply$3698($clo, sh) {
  {
    const tidx = (() => {
      return $clo._1;
    })();
    {
      const $t28004 = (() => {
        {
          const $t28003 = sh.star_idx;
          return ($t28003 > tidx);
        }
      })();
      if ($t28004 === true) {
        return (() => {
          {
            const $t28006 = (() => {
              {
                const $t28005 = sh.star_idx;
                return ($t28005 - 1);
              }
            })();
            return ({ ...sh, star_idx: $t28006 });
          }
        })();
      } else {
        return sh;
      }
    }
  }
}
const $lam28002$apply$3698$clo = { _0: ($_, $clo, sh) => $lam28002$apply$3698($clo, sh) };

function $lam28019$apply$3700($clo, s) {
  return s.star_killer;
}
const $lam28019$apply$3700$clo = { _0: ($_, $clo, s) => $lam28019$apply$3700($clo, s) };

function $lam28032$apply$3702($clo, sh) {
  {
    const $t28033 = sh.star_killer;
    return (!$t28033);
  }
}
const $lam28032$apply$3702$clo = { _0: ($_, $clo, sh) => $lam28032$apply$3702($clo, sh) };

function $lam28039$apply$3703($clo, sh) {
  {
    const $t28040 = sh.star_killer;
    return (!$t28040);
  }
}
const $lam28039$apply$3703$clo = { _0: ($_, $clo, sh) => $lam28039$apply$3703($clo, sh) };

function $lam28053$apply$3704($clo, a) {
  {
    const $t28054 = a.x;
    {
      const $t28055 = a.y;
      return { _0: $t28054, _1: $t28055 };
    }
  }
}
const $lam28053$apply$3704$clo = { _0: ($_, $clo, a) => $lam28053$apply$3704($clo, a) };

function $lam28062$apply$3705($clo, a) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28063 = game.player_shots;
      {
        const $t28068 = { $: "$Clo_$lam28064$3706", _0: $lam28064$apply$3706, _1: a };
        return List$any$List_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float_Bool($t28063, $t28068);
      }
    }
  }
}
const $lam28062$apply$3705$clo = { _0: ($_, $clo, a) => $lam28062$apply$3705($clo, a) };

function $lam28064$apply$3706($clo, s) {
  {
    const a = (() => {
      return $clo._1;
    })();
    {
      const $t28065 = a.x;
      {
        const $t28066 = a.y;
        {
          const $t28067 = a.radius;
          {
            const $t28050_i10707 = s.x;
            {
              const $t28051_i10708 = s.y;
              {
                const $t27359_i10042_i10713 = (() => {
                  {
                    const dx_i3632_i10038_i10709 = ($t28065 - $t28050_i10707);
                    {
                      const dy_i3633_i10039_i10710 = ($t28066 - $t28051_i10708);
                      {
                        const $t27357_i3634_i10040_i10711 = (dx_i3632_i10038_i10709 * dx_i3632_i10038_i10709);
                        {
                          const $t27358_i3635_i10041_i10712 = (dy_i3633_i10039_i10710 * dy_i3633_i10039_i10710);
                          return ($t27357_i3634_i10040_i10711 + $t27358_i3635_i10041_i10712);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10045_i10716 = (() => {
                    {
                      const $t27360_i10043_i10714 = (3. + $t28067);
                      {
                        const $t27361_i10044_i10715 = (3. + $t28067);
                        return ($t27360_i10043_i10714 * $t27361_i10044_i10715);
                      }
                    }
                  })();
                  return ($t27359_i10042_i10713 <= $t27362_i10045_i10716);
                }
              }
            }
          }
        }
      }
    }
  }
}
const $lam28064$apply$3706$clo = { _0: ($_, $clo, s) => $lam28064$apply$3706($clo, s) };

function $lam28071$apply$3707($clo, s) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28078 = (() => {
        {
          const $t28072 = game.asteroids;
          {
            const $t28077 = { $: "$Clo_$lam28073$3708", _0: $lam28073$apply$3708, _1: s };
            return List$any$List_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_mode_AsteroidMode_radius_Float_shape_seed_Float_vx_Float_vy_Float_x_Float_y_Float_Bool($t28072, $t28077);
          }
        }
      })();
      return (!$t28078);
    }
  }
}
const $lam28071$apply$3707$clo = { _0: ($_, $clo, s) => $lam28071$apply$3707($clo, s) };

function $lam28073$apply$3708($clo, a) {
  {
    const s = (() => {
      return $clo._1;
    })();
    {
      const $t28074 = a.x;
      {
        const $t28075 = a.y;
        {
          const $t28076 = a.radius;
          {
            const $t28050_i10721 = s.x;
            {
              const $t28051_i10722 = s.y;
              {
                const $t27359_i10042_i10727 = (() => {
                  {
                    const dx_i3632_i10038_i10723 = ($t28074 - $t28050_i10721);
                    {
                      const dy_i3633_i10039_i10724 = ($t28075 - $t28051_i10722);
                      {
                        const $t27357_i3634_i10040_i10725 = (dx_i3632_i10038_i10723 * dx_i3632_i10038_i10723);
                        {
                          const $t27358_i3635_i10041_i10726 = (dy_i3633_i10039_i10724 * dy_i3633_i10039_i10724);
                          return ($t27357_i3634_i10040_i10725 + $t27358_i3635_i10041_i10726);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10045_i10730 = (() => {
                    {
                      const $t27360_i10043_i10728 = (3. + $t28076);
                      {
                        const $t27361_i10044_i10729 = (3. + $t28076);
                        return ($t27360_i10043_i10728 * $t27361_i10044_i10729);
                      }
                    }
                  })();
                  return ($t27359_i10042_i10727 <= $t27362_i10045_i10730);
                }
              }
            }
          }
        }
      }
    }
  }
}
const $lam28073$apply$3708$clo = { _0: ($_, $clo, a) => $lam28073$apply$3708($clo, a) };

function $lam28097$apply$3709($clo, sh) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28098 = game.player_shots;
      {
        const $t28100 = { $: "$Clo_$lam28099$3710", _0: $lam28099$apply$3710, _1: sh };
        return List$any$List_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float$Fn_R_homing_Bool_star_killer_Bool_target_x_Float_target_y_Float_ttl_Float_vx_Float_vy_Float_x_Float_y_Float_Bool($t28098, $t28100);
      }
    }
  }
}
const $lam28097$apply$3709$clo = { _0: ($_, $clo, sh) => $lam28097$apply$3709($clo, sh) };

function $lam28099$apply$3710($clo, s) {
  {
    const sh = (() => {
      return $clo._1;
    })();
    return Perihelion$Combat$ship_shot_hit(sh, s);
  }
}
const $lam28099$apply$3710$clo = { _0: ($_, $clo, s) => $lam28099$apply$3710($clo, s) };

function $lam28103$apply$3711($clo, s) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28107 = (() => {
        {
          const $t28104 = game.ships;
          {
            const $t28106 = { $: "$Clo_$lam28105$3712", _0: $lam28105$apply$3712, _1: s };
            return List$any$List_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float$Fn_R_fire_cooldown_Float_hunter_Bool_idle_timer_Float_mode_ShipMode_star_idx_Int_x_Float_y_Float_Bool($t28104, $t28106);
          }
        }
      })();
      return (!$t28107);
    }
  }
}
const $lam28103$apply$3711$clo = { _0: ($_, $clo, s) => $lam28103$apply$3711($clo, s) };

function $lam28105$apply$3712($clo, sh) {
  {
    const s = (() => {
      return $clo._1;
    })();
    return Perihelion$Combat$ship_shot_hit(sh, s);
  }
}
const $lam28105$apply$3712$clo = { _0: ($_, $clo, sh) => $lam28105$apply$3712($clo, sh) };

function $lam28160$apply$3714($clo, p) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28153_i10733 = p.x;
      {
        const $t28154_i10734 = p.y;
        {
          const $t28156_i10735 = game.ball_x;
          {
            const $t28157_i10736 = game.ball_y;
            {
              const $t27359_i10074_i10741 = (() => {
                {
                  const dx_i3632_i10070_i10737 = ($t28156_i10735 - $t28153_i10733);
                  {
                    const dy_i3633_i10071_i10738 = ($t28157_i10736 - $t28154_i10734);
                    {
                      const $t27357_i3634_i10072_i10739 = (dx_i3632_i10070_i10737 * dx_i3632_i10070_i10737);
                      {
                        const $t27358_i3635_i10073_i10740 = (dy_i3633_i10071_i10738 * dy_i3633_i10071_i10738);
                        return ($t27357_i3634_i10072_i10739 + $t27358_i3635_i10073_i10740);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10077_i10744 = (() => {
                  {
                    const $t27360_i10075_i10742 = (12. + 6.);
                    {
                      const $t27361_i10076_i10743 = (12. + 6.);
                      return ($t27360_i10075_i10742 * $t27361_i10076_i10743);
                    }
                  }
                })();
                return ($t27359_i10074_i10741 <= $t27362_i10077_i10744);
              }
            }
          }
        }
      }
    }
  }
}
const $lam28160$apply$3714$clo = { _0: ($_, $clo, p) => $lam28160$apply$3714($clo, p) };

function $lam28164$apply$3715($clo, q) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28165 = (() => {
        {
          const $t28153_i10747 = q.x;
          {
            const $t28154_i10748 = q.y;
            {
              const $t28156_i10749 = game.ball_x;
              {
                const $t28157_i10750 = game.ball_y;
                {
                  const $t27359_i10074_i10755 = (() => {
                    {
                      const dx_i3632_i10070_i10751 = ($t28156_i10749 - $t28153_i10747);
                      {
                        const dy_i3633_i10071_i10752 = ($t28157_i10750 - $t28154_i10748);
                        {
                          const $t27357_i3634_i10072_i10753 = (dx_i3632_i10070_i10751 * dx_i3632_i10070_i10751);
                          {
                            const $t27358_i3635_i10073_i10754 = (dy_i3633_i10071_i10752 * dy_i3633_i10071_i10752);
                            return ($t27357_i3634_i10072_i10753 + $t27358_i3635_i10073_i10754);
                          }
                        }
                      }
                    }
                  })();
                  {
                    const $t27362_i10077_i10758 = (() => {
                      {
                        const $t27360_i10075_i10756 = (12. + 6.);
                        {
                          const $t27361_i10076_i10757 = (12. + 6.);
                          return ($t27360_i10075_i10756 * $t27361_i10076_i10757);
                        }
                      }
                    })();
                    return ($t27359_i10074_i10755 <= $t27362_i10077_i10758);
                  }
                }
              }
            }
          }
        }
      })();
      return (!$t28165);
    }
  }
}
const $lam28164$apply$3715$clo = { _0: ($_, $clo, q) => $lam28164$apply$3715($clo, q) };

function $jp28182$apply$3716($clo) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const p = (() => {
        return $clo._2;
      })();
      {
        const remaining = (() => {
          return $clo._3;
        })();
        {
          const $t28180 = (() => {
            {
              const $t28179 = p.kind;
              return Perihelion$Core$apply_upgrade(game, $t28179);
            }
          })();
          return ({ ...$t28180, pickups: remaining });
        }
      }
    }
  }
}
const $jp28182$apply$3716$clo = { _0: ($_, $clo) => $jp28182$apply$3716($clo) };

function $jp28186$apply$3717($clo) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const p = (() => {
        return $clo._2;
      })();
      {
        const remaining = (() => {
          return $clo._3;
        })();
        {
          const $t28180 = (() => {
            {
              const $t28179 = p.kind;
              return Perihelion$Core$apply_upgrade(game, $t28179);
            }
          })();
          return ({ ...$t28180, pickups: remaining });
        }
      }
    }
  }
}
const $jp28186$apply$3717$clo = { _0: ($_, $clo) => $jp28186$apply$3717($clo) };

function $lam28207$apply$3718($clo, s) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28200_i10882 = game.ball_x;
      {
        const $t28201_i10883 = game.ball_y;
        {
          const $t28050_i10495_i10884 = s.x;
          {
            const $t28051_i10496_i10885 = s.y;
            {
              const $t27359_i10042_i10501_i10890 = (() => {
                {
                  const dx_i3632_i10038_i10497_i10886 = ($t28200_i10882 - $t28050_i10495_i10884);
                  {
                    const dy_i3633_i10039_i10498_i10887 = ($t28201_i10883 - $t28051_i10496_i10885);
                    {
                      const $t27357_i3634_i10040_i10499_i10888 = (dx_i3632_i10038_i10497_i10886 * dx_i3632_i10038_i10497_i10886);
                      {
                        const $t27358_i3635_i10041_i10500_i10889 = (dy_i3633_i10039_i10498_i10887 * dy_i3633_i10039_i10498_i10887);
                        return ($t27357_i3634_i10040_i10499_i10888 + $t27358_i3635_i10041_i10500_i10889);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10045_i10504_i10893 = (() => {
                  {
                    const $t27360_i10043_i10502_i10891 = (3. + 6.);
                    {
                      const $t27361_i10044_i10503_i10892 = (3. + 6.);
                      return ($t27360_i10043_i10502_i10891 * $t27361_i10044_i10503_i10892);
                    }
                  }
                })();
                return ($t27359_i10042_i10501_i10890 <= $t27362_i10045_i10504_i10893);
              }
            }
          }
        }
      }
    }
  }
}
const $lam28207$apply$3718$clo = { _0: ($_, $clo, s) => $lam28207$apply$3718($clo, s) };

function $lam28212$apply$3719($clo, s) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28213 = (() => {
        {
          const $t28200_i10896 = game.ball_x;
          {
            const $t28201_i10897 = game.ball_y;
            {
              const $t28050_i10495_i10898 = s.x;
              {
                const $t28051_i10496_i10899 = s.y;
                {
                  const $t27359_i10042_i10501_i10904 = (() => {
                    {
                      const dx_i3632_i10038_i10497_i10900 = ($t28200_i10896 - $t28050_i10495_i10898);
                      {
                        const dy_i3633_i10039_i10498_i10901 = ($t28201_i10897 - $t28051_i10496_i10899);
                        {
                          const $t27357_i3634_i10040_i10499_i10902 = (dx_i3632_i10038_i10497_i10900 * dx_i3632_i10038_i10497_i10900);
                          {
                            const $t27358_i3635_i10041_i10500_i10903 = (dy_i3633_i10039_i10498_i10901 * dy_i3633_i10039_i10498_i10901);
                            return ($t27357_i3634_i10040_i10499_i10902 + $t27358_i3635_i10041_i10500_i10903);
                          }
                        }
                      }
                    }
                  })();
                  {
                    const $t27362_i10045_i10504_i10907 = (() => {
                      {
                        const $t27360_i10043_i10502_i10905 = (3. + 6.);
                        {
                          const $t27361_i10044_i10503_i10906 = (3. + 6.);
                          return ($t27360_i10043_i10502_i10905 * $t27361_i10044_i10503_i10906);
                        }
                      }
                    })();
                    return ($t27359_i10042_i10501_i10904 <= $t27362_i10045_i10504_i10907);
                  }
                }
              }
            }
          }
        }
      })();
      return (!$t28213);
    }
  }
}
const $lam28212$apply$3719$clo = { _0: ($_, $clo, s) => $lam28212$apply$3719($clo, s) };

function $lam28217$apply$3720($clo, a) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28194_i10761 = a.x;
      {
        const $t28195_i10762 = a.y;
        {
          const $t28196_i10763 = a.radius;
          {
            const $t28197_i10764 = game.ball_x;
            {
              const $t28198_i10765 = game.ball_y;
              {
                const $t27359_i10102_i10770 = (() => {
                  {
                    const dx_i3632_i10098_i10766 = ($t28197_i10764 - $t28194_i10761);
                    {
                      const dy_i3633_i10099_i10767 = ($t28198_i10765 - $t28195_i10762);
                      {
                        const $t27357_i3634_i10100_i10768 = (dx_i3632_i10098_i10766 * dx_i3632_i10098_i10766);
                        {
                          const $t27358_i3635_i10101_i10769 = (dy_i3633_i10099_i10767 * dy_i3633_i10099_i10767);
                          return ($t27357_i3634_i10100_i10768 + $t27358_i3635_i10101_i10769);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10105_i10773 = (() => {
                    {
                      const $t27360_i10103_i10771 = ($t28196_i10763 + 6.);
                      {
                        const $t27361_i10104_i10772 = ($t28196_i10763 + 6.);
                        return ($t27360_i10103_i10771 * $t27361_i10104_i10772);
                      }
                    }
                  })();
                  return ($t27359_i10102_i10770 <= $t27362_i10105_i10773);
                }
              }
            }
          }
        }
      }
    }
  }
}
const $lam28217$apply$3720$clo = { _0: ($_, $clo, a) => $lam28217$apply$3720($clo, a) };

function $lam28220$apply$3721($clo, sh) {
  {
    const game = (() => {
      return $clo._1;
    })();
    return Perihelion$Combat$ball_hits_ship(game, sh);
  }
}
const $lam28220$apply$3721$clo = { _0: ($_, $clo, sh) => $lam28220$apply$3721($clo, sh) };

function $lam28236$apply$3722($clo, a) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28194_i10776 = a.x;
      {
        const $t28195_i10777 = a.y;
        {
          const $t28196_i10778 = a.radius;
          {
            const $t28197_i10779 = game.ball_x;
            {
              const $t28198_i10780 = game.ball_y;
              {
                const $t27359_i10102_i10785 = (() => {
                  {
                    const dx_i3632_i10098_i10781 = ($t28197_i10779 - $t28194_i10776);
                    {
                      const dy_i3633_i10099_i10782 = ($t28198_i10780 - $t28195_i10777);
                      {
                        const $t27357_i3634_i10100_i10783 = (dx_i3632_i10098_i10781 * dx_i3632_i10098_i10781);
                        {
                          const $t27358_i3635_i10101_i10784 = (dy_i3633_i10099_i10782 * dy_i3633_i10099_i10782);
                          return ($t27357_i3634_i10100_i10783 + $t27358_i3635_i10101_i10784);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10105_i10788 = (() => {
                    {
                      const $t27360_i10103_i10786 = ($t28196_i10778 + 6.);
                      {
                        const $t27361_i10104_i10787 = ($t28196_i10778 + 6.);
                        return ($t27360_i10103_i10786 * $t27361_i10104_i10787);
                      }
                    }
                  })();
                  return ($t27359_i10102_i10785 <= $t27362_i10105_i10788);
                }
              }
            }
          }
        }
      }
    }
  }
}
const $lam28236$apply$3722$clo = { _0: ($_, $clo, a) => $lam28236$apply$3722($clo, a) };

function $lam28241$apply$3723($clo, a) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28242 = (() => {
        {
          const $t28194_i10791 = a.x;
          {
            const $t28195_i10792 = a.y;
            {
              const $t28196_i10793 = a.radius;
              {
                const $t28197_i10794 = game.ball_x;
                {
                  const $t28198_i10795 = game.ball_y;
                  {
                    const $t27359_i10102_i10800 = (() => {
                      {
                        const dx_i3632_i10098_i10796 = ($t28197_i10794 - $t28194_i10791);
                        {
                          const dy_i3633_i10099_i10797 = ($t28198_i10795 - $t28195_i10792);
                          {
                            const $t27357_i3634_i10100_i10798 = (dx_i3632_i10098_i10796 * dx_i3632_i10098_i10796);
                            {
                              const $t27358_i3635_i10101_i10799 = (dy_i3633_i10099_i10797 * dy_i3633_i10099_i10797);
                              return ($t27357_i3634_i10100_i10798 + $t27358_i3635_i10101_i10799);
                            }
                          }
                        }
                      }
                    })();
                    {
                      const $t27362_i10105_i10803 = (() => {
                        {
                          const $t27360_i10103_i10801 = ($t28196_i10793 + 6.);
                          {
                            const $t27361_i10104_i10802 = ($t28196_i10793 + 6.);
                            return ($t27360_i10103_i10801 * $t27361_i10104_i10802);
                          }
                        }
                      })();
                      return ($t27359_i10102_i10800 <= $t27362_i10105_i10803);
                    }
                  }
                }
              }
            }
          }
        }
      })();
      return (!$t28242);
    }
  }
}
const $lam28241$apply$3723$clo = { _0: ($_, $clo, a) => $lam28241$apply$3723($clo, a) };

function $lam28246$apply$3724($clo, s) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28247 = (() => {
        {
          const $t28200_i10910 = game.ball_x;
          {
            const $t28201_i10911 = game.ball_y;
            {
              const $t28050_i10495_i10912 = s.x;
              {
                const $t28051_i10496_i10913 = s.y;
                {
                  const $t27359_i10042_i10501_i10918 = (() => {
                    {
                      const dx_i3632_i10038_i10497_i10914 = ($t28200_i10910 - $t28050_i10495_i10912);
                      {
                        const dy_i3633_i10039_i10498_i10915 = ($t28201_i10911 - $t28051_i10496_i10913);
                        {
                          const $t27357_i3634_i10040_i10499_i10916 = (dx_i3632_i10038_i10497_i10914 * dx_i3632_i10038_i10497_i10914);
                          {
                            const $t27358_i3635_i10041_i10500_i10917 = (dy_i3633_i10039_i10498_i10915 * dy_i3633_i10039_i10498_i10915);
                            return ($t27357_i3634_i10040_i10499_i10916 + $t27358_i3635_i10041_i10500_i10917);
                          }
                        }
                      }
                    }
                  })();
                  {
                    const $t27362_i10045_i10504_i10921 = (() => {
                      {
                        const $t27360_i10043_i10502_i10919 = (3. + 6.);
                        {
                          const $t27361_i10044_i10503_i10920 = (3. + 6.);
                          return ($t27360_i10043_i10502_i10919 * $t27361_i10044_i10503_i10920);
                        }
                      }
                    })();
                    return ($t27359_i10042_i10501_i10918 <= $t27362_i10045_i10504_i10921);
                  }
                }
              }
            }
          }
        }
      })();
      return (!$t28247);
    }
  }
}
const $lam28246$apply$3724$clo = { _0: ($_, $clo, s) => $lam28246$apply$3724($clo, s) };

function $lam28251$apply$3725($clo, sh) {
  {
    const game = (() => {
      return $clo._1;
    })();
    {
      const $t28252 = Perihelion$Combat$ball_hits_ship(game, sh);
      return (!$t28252);
    }
  }
}
const $lam28251$apply$3725$clo = { _0: ($_, $clo, sh) => $lam28251$apply$3725($clo, sh) };

function $lam28331$apply$3726($clo, k) {
  {
    const $t28332 = (() => {
      return (k === "w");
    })();
    {
      const $t28333 = (k === "W");
      return ($t28332 || $t28333);
    }
  }
}
const $lam28331$apply$3726$clo = { _0: ($_, $clo, k) => $lam28331$apply$3726($clo, k) };

function $lam28335$apply$3727($clo, k) {
  {
    const $t28336 = (() => {
      return (k === "s");
    })();
    {
      const $t28337 = (k === "S");
      return ($t28336 || $t28337);
    }
  }
}
const $lam28335$apply$3727$clo = { _0: ($_, $clo, k) => $lam28335$apply$3727($clo, k) };

function $lam28350$apply$3728($clo, k) {
  {
    const $t28351 = (() => {
      return (k === "e");
    })();
    {
      const $t28352 = (k === "E");
      return ($t28351 || $t28352);
    }
  }
}
const $lam28350$apply$3728$clo = { _0: ($_, $clo, k) => $lam28350$apply$3728($clo, k) };

function $lam28354$apply$3729($clo, k) {
  {
    const $t28355 = (() => {
      return (k === "q");
    })();
    {
      const $t28356 = (k === "Q");
      return ($t28355 || $t28356);
    }
  }
}
const $lam28354$apply$3729$clo = { _0: ($_, $clo, k) => $lam28354$apply$3729($clo, k) };

function $lam28362$apply$3730($clo, k) {
  {
    const $t28363 = (() => {
      return (k === "d");
    })();
    {
      const $t28364 = (k === "D");
      return ($t28363 || $t28364);
    }
  }
}
const $lam28362$apply$3730$clo = { _0: ($_, $clo, k) => $lam28362$apply$3730($clo, k) };

function $lam28366$apply$3731($clo, k) {
  {
    const $t28367 = (() => {
      return (k === "w");
    })();
    {
      const $t28368 = (k === "W");
      return ($t28367 || $t28368);
    }
  }
}
const $lam28366$apply$3731$clo = { _0: ($_, $clo, k) => $lam28366$apply$3731($clo, k) };

function $lam28419$apply$3734($clo, k) {
  {
    const $t28420 = (() => {
      return (k === "x");
    })();
    {
      const $t28421 = (k === "X");
      return ($t28420 || $t28421);
    }
  }
}
const $lam28419$apply$3734$clo = { _0: ($_, $clo, k) => $lam28419$apply$3734($clo, k) };

function $lam28459$apply$3739($clo, k) {
  {
    const $t28460 = (() => {
      return (k === "r");
    })();
    {
      const $t28461 = (k === "R");
      return ($t28460 || $t28461);
    }
  }
}
const $lam28459$apply$3739$clo = { _0: ($_, $clo, k) => $lam28459$apply$3739($clo, k) };

function $jp28775$apply$3751($clo) {
  {
    const $f28770 = (() => {
      return $clo._1;
    })();
    {
      const fallback = (() => {
        return $clo._2;
      })();
      {
        const rest = (() => {
          return $f28770;
        })();
        return Perihelion$Core$top_star(rest, fallback);
      }
    }
  }
}
const $jp28775$apply$3751$clo = { _0: ($_, $clo) => $jp28775$apply$3751($clo) };

function $lam28989$apply$3763($clo, r) {
  return Perihelion$Core$encode_run(r);
}
const $lam28989$apply$3763$clo = { _0: ($_, $clo, r) => $lam28989$apply$3763($clo, r) };

function $jp29003$apply$3764($clo) {
  return { $: "None" };
}
const $jp29003$apply$3764$clo = { _0: ($_, $clo) => $jp29003$apply$3764($clo) };

function $jp29007$apply$3765($clo) {
  {
    const $jp_clo29004 = (() => {
      return $clo._1;
    })();
    {
      const $jp_clo29006 = (() => {
        return { $: "$Clo_$jp29005$3766", _0: $jp29005$apply$3766, _1: $jp_clo29004 };
      })();
      return $jp29005$apply$3766($jp_clo29006);
    }
  }
}
const $jp29007$apply$3765$clo = { _0: ($_, $clo) => $jp29007$apply$3765($clo) };

function $jp29005$apply$3766($clo) {
  {
    const $jp_clo29004 = (() => {
      return $clo._1;
    })();
    return $jp_clo29004._0($jp_clo29004);
  }
}
const $jp29005$apply$3766$clo = { _0: ($_, $clo) => $jp29005$apply$3766($clo) };

function $jp29011$apply$3767($clo) {
  {
    const $jp_clo29008 = (() => {
      return $clo._1;
    })();
    return $jp_clo29008._0($jp_clo29008);
  }
}
const $jp29011$apply$3767$clo = { _0: ($_, $clo) => $jp29011$apply$3767($clo) };

function $jp29015$apply$3768($clo) {
  {
    const $jp_clo29012 = (() => {
      return $clo._1;
    })();
    {
      const $jp_clo29014 = (() => {
        return { $: "$Clo_$jp29013$3769", _0: $jp29013$apply$3769, _1: $jp_clo29012 };
      })();
      return $jp29013$apply$3769($jp_clo29014);
    }
  }
}
const $jp29015$apply$3768$clo = { _0: ($_, $clo) => $jp29015$apply$3768($clo) };

function $jp29013$apply$3769($clo) {
  {
    const $jp_clo29012 = (() => {
      return $clo._1;
    })();
    return $jp_clo29012._0($jp_clo29012);
  }
}
const $jp29013$apply$3769$clo = { _0: ($_, $clo) => $jp29013$apply$3769($clo) };

function $jp29019$apply$3770($clo) {
  {
    const $jp_clo29016 = (() => {
      return $clo._1;
    })();
    return $jp_clo29016._0($jp_clo29016);
  }
}
const $jp29019$apply$3770$clo = { _0: ($_, $clo) => $jp29019$apply$3770($clo) };

function $jp29023$apply$3771($clo) {
  {
    const $jp_clo29020 = (() => {
      return $clo._1;
    })();
    {
      const $jp_clo29022 = (() => {
        return { $: "$Clo_$jp29021$3772", _0: $jp29021$apply$3772, _1: $jp_clo29020 };
      })();
      return $jp29021$apply$3772($jp_clo29022);
    }
  }
}
const $jp29023$apply$3771$clo = { _0: ($_, $clo) => $jp29023$apply$3771($clo) };

function $jp29021$apply$3772($clo) {
  {
    const $jp_clo29020 = (() => {
      return $clo._1;
    })();
    return $jp_clo29020._0($jp_clo29020);
  }
}
const $jp29021$apply$3772$clo = { _0: ($_, $clo) => $jp29021$apply$3772($clo) };

function $lam29219$apply$3781($clo, u) {
  {
    const owned = (() => {
      return $clo._1;
    })();
    switch (u.$) {
      case "OffenseWeapon": {
        const $f29221 = u._0;
        {
          const k = $f29221;
          {
            const $t29220 = (() => {
              {
                const $t669_i7747 = { $: "$Clo_$lam668$4791", _0: $lam668$apply$4791, _1: k };
                return List$any$List_WeaponKind$Fn_WeaponKind_Bool(owned, $t669_i7747);
              }
            })();
            return (!$t29220);
          }
        }
        break;
      }
      default: {
        return true;
      }
    }
  }
}
const $lam29219$apply$3781$clo = { _0: ($_, $clo, u) => $lam29219$apply$3781($clo, u) };

function $lam29257$apply$3782($clo, u) {
  {
    const k = (() => {
      return $clo._1;
    })();
    switch (u.$) {
      case "SpecialItem": {
        const $f29258 = u._0;
        {
          const sk = $f29258;
          return (sk !== k);
        }
        break;
      }
      default: {
        return true;
      }
    }
  }
}
const $lam29257$apply$3782$clo = { _0: ($_, $clo, u) => $lam29257$apply$3782($clo, u) };

function $jp29275$apply$3783($clo) {
  {
    const $f29269 = (() => {
      return $clo._1;
    })();
    {
      const $f29270 = (() => {
        return $clo._2;
      })();
      {
        const rest = (() => {
          return $f29270;
        })();
        {
          const k = (() => {
            return $f29269;
          })();
          {
            const $t29267 = { $: "OffenseWeapon", _0: k };
            {
              const $t29268 = Perihelion$Upgrades$owned_weapon_upgrades(rest);
              return { $: "Cons", _0: $t29267, _1: $t29268 };
            }
          }
        }
      }
    }
  }
}
const $jp29275$apply$3783$clo = { _0: ($_, $clo) => $jp29275$apply$3783($clo) };

function $lam29488$apply$3789($clo, p) {
  {
    const dt_s = (() => {
      return $clo._1;
    })();
    {
      const $t29481_i7758 = (() => {
        {
          const $t29478_i7755 = p.x;
          {
            const $t29480_i7757 = (() => {
              {
                const $t29479_i7756 = p.vx;
                return ($t29479_i7756 * dt_s);
              }
            })();
            return ($t29478_i7755 + $t29480_i7757);
          }
        }
      })();
      {
        const $t29485_i7762 = (() => {
          {
            const $t29482_i7759 = p.y;
            {
              const $t29484_i7761 = (() => {
                {
                  const $t29483_i7760 = p.vy;
                  return ($t29483_i7760 * dt_s);
                }
              })();
              return ($t29482_i7759 + $t29484_i7761);
            }
          }
        })();
        {
          const $t29487_i7764 = (() => {
            {
              const $t29486_i7763 = p.life;
              return ($t29486_i7763 - dt_s);
            }
          })();
          return ({ ...p, x: $t29481_i7758, y: $t29485_i7762, life: $t29487_i7764 });
        }
      }
    }
  }
}
const $lam29488$apply$3789$clo = { _0: ($_, $clo, p) => $lam29488$apply$3789($clo, p) };

function $lam29491$apply$3790($clo, p) {
  {
    const $t29492 = p.life;
    return ($t29492 > 0.);
  }
}
const $lam29491$apply$3790$clo = { _0: ($_, $clo, p) => $lam29491$apply$3790($clo, p) };

function $jp29637$apply$3793($clo) {
  {
    const $f29631 = (() => {
      return $clo._1;
    })();
    {
      const $f29632 = (() => {
        return $clo._2;
      })();
      {
        const ctx = (() => {
          return $clo._3;
        })();
        {
          const s = (() => {
            return $clo._4;
          })();
          {
            const rest = (() => {
              return $f29632;
            })();
            {
              const o = (() => {
                return $f29631;
              })();
              (() => {
                return Canvas$set_global_alpha(ctx, 0.16);
              })();
              (() => {
                return Canvas$set_stroke_style(ctx, "#8a8a8a");
              })();
              (() => {
                return Canvas$set_line_width(ctx, 1.);
              })();
              (() => {
                return Canvas$begin_path(ctx);
              })();
              (() => {
                {
                  const $t29627 = s.x;
                  {
                    const $t29628 = s.y;
                    {
                      const $t29629 = o.radius;
                      return Canvas$arc(ctx, $t29627, $t29628, $t29629, 0., 6.28318530718);
                    }
                  }
                }
              })();
              (() => {
                return Canvas$stroke(ctx);
              })();
              return draw_orbit_rings(ctx, s, rest);
            }
          }
        }
      }
    }
  }
}
const $jp29637$apply$3793$clo = { _0: ($_, $clo) => $jp29637$apply$3793($clo) };

function $jp29676$apply$3796($clo) {
  {
    const ctx = (() => {
      return $clo._1;
    })();
    {
      const s = (() => {
        return $clo._2;
      })();
      {
        const t = (() => {
          return $clo._3;
        })();
        {
          const $t29675 = dot_count(s);
          return draw_pulse_particle(ctx, s, t, $t29675, 0);
        }
      }
    }
  }
}
const $jp29676$apply$3796$clo = { _0: ($_, $clo) => $jp29676$apply$3796($clo) };

function $jp29678$apply$3797($clo) {
  {
    const ctx = (() => {
      return $clo._1;
    })();
    {
      const s = (() => {
        return $clo._2;
      })();
      {
        const t = (() => {
          return $clo._3;
        })();
        {
          const $t29675 = dot_count(s);
          return draw_pulse_particle(ctx, s, t, $t29675, 0);
        }
      }
    }
  }
}
const $jp29678$apply$3797$clo = { _0: ($_, $clo) => $jp29678$apply$3797($clo) };

function $jp29825$apply$3800($clo) {
  {
    const ctx = (() => {
      return $clo._1;
    })();
    {
      const px = (() => {
        return $clo._2;
      })();
      {
        const py = (() => {
          return $clo._3;
        })();
        return Canvas$line_to(ctx, px, py);
      }
    }
  }
}
const $jp29825$apply$3800$clo = { _0: ($_, $clo) => $jp29825$apply$3800($clo) };

function $lam30139$apply$3826($clo, k) {
  {
    const $t30140 = (() => {
      return (k === "m");
    })();
    {
      const $t30141 = (k === "M");
      return ($t30140 || $t30141);
    }
  }
}
const $lam30139$apply$3826$clo = { _0: ($_, $clo, k) => $lam30139$apply$3826($clo, k) };

function $jp30198$apply$3828($clo) {
  {
    const cursor = (() => {
      return $clo._1;
    })();
    {
      const game = (() => {
        return $clo._2;
      })();
      {
        const keys = (() => {
          return $clo._3;
        })();
        {
          const taps = (() => {
            return $clo._4;
          })();
          {
            const view_h = (() => {
              return $clo._5;
            })();
            {
              const view_w = (() => {
                return $clo._6;
              })();
              return Perihelion$Core$update(game, taps, keys, cursor, view_w, view_h, 0.0166667);
            }
          }
        }
      }
    }
  }
}
const $jp30198$apply$3828$clo = { _0: ($_, $clo) => $jp30198$apply$3828($clo) };

function $lam30209$apply$3829($clo, _) {
  {
    const ctx = (() => {
      return $clo._1;
    })();
    {
      const el = (() => {
        return $clo._2;
      })();
      {
        const fx2 = (() => {
          return $clo._3;
        })();
        {
          const g2 = (() => {
            return $clo._4;
          })();
          return tick(ctx, el, g2, fx2);
        }
      }
    }
  }
}
const $lam30209$apply$3829$clo = { _0: ($_, $clo, _) => $lam30209$apply$3829($clo, _) };

function $lam30222$apply$3830($clo, _) {
  {
    const best = (() => {
      return $clo._1;
    })();
    {
      const ctx = (() => {
        return $clo._2;
      })();
      {
        const node = (() => {
          return $clo._3;
        })();
        {
          const runs = (() => {
            return $clo._4;
          })();
          return boot(ctx, node, best, runs);
        }
      }
    }
  }
}
const $lam30222$apply$3830$clo = { _0: ($_, $clo, _) => $lam30222$apply$3830($clo, _) };

function go$apply$4091($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4091$clo = { _0: ($_, $clo, lst, acc) => go$apply$4091($clo, lst, acc) };

function go$apply$4318($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4318$clo = { _0: ($_, $clo, lst, acc) => go$apply$4318($clo, lst, acc) };

function go$apply$4758($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f240 = lst._0;
        const $f241 = lst._1;
        {
          const t = $f241;
          {
            const $t239 = (acc + 1);
            return go._0(go, t, $t239);
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4758$clo = { _0: ($_, $clo, lst, acc) => go$apply$4758($clo, lst, acc) };

function go$apply$4760($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8810 = { $: "$Clo_go$5251", _0: go$apply$5251 };
            {
              const $t253_i8811 = { $: "Nil" };
              return go$apply$5251(go_i8810, acc, $t253_i8811);
            }
          }
          break;
        }
        case "Cons": {
          const $f296 = lst._0;
          const $f297 = lst._1;
          {
            const t = $f297;
            {
              const h = $f296;
              {
                const $t294 = (() => {
                  return pred._0(pred, h);
                })();
                if ($t294 === true) {
                  return (() => {
                    {
                      const $t295 = { $: "Cons", _0: h, _1: acc };
                      return go._0(go, t, $t295);
                    }
                  })();
                } else {
                  return go._0(go, t, acc);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4760$clo = { _0: ($_, $clo, lst, acc) => go$apply$4760($clo, lst, acc) };

function go$apply$4762($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8815 = { $: "$Clo_go$5251", _0: go$apply$5251 };
            {
              const $t253_i8816 = { $: "Nil" };
              return go$apply$5251(go_i8815, acc, $t253_i8816);
            }
          }
          break;
        }
        case "Cons": {
          const $f264 = lst._0;
          const $f265 = lst._1;
          {
            const t = $f265;
            {
              const h = $f264;
              {
                const $t262 = (() => {
                  return f._0(f, h);
                })();
                {
                  const $t263 = { $: "Cons", _0: $t262, _1: acc };
                  return go._0(go, t, $t263);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4762$clo = { _0: ($_, $clo, lst, acc) => go$apply$4762($clo, lst, acc) };

function go$apply$4764($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8820 = { $: "$Clo_go$5253", _0: go$apply$5253 };
            {
              const $t253_i8821 = { $: "Nil" };
              return go$apply$5253(go_i8820, acc, $t253_i8821);
            }
          }
          break;
        }
        case "Cons": {
          const $f296 = lst._0;
          const $f297 = lst._1;
          {
            const t = $f297;
            {
              const h = $f296;
              {
                const $t294 = (() => {
                  return pred._0(pred, h);
                })();
                if ($t294 === true) {
                  return (() => {
                    {
                      const $t295 = { $: "Cons", _0: h, _1: acc };
                      return go._0(go, t, $t295);
                    }
                  })();
                } else {
                  return go._0(go, t, acc);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4764$clo = { _0: ($_, $clo, lst, acc) => go$apply$4764($clo, lst, acc) };

function go$apply$4766($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8825 = { $: "$Clo_go$5253", _0: go$apply$5253 };
            {
              const $t253_i8826 = { $: "Nil" };
              return go$apply$5253(go_i8825, acc, $t253_i8826);
            }
          }
          break;
        }
        case "Cons": {
          const $f264 = lst._0;
          const $f265 = lst._1;
          {
            const t = $f265;
            {
              const h = $f264;
              {
                const $t262 = (() => {
                  return f._0(f, h);
                })();
                {
                  const $t263 = { $: "Cons", _0: $t262, _1: acc };
                  return go._0(go, t, $t263);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4766$clo = { _0: ($_, $clo, lst, acc) => go$apply$4766($clo, lst, acc) };

function go$apply$4768($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4768$clo = { _0: ($_, $clo, lst, acc) => go$apply$4768($clo, lst, acc) };

function go$apply$4770($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f255 = lst._0;
        const $f256 = lst._1;
        {
          const t = $f256;
          {
            const h = $f255;
            {
              const $t254 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t254);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4770$clo = { _0: ($_, $clo, lst, acc) => go$apply$4770($clo, lst, acc) };

function go$apply$4772($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4772$clo = { _0: ($_, $clo, lst, acc) => go$apply$4772($clo, lst, acc) };

function go$apply$4774($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8836 = { $: "$Clo_go$4772", _0: go$apply$4772 };
            {
              const $t253_i8837 = { $: "Nil" };
              return go$apply$4772(go_i8836, acc, $t253_i8837);
            }
          }
          break;
        }
        case "Cons": {
          const $f264 = lst._0;
          const $f265 = lst._1;
          {
            const t = $f265;
            {
              const h = $f264;
              {
                const $t262 = (() => {
                  return f._0(f, h);
                })();
                {
                  const $t263 = { $: "Cons", _0: $t262, _1: acc };
                  return go._0(go, t, $t263);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4774$clo = { _0: ($_, $clo, lst, acc) => go$apply$4774($clo, lst, acc) };

function go$apply$4776($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8841 = { $: "$Clo_go$4772", _0: go$apply$4772 };
            {
              const $t253_i8842 = { $: "Nil" };
              return go$apply$4772(go_i8841, acc, $t253_i8842);
            }
          }
          break;
        }
        case "Cons": {
          const $f296 = lst._0;
          const $f297 = lst._1;
          {
            const t = $f297;
            {
              const h = $f296;
              {
                const $t294 = (() => {
                  return pred._0(pred, h);
                })();
                if ($t294 === true) {
                  return (() => {
                    {
                      const $t295 = { $: "Cons", _0: h, _1: acc };
                      return go._0(go, t, $t295);
                    }
                  })();
                } else {
                  return go._0(go, t, acc);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4776$clo = { _0: ($_, $clo, lst, acc) => go$apply$4776($clo, lst, acc) };

function go$apply$4778($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8846 = { $: "$Clo_go$4318", _0: go$apply$4318 };
            {
              const $t253_i8847 = { $: "Nil" };
              return go$apply$4318(go_i8846, acc, $t253_i8847);
            }
          }
          break;
        }
        case "Cons": {
          const $f264 = lst._0;
          const $f265 = lst._1;
          {
            const t = $f265;
            {
              const h = $f264;
              {
                const $t262 = (() => {
                  return f._0(f, h);
                })();
                {
                  const $t263 = { $: "Cons", _0: $t262, _1: acc };
                  return go._0(go, t, $t263);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4778$clo = { _0: ($_, $clo, lst, acc) => go$apply$4778($clo, lst, acc) };

function go$apply$4780($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f240 = lst._0;
        const $f241 = lst._1;
        {
          const t = $f241;
          {
            const $t239 = (acc + 1);
            return go._0(go, t, $t239);
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4780$clo = { _0: ($_, $clo, lst, acc) => go$apply$4780($clo, lst, acc) };

function go$apply$4783($clo, lst, yes, no) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const $t546 = (() => {
              {
                const go_i8857 = { $: "$Clo_go$4768", _0: go$apply$4768 };
                {
                  const $t253_i8858 = { $: "Nil" };
                  return go$apply$4768(go_i8857, yes, $t253_i8858);
                }
              }
            })();
            {
              const $t547 = (() => {
                {
                  const go_i8854 = { $: "$Clo_go$4768", _0: go$apply$4768 };
                  {
                    const $t253_i8855 = { $: "Nil" };
                    return go$apply$4768(go_i8854, no, $t253_i8855);
                  }
                }
              })();
              return { _0: $t546, _1: $t547 };
            }
          }
          break;
        }
        case "Cons": {
          const $f551 = lst._0;
          const $f552 = lst._1;
          {
            const t = $f552;
            {
              const h = $f551;
              {
                const $t548 = (() => {
                  return pred._0(pred, h);
                })();
                if ($t548 === true) {
                  return (() => {
                    {
                      const $t549 = { $: "Cons", _0: h, _1: yes };
                      return go._0(go, t, $t549, no);
                    }
                  })();
                } else {
                  return (() => {
                    {
                      const $t550 = { $: "Cons", _0: h, _1: no };
                      return go._0(go, t, yes, $t550);
                    }
                  })();
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4783$clo = { _0: ($_, $clo, lst, yes, no) => go$apply$4783($clo, lst, yes, no) };

function go$apply$4786($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f240 = lst._0;
        const $f241 = lst._1;
        {
          const t = $f241;
          {
            const $t239 = (acc + 1);
            return go._0(go, t, $t239);
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4786$clo = { _0: ($_, $clo, lst, acc) => go$apply$4786($clo, lst, acc) };

function go$apply$4789($clo, lst, yes, no) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const $t546 = (() => {
              {
                const go_i8869 = { $: "$Clo_go$4772", _0: go$apply$4772 };
                {
                  const $t253_i8870 = { $: "Nil" };
                  return go$apply$4772(go_i8869, yes, $t253_i8870);
                }
              }
            })();
            {
              const $t547 = (() => {
                {
                  const go_i8866 = { $: "$Clo_go$4772", _0: go$apply$4772 };
                  {
                    const $t253_i8867 = { $: "Nil" };
                    return go$apply$4772(go_i8866, no, $t253_i8867);
                  }
                }
              })();
              return { _0: $t546, _1: $t547 };
            }
          }
          break;
        }
        case "Cons": {
          const $f551 = lst._0;
          const $f552 = lst._1;
          {
            const t = $f552;
            {
              const h = $f551;
              {
                const $t548 = (() => {
                  return pred._0(pred, h);
                })();
                if ($t548 === true) {
                  return (() => {
                    {
                      const $t549 = { $: "Cons", _0: h, _1: yes };
                      return go._0(go, t, $t549, no);
                    }
                  })();
                } else {
                  return (() => {
                    {
                      const $t550 = { $: "Cons", _0: h, _1: no };
                      return go._0(go, t, yes, $t550);
                    }
                  })();
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4789$clo = { _0: ($_, $clo, lst, yes, no) => go$apply$4789($clo, lst, yes, no) };

function $lam668$apply$4791($clo, y) {
  {
    const x = (() => {
      return $clo._1;
    })();
    return (y === x);
  }
}
const $lam668$apply$4791$clo = { _0: ($_, $clo, y) => $lam668$apply$4791($clo, y) };

function go$apply$4793($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f255 = lst._0;
        const $f256 = lst._1;
        {
          const t = $f256;
          {
            const h = $f255;
            {
              const $t254 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t254);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4793$clo = { _0: ($_, $clo, lst, acc) => go$apply$4793($clo, lst, acc) };

function go$apply$4795($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8877 = { $: "$Clo_go$4768", _0: go$apply$4768 };
            {
              const $t253_i8878 = { $: "Nil" };
              return go$apply$4768(go_i8877, acc, $t253_i8878);
            }
          }
          break;
        }
        case "Cons": {
          const $f296 = lst._0;
          const $f297 = lst._1;
          {
            const t = $f297;
            {
              const h = $f296;
              {
                const $t294 = (() => {
                  return pred._0(pred, h);
                })();
                if ($t294 === true) {
                  return (() => {
                    {
                      const $t295 = { $: "Cons", _0: h, _1: acc };
                      return go._0(go, t, $t295);
                    }
                  })();
                } else {
                  return go._0(go, t, acc);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4795$clo = { _0: ($_, $clo, lst, acc) => go$apply$4795($clo, lst, acc) };

function go$apply$4798($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f255 = lst._0;
        const $f256 = lst._1;
        {
          const t = $f256;
          {
            const h = $f255;
            {
              const $t254 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t254);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4798$clo = { _0: ($_, $clo, lst, acc) => go$apply$4798($clo, lst, acc) };

function go$apply$4801($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8889 = { $: "$Clo_go$5100", _0: go$apply$5100 };
            {
              const $t253_i8890 = { $: "Nil" };
              return go$apply$5100(go_i8889, acc, $t253_i8890);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8886 = { $: "$Clo_go$5100", _0: go$apply$5100 };
                {
                  const $t253_i8887 = { $: "Nil" };
                  return go$apply$5100(go_i8886, acc, $t253_i8887);
                }
              }
              break;
            }
            case "Cons": {
              const $f502 = lst._0;
              const $f503 = lst._1;
              {
                const t = $f503;
                {
                  const h = $f502;
                  {
                    const $t500 = (k - 1);
                    {
                      const $t501 = { $: "Cons", _0: h, _1: acc };
                      return go._0(go, t, $t500, $t501);
                    }
                  }
                }
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        })();
      }
    }
  }
}
const go$apply$4801$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4801($clo, lst, k, acc) };

function go$apply$4803($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f240 = lst._0;
        const $f241 = lst._1;
        {
          const t = $f241;
          {
            const $t239 = (acc + 1);
            return go._0(go, t, $t239);
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4803$clo = { _0: ($_, $clo, lst, acc) => go$apply$4803($clo, lst, acc) };

function go$apply$4807($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f240 = lst._0;
        const $f241 = lst._1;
        {
          const t = $f241;
          {
            const $t239 = (acc + 1);
            return go._0(go, t, $t239);
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4807$clo = { _0: ($_, $clo, lst, acc) => go$apply$4807($clo, lst, acc) };

function go$apply$4810($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f255 = lst._0;
        const $f256 = lst._1;
        {
          const t = $f256;
          {
            const h = $f255;
            {
              const $t254 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t254);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4810$clo = { _0: ($_, $clo, lst, acc) => go$apply$4810($clo, lst, acc) };

function go$apply$4812($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8906 = { $: "$Clo_go$5100", _0: go$apply$5100 };
            {
              const $t253_i8907 = { $: "Nil" };
              return go$apply$5100(go_i8906, acc, $t253_i8907);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8903 = { $: "$Clo_go$5100", _0: go$apply$5100 };
                {
                  const $t253_i8904 = { $: "Nil" };
                  return go$apply$5100(go_i8903, acc, $t253_i8904);
                }
              }
              break;
            }
            case "Cons": {
              const $f502 = lst._0;
              const $f503 = lst._1;
              {
                const t = $f503;
                {
                  const h = $f502;
                  {
                    const $t500 = (k - 1);
                    {
                      const $t501 = { $: "Cons", _0: h, _1: acc };
                      return go._0(go, t, $t500, $t501);
                    }
                  }
                }
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        })();
      }
    }
  }
}
const go$apply$4812$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4812($clo, lst, k, acc) };

function go$apply$4814($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8911 = { $: "$Clo_go$4091", _0: go$apply$4091 };
            {
              const $t253_i8912 = { $: "Nil" };
              return go$apply$4091(go_i8911, acc, $t253_i8912);
            }
          }
          break;
        }
        case "Cons": {
          const $f264 = lst._0;
          const $f265 = lst._1;
          {
            const t = $f265;
            {
              const h = $f264;
              {
                const $t262 = (() => {
                  return f._0(f, h);
                })();
                {
                  const $t263 = { $: "Cons", _0: $t262, _1: acc };
                  return go._0(go, t, $t263);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4814$clo = { _0: ($_, $clo, lst, acc) => go$apply$4814($clo, lst, acc) };

function go$apply$4816($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4816$clo = { _0: ($_, $clo, lst, acc) => go$apply$4816($clo, lst, acc) };

function go$apply$4818($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f255 = lst._0;
        const $f256 = lst._1;
        {
          const t = $f256;
          {
            const h = $f255;
            {
              const $t254 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t254);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4818$clo = { _0: ($_, $clo, lst, acc) => go$apply$4818($clo, lst, acc) };

function go$apply$4820($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8920 = { $: "$Clo_go$5260", _0: go$apply$5260 };
            {
              const $t253_i8921 = { $: "Nil" };
              return go$apply$5260(go_i8920, acc, $t253_i8921);
            }
          }
          break;
        }
        case "Cons": {
          const $f296 = lst._0;
          const $f297 = lst._1;
          {
            const t = $f297;
            {
              const h = $f296;
              {
                const $t294 = (() => {
                  return pred._0(pred, h);
                })();
                if ($t294 === true) {
                  return (() => {
                    {
                      const $t295 = { $: "Cons", _0: h, _1: acc };
                      return go._0(go, t, $t295);
                    }
                  })();
                } else {
                  return (() => {
                    return go._0(go, t, acc);
                  })();
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4820$clo = { _0: ($_, $clo, lst, acc) => go$apply$4820($clo, lst, acc) };

function go$apply$4823($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8929 = { $: "$Clo_go$5100", _0: go$apply$5100 };
            {
              const $t253_i8930 = { $: "Nil" };
              return go$apply$5100(go_i8929, acc, $t253_i8930);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8926 = { $: "$Clo_go$5100", _0: go$apply$5100 };
                {
                  const $t253_i8927 = { $: "Nil" };
                  return go$apply$5100(go_i8926, acc, $t253_i8927);
                }
              }
              break;
            }
            case "Cons": {
              const $f502 = lst._0;
              const $f503 = lst._1;
              {
                const t = $f503;
                {
                  const h = $f502;
                  {
                    const $t500 = (k - 1);
                    {
                      const $t501 = { $: "Cons", _0: h, _1: acc };
                      return go._0(go, t, $t500, $t501);
                    }
                  }
                }
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        })();
      }
    }
  }
}
const go$apply$4823$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4823($clo, lst, k, acc) };

function go$apply$4826($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f240 = lst._0;
        const $f241 = lst._1;
        {
          const t = $f241;
          {
            const $t239 = (acc + 1);
            return go._0(go, t, $t239);
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4826$clo = { _0: ($_, $clo, lst, acc) => go$apply$4826($clo, lst, acc) };

function go$apply$4828($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8937 = { $: "$Clo_go$5262", _0: go$apply$5262 };
            {
              const $t253_i8938 = { $: "Nil" };
              return go$apply$5262(go_i8937, acc, $t253_i8938);
            }
          }
          break;
        }
        case "Cons": {
          const $f296 = lst._0;
          const $f297 = lst._1;
          {
            const t = $f297;
            {
              const h = $f296;
              {
                const $t294 = (() => {
                  return pred._0(pred, h);
                })();
                if ($t294 === true) {
                  return (() => {
                    {
                      const $t295 = { $: "Cons", _0: h, _1: acc };
                      return go._0(go, t, $t295);
                    }
                  })();
                } else {
                  return go._0(go, t, acc);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4828$clo = { _0: ($_, $clo, lst, acc) => go$apply$4828($clo, lst, acc) };

function go$apply$4830($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8942 = { $: "$Clo_go$5262", _0: go$apply$5262 };
            {
              const $t253_i8943 = { $: "Nil" };
              return go$apply$5262(go_i8942, acc, $t253_i8943);
            }
          }
          break;
        }
        case "Cons": {
          const $f264 = lst._0;
          const $f265 = lst._1;
          {
            const t = $f265;
            {
              const h = $f264;
              {
                const $t262 = (() => {
                  return f._0(f, h);
                })();
                {
                  const $t263 = { $: "Cons", _0: $t262, _1: acc };
                  return go._0(go, t, $t263);
                }
              }
            }
          }
          break;
        }
        default: {
          return (() => { throw new Error("non-exhaustive pattern match"); })();
        }
      }
    }
  }
}
const go$apply$4830$clo = { _0: ($_, $clo, lst, acc) => go$apply$4830($clo, lst, acc) };

function go$apply$4832($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8950 = { $: "$Clo_go$5100", _0: go$apply$5100 };
            {
              const $t253_i8951 = { $: "Nil" };
              return go$apply$5100(go_i8950, acc, $t253_i8951);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8947 = { $: "$Clo_go$5100", _0: go$apply$5100 };
                {
                  const $t253_i8948 = { $: "Nil" };
                  return go$apply$5100(go_i8947, acc, $t253_i8948);
                }
              }
              break;
            }
            case "Cons": {
              const $f502 = lst._0;
              const $f503 = lst._1;
              {
                const t = $f503;
                {
                  const h = $f502;
                  {
                    const $t500 = (k - 1);
                    {
                      const $t501 = { $: "Cons", _0: h, _1: acc };
                      return go._0(go, t, $t500, $t501);
                    }
                  }
                }
              }
              break;
            }
            default: {
              return (() => { throw new Error("non-exhaustive pattern match"); })();
            }
          }
        })();
      }
    }
  }
}
const go$apply$4832$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4832($clo, lst, k, acc) };

function go$apply$4834($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f240 = lst._0;
        const $f241 = lst._1;
        {
          const t = $f241;
          {
            const $t239 = (acc + 1);
            return go._0(go, t, $t239);
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$4834$clo = { _0: ($_, $clo, lst, acc) => go$apply$4834($clo, lst, acc) };

function go$apply$5100($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$5100$clo = { _0: ($_, $clo, lst, acc) => go$apply$5100($clo, lst, acc) };

function go$apply$5251($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$5251$clo = { _0: ($_, $clo, lst, acc) => go$apply$5251($clo, lst, acc) };

function go$apply$5253($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$5253$clo = { _0: ($_, $clo, lst, acc) => go$apply$5253($clo, lst, acc) };

function go$apply$5256($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$5256$clo = { _0: ($_, $clo, lst, acc) => go$apply$5256($clo, lst, acc) };

function go$apply$5258($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$5258$clo = { _0: ($_, $clo, lst, acc) => go$apply$5258($clo, lst, acc) };

function go$apply$5260($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$5260$clo = { _0: ($_, $clo, lst, acc) => go$apply$5260($clo, lst, acc) };

function go$apply$5262($clo, lst, acc) {
  {
    const go = $clo;
    switch (lst.$) {
      case "Nil": {
        return acc;
        break;
      }
      case "Cons": {
        const $f247 = lst._0;
        const $f248 = lst._1;
        {
          const t = $f248;
          {
            const h = $f247;
            {
              const $t246 = { $: "Cons", _0: h, _1: acc };
              return go._0(go, t, $t246);
            }
          }
        }
        break;
      }
      default: {
        return (() => { throw new Error("non-exhaustive pattern match"); })();
      }
    }
  }
}
const go$apply$5262$clo = { _0: ($_, $clo, lst, acc) => go$apply$5262($clo, lst, acc) };

export { main };
main();
//# sourceMappingURL=perihelion.mjs.map
