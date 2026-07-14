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
  if (!__eq_List(a.shield_hull, b.shield_hull)) return false;
  return true;
}

function __eq_SpriteRowExtent(a, b) {
  if (a.row !== b.row) return false;
  if (a.left !== b.left) return false;
  if (a.right !== b.right) return false;
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
            const xh_i9909 = march_int_shr($t15538, 16);
            {
              const xl_i9910 = march_int_and($t15538, 65535);
              {
                const $t15527_i9915 = (() => {
                  {
                    const $t15525_i9913 = (() => {
                      {
                        const $t15524_i9912 = (() => {
                          {
                            const $t15523_i9911 = (xh_i9909 * 569420461);
                            return march_int_and($t15523_i9911, 65535);
                          }
                        })();
                        return ($t15524_i9912 * 65536);
                      }
                    })();
                    {
                      const $t15526_i9914 = (xl_i9910 * 569420461);
                      return ($t15525_i9913 + $t15526_i9914);
                    }
                  }
                })();
                return march_int_and($t15527_i9915, 4294967295);
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
              const xh_i9898 = march_int_shr($t15540, 16);
              {
                const xl_i9899 = march_int_and($t15540, 65535);
                {
                  const $t15527_i9904 = (() => {
                    {
                      const $t15525_i9902 = (() => {
                        {
                          const $t15524_i9901 = (() => {
                            {
                              const $t15523_i9900 = (xh_i9898 * 1935289751);
                              return march_int_and($t15523_i9900, 65535);
                            }
                          })();
                          return ($t15524_i9901 * 65536);
                        }
                      })();
                      {
                        const $t15526_i9903 = (xl_i9899 * 1935289751);
                        return ($t15525_i9902 + $t15526_i9903);
                      }
                    }
                  })();
                  return march_int_and($t15527_i9904, 4294967295);
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
                const go_i3627 = { $: "$Clo_go$4765", _0: go$apply$4765 };
                return go$apply$4765(go_i3627, $t27352, 0);
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
                  const $p29052_i10679_i10993_i11187 = (() => {
                    {
                      const $p15579_i10236_i10674_i10988_i11182 = (() => {
                        {
                          const $p15576_i1532_i10226_i10665_i10979_i11173 = Random$next_raw($t27365);
                          {
                            const hi_i1533_i10227_i10666_i10980_i11174 = $p15576_i1532_i10226_i10665_i10979_i11173._0;
                            {
                              const rng2_i1534_i10228_i10667_i10981_i11175 = $p15576_i1532_i10226_i10665_i10979_i11173._1;
                              {
                                const $p15575_i1535_i10229_i10668_i10982_i11176 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11175);
                                {
                                  const lo_i1536_i10230_i10669_i10983_i11177 = $p15575_i1535_i10229_i10668_i10982_i11176._0;
                                  {
                                    const rng3_i1537_i10231_i10670_i10984_i11178 = $p15575_i1535_i10229_i10668_i10982_i11176._1;
                                    {
                                      const $t15574_i1541_i10235_i10673_i10987_i11181 = (() => {
                                        {
                                          const $t15573_i1540_i10234_i10672_i10986_i11180 = (() => {
                                            {
                                              const $t15571_i1538_i10232_i10671_i10985_i11179 = march_int_and(hi_i1533_i10227_i10666_i10980_i11174, 1048575);
                                              return ($t15571_i1538_i10232_i10671_i10985_i11179 * 4294967296);
                                            }
                                          })();
                                          return ($t15573_i1540_i10234_i10672_i10986_i11180 + lo_i1536_i10230_i10669_i10983_i11177);
                                        }
                                      })();
                                      return { _0: $t15574_i1541_i10235_i10673_i10987_i11181, _1: rng3_i1537_i10231_i10670_i10984_i11178 };
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      })();
                      {
                        const bits_i10237_i10675_i10989_i11183 = $p15579_i10236_i10674_i10988_i11182._0;
                        {
                          const rng2_i10238_i10676_i10990_i11184 = $p15579_i10236_i10674_i10988_i11182._1;
                          {
                            const $t15578_i10240_i10678_i10992_i11186 = (() => {
                              {
                                const $t15577_i10239_i10677_i10991_i11185 = bits_i10237_i10675_i10989_i11183;
                                return ($t15577_i10239_i10677_i10991_i11185 / 4.50359962737e+15);
                              }
                            })();
                            return { _0: $t15578_i10240_i10678_i10992_i11186, _1: rng2_i10238_i10676_i10990_i11184 };
                          }
                        }
                      }
                    }
                  })();
                  {
                    const t_i10680_i10994_i11188 = $p29052_i10679_i10993_i11187._0;
                    {
                      const rng2_i10681_i10995_i11189 = $p29052_i10679_i10993_i11187._1;
                      {
                        const out_i10682_i10996_i11190 = { _0: rng2_i10681_i10995_i11189, _1: t_i10680_i10994_i11188 };
                        return out_i10682_i10996_i11190;
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
                      const $p29052_i10679_i10993_i11168 = (() => {
                        {
                          const $p15579_i10236_i10674_i10988_i11163 = (() => {
                            {
                              const $p15576_i1532_i10226_i10665_i10979_i11154 = Random$next_raw(r1);
                              {
                                const hi_i1533_i10227_i10666_i10980_i11155 = $p15576_i1532_i10226_i10665_i10979_i11154._0;
                                {
                                  const rng2_i1534_i10228_i10667_i10981_i11156 = $p15576_i1532_i10226_i10665_i10979_i11154._1;
                                  {
                                    const $p15575_i1535_i10229_i10668_i10982_i11157 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11156);
                                    {
                                      const lo_i1536_i10230_i10669_i10983_i11158 = $p15575_i1535_i10229_i10668_i10982_i11157._0;
                                      {
                                        const rng3_i1537_i10231_i10670_i10984_i11159 = $p15575_i1535_i10229_i10668_i10982_i11157._1;
                                        {
                                          const $t15574_i1541_i10235_i10673_i10987_i11162 = (() => {
                                            {
                                              const $t15573_i1540_i10234_i10672_i10986_i11161 = (() => {
                                                {
                                                  const $t15571_i1538_i10232_i10671_i10985_i11160 = march_int_and(hi_i1533_i10227_i10666_i10980_i11155, 1048575);
                                                  return ($t15571_i1538_i10232_i10671_i10985_i11160 * 4294967296);
                                                }
                                              })();
                                              return ($t15573_i1540_i10234_i10672_i10986_i11161 + lo_i1536_i10230_i10669_i10983_i11158);
                                            }
                                          })();
                                          return { _0: $t15574_i1541_i10235_i10673_i10987_i11162, _1: rng3_i1537_i10231_i10670_i10984_i11159 };
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          })();
                          {
                            const bits_i10237_i10675_i10989_i11164 = $p15579_i10236_i10674_i10988_i11163._0;
                            {
                              const rng2_i10238_i10676_i10990_i11165 = $p15579_i10236_i10674_i10988_i11163._1;
                              {
                                const $t15578_i10240_i10678_i10992_i11167 = (() => {
                                  {
                                    const $t15577_i10239_i10677_i10991_i11166 = bits_i10237_i10675_i10989_i11164;
                                    return ($t15577_i10239_i10677_i10991_i11166 / 4.50359962737e+15);
                                  }
                                })();
                                return { _0: $t15578_i10240_i10678_i10992_i11167, _1: rng2_i10238_i10676_i10990_i11165 };
                              }
                            }
                          }
                        }
                      })();
                      {
                        const t_i10680_i10994_i11169 = $p29052_i10679_i10993_i11168._0;
                        {
                          const rng2_i10681_i10995_i11170 = $p29052_i10679_i10993_i11168._1;
                          {
                            const out_i10682_i10996_i11171 = { _0: rng2_i10681_i10995_i11170, _1: t_i10680_i10994_i11169 };
                            return out_i10682_i10996_i11171;
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
                            const $p29052_i10679_i10993_i11149 = (() => {
                              {
                                const $p15579_i10236_i10674_i10988_i11144 = (() => {
                                  {
                                    const $p15576_i1532_i10226_i10665_i10979_i11135 = Random$next_raw(r2);
                                    {
                                      const hi_i1533_i10227_i10666_i10980_i11136 = $p15576_i1532_i10226_i10665_i10979_i11135._0;
                                      {
                                        const rng2_i1534_i10228_i10667_i10981_i11137 = $p15576_i1532_i10226_i10665_i10979_i11135._1;
                                        {
                                          const $p15575_i1535_i10229_i10668_i10982_i11138 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11137);
                                          {
                                            const lo_i1536_i10230_i10669_i10983_i11139 = $p15575_i1535_i10229_i10668_i10982_i11138._0;
                                            {
                                              const rng3_i1537_i10231_i10670_i10984_i11140 = $p15575_i1535_i10229_i10668_i10982_i11138._1;
                                              {
                                                const $t15574_i1541_i10235_i10673_i10987_i11143 = (() => {
                                                  {
                                                    const $t15573_i1540_i10234_i10672_i10986_i11142 = (() => {
                                                      {
                                                        const $t15571_i1538_i10232_i10671_i10985_i11141 = march_int_and(hi_i1533_i10227_i10666_i10980_i11136, 1048575);
                                                        return ($t15571_i1538_i10232_i10671_i10985_i11141 * 4294967296);
                                                      }
                                                    })();
                                                    return ($t15573_i1540_i10234_i10672_i10986_i11142 + lo_i1536_i10230_i10669_i10983_i11139);
                                                  }
                                                })();
                                                return { _0: $t15574_i1541_i10235_i10673_i10987_i11143, _1: rng3_i1537_i10231_i10670_i10984_i11140 };
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                })();
                                {
                                  const bits_i10237_i10675_i10989_i11145 = $p15579_i10236_i10674_i10988_i11144._0;
                                  {
                                    const rng2_i10238_i10676_i10990_i11146 = $p15579_i10236_i10674_i10988_i11144._1;
                                    {
                                      const $t15578_i10240_i10678_i10992_i11148 = (() => {
                                        {
                                          const $t15577_i10239_i10677_i10991_i11147 = bits_i10237_i10675_i10989_i11145;
                                          return ($t15577_i10239_i10677_i10991_i11147 / 4.50359962737e+15);
                                        }
                                      })();
                                      return { _0: $t15578_i10240_i10678_i10992_i11148, _1: rng2_i10238_i10676_i10990_i11146 };
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const t_i10680_i10994_i11150 = $p29052_i10679_i10993_i11149._0;
                              {
                                const rng2_i10681_i10995_i11151 = $p29052_i10679_i10993_i11149._1;
                                {
                                  const out_i10682_i10996_i11152 = { _0: rng2_i10681_i10995_i11151, _1: t_i10680_i10994_i11150 };
                                  return out_i10682_i10996_i11152;
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
                                  const $p29052_i10679_i10993_i11130 = (() => {
                                    {
                                      const $p15579_i10236_i10674_i10988_i11125 = (() => {
                                        {
                                          const $p15576_i1532_i10226_i10665_i10979_i11116 = Random$next_raw(r3);
                                          {
                                            const hi_i1533_i10227_i10666_i10980_i11117 = $p15576_i1532_i10226_i10665_i10979_i11116._0;
                                            {
                                              const rng2_i1534_i10228_i10667_i10981_i11118 = $p15576_i1532_i10226_i10665_i10979_i11116._1;
                                              {
                                                const $p15575_i1535_i10229_i10668_i10982_i11119 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11118);
                                                {
                                                  const lo_i1536_i10230_i10669_i10983_i11120 = $p15575_i1535_i10229_i10668_i10982_i11119._0;
                                                  {
                                                    const rng3_i1537_i10231_i10670_i10984_i11121 = $p15575_i1535_i10229_i10668_i10982_i11119._1;
                                                    {
                                                      const $t15574_i1541_i10235_i10673_i10987_i11124 = (() => {
                                                        {
                                                          const $t15573_i1540_i10234_i10672_i10986_i11123 = (() => {
                                                            {
                                                              const $t15571_i1538_i10232_i10671_i10985_i11122 = march_int_and(hi_i1533_i10227_i10666_i10980_i11117, 1048575);
                                                              return ($t15571_i1538_i10232_i10671_i10985_i11122 * 4294967296);
                                                            }
                                                          })();
                                                          return ($t15573_i1540_i10234_i10672_i10986_i11123 + lo_i1536_i10230_i10669_i10983_i11120);
                                                        }
                                                      })();
                                                      return { _0: $t15574_i1541_i10235_i10673_i10987_i11124, _1: rng3_i1537_i10231_i10670_i10984_i11121 };
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      })();
                                      {
                                        const bits_i10237_i10675_i10989_i11126 = $p15579_i10236_i10674_i10988_i11125._0;
                                        {
                                          const rng2_i10238_i10676_i10990_i11127 = $p15579_i10236_i10674_i10988_i11125._1;
                                          {
                                            const $t15578_i10240_i10678_i10992_i11129 = (() => {
                                              {
                                                const $t15577_i10239_i10677_i10991_i11128 = bits_i10237_i10675_i10989_i11126;
                                                return ($t15577_i10239_i10677_i10991_i11128 / 4.50359962737e+15);
                                              }
                                            })();
                                            return { _0: $t15578_i10240_i10678_i10992_i11129, _1: rng2_i10238_i10676_i10990_i11127 };
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const t_i10680_i10994_i11131 = $p29052_i10679_i10993_i11130._0;
                                    {
                                      const rng2_i10681_i10995_i11132 = $p29052_i10679_i10993_i11130._1;
                                      {
                                        const out_i10682_i10996_i11133 = { _0: rng2_i10681_i10995_i11132, _1: t_i10680_i10994_i11131 };
                                        return out_i10682_i10996_i11133;
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
                                        const $p29052_i10679_i10993_i11111 = (() => {
                                          {
                                            const $p15579_i10236_i10674_i10988_i11106 = (() => {
                                              {
                                                const $p15576_i1532_i10226_i10665_i10979_i11097 = Random$next_raw(r4);
                                                {
                                                  const hi_i1533_i10227_i10666_i10980_i11098 = $p15576_i1532_i10226_i10665_i10979_i11097._0;
                                                  {
                                                    const rng2_i1534_i10228_i10667_i10981_i11099 = $p15576_i1532_i10226_i10665_i10979_i11097._1;
                                                    {
                                                      const $p15575_i1535_i10229_i10668_i10982_i11100 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11099);
                                                      {
                                                        const lo_i1536_i10230_i10669_i10983_i11101 = $p15575_i1535_i10229_i10668_i10982_i11100._0;
                                                        {
                                                          const rng3_i1537_i10231_i10670_i10984_i11102 = $p15575_i1535_i10229_i10668_i10982_i11100._1;
                                                          {
                                                            const $t15574_i1541_i10235_i10673_i10987_i11105 = (() => {
                                                              {
                                                                const $t15573_i1540_i10234_i10672_i10986_i11104 = (() => {
                                                                  {
                                                                    const $t15571_i1538_i10232_i10671_i10985_i11103 = march_int_and(hi_i1533_i10227_i10666_i10980_i11098, 1048575);
                                                                    return ($t15571_i1538_i10232_i10671_i10985_i11103 * 4294967296);
                                                                  }
                                                                })();
                                                                return ($t15573_i1540_i10234_i10672_i10986_i11104 + lo_i1536_i10230_i10669_i10983_i11101);
                                                              }
                                                            })();
                                                            return { _0: $t15574_i1541_i10235_i10673_i10987_i11105, _1: rng3_i1537_i10231_i10670_i10984_i11102 };
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            })();
                                            {
                                              const bits_i10237_i10675_i10989_i11107 = $p15579_i10236_i10674_i10988_i11106._0;
                                              {
                                                const rng2_i10238_i10676_i10990_i11108 = $p15579_i10236_i10674_i10988_i11106._1;
                                                {
                                                  const $t15578_i10240_i10678_i10992_i11110 = (() => {
                                                    {
                                                      const $t15577_i10239_i10677_i10991_i11109 = bits_i10237_i10675_i10989_i11107;
                                                      return ($t15577_i10239_i10677_i10991_i11109 / 4.50359962737e+15);
                                                    }
                                                  })();
                                                  return { _0: $t15578_i10240_i10678_i10992_i11110, _1: rng2_i10238_i10676_i10990_i11108 };
                                                }
                                              }
                                            }
                                          }
                                        })();
                                        {
                                          const t_i10680_i10994_i11112 = $p29052_i10679_i10993_i11111._0;
                                          {
                                            const rng2_i10681_i10995_i11113 = $p29052_i10679_i10993_i11111._1;
                                            {
                                              const out_i10682_i10996_i11114 = { _0: rng2_i10681_i10995_i11113, _1: t_i10680_i10994_i11112 };
                                              return out_i10682_i10996_i11114;
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
                const go_i3671 = { $: "$Clo_go$4773", _0: go$apply$4773, _1: f_i3670 };
                {
                  const $t270_i3672 = { $: "Nil" };
                  return go$apply$4773(go_i3671, $t27489, $t270_i3672);
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
                    const go_i3667 = { $: "$Clo_go$4771", _0: go$apply$4771, _1: pred_i3666 };
                    {
                      const $t302_i3668 = { $: "Nil" };
                      return go$apply$4771(go_i3667, $t27494, $t302_i3668);
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
                          const go_i3663 = { $: "$Clo_go$4773", _0: go$apply$4773, _1: f_i3662 };
                          {
                            const $t270_i3664 = { $: "Nil" };
                            return go$apply$4773(go_i3663, $t27502, $t270_i3664);
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
                              const go_i3659 = { $: "$Clo_go$4771", _0: go$apply$4771, _1: pred_i3658 };
                              {
                                const $t302_i3660 = { $: "Nil" };
                                return go$apply$4771(go_i3659, $t27507, $t302_i3660);
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
                                    const go_i3655 = { $: "$Clo_go$4769", _0: go$apply$4769, _1: f_i3654 };
                                    {
                                      const $t270_i3656 = { $: "Nil" };
                                      return go$apply$4769(go_i3655, $t27515, $t270_i3656);
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
                                        const go_i3651 = { $: "$Clo_go$4767", _0: go$apply$4767, _1: pred_i3650 };
                                        {
                                          const $t302_i3652 = { $: "Nil" };
                                          return go$apply$4767(go_i3651, $t27520, $t302_i3652);
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
            const go_i3680 = { $: "$Clo_go$4775", _0: go$apply$4775 };
            {
              const $t253_i3681 = { $: "Nil" };
              return go$apply$4775(go_i3680, acc, $t253_i3681);
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
                                                    const $p29052_i10679_i10993_i11206 = (() => {
                                                      {
                                                        const $p15579_i10236_i10674_i10988_i11201 = (() => {
                                                          {
                                                            const $p15576_i1532_i10226_i10665_i10979_i11192 = Random$next_raw($t27605);
                                                            {
                                                              const hi_i1533_i10227_i10666_i10980_i11193 = $p15576_i1532_i10226_i10665_i10979_i11192._0;
                                                              {
                                                                const rng2_i1534_i10228_i10667_i10981_i11194 = $p15576_i1532_i10226_i10665_i10979_i11192._1;
                                                                {
                                                                  const $p15575_i1535_i10229_i10668_i10982_i11195 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11194);
                                                                  {
                                                                    const lo_i1536_i10230_i10669_i10983_i11196 = $p15575_i1535_i10229_i10668_i10982_i11195._0;
                                                                    {
                                                                      const rng3_i1537_i10231_i10670_i10984_i11197 = $p15575_i1535_i10229_i10668_i10982_i11195._1;
                                                                      {
                                                                        const $t15574_i1541_i10235_i10673_i10987_i11200 = (() => {
                                                                          {
                                                                            const $t15573_i1540_i10234_i10672_i10986_i11199 = (() => {
                                                                              {
                                                                                const $t15571_i1538_i10232_i10671_i10985_i11198 = march_int_and(hi_i1533_i10227_i10666_i10980_i11193, 1048575);
                                                                                return ($t15571_i1538_i10232_i10671_i10985_i11198 * 4294967296);
                                                                              }
                                                                            })();
                                                                            return ($t15573_i1540_i10234_i10672_i10986_i11199 + lo_i1536_i10230_i10669_i10983_i11196);
                                                                          }
                                                                        })();
                                                                        return { _0: $t15574_i1541_i10235_i10673_i10987_i11200, _1: rng3_i1537_i10231_i10670_i10984_i11197 };
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        })();
                                                        {
                                                          const bits_i10237_i10675_i10989_i11202 = $p15579_i10236_i10674_i10988_i11201._0;
                                                          {
                                                            const rng2_i10238_i10676_i10990_i11203 = $p15579_i10236_i10674_i10988_i11201._1;
                                                            {
                                                              const $t15578_i10240_i10678_i10992_i11205 = (() => {
                                                                {
                                                                  const $t15577_i10239_i10677_i10991_i11204 = bits_i10237_i10675_i10989_i11202;
                                                                  return ($t15577_i10239_i10677_i10991_i11204 / 4.50359962737e+15);
                                                                }
                                                              })();
                                                              return { _0: $t15578_i10240_i10678_i10992_i11205, _1: rng2_i10238_i10676_i10990_i11203 };
                                                            }
                                                          }
                                                        }
                                                      }
                                                    })();
                                                    {
                                                      const t_i10680_i10994_i11207 = $p29052_i10679_i10993_i11206._0;
                                                      {
                                                        const rng2_i10681_i10995_i11208 = $p29052_i10679_i10993_i11206._1;
                                                        {
                                                          const out_i10682_i10996_i11209 = { _0: rng2_i10681_i10995_i11208, _1: t_i10680_i10994_i11207 };
                                                          return out_i10682_i10996_i11209;
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
        const $p29052_i10679_i10993_i11225 = (() => {
          {
            const $p15579_i10236_i10674_i10988_i11220 = (() => {
              {
                const $p15576_i1532_i10226_i10665_i10979_i11211 = Random$next_raw(rng);
                {
                  const hi_i1533_i10227_i10666_i10980_i11212 = $p15576_i1532_i10226_i10665_i10979_i11211._0;
                  {
                    const rng2_i1534_i10228_i10667_i10981_i11213 = $p15576_i1532_i10226_i10665_i10979_i11211._1;
                    {
                      const $p15575_i1535_i10229_i10668_i10982_i11214 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11213);
                      {
                        const lo_i1536_i10230_i10669_i10983_i11215 = $p15575_i1535_i10229_i10668_i10982_i11214._0;
                        {
                          const rng3_i1537_i10231_i10670_i10984_i11216 = $p15575_i1535_i10229_i10668_i10982_i11214._1;
                          {
                            const $t15574_i1541_i10235_i10673_i10987_i11219 = (() => {
                              {
                                const $t15573_i1540_i10234_i10672_i10986_i11218 = (() => {
                                  {
                                    const $t15571_i1538_i10232_i10671_i10985_i11217 = march_int_and(hi_i1533_i10227_i10666_i10980_i11212, 1048575);
                                    return ($t15571_i1538_i10232_i10671_i10985_i11217 * 4294967296);
                                  }
                                })();
                                return ($t15573_i1540_i10234_i10672_i10986_i11218 + lo_i1536_i10230_i10669_i10983_i11215);
                              }
                            })();
                            return { _0: $t15574_i1541_i10235_i10673_i10987_i11219, _1: rng3_i1537_i10231_i10670_i10984_i11216 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const bits_i10237_i10675_i10989_i11221 = $p15579_i10236_i10674_i10988_i11220._0;
              {
                const rng2_i10238_i10676_i10990_i11222 = $p15579_i10236_i10674_i10988_i11220._1;
                {
                  const $t15578_i10240_i10678_i10992_i11224 = (() => {
                    {
                      const $t15577_i10239_i10677_i10991_i11223 = bits_i10237_i10675_i10989_i11221;
                      return ($t15577_i10239_i10677_i10991_i11223 / 4.50359962737e+15);
                    }
                  })();
                  return { _0: $t15578_i10240_i10678_i10992_i11224, _1: rng2_i10238_i10676_i10990_i11222 };
                }
              }
            }
          }
        })();
        {
          const t_i10680_i10994_i11226 = $p29052_i10679_i10993_i11225._0;
          {
            const rng2_i10681_i10995_i11227 = $p29052_i10679_i10993_i11225._1;
            {
              const out_i10682_i10996_i11228 = { _0: rng2_i10681_i10995_i11227, _1: t_i10680_i10994_i11226 };
              return out_i10682_i10996_i11228;
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
            const go_i3697 = { $: "$Clo_go$4779", _0: go$apply$4779 };
            {
              const $t253_i3698 = { $: "Nil" };
              return go$apply$4779(go_i3697, acc, $t253_i3698);
            }
          }
        })();
        {
          const $t27700 = game.enemy_shots;
          {
            const $t27701 = (() => {
              {
                const go_i9920 = { $: "$Clo_go$4777", _0: go$apply$4777 };
                {
                  const $t261_i9923 = (() => {
                    {
                      const go_i4531_i9921 = { $: "$Clo_go$5264", _0: go$apply$5264 };
                      {
                        const $t253_i4532_i9922 = { $: "Nil" };
                        return go$apply$5264(go_i4531_i9921, new_shots, $t253_i4532_i9922);
                      }
                    }
                  })();
                  return go$apply$4777(go_i9920, $t261_i9923, $t27700);
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
                                              const $p29052_i10679_i10993_i11244 = (() => {
                                                {
                                                  const $p15579_i10236_i10674_i10988_i11239 = (() => {
                                                    {
                                                      const $p15576_i1532_i10226_i10665_i10979_i11230 = Random$next_raw($t27781);
                                                      {
                                                        const hi_i1533_i10227_i10666_i10980_i11231 = $p15576_i1532_i10226_i10665_i10979_i11230._0;
                                                        {
                                                          const rng2_i1534_i10228_i10667_i10981_i11232 = $p15576_i1532_i10226_i10665_i10979_i11230._1;
                                                          {
                                                            const $p15575_i1535_i10229_i10668_i10982_i11233 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11232);
                                                            {
                                                              const lo_i1536_i10230_i10669_i10983_i11234 = $p15575_i1535_i10229_i10668_i10982_i11233._0;
                                                              {
                                                                const rng3_i1537_i10231_i10670_i10984_i11235 = $p15575_i1535_i10229_i10668_i10982_i11233._1;
                                                                {
                                                                  const $t15574_i1541_i10235_i10673_i10987_i11238 = (() => {
                                                                    {
                                                                      const $t15573_i1540_i10234_i10672_i10986_i11237 = (() => {
                                                                        {
                                                                          const $t15571_i1538_i10232_i10671_i10985_i11236 = march_int_and(hi_i1533_i10227_i10666_i10980_i11231, 1048575);
                                                                          return ($t15571_i1538_i10232_i10671_i10985_i11236 * 4294967296);
                                                                        }
                                                                      })();
                                                                      return ($t15573_i1540_i10234_i10672_i10986_i11237 + lo_i1536_i10230_i10669_i10983_i11234);
                                                                    }
                                                                  })();
                                                                  return { _0: $t15574_i1541_i10235_i10673_i10987_i11238, _1: rng3_i1537_i10231_i10670_i10984_i11235 };
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  })();
                                                  {
                                                    const bits_i10237_i10675_i10989_i11240 = $p15579_i10236_i10674_i10988_i11239._0;
                                                    {
                                                      const rng2_i10238_i10676_i10990_i11241 = $p15579_i10236_i10674_i10988_i11239._1;
                                                      {
                                                        const $t15578_i10240_i10678_i10992_i11243 = (() => {
                                                          {
                                                            const $t15577_i10239_i10677_i10991_i11242 = bits_i10237_i10675_i10989_i11240;
                                                            return ($t15577_i10239_i10677_i10991_i11242 / 4.50359962737e+15);
                                                          }
                                                        })();
                                                        return { _0: $t15578_i10240_i10678_i10992_i11243, _1: rng2_i10238_i10676_i10990_i11241 };
                                                      }
                                                    }
                                                  }
                                                }
                                              })();
                                              {
                                                const t_i10680_i10994_i11245 = $p29052_i10679_i10993_i11244._0;
                                                {
                                                  const rng2_i10681_i10995_i11246 = $p29052_i10679_i10993_i11244._1;
                                                  {
                                                    const out_i10682_i10996_i11247 = { _0: rng2_i10681_i10995_i11246, _1: t_i10680_i10994_i11245 };
                                                    return out_i10682_i10996_i11247;
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
          const $t27899_i10000 = (() => {
            {
              const $t27896_i9997 = (() => {
                {
                  const $t27895_i9996 = Math.cos($t27906);
                  return (ax * $t27895_i9996);
                }
              })();
              {
                const $t27898_i9999 = (() => {
                  {
                    const $t27897_i9998 = Math.sin($t27906);
                    return (ay * $t27897_i9998);
                  }
                })();
                return ($t27896_i9997 - $t27898_i9999);
              }
            }
          })();
          {
            const $t27904_i10005 = (() => {
              {
                const $t27901_i10002 = (() => {
                  {
                    const $t27900_i10001 = Math.sin($t27906);
                    return (ax * $t27900_i10001);
                  }
                })();
                {
                  const $t27903_i10004 = (() => {
                    {
                      const $t27902_i10003 = Math.cos($t27906);
                      return (ay * $t27902_i10003);
                    }
                  })();
                  return ($t27901_i10002 + $t27903_i10004);
                }
              }
            })();
            return { _0: $t27899_i10000, _1: $t27904_i10005 };
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
                const $t27899_i9987 = (() => {
                  {
                    const $t27896_i9984 = (() => {
                      {
                        const $t27895_i9983 = Math.cos($t27909);
                        return (ax * $t27895_i9983);
                      }
                    })();
                    {
                      const $t27898_i9986 = (() => {
                        {
                          const $t27897_i9985 = Math.sin($t27909);
                          return (ay * $t27897_i9985);
                        }
                      })();
                      return ($t27896_i9984 - $t27898_i9986);
                    }
                  }
                })();
                {
                  const $t27904_i9992 = (() => {
                    {
                      const $t27901_i9989 = (() => {
                        {
                          const $t27900_i9988 = Math.sin($t27909);
                          return (ax * $t27900_i9988);
                        }
                      })();
                      {
                        const $t27903_i9991 = (() => {
                          {
                            const $t27902_i9990 = Math.cos($t27909);
                            return (ay * $t27902_i9990);
                          }
                        })();
                        return ($t27901_i9989 + $t27903_i9991);
                      }
                    }
                  })();
                  return { _0: $t27899_i9987, _1: $t27904_i9992 };
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
                      const $t27899_i9974 = (() => {
                        {
                          const $t27896_i9971 = (() => {
                            {
                              const $t27895_i9970 = Math.cos($t27911);
                              return (ax * $t27895_i9970);
                            }
                          })();
                          {
                            const $t27898_i9973 = (() => {
                              {
                                const $t27897_i9972 = Math.sin($t27911);
                                return (ay * $t27897_i9972);
                              }
                            })();
                            return ($t27896_i9971 - $t27898_i9973);
                          }
                        }
                      })();
                      {
                        const $t27904_i9979 = (() => {
                          {
                            const $t27901_i9976 = (() => {
                              {
                                const $t27900_i9975 = Math.sin($t27911);
                                return (ax * $t27900_i9975);
                              }
                            })();
                            {
                              const $t27903_i9978 = (() => {
                                {
                                  const $t27902_i9977 = Math.cos($t27911);
                                  return (ay * $t27902_i9977);
                                }
                              })();
                              return ($t27901_i9976 + $t27903_i9978);
                            }
                          }
                        })();
                        return { _0: $t27899_i9974, _1: $t27904_i9979 };
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
                          const $t27899_i9961 = (() => {
                            {
                              const $t27896_i9958 = (() => {
                                {
                                  const $t27895_i9957 = Math.cos(0.5236);
                                  return (ax * $t27895_i9957);
                                }
                              })();
                              {
                                const $t27898_i9960 = (() => {
                                  {
                                    const $t27897_i9959 = Math.sin(0.5236);
                                    return (ay * $t27897_i9959);
                                  }
                                })();
                                return ($t27896_i9958 - $t27898_i9960);
                              }
                            }
                          })();
                          {
                            const $t27904_i9966 = (() => {
                              {
                                const $t27901_i9963 = (() => {
                                  {
                                    const $t27900_i9962 = Math.sin(0.5236);
                                    return (ax * $t27900_i9962);
                                  }
                                })();
                                {
                                  const $t27903_i9965 = (() => {
                                    {
                                      const $t27902_i9964 = Math.cos(0.5236);
                                      return (ay * $t27902_i9964);
                                    }
                                  })();
                                  return ($t27901_i9963 + $t27903_i9965);
                                }
                              }
                            })();
                            return { _0: $t27899_i9961, _1: $t27904_i9966 };
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
                                const $t27886_i9952 = (ax * 420.);
                                {
                                  const $t27888_i9953 = (ay * 420.);
                                  return ({ x: x, y: y, vx: $t27886_i9952, vy: $t27888_i9953, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                }
                              }
                            })();
                            {
                              const $t27914 = (() => {
                                {
                                  const $t27886_i9946 = (a1x * 420.);
                                  {
                                    const $t27888_i9947 = (a1y * 420.);
                                    return ({ x: x, y: y, vx: $t27886_i9946, vy: $t27888_i9947, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                  }
                                }
                              })();
                              {
                                const $t27915 = (() => {
                                  {
                                    const $t27886_i9940 = (a2x * 420.);
                                    {
                                      const $t27888_i9941 = (a2y * 420.);
                                      return ({ x: x, y: y, vx: $t27886_i9940, vy: $t27888_i9941, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                    }
                                  }
                                })();
                                {
                                  const $t27916 = (() => {
                                    {
                                      const $t27886_i9934 = (a3x * 420.);
                                      {
                                        const $t27888_i9935 = (a3y * 420.);
                                        return ({ x: x, y: y, vx: $t27886_i9934, vy: $t27888_i9935, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                      }
                                    }
                                  })();
                                  {
                                    const $t27917 = (() => {
                                      {
                                        const $t27886_i9928 = (a4x * 420.);
                                        {
                                          const $t27888_i9929 = (a4y * 420.);
                                          return ({ x: x, y: y, vx: $t27886_i9928, vy: $t27888_i9929, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
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
                                                          const $t27886_i10022 = (ax * 420.);
                                                          {
                                                            const $t27888_i10023 = (ay * 420.);
                                                            return ({ x: $t27951, y: $t27952, vx: $t27886_i10022, vy: $t27888_i10023, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
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
                                                          const $t27891_i10028 = (ax * 420.);
                                                          {
                                                            const $t27893_i10029 = (ay * 420.);
                                                            return ({ x: $t27955, y: $t27956, vx: $t27891_i10028, vy: $t27893_i10029, ttl: 3., homing: true, star_killer: false, target_x: 0., target_y: 0. });
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
                                                      const reduced_i10016 = (() => {
                                                        {
                                                          const $t27346_i10015 = (() => {
                                                            {
                                                              const $t27344_i10014 = (() => {
                                                                {
                                                                  const $t27343_i10013 = game.fire_rate_stacks;
                                                                  return $t27343_i10013;
                                                                }
                                                              })();
                                                              return ($t27344_i10014 * 0.05);
                                                            }
                                                          })();
                                                          return (0.4 - $t27346_i10015);
                                                        }
                                                      })();
                                                      {
                                                        const $t27348_i10017 = (reduced_i10016 < 0.15);
                                                        if ($t27348_i10017 === true) {
                                                          return 0.15;
                                                        } else {
                                                          return reduced_i10016;
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
                                                      const go_i10008 = { $: "$Clo_go$4777", _0: go$apply$4777 };
                                                      {
                                                        const $t261_i10011 = (() => {
                                                          {
                                                            const go_i4531_i10009 = { $: "$Clo_go$5264", _0: go$apply$5264 };
                                                            {
                                                              const $t253_i4532_i10010 = { $: "Nil" };
                                                              return go$apply$5264(go_i4531_i10009, $t27993, $t253_i4532_i10010);
                                                            }
                                                          }
                                                        })();
                                                        return go$apply$4777(go_i10008, $t261_i10011, new_shots);
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
                    const $t27359_i10040 = (() => {
                      {
                        const dx_i3632_i10036 = (tx - $t28008);
                        {
                          const dy_i3633_i10037 = (ty - $t28009);
                          {
                            const $t27357_i3634_i10038 = (dx_i3632_i10036 * dx_i3632_i10036);
                            {
                              const $t27358_i3635_i10039 = (dy_i3633_i10037 * dy_i3633_i10037);
                              return ($t27357_i3634_i10038 + $t27358_i3635_i10039);
                            }
                          }
                        }
                      }
                    })();
                    {
                      const $t27362_i10043 = (() => {
                        {
                          const $t27360_i10041 = (0.001 + 0.);
                          {
                            const $t27361_i10042 = (0.001 + 0.);
                            return ($t27360_i10041 * $t27361_i10042);
                          }
                        }
                      })();
                      return ($t27359_i10040 <= $t27362_i10043);
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
              const go_i3756 = { $: "$Clo_go$4771", _0: go$apply$4771, _1: pred_i3755 };
              {
                const $t302_i3757 = { $: "Nil" };
                return go$apply$4771(go_i3756, $t28018, $t302_i3757);
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
                            const $t27359_i10065 = (() => {
                              {
                                const dx_i3632_i10061 = ($t28024 - $t28021);
                                {
                                  const dy_i3633_i10062 = ($t28025 - $t28022);
                                  {
                                    const $t27357_i3634_i10063 = (dx_i3632_i10061 * dx_i3632_i10061);
                                    {
                                      const $t27358_i3635_i10064 = (dy_i3633_i10062 * dy_i3633_i10062);
                                      return ($t27357_i3634_i10063 + $t27358_i3635_i10064);
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const $t27362_i10068 = (() => {
                                {
                                  const $t27360_i10066 = (20. + 0.);
                                  {
                                    const $t27361_i10067 = (20. + 0.);
                                    return ($t27360_i10066 * $t27361_i10067);
                                  }
                                }
                              })();
                              return ($t27359_i10065 <= $t27362_i10068);
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
                                      const go_i3748 = { $: "$Clo_go$4771", _0: go$apply$4771, _1: pred_i3747 };
                                      {
                                        const $t302_i3749 = { $: "Nil" };
                                        return go$apply$4771(go_i3748, $t28031, $t302_i3749);
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
                                      const $t28000_i10046 = { $: "$Clo_$lam27998$3697", _0: $lam27998$apply$3697, _1: tidx };
                                      {
                                        const $t28001_i10050 = (() => {
                                          {
                                            const pred_i3740_i10047 = $t28000_i10046;
                                            {
                                              const go_i3741_i10048 = { $: "$Clo_go$4783", _0: go$apply$4783, _1: pred_i3740_i10047 };
                                              {
                                                const $t302_i3742_i10049 = { $: "Nil" };
                                                return go$apply$4783(go_i3741_i10048, $t28036, $t302_i3742_i10049);
                                              }
                                            }
                                          }
                                        })();
                                        {
                                          const $t28007_i10051 = { $: "$Clo_$lam28002$3698", _0: $lam28002$apply$3698, _1: tidx };
                                          {
                                            const f_i3736_i10052 = $t28007_i10051;
                                            {
                                              const go_i3737_i10053 = { $: "$Clo_go$4781", _0: go$apply$4781, _1: f_i3736_i10052 };
                                              {
                                                const $t270_i3738_i10054 = { $: "Nil" };
                                                return go$apply$4781(go_i3737_i10053, $t28001_i10050, $t270_i3738_i10054);
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
                                              const go_i3752 = { $: "$Clo_go$4771", _0: go$apply$4771, _1: pred_i3751 };
                                              {
                                                const $t302_i3753 = { $: "Nil" };
                                                return go$apply$4771(go_i3752, $t28038, $t302_i3753);
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
              const go_i3770 = { $: "$Clo_go$4790", _0: go$apply$4790, _1: pred_i3769 };
              {
                const $t557_i3771 = { $: "Nil" };
                {
                  const $t558_i3772 = { $: "Nil" };
                  return go$apply$4790(go_i3770, $t28061, $t557_i3771, $t558_i3772);
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
                    const go_i3766 = { $: "$Clo_go$4771", _0: go$apply$4771, _1: pred_i3765 };
                    {
                      const $t302_i3767 = { $: "Nil" };
                      return go$apply$4771(go_i3766, $t28070, $t302_i3767);
                    }
                  }
                }
              })();
              {
                const killed = (() => {
                  {
                    const go_i3763 = { $: "$Clo_go$4787", _0: go$apply$4787 };
                    return go$apply$4787(go_i3763, dead, 0);
                  }
                })();
                {
                  const $t28080 = (killed === 0);
                  if ($t28080 === true) {
                    return (() => {
                      {
                        const $t28081 = (() => {
                          {
                            const $t28056_i10093 = { $: "$Clo_$lam28053$3704", _0: $lam28053$apply$3704 };
                            {
                              const f_i3759_i10094 = $t28056_i10093;
                              {
                                const go_i3760_i10095 = { $: "$Clo_go$4785", _0: go$apply$4785, _1: f_i3759_i10094 };
                                {
                                  const $t270_i3761_i10096 = { $: "Nil" };
                                  return go$apply$4785(go_i3760_i10095, dead, $t270_i3761_i10096);
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
                                  const raw_i10090 = ($t28085 + bumps);
                                  {
                                    const $t28060_i10091 = (raw_i10090 > 5);
                                    if ($t28060_i10091 === true) {
                                      return 5;
                                    } else {
                                      return raw_i10090;
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
                                    const $t28056_i10084 = { $: "$Clo_$lam28053$3704", _0: $lam28053$apply$3704 };
                                    {
                                      const f_i3759_i10085 = $t28056_i10084;
                                      {
                                        const go_i3760_i10086 = { $: "$Clo_go$4785", _0: go$apply$4785, _1: f_i3759_i10085 };
                                        {
                                          const $t270_i3761_i10087 = { $: "Nil" };
                                          return go$apply$4785(go_i3760_i10086, dead, $t270_i3761_i10087);
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
          const $t28050_i10640 = s.x;
          {
            const $t28051_i10641 = s.y;
            {
              const $t27359_i10079_i10646 = (() => {
                {
                  const dx_i3632_i10075_i10642 = (sx - $t28050_i10640);
                  {
                    const dy_i3633_i10076_i10643 = (sy - $t28051_i10641);
                    {
                      const $t27357_i3634_i10077_i10644 = (dx_i3632_i10075_i10642 * dx_i3632_i10075_i10642);
                      {
                        const $t27358_i3635_i10078_i10645 = (dy_i3633_i10076_i10643 * dy_i3633_i10076_i10643);
                        return ($t27357_i3634_i10077_i10644 + $t27358_i3635_i10078_i10645);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10082_i10649 = (() => {
                  {
                    const $t27360_i10080_i10647 = (3. + 10.);
                    {
                      const $t27361_i10081_i10648 = (3. + 10.);
                      return ($t27360_i10080_i10647 * $t27361_i10081_i10648);
                    }
                  }
                })();
                return ($t27359_i10079_i10646 <= $t27362_i10082_i10649);
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
              const go_i3785 = { $: "$Clo_go$4796", _0: go$apply$4796, _1: pred_i3784 };
              {
                const $t557_i3786 = { $: "Nil" };
                {
                  const $t558_i3787 = { $: "Nil" };
                  return go$apply$4796(go_i3785, $t28096, $t557_i3786, $t558_i3787);
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
                    const go_i3781 = { $: "$Clo_go$4771", _0: go$apply$4771, _1: pred_i3780 };
                    {
                      const $t302_i3782 = { $: "Nil" };
                      return go$apply$4771(go_i3781, $t28102, $t302_i3782);
                    }
                  }
                }
              })();
              {
                const killed = (() => {
                  {
                    const go_i3778 = { $: "$Clo_go$4793", _0: go$apply$4793 };
                    return go$apply$4793(go_i3778, dead, 0);
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
                                      const raw_i10099 = ($t28113 + bumps);
                                      {
                                        const $t28060_i10100 = (raw_i10099 > 5);
                                        if ($t28060_i10100 === true) {
                                          return 5;
                                        } else {
                                          return raw_i10099;
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
                        const $p29052_i10679_i10993_i11282 = (() => {
                          {
                            const $p15579_i10236_i10674_i10988_i11277 = (() => {
                              {
                                const $p15576_i1532_i10226_i10665_i10979_i11268 = Random$next_raw($t28122);
                                {
                                  const hi_i1533_i10227_i10666_i10980_i11269 = $p15576_i1532_i10226_i10665_i10979_i11268._0;
                                  {
                                    const rng2_i1534_i10228_i10667_i10981_i11270 = $p15576_i1532_i10226_i10665_i10979_i11268._1;
                                    {
                                      const $p15575_i1535_i10229_i10668_i10982_i11271 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11270);
                                      {
                                        const lo_i1536_i10230_i10669_i10983_i11272 = $p15575_i1535_i10229_i10668_i10982_i11271._0;
                                        {
                                          const rng3_i1537_i10231_i10670_i10984_i11273 = $p15575_i1535_i10229_i10668_i10982_i11271._1;
                                          {
                                            const $t15574_i1541_i10235_i10673_i10987_i11276 = (() => {
                                              {
                                                const $t15573_i1540_i10234_i10672_i10986_i11275 = (() => {
                                                  {
                                                    const $t15571_i1538_i10232_i10671_i10985_i11274 = march_int_and(hi_i1533_i10227_i10666_i10980_i11269, 1048575);
                                                    return ($t15571_i1538_i10232_i10671_i10985_i11274 * 4294967296);
                                                  }
                                                })();
                                                return ($t15573_i1540_i10234_i10672_i10986_i11275 + lo_i1536_i10230_i10669_i10983_i11272);
                                              }
                                            })();
                                            return { _0: $t15574_i1541_i10235_i10673_i10987_i11276, _1: rng3_i1537_i10231_i10670_i10984_i11273 };
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const bits_i10237_i10675_i10989_i11278 = $p15579_i10236_i10674_i10988_i11277._0;
                              {
                                const rng2_i10238_i10676_i10990_i11279 = $p15579_i10236_i10674_i10988_i11277._1;
                                {
                                  const $t15578_i10240_i10678_i10992_i11281 = (() => {
                                    {
                                      const $t15577_i10239_i10677_i10991_i11280 = bits_i10237_i10675_i10989_i11278;
                                      return ($t15577_i10239_i10677_i10991_i11280 / 4.50359962737e+15);
                                    }
                                  })();
                                  return { _0: $t15578_i10240_i10678_i10992_i11281, _1: rng2_i10238_i10676_i10990_i11279 };
                                }
                              }
                            }
                          }
                        })();
                        {
                          const t_i10680_i10994_i11283 = $p29052_i10679_i10993_i11282._0;
                          {
                            const rng2_i10681_i10995_i11284 = $p29052_i10679_i10993_i11282._1;
                            {
                              const out_i10682_i10996_i11285 = { _0: rng2_i10681_i10995_i11284, _1: t_i10680_i10994_i11283 };
                              return out_i10682_i10996_i11285;
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
                                          const $t669_i3791 = { $: "$Clo_$lam668$4798", _0: $lam668$apply$4798, _1: $t28126 };
                                          return List$any$List_WeaponKind$Fn_WeaponKind_Bool($t28125, $t669_i3791);
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const $p28144 = (() => {
                                      {
                                        const $p29052_i10679_i10993_i11263 = (() => {
                                          {
                                            const $p15579_i10236_i10674_i10988_i11258 = (() => {
                                              {
                                                const $p15576_i1532_i10226_i10665_i10979_i11249 = Random$next_raw(rng2);
                                                {
                                                  const hi_i1533_i10227_i10666_i10980_i11250 = $p15576_i1532_i10226_i10665_i10979_i11249._0;
                                                  {
                                                    const rng2_i1534_i10228_i10667_i10981_i11251 = $p15576_i1532_i10226_i10665_i10979_i11249._1;
                                                    {
                                                      const $p15575_i1535_i10229_i10668_i10982_i11252 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11251);
                                                      {
                                                        const lo_i1536_i10230_i10669_i10983_i11253 = $p15575_i1535_i10229_i10668_i10982_i11252._0;
                                                        {
                                                          const rng3_i1537_i10231_i10670_i10984_i11254 = $p15575_i1535_i10229_i10668_i10982_i11252._1;
                                                          {
                                                            const $t15574_i1541_i10235_i10673_i10987_i11257 = (() => {
                                                              {
                                                                const $t15573_i1540_i10234_i10672_i10986_i11256 = (() => {
                                                                  {
                                                                    const $t15571_i1538_i10232_i10671_i10985_i11255 = march_int_and(hi_i1533_i10227_i10666_i10980_i11250, 1048575);
                                                                    return ($t15571_i1538_i10232_i10671_i10985_i11255 * 4294967296);
                                                                  }
                                                                })();
                                                                return ($t15573_i1540_i10234_i10672_i10986_i11256 + lo_i1536_i10230_i10669_i10983_i11253);
                                                              }
                                                            })();
                                                            return { _0: $t15574_i1541_i10235_i10673_i10987_i11257, _1: rng3_i1537_i10231_i10670_i10984_i11254 };
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            })();
                                            {
                                              const bits_i10237_i10675_i10989_i11259 = $p15579_i10236_i10674_i10988_i11258._0;
                                              {
                                                const rng2_i10238_i10676_i10990_i11260 = $p15579_i10236_i10674_i10988_i11258._1;
                                                {
                                                  const $t15578_i10240_i10678_i10992_i11262 = (() => {
                                                    {
                                                      const $t15577_i10239_i10677_i10991_i11261 = bits_i10237_i10675_i10989_i11259;
                                                      return ($t15577_i10239_i10677_i10991_i11261 / 4.50359962737e+15);
                                                    }
                                                  })();
                                                  return { _0: $t15578_i10240_i10678_i10992_i11262, _1: rng2_i10238_i10676_i10990_i11260 };
                                                }
                                              }
                                            }
                                          }
                                        })();
                                        {
                                          const t_i10680_i10994_i11264 = $p29052_i10679_i10993_i11263._0;
                                          {
                                            const rng2_i10681_i10995_i11265 = $p29052_i10679_i10993_i11263._1;
                                            {
                                              const out_i10682_i10996_i11266 = { _0: rng2_i10681_i10995_i11265, _1: t_i10680_i10994_i11264 };
                                              return out_i10682_i10996_i11266;
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
                      const go_i3800 = { $: "$Clo_go$4767", _0: go$apply$4767, _1: pred_i3799 };
                      {
                        const $t302_i3801 = { $: "Nil" };
                        return go$apply$4767(go_i3800, $t28163, $t302_i3801);
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
              const $t27359_i10125 = (() => {
                {
                  const dx_i3632_i10121 = ($t28190 - sx);
                  {
                    const dy_i3633_i10122 = ($t28191 - sy);
                    {
                      const $t27357_i3634_i10123 = (dx_i3632_i10121 * dx_i3632_i10121);
                      {
                        const $t27358_i3635_i10124 = (dy_i3633_i10122 * dy_i3633_i10122);
                        return ($t27357_i3634_i10123 + $t27358_i3635_i10124);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10128 = (() => {
                  {
                    const $t27360_i10126 = (10. + 6.);
                    {
                      const $t27361_i10127 = (10. + 6.);
                      return ($t27360_i10126 * $t27361_i10127);
                    }
                  }
                })();
                return ($t27359_i10125 <= $t27362_i10128);
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
          const $p29052_i10679_i10993_i11301 = (() => {
            {
              const $p15579_i10236_i10674_i10988_i11296 = (() => {
                {
                  const $p15576_i1532_i10226_i10665_i10979_i11287 = Random$next_raw($t28203);
                  {
                    const hi_i1533_i10227_i10666_i10980_i11288 = $p15576_i1532_i10226_i10665_i10979_i11287._0;
                    {
                      const rng2_i1534_i10228_i10667_i10981_i11289 = $p15576_i1532_i10226_i10665_i10979_i11287._1;
                      {
                        const $p15575_i1535_i10229_i10668_i10982_i11290 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11289);
                        {
                          const lo_i1536_i10230_i10669_i10983_i11291 = $p15575_i1535_i10229_i10668_i10982_i11290._0;
                          {
                            const rng3_i1537_i10231_i10670_i10984_i11292 = $p15575_i1535_i10229_i10668_i10982_i11290._1;
                            {
                              const $t15574_i1541_i10235_i10673_i10987_i11295 = (() => {
                                {
                                  const $t15573_i1540_i10234_i10672_i10986_i11294 = (() => {
                                    {
                                      const $t15571_i1538_i10232_i10671_i10985_i11293 = march_int_and(hi_i1533_i10227_i10666_i10980_i11288, 1048575);
                                      return ($t15571_i1538_i10232_i10671_i10985_i11293 * 4294967296);
                                    }
                                  })();
                                  return ($t15573_i1540_i10234_i10672_i10986_i11294 + lo_i1536_i10230_i10669_i10983_i11291);
                                }
                              })();
                              return { _0: $t15574_i1541_i10235_i10673_i10987_i11295, _1: rng3_i1537_i10231_i10670_i10984_i11292 };
                            }
                          }
                        }
                      }
                    }
                  }
                }
              })();
              {
                const bits_i10237_i10675_i10989_i11297 = $p15579_i10236_i10674_i10988_i11296._0;
                {
                  const rng2_i10238_i10676_i10990_i11298 = $p15579_i10236_i10674_i10988_i11296._1;
                  {
                    const $t15578_i10240_i10678_i10992_i11300 = (() => {
                      {
                        const $t15577_i10239_i10677_i10991_i11299 = bits_i10237_i10675_i10989_i11297;
                        return ($t15577_i10239_i10677_i10991_i11299 / 4.50359962737e+15);
                      }
                    })();
                    return { _0: $t15578_i10240_i10678_i10992_i11300, _1: rng2_i10238_i10676_i10990_i11298 };
                  }
                }
              }
            }
          })();
          {
            const t_i10680_i10994_i11302 = $p29052_i10679_i10993_i11301._0;
            {
              const rng2_i10681_i10995_i11303 = $p29052_i10679_i10993_i11301._1;
              {
                const out_i10682_i10996_i11304 = { _0: rng2_i10681_i10995_i11303, _1: t_i10680_i10994_i11302 };
                return out_i10682_i10996_i11304;
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
                      const go_i3808 = { $: "$Clo_go$4771", _0: go$apply$4771, _1: pred_i3807 };
                      {
                        const $t302_i3809 = { $: "Nil" };
                        return go$apply$4771(go_i3808, $t28211, $t302_i3809);
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
                    const go_i3824 = { $: "$Clo_go$4802", _0: go$apply$4802, _1: pred_i3823 };
                    {
                      const $t302_i3825 = { $: "Nil" };
                      return go$apply$4802(go_i3824, $t28235, $t302_i3825);
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
                            const go_i3820 = { $: "$Clo_go$4802", _0: go$apply$4802, _1: pred_i3819 };
                            {
                              const $t302_i3821 = { $: "Nil" };
                              return go$apply$4802(go_i3820, $t28240, $t302_i3821);
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
                                  const go_i3816 = { $: "$Clo_go$4771", _0: go$apply$4771, _1: pred_i3815 };
                                  {
                                    const $t302_i3817 = { $: "Nil" };
                                    return go$apply$4771(go_i3816, $t28245, $t302_i3817);
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
                                        const go_i3812 = { $: "$Clo_go$4783", _0: go$apply$4783, _1: pred_i3811 };
                                        {
                                          const $t302_i3813 = { $: "Nil" };
                                          return go$apply$4783(go_i3812, $t28250, $t302_i3813);
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const $t28255 = game.fx_bursts;
                                    {
                                      const $t28256 = (() => {
                                        {
                                          const $t28056_i10150 = { $: "$Clo_$lam28053$3704", _0: $lam28053$apply$3704 };
                                          {
                                            const f_i3759_i10151 = $t28056_i10150;
                                            {
                                              const go_i3760_i10152 = { $: "$Clo_go$4785", _0: go$apply$4785, _1: f_i3759_i10151 };
                                              {
                                                const $t270_i3761_i10153 = { $: "Nil" };
                                                return go$apply$4785(go_i3760_i10152, dead_ast, $t270_i3761_i10153);
                                              }
                                            }
                                          }
                                        }
                                      })();
                                      {
                                        const $t28257 = (() => {
                                          {
                                            const go_i10145 = { $: "$Clo_go$4800", _0: go$apply$4800 };
                                            {
                                              const $t261_i10148 = (() => {
                                                {
                                                  const go_i4538_i10146 = { $: "$Clo_go$4325", _0: go$apply$4325 };
                                                  {
                                                    const $t253_i4539_i10147 = { $: "Nil" };
                                                    return go$apply$4325(go_i4538_i10146, $t28255, $t253_i4539_i10147);
                                                  }
                                                }
                                              })();
                                              return go$apply$4800(go_i10145, $t261_i10148, $t28256);
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
                const $p29052_i10679_i10993_i11320 = (() => {
                  {
                    const $p15579_i10236_i10674_i10988_i11315 = (() => {
                      {
                        const $p15576_i1532_i10226_i10665_i10979_i11306 = Random$next_raw(rng);
                        {
                          const hi_i1533_i10227_i10666_i10980_i11307 = $p15576_i1532_i10226_i10665_i10979_i11306._0;
                          {
                            const rng2_i1534_i10228_i10667_i10981_i11308 = $p15576_i1532_i10226_i10665_i10979_i11306._1;
                            {
                              const $p15575_i1535_i10229_i10668_i10982_i11309 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11308);
                              {
                                const lo_i1536_i10230_i10669_i10983_i11310 = $p15575_i1535_i10229_i10668_i10982_i11309._0;
                                {
                                  const rng3_i1537_i10231_i10670_i10984_i11311 = $p15575_i1535_i10229_i10668_i10982_i11309._1;
                                  {
                                    const $t15574_i1541_i10235_i10673_i10987_i11314 = (() => {
                                      {
                                        const $t15573_i1540_i10234_i10672_i10986_i11313 = (() => {
                                          {
                                            const $t15571_i1538_i10232_i10671_i10985_i11312 = march_int_and(hi_i1533_i10227_i10666_i10980_i11307, 1048575);
                                            return ($t15571_i1538_i10232_i10671_i10985_i11312 * 4294967296);
                                          }
                                        })();
                                        return ($t15573_i1540_i10234_i10672_i10986_i11313 + lo_i1536_i10230_i10669_i10983_i11310);
                                      }
                                    })();
                                    return { _0: $t15574_i1541_i10235_i10673_i10987_i11314, _1: rng3_i1537_i10231_i10670_i10984_i11311 };
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    })();
                    {
                      const bits_i10237_i10675_i10989_i11316 = $p15579_i10236_i10674_i10988_i11315._0;
                      {
                        const rng2_i10238_i10676_i10990_i11317 = $p15579_i10236_i10674_i10988_i11315._1;
                        {
                          const $t15578_i10240_i10678_i10992_i11319 = (() => {
                            {
                              const $t15577_i10239_i10677_i10991_i11318 = bits_i10237_i10675_i10989_i11316;
                              return ($t15577_i10239_i10677_i10991_i11318 / 4.50359962737e+15);
                            }
                          })();
                          return { _0: $t15578_i10240_i10678_i10992_i11319, _1: rng2_i10238_i10676_i10990_i11317 };
                        }
                      }
                    }
                  }
                })();
                {
                  const t_i10680_i10994_i11321 = $p29052_i10679_i10993_i11320._0;
                  {
                    const rng2_i10681_i10995_i11322 = $p29052_i10679_i10993_i11320._1;
                    {
                      const out_i10682_i10996_i11323 = { _0: rng2_i10681_i10995_i11322, _1: t_i10680_i10994_i11321 };
                      return out_i10682_i10996_i11323;
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
                  const $p29052_i10679_i10993_i11339 = (() => {
                    {
                      const $p15579_i10236_i10674_i10988_i11334 = (() => {
                        {
                          const $p15576_i1532_i10226_i10665_i10979_i11325 = Random$next_raw(rng);
                          {
                            const hi_i1533_i10227_i10666_i10980_i11326 = $p15576_i1532_i10226_i10665_i10979_i11325._0;
                            {
                              const rng2_i1534_i10228_i10667_i10981_i11327 = $p15576_i1532_i10226_i10665_i10979_i11325._1;
                              {
                                const $p15575_i1535_i10229_i10668_i10982_i11328 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11327);
                                {
                                  const lo_i1536_i10230_i10669_i10983_i11329 = $p15575_i1535_i10229_i10668_i10982_i11328._0;
                                  {
                                    const rng3_i1537_i10231_i10670_i10984_i11330 = $p15575_i1535_i10229_i10668_i10982_i11328._1;
                                    {
                                      const $t15574_i1541_i10235_i10673_i10987_i11333 = (() => {
                                        {
                                          const $t15573_i1540_i10234_i10672_i10986_i11332 = (() => {
                                            {
                                              const $t15571_i1538_i10232_i10671_i10985_i11331 = march_int_and(hi_i1533_i10227_i10666_i10980_i11326, 1048575);
                                              return ($t15571_i1538_i10232_i10671_i10985_i11331 * 4294967296);
                                            }
                                          })();
                                          return ($t15573_i1540_i10234_i10672_i10986_i11332 + lo_i1536_i10230_i10669_i10983_i11329);
                                        }
                                      })();
                                      return { _0: $t15574_i1541_i10235_i10673_i10987_i11333, _1: rng3_i1537_i10231_i10670_i10984_i11330 };
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      })();
                      {
                        const bits_i10237_i10675_i10989_i11335 = $p15579_i10236_i10674_i10988_i11334._0;
                        {
                          const rng2_i10238_i10676_i10990_i11336 = $p15579_i10236_i10674_i10988_i11334._1;
                          {
                            const $t15578_i10240_i10678_i10992_i11338 = (() => {
                              {
                                const $t15577_i10239_i10677_i10991_i11337 = bits_i10237_i10675_i10989_i11335;
                                return ($t15577_i10239_i10677_i10991_i11337 / 4.50359962737e+15);
                              }
                            })();
                            return { _0: $t15578_i10240_i10678_i10992_i11338, _1: rng2_i10238_i10676_i10990_i11336 };
                          }
                        }
                      }
                    }
                  })();
                  {
                    const t_i10680_i10994_i11340 = $p29052_i10679_i10993_i11339._0;
                    {
                      const rng2_i10681_i10995_i11341 = $p29052_i10679_i10993_i11339._1;
                      {
                        const out_i10682_i10996_i11342 = { _0: rng2_i10681_i10995_i11341, _1: t_i10680_i10994_i11340 };
                        return out_i10682_i10996_i11342;
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
                const $p29052_i10679_i10993_i11377 = (() => {
                  {
                    const $p15579_i10236_i10674_i10988_i11372 = (() => {
                      {
                        const $p15576_i1532_i10226_i10665_i10979_i11363 = Random$next_raw($t28306);
                        {
                          const hi_i1533_i10227_i10666_i10980_i11364 = $p15576_i1532_i10226_i10665_i10979_i11363._0;
                          {
                            const rng2_i1534_i10228_i10667_i10981_i11365 = $p15576_i1532_i10226_i10665_i10979_i11363._1;
                            {
                              const $p15575_i1535_i10229_i10668_i10982_i11366 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11365);
                              {
                                const lo_i1536_i10230_i10669_i10983_i11367 = $p15575_i1535_i10229_i10668_i10982_i11366._0;
                                {
                                  const rng3_i1537_i10231_i10670_i10984_i11368 = $p15575_i1535_i10229_i10668_i10982_i11366._1;
                                  {
                                    const $t15574_i1541_i10235_i10673_i10987_i11371 = (() => {
                                      {
                                        const $t15573_i1540_i10234_i10672_i10986_i11370 = (() => {
                                          {
                                            const $t15571_i1538_i10232_i10671_i10985_i11369 = march_int_and(hi_i1533_i10227_i10666_i10980_i11364, 1048575);
                                            return ($t15571_i1538_i10232_i10671_i10985_i11369 * 4294967296);
                                          }
                                        })();
                                        return ($t15573_i1540_i10234_i10672_i10986_i11370 + lo_i1536_i10230_i10669_i10983_i11367);
                                      }
                                    })();
                                    return { _0: $t15574_i1541_i10235_i10673_i10987_i11371, _1: rng3_i1537_i10231_i10670_i10984_i11368 };
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    })();
                    {
                      const bits_i10237_i10675_i10989_i11373 = $p15579_i10236_i10674_i10988_i11372._0;
                      {
                        const rng2_i10238_i10676_i10990_i11374 = $p15579_i10236_i10674_i10988_i11372._1;
                        {
                          const $t15578_i10240_i10678_i10992_i11376 = (() => {
                            {
                              const $t15577_i10239_i10677_i10991_i11375 = bits_i10237_i10675_i10989_i11373;
                              return ($t15577_i10239_i10677_i10991_i11375 / 4.50359962737e+15);
                            }
                          })();
                          return { _0: $t15578_i10240_i10678_i10992_i11376, _1: rng2_i10238_i10676_i10990_i11374 };
                        }
                      }
                    }
                  }
                })();
                {
                  const t_i10680_i10994_i11378 = $p29052_i10679_i10993_i11377._0;
                  {
                    const rng2_i10681_i10995_i11379 = $p29052_i10679_i10993_i11377._1;
                    {
                      const out_i10682_i10996_i11380 = { _0: rng2_i10681_i10995_i11379, _1: t_i10680_i10994_i11378 };
                      return out_i10682_i10996_i11380;
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
                              const $p29052_i10679_i10993_i11358 = (() => {
                                {
                                  const $p15579_i10236_i10674_i10988_i11353 = (() => {
                                    {
                                      const $p15576_i1532_i10226_i10665_i10979_i11344 = Random$next_raw(rng2);
                                      {
                                        const hi_i1533_i10227_i10666_i10980_i11345 = $p15576_i1532_i10226_i10665_i10979_i11344._0;
                                        {
                                          const rng2_i1534_i10228_i10667_i10981_i11346 = $p15576_i1532_i10226_i10665_i10979_i11344._1;
                                          {
                                            const $p15575_i1535_i10229_i10668_i10982_i11347 = Random$next_raw(rng2_i1534_i10228_i10667_i10981_i11346);
                                            {
                                              const lo_i1536_i10230_i10669_i10983_i11348 = $p15575_i1535_i10229_i10668_i10982_i11347._0;
                                              {
                                                const rng3_i1537_i10231_i10670_i10984_i11349 = $p15575_i1535_i10229_i10668_i10982_i11347._1;
                                                {
                                                  const $t15574_i1541_i10235_i10673_i10987_i11352 = (() => {
                                                    {
                                                      const $t15573_i1540_i10234_i10672_i10986_i11351 = (() => {
                                                        {
                                                          const $t15571_i1538_i10232_i10671_i10985_i11350 = march_int_and(hi_i1533_i10227_i10666_i10980_i11345, 1048575);
                                                          return ($t15571_i1538_i10232_i10671_i10985_i11350 * 4294967296);
                                                        }
                                                      })();
                                                      return ($t15573_i1540_i10234_i10672_i10986_i11351 + lo_i1536_i10230_i10669_i10983_i11348);
                                                    }
                                                  })();
                                                  return { _0: $t15574_i1541_i10235_i10673_i10987_i11352, _1: rng3_i1537_i10231_i10670_i10984_i11349 };
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const bits_i10237_i10675_i10989_i11354 = $p15579_i10236_i10674_i10988_i11353._0;
                                    {
                                      const rng2_i10238_i10676_i10990_i11355 = $p15579_i10236_i10674_i10988_i11353._1;
                                      {
                                        const $t15578_i10240_i10678_i10992_i11357 = (() => {
                                          {
                                            const $t15577_i10239_i10677_i10991_i11356 = bits_i10237_i10675_i10989_i11354;
                                            return ($t15577_i10239_i10677_i10991_i11356 / 4.50359962737e+15);
                                          }
                                        })();
                                        return { _0: $t15578_i10240_i10678_i10992_i11357, _1: rng2_i10238_i10676_i10990_i11355 };
                                      }
                                    }
                                  }
                                }
                              })();
                              {
                                const t_i10680_i10994_i11359 = $p29052_i10679_i10993_i11358._0;
                                {
                                  const rng2_i10681_i10995_i11360 = $p29052_i10679_i10993_i11358._1;
                                  {
                                    const out_i10682_i10996_i11361 = { _0: rng2_i10681_i10995_i11360, _1: t_i10680_i10994_i11359 };
                                    return out_i10682_i10996_i11361;
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
        const go_i3834 = { $: "$Clo_go$4808", _0: go$apply$4808 };
        {
          const $t508_i3835 = { $: "Nil" };
          return go$apply$4808(go_i3834, xs, idx, $t508_i3835);
        }
      }
    })();
    {
      const $t28320 = (idx + 1);
      {
        const $t28321 = List$drop$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int(xs, $t28320);
        {
          const go_i10156 = { $: "$Clo_go$4805", _0: go$apply$4805 };
          {
            const $t261_i10159 = (() => {
              {
                const go_i4542_i10157 = { $: "$Clo_go$5267", _0: go$apply$5267 };
                {
                  const $t253_i4543_i10158 = { $: "Nil" };
                  return go$apply$5267(go_i4542_i10157, $t28319, $t253_i4543_i10158);
                }
              }
            })();
            return go$apply$4805(go_i10156, $t261_i10159, $t28321);
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
      const go_i3837 = { $: "$Clo_go$4810", _0: go$apply$4810 };
      return go$apply$4810(go_i3837, $t28324, 0);
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
          const go_i3841 = { $: "$Clo_go$4814", _0: go$apply$4814 };
          return go$apply$4814(go_i3841, $t28344, 0);
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
          const $p29052_i10679_i11012 = (() => {
            {
              const $p15579_i10236_i10674_i11007 = (() => {
                {
                  const $p15576_i1532_i10226_i10665_i10998 = Random$next_raw($t28407);
                  {
                    const hi_i1533_i10227_i10666_i10999 = $p15576_i1532_i10226_i10665_i10998._0;
                    {
                      const rng2_i1534_i10228_i10667_i11000 = $p15576_i1532_i10226_i10665_i10998._1;
                      {
                        const $p15575_i1535_i10229_i10668_i11001 = Random$next_raw(rng2_i1534_i10228_i10667_i11000);
                        {
                          const lo_i1536_i10230_i10669_i11002 = $p15575_i1535_i10229_i10668_i11001._0;
                          {
                            const rng3_i1537_i10231_i10670_i11003 = $p15575_i1535_i10229_i10668_i11001._1;
                            {
                              const $t15574_i1541_i10235_i10673_i11006 = (() => {
                                {
                                  const $t15573_i1540_i10234_i10672_i11005 = (() => {
                                    {
                                      const $t15571_i1538_i10232_i10671_i11004 = march_int_and(hi_i1533_i10227_i10666_i10999, 1048575);
                                      return ($t15571_i1538_i10232_i10671_i11004 * 4294967296);
                                    }
                                  })();
                                  return ($t15573_i1540_i10234_i10672_i11005 + lo_i1536_i10230_i10669_i11002);
                                }
                              })();
                              return { _0: $t15574_i1541_i10235_i10673_i11006, _1: rng3_i1537_i10231_i10670_i11003 };
                            }
                          }
                        }
                      }
                    }
                  }
                }
              })();
              {
                const bits_i10237_i10675_i11008 = $p15579_i10236_i10674_i11007._0;
                {
                  const rng2_i10238_i10676_i11009 = $p15579_i10236_i10674_i11007._1;
                  {
                    const $t15578_i10240_i10678_i11011 = (() => {
                      {
                        const $t15577_i10239_i10677_i11010 = bits_i10237_i10675_i11008;
                        return ($t15577_i10239_i10677_i11010 / 4.50359962737e+15);
                      }
                    })();
                    return { _0: $t15578_i10240_i10678_i11011, _1: rng2_i10238_i10676_i11009 };
                  }
                }
              }
            }
          })();
          {
            const t_i10680_i11013 = $p29052_i10679_i11012._0;
            {
              const rng2_i10681_i11014 = $p29052_i10679_i11012._1;
              {
                const out_i10682_i11015 = { _0: rng2_i10681_i11014, _1: t_i10680_i11013 };
                return out_i10682_i11015;
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
            const go_i3881 = { $: "$Clo_go$4814", _0: go$apply$4814 };
            return go$apply$4814(go_i3881, $t28494, 0);
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
                const vx_i10167 = (() => {
                  {
                    const $t28529_i10166 = (() => {
                      {
                        const $t28527_i10164 = (1. * 340.);
                        {
                          const $t28528_i10165 = Math.sin(angle);
                          return ($t28527_i10164 * $t28528_i10165);
                        }
                      }
                    })();
                    return (0. - $t28529_i10166);
                  }
                })();
                {
                  const vy_i10170 = (() => {
                    {
                      const $t28531_i10168 = (1. * 340.);
                      {
                        const $t28532_i10169 = Math.cos(angle);
                        return ($t28531_i10168 * $t28532_i10169);
                      }
                    }
                  })();
                  {
                    const $t28533_i10171 = { $: "Flying", _0: vx_i10167, _1: vy_i10170 };
                    return ({ ...game, mode: $t28533_i10171 });
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
          const go_i3896 = { $: "$Clo_go$4325", _0: go$apply$4325 };
          {
            const $t253_i3897 = { $: "Nil" };
            return go$apply$4325(go_i3896, acc, $t253_i3897);
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
                          const vx_i10179 = (() => {
                            {
                              const $t28529_i10178 = (() => {
                                {
                                  const $t28527_i10176 = (1. * 340.);
                                  {
                                    const $t28528_i10177 = Math.sin(angle);
                                    return ($t28527_i10176 * $t28528_i10177);
                                  }
                                }
                              })();
                              return (0. - $t28529_i10178);
                            }
                          })();
                          {
                            const vy_i10182 = (() => {
                              {
                                const $t28531_i10180 = (1. * 340.);
                                {
                                  const $t28532_i10181 = Math.cos(angle);
                                  return ($t28531_i10180 * $t28532_i10181);
                                }
                              }
                            })();
                            {
                              const $t28533_i10183 = { $: "Flying", _0: vx_i10179, _1: vy_i10182 };
                              return ({ ...game, mode: $t28533_i10183 });
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
                const $t669_i3920 = { $: "$Clo_$lam668$4798", _0: $lam668$apply$4798, _1: k };
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
                          const go_i10186 = { $: "$Clo_go$4817", _0: go$apply$4817 };
                          {
                            const $t261_i10189 = (() => {
                              {
                                const go_i4549_i10187 = { $: "$Clo_go$5269", _0: go$apply$5269 };
                                {
                                  const $t253_i4550_i10188 = { $: "Nil" };
                                  return go$apply$5269(go_i4549_i10187, $t28733, $t253_i4550_i10188);
                                }
                              }
                            })();
                            return go$apply$4817(go_i10186, $t261_i10189, $t28735);
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
                                  const go_i10193 = { $: "$Clo_go$4805", _0: go$apply$4805 };
                                  {
                                    const $t261_i10196 = (() => {
                                      {
                                        const go_i4542_i10194 = { $: "$Clo_go$5267", _0: go$apply$5267 };
                                        {
                                          const $t253_i4543_i10195 = { $: "Nil" };
                                          return go$apply$5267(go_i4542_i10194, $t28760, $t253_i4543_i10195);
                                        }
                                      }
                                    })();
                                    return go$apply$4805(go_i10193, $t261_i10196, $t28762);
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
                                    const go_i3923 = { $: "$Clo_go$4765", _0: go$apply$4765 };
                                    return go$apply$4765(go_i3923, $t28764, 0);
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
                  const go_i3927 = { $: "$Clo_go$4819", _0: go$apply$4819 };
                  {
                    const $t508_i3928 = { $: "Nil" };
                    return go$apply$4819(go_i3927, $t28788, 10, $t508_i3928);
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
            const $p28957_i10209 = (() => {
              {
                const $t28956_i10198 = game.rng;
                {
                  const $p15576_i3946_i10199 = Random$next_raw($t28956_i10198);
                  {
                    const hi_i3947_i10200 = $p15576_i3946_i10199._0;
                    {
                      const rng2_i3948_i10201 = $p15576_i3946_i10199._1;
                      {
                        const $p15575_i3949_i10202 = Random$next_raw(rng2_i3948_i10201);
                        {
                          const lo_i3950_i10203 = $p15575_i3949_i10202._0;
                          {
                            const rng3_i3951_i10204 = $p15575_i3949_i10202._1;
                            {
                              const $t15574_i3955_i10208 = (() => {
                                {
                                  const $t15573_i3954_i10207 = (() => {
                                    {
                                      const $t15571_i3952_i10205 = march_int_and(hi_i3947_i10200, 1048575);
                                      return ($t15571_i3952_i10205 * 4294967296);
                                    }
                                  })();
                                  return ($t15573_i3954_i10207 + lo_i3950_i10203);
                                }
                              })();
                              return { _0: $t15574_i3955_i10208, _1: rng3_i3951_i10204 };
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
              const s_i10210 = $p28957_i10209._0;
              return s_i10210;
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
        const $p28957_i10223 = (() => {
          {
            const $t28956_i10212 = game.rng;
            {
              const $p15576_i3946_i10213 = Random$next_raw($t28956_i10212);
              {
                const hi_i3947_i10214 = $p15576_i3946_i10213._0;
                {
                  const rng2_i3948_i10215 = $p15576_i3946_i10213._1;
                  {
                    const $p15575_i3949_i10216 = Random$next_raw(rng2_i3948_i10215);
                    {
                      const lo_i3950_i10217 = $p15575_i3949_i10216._0;
                      {
                        const rng3_i3951_i10218 = $p15575_i3949_i10216._1;
                        {
                          const $t15574_i3955_i10222 = (() => {
                            {
                              const $t15573_i3954_i10221 = (() => {
                                {
                                  const $t15571_i3952_i10219 = march_int_and(hi_i3947_i10214, 1048575);
                                  return ($t15571_i3952_i10219 * 4294967296);
                                }
                              })();
                              return ($t15573_i3954_i10221 + lo_i3950_i10217);
                            }
                          })();
                          return { _0: $t15574_i3955_i10222, _1: rng3_i3951_i10218 };
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
          const s_i10224 = $p28957_i10223._0;
          return s_i10224;
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
                  const go_i3961 = { $: "$Clo_go$4821", _0: go$apply$4821, _1: f_i3960 };
                  {
                    const $t270_i3962 = { $: "Nil" };
                    return go$apply$4821(go_i3961, runs, $t270_i3962);
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
            const go_i3970 = { $: "$Clo_go$4823", _0: go$apply$4823 };
            {
              const $t253_i3971 = { $: "Nil" };
              return go$apply$4823(go_i3970, acc, $t253_i3971);
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
        const $p29052_i10793 = (() => {
          {
            const $p15579_i10236_i10788 = (() => {
              {
                const $p15576_i1532_i10226_i10779 = Random$next_raw(rng);
                {
                  const hi_i1533_i10227_i10780 = $p15576_i1532_i10226_i10779._0;
                  {
                    const rng2_i1534_i10228_i10781 = $p15576_i1532_i10226_i10779._1;
                    {
                      const $p15575_i1535_i10229_i10782 = Random$next_raw(rng2_i1534_i10228_i10781);
                      {
                        const lo_i1536_i10230_i10783 = $p15575_i1535_i10229_i10782._0;
                        {
                          const rng3_i1537_i10231_i10784 = $p15575_i1535_i10229_i10782._1;
                          {
                            const $t15574_i1541_i10235_i10787 = (() => {
                              {
                                const $t15573_i1540_i10234_i10786 = (() => {
                                  {
                                    const $t15571_i1538_i10232_i10785 = march_int_and(hi_i1533_i10227_i10780, 1048575);
                                    return ($t15571_i1538_i10232_i10785 * 4294967296);
                                  }
                                })();
                                return ($t15573_i1540_i10234_i10786 + lo_i1536_i10230_i10783);
                              }
                            })();
                            return { _0: $t15574_i1541_i10235_i10787, _1: rng3_i1537_i10231_i10784 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const bits_i10237_i10789 = $p15579_i10236_i10788._0;
              {
                const rng2_i10238_i10790 = $p15579_i10236_i10788._1;
                {
                  const $t15578_i10240_i10792 = (() => {
                    {
                      const $t15577_i10239_i10791 = bits_i10237_i10789;
                      return ($t15577_i10239_i10791 / 4.50359962737e+15);
                    }
                  })();
                  return { _0: $t15578_i10240_i10792, _1: rng2_i10238_i10790 };
                }
              }
            }
          }
        })();
        {
          const t_i10794 = $p29052_i10793._0;
          {
            const rng2_i10795 = $p29052_i10793._1;
            {
              const out_i10796 = { _0: rng2_i10795, _1: t_i10794 };
              return out_i10796;
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
              const $p29052_i10774 = (() => {
                {
                  const $p15579_i10236_i10769 = (() => {
                    {
                      const $p15576_i1532_i10226_i10760 = Random$next_raw(r1);
                      {
                        const hi_i1533_i10227_i10761 = $p15576_i1532_i10226_i10760._0;
                        {
                          const rng2_i1534_i10228_i10762 = $p15576_i1532_i10226_i10760._1;
                          {
                            const $p15575_i1535_i10229_i10763 = Random$next_raw(rng2_i1534_i10228_i10762);
                            {
                              const lo_i1536_i10230_i10764 = $p15575_i1535_i10229_i10763._0;
                              {
                                const rng3_i1537_i10231_i10765 = $p15575_i1535_i10229_i10763._1;
                                {
                                  const $t15574_i1541_i10235_i10768 = (() => {
                                    {
                                      const $t15573_i1540_i10234_i10767 = (() => {
                                        {
                                          const $t15571_i1538_i10232_i10766 = march_int_and(hi_i1533_i10227_i10761, 1048575);
                                          return ($t15571_i1538_i10232_i10766 * 4294967296);
                                        }
                                      })();
                                      return ($t15573_i1540_i10234_i10767 + lo_i1536_i10230_i10764);
                                    }
                                  })();
                                  return { _0: $t15574_i1541_i10235_i10768, _1: rng3_i1537_i10231_i10765 };
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  })();
                  {
                    const bits_i10237_i10770 = $p15579_i10236_i10769._0;
                    {
                      const rng2_i10238_i10771 = $p15579_i10236_i10769._1;
                      {
                        const $t15578_i10240_i10773 = (() => {
                          {
                            const $t15577_i10239_i10772 = bits_i10237_i10770;
                            return ($t15577_i10239_i10772 / 4.50359962737e+15);
                          }
                        })();
                        return { _0: $t15578_i10240_i10773, _1: rng2_i10238_i10771 };
                      }
                    }
                  }
                }
              })();
              {
                const t_i10775 = $p29052_i10774._0;
                {
                  const rng2_i10776 = $p29052_i10774._1;
                  {
                    const out_i10777 = { _0: rng2_i10776, _1: t_i10775 };
                    return out_i10777;
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
                    const $p29052_i10755 = (() => {
                      {
                        const $p15579_i10236_i10750 = (() => {
                          {
                            const $p15576_i1532_i10226_i10741 = Random$next_raw(r2);
                            {
                              const hi_i1533_i10227_i10742 = $p15576_i1532_i10226_i10741._0;
                              {
                                const rng2_i1534_i10228_i10743 = $p15576_i1532_i10226_i10741._1;
                                {
                                  const $p15575_i1535_i10229_i10744 = Random$next_raw(rng2_i1534_i10228_i10743);
                                  {
                                    const lo_i1536_i10230_i10745 = $p15575_i1535_i10229_i10744._0;
                                    {
                                      const rng3_i1537_i10231_i10746 = $p15575_i1535_i10229_i10744._1;
                                      {
                                        const $t15574_i1541_i10235_i10749 = (() => {
                                          {
                                            const $t15573_i1540_i10234_i10748 = (() => {
                                              {
                                                const $t15571_i1538_i10232_i10747 = march_int_and(hi_i1533_i10227_i10742, 1048575);
                                                return ($t15571_i1538_i10232_i10747 * 4294967296);
                                              }
                                            })();
                                            return ($t15573_i1540_i10234_i10748 + lo_i1536_i10230_i10745);
                                          }
                                        })();
                                        return { _0: $t15574_i1541_i10235_i10749, _1: rng3_i1537_i10231_i10746 };
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        })();
                        {
                          const bits_i10237_i10751 = $p15579_i10236_i10750._0;
                          {
                            const rng2_i10238_i10752 = $p15579_i10236_i10750._1;
                            {
                              const $t15578_i10240_i10754 = (() => {
                                {
                                  const $t15577_i10239_i10753 = bits_i10237_i10751;
                                  return ($t15577_i10239_i10753 / 4.50359962737e+15);
                                }
                              })();
                              return { _0: $t15578_i10240_i10754, _1: rng2_i10238_i10752 };
                            }
                          }
                        }
                      }
                    })();
                    {
                      const t_i10756 = $p29052_i10755._0;
                      {
                        const rng2_i10757 = $p29052_i10755._1;
                        {
                          const out_i10758 = { _0: rng2_i10757, _1: t_i10756 };
                          return out_i10758;
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
                          const $p29052_i10736 = (() => {
                            {
                              const $p15579_i10236_i10731 = (() => {
                                {
                                  const $p15576_i1532_i10226_i10722 = Random$next_raw(r3);
                                  {
                                    const hi_i1533_i10227_i10723 = $p15576_i1532_i10226_i10722._0;
                                    {
                                      const rng2_i1534_i10228_i10724 = $p15576_i1532_i10226_i10722._1;
                                      {
                                        const $p15575_i1535_i10229_i10725 = Random$next_raw(rng2_i1534_i10228_i10724);
                                        {
                                          const lo_i1536_i10230_i10726 = $p15575_i1535_i10229_i10725._0;
                                          {
                                            const rng3_i1537_i10231_i10727 = $p15575_i1535_i10229_i10725._1;
                                            {
                                              const $t15574_i1541_i10235_i10730 = (() => {
                                                {
                                                  const $t15573_i1540_i10234_i10729 = (() => {
                                                    {
                                                      const $t15571_i1538_i10232_i10728 = march_int_and(hi_i1533_i10227_i10723, 1048575);
                                                      return ($t15571_i1538_i10232_i10728 * 4294967296);
                                                    }
                                                  })();
                                                  return ($t15573_i1540_i10234_i10729 + lo_i1536_i10230_i10726);
                                                }
                                              })();
                                              return { _0: $t15574_i1541_i10235_i10730, _1: rng3_i1537_i10231_i10727 };
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              })();
                              {
                                const bits_i10237_i10732 = $p15579_i10236_i10731._0;
                                {
                                  const rng2_i10238_i10733 = $p15579_i10236_i10731._1;
                                  {
                                    const $t15578_i10240_i10735 = (() => {
                                      {
                                        const $t15577_i10239_i10734 = bits_i10237_i10732;
                                        return ($t15577_i10239_i10734 / 4.50359962737e+15);
                                      }
                                    })();
                                    return { _0: $t15578_i10240_i10735, _1: rng2_i10238_i10733 };
                                  }
                                }
                              }
                            }
                          })();
                          {
                            const t_i10737 = $p29052_i10736._0;
                            {
                              const rng2_i10738 = $p29052_i10736._1;
                              {
                                const out_i10739 = { _0: rng2_i10738, _1: t_i10737 };
                                return out_i10739;
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
                                const $p29052_i10717 = (() => {
                                  {
                                    const $p15579_i10236_i10712 = (() => {
                                      {
                                        const $p15576_i1532_i10226_i10703 = Random$next_raw(r4);
                                        {
                                          const hi_i1533_i10227_i10704 = $p15576_i1532_i10226_i10703._0;
                                          {
                                            const rng2_i1534_i10228_i10705 = $p15576_i1532_i10226_i10703._1;
                                            {
                                              const $p15575_i1535_i10229_i10706 = Random$next_raw(rng2_i1534_i10228_i10705);
                                              {
                                                const lo_i1536_i10230_i10707 = $p15575_i1535_i10229_i10706._0;
                                                {
                                                  const rng3_i1537_i10231_i10708 = $p15575_i1535_i10229_i10706._1;
                                                  {
                                                    const $t15574_i1541_i10235_i10711 = (() => {
                                                      {
                                                        const $t15573_i1540_i10234_i10710 = (() => {
                                                          {
                                                            const $t15571_i1538_i10232_i10709 = march_int_and(hi_i1533_i10227_i10704, 1048575);
                                                            return ($t15571_i1538_i10232_i10709 * 4294967296);
                                                          }
                                                        })();
                                                        return ($t15573_i1540_i10234_i10710 + lo_i1536_i10230_i10707);
                                                      }
                                                    })();
                                                    return { _0: $t15574_i1541_i10235_i10711, _1: rng3_i1537_i10231_i10708 };
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    })();
                                    {
                                      const bits_i10237_i10713 = $p15579_i10236_i10712._0;
                                      {
                                        const rng2_i10238_i10714 = $p15579_i10236_i10712._1;
                                        {
                                          const $t15578_i10240_i10716 = (() => {
                                            {
                                              const $t15577_i10239_i10715 = bits_i10237_i10713;
                                              return ($t15577_i10239_i10715 / 4.50359962737e+15);
                                            }
                                          })();
                                          return { _0: $t15578_i10240_i10716, _1: rng2_i10238_i10714 };
                                        }
                                      }
                                    }
                                  }
                                })();
                                {
                                  const t_i10718 = $p29052_i10717._0;
                                  {
                                    const rng2_i10719 = $p29052_i10717._1;
                                    {
                                      const out_i10720 = { _0: rng2_i10719, _1: t_i10718 };
                                      return out_i10720;
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
                                      const $p29052_i10698 = (() => {
                                        {
                                          const $p15579_i10236_i10693 = (() => {
                                            {
                                              const $p15576_i1532_i10226_i10684 = Random$next_raw(r5);
                                              {
                                                const hi_i1533_i10227_i10685 = $p15576_i1532_i10226_i10684._0;
                                                {
                                                  const rng2_i1534_i10228_i10686 = $p15576_i1532_i10226_i10684._1;
                                                  {
                                                    const $p15575_i1535_i10229_i10687 = Random$next_raw(rng2_i1534_i10228_i10686);
                                                    {
                                                      const lo_i1536_i10230_i10688 = $p15575_i1535_i10229_i10687._0;
                                                      {
                                                        const rng3_i1537_i10231_i10689 = $p15575_i1535_i10229_i10687._1;
                                                        {
                                                          const $t15574_i1541_i10235_i10692 = (() => {
                                                            {
                                                              const $t15573_i1540_i10234_i10691 = (() => {
                                                                {
                                                                  const $t15571_i1538_i10232_i10690 = march_int_and(hi_i1533_i10227_i10685, 1048575);
                                                                  return ($t15571_i1538_i10232_i10690 * 4294967296);
                                                                }
                                                              })();
                                                              return ($t15573_i1540_i10234_i10691 + lo_i1536_i10230_i10688);
                                                            }
                                                          })();
                                                          return { _0: $t15574_i1541_i10235_i10692, _1: rng3_i1537_i10231_i10689 };
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          })();
                                          {
                                            const bits_i10237_i10694 = $p15579_i10236_i10693._0;
                                            {
                                              const rng2_i10238_i10695 = $p15579_i10236_i10693._1;
                                              {
                                                const $t15578_i10240_i10697 = (() => {
                                                  {
                                                    const $t15577_i10239_i10696 = bits_i10237_i10694;
                                                    return ($t15577_i10239_i10696 / 4.50359962737e+15);
                                                  }
                                                })();
                                                return { _0: $t15578_i10240_i10697, _1: rng2_i10238_i10695 };
                                              }
                                            }
                                          }
                                        }
                                      })();
                                      {
                                        const t_i10699 = $p29052_i10698._0;
                                        {
                                          const rng2_i10700 = $p29052_i10698._1;
                                          {
                                            const out_i10701 = { _0: rng2_i10700, _1: t_i10699 };
                                            return out_i10701;
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

function Perihelion$Nebula$make_lobe(sx, sy, seed, base_r, i) {
  {
    const fi = i;
    {
      const spread = (() => {
        {
          const $t29126 = (i === 0);
          if ($t29126 === true) {
            return 90.;
          } else {
            return (base_r * 0.5);
          }
        }
      })();
      {
        const jx = (() => {
          {
            const $t29131 = (() => {
              {
                const $t29130 = (() => {
                  {
                    const $t29129 = (() => {
                      {
                        const $t29128 = (() => {
                          {
                            const $t29127 = (sx + 10.);
                            return ($t29127 + fi);
                          }
                        })();
                        {
                          const x_i10298 = (() => {
                            {
                              const $t29119_i10297 = (() => {
                                {
                                  const $t29118_i10296 = (() => {
                                    {
                                      const $t29116_i10294 = (() => {
                                        {
                                          const $t29114_i10292 = ($t29128 * 12.9898);
                                          {
                                            const $t29115_i10293 = (sy * 78.233);
                                            return ($t29114_i10292 + $t29115_i10293);
                                          }
                                        }
                                      })();
                                      {
                                        const $t29117_i10295 = (seed * 37.719);
                                        return ($t29116_i10294 + $t29117_i10295);
                                      }
                                    }
                                  })();
                                  return Math.sin($t29118_i10296);
                                }
                              })();
                              return ($t29119_i10297 * 43758.5453);
                            }
                          })();
                          {
                            const $t29120_i10300 = (() => {
                              {
                                const $t1582_i4013_i10299 = Math.floor(x_i10298);
                                return $t1582_i4013_i10299;
                              }
                            })();
                            return (x_i10298 - $t29120_i10300);
                          }
                        }
                      }
                    })();
                    return ($t29129 - 0.5);
                  }
                })();
                return ($t29130 * 2.);
              }
            })();
            return ($t29131 * spread);
          }
        })();
        {
          const jy = (() => {
            {
              const $t29136 = (() => {
                {
                  const $t29135 = (() => {
                    {
                      const $t29134 = (() => {
                        {
                          const $t29133 = (() => {
                            {
                              const $t29132 = (sy + 10.);
                              return ($t29132 + fi);
                            }
                          })();
                          {
                            const x_i10286 = (() => {
                              {
                                const $t29119_i10285 = (() => {
                                  {
                                    const $t29118_i10284 = (() => {
                                      {
                                        const $t29116_i10282 = (() => {
                                          {
                                            const $t29114_i10280 = (sx * 12.9898);
                                            {
                                              const $t29115_i10281 = ($t29133 * 78.233);
                                              return ($t29114_i10280 + $t29115_i10281);
                                            }
                                          }
                                        })();
                                        {
                                          const $t29117_i10283 = (seed * 37.719);
                                          return ($t29116_i10282 + $t29117_i10283);
                                        }
                                      }
                                    })();
                                    return Math.sin($t29118_i10284);
                                  }
                                })();
                                return ($t29119_i10285 * 43758.5453);
                              }
                            })();
                            {
                              const $t29120_i10288 = (() => {
                                {
                                  const $t1582_i4013_i10287 = Math.floor(x_i10286);
                                  return $t1582_i4013_i10287;
                                }
                              })();
                              return (x_i10286 - $t29120_i10288);
                            }
                          }
                        }
                      })();
                      return ($t29134 - 0.5);
                    }
                  })();
                  return ($t29135 * 2.);
                }
              })();
              return ($t29136 * spread);
            }
          })();
          {
            const rf = (() => {
              {
                const $t29140 = (() => {
                  {
                    const $t29139 = (() => {
                      {
                        const $t29138 = (() => {
                          {
                            const $t29137 = (sx + 20.);
                            return ($t29137 + fi);
                          }
                        })();
                        {
                          const x_i10274 = (() => {
                            {
                              const $t29119_i10273 = (() => {
                                {
                                  const $t29118_i10272 = (() => {
                                    {
                                      const $t29116_i10270 = (() => {
                                        {
                                          const $t29114_i10268 = ($t29138 * 12.9898);
                                          {
                                            const $t29115_i10269 = (sy * 78.233);
                                            return ($t29114_i10268 + $t29115_i10269);
                                          }
                                        }
                                      })();
                                      {
                                        const $t29117_i10271 = (seed * 37.719);
                                        return ($t29116_i10270 + $t29117_i10271);
                                      }
                                    }
                                  })();
                                  return Math.sin($t29118_i10272);
                                }
                              })();
                              return ($t29119_i10273 * 43758.5453);
                            }
                          })();
                          {
                            const $t29120_i10276 = (() => {
                              {
                                const $t1582_i4013_i10275 = Math.floor(x_i10274);
                                return $t1582_i4013_i10275;
                              }
                            })();
                            return (x_i10274 - $t29120_i10276);
                          }
                        }
                      }
                    })();
                    return (0.35 * $t29139);
                  }
                })();
                return (0.5 + $t29140);
              }
            })();
            {
              const strength = (() => {
                {
                  const $t29144 = (() => {
                    {
                      const $t29143 = (() => {
                        {
                          const $t29142 = (() => {
                            {
                              const $t29141 = (sy + 20.);
                              return ($t29141 + fi);
                            }
                          })();
                          {
                            const x_i10262 = (() => {
                              {
                                const $t29119_i10261 = (() => {
                                  {
                                    const $t29118_i10260 = (() => {
                                      {
                                        const $t29116_i10258 = (() => {
                                          {
                                            const $t29114_i10256 = (sx * 12.9898);
                                            {
                                              const $t29115_i10257 = ($t29142 * 78.233);
                                              return ($t29114_i10256 + $t29115_i10257);
                                            }
                                          }
                                        })();
                                        {
                                          const $t29117_i10259 = (seed * 37.719);
                                          return ($t29116_i10258 + $t29117_i10259);
                                        }
                                      }
                                    })();
                                    return Math.sin($t29118_i10260);
                                  }
                                })();
                                return ($t29119_i10261 * 43758.5453);
                              }
                            })();
                            {
                              const $t29120_i10264 = (() => {
                                {
                                  const $t1582_i4013_i10263 = Math.floor(x_i10262);
                                  return $t1582_i4013_i10263;
                                }
                              })();
                              return (x_i10262 - $t29120_i10264);
                            }
                          }
                        }
                      })();
                      return (0.65 * $t29143);
                    }
                  })();
                  return (0.35 + $t29144);
                }
              })();
              {
                const $t29145 = (sx + jx);
                {
                  const $t29146 = (sy + jy);
                  {
                    const $t29147 = (base_r * rf);
                    return ({ x: $t29145, y: $t29146, radius: $t29147, strength: strength });
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
const Perihelion$Nebula$make_lobe$clo = { _0: ($_, sx, sy, seed, base_r, i) => Perihelion$Nebula$make_lobe(sx, sy, seed, base_r, i) };

function Perihelion$Nebula$make_lobes(sx, sy, seed, base_r, i, n, acc) {
  {
    const $t29148 = (i >= n);
    if ($t29148 === true) {
      return acc;
    } else {
      return (() => {
        {
          const $t29149 = (i + 1);
          {
            const $t29150 = Perihelion$Nebula$make_lobe(sx, sy, seed, base_r, i);
            {
              const $t29151 = { $: "Cons", _0: $t29150, _1: acc };
              return Perihelion$Nebula$make_lobes(sx, sy, seed, base_r, $t29149, n, $t29151);
            }
          }
        }
      })();
    }
  }
}
const Perihelion$Nebula$make_lobes$clo = { _0: ($_, sx, sy, seed, base_r, i, n, acc) => Perihelion$Nebula$make_lobes(sx, sy, seed, base_r, i, n, acc) };

function Perihelion$Nebula$star_cloud(sx, sy, seed) {
  {
    const $t29154 = (() => {
      {
        const $t29152 = (() => {
          {
            const x_i10322 = (() => {
              {
                const $t29119_i10321 = (() => {
                  {
                    const $t29118_i10320 = (() => {
                      {
                        const $t29116_i10318 = (() => {
                          {
                            const $t29114_i10316 = (sx * 12.9898);
                            {
                              const $t29115_i10317 = (sy * 78.233);
                              return ($t29114_i10316 + $t29115_i10317);
                            }
                          }
                        })();
                        {
                          const $t29117_i10319 = (seed * 37.719);
                          return ($t29116_i10318 + $t29117_i10319);
                        }
                      }
                    })();
                    return Math.sin($t29118_i10320);
                  }
                })();
                return ($t29119_i10321 * 43758.5453);
              }
            })();
            {
              const $t29120_i10324 = (() => {
                {
                  const $t1582_i4013_i10323 = Math.floor(x_i10322);
                  return $t1582_i4013_i10323;
                }
              })();
              return (x_i10322 - $t29120_i10324);
            }
          }
        })();
        return ($t29152 > 0.3);
      }
    })();
    if ($t29154 === true) {
      return { $: "Nil" };
    } else {
      return (() => {
        {
          const rt = (() => {
            {
              const $t29155 = (sx + 2.);
              {
                const x_i10310 = (() => {
                  {
                    const $t29119_i10309 = (() => {
                      {
                        const $t29118_i10308 = (() => {
                          {
                            const $t29116_i10306 = (() => {
                              {
                                const $t29114_i10304 = ($t29155 * 12.9898);
                                {
                                  const $t29115_i10305 = (sy * 78.233);
                                  return ($t29114_i10304 + $t29115_i10305);
                                }
                              }
                            })();
                            {
                              const $t29117_i10307 = (seed * 37.719);
                              return ($t29116_i10306 + $t29117_i10307);
                            }
                          }
                        })();
                        return Math.sin($t29118_i10308);
                      }
                    })();
                    return ($t29119_i10309 * 43758.5453);
                  }
                })();
                {
                  const $t29120_i10312 = (() => {
                    {
                      const $t1582_i4013_i10311 = Math.floor(x_i10310);
                      return $t1582_i4013_i10311;
                    }
                  })();
                  return (x_i10310 - $t29120_i10312);
                }
              }
            }
          })();
          {
            const base_r = (() => {
              {
                const $t29158 = (rt * rt);
                {
                  const $t29122_i4019 = (() => {
                    {
                      const $t29121_i4018 = (700. - 240.);
                      return ($t29158 * $t29121_i4018);
                    }
                  })();
                  return (240. + $t29122_i4019);
                }
              }
            })();
            {
              const $t29159 = (() => {
                {
                  const $t29125_i10811 = (() => {
                    {
                      const $t29124_i10810 = (() => {
                        {
                          const $t29123_i10800 = (sx + 3.);
                          {
                            const x_i10250_i10807 = (() => {
                              {
                                const $t29119_i10249_i10806 = (() => {
                                  {
                                    const $t29118_i10248_i10805 = (() => {
                                      {
                                        const $t29116_i10246_i10803 = (() => {
                                          {
                                            const $t29114_i10244_i10801 = ($t29123_i10800 * 12.9898);
                                            {
                                              const $t29115_i10245_i10802 = (sy * 78.233);
                                              return ($t29114_i10244_i10801 + $t29115_i10245_i10802);
                                            }
                                          }
                                        })();
                                        {
                                          const $t29117_i10247_i10804 = (seed * 37.719);
                                          return ($t29116_i10246_i10803 + $t29117_i10247_i10804);
                                        }
                                      }
                                    })();
                                    return Math.sin($t29118_i10248_i10805);
                                  }
                                })();
                                return ($t29119_i10249_i10806 * 43758.5453);
                              }
                            })();
                            {
                              const $t29120_i10252_i10809 = (() => {
                                {
                                  const $t1582_i4013_i10251_i10808 = Math.floor(x_i10250_i10807);
                                  return $t1582_i4013_i10251_i10808;
                                }
                              })();
                              return (x_i10250_i10807 - $t29120_i10252_i10809);
                            }
                          }
                        }
                      })();
                      return ($t29124_i10810 < 0.5);
                    }
                  })();
                  if ($t29125_i10811 === true) {
                    return 2;
                  } else {
                    return 3;
                  }
                }
              })();
              {
                const $t29160 = { $: "Nil" };
                return Perihelion$Nebula$make_lobes(sx, sy, seed, base_r, 0, $t29159, $t29160);
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
      const $f29199 = stars._0;
      const $f29200 = stars._1;
      {
        const rest = (() => {
          return $f29200;
        })();
        {
          const s = (() => {
            return $f29199;
          })();
          {
            const $t29195 = s.x;
            {
              const $t29196 = s.y;
              {
                const $t29197 = Perihelion$Nebula$star_cloud($t29195, $t29196, seed);
                {
                  const $t29198 = (() => {
                    {
                      const go_i10327 = { $: "$Clo_go$4825", _0: go$apply$4825 };
                      {
                        const $t261_i10330 = (() => {
                          {
                            const go_i4552_i10328 = { $: "$Clo_go$5271", _0: go$apply$5271 };
                            {
                              const $t253_i4553_i10329 = { $: "Nil" };
                              return go$apply$5271(go_i4552_i10328, $t29197, $t253_i4553_i10329);
                            }
                          }
                        })();
                        return go$apply$4825(go_i10327, $t261_i10330, acc);
                      }
                    }
                  })();
                  return Perihelion$Nebula$collect_star_clouds(rest, seed, $t29198);
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
const Perihelion$Nebula$collect_star_clouds$clo = { _0: ($_, stars, seed, acc) => Perihelion$Nebula$collect_star_clouds(stars, seed, acc) };

function Perihelion$Nebula$filter_visible(stars, cam_y, view_h, margin, acc) {
  switch (stars.$) {
    case "Nil": {
      return acc;
      break;
    }
    case "Cons": {
      const $f29213 = stars._0;
      const $f29214 = stars._1;
      {
        const rest = $f29214;
        {
          const s = $f29213;
          {
            const $t29212 = (() => {
              {
                const $t29207_i4037 = (() => {
                  {
                    const $t29205_i4035 = s.y;
                    {
                      const $t29206_i4036 = (cam_y - margin);
                      return ($t29205_i4035 >= $t29206_i4036);
                    }
                  }
                })();
                {
                  const $t29211_i4041 = (() => {
                    {
                      const $t29208_i4038 = s.y;
                      {
                        const $t29210_i4040 = (() => {
                          {
                            const $t29209_i4039 = (cam_y + view_h);
                            return ($t29209_i4039 + margin);
                          }
                        })();
                        return ($t29208_i4038 <= $t29210_i4040);
                      }
                    }
                  })();
                  return ($t29207_i4037 && $t29211_i4041);
                }
              }
            })();
            {
              let acc2;
              if ($t29212 === true) {
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

function Perihelion$Nebula$band_index_at(y) {
  {
    const $t29221 = (() => {
      {
        const $t29220 = (y / 500.);
        {
          const $t1582_i4043 = Math.floor($t29220);
          return $t1582_i4043;
        }
      }
    })();
    return Math.trunc($t29221);
  }
}
const Perihelion$Nebula$band_index_at$clo = { _0: ($_, y) => Perihelion$Nebula$band_index_at(y) };

function Perihelion$Nebula$free_cloud(band, view_w, seed) {
  {
    const bf = band;
    {
      const s2 = (seed + 1000.);
      {
        const $t29225 = (() => {
          {
            const $t29223 = (() => {
              {
                const $t29222 = (0. - 500.);
                {
                  const x_i10388 = (() => {
                    {
                      const $t29119_i10387 = (() => {
                        {
                          const $t29118_i10386 = (() => {
                            {
                              const $t29116_i10384 = (() => {
                                {
                                  const $t29114_i10382 = (bf * 12.9898);
                                  {
                                    const $t29115_i10383 = ($t29222 * 78.233);
                                    return ($t29114_i10382 + $t29115_i10383);
                                  }
                                }
                              })();
                              {
                                const $t29117_i10385 = (s2 * 37.719);
                                return ($t29116_i10384 + $t29117_i10385);
                              }
                            }
                          })();
                          return Math.sin($t29118_i10386);
                        }
                      })();
                      return ($t29119_i10387 * 43758.5453);
                    }
                  })();
                  {
                    const $t29120_i10390 = (() => {
                      {
                        const $t1582_i4013_i10389 = Math.floor(x_i10388);
                        return $t1582_i4013_i10389;
                      }
                    })();
                    return (x_i10388 - $t29120_i10390);
                  }
                }
              }
            })();
            return ($t29223 > 0.12);
          }
        })();
        if ($t29225 === true) {
          return { $: "None" };
        } else {
          return (() => {
            {
              const band_y0 = (bf * 500.);
              {
                const jx = (() => {
                  {
                    const $t29227 = (bf + 1.);
                    {
                      const $t29228 = (0. - 500.);
                      {
                        const x_i10376 = (() => {
                          {
                            const $t29119_i10375 = (() => {
                              {
                                const $t29118_i10374 = (() => {
                                  {
                                    const $t29116_i10372 = (() => {
                                      {
                                        const $t29114_i10370 = ($t29227 * 12.9898);
                                        {
                                          const $t29115_i10371 = ($t29228 * 78.233);
                                          return ($t29114_i10370 + $t29115_i10371);
                                        }
                                      }
                                    })();
                                    {
                                      const $t29117_i10373 = (s2 * 37.719);
                                      return ($t29116_i10372 + $t29117_i10373);
                                    }
                                  }
                                })();
                                return Math.sin($t29118_i10374);
                              }
                            })();
                            return ($t29119_i10375 * 43758.5453);
                          }
                        })();
                        {
                          const $t29120_i10378 = (() => {
                            {
                              const $t1582_i4013_i10377 = Math.floor(x_i10376);
                              return $t1582_i4013_i10377;
                            }
                          })();
                          return (x_i10376 - $t29120_i10378);
                        }
                      }
                    }
                  }
                })();
                {
                  const jy = (() => {
                    {
                      const $t29229 = (0. - 501.);
                      {
                        const x_i10364 = (() => {
                          {
                            const $t29119_i10363 = (() => {
                              {
                                const $t29118_i10362 = (() => {
                                  {
                                    const $t29116_i10360 = (() => {
                                      {
                                        const $t29114_i10358 = (bf * 12.9898);
                                        {
                                          const $t29115_i10359 = ($t29229 * 78.233);
                                          return ($t29114_i10358 + $t29115_i10359);
                                        }
                                      }
                                    })();
                                    {
                                      const $t29117_i10361 = (s2 * 37.719);
                                      return ($t29116_i10360 + $t29117_i10361);
                                    }
                                  }
                                })();
                                return Math.sin($t29118_i10362);
                              }
                            })();
                            return ($t29119_i10363 * 43758.5453);
                          }
                        })();
                        {
                          const $t29120_i10366 = (() => {
                            {
                              const $t1582_i4013_i10365 = Math.floor(x_i10364);
                              return $t1582_i4013_i10365;
                            }
                          })();
                          return (x_i10364 - $t29120_i10366);
                        }
                      }
                    }
                  })();
                  {
                    const x = (() => {
                      {
                        const $t29231 = (0. - 100.);
                        {
                          const $t29235 = (() => {
                            {
                              const $t29234 = (() => {
                                {
                                  const $t29233 = (2. * 100.);
                                  return (view_w + $t29233);
                                }
                              })();
                              return (jx * $t29234);
                            }
                          })();
                          return ($t29231 + $t29235);
                        }
                      }
                    })();
                    {
                      const y = (() => {
                        {
                          const $t29237 = (jy * 500.);
                          return (band_y0 + $t29237);
                        }
                      })();
                      {
                        const rt = (() => {
                          {
                            const $t29238 = (bf + 2.);
                            {
                              const $t29239 = (0. - 500.);
                              {
                                const x_i10352 = (() => {
                                  {
                                    const $t29119_i10351 = (() => {
                                      {
                                        const $t29118_i10350 = (() => {
                                          {
                                            const $t29116_i10348 = (() => {
                                              {
                                                const $t29114_i10346 = ($t29238 * 12.9898);
                                                {
                                                  const $t29115_i10347 = ($t29239 * 78.233);
                                                  return ($t29114_i10346 + $t29115_i10347);
                                                }
                                              }
                                            })();
                                            {
                                              const $t29117_i10349 = (s2 * 37.719);
                                              return ($t29116_i10348 + $t29117_i10349);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29118_i10350);
                                      }
                                    })();
                                    return ($t29119_i10351 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29120_i10354 = (() => {
                                    {
                                      const $t1582_i4013_i10353 = Math.floor(x_i10352);
                                      return $t1582_i4013_i10353;
                                    }
                                  })();
                                  return (x_i10352 - $t29120_i10354);
                                }
                              }
                            }
                          }
                        })();
                        {
                          const r = (() => {
                            {
                              const $t29242 = (rt * rt);
                              {
                                const $t29122_i4048 = (() => {
                                  {
                                    const $t29121_i4047 = (700. - 240.);
                                    return ($t29242 * $t29121_i4047);
                                  }
                                })();
                                return (240. + $t29122_i4048);
                              }
                            }
                          })();
                          {
                            const strength = (() => {
                              {
                                const $t29245 = (() => {
                                  {
                                    const $t29244 = (() => {
                                      {
                                        const $t29243 = (0. - 502.);
                                        {
                                          const x_i10340 = (() => {
                                            {
                                              const $t29119_i10339 = (() => {
                                                {
                                                  const $t29118_i10338 = (() => {
                                                    {
                                                      const $t29116_i10336 = (() => {
                                                        {
                                                          const $t29114_i10334 = (bf * 12.9898);
                                                          {
                                                            const $t29115_i10335 = ($t29243 * 78.233);
                                                            return ($t29114_i10334 + $t29115_i10335);
                                                          }
                                                        }
                                                      })();
                                                      {
                                                        const $t29117_i10337 = (s2 * 37.719);
                                                        return ($t29116_i10336 + $t29117_i10337);
                                                      }
                                                    }
                                                  })();
                                                  return Math.sin($t29118_i10338);
                                                }
                                              })();
                                              return ($t29119_i10339 * 43758.5453);
                                            }
                                          })();
                                          {
                                            const $t29120_i10342 = (() => {
                                              {
                                                const $t1582_i4013_i10341 = Math.floor(x_i10340);
                                                return $t1582_i4013_i10341;
                                              }
                                            })();
                                            return (x_i10340 - $t29120_i10342);
                                          }
                                        }
                                      }
                                    })();
                                    return (0.65 * $t29244);
                                  }
                                })();
                                return (0.35 + $t29245);
                              }
                            })();
                            {
                              const $t29246 = ({ x: x, y: y, radius: r, strength: strength });
                              return { $: "Some", _0: $t29246 };
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
}
const Perihelion$Nebula$free_cloud$clo = { _0: ($_, band, view_w, seed) => Perihelion$Nebula$free_cloud(band, view_w, seed) };

function Perihelion$Nebula$collect_free_clouds(b, b_max, view_w, seed, acc) {
  {
    const $t29247 = (b > b_max);
    if ($t29247 === true) {
      return acc;
    } else {
      return (() => {
        {
          const $t29248 = Perihelion$Nebula$free_cloud(b, view_w, seed);
          {
            let acc2;
            switch ($t29248.$) {
              case "None": {
                acc2 = acc;
                break;
              }
              case "Some": {
                const $f29249 = $t29248._0;
                acc2 = (() => {
                  {
                    const c = $f29249;
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
            {
              const $t29250 = (b + 1);
              return Perihelion$Nebula$collect_free_clouds($t29250, b_max, view_w, seed, acc2);
            }
          }
        }
      })();
    }
  }
}
const Perihelion$Nebula$collect_free_clouds$clo = { _0: ($_, b, b_max, view_w, seed, acc) => Perihelion$Nebula$collect_free_clouds(b, b_max, view_w, seed, acc) };

function Perihelion$Nebula$visible_clouds(stars, cam_y, view_h, view_w, seed) {
  {
    const margin = (700. + 90.);
    {
      const $t29253 = { $: "Nil" };
      {
        const $t29254 = Perihelion$Nebula$filter_visible(stars, cam_y, view_h, margin, $t29253);
        {
          const $t29255 = { $: "Nil" };
          {
            const star_clouds = (() => {
              {
                const $rc_843 = Perihelion$Nebula$collect_star_clouds($t29254, seed, $t29255);
                return $rc_843;
              }
            })();
            {
              const band_margin = (700. + 500.);
              {
                const b0 = (() => {
                  {
                    const $t29258 = (cam_y - band_margin);
                    return Perihelion$Nebula$band_index_at($t29258);
                  }
                })();
                {
                  const b1 = (() => {
                    {
                      const $t29260 = (() => {
                        {
                          const $t29259 = (cam_y + view_h);
                          return ($t29259 + band_margin);
                        }
                      })();
                      return Perihelion$Nebula$band_index_at($t29260);
                    }
                  })();
                  {
                    const $t29261 = { $: "Nil" };
                    {
                      const free_clouds = Perihelion$Nebula$collect_free_clouds(b0, b1, view_w, seed, $t29261);
                      {
                        const go_i10393 = { $: "$Clo_go$4825", _0: go$apply$4825 };
                        {
                          const $t261_i10396 = (() => {
                            {
                              const go_i4552_i10394 = { $: "$Clo_go$5271", _0: go$apply$5271 };
                              {
                                const $t253_i4553_i10395 = { $: "Nil" };
                                return go$apply$5271(go_i4552_i10394, star_clouds, $t253_i4553_i10395);
                              }
                            }
                          })();
                          return go$apply$4825(go_i10393, $t261_i10396, free_clouds);
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
const Perihelion$Nebula$visible_clouds$clo = { _0: ($_, stars, cam_y, view_h, view_w, seed) => Perihelion$Nebula$visible_clouds(stars, cam_y, view_h, view_w, seed) };

function Perihelion$Upgrades$is_milestone(stars_chained) {
  {
    const $t29262 = (stars_chained > 0);
    {
      const $t29265 = (() => {
        {
          const $t29264 = march_int_mod(stars_chained, 10);
          return ($t29264 === 0);
        }
      })();
      return ($t29262 && $t29265);
    }
  }
}
const Perihelion$Upgrades$is_milestone$clo = { _0: ($_, stars_chained) => Perihelion$Upgrades$is_milestone(stars_chained) };

function Perihelion$Upgrades$milestone_check(rng, stars_chained) {
  {
    const $t29267 = (stars_chained === 5);
    if ($t29267 === true) {
      return (() => {
        {
          const $p29270 = (() => {
            {
              const $p29052_i10679_i11031 = (() => {
                {
                  const $p15579_i10236_i10674_i11026 = (() => {
                    {
                      const $p15576_i1532_i10226_i10665_i11017 = Random$next_raw(rng);
                      {
                        const hi_i1533_i10227_i10666_i11018 = $p15576_i1532_i10226_i10665_i11017._0;
                        {
                          const rng2_i1534_i10228_i10667_i11019 = $p15576_i1532_i10226_i10665_i11017._1;
                          {
                            const $p15575_i1535_i10229_i10668_i11020 = Random$next_raw(rng2_i1534_i10228_i10667_i11019);
                            {
                              const lo_i1536_i10230_i10669_i11021 = $p15575_i1535_i10229_i10668_i11020._0;
                              {
                                const rng3_i1537_i10231_i10670_i11022 = $p15575_i1535_i10229_i10668_i11020._1;
                                {
                                  const $t15574_i1541_i10235_i10673_i11025 = (() => {
                                    {
                                      const $t15573_i1540_i10234_i10672_i11024 = (() => {
                                        {
                                          const $t15571_i1538_i10232_i10671_i11023 = march_int_and(hi_i1533_i10227_i10666_i11018, 1048575);
                                          return ($t15571_i1538_i10232_i10671_i11023 * 4294967296);
                                        }
                                      })();
                                      return ($t15573_i1540_i10234_i10672_i11024 + lo_i1536_i10230_i10669_i11021);
                                    }
                                  })();
                                  return { _0: $t15574_i1541_i10235_i10673_i11025, _1: rng3_i1537_i10231_i10670_i11022 };
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  })();
                  {
                    const bits_i10237_i10675_i11027 = $p15579_i10236_i10674_i11026._0;
                    {
                      const rng2_i10238_i10676_i11028 = $p15579_i10236_i10674_i11026._1;
                      {
                        const $t15578_i10240_i10678_i11030 = (() => {
                          {
                            const $t15577_i10239_i10677_i11029 = bits_i10237_i10675_i11027;
                            return ($t15577_i10239_i10677_i11029 / 4.50359962737e+15);
                          }
                        })();
                        return { _0: $t15578_i10240_i10678_i11030, _1: rng2_i10238_i10676_i11028 };
                      }
                    }
                  }
                }
              })();
              {
                const t_i10680_i11032 = $p29052_i10679_i11031._0;
                {
                  const rng2_i10681_i11033 = $p29052_i10679_i11031._1;
                  {
                    const out_i10682_i11034 = { _0: rng2_i10681_i11033, _1: t_i10680_i11032 };
                    return out_i10682_i11034;
                  }
                }
              }
            }
          })();
          {
            const rng2 = $p29270._0;
            {
              const t = $p29270._1;
              {
                const $t29269 = (t < 0.25);
                return { _0: rng2, _1: $t29269 };
              }
            }
          }
        }
      })();
    } else {
      return (() => {
        {
          const $t29271 = Perihelion$Upgrades$is_milestone(stars_chained);
          return { _0: rng, _1: $t29271 };
        }
      })();
    }
  }
}
const Perihelion$Upgrades$milestone_check$clo = { _0: ($_, rng, stars_chained) => Perihelion$Upgrades$milestone_check(rng, stars_chained) };

function Perihelion$Upgrades$milestone_pool(owned) {
  {
    const $t29273 = (() => {
      {
        const $t29272 = { $: "Homing" };
        return { $: "OffenseWeapon", _0: $t29272 };
      }
    })();
    {
      const $t29275 = (() => {
        {
          const $t29274 = { $: "Spread" };
          return { $: "OffenseWeapon", _0: $t29274 };
        }
      })();
      {
        const $t29276 = { $: "Nil" };
        {
          const $t29277 = { $: "Cons", _0: $t29275, _1: $t29276 };
          {
            const all_weapons = { $: "Cons", _0: $t29273, _1: $t29277 };
            {
              const $t29281 = { $: "$Clo_$lam29278$3782", _0: $lam29278$apply$3782, _1: owned };
              {
                const unowned_weapons = (() => {
                  {
                    const pred_i4051 = $t29281;
                    {
                      const go_i4052 = { $: "$Clo_go$4829", _0: go$apply$4829, _1: pred_i4051 };
                      {
                        const $t302_i4053 = { $: "Nil" };
                        return go$apply$4829(go_i4052, all_weapons, $t302_i4053);
                      }
                    }
                  }
                })();
                {
                  const $t29282 = { $: "OffenseFireRate" };
                  {
                    const $t29283 = { $: "DefenseBulletWard" };
                    {
                      const $t29284 = { $: "DefenseDeflector" };
                      {
                        const $t29285 = { $: "DefenseShield" };
                        {
                          const $t29287 = (() => {
                            {
                              const $t29286 = { $: "StarThrust" };
                              return { $: "SpecialItem", _0: $t29286 };
                            }
                          })();
                          {
                            const $t29289 = (() => {
                              {
                                const $t29288 = { $: "StarJump" };
                                return { $: "SpecialItem", _0: $t29288 };
                              }
                            })();
                            {
                              const $t29291 = (() => {
                                {
                                  const $t29290 = { $: "TrajectoryPreview" };
                                  return { $: "SpecialItem", _0: $t29290 };
                                }
                              })();
                              {
                                const $t29292 = { $: "Nil" };
                                {
                                  const $t29293 = { $: "Cons", _0: $t29291, _1: $t29292 };
                                  {
                                    const $t29294 = { $: "Cons", _0: $t29289, _1: $t29293 };
                                    {
                                      const $t29295 = { $: "Cons", _0: $t29287, _1: $t29294 };
                                      {
                                        const $t29296 = { $: "Cons", _0: $t29285, _1: $t29295 };
                                        {
                                          const $t29297 = { $: "Cons", _0: $t29284, _1: $t29296 };
                                          {
                                            const $t29298 = { $: "Cons", _0: $t29283, _1: $t29297 };
                                            {
                                              const $t29299 = { $: "Cons", _0: $t29282, _1: $t29298 };
                                              {
                                                const go_i10399 = { $: "$Clo_go$4827", _0: go$apply$4827 };
                                                {
                                                  const $t261_i10402 = (() => {
                                                    {
                                                      const go_i4555_i10400 = { $: "$Clo_go$5273", _0: go$apply$5273 };
                                                      {
                                                        const $t253_i4556_i10401 = { $: "Nil" };
                                                        return go$apply$5273(go_i4555_i10400, unowned_weapons, $t253_i4556_i10401);
                                                      }
                                                    }
                                                  })();
                                                  return go$apply$4827(go_i10399, $t261_i10402, $t29299);
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
    const $t29300 = (() => {
      {
        const go_i4056 = { $: "$Clo_go$4832", _0: go$apply$4832 };
        {
          const $t508_i4057 = { $: "Nil" };
          return go$apply$4832(go_i4056, xs, idx, $t508_i4057);
        }
      }
    })();
    {
      const $t29301 = (idx + 1);
      {
        const $t29302 = List$drop$List_UpgradeKind$Int(xs, $t29301);
        {
          const go_i10405 = { $: "$Clo_go$4827", _0: go$apply$4827 };
          {
            const $t261_i10408 = (() => {
              {
                const go_i4555_i10406 = { $: "$Clo_go$5273", _0: go$apply$5273 };
                {
                  const $t253_i4556_i10407 = { $: "Nil" };
                  return go$apply$5273(go_i4555_i10406, $t29300, $t253_i4556_i10407);
                }
              }
            })();
            return go$apply$4827(go_i10405, $t261_i10408, $t29302);
          }
        }
      }
    }
  }
}
const Perihelion$Upgrades$remove_upgrade_at$clo = { _0: ($_, xs, idx) => Perihelion$Upgrades$remove_upgrade_at(xs, idx) };

function Perihelion$Upgrades$pick_and_remove(rng, pool) {
  {
    const $p29306 = (() => {
      {
        const $p29052_i10679_i11050_i11396 = (() => {
          {
            const $p15579_i10236_i10674_i11045_i11391 = (() => {
              {
                const $p15576_i1532_i10226_i10665_i11036_i11382 = Random$next_raw(rng);
                {
                  const hi_i1533_i10227_i10666_i11037_i11383 = $p15576_i1532_i10226_i10665_i11036_i11382._0;
                  {
                    const rng2_i1534_i10228_i10667_i11038_i11384 = $p15576_i1532_i10226_i10665_i11036_i11382._1;
                    {
                      const $p15575_i1535_i10229_i10668_i11039_i11385 = Random$next_raw(rng2_i1534_i10228_i10667_i11038_i11384);
                      {
                        const lo_i1536_i10230_i10669_i11040_i11386 = $p15575_i1535_i10229_i10668_i11039_i11385._0;
                        {
                          const rng3_i1537_i10231_i10670_i11041_i11387 = $p15575_i1535_i10229_i10668_i11039_i11385._1;
                          {
                            const $t15574_i1541_i10235_i10673_i11044_i11390 = (() => {
                              {
                                const $t15573_i1540_i10234_i10672_i11043_i11389 = (() => {
                                  {
                                    const $t15571_i1538_i10232_i10671_i11042_i11388 = march_int_and(hi_i1533_i10227_i10666_i11037_i11383, 1048575);
                                    return ($t15571_i1538_i10232_i10671_i11042_i11388 * 4294967296);
                                  }
                                })();
                                return ($t15573_i1540_i10234_i10672_i11043_i11389 + lo_i1536_i10230_i10669_i11040_i11386);
                              }
                            })();
                            return { _0: $t15574_i1541_i10235_i10673_i11044_i11390, _1: rng3_i1537_i10231_i10670_i11041_i11387 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const bits_i10237_i10675_i11046_i11392 = $p15579_i10236_i10674_i11045_i11391._0;
              {
                const rng2_i10238_i10676_i11047_i11393 = $p15579_i10236_i10674_i11045_i11391._1;
                {
                  const $t15578_i10240_i10678_i11049_i11395 = (() => {
                    {
                      const $t15577_i10239_i10677_i11048_i11394 = bits_i10237_i10675_i11046_i11392;
                      return ($t15577_i10239_i10677_i11048_i11394 / 4.50359962737e+15);
                    }
                  })();
                  return { _0: $t15578_i10240_i10678_i11049_i11395, _1: rng2_i10238_i10676_i11047_i11393 };
                }
              }
            }
          }
        })();
        {
          const t_i10680_i11051_i11397 = $p29052_i10679_i11050_i11396._0;
          {
            const rng2_i10681_i11052_i11398 = $p29052_i10679_i11050_i11396._1;
            {
              const out_i10682_i11053_i11399 = { _0: rng2_i10681_i11052_i11398, _1: t_i10680_i11051_i11397 };
              return out_i10682_i11053_i11399;
            }
          }
        }
      }
    })();
    {
      const rng2 = $p29306._0;
      {
        const t = $p29306._1;
        {
          const n = (() => {
            {
              const go_i4059 = { $: "$Clo_go$4835", _0: go$apply$4835 };
              return go$apply$4835(go_i4059, pool, 0);
            }
          })();
          {
            const idx = (() => {
              {
                const $t29304 = (() => {
                  {
                    const $t29303 = n;
                    return (t * $t29303);
                  }
                })();
                return Math.trunc($t29304);
              }
            })();
            {
              const clamped = (() => {
                {
                  const $t29305 = (idx >= n);
                  if ($t29305 === true) {
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
    const $t29309 = (() => {
      {
        const $t29307 = (n === 0);
        {
          let $t29308;
          switch (pool.$) {
            case "Nil": {
              $t29308 = true;
              break;
            }
            default: {
              $t29308 = false;
              break;
            }
          }
          return ($t29307 || $t29308);
        }
      }
    })();
    if ($t29309 === true) {
      return { _0: rng, _1: acc };
    } else {
      return (() => {
        {
          const $p29312 = Perihelion$Upgrades$pick_and_remove(rng, pool);
          {
            const rng2 = $p29312._0;
            {
              const picked = $p29312._1;
              {
                const rest = $p29312._2;
                {
                  const $t29310 = (n - 1);
                  {
                    const $t29311 = (() => {
                      return { $: "Cons", _0: picked, _1: acc };
                    })();
                    return Perihelion$Upgrades$draw_n(rng2, rest, $t29310, $t29311);
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
        const $t29313 = Perihelion$Upgrades$milestone_pool(owned_weapons);
        {
          const $t29314 = { $: "Nil" };
          return Perihelion$Upgrades$draw_n(rng, $t29313, 3, $t29314);
        }
      }
      break;
    }
    case "Some": {
      const $f29323 = current_special._0;
      {
        const k = $f29323;
        {
          const $t29315 = Perihelion$Upgrades$milestone_pool(owned_weapons);
          {
            const $t29318 = (() => {
              return { $: "$Clo_$lam29316$3783", _0: $lam29316$apply$3783, _1: k };
            })();
            {
              const pool = (() => {
                {
                  const pred_i4063 = $t29318;
                  {
                    const go_i4064 = { $: "$Clo_go$4829", _0: go$apply$4829, _1: pred_i4063 };
                    {
                      const $t302_i4065 = { $: "Nil" };
                      return go$apply$4829(go_i4064, $t29315, $t302_i4065);
                    }
                  }
                }
              })();
              {
                const $p29322 = (() => {
                  {
                    const $t29319 = { $: "Nil" };
                    return Perihelion$Upgrades$draw_n(rng, pool, 2, $t29319);
                  }
                })();
                {
                  const rng2 = $p29322._0;
                  {
                    const two = $p29322._1;
                    {
                      const $t29320 = { $: "SpecialItem", _0: k };
                      {
                        const $t29321 = (() => {
                          return { $: "Cons", _0: $t29320, _1: two };
                        })();
                        return { _0: rng2, _1: $t29321 };
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
    const $p29325 = (() => {
      {
        const $t29324 = Perihelion$Upgrades$milestone_pool(owned_weapons);
        return Perihelion$Upgrades$pick_and_remove(rng, $t29324);
      }
    })();
    {
      const rng2 = $p29325._0;
      {
        const picked = $p29325._1;
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
      const $f29328 = weapons._0;
      const $f29329 = weapons._1;
      switch ($f29328.$) {
        case "Base": {
          {
            const $jp_clo29335 = (() => {
              return { $: "$Clo_$jp29334$3784", _0: $jp29334$apply$3784, _1: $f29328, _2: $f29329 };
            })();
            {
              const rest = $f29329;
              return Perihelion$Upgrades$owned_weapon_upgrades(rest);
            }
          }
          break;
        }
        default: {
          {
            const rest = $f29329;
            {
              const k = $f29328;
              {
                const $t29326 = { $: "OffenseWeapon", _0: k };
                {
                  const $t29327 = Perihelion$Upgrades$owned_weapon_upgrades(rest);
                  return { $: "Cons", _0: $t29326, _1: $t29327 };
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
      const $t29338 = (fire_rate_stacks > 0);
      {
        let fire_rate;
        if ($t29338 === true) {
          fire_rate = (() => {
            {
              const $t29339 = { $: "OffenseFireRate" };
              {
                const $t29340 = { $: "Nil" };
                return { $: "Cons", _0: $t29339, _1: $t29340 };
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
                const $t29341 = { $: "DefenseBulletWard" };
                {
                  const $t29342 = { $: "Nil" };
                  return { $: "Cons", _0: $t29341, _1: $t29342 };
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
                  const $t29343 = { $: "DefenseDeflector" };
                  {
                    const $t29344 = { $: "Nil" };
                    return { $: "Cons", _0: $t29343, _1: $t29344 };
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
                    const $t29345 = { $: "DefenseShield" };
                    {
                      const $t29346 = { $: "Nil" };
                      return { $: "Cons", _0: $t29345, _1: $t29346 };
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
                    const $f29349 = special._0;
                    spec = (() => {
                      {
                        const k = $f29349;
                        {
                          const $t29347 = { $: "SpecialItem", _0: k };
                          {
                            const $t29348 = { $: "Nil" };
                            return { $: "Cons", _0: $t29347, _1: $t29348 };
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
                  const $t29350 = (() => {
                    {
                      const go_i10435 = { $: "$Clo_go$4827", _0: go$apply$4827 };
                      {
                        const $t261_i10438 = (() => {
                          {
                            const go_i4555_i10436 = { $: "$Clo_go$5273", _0: go$apply$5273 };
                            {
                              const $t253_i4556_i10437 = { $: "Nil" };
                              return go$apply$5273(go_i4555_i10436, shield, $t253_i4556_i10437);
                            }
                          }
                        })();
                        return go$apply$4827(go_i10435, $t261_i10438, spec);
                      }
                    }
                  })();
                  {
                    const $t29351 = (() => {
                      {
                        const go_i10429 = { $: "$Clo_go$4827", _0: go$apply$4827 };
                        {
                          const $t261_i10432 = (() => {
                            {
                              const go_i4555_i10430 = { $: "$Clo_go$5273", _0: go$apply$5273 };
                              {
                                const $t253_i4556_i10431 = { $: "Nil" };
                                return go$apply$5273(go_i4555_i10430, deflect, $t253_i4556_i10431);
                              }
                            }
                          })();
                          return go$apply$4827(go_i10429, $t261_i10432, $t29350);
                        }
                      }
                    })();
                    {
                      const $t29352 = (() => {
                        {
                          const go_i10423 = { $: "$Clo_go$4827", _0: go$apply$4827 };
                          {
                            const $t261_i10426 = (() => {
                              {
                                const go_i4555_i10424 = { $: "$Clo_go$5273", _0: go$apply$5273 };
                                {
                                  const $t253_i4556_i10425 = { $: "Nil" };
                                  return go$apply$5273(go_i4555_i10424, ward, $t253_i4556_i10425);
                                }
                              }
                            })();
                            return go$apply$4827(go_i10423, $t261_i10426, $t29351);
                          }
                        }
                      })();
                      {
                        const $t29353 = (() => {
                          {
                            const go_i10417 = { $: "$Clo_go$4827", _0: go$apply$4827 };
                            {
                              const $t261_i10420 = (() => {
                                {
                                  const go_i4555_i10418 = { $: "$Clo_go$5273", _0: go$apply$5273 };
                                  {
                                    const $t253_i4556_i10419 = { $: "Nil" };
                                    return go$apply$5273(go_i4555_i10418, fire_rate, $t253_i4556_i10419);
                                  }
                                }
                              })();
                              return go$apply$4827(go_i10417, $t261_i10420, $t29352);
                            }
                          }
                        })();
                        {
                          const go_i10411 = { $: "$Clo_go$4827", _0: go$apply$4827 };
                          {
                            const $t261_i10414 = (() => {
                              {
                                const go_i4555_i10412 = { $: "$Clo_go$5273", _0: go$apply$5273 };
                                {
                                  const $t253_i4556_i10413 = { $: "Nil" };
                                  return go$apply$5273(go_i4555_i10412, weapons, $t253_i4556_i10413);
                                }
                              }
                            })();
                            return go$apply$4827(go_i10411, $t261_i10414, $t29353);
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
        const $t29354 = { $: "None" };
        return { _0: rng, _1: $t29354 };
      }
      break;
    }
    case "Cons": {
      const $f29357 = held._0;
      const $f29358 = held._1;
      {
        const $p29356 = Perihelion$Upgrades$pick_and_remove(rng, held);
        {
          const rng2 = $p29356._0;
          {
            const picked = $p29356._1;
            {
              const $t29355 = (() => {
                return { $: "Some", _0: picked };
              })();
              return { _0: rng2, _1: $t29355 };
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
    const $t29365 = (() => {
      {
        const $t29364 = (() => {
          {
            const $t29363 = {  };
            return march_unix_time();
          }
        })();
        return ($t29364 * 1000000.);
      }
    })();
    return Math.trunc($t29365);
  }
}
const boot_seed$clo = { _0: ($_) => boot_seed() };

function player_sprite_grid() {
  {
    const $t29366 = { $: "Nil" };
    {
      const $t29367 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29366 };
      {
        const $t29368 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29367 };
        {
          const $t29369 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29368 };
          {
            const $t29370 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29369 };
            {
              const $t29371 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29370 };
              {
                const $t29372 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29371 };
                {
                  const $t29373 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29372 };
                  {
                    const $t29374 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29373 };
                    {
                      const $t29375 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29374 };
                      {
                        const $t29376 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29375 };
                        {
                          const $t29377 = { $: "Cons", _0: "0000000000000000000020000200000000000020000200000000000000000000", _1: $t29376 };
                          {
                            const $t29378 = { $: "Cons", _0: "0000000000000000000012002100000000000032004100000000000000000000", _1: $t29377 };
                            {
                              const $t29379 = { $: "Cons", _0: "0000000000000000000031141100000000000031111100000000000000000000", _1: $t29378 };
                              {
                                const $t29380 = { $: "Cons", _0: "0000000000000000000013311400000000000013331400000000000000000000", _1: $t29379 };
                                {
                                  const $t29381 = { $: "Cons", _0: "0000000000000000000004314000000000000001312000000000000000000000", _1: $t29380 };
                                  {
                                    const $t29382 = { $: "Cons", _0: "0000000000000000000002442000000000000002442000000000000000000000", _1: $t29381 };
                                    {
                                      const $t29383 = { $: "Cons", _0: "0000000000000000000022222220000000000002242200000000000000000000", _1: $t29382 };
                                      {
                                        const $t29384 = { $: "Cons", _0: "0000000000000000000233422442000000000023333120000000000000000000", _1: $t29383 };
                                        {
                                          const $t29385 = { $: "Cons", _0: "0000000000000000000233024442000000000023333320000000000000000000", _1: $t29384 };
                                          {
                                            const $t29386 = { $: "Cons", _0: "0000000000000000002433024442000000000023333342000000000000000000", _1: $t29385 };
                                            {
                                              const $t29387 = { $: "Cons", _0: "0000000000000000024333024442000000000023333332000000000000000000", _1: $t29386 };
                                              {
                                                const $t29388 = { $: "Cons", _0: "0000000000000000041333024442000000000023333334200000000000000000", _1: $t29387 };
                                                {
                                                  const $t29389 = { $: "Cons", _0: "0000000000000000041333024442000000000023333331400000000000000000", _1: $t29388 };
                                                  {
                                                    const $t29390 = { $: "Cons", _0: "0000000000000000041333024442022222222223333331400000000000000000", _1: $t29389 };
                                                    {
                                                      const $t29391 = { $: "Cons", _0: "0000000000000000041333004442013333333223331331400000000000000000", _1: $t29390 };
                                                      {
                                                        const $t29392 = { $: "Cons", _0: "0000000000000000041333004442013333333223314331400000000000000000", _1: $t29391 };
                                                        {
                                                          const $t29393 = { $: "Cons", _0: "0000000000000000041333000042013333333223423331400000000000000000", _1: $t29392 };
                                                          {
                                                            const $t29394 = { $: "Cons", _0: "0000000000000000041333220020013333333141413331400000000000000000", _1: $t29393 };
                                                            {
                                                              const $t29395 = { $: "Cons", _0: "0000000000000000041333442000013333333334133331400000000000000000", _1: $t29394 };
                                                              {
                                                                const $t29396 = { $: "Cons", _0: "0000000000000000041333444400002331333223333331400000000000000000", _1: $t29395 };
                                                                {
                                                                  const $t29397 = { $: "Cons", _0: "0000000000000000041333444420024332413223333334200000000000000000", _1: $t29396 };
                                                                  {
                                                                    const $t29398 = { $: "Cons", _0: "0000000000000000041333444442013312043223333334200000000000000000", _1: $t29397 };
                                                                    {
                                                                      const $t29399 = { $: "Cons", _0: "0000000000000000041333444442013312022223333334200000000000000000", _1: $t29398 };
                                                                      {
                                                                        const $t29400 = { $: "Cons", _0: "0000000000000000043333444442013312020023333334200000000000000000", _1: $t29399 };
                                                                        {
                                                                          const $t29401 = { $: "Cons", _0: "0000000000000000041333444442024312043223333334200000000000000000", _1: $t29400 };
                                                                          {
                                                                            const $t29402 = { $: "Cons", _0: "0000000000000000004333344442043312043223333312000000000000000000", _1: $t29401 };
                                                                            {
                                                                              const $t29403 = { $: "Cons", _0: "0000000000000000002313311442013312043223333132000000000000000000", _1: $t29402 };
                                                                              {
                                                                                const $t29404 = { $: "Cons", _0: "0000000000000000002413331442013312043423331342000000000000000000", _1: $t29403 };
                                                                                {
                                                                                  const $t29405 = { $: "Cons", _0: "0000000000000000000011133142013312043423331320000000000000000000", _1: $t29404 };
                                                                                  {
                                                                                    const $t29406 = { $: "Cons", _0: "0000000000000000000004113342013312023423333200000000000000000000", _1: $t29405 };
                                                                                    {
                                                                                      const $t29407 = { $: "Cons", _0: "0000000000000000000004313342233312021223333000000000000000000000", _1: $t29406 };
                                                                                      {
                                                                                        const $t29408 = { $: "Cons", _0: "0000000000000000000000011104333312000003140000000000000000000000", _1: $t29407 };
                                                                                        {
                                                                                          const $t29409 = { $: "Cons", _0: "0000000000000000000000044341333312222221420000000000000000000000", _1: $t29408 };
                                                                                          {
                                                                                            const $t29410 = { $: "Cons", _0: "0000000000000000000000000333333312133312000000000000000000000000", _1: $t29409 };
                                                                                            {
                                                                                              const $t29411 = { $: "Cons", _0: "0000000000000000000000002333333312133142200000000000000000000000", _1: $t29410 };
                                                                                              {
                                                                                                const $t29412 = { $: "Cons", _0: "0000000000000000000000003333133312133221200000000000000000000000", _1: $t29411 };
                                                                                                {
                                                                                                  const $t29413 = { $: "Cons", _0: "0000000000000000000000003331444312133111200000000000000000000000", _1: $t29412 };
                                                                                                  {
                                                                                                    const $t29414 = { $: "Cons", _0: "0000000000000000000000003334224312133331200000000000000000000000", _1: $t29413 };
                                                                                                    {
                                                                                                      const $t29415 = { $: "Cons", _0: "0000000000000000000000003342200002133441200000000000000000000000", _1: $t29414 };
                                                                                                      {
                                                                                                        const $t29416 = { $: "Cons", _0: "0000000000000000000000003344400002133111200000000000000000000000", _1: $t29415 };
                                                                                                        {
                                                                                                          const $t29417 = { $: "Cons", _0: "0000000000000000000000003341300002133331200000000000000000000000", _1: $t29416 };
                                                                                                          {
                                                                                                            const $t29418 = { $: "Cons", _0: "0000000000000000000000003333344442133311200000000000000000000000", _1: $t29417 };
                                                                                                            {
                                                                                                              const $t29419 = { $: "Cons", _0: "0000000000000000000000003333314442133311200000000000000000000000", _1: $t29418 };
                                                                                                              {
                                                                                                                const $t29420 = { $: "Cons", _0: "0000000000000000000000003333314442133111200000000000000000000000", _1: $t29419 };
                                                                                                                {
                                                                                                                  const $t29421 = { $: "Cons", _0: "0000000000000000000000002333314442133421200000000000000000000000", _1: $t29420 };
                                                                                                                  {
                                                                                                                    const $t29422 = { $: "Cons", _0: "0000000000000000000000041333314442133421200000000000000000000000", _1: $t29421 };
                                                                                                                    {
                                                                                                                      const $t29423 = { $: "Cons", _0: "0000000000000000000000043333314442133420000000000000000000000000", _1: $t29422 };
                                                                                                                      {
                                                                                                                        const $t29424 = { $: "Cons", _0: "0000000000000000000000003333314442133422000000000000000000000000", _1: $t29423 };
                                                                                                                        {
                                                                                                                          const $t29425 = { $: "Cons", _0: "0000000000000000000000003333314442133423400000000000000000000000", _1: $t29424 };
                                                                                                                          {
                                                                                                                            const $t29426 = { $: "Cons", _0: "0000000000000000000000003333314442133423310000000000000000000000", _1: $t29425 };
                                                                                                                            {
                                                                                                                              const $t29427 = { $: "Cons", _0: "0000000000000000000000000333314442133423312000000000000000000000", _1: $t29426 };
                                                                                                                              {
                                                                                                                                const $t29428 = { $: "Cons", _0: "0000000000000000000000000333314420213423312000000000000000000000", _1: $t29427 };
                                                                                                                                {
                                                                                                                                  const $t29429 = { $: "Cons", _0: "0000000000000000000000000333314400043423312000000000000000000000", _1: $t29428 };
                                                                                                                                  {
                                                                                                                                    const $t29430 = { $: "Cons", _0: "0000000000000000000000000333314000043123312000000000000000000000", _1: $t29429 };
                                                                                                                                    {
                                                                                                                                      const $t29431 = { $: "Cons", _0: "0000000000000000000000000333311000043313312000000000000000000000", _1: $t29430 };
                                                                                                                                      {
                                                                                                                                        const $t29432 = { $: "Cons", _0: "0000000000000000000000000333311420043333312000000000000000000000", _1: $t29431 };
                                                                                                                                        {
                                                                                                                                          const $t29433 = { $: "Cons", _0: "0000000000000000000000000333311440043333312000000000000000000000", _1: $t29432 };
                                                                                                                                          {
                                                                                                                                            const $t29434 = { $: "Cons", _0: "0000000000000000000000000333331444043333314000000000000000000000", _1: $t29433 };
                                                                                                                                            {
                                                                                                                                              const $t29435 = { $: "Cons", _0: "0000000000000000000000000333334244043333314000000000000000000000", _1: $t29434 };
                                                                                                                                              {
                                                                                                                                                const $t29436 = { $: "Cons", _0: "0000000000000000000000000333332244243333314000000000000000000000", _1: $t29435 };
                                                                                                                                                {
                                                                                                                                                  const $t29437 = { $: "Cons", _0: "0000000000000000000000000333331444243333314000000000000000000000", _1: $t29436 };
                                                                                                                                                  {
                                                                                                                                                    const $t29438 = { $: "Cons", _0: "0000000000000000000000000333331444243333334000000000000000000000", _1: $t29437 };
                                                                                                                                                    {
                                                                                                                                                      const $t29439 = { $: "Cons", _0: "0000000000000000000000000433331444243333312000000000000000000000", _1: $t29438 };
                                                                                                                                                      {
                                                                                                                                                        const $t29440 = { $: "Cons", _0: "0000000000000000000000000333331444243333310000000000000000000000", _1: $t29439 };
                                                                                                                                                        {
                                                                                                                                                          const $t29441 = { $: "Cons", _0: "0000000000000000000000000133331444223334200000000000000000000000", _1: $t29440 };
                                                                                                                                                          {
                                                                                                                                                            const $t29442 = { $: "Cons", _0: "0000000000000000000000000013331444224310000000000000000000000000", _1: $t29441 };
                                                                                                                                                            {
                                                                                                                                                              const $t29443 = { $: "Cons", _0: "0000000000000000000000000021331444222200000000000000000000000000", _1: $t29442 };
                                                                                                                                                              {
                                                                                                                                                                const $t29444 = { $: "Cons", _0: "0000000000000000000000000002331444220000000000000000000000000000", _1: $t29443 };
                                                                                                                                                                {
                                                                                                                                                                  const $t29445 = { $: "Cons", _0: "0000000000000000000000000001334244022000000000000000000000000000", _1: $t29444 };
                                                                                                                                                                  {
                                                                                                                                                                    const $t29446 = { $: "Cons", _0: "0000000000000000000000000001142242044000000000000000000000000000", _1: $t29445 };
                                                                                                                                                                    {
                                                                                                                                                                      const $t29447 = { $: "Cons", _0: "0000000000000000000000000001100240011000000000000000000000000000", _1: $t29446 };
                                                                                                                                                                      {
                                                                                                                                                                        const $t29448 = { $: "Cons", _0: "0000000000000000000000000001100000011000000000000000000000000000", _1: $t29447 };
                                                                                                                                                                        {
                                                                                                                                                                          const $t29449 = { $: "Cons", _0: "0000000000000000000000000001100000011000000000000000000000000000", _1: $t29448 };
                                                                                                                                                                          {
                                                                                                                                                                            const $t29450 = { $: "Cons", _0: "0000000000000000000000000001100000011000000000000000000000000000", _1: $t29449 };
                                                                                                                                                                            {
                                                                                                                                                                              const $t29451 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29450 };
                                                                                                                                                                              {
                                                                                                                                                                                const $t29452 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29451 };
                                                                                                                                                                                {
                                                                                                                                                                                  const $t29453 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29452 };
                                                                                                                                                                                  {
                                                                                                                                                                                    const $t29454 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29453 };
                                                                                                                                                                                    {
                                                                                                                                                                                      const $t29455 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29454 };
                                                                                                                                                                                      {
                                                                                                                                                                                        const $t29456 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29455 };
                                                                                                                                                                                        {
                                                                                                                                                                                          const $t29457 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29456 };
                                                                                                                                                                                          {
                                                                                                                                                                                            const $t29458 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29457 };
                                                                                                                                                                                            {
                                                                                                                                                                                              const $t29459 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29458 };
                                                                                                                                                                                              {
                                                                                                                                                                                                const $t29460 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29459 };
                                                                                                                                                                                                {
                                                                                                                                                                                                  const $t29461 = { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29460 };
                                                                                                                                                                                                  return { $: "Cons", _0: "0000000000000000000000000000000000000000000000000000000000000000", _1: $t29461 };
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
    const $t29462 = (() => {
      return (tone === "0");
    })();
    if ($t29462 === true) {
      return {  };
    } else {
      return (() => {
        {
          const x0 = (() => {
            {
              const $t29466 = (() => {
                {
                  const $t29465 = (() => {
                    {
                      const $t29463 = start_col;
                      {
                        const $t29464 = grid_w;
                        return ($t29463 / $t29464);
                      }
                    }
                  })();
                  return ($t29465 * target_w);
                }
              })();
              {
                const $t1584_i4077 = march_float_round($t29466);
                return $t1584_i4077;
              }
            }
          })();
          {
            const x1 = (() => {
              {
                const $t29471 = (() => {
                  {
                    const $t29470 = (() => {
                      {
                        const $t29468 = (() => {
                          {
                            const $t29467 = (end_col + 1);
                            return $t29467;
                          }
                        })();
                        {
                          const $t29469 = grid_w;
                          return ($t29468 / $t29469);
                        }
                      }
                    })();
                    return ($t29470 * target_w);
                  }
                })();
                {
                  const $t1584_i4075 = march_float_round($t29471);
                  return $t1584_i4075;
                }
              }
            })();
            {
              const y0 = (() => {
                {
                  const $t29475 = (() => {
                    {
                      const $t29474 = (() => {
                        {
                          const $t29472 = row_idx;
                          {
                            const $t29473 = grid_h;
                            return ($t29472 / $t29473);
                          }
                        }
                      })();
                      return ($t29474 * target_h);
                    }
                  })();
                  {
                    const $t1584_i4073 = march_float_round($t29475);
                    return $t1584_i4073;
                  }
                }
              })();
              {
                const y1 = (() => {
                  {
                    const $t29480 = (() => {
                      {
                        const $t29479 = (() => {
                          {
                            const $t29477 = (() => {
                              {
                                const $t29476 = (row_idx + 1);
                                return $t29476;
                              }
                            })();
                            {
                              const $t29478 = grid_h;
                              return ($t29477 / $t29478);
                            }
                          }
                        })();
                        return ($t29479 * target_h);
                      }
                    })();
                    {
                      const $t1584_i4071 = march_float_round($t29480);
                      return $t1584_i4071;
                    }
                  }
                })();
                (() => {
                  {
                    const $t29481 = (() => {
                      {
                        let $rc_844;
                        if (tone === "1") {
                          $rc_844 = "#e2e2e2";
                        } else if (tone === "2") {
                          $rc_844 = "#333333";
                        } else if (tone === "3") {
                          $rc_844 = "#ffffff";
                        } else {
                          $rc_844 = "#9a9a9a";
                        }
                        return $rc_844;
                      }
                    })();
                    return Canvas$set_fill_style(ctx, $t29481);
                  }
                })();
                {
                  const $t29482 = (x1 - x0);
                  {
                    const $t29483 = (y1 - y0);
                    return Canvas$fill_rect(ctx, x0, y0, $t29482, $t29483);
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
    const $t29484 = (col >= grid_w);
    if ($t29484 === true) {
      return (() => {
        {
          const $t29485 = (grid_w - 1);
          return draw_sprite_run(ctx, row_idx, run_start, $t29485, run_tone, grid_w, grid_h, target_w, target_h);
        }
      })();
    } else {
      return (() => {
        {
          const tone = march_string_slice(row, col, 1);
          {
            const $t29486 = (() => {
              return (tone === run_tone);
            })();
            if ($t29486 === true) {
              return (() => {
                {
                  const $t29487 = (col + 1);
                  return draw_sprite_row_go(ctx, row, row_idx, $t29487, run_start, run_tone, grid_w, grid_h, target_w, target_h);
                }
              })();
            } else {
              return (() => {
                (() => {
                  {
                    const $t29488 = (col - 1);
                    return draw_sprite_run(ctx, row_idx, run_start, $t29488, run_tone, grid_w, grid_h, target_w, target_h);
                  }
                })();
                {
                  const $t29489 = (col + 1);
                  return draw_sprite_row_go(ctx, row, row_idx, $t29489, col, tone, grid_w, grid_h, target_w, target_h);
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
      const $f29492 = rows._0;
      const $f29493 = rows._1;
      {
        const rest = (() => {
          return $f29493;
        })();
        {
          const row = (() => {
            return $f29492;
          })();
          (() => {
            {
              const $rc_845 = (() => {
                {
                  const $t29490_i10446 = march_string_slice(row, 0, 1);
                  return draw_sprite_row_go(ctx, row, row_idx, 1, 0, $t29490_i10446, grid_w, grid_h, target_w, target_h);
                }
              })();
              return $rc_845;
            }
          })();
          {
            const $t29491 = (row_idx + 1);
            return draw_sprite_rows(ctx, rest, $t29491, grid_w, grid_h, target_w, target_h);
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
    const $t29498 = player_sprite_grid();
    {
      const $rc_846 = draw_sprite_rows(ctx, $t29498, 0, 64, 96, 32., 48.);
      return $rc_846;
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
              const $f29499 = sprite_ctx._0;
              {
                const sctx = $f29499;
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
          const $t29500 = { $: "Nil" };
          {
            const $t29501 = { $: "Nil" };
            {
              const $t29502 = { $: "None" };
              {
                const $t29503 = audio_create();
                {
                  const $t29504 = WebGL$get_context(gl_node);
                  {
                    const $t29505 = { $: "Some", _0: sprite_node };
                    {
                      const $t29506 = shield_hull_points();
                      return ({ trail: $t29500, t: 0., particles: $t29501, flash: $t29502, actx: $t29503, muted: false, gl: $t29504, player_sprite: $t29505, shield_hull: $t29506 });
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
const fx_init$clo = { _0: ($_) => fx_init() };

function spawn_burst_particles(x, y, t, i, acc) {
  {
    const $t29513 = (i >= 10);
    if ($t29513 === true) {
      return acc;
    } else {
      return (() => {
        {
          const seed = (() => {
            {
              const $t29515 = (() => {
                {
                  const $t29514 = i;
                  return ($t29514 * 7.);
                }
              })();
              return (t + $t29515);
            }
          })();
          {
            const a = (() => {
              {
                const $t29516 = (() => {
                  {
                    const x_i10471 = (() => {
                      {
                        const $t29510_i10470 = (() => {
                          {
                            const $t29509_i10469 = (() => {
                              {
                                const $t29507_i10467 = (seed * 12.9898);
                                {
                                  const $t29508_i10468 = (1. * 78.233);
                                  return ($t29507_i10467 + $t29508_i10468);
                                }
                              }
                            })();
                            return Math.sin($t29509_i10469);
                          }
                        })();
                        return ($t29510_i10470 * 43758.5453);
                      }
                    })();
                    {
                      const $t29511_i10473 = (() => {
                        {
                          const $t1582_i4087_i10472 = Math.floor(x_i10471);
                          return $t1582_i4087_i10472;
                        }
                      })();
                      return (x_i10471 - $t29511_i10473);
                    }
                  }
                })();
                return ($t29516 * 6.28318530718);
              }
            })();
            {
              const speed = (() => {
                {
                  const $t29519 = (() => {
                    {
                      const $t29518 = (() => {
                        {
                          const x_i10462 = (() => {
                            {
                              const $t29510_i10461 = (() => {
                                {
                                  const $t29509_i10460 = (() => {
                                    {
                                      const $t29507_i10458 = (seed * 12.9898);
                                      {
                                        const $t29508_i10459 = (2. * 78.233);
                                        return ($t29507_i10458 + $t29508_i10459);
                                      }
                                    }
                                  })();
                                  return Math.sin($t29509_i10460);
                                }
                              })();
                              return ($t29510_i10461 * 43758.5453);
                            }
                          })();
                          {
                            const $t29511_i10464 = (() => {
                              {
                                const $t1582_i4087_i10463 = Math.floor(x_i10462);
                                return $t1582_i4087_i10463;
                              }
                            })();
                            return (x_i10462 - $t29511_i10464);
                          }
                        }
                      })();
                      return ($t29518 * 90.);
                    }
                  })();
                  return (40. + $t29519);
                }
              })();
              {
                const life = (() => {
                  {
                    const $t29523 = (() => {
                      {
                        const $t29522 = (() => {
                          {
                            const $t29521 = (() => {
                              {
                                const x_i10453 = (() => {
                                  {
                                    const $t29510_i10452 = (() => {
                                      {
                                        const $t29509_i10451 = (() => {
                                          {
                                            const $t29507_i10449 = (seed * 12.9898);
                                            {
                                              const $t29508_i10450 = (3. * 78.233);
                                              return ($t29507_i10449 + $t29508_i10450);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29509_i10451);
                                      }
                                    })();
                                    return ($t29510_i10452 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29511_i10455 = (() => {
                                    {
                                      const $t1582_i4087_i10454 = Math.floor(x_i10453);
                                      return $t1582_i4087_i10454;
                                    }
                                  })();
                                  return (x_i10453 - $t29511_i10455);
                                }
                              }
                            })();
                            return (0.4 * $t29521);
                          }
                        })();
                        return (0.6 + $t29522);
                      }
                    })();
                    return (0.5 * $t29523);
                  }
                })();
                {
                  const p = (() => {
                    {
                      const $t29525 = (() => {
                        {
                          const $t29524 = Math.cos(a);
                          return ($t29524 * speed);
                        }
                      })();
                      {
                        const $t29527 = (() => {
                          {
                            const $t29526 = Math.sin(a);
                            return ($t29526 * speed);
                          }
                        })();
                        return ({ x: x, y: y, vx: $t29525, vy: $t29527, life: life, max_life: life });
                      }
                    }
                  })();
                  {
                    const $t29528 = (i + 1);
                    {
                      const $t29529 = { $: "Cons", _0: p, _1: acc };
                      return spawn_burst_particles(x, y, t, $t29528, $t29529);
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
      const $f29532 = bursts._0;
      const $f29533 = bursts._1;
      {
        const rest = (() => {
          return $f29533;
        })();
        {
          const pt = (() => {
            return $f29532;
          })();
          {
            const x = pt._0;
            {
              const y = pt._1;
              {
                const $t29530 = spawn_burst_particles(x, y, t, 0, acc);
                return spawn_bursts(rest, t, $t29530);
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
      const $f29559 = flash._0;
      {
        const f = $f29559;
        {
          const x = f._0;
          {
            const y = f._1;
            {
              const tr = f._2;
              {
                const tr2 = (tr - dt_s);
                {
                  const $t29556 = (tr2 > 0.);
                  if ($t29556 === true) {
                    return (() => {
                      {
                        const $t29557 = { _0: x, _1: y, _2: tr2 };
                        return { $: "Some", _0: $t29557 };
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
        const $t29560 = fx.t;
        return ($t29560 + dt_s);
      }
    })();
    {
      const $t29561 = (() => {
        {
          const $t30258_i4107 = game.phase;
          switch ($t30258_i4107.$) {
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
        if ($t29561 === true) {
          trail2 = (() => {
            {
              const $t29562 = fx.trail;
              {
                const $t29565 = (() => {
                  {
                    const $t29563 = game.ball_x;
                    {
                      const $t29564 = game.ball_y;
                      return { _0: $t29563, _1: $t29564 };
                    }
                  }
                })();
                {
                  const $t29554_i10487 = { $: "Cons", _0: $t29565, _1: $t29562 };
                  {
                    const go_i4102_i10488 = { $: "$Clo_go$4841", _0: go$apply$4841 };
                    {
                      const $t508_i4103_i10489 = { $: "Nil" };
                      return go$apply$4841(go_i4102_i10488, $t29554_i10487, 22, $t508_i4103_i10489);
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
          const $t29566 = game.fx_bursts;
          {
            const $t29567 = fx.particles;
            {
              const $t29568 = (() => {
                return spawn_bursts($t29566, t2, $t29567);
              })();
              {
                const particles2 = (() => {
                  {
                    const $t29549_i10476 = { $: "$Clo_$lam29548$3790", _0: $lam29548$apply$3790, _1: dt_s };
                    {
                      const $t29550_i10480 = (() => {
                        {
                          const f_i4097_i10477 = $t29549_i10476;
                          {
                            const go_i4098_i10478 = { $: "$Clo_go$4839", _0: go$apply$4839, _1: f_i4097_i10477 };
                            {
                              const $t270_i4099_i10479 = { $: "Nil" };
                              return go$apply$4839(go_i4098_i10478, $t29568, $t270_i4099_i10479);
                            }
                          }
                        }
                      })();
                      {
                        const $t29553_i10481 = { $: "$Clo_$lam29551$3791", _0: $lam29551$apply$3791 };
                        {
                          const pred_i4093_i10482 = $t29553_i10481;
                          {
                            const go_i4094_i10483 = { $: "$Clo_go$4837", _0: go$apply$4837, _1: pred_i4093_i10482 };
                            {
                              const $t302_i4095_i10484 = { $: "Nil" };
                              return go$apply$4837(go_i4094_i10483, $t29550_i10480, $t302_i4095_i10484);
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
                      const $t29569 = fx.flash;
                      return step_flash($t29569, dt_s);
                    }
                  })();
                  {
                    const flash2 = (() => {
                      {
                        const $t29570 = game.capture_flash;
                        switch ($t29570.$) {
                          case "None": {
                            return flash1;
                            break;
                          }
                          case "Some": {
                            const $f29574 = $t29570._0;
                            {
                              const pt = (() => {
                                return $f29574;
                              })();
                              {
                                const x = pt._0;
                                {
                                  const y = pt._1;
                                  {
                                    const $t29572 = { _0: x, _1: y, _2: 0.45 };
                                    return { $: "Some", _0: $t29572 };
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
      const $f29584 = trail._0;
      const $f29585 = trail._1;
      {
        const rest = (() => {
          return $f29585;
        })();
        {
          const pt = (() => {
            return $f29584;
          })();
          {
            const x = pt._0;
            {
              const y = pt._1;
              {
                const f = (() => {
                  {
                    const $t29577 = (() => {
                      {
                        const $t29575 = i;
                        {
                          const $t29576 = n;
                          return ($t29575 / $t29576);
                        }
                      }
                    })();
                    return (1. - $t29577);
                  }
                })();
                (() => {
                  {
                    const $t29578 = (f * 0.38);
                    return Canvas$set_global_alpha(ctx, $t29578);
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
                    const $t29580 = (() => {
                      {
                        const $t29579 = (2.6 * f);
                        return (1.2 + $t29579);
                      }
                    })();
                    return Canvas$arc(ctx, x, y, $t29580, 0., 6.28318530718);
                  }
                })();
                (() => {
                  return Canvas$fill(ctx);
                })();
                {
                  const $t29582 = (i + 1);
                  return draw_trail(ctx, rest, $t29582, n);
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
      const $f29597 = particles._0;
      const $f29598 = particles._1;
      {
        const rest = (() => {
          return $f29598;
        })();
        {
          const p = (() => {
            return $f29597;
          })();
          {
            const f = (() => {
              {
                const $t29590 = p.life;
                {
                  const $t29591 = p.max_life;
                  return ($t29590 / $t29591);
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
                const $t29592 = p.x;
                {
                  const $t29593 = p.y;
                  {
                    const $t29595 = (() => {
                      {
                        const $t29594 = (1.5 * f);
                        return (0.5 + $t29594);
                      }
                    })();
                    return Canvas$arc(ctx, $t29592, $t29593, $t29595, 0., 6.28318530718);
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
      const $f29613 = flash._0;
      {
        const f = (() => {
          return $f29613;
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
                    const $t29604 = (tr / 0.45);
                    return (1. - $t29604);
                  }
                })();
                {
                  const r = (() => {
                    {
                      const $t29605 = (prog * 60.);
                      return (8. + $t29605);
                    }
                  })();
                  (() => {
                    {
                      const $t29607 = (() => {
                        {
                          const $t29606 = (1. - prog);
                          return ($t29606 * 0.7);
                        }
                      })();
                      return Canvas$set_global_alpha(ctx, $t29607);
                    }
                  })();
                  (() => {
                    return Canvas$set_stroke_style(ctx, "#ffffff");
                  })();
                  (() => {
                    {
                      const $t29610 = (() => {
                        {
                          const $t29609 = (() => {
                            {
                              const $t29608 = (1. - prog);
                              return (2.5 * $t29608);
                            }
                          })();
                          return ($t29609 + 0.5);
                        }
                      })();
                      return Canvas$set_line_width(ctx, $t29610);
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
        const $t29618 = (() => {
          {
            const $t29617 = s.x;
            return ($t29617 + 1.);
          }
        })();
        {
          const $t29620 = (() => {
            {
              const $t29619 = s.y;
              return ($t29619 + 1.);
            }
          })();
          {
            const x_i10505 = (() => {
              {
                const $t29510_i10504 = (() => {
                  {
                    const $t29509_i10503 = (() => {
                      {
                        const $t29507_i10501 = ($t29618 * 12.9898);
                        {
                          const $t29508_i10502 = ($t29620 * 78.233);
                          return ($t29507_i10501 + $t29508_i10502);
                        }
                      }
                    })();
                    return Math.sin($t29509_i10503);
                  }
                })();
                return ($t29510_i10504 * 43758.5453);
              }
            })();
            {
              const $t29511_i10507 = (() => {
                {
                  const $t1582_i4087_i10506 = Math.floor(x_i10505);
                  return $t1582_i4087_i10506;
                }
              })();
              return (x_i10505 - $t29511_i10507);
            }
          }
        }
      }
    })();
    {
      const $t29621 = (r < 0.34);
      if ($t29621 === true) {
        return 0;
      } else {
        return (() => {
          {
            const $t29622 = (r < 0.67);
            if ($t29622 === true) {
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
    const $t29641 = (() => {
      {
        const $t29640 = (() => {
          {
            const $t29639 = (() => {
              {
                const $t29636 = (() => {
                  {
                    const $t29635 = s.x;
                    return ($t29635 + 4.);
                  }
                })();
                {
                  const $t29638 = (() => {
                    {
                      const $t29637 = s.y;
                      return ($t29637 + 4.);
                    }
                  })();
                  {
                    const x_i10532 = (() => {
                      {
                        const $t29510_i10531 = (() => {
                          {
                            const $t29509_i10530 = (() => {
                              {
                                const $t29507_i10528 = ($t29636 * 12.9898);
                                {
                                  const $t29508_i10529 = ($t29638 * 78.233);
                                  return ($t29507_i10528 + $t29508_i10529);
                                }
                              }
                            })();
                            return Math.sin($t29509_i10530);
                          }
                        })();
                        return ($t29510_i10531 * 43758.5453);
                      }
                    })();
                    {
                      const $t29511_i10534 = (() => {
                        {
                          const $t1582_i4087_i10533 = Math.floor(x_i10532);
                          return $t1582_i4087_i10533;
                        }
                      })();
                      return (x_i10532 - $t29511_i10534);
                    }
                  }
                }
              }
            })();
            return ($t29639 * 4.);
          }
        })();
        return Math.trunc($t29640);
      }
    })();
    return (2 + $t29641);
  }
}
const dot_count$clo = { _0: ($_, s) => dot_count(s) };

function draw_pulse_ring(ctx, s, pulse) {
  (() => {
    {
      const $t29648 = (0.1 * pulse);
      return Canvas$set_global_alpha(ctx, $t29648);
    }
  })();
  (() => {
    return Canvas$set_stroke_style(ctx, "#cfcfcf");
  })();
  (() => {
    {
      const $t29650 = (() => {
        {
          const $t29649 = (0.6 * pulse);
          return (1. + $t29649);
        }
      })();
      return Canvas$set_line_width(ctx, $t29650);
    }
  })();
  (() => {
    return Canvas$begin_path(ctx);
  })();
  (() => {
    {
      const $t29651 = s.x;
      {
        const $t29652 = s.y;
        {
          const $t29653 = s.capture_radius;
          return Canvas$arc(ctx, $t29651, $t29652, $t29653, 0., 6.28318530718);
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
      const $t29656 = (() => {
        {
          const $t29655 = (0.035 * pulse);
          return (0.025 + $t29655);
        }
      })();
      return Canvas$set_global_alpha(ctx, $t29656);
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
      const $t29657 = s.x;
      {
        const $t29658 = s.y;
        {
          const $t29662 = (() => {
            {
              const $t29659 = s.radius;
              {
                const $t29661 = (() => {
                  {
                    const $t29660 = (0.9 * pulse);
                    return (1.6 + $t29660);
                  }
                })();
                return ($t29659 * $t29661);
              }
            }
          })();
          return Canvas$arc(ctx, $t29657, $t29658, $t29662, 0., 6.28318530718);
        }
      }
    }
  })();
  return Canvas$fill(ctx);
}
const draw_pulse_halo$clo = { _0: ($_, ctx, s, pulse) => draw_pulse_halo(ctx, s, pulse) };

function draw_pulse_particle(ctx, s, t, n, i) {
  {
    const $t29664 = (i >= n);
    if ($t29664 === true) {
      return {  };
    } else {
      return (() => {
        {
          const a = (() => {
            {
              const $t29668 = (() => {
                {
                  const $t29666 = (() => {
                    {
                      const $t29665 = (() => {
                        {
                          const $t29647_i10838 = (() => {
                            {
                              const $t29646_i10837 = (() => {
                                {
                                  const $t29643_i10827 = (() => {
                                    {
                                      const $t29642_i10826 = s.x;
                                      return ($t29642_i10826 + 5.);
                                    }
                                  })();
                                  {
                                    const $t29645_i10829 = (() => {
                                      {
                                        const $t29644_i10828 = s.y;
                                        return ($t29644_i10828 + 5.);
                                      }
                                    })();
                                    {
                                      const x_i10541_i10834 = (() => {
                                        {
                                          const $t29510_i10540_i10833 = (() => {
                                            {
                                              const $t29509_i10539_i10832 = (() => {
                                                {
                                                  const $t29507_i10537_i10830 = ($t29643_i10827 * 12.9898);
                                                  {
                                                    const $t29508_i10538_i10831 = ($t29645_i10829 * 78.233);
                                                    return ($t29507_i10537_i10830 + $t29508_i10538_i10831);
                                                  }
                                                }
                                              })();
                                              return Math.sin($t29509_i10539_i10832);
                                            }
                                          })();
                                          return ($t29510_i10540_i10833 * 43758.5453);
                                        }
                                      })();
                                      {
                                        const $t29511_i10543_i10836 = (() => {
                                          {
                                            const $t1582_i4087_i10542_i10835 = Math.floor(x_i10541_i10834);
                                            return $t1582_i4087_i10542_i10835;
                                          }
                                        })();
                                        return (x_i10541_i10834 - $t29511_i10543_i10836);
                                      }
                                    }
                                  }
                                }
                              })();
                              return ($t29646_i10837 * 2.4);
                            }
                          })();
                          return (0.4 + $t29647_i10838);
                        }
                      })();
                      return (t * $t29665);
                    }
                  })();
                  {
                    const $t29667 = (() => {
                      {
                        const $t29633_i10824 = (() => {
                          {
                            const $t29630_i10814 = (() => {
                              {
                                const $t29629_i10813 = s.x;
                                return ($t29629_i10813 + 3.);
                              }
                            })();
                            {
                              const $t29632_i10816 = (() => {
                                {
                                  const $t29631_i10815 = s.y;
                                  return ($t29631_i10815 + 3.);
                                }
                              })();
                              {
                                const x_i10523_i10821 = (() => {
                                  {
                                    const $t29510_i10522_i10820 = (() => {
                                      {
                                        const $t29509_i10521_i10819 = (() => {
                                          {
                                            const $t29507_i10519_i10817 = ($t29630_i10814 * 12.9898);
                                            {
                                              const $t29508_i10520_i10818 = ($t29632_i10816 * 78.233);
                                              return ($t29507_i10519_i10817 + $t29508_i10520_i10818);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29509_i10521_i10819);
                                      }
                                    })();
                                    return ($t29510_i10522_i10820 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29511_i10525_i10823 = (() => {
                                    {
                                      const $t1582_i4087_i10524_i10822 = Math.floor(x_i10523_i10821);
                                      return $t1582_i4087_i10524_i10822;
                                    }
                                  })();
                                  return (x_i10523_i10821 - $t29511_i10525_i10823);
                                }
                              }
                            }
                          }
                        })();
                        return ($t29633_i10824 * 6.28318530718);
                      }
                    })();
                    return ($t29666 + $t29667);
                  }
                }
              })();
              {
                const $t29673 = (() => {
                  {
                    const $t29669 = i;
                    {
                      const $t29672 = (() => {
                        {
                          const $t29671 = n;
                          return (6.28318530718 / $t29671);
                        }
                      })();
                      return ($t29669 * $t29672);
                    }
                  }
                })();
                return ($t29668 + $t29673);
              }
            }
          })();
          {
            const r = (() => {
              {
                const $t29674 = s.radius;
                return ($t29674 * 1.8);
              }
            })();
            {
              const px = (() => {
                {
                  const $t29675 = s.x;
                  {
                    const $t29677 = (() => {
                      {
                        const $t29676 = Math.cos(a);
                        return ($t29676 * r);
                      }
                    })();
                    return ($t29675 + $t29677);
                  }
                }
              })();
              {
                const py = (() => {
                  {
                    const $t29678 = s.y;
                    {
                      const $t29680 = (() => {
                        {
                          const $t29679 = Math.sin(a);
                          return ($t29679 * r);
                        }
                      })();
                      return ($t29678 + $t29680);
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
                  const $t29682 = (i + 1);
                  return draw_pulse_particle(ctx, s, t, n, $t29682);
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
      const $f29691 = orbits._0;
      const $f29692 = orbits._1;
      {
        const $jp_clo29698 = (() => {
          return { $: "$Clo_$jp29697$3794", _0: $jp29697$apply$3794, _1: $f29691, _2: $f29692, _3: ctx, _4: s };
        })();
        switch ($f29692.$) {
          case "Nil": {
            {
              const o = $f29691;
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
                  const $t29683 = s.x;
                  {
                    const $t29684 = s.y;
                    {
                      const $t29685 = o.radius;
                      return Canvas$arc(ctx, $t29683, $t29684, $t29685, 0., 6.28318530718);
                    }
                  }
                }
              })();
              return Canvas$stroke(ctx);
            }
            break;
          }
          default: {
            return $jp29697$apply$3794($jp_clo29698);
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
      const $f29714 = aim._0;
      {
        const a = (() => {
          return $f29714;
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
                      const $t29701 = s.x;
                      return ($t29701 - px);
                    }
                  })();
                  {
                    const dy = (() => {
                      {
                        const $t29702 = s.y;
                        return ($t29702 - py);
                      }
                    })();
                    {
                      const range = (() => {
                        {
                          const $t29703 = s.capture_radius;
                          return ($t29703 * 4.);
                        }
                      })();
                      {
                        const $t29707 = (() => {
                          {
                            const $t29706 = (() => {
                              {
                                const $t29704 = (vx * dx);
                                {
                                  const $t29705 = (vy * dy);
                                  return ($t29704 + $t29705);
                                }
                              }
                            })();
                            return ($t29706 > 0.);
                          }
                        })();
                        {
                          const $t29712 = (() => {
                            {
                              const $t29710 = (() => {
                                {
                                  const $t29708 = (dx * dx);
                                  {
                                    const $t29709 = (dy * dy);
                                    return ($t29708 + $t29709);
                                  }
                                }
                              })();
                              {
                                const $t29711 = (range * range);
                                return ($t29710 < $t29711);
                              }
                            }
                          })();
                          return ($t29707 && $t29712);
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
        const $t29717 = (() => {
          {
            const $t29716 = (() => {
              {
                const $t29715 = (t * 6.);
                return Math.sin($t29715);
              }
            })();
            return (0.5 * $t29716);
          }
        })();
        return (0.5 + $t29717);
      }
    })();
    (() => {
      {
        const $t29719 = (() => {
          {
            const $t29718 = (0.45 * pulse);
            return (0.3 + $t29718);
          }
        })();
        return Canvas$set_global_alpha(ctx, $t29719);
      }
    })();
    (() => {
      return Canvas$set_stroke_style(ctx, "#ffffff");
    })();
    (() => {
      {
        const $t29721 = (() => {
          {
            const $t29720 = (1.6 * pulse);
            return (1.2 + $t29720);
          }
        })();
        return Canvas$set_line_width(ctx, $t29721);
      }
    })();
    (() => {
      return Canvas$begin_path(ctx);
    })();
    (() => {
      {
        const $t29722 = s.x;
        {
          const $t29723 = s.y;
          {
            const $t29724 = s.capture_radius;
            return Canvas$arc(ctx, $t29722, $t29723, $t29724, 0., 6.28318530718);
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
      const $t29726 = s.orbits;
      return draw_orbit_rings(ctx, s, $t29726);
    }
  })();
  (() => {
    {
      const $t29727 = (() => {
        {
          const $t29616_i10876 = (() => {
            {
              const $t29614_i10867 = s.x;
              {
                const $t29615_i10868 = s.y;
                {
                  const x_i10496_i10873 = (() => {
                    {
                      const $t29510_i10495_i10872 = (() => {
                        {
                          const $t29509_i10494_i10871 = (() => {
                            {
                              const $t29507_i10492_i10869 = ($t29614_i10867 * 12.9898);
                              {
                                const $t29508_i10493_i10870 = ($t29615_i10868 * 78.233);
                                return ($t29507_i10492_i10869 + $t29508_i10493_i10870);
                              }
                            }
                          })();
                          return Math.sin($t29509_i10494_i10871);
                        }
                      })();
                      return ($t29510_i10495_i10872 * 43758.5453);
                    }
                  })();
                  {
                    const $t29511_i10498_i10875 = (() => {
                      {
                        const $t1582_i4087_i10497_i10874 = Math.floor(x_i10496_i10873);
                        return $t1582_i4087_i10497_i10874;
                      }
                    })();
                    return (x_i10496_i10873 - $t29511_i10498_i10875);
                  }
                }
              }
            }
          })();
          return ($t29616_i10876 < 0.8);
        }
      })();
      if ($t29727 === true) {
        return (() => {
          {
            const pulse = (() => {
              {
                const $t29733 = (() => {
                  {
                    const $t29732 = (() => {
                      {
                        const $t29731 = (() => {
                          {
                            const $t29729 = (() => {
                              {
                                const $t29728 = (() => {
                                  {
                                    const $t29628_i10865 = (() => {
                                      {
                                        const $t29627_i10864 = (() => {
                                          {
                                            const $t29624_i10854 = (() => {
                                              {
                                                const $t29623_i10853 = s.x;
                                                return ($t29623_i10853 + 2.);
                                              }
                                            })();
                                            {
                                              const $t29626_i10856 = (() => {
                                                {
                                                  const $t29625_i10855 = s.y;
                                                  return ($t29625_i10855 + 2.);
                                                }
                                              })();
                                              {
                                                const x_i10514_i10861 = (() => {
                                                  {
                                                    const $t29510_i10513_i10860 = (() => {
                                                      {
                                                        const $t29509_i10512_i10859 = (() => {
                                                          {
                                                            const $t29507_i10510_i10857 = ($t29624_i10854 * 12.9898);
                                                            {
                                                              const $t29508_i10511_i10858 = ($t29626_i10856 * 78.233);
                                                              return ($t29507_i10510_i10857 + $t29508_i10511_i10858);
                                                            }
                                                          }
                                                        })();
                                                        return Math.sin($t29509_i10512_i10859);
                                                      }
                                                    })();
                                                    return ($t29510_i10513_i10860 * 43758.5453);
                                                  }
                                                })();
                                                {
                                                  const $t29511_i10516_i10863 = (() => {
                                                    {
                                                      const $t1582_i4087_i10515_i10862 = Math.floor(x_i10514_i10861);
                                                      return $t1582_i4087_i10515_i10862;
                                                    }
                                                  })();
                                                  return (x_i10514_i10861 - $t29511_i10516_i10863);
                                                }
                                              }
                                            }
                                          }
                                        })();
                                        return ($t29627_i10864 * 1.8);
                                      }
                                    })();
                                    return (0.6 + $t29628_i10865);
                                  }
                                })();
                                return (t * $t29728);
                              }
                            })();
                            {
                              const $t29730 = (() => {
                                {
                                  const $t29633_i10851 = (() => {
                                    {
                                      const $t29630_i10841 = (() => {
                                        {
                                          const $t29629_i10840 = s.x;
                                          return ($t29629_i10840 + 3.);
                                        }
                                      })();
                                      {
                                        const $t29632_i10843 = (() => {
                                          {
                                            const $t29631_i10842 = s.y;
                                            return ($t29631_i10842 + 3.);
                                          }
                                        })();
                                        {
                                          const x_i10523_i10848 = (() => {
                                            {
                                              const $t29510_i10522_i10847 = (() => {
                                                {
                                                  const $t29509_i10521_i10846 = (() => {
                                                    {
                                                      const $t29507_i10519_i10844 = ($t29630_i10841 * 12.9898);
                                                      {
                                                        const $t29508_i10520_i10845 = ($t29632_i10843 * 78.233);
                                                        return ($t29507_i10519_i10844 + $t29508_i10520_i10845);
                                                      }
                                                    }
                                                  })();
                                                  return Math.sin($t29509_i10521_i10846);
                                                }
                                              })();
                                              return ($t29510_i10522_i10847 * 43758.5453);
                                            }
                                          })();
                                          {
                                            const $t29511_i10525_i10850 = (() => {
                                              {
                                                const $t1582_i4087_i10524_i10849 = Math.floor(x_i10523_i10848);
                                                return $t1582_i4087_i10524_i10849;
                                              }
                                            })();
                                            return (x_i10523_i10848 - $t29511_i10525_i10850);
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  return ($t29633_i10851 * 6.28318530718);
                                }
                              })();
                              return ($t29729 + $t29730);
                            }
                          }
                        })();
                        return Math.sin($t29731);
                      }
                    })();
                    return (0.5 * $t29732);
                  }
                })();
                return (0.5 + $t29733);
              }
            })();
            {
              const $t29734 = pulse_style(s);
              if ($t29734 === 0) {
                return (() => {
                  {
                    const $jp_clo29737 = (() => {
                      return { $: "$Clo_$jp29736$3797", _0: $jp29736$apply$3797, _1: ctx, _2: s, _3: t };
                    })();
                    return draw_pulse_ring(ctx, s, pulse);
                  }
                })();
              } else if ($t29734 === 1) {
                return (() => {
                  {
                    const $jp_clo29739 = (() => {
                      return { $: "$Clo_$jp29738$3798", _0: $jp29738$apply$3798, _1: ctx, _2: s, _3: t };
                    })();
                    return draw_pulse_halo(ctx, s, pulse);
                  }
                })();
              } else {
                return (() => {
                  {
                    const $t29735 = dot_count(s);
                    return draw_pulse_particle(ctx, s, t, $t29735, 0);
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
      const $t29740 = star_targeted(s, aim);
      if ($t29740 === true) {
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
      const $t29741 = s.x;
      {
        const $t29742 = s.y;
        {
          const $t29743 = s.radius;
          return Canvas$arc(ctx, $t29741, $t29742, $t29743, 0., 6.28318530718);
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
            const $t29751 = (() => {
              {
                const $t29750 = (seed * 37.719);
                return (fx + $t29750);
              }
            })();
            {
              const $t29753 = (() => {
                {
                  const $t29752 = (seed * 12.9898);
                  return (fy - $t29752);
                }
              })();
              {
                const x_i10568 = (() => {
                  {
                    const $t29748_i10567 = (() => {
                      {
                        const $t29747_i10566 = (() => {
                          {
                            const $t29745_i10564 = ($t29751 * 12.9898);
                            {
                              const $t29746_i10565 = ($t29753 * 78.233);
                              return ($t29745_i10564 + $t29746_i10565);
                            }
                          }
                        })();
                        return Math.sin($t29747_i10566);
                      }
                    })();
                    return ($t29748_i10567 * 43758.5453);
                  }
                })();
                {
                  const $t29749_i10570 = (() => {
                    {
                      const $t1582_i4118_i10569 = Math.floor(x_i10568);
                      return $t1582_i4118_i10569;
                    }
                  })();
                  return (x_i10568 - $t29749_i10570);
                }
              }
            }
          }
        })();
        {
          const h2 = (() => {
            {
              const $t29756 = (() => {
                {
                  const $t29754 = (fy * 3.271);
                  {
                    const $t29755 = (seed * 71.238);
                    return ($t29754 - $t29755);
                  }
                }
              })();
              {
                const $t29759 = (() => {
                  {
                    const $t29757 = (fx * 1.373);
                    {
                      const $t29758 = (seed * 5.113);
                      return ($t29757 + $t29758);
                    }
                  }
                })();
                {
                  const x_i10559 = (() => {
                    {
                      const $t29748_i10558 = (() => {
                        {
                          const $t29747_i10557 = (() => {
                            {
                              const $t29745_i10555 = ($t29756 * 12.9898);
                              {
                                const $t29746_i10556 = ($t29759 * 78.233);
                                return ($t29745_i10555 + $t29746_i10556);
                              }
                            }
                          })();
                          return Math.sin($t29747_i10557);
                        }
                      })();
                      return ($t29748_i10558 * 43758.5453);
                    }
                  })();
                  {
                    const $t29749_i10561 = (() => {
                      {
                        const $t1582_i4118_i10560 = Math.floor(x_i10559);
                        return $t1582_i4118_i10560;
                      }
                    })();
                    return (x_i10559 - $t29749_i10561);
                  }
                }
              }
            }
          })();
          {
            const $t29762 = (() => {
              {
                const $t29760 = (h1 * 269.5);
                {
                  const $t29761 = (h2 * 183.3);
                  return ($t29760 + $t29761);
                }
              }
            })();
            {
              const $t29766 = (() => {
                {
                  const $t29765 = (() => {
                    {
                      const $t29763 = (fx * 0.618);
                      {
                        const $t29764 = (fy * 0.573);
                        return ($t29763 + $t29764);
                      }
                    }
                  })();
                  return ($t29765 + seed);
                }
              })();
              {
                const x_i10550 = (() => {
                  {
                    const $t29748_i10549 = (() => {
                      {
                        const $t29747_i10548 = (() => {
                          {
                            const $t29745_i10546 = ($t29762 * 12.9898);
                            {
                              const $t29746_i10547 = ($t29766 * 78.233);
                              return ($t29745_i10546 + $t29746_i10547);
                            }
                          }
                        })();
                        return Math.sin($t29747_i10548);
                      }
                    })();
                    return ($t29748_i10549 * 43758.5453);
                  }
                })();
                {
                  const $t29749_i10552 = (() => {
                    {
                      const $t1582_i4118_i10551 = Math.floor(x_i10550);
                      return $t1582_i4118_i10551;
                    }
                  })();
                  return (x_i10550 - $t29749_i10552);
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
      const $t29768 = (h > 0.5);
      if ($t29768 === true) {
        return {  };
      } else {
        return (() => {
          {
            const jx = (() => {
              {
                const $t29769 = (gy + 1000);
                return bg_hash(gx, $t29769, seed);
              }
            })();
            {
              const jy = (() => {
                {
                  const $t29770 = (gx + 1000);
                  return bg_hash($t29770, gy, seed);
                }
              })();
              {
                const x = (() => {
                  {
                    const $t29772 = (() => {
                      {
                        const $t29771 = gx;
                        return ($t29771 * cell);
                      }
                    })();
                    {
                      const $t29773 = (jx * cell);
                      return ($t29772 + $t29773);
                    }
                  }
                })();
                {
                  const y = (() => {
                    {
                      const $t29775 = (() => {
                        {
                          const $t29774 = gy;
                          return ($t29774 * cell);
                        }
                      })();
                      {
                        const $t29776 = (jy * cell);
                        return ($t29775 + $t29776);
                      }
                    }
                  })();
                  {
                    const br = (() => {
                      {
                        const $t29780 = (() => {
                          {
                            const $t29779 = (() => {
                              {
                                const $t29777 = (gx + 2000);
                                {
                                  const $t29778 = (gy + 2000);
                                  return bg_hash($t29777, $t29778, seed);
                                }
                              }
                            })();
                            return (0.45 * $t29779);
                          }
                        })();
                        return (0.12 + $t29780);
                      }
                    })();
                    {
                      const st = (() => {
                        {
                          const $t29781 = (gx - 2000);
                          {
                            const $t29782 = (gy - 2000);
                            return bg_hash($t29781, $t29782, seed);
                          }
                        }
                      })();
                      {
                        const sz = (() => {
                          {
                            const $t29784 = (() => {
                              {
                                const $t29783 = (1.8 * st);
                                return ($t29783 * st);
                              }
                            })();
                            return (1. + $t29784);
                          }
                        })();
                        {
                          const is_pulsing = (() => {
                            {
                              const $t29787 = (() => {
                                {
                                  const $t29785 = (gx + 3000);
                                  {
                                    const $t29786 = (gy + 3000);
                                    return bg_hash($t29785, $t29786, seed);
                                  }
                                }
                              })();
                              return ($t29787 < 0.04);
                            }
                          })();
                          {
                            let pulse;
                            if (is_pulsing === true) {
                              pulse = (() => {
                                {
                                  const speed = (() => {
                                    {
                                      const $t29791 = (() => {
                                        {
                                          const $t29790 = (() => {
                                            {
                                              const $t29789 = (gx + 4000);
                                              return bg_hash($t29789, gy, seed);
                                            }
                                          })();
                                          return (0.45 * $t29790);
                                        }
                                      })();
                                      return (0.35 + $t29791);
                                    }
                                  })();
                                  {
                                    const phase = (() => {
                                      {
                                        const $t29793 = (() => {
                                          {
                                            const $t29792 = (gy + 4000);
                                            return bg_hash(gx, $t29792, seed);
                                          }
                                        })();
                                        return ($t29793 * 6.28318530718);
                                      }
                                    })();
                                    {
                                      const $t29798 = (() => {
                                        {
                                          const $t29797 = (() => {
                                            {
                                              const $t29796 = (() => {
                                                {
                                                  const $t29795 = (t * speed);
                                                  return ($t29795 + phase);
                                                }
                                              })();
                                              return Math.sin($t29796);
                                            }
                                          })();
                                          return (0.5 * $t29797);
                                        }
                                      })();
                                      return (0.5 + $t29798);
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
                                    const $t29801 = (() => {
                                      {
                                        const $t29800 = (() => {
                                          {
                                            const $t29799 = (1. - br);
                                            return ($t29799 * 0.6);
                                          }
                                        })();
                                        return ($t29800 * pulse);
                                      }
                                    })();
                                    return (br + $t29801);
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
                                      const $t29803 = (() => {
                                        {
                                          const $t29802 = (0.35 * pulse);
                                          return (1. + $t29802);
                                        }
                                      })();
                                      return (sz * $t29803);
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
    const $t29805 = (gx > gx_max);
    if ($t29805 === true) {
      return {  };
    } else {
      return (() => {
        (() => {
          return draw_bg_cell(ctx, gx, gy, cell, seed, t);
        })();
        {
          const $t29806 = (gx + 1);
          return draw_bg_row(ctx, $t29806, gx_max, gy, cell, seed, t);
        }
      })();
    }
  }
}
const draw_bg_row$clo = { _0: ($_, ctx, gx, gx_max, gy, cell, seed, t) => draw_bg_row(ctx, gx, gx_max, gy, cell, seed, t) };

function draw_bg_rows(ctx, gx0, gx1, gy, gy_max, cell, seed, t) {
  {
    const $t29807 = (gy > gy_max);
    if ($t29807 === true) {
      return {  };
    } else {
      return (() => {
        (() => {
          return draw_bg_row(ctx, gx0, gx1, gy, cell, seed, t);
        })();
        {
          const $t29808 = (gy + 1);
          return draw_bg_rows(ctx, gx0, gx1, $t29808, gy_max, cell, seed, t);
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
        const $t29811 = (() => {
          {
            const $t29810 = (() => {
              {
                const $t29809 = (cam_x / 70.);
                {
                  const $t1582_i4128 = Math.floor($t29809);
                  return $t1582_i4128;
                }
              }
            })();
            return Math.trunc($t29810);
          }
        })();
        return ($t29811 - 1);
      }
    })();
    {
      const gx1 = (() => {
        {
          const $t29815 = (() => {
            {
              const $t29814 = (() => {
                {
                  const $t29813 = (() => {
                    {
                      const $t29812 = (cam_x + view_w);
                      return ($t29812 / 70.);
                    }
                  })();
                  {
                    const $t1582_i4126 = Math.floor($t29813);
                    return $t1582_i4126;
                  }
                }
              })();
              return Math.trunc($t29814);
            }
          })();
          return ($t29815 + 1);
        }
      })();
      {
        const gy0 = (() => {
          {
            const $t29818 = (() => {
              {
                const $t29817 = (() => {
                  {
                    const $t29816 = (cam / 70.);
                    {
                      const $t1582_i4124 = Math.floor($t29816);
                      return $t1582_i4124;
                    }
                  }
                })();
                return Math.trunc($t29817);
              }
            })();
            return ($t29818 - 1);
          }
        })();
        {
          const gy1 = (() => {
            {
              const $t29822 = (() => {
                {
                  const $t29821 = (() => {
                    {
                      const $t29820 = (() => {
                        {
                          const $t29819 = (cam + view_h);
                          return ($t29819 / 70.);
                        }
                      })();
                      {
                        const $t1582_i4122 = Math.floor($t29820);
                        return $t1582_i4122;
                      }
                    }
                  })();
                  return Math.trunc($t29821);
                }
              })();
              return ($t29822 + 1);
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
      const $f29834 = clouds._0;
      const $f29835 = clouds._1;
      {
        const rest = $f29835;
        {
          const c = $f29834;
          {
            const $t29832 = (() => {
              {
                const $t29824 = (() => {
                  {
                    const $t29823 = c.x;
                    return ($t29823 - cam_x);
                  }
                })();
                {
                  const $t29826 = (() => {
                    {
                      const $t29825 = c.y;
                      return ($t29825 - cam_y);
                    }
                  })();
                  {
                    const $t29827 = c.radius;
                    {
                      const $t29828 = c.strength;
                      {
                        const $t29831 = (() => {
                          {
                            const $t29829 = c.x;
                            {
                              const $t29830 = c.y;
                              {
                                const x_i10577 = (() => {
                                  {
                                    const $t29510_i10576 = (() => {
                                      {
                                        const $t29509_i10575 = (() => {
                                          {
                                            const $t29507_i10573 = ($t29829 * 12.9898);
                                            {
                                              const $t29508_i10574 = ($t29830 * 78.233);
                                              return ($t29507_i10573 + $t29508_i10574);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29509_i10575);
                                      }
                                    })();
                                    return ($t29510_i10576 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29511_i10579 = (() => {
                                    {
                                      const $t1582_i4087_i10578 = Math.floor(x_i10577);
                                      return $t1582_i4087_i10578;
                                    }
                                  })();
                                  return (x_i10577 - $t29511_i10579);
                                }
                              }
                            }
                          }
                        })();
                        return ({ x: $t29824, y: $t29826, radius: $t29827, strength: $t29828, seed: $t29831 });
                      }
                    }
                  }
                }
              }
            })();
            {
              const $t29833 = to_screen_clouds(rest, cam_x, cam_y);
              return { $: "Cons", _0: $t29832, _1: $t29833 };
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
      const $f29849 = gl_opt._0;
      {
        const gl = $f29849;
        {
          const $t29840 = game.stars;
          {
            const $t29841 = game.camera_y;
            {
              const $t29842 = game.view_h;
              {
                const $t29843 = game.view_w;
                {
                  const clouds = (() => {
                    return Perihelion$Nebula$visible_clouds($t29840, $t29841, $t29842, $t29843, seed);
                  })();
                  {
                    const $t29844 = game.camera_x;
                    {
                      const $t29845 = game.camera_y;
                      {
                        const screen_clouds = to_screen_clouds(clouds, $t29844, $t29845);
                        (() => {
                          {
                            const $t29846 = game.view_w;
                            {
                              const $t29847 = game.view_h;
                              return WebGL$draw_nebula(gl, screen_clouds, $t29846, $t29847, seed);
                            }
                          }
                        })();
                        {
                          const $t29848 = WebGL$canvas_node(gl);
                          return Canvas$draw_node(ctx, $t29848, 0., 0.);
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
const draw_nebula_gl$clo = { _0: ($_, ctx, gl_opt, game, seed) => draw_nebula_gl(ctx, gl_opt, game, seed) };

function draw_stars(ctx, stars, cam, view_h, t, aim) {
  switch (stars.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f29858 = stars._0;
      const $f29859 = stars._1;
      {
        const rest = $f29859;
        {
          const s = $f29858;
          (() => {
            {
              const $t29857 = (() => {
                {
                  const $t29853 = (() => {
                    {
                      const $t29850 = s.y;
                      {
                        const $t29852 = (() => {
                          {
                            const $t29851 = (cam + view_h);
                            return ($t29851 + 100.);
                          }
                        })();
                        return ($t29850 < $t29852);
                      }
                    }
                  })();
                  {
                    const $t29856 = (() => {
                      {
                        const $t29854 = s.y;
                        {
                          const $t29855 = (cam - 100.);
                          return ($t29854 > $t29855);
                        }
                      }
                    })();
                    return ($t29853 && $t29856);
                  }
                }
              })();
              if ($t29857 === true) {
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
        const $t29870 = i;
        {
          const $t29872 = (6.28318530718 / 8.);
          return ($t29870 * $t29872);
        }
      }
    })();
    {
      const jitter = (() => {
        {
          const $t29875 = (() => {
            {
              const $t29874 = (() => {
                {
                  const $t29873 = a.shape_seed;
                  {
                    const x_i10587 = (() => {
                      {
                        const $t29868_i10586 = (() => {
                          {
                            const $t29867_i10585 = (() => {
                              {
                                const $t29864_i10582 = ($t29873 * 12.9898);
                                {
                                  const $t29866_i10584 = (() => {
                                    {
                                      const $t29865_i10583 = i;
                                      return ($t29865_i10583 * 78.233);
                                    }
                                  })();
                                  return ($t29864_i10582 + $t29866_i10584);
                                }
                              }
                            })();
                            return Math.sin($t29867_i10585);
                          }
                        })();
                        return ($t29868_i10586 * 43758.5453);
                      }
                    })();
                    {
                      const $t29869_i10589 = (() => {
                        {
                          const $t1582_i4133_i10588 = Math.floor(x_i10587);
                          return $t1582_i4133_i10588;
                        }
                      })();
                      return (x_i10587 - $t29869_i10589);
                    }
                  }
                }
              })();
              return (0.6 * $t29874);
            }
          })();
          return (0.7 + $t29875);
        }
      })();
      {
        const r = (() => {
          {
            const $t29876 = a.radius;
            return ($t29876 * jitter);
          }
        })();
        {
          const pt = (() => {
            {
              const $t29880 = (() => {
                {
                  const $t29877 = a.x;
                  {
                    const $t29879 = (() => {
                      {
                        const $t29878 = Math.cos(angle);
                        return ($t29878 * r);
                      }
                    })();
                    return ($t29877 + $t29879);
                  }
                }
              })();
              {
                const $t29884 = (() => {
                  {
                    const $t29881 = a.y;
                    {
                      const $t29883 = (() => {
                        {
                          const $t29882 = Math.sin(angle);
                          return ($t29882 * r);
                        }
                      })();
                      return ($t29881 + $t29883);
                    }
                  }
                })();
                return { _0: $t29880, _1: $t29884 };
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
    const $t29885 = (i > 7);
    if ($t29885 === true) {
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
                      const $jp_clo29887 = (() => {
                        return { $: "$Clo_$jp29886$3801", _0: $jp29886$apply$3801, _1: ctx, _2: px, _3: py };
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
                const $t29888 = (i + 1);
                return draw_asteroid_edges(ctx, a, $t29888);
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
      const $f29897 = asteroids._0;
      const $f29898 = asteroids._1;
      {
        const rest = (() => {
          return $f29898;
        })();
        {
          const a = (() => {
            return $f29897;
          })();
          {
            const color = (() => {
              {
                const $t29890 = a.mode;
                switch ($t29890.$) {
                  case "AsteroidDrifting": {
                    return "#8a8a94";
                    break;
                  }
                  case "AsteroidOrbiting": {
                    const $f29891 = $t29890._0;
                    const $f29892 = $t29890._1;
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
      const $f29906 = shots._0;
      const $f29907 = shots._1;
      {
        const rest = (() => {
          return $f29907;
        })();
        {
          const s = (() => {
            return $f29906;
          })();
          (() => {
            return Canvas$set_fill_style(ctx, color);
          })();
          (() => {
            return Canvas$begin_path(ctx);
          })();
          (() => {
            {
              const $t29903 = s.x;
              {
                const $t29904 = s.y;
                return Canvas$arc(ctx, $t29903, $t29904, r, 0., 6.28318530718);
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
    const $t29912 = sh.mode;
    switch ($t29912.$) {
      case "ShipOrbiting": {
        const $f29916 = $t29912._0;
        const $f29917 = $t29912._1;
        {
          const angle = (() => {
            return $f29917;
          })();
          {
            const d = (0. - 1.);
            {
              const $t29915 = (d * 1.5707963);
              return (angle + $t29915);
            }
          }
        }
        break;
      }
      case "ShipFlying": {
        const $f29922 = $t29912._0;
        const $f29923 = $t29912._1;
        {
          const vy = (() => {
            return $f29923;
          })();
          {
            const vx = (() => {
              return $f29922;
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
    const $t29928 = game.mode;
    switch ($t29928.$) {
      case "Flying": {
        const $f29929 = $t29928._0;
        const $f29930 = $t29928._1;
        {
          const vy = (() => {
            return $f29930;
          })();
          {
            const vx = (() => {
              return $f29929;
            })();
            return Math.atan2(vy, vx);
          }
        }
        break;
      }
      case "Orbiting": {
        const $f29935 = $t29928._0;
        const $f29936 = $t29928._1;
        const $f29937 = $t29928._2;
        {
          const angle = (() => {
            return $f29937;
          })();
          return (angle + 1.5707963);
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
      const $f29950 = ships._0;
      const $f29951 = ships._1;
      {
        const rest = (() => {
          return $f29951;
        })();
        {
          const sh = (() => {
            return $f29950;
          })();
          {
            const pos = (() => {
              {
                const pos_i4151 = (() => {
                  {
                    const $t27355_i4149 = sh.x;
                    {
                      const $t27356_i4150 = sh.y;
                      return { _0: $t27355_i4149, _1: $t27356_i4150 };
                    }
                  }
                })();
                return pos_i4151;
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
                      const $t29946 = (0. - 6.);
                      return Canvas$line_to(ctx, $t29946, 5.);
                    }
                  })();
                  (() => {
                    {
                      const $t29947 = (0. - 6.);
                      {
                        const $t29948 = (0. - 5.);
                        return Canvas$line_to(ctx, $t29947, $t29948);
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
      const $f29959 = pickups._0;
      const $f29960 = pickups._1;
      {
        const rest = (() => {
          return $f29960;
        })();
        {
          const pk = (() => {
            return $f29959;
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
              const $t29956 = pk.x;
              {
                const $t29957 = pk.y;
                return Canvas$arc(ctx, $t29956, $t29957, 8., 0., 6.28318530718);
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
    const $t29965 = (i >= 5);
    if ($t29965 === true) {
      return {  };
    } else {
      return (() => {
        switch (runs.$) {
          case "Nil": {
            return {  };
            break;
          }
          case "Cons": {
            const $f29980 = runs._0;
            const $f29981 = runs._1;
            {
              const rest = (() => {
                return $f29981;
              })();
              {
                const r = (() => {
                  return $f29980;
                })();
                (() => {
                  return Canvas$set_font(ctx, "14px sans-serif");
                })();
                (() => {
                  {
                    const $t29976 = (() => {
                      {
                        const $t29975 = (() => {
                          {
                            const $t29972 = (() => {
                              {
                                const $t29971 = (() => {
                                  {
                                    const $t29968 = (() => {
                                      {
                                        const $t29967 = (() => {
                                          {
                                            const $t29966 = r.score;
                                            return String($t29966);
                                          }
                                        })();
                                        {
                                          const $rc_851 = ($t29967 + " x");
                                          return $rc_851;
                                        }
                                      }
                                    })();
                                    {
                                      const $t29970 = (() => {
                                        {
                                          const $t29969 = r.max_mult;
                                          return String($t29969);
                                        }
                                      })();
                                      {
                                        const $rc_850 = ($t29968 + $t29970);
                                        return $rc_850;
                                      }
                                    }
                                  }
                                })();
                                {
                                  const $rc_849 = ($t29971 + " · ");
                                  return $rc_849;
                                }
                              }
                            })();
                            {
                              const $t29974 = (() => {
                                {
                                  const $t29973 = r.stars;
                                  return String($t29973);
                                }
                              })();
                              {
                                const $rc_848 = ($t29972 + $t29974);
                                return $rc_848;
                              }
                            }
                          }
                        })();
                        {
                          const $rc_847 = ($t29975 + " stars");
                          return $rc_847;
                        }
                      }
                    })();
                    {
                      const $t29977 = (view_w / 2.);
                      return Canvas$fill_text(ctx, $t29976, $t29977, y);
                    }
                  }
                })();
                {
                  const $t29978 = (y + 20.);
                  {
                    const $t29979 = (i + 1);
                    return draw_runs(ctx, rest, view_w, $t29978, $t29979);
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

function row_extent_go(row, col, len, left, right) {
  {
    const $t29986 = (col >= len);
    if ($t29986 === true) {
      return { _0: left, _1: right };
    } else {
      return (() => {
        {
          const ch = march_string_slice(row, col, 1);
          {
            const $t29987 = (ch === "0");
            if ($t29987 === true) {
              return (() => {
                {
                  const $t29988 = (col + 1);
                  return row_extent_go(row, $t29988, len, left, right);
                }
              })();
            } else {
              return (() => {
                {
                  const new_left = (() => {
                    {
                      const $t29989 = (left < 0);
                      if ($t29989 === true) {
                        return col;
                      } else {
                        return left;
                      }
                    }
                  })();
                  {
                    const $t29990 = (col + 1);
                    return row_extent_go(row, $t29990, len, new_left, col);
                  }
                }
              })();
            }
          }
        }
      })();
    }
  }
}
const row_extent_go$clo = { _0: ($_, row, col, len, left, right) => row_extent_go(row, col, len, left, right) };

function collect_row_extents(rows, row_idx, acc) {
  switch (rows.$) {
    case "Nil": {
      return acc;
      break;
    }
    case "Cons": {
      const $f29997 = rows._0;
      const $f29998 = rows._1;
      {
        const rest = $f29998;
        {
          const row = $f29997;
          {
            const $p29996 = (() => {
              {
                const $rc_852 = row_extent_go(row, 0, 64, -1, -1);
                return $rc_852;
              }
            })();
            {
              const l = $p29996._0;
              {
                const r = $p29996._1;
                {
                  const $t29993 = (l < 0);
                  {
                    let acc2;
                    if ($t29993 === true) {
                      acc2 = acc;
                    } else {
                      acc2 = (() => {
                        {
                          const $t29994 = ({ row: row_idx, left: l, right: r });
                          return { $: "Cons", _0: $t29994, _1: acc };
                        }
                      })();
                    }
                    {
                      const $t29995 = (row_idx + 1);
                      return collect_row_extents(rest, $t29995, acc2);
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
const collect_row_extents$clo = { _0: ($_, rows, row_idx, acc) => collect_row_extents(rows, row_idx, acc) };

function right_edge_points(extents) {
  switch (extents.$) {
    case "Nil": {
      return { $: "Nil" };
      break;
    }
    case "Cons": {
      const $f30028 = extents._0;
      const $f30029 = extents._1;
      {
        const rest = $f30029;
        {
          const e = $f30028;
          {
            const $t30026 = (() => {
              {
                const $t30024 = (() => {
                  {
                    const $t30023 = e.right;
                    return ($t30023 + 1);
                  }
                })();
                {
                  const $t30025 = e.row;
                  {
                    const sx_i10593 = (() => {
                      {
                        const $t30005_i10592 = $t30024;
                        return ($t30005_i10592 * 0.5);
                      }
                    })();
                    {
                      const sy_i10595 = (() => {
                        {
                          const $t30007_i10594 = $t30025;
                          return ($t30007_i10594 * 0.5);
                        }
                      })();
                      {
                        const ex_i10598 = (() => {
                          {
                            const $t30013_i10597 = (() => {
                              {
                                const $t30011_i10596 = (sx_i10593 - 16.);
                                return ($t30011_i10596 * 1.15);
                              }
                            })();
                            return (16. + $t30013_i10597);
                          }
                        })();
                        {
                          const ey_i10601 = (() => {
                            {
                              const $t30018_i10600 = (() => {
                                {
                                  const $t30016_i10599 = (sy_i10595 - 24.);
                                  return ($t30016_i10599 * 1.15);
                                }
                              })();
                              return (24. + $t30018_i10600);
                            }
                          })();
                          {
                            const $t30020_i10602 = (ex_i10598 - 16.);
                            {
                              const $t30022_i10603 = (ey_i10601 - 24.);
                              return { _0: $t30020_i10602, _1: $t30022_i10603 };
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
              const $t30027 = right_edge_points(rest);
              return { $: "Cons", _0: $t30026, _1: $t30027 };
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
const right_edge_points$clo = { _0: ($_, extents) => right_edge_points(extents) };

function left_edge_points(extents) {
  switch (extents.$) {
    case "Nil": {
      return { $: "Nil" };
      break;
    }
    case "Cons": {
      const $f30038 = extents._0;
      const $f30039 = extents._1;
      {
        const rest = $f30039;
        {
          const e = $f30038;
          {
            const $t30036 = (() => {
              {
                const $t30034 = e.left;
                {
                  const $t30035 = e.row;
                  {
                    const sx_i10607 = (() => {
                      {
                        const $t30005_i10606 = $t30034;
                        return ($t30005_i10606 * 0.5);
                      }
                    })();
                    {
                      const sy_i10609 = (() => {
                        {
                          const $t30007_i10608 = $t30035;
                          return ($t30007_i10608 * 0.5);
                        }
                      })();
                      {
                        const ex_i10612 = (() => {
                          {
                            const $t30013_i10611 = (() => {
                              {
                                const $t30011_i10610 = (sx_i10607 - 16.);
                                return ($t30011_i10610 * 1.15);
                              }
                            })();
                            return (16. + $t30013_i10611);
                          }
                        })();
                        {
                          const ey_i10615 = (() => {
                            {
                              const $t30018_i10614 = (() => {
                                {
                                  const $t30016_i10613 = (sy_i10609 - 24.);
                                  return ($t30016_i10613 * 1.15);
                                }
                              })();
                              return (24. + $t30018_i10614);
                            }
                          })();
                          {
                            const $t30020_i10616 = (ex_i10612 - 16.);
                            {
                              const $t30022_i10617 = (ey_i10615 - 24.);
                              return { _0: $t30020_i10616, _1: $t30022_i10617 };
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
              const $t30037 = left_edge_points(rest);
              return { $: "Cons", _0: $t30036, _1: $t30037 };
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
const left_edge_points$clo = { _0: ($_, extents) => left_edge_points(extents) };

function shield_hull_points() {
  {
    const bottom_to_top = (() => {
      {
        const $t30003_i4166 = player_sprite_grid();
        {
          const $t30004_i4167 = { $: "Nil" };
          return collect_row_extents($t30003_i4166, 0, $t30004_i4167);
        }
      }
    })();
    {
      const top_to_bottom = (() => {
        {
          const go_i4164 = { $: "$Clo_go$4843", _0: go$apply$4843 };
          {
            const $t253_i4165 = { $: "Nil" };
            return go$apply$4843(go_i4164, bottom_to_top, $t253_i4165);
          }
        }
      })();
      {
        const $t30044 = right_edge_points(top_to_bottom);
        {
          const $t30045 = left_edge_points(bottom_to_top);
          {
            const go_i10620 = { $: "$Clo_go$4800", _0: go$apply$4800 };
            {
              const $t261_i10623 = (() => {
                {
                  const go_i4538_i10621 = { $: "$Clo_go$4325", _0: go$apply$4325 };
                  {
                    const $t253_i4539_i10622 = { $: "Nil" };
                    return go$apply$4325(go_i4538_i10621, $t30044, $t253_i4539_i10622);
                  }
                }
              })();
              return go$apply$4800(go_i10620, $t261_i10623, $t30045);
            }
          }
        }
      }
    }
  }
}
const shield_hull_points$clo = { _0: ($_) => shield_hull_points() };

function draw_hull_points(ctx, points, first) {
  switch (points.$) {
    case "Nil": {
      return {  };
      break;
    }
    case "Cons": {
      const $f30046 = points._0;
      const $f30047 = points._1;
      const $f30048 = $f30046._0;
      const $f30049 = $f30046._1;
      {
        const rest = $f30047;
        {
          const py = $f30049;
          {
            const px = $f30048;
            (() => {
              if (first === true) {
                return (() => {
                  return Canvas$move_to(ctx, px, py);
                })();
              } else {
                return (() => {
                  return Canvas$line_to(ctx, px, py);
                })();
              }
            })();
            return draw_hull_points(ctx, rest, false);
          }
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
const draw_hull_points$clo = { _0: ($_, ctx, points, first) => draw_hull_points(ctx, points, first) };

function draw_ball(ctx, game, fx) {
  {
    const $t30058 = fx.player_sprite;
    switch ($t30058.$) {
      case "None": {
        (() => {
          return Canvas$set_fill_style(ctx, "#ffffff");
        })();
        (() => {
          return Canvas$begin_path(ctx);
        })();
        (() => {
          {
            const $t30059 = game.ball_x;
            {
              const $t30060 = game.ball_y;
              return Canvas$arc(ctx, $t30059, $t30060, 6., 0., 6.28318530718);
            }
          }
        })();
        (() => {
          return Canvas$fill(ctx);
        })();
        {
          const $t30063 = (() => {
            {
              const $t30062 = game.shield;
              return ($t30062 > 0);
            }
          })();
          if ($t30063 === true) {
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
                  const $t30064 = game.ball_x;
                  {
                    const $t30065 = game.ball_y;
                    return Canvas$arc(ctx, $t30064, $t30065, 10., 0., 6.28318530718);
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
        break;
      }
      case "Some": {
        const $f30076 = $t30058._0;
        {
          const sprite = (() => {
            return $f30076;
          })();
          (() => {
            return Canvas$save(ctx);
          })();
          (() => {
            {
              const $t30067 = game.ball_x;
              {
                const $t30068 = game.ball_y;
                return Canvas$translate(ctx, $t30067, $t30068);
              }
            }
          })();
          (() => {
            {
              const $t30070 = (() => {
                {
                  const $t30069 = ball_heading(game);
                  return ($t30069 + 1.5707963);
                }
              })();
              return Canvas$rotate(ctx, $t30070);
            }
          })();
          (() => {
            {
              const $t30071 = (0. - 16.);
              {
                const $t30072 = (0. - 24.);
                return Canvas$draw_node(ctx, sprite, $t30071, $t30072);
              }
            }
          })();
          (() => {
            {
              const $t30074 = (() => {
                {
                  const $t30073 = game.shield;
                  return ($t30073 > 0);
                }
              })();
              if ($t30074 === true) {
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
                      const $t30075 = fx.shield_hull;
                      return draw_hull_points(ctx, $t30075, true);
                    }
                  })();
                  (() => {
                    return Canvas$close_path(ctx);
                  })();
                  return Canvas$stroke(ctx);
                })();
              } else {
                return {  };
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
      const $t30081 = (cx - 60.);
      {
        const $t30083 = (() => {
          {
            const $t30082 = (view_h / 2.);
            return ($t30082 - 60.);
          }
        })();
        return Canvas$stroke_rect(ctx, $t30081, $t30083, 120., 120.);
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
      let $t30084;
      switch (u.$) {
        case "OffenseWeapon": {
          const $f30077_i10628 = u._0;
          $t30084 = (() => {
            switch ($f30077_i10628.$) {
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
          $t30084 = "Faster Fire";
          break;
        }
        case "DefenseBulletWard": {
          $t30084 = "Bullet Ward";
          break;
        }
        case "DefenseDeflector": {
          $t30084 = "Deflector Plating";
          break;
        }
        case "DefenseShield": {
          $t30084 = "Reinforced Shield";
          break;
        }
        case "SpecialItem": {
          const $f30078_i10629 = u._0;
          $t30084 = (() => {
            switch ($f30078_i10629.$) {
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
          $t30084 = (() => { throw new Error("non-exhaustive pattern match"); })();
          break;
        }
      }
      {
        const $t30085 = (view_h / 2.);
        return Canvas$fill_text(ctx, $t30084, cx, $t30085);
      }
    }
  })();
  (() => {
    return Canvas$set_font(ctx, "10px sans-serif");
  })();
  {
    let $t30086;
    switch (u.$) {
      case "OffenseWeapon": {
        const $f30079_i10625 = u._0;
        $t30086 = (() => {
          switch ($f30079_i10625.$) {
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
        $t30086 = "Faster shooting";
        break;
      }
      case "DefenseBulletWard": {
        $t30086 = "Blocks one enemy shot";
        break;
      }
      case "DefenseDeflector": {
        $t30086 = "Bounces asteroids";
        break;
      }
      case "DefenseShield": {
        $t30086 = "Adds a shield charge";
        break;
      }
      case "SpecialItem": {
        const $f30080_i10626 = u._0;
        $t30086 = (() => {
          switch ($f30080_i10626.$) {
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
        $t30086 = (() => { throw new Error("non-exhaustive pattern match"); })();
        break;
      }
    }
    {
      const $t30088 = (() => {
        {
          const $t30087 = (view_h / 2.);
          return ($t30087 + 20.);
        }
      })();
      return Canvas$fill_text(ctx, $t30086, cx, $t30088);
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
      const $f30093 = choices._0;
      const $f30094 = choices._1;
      {
        const rest = (() => {
          return $f30094;
        })();
        {
          const u = (() => {
            return $f30093;
          })();
          {
            const col_w = (view_w / 3.);
            (() => {
              {
                const $t30091 = (() => {
                  {
                    const $t30090 = (() => {
                      {
                        const $t30089 = i;
                        return ($t30089 + 0.5);
                      }
                    })();
                    return (col_w * $t30090);
                  }
                })();
                {
                  const $rc_853 = (() => {
                    return draw_milestone_card(ctx, u, $t30091, view_h);
                  })();
                  return $rc_853;
                }
              }
            })();
            {
              const $t30092 = (i + 1);
              return draw_milestone_cards(ctx, rest, view_w, view_h, $t30092);
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
      const $t30100 = (() => {
        {
          const $t30099 = game.score;
          return String($t30099);
        }
      })();
      return Canvas$fill_text(ctx, $t30100, 14., 28.);
    }
  })();
  (() => {
    return Canvas$set_text_align(ctx, "right");
  })();
  (() => {
    {
      const $t30103 = (() => {
        {
          const $t30102 = (() => {
            {
              const $t30101 = game.best;
              return String($t30101);
            }
          })();
          {
            const $rc_864 = ("best " + $t30102);
            return $rc_864;
          }
        }
      })();
      {
        const $t30105 = (() => {
          {
            const $t30104 = game.view_w;
            return ($t30104 - 14.);
          }
        })();
        return Canvas$fill_text(ctx, $t30103, $t30105, 28.);
      }
    }
  })();
  (() => {
    {
      const $t30107 = (() => {
        {
          const $t30106 = game.multiplier;
          return ($t30106 > 1);
        }
      })();
      if ($t30107 === true) {
        return (() => {
          (() => {
            return Canvas$set_text_align(ctx, "left");
          })();
          {
            const $t30110 = (() => {
              {
                const $t30109 = (() => {
                  {
                    const $t30108 = game.multiplier;
                    return String($t30108);
                  }
                })();
                {
                  const $rc_863 = ("x" + $t30109);
                  return $rc_863;
                }
              }
            })();
            return Canvas$fill_text(ctx, $t30110, 14., 52.);
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
      const $t30113 = (() => {
        {
          const $t30112 = (() => {
            {
              const $t30111 = Perihelion$Core$active_weapon(game);
              return { $: "OffenseWeapon", _0: $t30111 };
            }
          })();
          {
            let $rc_862;
            switch ($t30112.$) {
              case "OffenseWeapon": {
                const $f30077_i10634 = $t30112._0;
                $rc_862 = (() => {
                  switch ($f30077_i10634.$) {
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
                $rc_862 = "Faster Fire";
                break;
              }
              case "DefenseBulletWard": {
                $rc_862 = "Bullet Ward";
                break;
              }
              case "DefenseDeflector": {
                $rc_862 = "Deflector Plating";
                break;
              }
              case "DefenseShield": {
                $rc_862 = "Reinforced Shield";
                break;
              }
              case "SpecialItem": {
                const $f30078_i10635 = $t30112._0;
                $rc_862 = (() => {
                  switch ($f30078_i10635.$) {
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
                $rc_862 = (() => { throw new Error("non-exhaustive pattern match"); })();
                break;
              }
            }
            return $rc_862;
          }
        }
      })();
      {
        const $t30115 = (() => {
          {
            const $t30114 = game.view_h;
            return ($t30114 - 60.);
          }
        })();
        return Canvas$fill_text(ctx, $t30113, 14., $t30115);
      }
    }
  })();
  (() => {
    {
      const $t30116 = game.special;
      switch ($t30116.$) {
        case "None": {
          return {  };
          break;
        }
        case "Some": {
          const $f30125 = $t30116._0;
          {
            const k = (() => {
              return $f30125;
            })();
            {
              const $t30122 = (() => {
                {
                  const $t30119 = (() => {
                    {
                      const $t30118 = (() => {
                        {
                          const $t30117 = { $: "SpecialItem", _0: k };
                          {
                            let $rc_861;
                            switch ($t30117.$) {
                              case "OffenseWeapon": {
                                const $f30077_i10631 = $t30117._0;
                                $rc_861 = (() => {
                                  switch ($f30077_i10631.$) {
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
                                $rc_861 = "Faster Fire";
                                break;
                              }
                              case "DefenseBulletWard": {
                                $rc_861 = "Bullet Ward";
                                break;
                              }
                              case "DefenseDeflector": {
                                $rc_861 = "Deflector Plating";
                                break;
                              }
                              case "DefenseShield": {
                                $rc_861 = "Reinforced Shield";
                                break;
                              }
                              case "SpecialItem": {
                                const $f30078_i10632 = $t30117._0;
                                $rc_861 = (() => {
                                  switch ($f30078_i10632.$) {
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
                                $rc_861 = (() => { throw new Error("non-exhaustive pattern match"); })();
                                break;
                              }
                            }
                            return $rc_861;
                          }
                        }
                      })();
                      {
                        const $rc_860 = ($t30118 + " x");
                        return $rc_860;
                      }
                    }
                  })();
                  {
                    const $t30121 = (() => {
                      {
                        const $t30120 = game.special_charges;
                        return String($t30120);
                      }
                    })();
                    {
                      const $rc_859 = ($t30119 + $t30121);
                      return $rc_859;
                    }
                  }
                }
              })();
              {
                const $t30124 = (() => {
                  {
                    const $t30123 = game.view_h;
                    return ($t30123 - 40.);
                  }
                })();
                return Canvas$fill_text(ctx, $t30122, 14., $t30124);
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
        const $t30130 = (() => {
          {
            const $t30127 = (() => {
              {
                const $t30126 = game.bullet_ward;
                if ($t30126 === true) {
                  return "ward ";
                } else {
                  return "";
                }
              }
            })();
            {
              const $t30129 = (() => {
                {
                  const $t30128 = game.deflector_plating;
                  if ($t30128 === true) {
                    return "deflect ";
                  } else {
                    return "";
                  }
                }
              })();
              {
                const $rc_858 = ($t30127 + $t30129);
                return $rc_858;
              }
            }
          }
        })();
        {
          const $t30135 = (() => {
            {
              const $t30132 = (() => {
                {
                  const $t30131 = game.shield;
                  return ($t30131 > 0);
                }
              })();
              if ($t30132 === true) {
                return (() => {
                  {
                    const $t30134 = (() => {
                      {
                        const $t30133 = game.shield;
                        return String($t30133);
                      }
                    })();
                    {
                      const $rc_857 = ("shield x" + $t30134);
                      return $rc_857;
                    }
                  }
                })();
              } else {
                return "";
              }
            }
          })();
          {
            const $rc_856 = ($t30130 + $t30135);
            return $rc_856;
          }
        }
      }
    })();
    (() => {
      {
        const $t30137 = (() => {
          {
            const $t30136 = game.view_h;
            return ($t30136 - 20.);
          }
        })();
        return Canvas$fill_text(ctx, defense_tags, 14., $t30137);
      }
    })();
    (() => {
      return Canvas$set_text_align(ctx, "center");
    })();
    {
      const $t30138 = game.phase;
      switch ($t30138.$) {
        case "Ready": {
          (() => {
            return Canvas$set_font(ctx, "22px sans-serif");
          })();
          {
            const $t30140 = (() => {
              {
                const $t30139 = game.view_w;
                return ($t30139 / 2.);
              }
            })();
            {
              const $t30142 = (() => {
                {
                  const $t30141 = game.view_h;
                  return ($t30141 / 2.);
                }
              })();
              return Canvas$fill_text(ctx, "tap to start", $t30140, $t30142);
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
              const $t30146 = (() => {
                {
                  const $t30145 = (() => {
                    {
                      const $t30144 = (() => {
                        {
                          const $t30143 = game.score;
                          return String($t30143);
                        }
                      })();
                      {
                        const $rc_855 = ("score " + $t30144);
                        return $rc_855;
                      }
                    }
                  })();
                  {
                    const $rc_854 = ($t30145 + " — tap to retry");
                    return $rc_854;
                  }
                }
              })();
              {
                const $t30148 = (() => {
                  {
                    const $t30147 = game.view_w;
                    return ($t30147 / 2.);
                  }
                })();
                {
                  const $t30150 = (() => {
                    {
                      const $t30149 = game.view_h;
                      return ($t30149 / 2.);
                    }
                  })();
                  return Canvas$fill_text(ctx, $t30146, $t30148, $t30150);
                }
              }
            }
          })();
          {
            const $t30151 = game.runs;
            {
              const $t30152 = game.view_w;
              {
                const $t30155 = (() => {
                  {
                    const $t30154 = (() => {
                      {
                        const $t30153 = game.view_h;
                        return ($t30153 / 2.);
                      }
                    })();
                    return ($t30154 + 36.);
                  }
                })();
                return draw_runs(ctx, $t30151, $t30152, $t30155, 0);
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
              const $t30157 = (() => {
                {
                  const $t30156 = game.view_w;
                  return ($t30156 / 2.);
                }
              })();
              {
                const $t30160 = (() => {
                  {
                    const $t30159 = (() => {
                      {
                        const $t30158 = game.view_h;
                        return ($t30158 / 2.);
                      }
                    })();
                    return ($t30159 - 90.);
                  }
                })();
                return Canvas$fill_text(ctx, "Choose an upgrade", $t30157, $t30160);
              }
            }
          })();
          {
            const $t30161 = game.milestone_choices;
            {
              const $t30162 = game.view_w;
              {
                const $t30163 = game.view_h;
                return draw_milestone_cards(ctx, $t30161, $t30162, $t30163, 0);
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
      const $t30164 = game.view_w;
      {
        const $t30165 = game.view_h;
        return Canvas$fill_rect(ctx, 0., 0., $t30164, $t30165);
      }
    }
  })();
  {
    const seedf = (() => {
      {
        const $t30166 = game.seed;
        return $t30166;
      }
    })();
    (() => {
      {
        const $t30167 = fx.gl;
        return draw_nebula_gl(ctx, $t30167, game, seedf);
      }
    })();
    (() => {
      return Canvas$save(ctx);
    })();
    (() => {
      {
        const $t30169 = (() => {
          {
            const $t30168 = game.camera_x;
            return (0. - $t30168);
          }
        })();
        {
          const $t30171 = (() => {
            {
              const $t30170 = game.camera_y;
              return (0. - $t30170);
            }
          })();
          return Canvas$translate(ctx, $t30169, $t30171);
        }
      }
    })();
    (() => {
      {
        const $t30172 = game.camera_x;
        {
          const $t30173 = game.camera_y;
          {
            const $t30174 = game.view_w;
            {
              const $t30175 = game.view_h;
              {
                const $t30176 = fx.t;
                return draw_starfield(ctx, $t30172, $t30173, $t30174, $t30175, seedf, $t30176);
              }
            }
          }
        }
      }
    })();
    {
      const aim = (() => {
        {
          const $t30177 = game.mode;
          switch ($t30177.$) {
            case "Flying": {
              const $f30181 = $t30177._0;
              const $f30182 = $t30177._1;
              {
                const vy = (() => {
                  return $f30182;
                })();
                {
                  const vx = (() => {
                    return $f30181;
                  })();
                  {
                    const $t30180 = (() => {
                      {
                        const $t30178 = game.ball_x;
                        {
                          const $t30179 = game.ball_y;
                          return { _0: $t30178, _1: $t30179, _2: vx, _3: vy };
                        }
                      }
                    })();
                    return { $: "Some", _0: $t30180 };
                  }
                }
              }
              break;
            }
            case "Orbiting": {
              const $f30187 = $t30177._0;
              const $f30188 = $t30177._1;
              const $f30189 = $t30177._2;
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
          const $t30198 = game.stars;
          {
            const $t30199 = game.camera_y;
            {
              const $t30200 = game.view_h;
              {
                const $t30201 = fx.t;
                {
                  const $rc_866 = (() => {
                    return draw_stars(ctx, $t30198, $t30199, $t30200, $t30201, aim);
                  })();
                  return $rc_866;
                }
              }
            }
          }
        }
      })();
      (() => {
        {
          const $t30202 = Perihelion$Core$active_weapon(game);
          switch ($t30202.$) {
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
          const $t30205 = game.mode;
          switch ($t30205.$) {
            case "Orbiting": {
              const $f30213 = $t30205._0;
              const $f30214 = $t30205._1;
              const $f30215 = $t30205._2;
              {
                const angle = (() => {
                  return $f30215;
                })();
                {
                  const ring = (() => {
                    return $f30214;
                  })();
                  {
                    const idx = (() => {
                      return $f30213;
                    })();
                    {
                      const $t30206 = game.special;
                      switch ($t30206.$) {
                        case "Some": {
                          const $f30208 = $t30206._0;
                          switch ($f30208.$) {
                            case "TrajectoryPreview": {
                              {
                                const $t30207 = Perihelion$Core$predict_trajectory(game, idx, ring, angle);
                                {
                                  const $rc_865 = (() => {
                                    return draw_trajectory_preview(ctx, $t30207);
                                  })();
                                  return $rc_865;
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
              const $f30224 = $t30205._0;
              const $f30225 = $t30205._1;
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
          const $t30230 = fx.flash;
          return draw_flash(ctx, $t30230);
        }
      })();
      (() => {
        {
          const $t30231 = game.asteroids;
          return draw_asteroids(ctx, $t30231);
        }
      })();
      (() => {
        {
          const $t30232 = game.ships;
          return draw_ships(ctx, $t30232);
        }
      })();
      (() => {
        {
          const $t30233 = game.player_shots;
          return draw_shots(ctx, $t30233, "#ffffff", 3.);
        }
      })();
      (() => {
        {
          const $t30234 = game.enemy_shots;
          return draw_shots(ctx, $t30234, "#8a8a94", 2.5);
        }
      })();
      (() => {
        {
          const $t30235 = game.pickups;
          return draw_pickups(ctx, $t30235);
        }
      })();
      (() => {
        {
          const $t30236 = fx.trail;
          return draw_trail(ctx, $t30236, 0, 22);
        }
      })();
      (() => {
        {
          const $t30238 = fx.particles;
          return draw_particles(ctx, $t30238);
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
    const $t30240 = (() => {
      {
        const $t30239 = Perihelion$Combat$starkiller_target_idx(game);
        return Perihelion$Core$star_at(game, $t30239);
      }
    })();
    switch ($t30240.$) {
      case "None": {
        return {  };
        break;
      }
      case "Some": {
        const $f30246 = $t30240._0;
        {
          const s = $f30246;
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
              const $t30241 = s.x;
              {
                const $t30242 = s.y;
                {
                  const $t30244 = (() => {
                    {
                      const $t30243 = s.capture_radius;
                      return ($t30243 + 12.);
                    }
                  })();
                  return Canvas$arc(ctx, $t30241, $t30242, $t30244, 0., 6.28318530718);
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
      const $f30252 = points._0;
      const $f30253 = points._1;
      {
        const rest = (() => {
          return $f30253;
        })();
        {
          const pt = (() => {
            return $f30252;
          })();
          {
            const x = pt._0;
            {
              const y = pt._1;
              (() => {
                {
                  const $t30248 = (() => {
                    {
                      const $t30247 = march_int_mod(i, 3);
                      return ($t30247 === 0);
                    }
                  })();
                  if ($t30248 === true) {
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
                const $t30250 = (i + 1);
                return draw_trajectory_dots(ctx, rest, $t30250);
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
    const $t30264 = (() => {
      {
        const $t30261 = (() => {
          {
            const $t30260 = game.view_w;
            return (w === $t30260);
          }
        })();
        {
          const $t30263 = (() => {
            {
              const $t30262 = game.view_h;
              return (h === $t30262);
            }
          })();
          return ($t30261 && $t30263);
        }
      }
    })();
    if ($t30264 === true) {
      return {  };
    } else {
      return (() => {
        (() => {
          {
            const $t30266 = (() => {
              {
                const $t30265 = Math.trunc(w);
                return String($t30265);
              }
            })();
            return Dom$set_attr(el, "width", $t30266);
          }
        })();
        {
          const $t30268 = (() => {
            {
              const $t30267 = Math.trunc(h);
              return String($t30267);
            }
          })();
          return Dom$set_attr(el, "height", $t30268);
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
      const $f30269 = gl_opt._0;
      {
        const gl = $f30269;
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
          const $t30283 = (() => {
            {
              const $t30281 = (() => {
                {
                  const $t30280 = game.phase;
                  switch ($t30280.$) {
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
                const $t30282 = (() => {
                  {
                    const $t30258_i4212 = g2.phase;
                    switch ($t30258_i4212.$) {
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
                return ($t30281 && $t30282);
              }
            }
          })();
          if ($t30283 === true) {
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
          const $t30288 = (() => {
            {
              const $t30285 = (() => {
                {
                  const $t30284 = game.mode;
                  switch ($t30284.$) {
                    case "Orbiting": {
                      const $f30270_i4208 = $t30284._0;
                      const $f30271_i4209 = $t30284._1;
                      const $f30272_i4210 = $t30284._2;
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
                const $t30287 = (() => {
                  {
                    const $t30286 = g2.mode;
                    switch ($t30286.$) {
                      case "Flying": {
                        const $f30273_i4205 = $t30286._0;
                        const $f30274_i4206 = $t30286._1;
                        return true;
                        break;
                      }
                      default: {
                        return false;
                      }
                    }
                  }
                })();
                return ($t30285 && $t30287);
              }
            }
          })();
          if ($t30288 === true) {
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
          const $t30289 = g2.capture_flash;
          switch ($t30289.$) {
            case "None": {
              return {  };
              break;
            }
            case "Some": {
              const $f30290 = $t30289._0;
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
          const $t30295 = (() => {
            {
              const $t30292 = (() => {
                {
                  const $t30291 = g2.player_shots;
                  {
                    const go_i4202 = { $: "$Clo_go$4845", _0: go$apply$4845 };
                    return go$apply$4845(go_i4202, $t30291, 0);
                  }
                }
              })();
              {
                const $t30294 = (() => {
                  {
                    const $t30293 = game.player_shots;
                    {
                      const go_i4200 = { $: "$Clo_go$4845", _0: go$apply$4845 };
                      return go$apply$4845(go_i4200, $t30293, 0);
                    }
                  }
                })();
                return ($t30292 > $t30294);
              }
            }
          })();
          if ($t30295 === true) {
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
          const $t30300 = (() => {
            {
              const $t30297 = (() => {
                {
                  const $t30296 = g2.enemy_shots;
                  {
                    const go_i4198 = { $: "$Clo_go$4845", _0: go$apply$4845 };
                    return go$apply$4845(go_i4198, $t30296, 0);
                  }
                }
              })();
              {
                const $t30299 = (() => {
                  {
                    const $t30298 = game.enemy_shots;
                    {
                      const go_i4196 = { $: "$Clo_go$4845", _0: go$apply$4845 };
                      return go$apply$4845(go_i4196, $t30298, 0);
                    }
                  }
                })();
                return ($t30297 > $t30299);
              }
            }
          })();
          if ($t30300 === true) {
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
          const $t30303 = (() => {
            {
              const $t30302 = (() => {
                {
                  const $t30301 = g2.fx_bursts;
                  switch ($t30301.$) {
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
              return (!$t30302);
            }
          })();
          if ($t30303 === true) {
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
          const $t30308 = (() => {
            {
              const $t30305 = (() => {
                {
                  const $t30304 = g2.ships;
                  {
                    const go_i4193 = { $: "$Clo_go$4793", _0: go$apply$4793 };
                    return go$apply$4793(go_i4193, $t30304, 0);
                  }
                }
              })();
              {
                const $t30307 = (() => {
                  {
                    const $t30306 = game.ships;
                    {
                      const go_i4191 = { $: "$Clo_go$4793", _0: go$apply$4793 };
                      return go$apply$4793(go_i4191, $t30306, 0);
                    }
                  }
                })();
                return ($t30305 < $t30307);
              }
            }
          })();
          if ($t30308 === true) {
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
          const $t30313 = (() => {
            {
              const $t30310 = (() => {
                {
                  const $t30309 = game.shield;
                  return ($t30309 === 0);
                }
              })();
              {
                const $t30312 = (() => {
                  {
                    const $t30311 = g2.shield;
                    return ($t30311 > 0);
                  }
                })();
                return ($t30310 && $t30312);
              }
            }
          })();
          if ($t30313 === true) {
            return (() => {
              return Audio$beep(actx, 700., 0.06, "sine");
            })();
          } else {
            return {  };
          }
        }
      })();
      {
        const $t30316 = (() => {
          {
            const $t30314 = (() => {
              {
                const $t30258_i4189 = game.phase;
                switch ($t30258_i4189.$) {
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
              const $t30315 = (() => {
                {
                  const $t30259_i4187 = g2.phase;
                  switch ($t30259_i4187.$) {
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
              return ($t30314 && $t30315);
            }
          }
        })();
        if ($t30316 === true) {
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
      const $f30322 = taps._0;
      const $f30323 = taps._1;
      {
        const tap = (() => {
          return $f30322;
        })();
        {
          const tx = tap._0;
          {
            const col_w = (view_w / 3.);
            {
              const idx = (() => {
                {
                  const $t30318 = (() => {
                    {
                      const $t30317 = tx;
                      return ($t30317 / col_w);
                    }
                  })();
                  return Math.trunc($t30318);
                }
              })();
              {
                const $t30320 = (() => {
                  {
                    const $t30319 = (idx > 2);
                    if ($t30319 === true) {
                      return 2;
                    } else {
                      return idx;
                    }
                  }
                })();
                return { $: "Some", _0: $t30320 };
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
          const $p30347 = dom_window_size();
          {
            const win_w = $p30347._0;
            {
              const win_h = $p30347._1;
              {
                const view_w = win_w;
                {
                  const view_h = win_h;
                  (() => {
                    return resize_canvas(el, game, view_w, view_h);
                  })();
                  (() => {
                    {
                      const $t30328 = fx.gl;
                      return resize_gl($t30328, view_w, view_h);
                    }
                  })();
                  {
                    const g2 = (() => {
                      {
                        const $t30329 = game.phase;
                        switch ($t30329.$) {
                          case "Milestone": {
                            {
                              const $jp_clo30335 = (() => {
                                return { $: "$Clo_$jp30334$3835", _0: $jp30334$apply$3835, _1: cursor, _2: game, _3: keys, _4: taps, _5: view_h, _6: view_w };
                              })();
                              {
                                const $t30330 = (() => {
                                  {
                                    const $t28462_i4224 = { $: "$Clo_$lam28459$3739", _0: $lam28459$apply$3739 };
                                    return List$any$List_String$Fn_String_Bool(keys, $t28462_i4224);
                                  }
                                })();
                                if ($t30330 === true) {
                                  return (() => {
                                    {
                                      const $rc_867 = (() => {
                                        return Perihelion$Core$update(game, taps, keys, cursor, view_w, view_h, 0.0166667);
                                      })();
                                      return $rc_867;
                                    }
                                  })();
                                } else {
                                  return (() => {
                                    {
                                      const $t30332 = (() => {
                                        {
                                          const $rc_868 = milestone_tap_choice(taps, view_w, view_h);
                                          return $rc_868;
                                        }
                                      })();
                                      return Perihelion$Core$pick_milestone(game, $t30332);
                                    }
                                  })();
                                }
                              }
                            }
                            break;
                          }
                          default: {
                            {
                              const $rc_869 = (() => {
                                return Perihelion$Core$update(game, taps, keys, cursor, view_w, view_h, 0.0166667);
                              })();
                              return $rc_869;
                            }
                          }
                        }
                      }
                    })();
                    {
                      const muted2 = (() => {
                        {
                          const $t30336 = fx.muted;
                          {
                            const $t30279_i4222 = (() => {
                              {
                                const $t30278_i4221 = { $: "$Clo_$lam30275$3833", _0: $lam30275$apply$3833 };
                                return List$any$List_String$Fn_String_Bool(keys, $t30278_i4221);
                              }
                            })();
                            if ($t30279_i4222 === true) {
                              return (!$t30336);
                            } else {
                              return $t30336;
                            }
                          }
                        }
                      })();
                      (() => {
                        {
                          const $t30337 = fx.actx;
                          return play_sfx($t30337, muted2, game, g2);
                        }
                      })();
                      {
                        const fx1 = step_fx(fx, g2, 0.0166667);
                        {
                          const fx2 = ({ ...fx1, muted: muted2 });
                          (() => {
                            {
                              const $t30341 = (() => {
                                {
                                  const $t30339 = (() => {
                                    {
                                      const $t30258_i4218 = game.phase;
                                      switch ($t30258_i4218.$) {
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
                                    const $t30340 = (() => {
                                      {
                                        const $t30259_i4216 = g2.phase;
                                        switch ($t30259_i4216.$) {
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
                                    return ($t30339 && $t30340);
                                  }
                                }
                              })();
                              if ($t30341 === true) {
                                return (() => {
                                  {
                                    const $t30344 = (() => {
                                      {
                                        const $t30342 = g2.best;
                                        {
                                          const $t30343 = g2.runs;
                                          return Perihelion$Core$encode_save($t30342, $t30343);
                                        }
                                      }
                                    })();
                                    return Dom$store_set("perihelion.v1", $t30344);
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
                            const $t30346 = { $: "$Clo_$lam30345$3836", _0: $lam30345$apply$3836, _1: ctx, _2: el, _3: fx2, _4: g2 };
                            return Dom$on_frame($t30346);
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
    const $p30353 = dom_window_size();
    {
      const win_w = $p30353._0;
      {
        const win_h = $p30353._1;
        {
          const view_w = win_w;
          {
            const view_h = win_h;
            (() => {
              {
                const $t30348 = String(win_w);
                return Dom$set_attr(node, "width", $t30348);
              }
            })();
            (() => {
              {
                const $t30349 = String(win_h);
                return Dom$set_attr(node, "height", $t30349);
              }
            })();
            {
              const $t30351 = (() => {
                {
                  const $t30350 = boot_seed();
                  return Perihelion$Core$fresh_run($t30350, best, runs, view_w, view_h);
                }
              })();
              {
                const $t30352 = fx_init();
                return tick(ctx, node, $t30351, $t30352);
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
    const $t30354 = Dom$find("game-canvas");
    switch ($t30354.$) {
      case "None": {
        return println$String("no #game-canvas found");
        break;
      }
      case "Some": {
        const $f30362 = $t30354._0;
        {
          const node = $f30362;
          {
            const $t30355 = (() => {
              return Canvas$get_context(node);
            })();
            switch ($t30355.$) {
              case "None": {
                return println$String("2d context unavailable");
                break;
              }
              case "Some": {
                const $f30361 = $t30355._0;
                {
                  const ctx = $f30361;
                  {
                    const saved = (() => {
                      {
                        const $t30356 = Dom$store_get("perihelion.v1");
                        switch ($t30356.$) {
                          case "None": {
                            return "";
                            break;
                          }
                          case "Some": {
                            const $f30357 = $t30356._0;
                            {
                              const sv = $f30357;
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
                      const $p30360 = (() => {
                        {
                          const $rc_870 = Perihelion$Core$decode_save(saved);
                          return $rc_870;
                        }
                      })();
                      {
                        const best = $p30360._0;
                        {
                          const runs = $p30360._1;
                          {
                            const $t30359 = (() => {
                              return { $: "$Clo_$lam30358$3837", _0: $lam30358$apply$3837, _1: best, _2: ctx, _3: node, _4: runs };
                            })();
                            return Dom$on_frame($t30359);
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
        const $rc_877 = march_print(x);
        return $rc_877;
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
            const $t28050_i10881 = s.x;
            {
              const $t28051_i10882 = s.y;
              {
                const $t27359_i10079_i10887 = (() => {
                  {
                    const dx_i3632_i10075_i10883 = ($t28065 - $t28050_i10881);
                    {
                      const dy_i3633_i10076_i10884 = ($t28066 - $t28051_i10882);
                      {
                        const $t27357_i3634_i10077_i10885 = (dx_i3632_i10075_i10883 * dx_i3632_i10075_i10883);
                        {
                          const $t27358_i3635_i10078_i10886 = (dy_i3633_i10076_i10884 * dy_i3633_i10076_i10884);
                          return ($t27357_i3634_i10077_i10885 + $t27358_i3635_i10078_i10886);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10082_i10890 = (() => {
                    {
                      const $t27360_i10080_i10888 = (3. + $t28067);
                      {
                        const $t27361_i10081_i10889 = (3. + $t28067);
                        return ($t27360_i10080_i10888 * $t27361_i10081_i10889);
                      }
                    }
                  })();
                  return ($t27359_i10079_i10887 <= $t27362_i10082_i10890);
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
            const $t28050_i10895 = s.x;
            {
              const $t28051_i10896 = s.y;
              {
                const $t27359_i10079_i10901 = (() => {
                  {
                    const dx_i3632_i10075_i10897 = ($t28074 - $t28050_i10895);
                    {
                      const dy_i3633_i10076_i10898 = ($t28075 - $t28051_i10896);
                      {
                        const $t27357_i3634_i10077_i10899 = (dx_i3632_i10075_i10897 * dx_i3632_i10075_i10897);
                        {
                          const $t27358_i3635_i10078_i10900 = (dy_i3633_i10076_i10898 * dy_i3633_i10076_i10898);
                          return ($t27357_i3634_i10077_i10899 + $t27358_i3635_i10078_i10900);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10082_i10904 = (() => {
                    {
                      const $t27360_i10080_i10902 = (3. + $t28076);
                      {
                        const $t27361_i10081_i10903 = (3. + $t28076);
                        return ($t27360_i10080_i10902 * $t27361_i10081_i10903);
                      }
                    }
                  })();
                  return ($t27359_i10079_i10901 <= $t27362_i10082_i10904);
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
      const $t28153_i10907 = p.x;
      {
        const $t28154_i10908 = p.y;
        {
          const $t28156_i10909 = game.ball_x;
          {
            const $t28157_i10910 = game.ball_y;
            {
              const $t27359_i10111_i10915 = (() => {
                {
                  const dx_i3632_i10107_i10911 = ($t28156_i10909 - $t28153_i10907);
                  {
                    const dy_i3633_i10108_i10912 = ($t28157_i10910 - $t28154_i10908);
                    {
                      const $t27357_i3634_i10109_i10913 = (dx_i3632_i10107_i10911 * dx_i3632_i10107_i10911);
                      {
                        const $t27358_i3635_i10110_i10914 = (dy_i3633_i10108_i10912 * dy_i3633_i10108_i10912);
                        return ($t27357_i3634_i10109_i10913 + $t27358_i3635_i10110_i10914);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10114_i10918 = (() => {
                  {
                    const $t27360_i10112_i10916 = (12. + 6.);
                    {
                      const $t27361_i10113_i10917 = (12. + 6.);
                      return ($t27360_i10112_i10916 * $t27361_i10113_i10917);
                    }
                  }
                })();
                return ($t27359_i10111_i10915 <= $t27362_i10114_i10918);
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
          const $t28153_i10921 = q.x;
          {
            const $t28154_i10922 = q.y;
            {
              const $t28156_i10923 = game.ball_x;
              {
                const $t28157_i10924 = game.ball_y;
                {
                  const $t27359_i10111_i10929 = (() => {
                    {
                      const dx_i3632_i10107_i10925 = ($t28156_i10923 - $t28153_i10921);
                      {
                        const dy_i3633_i10108_i10926 = ($t28157_i10924 - $t28154_i10922);
                        {
                          const $t27357_i3634_i10109_i10927 = (dx_i3632_i10107_i10925 * dx_i3632_i10107_i10925);
                          {
                            const $t27358_i3635_i10110_i10928 = (dy_i3633_i10108_i10926 * dy_i3633_i10108_i10926);
                            return ($t27357_i3634_i10109_i10927 + $t27358_i3635_i10110_i10928);
                          }
                        }
                      }
                    }
                  })();
                  {
                    const $t27362_i10114_i10932 = (() => {
                      {
                        const $t27360_i10112_i10930 = (12. + 6.);
                        {
                          const $t27361_i10113_i10931 = (12. + 6.);
                          return ($t27360_i10112_i10930 * $t27361_i10113_i10931);
                        }
                      }
                    })();
                    return ($t27359_i10111_i10929 <= $t27362_i10114_i10932);
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
      const $t28200_i11056 = game.ball_x;
      {
        const $t28201_i11057 = game.ball_y;
        {
          const $t28050_i10654_i11058 = s.x;
          {
            const $t28051_i10655_i11059 = s.y;
            {
              const $t27359_i10079_i10660_i11064 = (() => {
                {
                  const dx_i3632_i10075_i10656_i11060 = ($t28200_i11056 - $t28050_i10654_i11058);
                  {
                    const dy_i3633_i10076_i10657_i11061 = ($t28201_i11057 - $t28051_i10655_i11059);
                    {
                      const $t27357_i3634_i10077_i10658_i11062 = (dx_i3632_i10075_i10656_i11060 * dx_i3632_i10075_i10656_i11060);
                      {
                        const $t27358_i3635_i10078_i10659_i11063 = (dy_i3633_i10076_i10657_i11061 * dy_i3633_i10076_i10657_i11061);
                        return ($t27357_i3634_i10077_i10658_i11062 + $t27358_i3635_i10078_i10659_i11063);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10082_i10663_i11067 = (() => {
                  {
                    const $t27360_i10080_i10661_i11065 = (3. + 6.);
                    {
                      const $t27361_i10081_i10662_i11066 = (3. + 6.);
                      return ($t27360_i10080_i10661_i11065 * $t27361_i10081_i10662_i11066);
                    }
                  }
                })();
                return ($t27359_i10079_i10660_i11064 <= $t27362_i10082_i10663_i11067);
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
          const $t28200_i11070 = game.ball_x;
          {
            const $t28201_i11071 = game.ball_y;
            {
              const $t28050_i10654_i11072 = s.x;
              {
                const $t28051_i10655_i11073 = s.y;
                {
                  const $t27359_i10079_i10660_i11078 = (() => {
                    {
                      const dx_i3632_i10075_i10656_i11074 = ($t28200_i11070 - $t28050_i10654_i11072);
                      {
                        const dy_i3633_i10076_i10657_i11075 = ($t28201_i11071 - $t28051_i10655_i11073);
                        {
                          const $t27357_i3634_i10077_i10658_i11076 = (dx_i3632_i10075_i10656_i11074 * dx_i3632_i10075_i10656_i11074);
                          {
                            const $t27358_i3635_i10078_i10659_i11077 = (dy_i3633_i10076_i10657_i11075 * dy_i3633_i10076_i10657_i11075);
                            return ($t27357_i3634_i10077_i10658_i11076 + $t27358_i3635_i10078_i10659_i11077);
                          }
                        }
                      }
                    }
                  })();
                  {
                    const $t27362_i10082_i10663_i11081 = (() => {
                      {
                        const $t27360_i10080_i10661_i11079 = (3. + 6.);
                        {
                          const $t27361_i10081_i10662_i11080 = (3. + 6.);
                          return ($t27360_i10080_i10661_i11079 * $t27361_i10081_i10662_i11080);
                        }
                      }
                    })();
                    return ($t27359_i10079_i10660_i11078 <= $t27362_i10082_i10663_i11081);
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
      const $t28194_i10935 = a.x;
      {
        const $t28195_i10936 = a.y;
        {
          const $t28196_i10937 = a.radius;
          {
            const $t28197_i10938 = game.ball_x;
            {
              const $t28198_i10939 = game.ball_y;
              {
                const $t27359_i10139_i10944 = (() => {
                  {
                    const dx_i3632_i10135_i10940 = ($t28197_i10938 - $t28194_i10935);
                    {
                      const dy_i3633_i10136_i10941 = ($t28198_i10939 - $t28195_i10936);
                      {
                        const $t27357_i3634_i10137_i10942 = (dx_i3632_i10135_i10940 * dx_i3632_i10135_i10940);
                        {
                          const $t27358_i3635_i10138_i10943 = (dy_i3633_i10136_i10941 * dy_i3633_i10136_i10941);
                          return ($t27357_i3634_i10137_i10942 + $t27358_i3635_i10138_i10943);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10142_i10947 = (() => {
                    {
                      const $t27360_i10140_i10945 = ($t28196_i10937 + 6.);
                      {
                        const $t27361_i10141_i10946 = ($t28196_i10937 + 6.);
                        return ($t27360_i10140_i10945 * $t27361_i10141_i10946);
                      }
                    }
                  })();
                  return ($t27359_i10139_i10944 <= $t27362_i10142_i10947);
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
      const $t28194_i10950 = a.x;
      {
        const $t28195_i10951 = a.y;
        {
          const $t28196_i10952 = a.radius;
          {
            const $t28197_i10953 = game.ball_x;
            {
              const $t28198_i10954 = game.ball_y;
              {
                const $t27359_i10139_i10959 = (() => {
                  {
                    const dx_i3632_i10135_i10955 = ($t28197_i10953 - $t28194_i10950);
                    {
                      const dy_i3633_i10136_i10956 = ($t28198_i10954 - $t28195_i10951);
                      {
                        const $t27357_i3634_i10137_i10957 = (dx_i3632_i10135_i10955 * dx_i3632_i10135_i10955);
                        {
                          const $t27358_i3635_i10138_i10958 = (dy_i3633_i10136_i10956 * dy_i3633_i10136_i10956);
                          return ($t27357_i3634_i10137_i10957 + $t27358_i3635_i10138_i10958);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10142_i10962 = (() => {
                    {
                      const $t27360_i10140_i10960 = ($t28196_i10952 + 6.);
                      {
                        const $t27361_i10141_i10961 = ($t28196_i10952 + 6.);
                        return ($t27360_i10140_i10960 * $t27361_i10141_i10961);
                      }
                    }
                  })();
                  return ($t27359_i10139_i10959 <= $t27362_i10142_i10962);
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
          const $t28194_i10965 = a.x;
          {
            const $t28195_i10966 = a.y;
            {
              const $t28196_i10967 = a.radius;
              {
                const $t28197_i10968 = game.ball_x;
                {
                  const $t28198_i10969 = game.ball_y;
                  {
                    const $t27359_i10139_i10974 = (() => {
                      {
                        const dx_i3632_i10135_i10970 = ($t28197_i10968 - $t28194_i10965);
                        {
                          const dy_i3633_i10136_i10971 = ($t28198_i10969 - $t28195_i10966);
                          {
                            const $t27357_i3634_i10137_i10972 = (dx_i3632_i10135_i10970 * dx_i3632_i10135_i10970);
                            {
                              const $t27358_i3635_i10138_i10973 = (dy_i3633_i10136_i10971 * dy_i3633_i10136_i10971);
                              return ($t27357_i3634_i10137_i10972 + $t27358_i3635_i10138_i10973);
                            }
                          }
                        }
                      }
                    })();
                    {
                      const $t27362_i10142_i10977 = (() => {
                        {
                          const $t27360_i10140_i10975 = ($t28196_i10967 + 6.);
                          {
                            const $t27361_i10141_i10976 = ($t28196_i10967 + 6.);
                            return ($t27360_i10140_i10975 * $t27361_i10141_i10976);
                          }
                        }
                      })();
                      return ($t27359_i10139_i10974 <= $t27362_i10142_i10977);
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
          const $t28200_i11084 = game.ball_x;
          {
            const $t28201_i11085 = game.ball_y;
            {
              const $t28050_i10654_i11086 = s.x;
              {
                const $t28051_i10655_i11087 = s.y;
                {
                  const $t27359_i10079_i10660_i11092 = (() => {
                    {
                      const dx_i3632_i10075_i10656_i11088 = ($t28200_i11084 - $t28050_i10654_i11086);
                      {
                        const dy_i3633_i10076_i10657_i11089 = ($t28201_i11085 - $t28051_i10655_i11087);
                        {
                          const $t27357_i3634_i10077_i10658_i11090 = (dx_i3632_i10075_i10656_i11088 * dx_i3632_i10075_i10656_i11088);
                          {
                            const $t27358_i3635_i10078_i10659_i11091 = (dy_i3633_i10076_i10657_i11089 * dy_i3633_i10076_i10657_i11089);
                            return ($t27357_i3634_i10077_i10658_i11090 + $t27358_i3635_i10078_i10659_i11091);
                          }
                        }
                      }
                    }
                  })();
                  {
                    const $t27362_i10082_i10663_i11095 = (() => {
                      {
                        const $t27360_i10080_i10661_i11093 = (3. + 6.);
                        {
                          const $t27361_i10081_i10662_i11094 = (3. + 6.);
                          return ($t27360_i10080_i10661_i11093 * $t27361_i10081_i10662_i11094);
                        }
                      }
                    })();
                    return ($t27359_i10079_i10660_i11092 <= $t27362_i10082_i10663_i11095);
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

function $lam29278$apply$3782($clo, u) {
  {
    const owned = (() => {
      return $clo._1;
    })();
    switch (u.$) {
      case "OffenseWeapon": {
        const $f29280 = u._0;
        {
          const k = $f29280;
          {
            const $t29279 = (() => {
              {
                const $t669_i7774 = { $: "$Clo_$lam668$4798", _0: $lam668$apply$4798, _1: k };
                return List$any$List_WeaponKind$Fn_WeaponKind_Bool(owned, $t669_i7774);
              }
            })();
            return (!$t29279);
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
const $lam29278$apply$3782$clo = { _0: ($_, $clo, u) => $lam29278$apply$3782($clo, u) };

function $lam29316$apply$3783($clo, u) {
  {
    const k = (() => {
      return $clo._1;
    })();
    switch (u.$) {
      case "SpecialItem": {
        const $f29317 = u._0;
        {
          const sk = $f29317;
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
const $lam29316$apply$3783$clo = { _0: ($_, $clo, u) => $lam29316$apply$3783($clo, u) };

function $jp29334$apply$3784($clo) {
  {
    const $f29328 = (() => {
      return $clo._1;
    })();
    {
      const $f29329 = (() => {
        return $clo._2;
      })();
      {
        const rest = (() => {
          return $f29329;
        })();
        {
          const k = (() => {
            return $f29328;
          })();
          {
            const $t29326 = { $: "OffenseWeapon", _0: k };
            {
              const $t29327 = Perihelion$Upgrades$owned_weapon_upgrades(rest);
              return { $: "Cons", _0: $t29326, _1: $t29327 };
            }
          }
        }
      }
    }
  }
}
const $jp29334$apply$3784$clo = { _0: ($_, $clo) => $jp29334$apply$3784($clo) };

function $lam29548$apply$3790($clo, p) {
  {
    const dt_s = (() => {
      return $clo._1;
    })();
    {
      const $t29541_i7785 = (() => {
        {
          const $t29538_i7782 = p.x;
          {
            const $t29540_i7784 = (() => {
              {
                const $t29539_i7783 = p.vx;
                return ($t29539_i7783 * dt_s);
              }
            })();
            return ($t29538_i7782 + $t29540_i7784);
          }
        }
      })();
      {
        const $t29545_i7789 = (() => {
          {
            const $t29542_i7786 = p.y;
            {
              const $t29544_i7788 = (() => {
                {
                  const $t29543_i7787 = p.vy;
                  return ($t29543_i7787 * dt_s);
                }
              })();
              return ($t29542_i7786 + $t29544_i7788);
            }
          }
        })();
        {
          const $t29547_i7791 = (() => {
            {
              const $t29546_i7790 = p.life;
              return ($t29546_i7790 - dt_s);
            }
          })();
          return ({ ...p, x: $t29541_i7785, y: $t29545_i7789, life: $t29547_i7791 });
        }
      }
    }
  }
}
const $lam29548$apply$3790$clo = { _0: ($_, $clo, p) => $lam29548$apply$3790($clo, p) };

function $lam29551$apply$3791($clo, p) {
  {
    const $t29552 = p.life;
    return ($t29552 > 0.);
  }
}
const $lam29551$apply$3791$clo = { _0: ($_, $clo, p) => $lam29551$apply$3791($clo, p) };

function $jp29697$apply$3794($clo) {
  {
    const $f29691 = (() => {
      return $clo._1;
    })();
    {
      const $f29692 = (() => {
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
              return $f29692;
            })();
            {
              const o = (() => {
                return $f29691;
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
                  const $t29687 = s.x;
                  {
                    const $t29688 = s.y;
                    {
                      const $t29689 = o.radius;
                      return Canvas$arc(ctx, $t29687, $t29688, $t29689, 0., 6.28318530718);
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
const $jp29697$apply$3794$clo = { _0: ($_, $clo) => $jp29697$apply$3794($clo) };

function $jp29736$apply$3797($clo) {
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
          const $t29735 = dot_count(s);
          return draw_pulse_particle(ctx, s, t, $t29735, 0);
        }
      }
    }
  }
}
const $jp29736$apply$3797$clo = { _0: ($_, $clo) => $jp29736$apply$3797($clo) };

function $jp29738$apply$3798($clo) {
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
          const $t29735 = dot_count(s);
          return draw_pulse_particle(ctx, s, t, $t29735, 0);
        }
      }
    }
  }
}
const $jp29738$apply$3798$clo = { _0: ($_, $clo) => $jp29738$apply$3798($clo) };

function $jp29886$apply$3801($clo) {
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
const $jp29886$apply$3801$clo = { _0: ($_, $clo) => $jp29886$apply$3801($clo) };

function $lam30275$apply$3833($clo, k) {
  {
    const $t30276 = (() => {
      return (k === "m");
    })();
    {
      const $t30277 = (k === "M");
      return ($t30276 || $t30277);
    }
  }
}
const $lam30275$apply$3833$clo = { _0: ($_, $clo, k) => $lam30275$apply$3833($clo, k) };

function $jp30334$apply$3835($clo) {
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
const $jp30334$apply$3835$clo = { _0: ($_, $clo) => $jp30334$apply$3835($clo) };

function $lam30345$apply$3836($clo, _) {
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
const $lam30345$apply$3836$clo = { _0: ($_, $clo, _) => $lam30345$apply$3836($clo, _) };

function $lam30358$apply$3837($clo, _) {
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
const $lam30358$apply$3837$clo = { _0: ($_, $clo, _) => $lam30358$apply$3837($clo, _) };

function go$apply$4098($clo, lst, acc) {
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
const go$apply$4098$clo = { _0: ($_, $clo, lst, acc) => go$apply$4098($clo, lst, acc) };

function go$apply$4325($clo, lst, acc) {
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
const go$apply$4325$clo = { _0: ($_, $clo, lst, acc) => go$apply$4325($clo, lst, acc) };

function go$apply$4765($clo, lst, acc) {
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
const go$apply$4765$clo = { _0: ($_, $clo, lst, acc) => go$apply$4765($clo, lst, acc) };

function go$apply$4767($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8841 = { $: "$Clo_go$5262", _0: go$apply$5262 };
            {
              const $t253_i8842 = { $: "Nil" };
              return go$apply$5262(go_i8841, acc, $t253_i8842);
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
const go$apply$4767$clo = { _0: ($_, $clo, lst, acc) => go$apply$4767($clo, lst, acc) };

function go$apply$4769($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8846 = { $: "$Clo_go$5262", _0: go$apply$5262 };
            {
              const $t253_i8847 = { $: "Nil" };
              return go$apply$5262(go_i8846, acc, $t253_i8847);
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
const go$apply$4769$clo = { _0: ($_, $clo, lst, acc) => go$apply$4769($clo, lst, acc) };

function go$apply$4771($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8851 = { $: "$Clo_go$5264", _0: go$apply$5264 };
            {
              const $t253_i8852 = { $: "Nil" };
              return go$apply$5264(go_i8851, acc, $t253_i8852);
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
const go$apply$4771$clo = { _0: ($_, $clo, lst, acc) => go$apply$4771($clo, lst, acc) };

function go$apply$4773($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8856 = { $: "$Clo_go$5264", _0: go$apply$5264 };
            {
              const $t253_i8857 = { $: "Nil" };
              return go$apply$5264(go_i8856, acc, $t253_i8857);
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
const go$apply$4773$clo = { _0: ($_, $clo, lst, acc) => go$apply$4773($clo, lst, acc) };

function go$apply$4775($clo, lst, acc) {
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
const go$apply$4775$clo = { _0: ($_, $clo, lst, acc) => go$apply$4775($clo, lst, acc) };

function go$apply$4777($clo, lst, acc) {
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
const go$apply$4777$clo = { _0: ($_, $clo, lst, acc) => go$apply$4777($clo, lst, acc) };

function go$apply$4779($clo, lst, acc) {
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
const go$apply$4779$clo = { _0: ($_, $clo, lst, acc) => go$apply$4779($clo, lst, acc) };

function go$apply$4781($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8867 = { $: "$Clo_go$4779", _0: go$apply$4779 };
            {
              const $t253_i8868 = { $: "Nil" };
              return go$apply$4779(go_i8867, acc, $t253_i8868);
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
const go$apply$4781$clo = { _0: ($_, $clo, lst, acc) => go$apply$4781($clo, lst, acc) };

function go$apply$4783($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8872 = { $: "$Clo_go$4779", _0: go$apply$4779 };
            {
              const $t253_i8873 = { $: "Nil" };
              return go$apply$4779(go_i8872, acc, $t253_i8873);
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
const go$apply$4783$clo = { _0: ($_, $clo, lst, acc) => go$apply$4783($clo, lst, acc) };

function go$apply$4785($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8877 = { $: "$Clo_go$4325", _0: go$apply$4325 };
            {
              const $t253_i8878 = { $: "Nil" };
              return go$apply$4325(go_i8877, acc, $t253_i8878);
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
const go$apply$4785$clo = { _0: ($_, $clo, lst, acc) => go$apply$4785($clo, lst, acc) };

function go$apply$4787($clo, lst, acc) {
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
const go$apply$4787$clo = { _0: ($_, $clo, lst, acc) => go$apply$4787($clo, lst, acc) };

function go$apply$4790($clo, lst, yes, no) {
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
                const go_i8888 = { $: "$Clo_go$4775", _0: go$apply$4775 };
                {
                  const $t253_i8889 = { $: "Nil" };
                  return go$apply$4775(go_i8888, yes, $t253_i8889);
                }
              }
            })();
            {
              const $t547 = (() => {
                {
                  const go_i8885 = { $: "$Clo_go$4775", _0: go$apply$4775 };
                  {
                    const $t253_i8886 = { $: "Nil" };
                    return go$apply$4775(go_i8885, no, $t253_i8886);
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
const go$apply$4790$clo = { _0: ($_, $clo, lst, yes, no) => go$apply$4790($clo, lst, yes, no) };

function go$apply$4793($clo, lst, acc) {
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
const go$apply$4793$clo = { _0: ($_, $clo, lst, acc) => go$apply$4793($clo, lst, acc) };

function go$apply$4796($clo, lst, yes, no) {
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
                const go_i8900 = { $: "$Clo_go$4779", _0: go$apply$4779 };
                {
                  const $t253_i8901 = { $: "Nil" };
                  return go$apply$4779(go_i8900, yes, $t253_i8901);
                }
              }
            })();
            {
              const $t547 = (() => {
                {
                  const go_i8897 = { $: "$Clo_go$4779", _0: go$apply$4779 };
                  {
                    const $t253_i8898 = { $: "Nil" };
                    return go$apply$4779(go_i8897, no, $t253_i8898);
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
const go$apply$4796$clo = { _0: ($_, $clo, lst, yes, no) => go$apply$4796($clo, lst, yes, no) };

function $lam668$apply$4798($clo, y) {
  {
    const x = (() => {
      return $clo._1;
    })();
    return (y === x);
  }
}
const $lam668$apply$4798$clo = { _0: ($_, $clo, y) => $lam668$apply$4798($clo, y) };

function go$apply$4800($clo, lst, acc) {
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
const go$apply$4800$clo = { _0: ($_, $clo, lst, acc) => go$apply$4800($clo, lst, acc) };

function go$apply$4802($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8908 = { $: "$Clo_go$4775", _0: go$apply$4775 };
            {
              const $t253_i8909 = { $: "Nil" };
              return go$apply$4775(go_i8908, acc, $t253_i8909);
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
const go$apply$4802$clo = { _0: ($_, $clo, lst, acc) => go$apply$4802($clo, lst, acc) };

function go$apply$4805($clo, lst, acc) {
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
const go$apply$4805$clo = { _0: ($_, $clo, lst, acc) => go$apply$4805($clo, lst, acc) };

function go$apply$4808($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8920 = { $: "$Clo_go$5111", _0: go$apply$5111 };
            {
              const $t253_i8921 = { $: "Nil" };
              return go$apply$5111(go_i8920, acc, $t253_i8921);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8917 = { $: "$Clo_go$5111", _0: go$apply$5111 };
                {
                  const $t253_i8918 = { $: "Nil" };
                  return go$apply$5111(go_i8917, acc, $t253_i8918);
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
const go$apply$4808$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4808($clo, lst, k, acc) };

function go$apply$4810($clo, lst, acc) {
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
const go$apply$4810$clo = { _0: ($_, $clo, lst, acc) => go$apply$4810($clo, lst, acc) };

function go$apply$4814($clo, lst, acc) {
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
const go$apply$4814$clo = { _0: ($_, $clo, lst, acc) => go$apply$4814($clo, lst, acc) };

function go$apply$4817($clo, lst, acc) {
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
const go$apply$4817$clo = { _0: ($_, $clo, lst, acc) => go$apply$4817($clo, lst, acc) };

function go$apply$4819($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8937 = { $: "$Clo_go$5111", _0: go$apply$5111 };
            {
              const $t253_i8938 = { $: "Nil" };
              return go$apply$5111(go_i8937, acc, $t253_i8938);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8934 = { $: "$Clo_go$5111", _0: go$apply$5111 };
                {
                  const $t253_i8935 = { $: "Nil" };
                  return go$apply$5111(go_i8934, acc, $t253_i8935);
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
const go$apply$4819$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4819($clo, lst, k, acc) };

function go$apply$4821($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8942 = { $: "$Clo_go$4098", _0: go$apply$4098 };
            {
              const $t253_i8943 = { $: "Nil" };
              return go$apply$4098(go_i8942, acc, $t253_i8943);
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
const go$apply$4821$clo = { _0: ($_, $clo, lst, acc) => go$apply$4821($clo, lst, acc) };

function go$apply$4823($clo, lst, acc) {
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
const go$apply$4823$clo = { _0: ($_, $clo, lst, acc) => go$apply$4823($clo, lst, acc) };

function go$apply$4825($clo, lst, acc) {
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
const go$apply$4825$clo = { _0: ($_, $clo, lst, acc) => go$apply$4825($clo, lst, acc) };

function go$apply$4827($clo, lst, acc) {
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
const go$apply$4827$clo = { _0: ($_, $clo, lst, acc) => go$apply$4827($clo, lst, acc) };

function go$apply$4829($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8953 = { $: "$Clo_go$5273", _0: go$apply$5273 };
            {
              const $t253_i8954 = { $: "Nil" };
              return go$apply$5273(go_i8953, acc, $t253_i8954);
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
const go$apply$4829$clo = { _0: ($_, $clo, lst, acc) => go$apply$4829($clo, lst, acc) };

function go$apply$4832($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8962 = { $: "$Clo_go$5111", _0: go$apply$5111 };
            {
              const $t253_i8963 = { $: "Nil" };
              return go$apply$5111(go_i8962, acc, $t253_i8963);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8959 = { $: "$Clo_go$5111", _0: go$apply$5111 };
                {
                  const $t253_i8960 = { $: "Nil" };
                  return go$apply$5111(go_i8959, acc, $t253_i8960);
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

function go$apply$4835($clo, lst, acc) {
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
const go$apply$4835$clo = { _0: ($_, $clo, lst, acc) => go$apply$4835($clo, lst, acc) };

function go$apply$4837($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8970 = { $: "$Clo_go$5275", _0: go$apply$5275 };
            {
              const $t253_i8971 = { $: "Nil" };
              return go$apply$5275(go_i8970, acc, $t253_i8971);
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
const go$apply$4837$clo = { _0: ($_, $clo, lst, acc) => go$apply$4837($clo, lst, acc) };

function go$apply$4839($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8975 = { $: "$Clo_go$5275", _0: go$apply$5275 };
            {
              const $t253_i8976 = { $: "Nil" };
              return go$apply$5275(go_i8975, acc, $t253_i8976);
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
const go$apply$4839$clo = { _0: ($_, $clo, lst, acc) => go$apply$4839($clo, lst, acc) };

function go$apply$4841($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8983 = { $: "$Clo_go$5111", _0: go$apply$5111 };
            {
              const $t253_i8984 = { $: "Nil" };
              return go$apply$5111(go_i8983, acc, $t253_i8984);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8980 = { $: "$Clo_go$5111", _0: go$apply$5111 };
                {
                  const $t253_i8981 = { $: "Nil" };
                  return go$apply$5111(go_i8980, acc, $t253_i8981);
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
const go$apply$4841$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4841($clo, lst, k, acc) };

function go$apply$4843($clo, lst, acc) {
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
const go$apply$4843$clo = { _0: ($_, $clo, lst, acc) => go$apply$4843($clo, lst, acc) };

function go$apply$4845($clo, lst, acc) {
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
const go$apply$4845$clo = { _0: ($_, $clo, lst, acc) => go$apply$4845($clo, lst, acc) };

function go$apply$5111($clo, lst, acc) {
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
const go$apply$5111$clo = { _0: ($_, $clo, lst, acc) => go$apply$5111($clo, lst, acc) };

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

function go$apply$5264($clo, lst, acc) {
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
const go$apply$5264$clo = { _0: ($_, $clo, lst, acc) => go$apply$5264($clo, lst, acc) };

function go$apply$5267($clo, lst, acc) {
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
const go$apply$5267$clo = { _0: ($_, $clo, lst, acc) => go$apply$5267($clo, lst, acc) };

function go$apply$5269($clo, lst, acc) {
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
const go$apply$5269$clo = { _0: ($_, $clo, lst, acc) => go$apply$5269($clo, lst, acc) };

function go$apply$5271($clo, lst, acc) {
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
const go$apply$5271$clo = { _0: ($_, $clo, lst, acc) => go$apply$5271($clo, lst, acc) };

function go$apply$5273($clo, lst, acc) {
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
const go$apply$5273$clo = { _0: ($_, $clo, lst, acc) => go$apply$5273($clo, lst, acc) };

function go$apply$5275($clo, lst, acc) {
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
const go$apply$5275$clo = { _0: ($_, $clo, lst, acc) => go$apply$5275($clo, lst, acc) };

export { main };
main();
//# sourceMappingURL=perihelion.mjs.map
