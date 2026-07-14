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
            const xh_i9887 = march_int_shr($t15538, 16);
            {
              const xl_i9888 = march_int_and($t15538, 65535);
              {
                const $t15527_i9893 = (() => {
                  {
                    const $t15525_i9891 = (() => {
                      {
                        const $t15524_i9890 = (() => {
                          {
                            const $t15523_i9889 = (xh_i9887 * 569420461);
                            return march_int_and($t15523_i9889, 65535);
                          }
                        })();
                        return ($t15524_i9890 * 65536);
                      }
                    })();
                    {
                      const $t15526_i9892 = (xl_i9888 * 569420461);
                      return ($t15525_i9891 + $t15526_i9892);
                    }
                  }
                })();
                return march_int_and($t15527_i9893, 4294967295);
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
              const xh_i9876 = march_int_shr($t15540, 16);
              {
                const xl_i9877 = march_int_and($t15540, 65535);
                {
                  const $t15527_i9882 = (() => {
                    {
                      const $t15525_i9880 = (() => {
                        {
                          const $t15524_i9879 = (() => {
                            {
                              const $t15523_i9878 = (xh_i9876 * 1935289751);
                              return march_int_and($t15523_i9878, 65535);
                            }
                          })();
                          return ($t15524_i9879 * 65536);
                        }
                      })();
                      {
                        const $t15526_i9881 = (xl_i9877 * 1935289751);
                        return ($t15525_i9880 + $t15526_i9881);
                      }
                    }
                  })();
                  return march_int_and($t15527_i9882, 4294967295);
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
                const go_i3627 = { $: "$Clo_go$4759", _0: go$apply$4759 };
                return go$apply$4759(go_i3627, $t27352, 0);
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
                  const $p29052_i10623_i10937_i11131 = (() => {
                    {
                      const $p15579_i10214_i10618_i10932_i11126 = (() => {
                        {
                          const $p15576_i1532_i10204_i10609_i10923_i11117 = Random$next_raw($t27365);
                          {
                            const hi_i1533_i10205_i10610_i10924_i11118 = $p15576_i1532_i10204_i10609_i10923_i11117._0;
                            {
                              const rng2_i1534_i10206_i10611_i10925_i11119 = $p15576_i1532_i10204_i10609_i10923_i11117._1;
                              {
                                const $p15575_i1535_i10207_i10612_i10926_i11120 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11119);
                                {
                                  const lo_i1536_i10208_i10613_i10927_i11121 = $p15575_i1535_i10207_i10612_i10926_i11120._0;
                                  {
                                    const rng3_i1537_i10209_i10614_i10928_i11122 = $p15575_i1535_i10207_i10612_i10926_i11120._1;
                                    {
                                      const $t15574_i1541_i10213_i10617_i10931_i11125 = (() => {
                                        {
                                          const $t15573_i1540_i10212_i10616_i10930_i11124 = (() => {
                                            {
                                              const $t15571_i1538_i10210_i10615_i10929_i11123 = march_int_and(hi_i1533_i10205_i10610_i10924_i11118, 1048575);
                                              return ($t15571_i1538_i10210_i10615_i10929_i11123 * 4294967296);
                                            }
                                          })();
                                          return ($t15573_i1540_i10212_i10616_i10930_i11124 + lo_i1536_i10208_i10613_i10927_i11121);
                                        }
                                      })();
                                      return { _0: $t15574_i1541_i10213_i10617_i10931_i11125, _1: rng3_i1537_i10209_i10614_i10928_i11122 };
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      })();
                      {
                        const bits_i10215_i10619_i10933_i11127 = $p15579_i10214_i10618_i10932_i11126._0;
                        {
                          const rng2_i10216_i10620_i10934_i11128 = $p15579_i10214_i10618_i10932_i11126._1;
                          {
                            const $t15578_i10218_i10622_i10936_i11130 = (() => {
                              {
                                const $t15577_i10217_i10621_i10935_i11129 = bits_i10215_i10619_i10933_i11127;
                                return ($t15577_i10217_i10621_i10935_i11129 / 4.50359962737e+15);
                              }
                            })();
                            return { _0: $t15578_i10218_i10622_i10936_i11130, _1: rng2_i10216_i10620_i10934_i11128 };
                          }
                        }
                      }
                    }
                  })();
                  {
                    const t_i10624_i10938_i11132 = $p29052_i10623_i10937_i11131._0;
                    {
                      const rng2_i10625_i10939_i11133 = $p29052_i10623_i10937_i11131._1;
                      {
                        const out_i10626_i10940_i11134 = { _0: rng2_i10625_i10939_i11133, _1: t_i10624_i10938_i11132 };
                        return out_i10626_i10940_i11134;
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
                      const $p29052_i10623_i10937_i11112 = (() => {
                        {
                          const $p15579_i10214_i10618_i10932_i11107 = (() => {
                            {
                              const $p15576_i1532_i10204_i10609_i10923_i11098 = Random$next_raw(r1);
                              {
                                const hi_i1533_i10205_i10610_i10924_i11099 = $p15576_i1532_i10204_i10609_i10923_i11098._0;
                                {
                                  const rng2_i1534_i10206_i10611_i10925_i11100 = $p15576_i1532_i10204_i10609_i10923_i11098._1;
                                  {
                                    const $p15575_i1535_i10207_i10612_i10926_i11101 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11100);
                                    {
                                      const lo_i1536_i10208_i10613_i10927_i11102 = $p15575_i1535_i10207_i10612_i10926_i11101._0;
                                      {
                                        const rng3_i1537_i10209_i10614_i10928_i11103 = $p15575_i1535_i10207_i10612_i10926_i11101._1;
                                        {
                                          const $t15574_i1541_i10213_i10617_i10931_i11106 = (() => {
                                            {
                                              const $t15573_i1540_i10212_i10616_i10930_i11105 = (() => {
                                                {
                                                  const $t15571_i1538_i10210_i10615_i10929_i11104 = march_int_and(hi_i1533_i10205_i10610_i10924_i11099, 1048575);
                                                  return ($t15571_i1538_i10210_i10615_i10929_i11104 * 4294967296);
                                                }
                                              })();
                                              return ($t15573_i1540_i10212_i10616_i10930_i11105 + lo_i1536_i10208_i10613_i10927_i11102);
                                            }
                                          })();
                                          return { _0: $t15574_i1541_i10213_i10617_i10931_i11106, _1: rng3_i1537_i10209_i10614_i10928_i11103 };
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          })();
                          {
                            const bits_i10215_i10619_i10933_i11108 = $p15579_i10214_i10618_i10932_i11107._0;
                            {
                              const rng2_i10216_i10620_i10934_i11109 = $p15579_i10214_i10618_i10932_i11107._1;
                              {
                                const $t15578_i10218_i10622_i10936_i11111 = (() => {
                                  {
                                    const $t15577_i10217_i10621_i10935_i11110 = bits_i10215_i10619_i10933_i11108;
                                    return ($t15577_i10217_i10621_i10935_i11110 / 4.50359962737e+15);
                                  }
                                })();
                                return { _0: $t15578_i10218_i10622_i10936_i11111, _1: rng2_i10216_i10620_i10934_i11109 };
                              }
                            }
                          }
                        }
                      })();
                      {
                        const t_i10624_i10938_i11113 = $p29052_i10623_i10937_i11112._0;
                        {
                          const rng2_i10625_i10939_i11114 = $p29052_i10623_i10937_i11112._1;
                          {
                            const out_i10626_i10940_i11115 = { _0: rng2_i10625_i10939_i11114, _1: t_i10624_i10938_i11113 };
                            return out_i10626_i10940_i11115;
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
                            const $p29052_i10623_i10937_i11093 = (() => {
                              {
                                const $p15579_i10214_i10618_i10932_i11088 = (() => {
                                  {
                                    const $p15576_i1532_i10204_i10609_i10923_i11079 = Random$next_raw(r2);
                                    {
                                      const hi_i1533_i10205_i10610_i10924_i11080 = $p15576_i1532_i10204_i10609_i10923_i11079._0;
                                      {
                                        const rng2_i1534_i10206_i10611_i10925_i11081 = $p15576_i1532_i10204_i10609_i10923_i11079._1;
                                        {
                                          const $p15575_i1535_i10207_i10612_i10926_i11082 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11081);
                                          {
                                            const lo_i1536_i10208_i10613_i10927_i11083 = $p15575_i1535_i10207_i10612_i10926_i11082._0;
                                            {
                                              const rng3_i1537_i10209_i10614_i10928_i11084 = $p15575_i1535_i10207_i10612_i10926_i11082._1;
                                              {
                                                const $t15574_i1541_i10213_i10617_i10931_i11087 = (() => {
                                                  {
                                                    const $t15573_i1540_i10212_i10616_i10930_i11086 = (() => {
                                                      {
                                                        const $t15571_i1538_i10210_i10615_i10929_i11085 = march_int_and(hi_i1533_i10205_i10610_i10924_i11080, 1048575);
                                                        return ($t15571_i1538_i10210_i10615_i10929_i11085 * 4294967296);
                                                      }
                                                    })();
                                                    return ($t15573_i1540_i10212_i10616_i10930_i11086 + lo_i1536_i10208_i10613_i10927_i11083);
                                                  }
                                                })();
                                                return { _0: $t15574_i1541_i10213_i10617_i10931_i11087, _1: rng3_i1537_i10209_i10614_i10928_i11084 };
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                })();
                                {
                                  const bits_i10215_i10619_i10933_i11089 = $p15579_i10214_i10618_i10932_i11088._0;
                                  {
                                    const rng2_i10216_i10620_i10934_i11090 = $p15579_i10214_i10618_i10932_i11088._1;
                                    {
                                      const $t15578_i10218_i10622_i10936_i11092 = (() => {
                                        {
                                          const $t15577_i10217_i10621_i10935_i11091 = bits_i10215_i10619_i10933_i11089;
                                          return ($t15577_i10217_i10621_i10935_i11091 / 4.50359962737e+15);
                                        }
                                      })();
                                      return { _0: $t15578_i10218_i10622_i10936_i11092, _1: rng2_i10216_i10620_i10934_i11090 };
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const t_i10624_i10938_i11094 = $p29052_i10623_i10937_i11093._0;
                              {
                                const rng2_i10625_i10939_i11095 = $p29052_i10623_i10937_i11093._1;
                                {
                                  const out_i10626_i10940_i11096 = { _0: rng2_i10625_i10939_i11095, _1: t_i10624_i10938_i11094 };
                                  return out_i10626_i10940_i11096;
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
                                  const $p29052_i10623_i10937_i11074 = (() => {
                                    {
                                      const $p15579_i10214_i10618_i10932_i11069 = (() => {
                                        {
                                          const $p15576_i1532_i10204_i10609_i10923_i11060 = Random$next_raw(r3);
                                          {
                                            const hi_i1533_i10205_i10610_i10924_i11061 = $p15576_i1532_i10204_i10609_i10923_i11060._0;
                                            {
                                              const rng2_i1534_i10206_i10611_i10925_i11062 = $p15576_i1532_i10204_i10609_i10923_i11060._1;
                                              {
                                                const $p15575_i1535_i10207_i10612_i10926_i11063 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11062);
                                                {
                                                  const lo_i1536_i10208_i10613_i10927_i11064 = $p15575_i1535_i10207_i10612_i10926_i11063._0;
                                                  {
                                                    const rng3_i1537_i10209_i10614_i10928_i11065 = $p15575_i1535_i10207_i10612_i10926_i11063._1;
                                                    {
                                                      const $t15574_i1541_i10213_i10617_i10931_i11068 = (() => {
                                                        {
                                                          const $t15573_i1540_i10212_i10616_i10930_i11067 = (() => {
                                                            {
                                                              const $t15571_i1538_i10210_i10615_i10929_i11066 = march_int_and(hi_i1533_i10205_i10610_i10924_i11061, 1048575);
                                                              return ($t15571_i1538_i10210_i10615_i10929_i11066 * 4294967296);
                                                            }
                                                          })();
                                                          return ($t15573_i1540_i10212_i10616_i10930_i11067 + lo_i1536_i10208_i10613_i10927_i11064);
                                                        }
                                                      })();
                                                      return { _0: $t15574_i1541_i10213_i10617_i10931_i11068, _1: rng3_i1537_i10209_i10614_i10928_i11065 };
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      })();
                                      {
                                        const bits_i10215_i10619_i10933_i11070 = $p15579_i10214_i10618_i10932_i11069._0;
                                        {
                                          const rng2_i10216_i10620_i10934_i11071 = $p15579_i10214_i10618_i10932_i11069._1;
                                          {
                                            const $t15578_i10218_i10622_i10936_i11073 = (() => {
                                              {
                                                const $t15577_i10217_i10621_i10935_i11072 = bits_i10215_i10619_i10933_i11070;
                                                return ($t15577_i10217_i10621_i10935_i11072 / 4.50359962737e+15);
                                              }
                                            })();
                                            return { _0: $t15578_i10218_i10622_i10936_i11073, _1: rng2_i10216_i10620_i10934_i11071 };
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const t_i10624_i10938_i11075 = $p29052_i10623_i10937_i11074._0;
                                    {
                                      const rng2_i10625_i10939_i11076 = $p29052_i10623_i10937_i11074._1;
                                      {
                                        const out_i10626_i10940_i11077 = { _0: rng2_i10625_i10939_i11076, _1: t_i10624_i10938_i11075 };
                                        return out_i10626_i10940_i11077;
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
                                        const $p29052_i10623_i10937_i11055 = (() => {
                                          {
                                            const $p15579_i10214_i10618_i10932_i11050 = (() => {
                                              {
                                                const $p15576_i1532_i10204_i10609_i10923_i11041 = Random$next_raw(r4);
                                                {
                                                  const hi_i1533_i10205_i10610_i10924_i11042 = $p15576_i1532_i10204_i10609_i10923_i11041._0;
                                                  {
                                                    const rng2_i1534_i10206_i10611_i10925_i11043 = $p15576_i1532_i10204_i10609_i10923_i11041._1;
                                                    {
                                                      const $p15575_i1535_i10207_i10612_i10926_i11044 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11043);
                                                      {
                                                        const lo_i1536_i10208_i10613_i10927_i11045 = $p15575_i1535_i10207_i10612_i10926_i11044._0;
                                                        {
                                                          const rng3_i1537_i10209_i10614_i10928_i11046 = $p15575_i1535_i10207_i10612_i10926_i11044._1;
                                                          {
                                                            const $t15574_i1541_i10213_i10617_i10931_i11049 = (() => {
                                                              {
                                                                const $t15573_i1540_i10212_i10616_i10930_i11048 = (() => {
                                                                  {
                                                                    const $t15571_i1538_i10210_i10615_i10929_i11047 = march_int_and(hi_i1533_i10205_i10610_i10924_i11042, 1048575);
                                                                    return ($t15571_i1538_i10210_i10615_i10929_i11047 * 4294967296);
                                                                  }
                                                                })();
                                                                return ($t15573_i1540_i10212_i10616_i10930_i11048 + lo_i1536_i10208_i10613_i10927_i11045);
                                                              }
                                                            })();
                                                            return { _0: $t15574_i1541_i10213_i10617_i10931_i11049, _1: rng3_i1537_i10209_i10614_i10928_i11046 };
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            })();
                                            {
                                              const bits_i10215_i10619_i10933_i11051 = $p15579_i10214_i10618_i10932_i11050._0;
                                              {
                                                const rng2_i10216_i10620_i10934_i11052 = $p15579_i10214_i10618_i10932_i11050._1;
                                                {
                                                  const $t15578_i10218_i10622_i10936_i11054 = (() => {
                                                    {
                                                      const $t15577_i10217_i10621_i10935_i11053 = bits_i10215_i10619_i10933_i11051;
                                                      return ($t15577_i10217_i10621_i10935_i11053 / 4.50359962737e+15);
                                                    }
                                                  })();
                                                  return { _0: $t15578_i10218_i10622_i10936_i11054, _1: rng2_i10216_i10620_i10934_i11052 };
                                                }
                                              }
                                            }
                                          }
                                        })();
                                        {
                                          const t_i10624_i10938_i11056 = $p29052_i10623_i10937_i11055._0;
                                          {
                                            const rng2_i10625_i10939_i11057 = $p29052_i10623_i10937_i11055._1;
                                            {
                                              const out_i10626_i10940_i11058 = { _0: rng2_i10625_i10939_i11057, _1: t_i10624_i10938_i11056 };
                                              return out_i10626_i10940_i11058;
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
                const go_i3671 = { $: "$Clo_go$4767", _0: go$apply$4767, _1: f_i3670 };
                {
                  const $t270_i3672 = { $: "Nil" };
                  return go$apply$4767(go_i3671, $t27489, $t270_i3672);
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
                    const go_i3667 = { $: "$Clo_go$4765", _0: go$apply$4765, _1: pred_i3666 };
                    {
                      const $t302_i3668 = { $: "Nil" };
                      return go$apply$4765(go_i3667, $t27494, $t302_i3668);
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
                          const go_i3663 = { $: "$Clo_go$4767", _0: go$apply$4767, _1: f_i3662 };
                          {
                            const $t270_i3664 = { $: "Nil" };
                            return go$apply$4767(go_i3663, $t27502, $t270_i3664);
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
                              const go_i3659 = { $: "$Clo_go$4765", _0: go$apply$4765, _1: pred_i3658 };
                              {
                                const $t302_i3660 = { $: "Nil" };
                                return go$apply$4765(go_i3659, $t27507, $t302_i3660);
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
                                    const go_i3655 = { $: "$Clo_go$4763", _0: go$apply$4763, _1: f_i3654 };
                                    {
                                      const $t270_i3656 = { $: "Nil" };
                                      return go$apply$4763(go_i3655, $t27515, $t270_i3656);
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
                                        const go_i3651 = { $: "$Clo_go$4761", _0: go$apply$4761, _1: pred_i3650 };
                                        {
                                          const $t302_i3652 = { $: "Nil" };
                                          return go$apply$4761(go_i3651, $t27520, $t302_i3652);
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
            const go_i3680 = { $: "$Clo_go$4769", _0: go$apply$4769 };
            {
              const $t253_i3681 = { $: "Nil" };
              return go$apply$4769(go_i3680, acc, $t253_i3681);
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
                                                    const $p29052_i10623_i10937_i11150 = (() => {
                                                      {
                                                        const $p15579_i10214_i10618_i10932_i11145 = (() => {
                                                          {
                                                            const $p15576_i1532_i10204_i10609_i10923_i11136 = Random$next_raw($t27605);
                                                            {
                                                              const hi_i1533_i10205_i10610_i10924_i11137 = $p15576_i1532_i10204_i10609_i10923_i11136._0;
                                                              {
                                                                const rng2_i1534_i10206_i10611_i10925_i11138 = $p15576_i1532_i10204_i10609_i10923_i11136._1;
                                                                {
                                                                  const $p15575_i1535_i10207_i10612_i10926_i11139 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11138);
                                                                  {
                                                                    const lo_i1536_i10208_i10613_i10927_i11140 = $p15575_i1535_i10207_i10612_i10926_i11139._0;
                                                                    {
                                                                      const rng3_i1537_i10209_i10614_i10928_i11141 = $p15575_i1535_i10207_i10612_i10926_i11139._1;
                                                                      {
                                                                        const $t15574_i1541_i10213_i10617_i10931_i11144 = (() => {
                                                                          {
                                                                            const $t15573_i1540_i10212_i10616_i10930_i11143 = (() => {
                                                                              {
                                                                                const $t15571_i1538_i10210_i10615_i10929_i11142 = march_int_and(hi_i1533_i10205_i10610_i10924_i11137, 1048575);
                                                                                return ($t15571_i1538_i10210_i10615_i10929_i11142 * 4294967296);
                                                                              }
                                                                            })();
                                                                            return ($t15573_i1540_i10212_i10616_i10930_i11143 + lo_i1536_i10208_i10613_i10927_i11140);
                                                                          }
                                                                        })();
                                                                        return { _0: $t15574_i1541_i10213_i10617_i10931_i11144, _1: rng3_i1537_i10209_i10614_i10928_i11141 };
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        })();
                                                        {
                                                          const bits_i10215_i10619_i10933_i11146 = $p15579_i10214_i10618_i10932_i11145._0;
                                                          {
                                                            const rng2_i10216_i10620_i10934_i11147 = $p15579_i10214_i10618_i10932_i11145._1;
                                                            {
                                                              const $t15578_i10218_i10622_i10936_i11149 = (() => {
                                                                {
                                                                  const $t15577_i10217_i10621_i10935_i11148 = bits_i10215_i10619_i10933_i11146;
                                                                  return ($t15577_i10217_i10621_i10935_i11148 / 4.50359962737e+15);
                                                                }
                                                              })();
                                                              return { _0: $t15578_i10218_i10622_i10936_i11149, _1: rng2_i10216_i10620_i10934_i11147 };
                                                            }
                                                          }
                                                        }
                                                      }
                                                    })();
                                                    {
                                                      const t_i10624_i10938_i11151 = $p29052_i10623_i10937_i11150._0;
                                                      {
                                                        const rng2_i10625_i10939_i11152 = $p29052_i10623_i10937_i11150._1;
                                                        {
                                                          const out_i10626_i10940_i11153 = { _0: rng2_i10625_i10939_i11152, _1: t_i10624_i10938_i11151 };
                                                          return out_i10626_i10940_i11153;
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
        const $p29052_i10623_i10937_i11169 = (() => {
          {
            const $p15579_i10214_i10618_i10932_i11164 = (() => {
              {
                const $p15576_i1532_i10204_i10609_i10923_i11155 = Random$next_raw(rng);
                {
                  const hi_i1533_i10205_i10610_i10924_i11156 = $p15576_i1532_i10204_i10609_i10923_i11155._0;
                  {
                    const rng2_i1534_i10206_i10611_i10925_i11157 = $p15576_i1532_i10204_i10609_i10923_i11155._1;
                    {
                      const $p15575_i1535_i10207_i10612_i10926_i11158 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11157);
                      {
                        const lo_i1536_i10208_i10613_i10927_i11159 = $p15575_i1535_i10207_i10612_i10926_i11158._0;
                        {
                          const rng3_i1537_i10209_i10614_i10928_i11160 = $p15575_i1535_i10207_i10612_i10926_i11158._1;
                          {
                            const $t15574_i1541_i10213_i10617_i10931_i11163 = (() => {
                              {
                                const $t15573_i1540_i10212_i10616_i10930_i11162 = (() => {
                                  {
                                    const $t15571_i1538_i10210_i10615_i10929_i11161 = march_int_and(hi_i1533_i10205_i10610_i10924_i11156, 1048575);
                                    return ($t15571_i1538_i10210_i10615_i10929_i11161 * 4294967296);
                                  }
                                })();
                                return ($t15573_i1540_i10212_i10616_i10930_i11162 + lo_i1536_i10208_i10613_i10927_i11159);
                              }
                            })();
                            return { _0: $t15574_i1541_i10213_i10617_i10931_i11163, _1: rng3_i1537_i10209_i10614_i10928_i11160 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const bits_i10215_i10619_i10933_i11165 = $p15579_i10214_i10618_i10932_i11164._0;
              {
                const rng2_i10216_i10620_i10934_i11166 = $p15579_i10214_i10618_i10932_i11164._1;
                {
                  const $t15578_i10218_i10622_i10936_i11168 = (() => {
                    {
                      const $t15577_i10217_i10621_i10935_i11167 = bits_i10215_i10619_i10933_i11165;
                      return ($t15577_i10217_i10621_i10935_i11167 / 4.50359962737e+15);
                    }
                  })();
                  return { _0: $t15578_i10218_i10622_i10936_i11168, _1: rng2_i10216_i10620_i10934_i11166 };
                }
              }
            }
          }
        })();
        {
          const t_i10624_i10938_i11170 = $p29052_i10623_i10937_i11169._0;
          {
            const rng2_i10625_i10939_i11171 = $p29052_i10623_i10937_i11169._1;
            {
              const out_i10626_i10940_i11172 = { _0: rng2_i10625_i10939_i11171, _1: t_i10624_i10938_i11170 };
              return out_i10626_i10940_i11172;
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
            const go_i3697 = { $: "$Clo_go$4773", _0: go$apply$4773 };
            {
              const $t253_i3698 = { $: "Nil" };
              return go$apply$4773(go_i3697, acc, $t253_i3698);
            }
          }
        })();
        {
          const $t27700 = game.enemy_shots;
          {
            const $t27701 = (() => {
              {
                const go_i9898 = { $: "$Clo_go$4771", _0: go$apply$4771 };
                {
                  const $t261_i9901 = (() => {
                    {
                      const go_i4515_i9899 = { $: "$Clo_go$5256", _0: go$apply$5256 };
                      {
                        const $t253_i4516_i9900 = { $: "Nil" };
                        return go$apply$5256(go_i4515_i9899, new_shots, $t253_i4516_i9900);
                      }
                    }
                  })();
                  return go$apply$4771(go_i9898, $t261_i9901, $t27700);
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
                                              const $p29052_i10623_i10937_i11188 = (() => {
                                                {
                                                  const $p15579_i10214_i10618_i10932_i11183 = (() => {
                                                    {
                                                      const $p15576_i1532_i10204_i10609_i10923_i11174 = Random$next_raw($t27781);
                                                      {
                                                        const hi_i1533_i10205_i10610_i10924_i11175 = $p15576_i1532_i10204_i10609_i10923_i11174._0;
                                                        {
                                                          const rng2_i1534_i10206_i10611_i10925_i11176 = $p15576_i1532_i10204_i10609_i10923_i11174._1;
                                                          {
                                                            const $p15575_i1535_i10207_i10612_i10926_i11177 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11176);
                                                            {
                                                              const lo_i1536_i10208_i10613_i10927_i11178 = $p15575_i1535_i10207_i10612_i10926_i11177._0;
                                                              {
                                                                const rng3_i1537_i10209_i10614_i10928_i11179 = $p15575_i1535_i10207_i10612_i10926_i11177._1;
                                                                {
                                                                  const $t15574_i1541_i10213_i10617_i10931_i11182 = (() => {
                                                                    {
                                                                      const $t15573_i1540_i10212_i10616_i10930_i11181 = (() => {
                                                                        {
                                                                          const $t15571_i1538_i10210_i10615_i10929_i11180 = march_int_and(hi_i1533_i10205_i10610_i10924_i11175, 1048575);
                                                                          return ($t15571_i1538_i10210_i10615_i10929_i11180 * 4294967296);
                                                                        }
                                                                      })();
                                                                      return ($t15573_i1540_i10212_i10616_i10930_i11181 + lo_i1536_i10208_i10613_i10927_i11178);
                                                                    }
                                                                  })();
                                                                  return { _0: $t15574_i1541_i10213_i10617_i10931_i11182, _1: rng3_i1537_i10209_i10614_i10928_i11179 };
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  })();
                                                  {
                                                    const bits_i10215_i10619_i10933_i11184 = $p15579_i10214_i10618_i10932_i11183._0;
                                                    {
                                                      const rng2_i10216_i10620_i10934_i11185 = $p15579_i10214_i10618_i10932_i11183._1;
                                                      {
                                                        const $t15578_i10218_i10622_i10936_i11187 = (() => {
                                                          {
                                                            const $t15577_i10217_i10621_i10935_i11186 = bits_i10215_i10619_i10933_i11184;
                                                            return ($t15577_i10217_i10621_i10935_i11186 / 4.50359962737e+15);
                                                          }
                                                        })();
                                                        return { _0: $t15578_i10218_i10622_i10936_i11187, _1: rng2_i10216_i10620_i10934_i11185 };
                                                      }
                                                    }
                                                  }
                                                }
                                              })();
                                              {
                                                const t_i10624_i10938_i11189 = $p29052_i10623_i10937_i11188._0;
                                                {
                                                  const rng2_i10625_i10939_i11190 = $p29052_i10623_i10937_i11188._1;
                                                  {
                                                    const out_i10626_i10940_i11191 = { _0: rng2_i10625_i10939_i11190, _1: t_i10624_i10938_i11189 };
                                                    return out_i10626_i10940_i11191;
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
          const $t27899_i9978 = (() => {
            {
              const $t27896_i9975 = (() => {
                {
                  const $t27895_i9974 = Math.cos($t27906);
                  return (ax * $t27895_i9974);
                }
              })();
              {
                const $t27898_i9977 = (() => {
                  {
                    const $t27897_i9976 = Math.sin($t27906);
                    return (ay * $t27897_i9976);
                  }
                })();
                return ($t27896_i9975 - $t27898_i9977);
              }
            }
          })();
          {
            const $t27904_i9983 = (() => {
              {
                const $t27901_i9980 = (() => {
                  {
                    const $t27900_i9979 = Math.sin($t27906);
                    return (ax * $t27900_i9979);
                  }
                })();
                {
                  const $t27903_i9982 = (() => {
                    {
                      const $t27902_i9981 = Math.cos($t27906);
                      return (ay * $t27902_i9981);
                    }
                  })();
                  return ($t27901_i9980 + $t27903_i9982);
                }
              }
            })();
            return { _0: $t27899_i9978, _1: $t27904_i9983 };
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
                const $t27899_i9965 = (() => {
                  {
                    const $t27896_i9962 = (() => {
                      {
                        const $t27895_i9961 = Math.cos($t27909);
                        return (ax * $t27895_i9961);
                      }
                    })();
                    {
                      const $t27898_i9964 = (() => {
                        {
                          const $t27897_i9963 = Math.sin($t27909);
                          return (ay * $t27897_i9963);
                        }
                      })();
                      return ($t27896_i9962 - $t27898_i9964);
                    }
                  }
                })();
                {
                  const $t27904_i9970 = (() => {
                    {
                      const $t27901_i9967 = (() => {
                        {
                          const $t27900_i9966 = Math.sin($t27909);
                          return (ax * $t27900_i9966);
                        }
                      })();
                      {
                        const $t27903_i9969 = (() => {
                          {
                            const $t27902_i9968 = Math.cos($t27909);
                            return (ay * $t27902_i9968);
                          }
                        })();
                        return ($t27901_i9967 + $t27903_i9969);
                      }
                    }
                  })();
                  return { _0: $t27899_i9965, _1: $t27904_i9970 };
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
                      const $t27899_i9952 = (() => {
                        {
                          const $t27896_i9949 = (() => {
                            {
                              const $t27895_i9948 = Math.cos($t27911);
                              return (ax * $t27895_i9948);
                            }
                          })();
                          {
                            const $t27898_i9951 = (() => {
                              {
                                const $t27897_i9950 = Math.sin($t27911);
                                return (ay * $t27897_i9950);
                              }
                            })();
                            return ($t27896_i9949 - $t27898_i9951);
                          }
                        }
                      })();
                      {
                        const $t27904_i9957 = (() => {
                          {
                            const $t27901_i9954 = (() => {
                              {
                                const $t27900_i9953 = Math.sin($t27911);
                                return (ax * $t27900_i9953);
                              }
                            })();
                            {
                              const $t27903_i9956 = (() => {
                                {
                                  const $t27902_i9955 = Math.cos($t27911);
                                  return (ay * $t27902_i9955);
                                }
                              })();
                              return ($t27901_i9954 + $t27903_i9956);
                            }
                          }
                        })();
                        return { _0: $t27899_i9952, _1: $t27904_i9957 };
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
                          const $t27899_i9939 = (() => {
                            {
                              const $t27896_i9936 = (() => {
                                {
                                  const $t27895_i9935 = Math.cos(0.5236);
                                  return (ax * $t27895_i9935);
                                }
                              })();
                              {
                                const $t27898_i9938 = (() => {
                                  {
                                    const $t27897_i9937 = Math.sin(0.5236);
                                    return (ay * $t27897_i9937);
                                  }
                                })();
                                return ($t27896_i9936 - $t27898_i9938);
                              }
                            }
                          })();
                          {
                            const $t27904_i9944 = (() => {
                              {
                                const $t27901_i9941 = (() => {
                                  {
                                    const $t27900_i9940 = Math.sin(0.5236);
                                    return (ax * $t27900_i9940);
                                  }
                                })();
                                {
                                  const $t27903_i9943 = (() => {
                                    {
                                      const $t27902_i9942 = Math.cos(0.5236);
                                      return (ay * $t27902_i9942);
                                    }
                                  })();
                                  return ($t27901_i9941 + $t27903_i9943);
                                }
                              }
                            })();
                            return { _0: $t27899_i9939, _1: $t27904_i9944 };
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
                                const $t27886_i9930 = (ax * 420.);
                                {
                                  const $t27888_i9931 = (ay * 420.);
                                  return ({ x: x, y: y, vx: $t27886_i9930, vy: $t27888_i9931, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                }
                              }
                            })();
                            {
                              const $t27914 = (() => {
                                {
                                  const $t27886_i9924 = (a1x * 420.);
                                  {
                                    const $t27888_i9925 = (a1y * 420.);
                                    return ({ x: x, y: y, vx: $t27886_i9924, vy: $t27888_i9925, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                  }
                                }
                              })();
                              {
                                const $t27915 = (() => {
                                  {
                                    const $t27886_i9918 = (a2x * 420.);
                                    {
                                      const $t27888_i9919 = (a2y * 420.);
                                      return ({ x: x, y: y, vx: $t27886_i9918, vy: $t27888_i9919, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                    }
                                  }
                                })();
                                {
                                  const $t27916 = (() => {
                                    {
                                      const $t27886_i9912 = (a3x * 420.);
                                      {
                                        const $t27888_i9913 = (a3y * 420.);
                                        return ({ x: x, y: y, vx: $t27886_i9912, vy: $t27888_i9913, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
                                      }
                                    }
                                  })();
                                  {
                                    const $t27917 = (() => {
                                      {
                                        const $t27886_i9906 = (a4x * 420.);
                                        {
                                          const $t27888_i9907 = (a4y * 420.);
                                          return ({ x: x, y: y, vx: $t27886_i9906, vy: $t27888_i9907, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
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
                                                          const $t27886_i10000 = (ax * 420.);
                                                          {
                                                            const $t27888_i10001 = (ay * 420.);
                                                            return ({ x: $t27951, y: $t27952, vx: $t27886_i10000, vy: $t27888_i10001, ttl: 3., homing: false, star_killer: false, target_x: 0., target_y: 0. });
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
                                                          const $t27891_i10006 = (ax * 420.);
                                                          {
                                                            const $t27893_i10007 = (ay * 420.);
                                                            return ({ x: $t27955, y: $t27956, vx: $t27891_i10006, vy: $t27893_i10007, ttl: 3., homing: true, star_killer: false, target_x: 0., target_y: 0. });
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
                                                      const reduced_i9994 = (() => {
                                                        {
                                                          const $t27346_i9993 = (() => {
                                                            {
                                                              const $t27344_i9992 = (() => {
                                                                {
                                                                  const $t27343_i9991 = game.fire_rate_stacks;
                                                                  return $t27343_i9991;
                                                                }
                                                              })();
                                                              return ($t27344_i9992 * 0.05);
                                                            }
                                                          })();
                                                          return (0.4 - $t27346_i9993);
                                                        }
                                                      })();
                                                      {
                                                        const $t27348_i9995 = (reduced_i9994 < 0.15);
                                                        if ($t27348_i9995 === true) {
                                                          return 0.15;
                                                        } else {
                                                          return reduced_i9994;
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
                                                      const go_i9986 = { $: "$Clo_go$4771", _0: go$apply$4771 };
                                                      {
                                                        const $t261_i9989 = (() => {
                                                          {
                                                            const go_i4515_i9987 = { $: "$Clo_go$5256", _0: go$apply$5256 };
                                                            {
                                                              const $t253_i4516_i9988 = { $: "Nil" };
                                                              return go$apply$5256(go_i4515_i9987, $t27993, $t253_i4516_i9988);
                                                            }
                                                          }
                                                        })();
                                                        return go$apply$4771(go_i9986, $t261_i9989, new_shots);
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
                    const $t27359_i10018 = (() => {
                      {
                        const dx_i3632_i10014 = (tx - $t28008);
                        {
                          const dy_i3633_i10015 = (ty - $t28009);
                          {
                            const $t27357_i3634_i10016 = (dx_i3632_i10014 * dx_i3632_i10014);
                            {
                              const $t27358_i3635_i10017 = (dy_i3633_i10015 * dy_i3633_i10015);
                              return ($t27357_i3634_i10016 + $t27358_i3635_i10017);
                            }
                          }
                        }
                      }
                    })();
                    {
                      const $t27362_i10021 = (() => {
                        {
                          const $t27360_i10019 = (0.001 + 0.);
                          {
                            const $t27361_i10020 = (0.001 + 0.);
                            return ($t27360_i10019 * $t27361_i10020);
                          }
                        }
                      })();
                      return ($t27359_i10018 <= $t27362_i10021);
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
              const go_i3756 = { $: "$Clo_go$4765", _0: go$apply$4765, _1: pred_i3755 };
              {
                const $t302_i3757 = { $: "Nil" };
                return go$apply$4765(go_i3756, $t28018, $t302_i3757);
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
                            const $t27359_i10043 = (() => {
                              {
                                const dx_i3632_i10039 = ($t28024 - $t28021);
                                {
                                  const dy_i3633_i10040 = ($t28025 - $t28022);
                                  {
                                    const $t27357_i3634_i10041 = (dx_i3632_i10039 * dx_i3632_i10039);
                                    {
                                      const $t27358_i3635_i10042 = (dy_i3633_i10040 * dy_i3633_i10040);
                                      return ($t27357_i3634_i10041 + $t27358_i3635_i10042);
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const $t27362_i10046 = (() => {
                                {
                                  const $t27360_i10044 = (20. + 0.);
                                  {
                                    const $t27361_i10045 = (20. + 0.);
                                    return ($t27360_i10044 * $t27361_i10045);
                                  }
                                }
                              })();
                              return ($t27359_i10043 <= $t27362_i10046);
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
                                      const go_i3748 = { $: "$Clo_go$4765", _0: go$apply$4765, _1: pred_i3747 };
                                      {
                                        const $t302_i3749 = { $: "Nil" };
                                        return go$apply$4765(go_i3748, $t28031, $t302_i3749);
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
                                      const $t28000_i10024 = { $: "$Clo_$lam27998$3697", _0: $lam27998$apply$3697, _1: tidx };
                                      {
                                        const $t28001_i10028 = (() => {
                                          {
                                            const pred_i3740_i10025 = $t28000_i10024;
                                            {
                                              const go_i3741_i10026 = { $: "$Clo_go$4777", _0: go$apply$4777, _1: pred_i3740_i10025 };
                                              {
                                                const $t302_i3742_i10027 = { $: "Nil" };
                                                return go$apply$4777(go_i3741_i10026, $t28036, $t302_i3742_i10027);
                                              }
                                            }
                                          }
                                        })();
                                        {
                                          const $t28007_i10029 = { $: "$Clo_$lam28002$3698", _0: $lam28002$apply$3698, _1: tidx };
                                          {
                                            const f_i3736_i10030 = $t28007_i10029;
                                            {
                                              const go_i3737_i10031 = { $: "$Clo_go$4775", _0: go$apply$4775, _1: f_i3736_i10030 };
                                              {
                                                const $t270_i3738_i10032 = { $: "Nil" };
                                                return go$apply$4775(go_i3737_i10031, $t28001_i10028, $t270_i3738_i10032);
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
                                              const go_i3752 = { $: "$Clo_go$4765", _0: go$apply$4765, _1: pred_i3751 };
                                              {
                                                const $t302_i3753 = { $: "Nil" };
                                                return go$apply$4765(go_i3752, $t28038, $t302_i3753);
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
              const go_i3770 = { $: "$Clo_go$4784", _0: go$apply$4784, _1: pred_i3769 };
              {
                const $t557_i3771 = { $: "Nil" };
                {
                  const $t558_i3772 = { $: "Nil" };
                  return go$apply$4784(go_i3770, $t28061, $t557_i3771, $t558_i3772);
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
                    const go_i3766 = { $: "$Clo_go$4765", _0: go$apply$4765, _1: pred_i3765 };
                    {
                      const $t302_i3767 = { $: "Nil" };
                      return go$apply$4765(go_i3766, $t28070, $t302_i3767);
                    }
                  }
                }
              })();
              {
                const killed = (() => {
                  {
                    const go_i3763 = { $: "$Clo_go$4781", _0: go$apply$4781 };
                    return go$apply$4781(go_i3763, dead, 0);
                  }
                })();
                {
                  const $t28080 = (killed === 0);
                  if ($t28080 === true) {
                    return (() => {
                      {
                        const $t28081 = (() => {
                          {
                            const $t28056_i10071 = { $: "$Clo_$lam28053$3704", _0: $lam28053$apply$3704 };
                            {
                              const f_i3759_i10072 = $t28056_i10071;
                              {
                                const go_i3760_i10073 = { $: "$Clo_go$4779", _0: go$apply$4779, _1: f_i3759_i10072 };
                                {
                                  const $t270_i3761_i10074 = { $: "Nil" };
                                  return go$apply$4779(go_i3760_i10073, dead, $t270_i3761_i10074);
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
                                  const raw_i10068 = ($t28085 + bumps);
                                  {
                                    const $t28060_i10069 = (raw_i10068 > 5);
                                    if ($t28060_i10069 === true) {
                                      return 5;
                                    } else {
                                      return raw_i10068;
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
                                    const $t28056_i10062 = { $: "$Clo_$lam28053$3704", _0: $lam28053$apply$3704 };
                                    {
                                      const f_i3759_i10063 = $t28056_i10062;
                                      {
                                        const go_i3760_i10064 = { $: "$Clo_go$4779", _0: go$apply$4779, _1: f_i3759_i10063 };
                                        {
                                          const $t270_i3761_i10065 = { $: "Nil" };
                                          return go$apply$4779(go_i3760_i10064, dead, $t270_i3761_i10065);
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
          const $t28050_i10584 = s.x;
          {
            const $t28051_i10585 = s.y;
            {
              const $t27359_i10057_i10590 = (() => {
                {
                  const dx_i3632_i10053_i10586 = (sx - $t28050_i10584);
                  {
                    const dy_i3633_i10054_i10587 = (sy - $t28051_i10585);
                    {
                      const $t27357_i3634_i10055_i10588 = (dx_i3632_i10053_i10586 * dx_i3632_i10053_i10586);
                      {
                        const $t27358_i3635_i10056_i10589 = (dy_i3633_i10054_i10587 * dy_i3633_i10054_i10587);
                        return ($t27357_i3634_i10055_i10588 + $t27358_i3635_i10056_i10589);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10060_i10593 = (() => {
                  {
                    const $t27360_i10058_i10591 = (3. + 10.);
                    {
                      const $t27361_i10059_i10592 = (3. + 10.);
                      return ($t27360_i10058_i10591 * $t27361_i10059_i10592);
                    }
                  }
                })();
                return ($t27359_i10057_i10590 <= $t27362_i10060_i10593);
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
              const go_i3785 = { $: "$Clo_go$4790", _0: go$apply$4790, _1: pred_i3784 };
              {
                const $t557_i3786 = { $: "Nil" };
                {
                  const $t558_i3787 = { $: "Nil" };
                  return go$apply$4790(go_i3785, $t28096, $t557_i3786, $t558_i3787);
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
                    const go_i3781 = { $: "$Clo_go$4765", _0: go$apply$4765, _1: pred_i3780 };
                    {
                      const $t302_i3782 = { $: "Nil" };
                      return go$apply$4765(go_i3781, $t28102, $t302_i3782);
                    }
                  }
                }
              })();
              {
                const killed = (() => {
                  {
                    const go_i3778 = { $: "$Clo_go$4787", _0: go$apply$4787 };
                    return go$apply$4787(go_i3778, dead, 0);
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
                                      const raw_i10077 = ($t28113 + bumps);
                                      {
                                        const $t28060_i10078 = (raw_i10077 > 5);
                                        if ($t28060_i10078 === true) {
                                          return 5;
                                        } else {
                                          return raw_i10077;
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
                        const $p29052_i10623_i10937_i11226 = (() => {
                          {
                            const $p15579_i10214_i10618_i10932_i11221 = (() => {
                              {
                                const $p15576_i1532_i10204_i10609_i10923_i11212 = Random$next_raw($t28122);
                                {
                                  const hi_i1533_i10205_i10610_i10924_i11213 = $p15576_i1532_i10204_i10609_i10923_i11212._0;
                                  {
                                    const rng2_i1534_i10206_i10611_i10925_i11214 = $p15576_i1532_i10204_i10609_i10923_i11212._1;
                                    {
                                      const $p15575_i1535_i10207_i10612_i10926_i11215 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11214);
                                      {
                                        const lo_i1536_i10208_i10613_i10927_i11216 = $p15575_i1535_i10207_i10612_i10926_i11215._0;
                                        {
                                          const rng3_i1537_i10209_i10614_i10928_i11217 = $p15575_i1535_i10207_i10612_i10926_i11215._1;
                                          {
                                            const $t15574_i1541_i10213_i10617_i10931_i11220 = (() => {
                                              {
                                                const $t15573_i1540_i10212_i10616_i10930_i11219 = (() => {
                                                  {
                                                    const $t15571_i1538_i10210_i10615_i10929_i11218 = march_int_and(hi_i1533_i10205_i10610_i10924_i11213, 1048575);
                                                    return ($t15571_i1538_i10210_i10615_i10929_i11218 * 4294967296);
                                                  }
                                                })();
                                                return ($t15573_i1540_i10212_i10616_i10930_i11219 + lo_i1536_i10208_i10613_i10927_i11216);
                                              }
                                            })();
                                            return { _0: $t15574_i1541_i10213_i10617_i10931_i11220, _1: rng3_i1537_i10209_i10614_i10928_i11217 };
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            })();
                            {
                              const bits_i10215_i10619_i10933_i11222 = $p15579_i10214_i10618_i10932_i11221._0;
                              {
                                const rng2_i10216_i10620_i10934_i11223 = $p15579_i10214_i10618_i10932_i11221._1;
                                {
                                  const $t15578_i10218_i10622_i10936_i11225 = (() => {
                                    {
                                      const $t15577_i10217_i10621_i10935_i11224 = bits_i10215_i10619_i10933_i11222;
                                      return ($t15577_i10217_i10621_i10935_i11224 / 4.50359962737e+15);
                                    }
                                  })();
                                  return { _0: $t15578_i10218_i10622_i10936_i11225, _1: rng2_i10216_i10620_i10934_i11223 };
                                }
                              }
                            }
                          }
                        })();
                        {
                          const t_i10624_i10938_i11227 = $p29052_i10623_i10937_i11226._0;
                          {
                            const rng2_i10625_i10939_i11228 = $p29052_i10623_i10937_i11226._1;
                            {
                              const out_i10626_i10940_i11229 = { _0: rng2_i10625_i10939_i11228, _1: t_i10624_i10938_i11227 };
                              return out_i10626_i10940_i11229;
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
                                          const $t669_i3791 = { $: "$Clo_$lam668$4792", _0: $lam668$apply$4792, _1: $t28126 };
                                          return List$any$List_WeaponKind$Fn_WeaponKind_Bool($t28125, $t669_i3791);
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const $p28144 = (() => {
                                      {
                                        const $p29052_i10623_i10937_i11207 = (() => {
                                          {
                                            const $p15579_i10214_i10618_i10932_i11202 = (() => {
                                              {
                                                const $p15576_i1532_i10204_i10609_i10923_i11193 = Random$next_raw(rng2);
                                                {
                                                  const hi_i1533_i10205_i10610_i10924_i11194 = $p15576_i1532_i10204_i10609_i10923_i11193._0;
                                                  {
                                                    const rng2_i1534_i10206_i10611_i10925_i11195 = $p15576_i1532_i10204_i10609_i10923_i11193._1;
                                                    {
                                                      const $p15575_i1535_i10207_i10612_i10926_i11196 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11195);
                                                      {
                                                        const lo_i1536_i10208_i10613_i10927_i11197 = $p15575_i1535_i10207_i10612_i10926_i11196._0;
                                                        {
                                                          const rng3_i1537_i10209_i10614_i10928_i11198 = $p15575_i1535_i10207_i10612_i10926_i11196._1;
                                                          {
                                                            const $t15574_i1541_i10213_i10617_i10931_i11201 = (() => {
                                                              {
                                                                const $t15573_i1540_i10212_i10616_i10930_i11200 = (() => {
                                                                  {
                                                                    const $t15571_i1538_i10210_i10615_i10929_i11199 = march_int_and(hi_i1533_i10205_i10610_i10924_i11194, 1048575);
                                                                    return ($t15571_i1538_i10210_i10615_i10929_i11199 * 4294967296);
                                                                  }
                                                                })();
                                                                return ($t15573_i1540_i10212_i10616_i10930_i11200 + lo_i1536_i10208_i10613_i10927_i11197);
                                                              }
                                                            })();
                                                            return { _0: $t15574_i1541_i10213_i10617_i10931_i11201, _1: rng3_i1537_i10209_i10614_i10928_i11198 };
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            })();
                                            {
                                              const bits_i10215_i10619_i10933_i11203 = $p15579_i10214_i10618_i10932_i11202._0;
                                              {
                                                const rng2_i10216_i10620_i10934_i11204 = $p15579_i10214_i10618_i10932_i11202._1;
                                                {
                                                  const $t15578_i10218_i10622_i10936_i11206 = (() => {
                                                    {
                                                      const $t15577_i10217_i10621_i10935_i11205 = bits_i10215_i10619_i10933_i11203;
                                                      return ($t15577_i10217_i10621_i10935_i11205 / 4.50359962737e+15);
                                                    }
                                                  })();
                                                  return { _0: $t15578_i10218_i10622_i10936_i11206, _1: rng2_i10216_i10620_i10934_i11204 };
                                                }
                                              }
                                            }
                                          }
                                        })();
                                        {
                                          const t_i10624_i10938_i11208 = $p29052_i10623_i10937_i11207._0;
                                          {
                                            const rng2_i10625_i10939_i11209 = $p29052_i10623_i10937_i11207._1;
                                            {
                                              const out_i10626_i10940_i11210 = { _0: rng2_i10625_i10939_i11209, _1: t_i10624_i10938_i11208 };
                                              return out_i10626_i10940_i11210;
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
                      const go_i3800 = { $: "$Clo_go$4761", _0: go$apply$4761, _1: pred_i3799 };
                      {
                        const $t302_i3801 = { $: "Nil" };
                        return go$apply$4761(go_i3800, $t28163, $t302_i3801);
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
              const $t27359_i10103 = (() => {
                {
                  const dx_i3632_i10099 = ($t28190 - sx);
                  {
                    const dy_i3633_i10100 = ($t28191 - sy);
                    {
                      const $t27357_i3634_i10101 = (dx_i3632_i10099 * dx_i3632_i10099);
                      {
                        const $t27358_i3635_i10102 = (dy_i3633_i10100 * dy_i3633_i10100);
                        return ($t27357_i3634_i10101 + $t27358_i3635_i10102);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10106 = (() => {
                  {
                    const $t27360_i10104 = (10. + 6.);
                    {
                      const $t27361_i10105 = (10. + 6.);
                      return ($t27360_i10104 * $t27361_i10105);
                    }
                  }
                })();
                return ($t27359_i10103 <= $t27362_i10106);
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
          const $p29052_i10623_i10937_i11245 = (() => {
            {
              const $p15579_i10214_i10618_i10932_i11240 = (() => {
                {
                  const $p15576_i1532_i10204_i10609_i10923_i11231 = Random$next_raw($t28203);
                  {
                    const hi_i1533_i10205_i10610_i10924_i11232 = $p15576_i1532_i10204_i10609_i10923_i11231._0;
                    {
                      const rng2_i1534_i10206_i10611_i10925_i11233 = $p15576_i1532_i10204_i10609_i10923_i11231._1;
                      {
                        const $p15575_i1535_i10207_i10612_i10926_i11234 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11233);
                        {
                          const lo_i1536_i10208_i10613_i10927_i11235 = $p15575_i1535_i10207_i10612_i10926_i11234._0;
                          {
                            const rng3_i1537_i10209_i10614_i10928_i11236 = $p15575_i1535_i10207_i10612_i10926_i11234._1;
                            {
                              const $t15574_i1541_i10213_i10617_i10931_i11239 = (() => {
                                {
                                  const $t15573_i1540_i10212_i10616_i10930_i11238 = (() => {
                                    {
                                      const $t15571_i1538_i10210_i10615_i10929_i11237 = march_int_and(hi_i1533_i10205_i10610_i10924_i11232, 1048575);
                                      return ($t15571_i1538_i10210_i10615_i10929_i11237 * 4294967296);
                                    }
                                  })();
                                  return ($t15573_i1540_i10212_i10616_i10930_i11238 + lo_i1536_i10208_i10613_i10927_i11235);
                                }
                              })();
                              return { _0: $t15574_i1541_i10213_i10617_i10931_i11239, _1: rng3_i1537_i10209_i10614_i10928_i11236 };
                            }
                          }
                        }
                      }
                    }
                  }
                }
              })();
              {
                const bits_i10215_i10619_i10933_i11241 = $p15579_i10214_i10618_i10932_i11240._0;
                {
                  const rng2_i10216_i10620_i10934_i11242 = $p15579_i10214_i10618_i10932_i11240._1;
                  {
                    const $t15578_i10218_i10622_i10936_i11244 = (() => {
                      {
                        const $t15577_i10217_i10621_i10935_i11243 = bits_i10215_i10619_i10933_i11241;
                        return ($t15577_i10217_i10621_i10935_i11243 / 4.50359962737e+15);
                      }
                    })();
                    return { _0: $t15578_i10218_i10622_i10936_i11244, _1: rng2_i10216_i10620_i10934_i11242 };
                  }
                }
              }
            }
          })();
          {
            const t_i10624_i10938_i11246 = $p29052_i10623_i10937_i11245._0;
            {
              const rng2_i10625_i10939_i11247 = $p29052_i10623_i10937_i11245._1;
              {
                const out_i10626_i10940_i11248 = { _0: rng2_i10625_i10939_i11247, _1: t_i10624_i10938_i11246 };
                return out_i10626_i10940_i11248;
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
                      const go_i3808 = { $: "$Clo_go$4765", _0: go$apply$4765, _1: pred_i3807 };
                      {
                        const $t302_i3809 = { $: "Nil" };
                        return go$apply$4765(go_i3808, $t28211, $t302_i3809);
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
                    const go_i3824 = { $: "$Clo_go$4796", _0: go$apply$4796, _1: pred_i3823 };
                    {
                      const $t302_i3825 = { $: "Nil" };
                      return go$apply$4796(go_i3824, $t28235, $t302_i3825);
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
                            const go_i3820 = { $: "$Clo_go$4796", _0: go$apply$4796, _1: pred_i3819 };
                            {
                              const $t302_i3821 = { $: "Nil" };
                              return go$apply$4796(go_i3820, $t28240, $t302_i3821);
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
                                  const go_i3816 = { $: "$Clo_go$4765", _0: go$apply$4765, _1: pred_i3815 };
                                  {
                                    const $t302_i3817 = { $: "Nil" };
                                    return go$apply$4765(go_i3816, $t28245, $t302_i3817);
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
                                        const go_i3812 = { $: "$Clo_go$4777", _0: go$apply$4777, _1: pred_i3811 };
                                        {
                                          const $t302_i3813 = { $: "Nil" };
                                          return go$apply$4777(go_i3812, $t28250, $t302_i3813);
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const $t28255 = game.fx_bursts;
                                    {
                                      const $t28256 = (() => {
                                        {
                                          const $t28056_i10128 = { $: "$Clo_$lam28053$3704", _0: $lam28053$apply$3704 };
                                          {
                                            const f_i3759_i10129 = $t28056_i10128;
                                            {
                                              const go_i3760_i10130 = { $: "$Clo_go$4779", _0: go$apply$4779, _1: f_i3759_i10129 };
                                              {
                                                const $t270_i3761_i10131 = { $: "Nil" };
                                                return go$apply$4779(go_i3760_i10130, dead_ast, $t270_i3761_i10131);
                                              }
                                            }
                                          }
                                        }
                                      })();
                                      {
                                        const $t28257 = (() => {
                                          {
                                            const go_i10123 = { $: "$Clo_go$4794", _0: go$apply$4794 };
                                            {
                                              const $t261_i10126 = (() => {
                                                {
                                                  const go_i4522_i10124 = { $: "$Clo_go$4319", _0: go$apply$4319 };
                                                  {
                                                    const $t253_i4523_i10125 = { $: "Nil" };
                                                    return go$apply$4319(go_i4522_i10124, $t28255, $t253_i4523_i10125);
                                                  }
                                                }
                                              })();
                                              return go$apply$4794(go_i10123, $t261_i10126, $t28256);
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
                const $p29052_i10623_i10937_i11264 = (() => {
                  {
                    const $p15579_i10214_i10618_i10932_i11259 = (() => {
                      {
                        const $p15576_i1532_i10204_i10609_i10923_i11250 = Random$next_raw(rng);
                        {
                          const hi_i1533_i10205_i10610_i10924_i11251 = $p15576_i1532_i10204_i10609_i10923_i11250._0;
                          {
                            const rng2_i1534_i10206_i10611_i10925_i11252 = $p15576_i1532_i10204_i10609_i10923_i11250._1;
                            {
                              const $p15575_i1535_i10207_i10612_i10926_i11253 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11252);
                              {
                                const lo_i1536_i10208_i10613_i10927_i11254 = $p15575_i1535_i10207_i10612_i10926_i11253._0;
                                {
                                  const rng3_i1537_i10209_i10614_i10928_i11255 = $p15575_i1535_i10207_i10612_i10926_i11253._1;
                                  {
                                    const $t15574_i1541_i10213_i10617_i10931_i11258 = (() => {
                                      {
                                        const $t15573_i1540_i10212_i10616_i10930_i11257 = (() => {
                                          {
                                            const $t15571_i1538_i10210_i10615_i10929_i11256 = march_int_and(hi_i1533_i10205_i10610_i10924_i11251, 1048575);
                                            return ($t15571_i1538_i10210_i10615_i10929_i11256 * 4294967296);
                                          }
                                        })();
                                        return ($t15573_i1540_i10212_i10616_i10930_i11257 + lo_i1536_i10208_i10613_i10927_i11254);
                                      }
                                    })();
                                    return { _0: $t15574_i1541_i10213_i10617_i10931_i11258, _1: rng3_i1537_i10209_i10614_i10928_i11255 };
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    })();
                    {
                      const bits_i10215_i10619_i10933_i11260 = $p15579_i10214_i10618_i10932_i11259._0;
                      {
                        const rng2_i10216_i10620_i10934_i11261 = $p15579_i10214_i10618_i10932_i11259._1;
                        {
                          const $t15578_i10218_i10622_i10936_i11263 = (() => {
                            {
                              const $t15577_i10217_i10621_i10935_i11262 = bits_i10215_i10619_i10933_i11260;
                              return ($t15577_i10217_i10621_i10935_i11262 / 4.50359962737e+15);
                            }
                          })();
                          return { _0: $t15578_i10218_i10622_i10936_i11263, _1: rng2_i10216_i10620_i10934_i11261 };
                        }
                      }
                    }
                  }
                })();
                {
                  const t_i10624_i10938_i11265 = $p29052_i10623_i10937_i11264._0;
                  {
                    const rng2_i10625_i10939_i11266 = $p29052_i10623_i10937_i11264._1;
                    {
                      const out_i10626_i10940_i11267 = { _0: rng2_i10625_i10939_i11266, _1: t_i10624_i10938_i11265 };
                      return out_i10626_i10940_i11267;
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
                  const $p29052_i10623_i10937_i11283 = (() => {
                    {
                      const $p15579_i10214_i10618_i10932_i11278 = (() => {
                        {
                          const $p15576_i1532_i10204_i10609_i10923_i11269 = Random$next_raw(rng);
                          {
                            const hi_i1533_i10205_i10610_i10924_i11270 = $p15576_i1532_i10204_i10609_i10923_i11269._0;
                            {
                              const rng2_i1534_i10206_i10611_i10925_i11271 = $p15576_i1532_i10204_i10609_i10923_i11269._1;
                              {
                                const $p15575_i1535_i10207_i10612_i10926_i11272 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11271);
                                {
                                  const lo_i1536_i10208_i10613_i10927_i11273 = $p15575_i1535_i10207_i10612_i10926_i11272._0;
                                  {
                                    const rng3_i1537_i10209_i10614_i10928_i11274 = $p15575_i1535_i10207_i10612_i10926_i11272._1;
                                    {
                                      const $t15574_i1541_i10213_i10617_i10931_i11277 = (() => {
                                        {
                                          const $t15573_i1540_i10212_i10616_i10930_i11276 = (() => {
                                            {
                                              const $t15571_i1538_i10210_i10615_i10929_i11275 = march_int_and(hi_i1533_i10205_i10610_i10924_i11270, 1048575);
                                              return ($t15571_i1538_i10210_i10615_i10929_i11275 * 4294967296);
                                            }
                                          })();
                                          return ($t15573_i1540_i10212_i10616_i10930_i11276 + lo_i1536_i10208_i10613_i10927_i11273);
                                        }
                                      })();
                                      return { _0: $t15574_i1541_i10213_i10617_i10931_i11277, _1: rng3_i1537_i10209_i10614_i10928_i11274 };
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      })();
                      {
                        const bits_i10215_i10619_i10933_i11279 = $p15579_i10214_i10618_i10932_i11278._0;
                        {
                          const rng2_i10216_i10620_i10934_i11280 = $p15579_i10214_i10618_i10932_i11278._1;
                          {
                            const $t15578_i10218_i10622_i10936_i11282 = (() => {
                              {
                                const $t15577_i10217_i10621_i10935_i11281 = bits_i10215_i10619_i10933_i11279;
                                return ($t15577_i10217_i10621_i10935_i11281 / 4.50359962737e+15);
                              }
                            })();
                            return { _0: $t15578_i10218_i10622_i10936_i11282, _1: rng2_i10216_i10620_i10934_i11280 };
                          }
                        }
                      }
                    }
                  })();
                  {
                    const t_i10624_i10938_i11284 = $p29052_i10623_i10937_i11283._0;
                    {
                      const rng2_i10625_i10939_i11285 = $p29052_i10623_i10937_i11283._1;
                      {
                        const out_i10626_i10940_i11286 = { _0: rng2_i10625_i10939_i11285, _1: t_i10624_i10938_i11284 };
                        return out_i10626_i10940_i11286;
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
                const $p29052_i10623_i10937_i11321 = (() => {
                  {
                    const $p15579_i10214_i10618_i10932_i11316 = (() => {
                      {
                        const $p15576_i1532_i10204_i10609_i10923_i11307 = Random$next_raw($t28306);
                        {
                          const hi_i1533_i10205_i10610_i10924_i11308 = $p15576_i1532_i10204_i10609_i10923_i11307._0;
                          {
                            const rng2_i1534_i10206_i10611_i10925_i11309 = $p15576_i1532_i10204_i10609_i10923_i11307._1;
                            {
                              const $p15575_i1535_i10207_i10612_i10926_i11310 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11309);
                              {
                                const lo_i1536_i10208_i10613_i10927_i11311 = $p15575_i1535_i10207_i10612_i10926_i11310._0;
                                {
                                  const rng3_i1537_i10209_i10614_i10928_i11312 = $p15575_i1535_i10207_i10612_i10926_i11310._1;
                                  {
                                    const $t15574_i1541_i10213_i10617_i10931_i11315 = (() => {
                                      {
                                        const $t15573_i1540_i10212_i10616_i10930_i11314 = (() => {
                                          {
                                            const $t15571_i1538_i10210_i10615_i10929_i11313 = march_int_and(hi_i1533_i10205_i10610_i10924_i11308, 1048575);
                                            return ($t15571_i1538_i10210_i10615_i10929_i11313 * 4294967296);
                                          }
                                        })();
                                        return ($t15573_i1540_i10212_i10616_i10930_i11314 + lo_i1536_i10208_i10613_i10927_i11311);
                                      }
                                    })();
                                    return { _0: $t15574_i1541_i10213_i10617_i10931_i11315, _1: rng3_i1537_i10209_i10614_i10928_i11312 };
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    })();
                    {
                      const bits_i10215_i10619_i10933_i11317 = $p15579_i10214_i10618_i10932_i11316._0;
                      {
                        const rng2_i10216_i10620_i10934_i11318 = $p15579_i10214_i10618_i10932_i11316._1;
                        {
                          const $t15578_i10218_i10622_i10936_i11320 = (() => {
                            {
                              const $t15577_i10217_i10621_i10935_i11319 = bits_i10215_i10619_i10933_i11317;
                              return ($t15577_i10217_i10621_i10935_i11319 / 4.50359962737e+15);
                            }
                          })();
                          return { _0: $t15578_i10218_i10622_i10936_i11320, _1: rng2_i10216_i10620_i10934_i11318 };
                        }
                      }
                    }
                  }
                })();
                {
                  const t_i10624_i10938_i11322 = $p29052_i10623_i10937_i11321._0;
                  {
                    const rng2_i10625_i10939_i11323 = $p29052_i10623_i10937_i11321._1;
                    {
                      const out_i10626_i10940_i11324 = { _0: rng2_i10625_i10939_i11323, _1: t_i10624_i10938_i11322 };
                      return out_i10626_i10940_i11324;
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
                              const $p29052_i10623_i10937_i11302 = (() => {
                                {
                                  const $p15579_i10214_i10618_i10932_i11297 = (() => {
                                    {
                                      const $p15576_i1532_i10204_i10609_i10923_i11288 = Random$next_raw(rng2);
                                      {
                                        const hi_i1533_i10205_i10610_i10924_i11289 = $p15576_i1532_i10204_i10609_i10923_i11288._0;
                                        {
                                          const rng2_i1534_i10206_i10611_i10925_i11290 = $p15576_i1532_i10204_i10609_i10923_i11288._1;
                                          {
                                            const $p15575_i1535_i10207_i10612_i10926_i11291 = Random$next_raw(rng2_i1534_i10206_i10611_i10925_i11290);
                                            {
                                              const lo_i1536_i10208_i10613_i10927_i11292 = $p15575_i1535_i10207_i10612_i10926_i11291._0;
                                              {
                                                const rng3_i1537_i10209_i10614_i10928_i11293 = $p15575_i1535_i10207_i10612_i10926_i11291._1;
                                                {
                                                  const $t15574_i1541_i10213_i10617_i10931_i11296 = (() => {
                                                    {
                                                      const $t15573_i1540_i10212_i10616_i10930_i11295 = (() => {
                                                        {
                                                          const $t15571_i1538_i10210_i10615_i10929_i11294 = march_int_and(hi_i1533_i10205_i10610_i10924_i11289, 1048575);
                                                          return ($t15571_i1538_i10210_i10615_i10929_i11294 * 4294967296);
                                                        }
                                                      })();
                                                      return ($t15573_i1540_i10212_i10616_i10930_i11295 + lo_i1536_i10208_i10613_i10927_i11292);
                                                    }
                                                  })();
                                                  return { _0: $t15574_i1541_i10213_i10617_i10931_i11296, _1: rng3_i1537_i10209_i10614_i10928_i11293 };
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  {
                                    const bits_i10215_i10619_i10933_i11298 = $p15579_i10214_i10618_i10932_i11297._0;
                                    {
                                      const rng2_i10216_i10620_i10934_i11299 = $p15579_i10214_i10618_i10932_i11297._1;
                                      {
                                        const $t15578_i10218_i10622_i10936_i11301 = (() => {
                                          {
                                            const $t15577_i10217_i10621_i10935_i11300 = bits_i10215_i10619_i10933_i11298;
                                            return ($t15577_i10217_i10621_i10935_i11300 / 4.50359962737e+15);
                                          }
                                        })();
                                        return { _0: $t15578_i10218_i10622_i10936_i11301, _1: rng2_i10216_i10620_i10934_i11299 };
                                      }
                                    }
                                  }
                                }
                              })();
                              {
                                const t_i10624_i10938_i11303 = $p29052_i10623_i10937_i11302._0;
                                {
                                  const rng2_i10625_i10939_i11304 = $p29052_i10623_i10937_i11302._1;
                                  {
                                    const out_i10626_i10940_i11305 = { _0: rng2_i10625_i10939_i11304, _1: t_i10624_i10938_i11303 };
                                    return out_i10626_i10940_i11305;
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
        const go_i3834 = { $: "$Clo_go$4802", _0: go$apply$4802 };
        {
          const $t508_i3835 = { $: "Nil" };
          return go$apply$4802(go_i3834, xs, idx, $t508_i3835);
        }
      }
    })();
    {
      const $t28320 = (idx + 1);
      {
        const $t28321 = List$drop$List_R_capture_radius_Float_orbits_List_R_radius_Float_speed_mult_Float_radius_Float_speed_mult_Float_x_Float_y_Float$Int(xs, $t28320);
        {
          const go_i10134 = { $: "$Clo_go$4799", _0: go$apply$4799 };
          {
            const $t261_i10137 = (() => {
              {
                const go_i4526_i10135 = { $: "$Clo_go$5259", _0: go$apply$5259 };
                {
                  const $t253_i4527_i10136 = { $: "Nil" };
                  return go$apply$5259(go_i4526_i10135, $t28319, $t253_i4527_i10136);
                }
              }
            })();
            return go$apply$4799(go_i10134, $t261_i10137, $t28321);
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
      const go_i3837 = { $: "$Clo_go$4804", _0: go$apply$4804 };
      return go$apply$4804(go_i3837, $t28324, 0);
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
          const go_i3841 = { $: "$Clo_go$4808", _0: go$apply$4808 };
          return go$apply$4808(go_i3841, $t28344, 0);
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
          const $p29052_i10623_i10956 = (() => {
            {
              const $p15579_i10214_i10618_i10951 = (() => {
                {
                  const $p15576_i1532_i10204_i10609_i10942 = Random$next_raw($t28407);
                  {
                    const hi_i1533_i10205_i10610_i10943 = $p15576_i1532_i10204_i10609_i10942._0;
                    {
                      const rng2_i1534_i10206_i10611_i10944 = $p15576_i1532_i10204_i10609_i10942._1;
                      {
                        const $p15575_i1535_i10207_i10612_i10945 = Random$next_raw(rng2_i1534_i10206_i10611_i10944);
                        {
                          const lo_i1536_i10208_i10613_i10946 = $p15575_i1535_i10207_i10612_i10945._0;
                          {
                            const rng3_i1537_i10209_i10614_i10947 = $p15575_i1535_i10207_i10612_i10945._1;
                            {
                              const $t15574_i1541_i10213_i10617_i10950 = (() => {
                                {
                                  const $t15573_i1540_i10212_i10616_i10949 = (() => {
                                    {
                                      const $t15571_i1538_i10210_i10615_i10948 = march_int_and(hi_i1533_i10205_i10610_i10943, 1048575);
                                      return ($t15571_i1538_i10210_i10615_i10948 * 4294967296);
                                    }
                                  })();
                                  return ($t15573_i1540_i10212_i10616_i10949 + lo_i1536_i10208_i10613_i10946);
                                }
                              })();
                              return { _0: $t15574_i1541_i10213_i10617_i10950, _1: rng3_i1537_i10209_i10614_i10947 };
                            }
                          }
                        }
                      }
                    }
                  }
                }
              })();
              {
                const bits_i10215_i10619_i10952 = $p15579_i10214_i10618_i10951._0;
                {
                  const rng2_i10216_i10620_i10953 = $p15579_i10214_i10618_i10951._1;
                  {
                    const $t15578_i10218_i10622_i10955 = (() => {
                      {
                        const $t15577_i10217_i10621_i10954 = bits_i10215_i10619_i10952;
                        return ($t15577_i10217_i10621_i10954 / 4.50359962737e+15);
                      }
                    })();
                    return { _0: $t15578_i10218_i10622_i10955, _1: rng2_i10216_i10620_i10953 };
                  }
                }
              }
            }
          })();
          {
            const t_i10624_i10957 = $p29052_i10623_i10956._0;
            {
              const rng2_i10625_i10958 = $p29052_i10623_i10956._1;
              {
                const out_i10626_i10959 = { _0: rng2_i10625_i10958, _1: t_i10624_i10957 };
                return out_i10626_i10959;
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
            const go_i3881 = { $: "$Clo_go$4808", _0: go$apply$4808 };
            return go$apply$4808(go_i3881, $t28494, 0);
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
                const vx_i10145 = (() => {
                  {
                    const $t28529_i10144 = (() => {
                      {
                        const $t28527_i10142 = (1. * 340.);
                        {
                          const $t28528_i10143 = Math.sin(angle);
                          return ($t28527_i10142 * $t28528_i10143);
                        }
                      }
                    })();
                    return (0. - $t28529_i10144);
                  }
                })();
                {
                  const vy_i10148 = (() => {
                    {
                      const $t28531_i10146 = (1. * 340.);
                      {
                        const $t28532_i10147 = Math.cos(angle);
                        return ($t28531_i10146 * $t28532_i10147);
                      }
                    }
                  })();
                  {
                    const $t28533_i10149 = { $: "Flying", _0: vx_i10145, _1: vy_i10148 };
                    return ({ ...game, mode: $t28533_i10149 });
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
          const go_i3896 = { $: "$Clo_go$4319", _0: go$apply$4319 };
          {
            const $t253_i3897 = { $: "Nil" };
            return go$apply$4319(go_i3896, acc, $t253_i3897);
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
                          const vx_i10157 = (() => {
                            {
                              const $t28529_i10156 = (() => {
                                {
                                  const $t28527_i10154 = (1. * 340.);
                                  {
                                    const $t28528_i10155 = Math.sin(angle);
                                    return ($t28527_i10154 * $t28528_i10155);
                                  }
                                }
                              })();
                              return (0. - $t28529_i10156);
                            }
                          })();
                          {
                            const vy_i10160 = (() => {
                              {
                                const $t28531_i10158 = (1. * 340.);
                                {
                                  const $t28532_i10159 = Math.cos(angle);
                                  return ($t28531_i10158 * $t28532_i10159);
                                }
                              }
                            })();
                            {
                              const $t28533_i10161 = { $: "Flying", _0: vx_i10157, _1: vy_i10160 };
                              return ({ ...game, mode: $t28533_i10161 });
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
                const $t669_i3920 = { $: "$Clo_$lam668$4792", _0: $lam668$apply$4792, _1: k };
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
                          const go_i10164 = { $: "$Clo_go$4811", _0: go$apply$4811 };
                          {
                            const $t261_i10167 = (() => {
                              {
                                const go_i4533_i10165 = { $: "$Clo_go$5261", _0: go$apply$5261 };
                                {
                                  const $t253_i4534_i10166 = { $: "Nil" };
                                  return go$apply$5261(go_i4533_i10165, $t28733, $t253_i4534_i10166);
                                }
                              }
                            })();
                            return go$apply$4811(go_i10164, $t261_i10167, $t28735);
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
                                  const go_i10171 = { $: "$Clo_go$4799", _0: go$apply$4799 };
                                  {
                                    const $t261_i10174 = (() => {
                                      {
                                        const go_i4526_i10172 = { $: "$Clo_go$5259", _0: go$apply$5259 };
                                        {
                                          const $t253_i4527_i10173 = { $: "Nil" };
                                          return go$apply$5259(go_i4526_i10172, $t28760, $t253_i4527_i10173);
                                        }
                                      }
                                    })();
                                    return go$apply$4799(go_i10171, $t261_i10174, $t28762);
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
                                    const go_i3923 = { $: "$Clo_go$4759", _0: go$apply$4759 };
                                    return go$apply$4759(go_i3923, $t28764, 0);
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
                  const go_i3927 = { $: "$Clo_go$4813", _0: go$apply$4813 };
                  {
                    const $t508_i3928 = { $: "Nil" };
                    return go$apply$4813(go_i3927, $t28788, 10, $t508_i3928);
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
            const $p28957_i10187 = (() => {
              {
                const $t28956_i10176 = game.rng;
                {
                  const $p15576_i3946_i10177 = Random$next_raw($t28956_i10176);
                  {
                    const hi_i3947_i10178 = $p15576_i3946_i10177._0;
                    {
                      const rng2_i3948_i10179 = $p15576_i3946_i10177._1;
                      {
                        const $p15575_i3949_i10180 = Random$next_raw(rng2_i3948_i10179);
                        {
                          const lo_i3950_i10181 = $p15575_i3949_i10180._0;
                          {
                            const rng3_i3951_i10182 = $p15575_i3949_i10180._1;
                            {
                              const $t15574_i3955_i10186 = (() => {
                                {
                                  const $t15573_i3954_i10185 = (() => {
                                    {
                                      const $t15571_i3952_i10183 = march_int_and(hi_i3947_i10178, 1048575);
                                      return ($t15571_i3952_i10183 * 4294967296);
                                    }
                                  })();
                                  return ($t15573_i3954_i10185 + lo_i3950_i10181);
                                }
                              })();
                              return { _0: $t15574_i3955_i10186, _1: rng3_i3951_i10182 };
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
              const s_i10188 = $p28957_i10187._0;
              return s_i10188;
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
        const $p28957_i10201 = (() => {
          {
            const $t28956_i10190 = game.rng;
            {
              const $p15576_i3946_i10191 = Random$next_raw($t28956_i10190);
              {
                const hi_i3947_i10192 = $p15576_i3946_i10191._0;
                {
                  const rng2_i3948_i10193 = $p15576_i3946_i10191._1;
                  {
                    const $p15575_i3949_i10194 = Random$next_raw(rng2_i3948_i10193);
                    {
                      const lo_i3950_i10195 = $p15575_i3949_i10194._0;
                      {
                        const rng3_i3951_i10196 = $p15575_i3949_i10194._1;
                        {
                          const $t15574_i3955_i10200 = (() => {
                            {
                              const $t15573_i3954_i10199 = (() => {
                                {
                                  const $t15571_i3952_i10197 = march_int_and(hi_i3947_i10192, 1048575);
                                  return ($t15571_i3952_i10197 * 4294967296);
                                }
                              })();
                              return ($t15573_i3954_i10199 + lo_i3950_i10195);
                            }
                          })();
                          return { _0: $t15574_i3955_i10200, _1: rng3_i3951_i10196 };
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
          const s_i10202 = $p28957_i10201._0;
          return s_i10202;
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
                  const go_i3961 = { $: "$Clo_go$4815", _0: go$apply$4815, _1: f_i3960 };
                  {
                    const $t270_i3962 = { $: "Nil" };
                    return go$apply$4815(go_i3961, runs, $t270_i3962);
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
            const go_i3970 = { $: "$Clo_go$4817", _0: go$apply$4817 };
            {
              const $t253_i3971 = { $: "Nil" };
              return go$apply$4817(go_i3970, acc, $t253_i3971);
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
        const $p29052_i10737 = (() => {
          {
            const $p15579_i10214_i10732 = (() => {
              {
                const $p15576_i1532_i10204_i10723 = Random$next_raw(rng);
                {
                  const hi_i1533_i10205_i10724 = $p15576_i1532_i10204_i10723._0;
                  {
                    const rng2_i1534_i10206_i10725 = $p15576_i1532_i10204_i10723._1;
                    {
                      const $p15575_i1535_i10207_i10726 = Random$next_raw(rng2_i1534_i10206_i10725);
                      {
                        const lo_i1536_i10208_i10727 = $p15575_i1535_i10207_i10726._0;
                        {
                          const rng3_i1537_i10209_i10728 = $p15575_i1535_i10207_i10726._1;
                          {
                            const $t15574_i1541_i10213_i10731 = (() => {
                              {
                                const $t15573_i1540_i10212_i10730 = (() => {
                                  {
                                    const $t15571_i1538_i10210_i10729 = march_int_and(hi_i1533_i10205_i10724, 1048575);
                                    return ($t15571_i1538_i10210_i10729 * 4294967296);
                                  }
                                })();
                                return ($t15573_i1540_i10212_i10730 + lo_i1536_i10208_i10727);
                              }
                            })();
                            return { _0: $t15574_i1541_i10213_i10731, _1: rng3_i1537_i10209_i10728 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const bits_i10215_i10733 = $p15579_i10214_i10732._0;
              {
                const rng2_i10216_i10734 = $p15579_i10214_i10732._1;
                {
                  const $t15578_i10218_i10736 = (() => {
                    {
                      const $t15577_i10217_i10735 = bits_i10215_i10733;
                      return ($t15577_i10217_i10735 / 4.50359962737e+15);
                    }
                  })();
                  return { _0: $t15578_i10218_i10736, _1: rng2_i10216_i10734 };
                }
              }
            }
          }
        })();
        {
          const t_i10738 = $p29052_i10737._0;
          {
            const rng2_i10739 = $p29052_i10737._1;
            {
              const out_i10740 = { _0: rng2_i10739, _1: t_i10738 };
              return out_i10740;
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
              const $p29052_i10718 = (() => {
                {
                  const $p15579_i10214_i10713 = (() => {
                    {
                      const $p15576_i1532_i10204_i10704 = Random$next_raw(r1);
                      {
                        const hi_i1533_i10205_i10705 = $p15576_i1532_i10204_i10704._0;
                        {
                          const rng2_i1534_i10206_i10706 = $p15576_i1532_i10204_i10704._1;
                          {
                            const $p15575_i1535_i10207_i10707 = Random$next_raw(rng2_i1534_i10206_i10706);
                            {
                              const lo_i1536_i10208_i10708 = $p15575_i1535_i10207_i10707._0;
                              {
                                const rng3_i1537_i10209_i10709 = $p15575_i1535_i10207_i10707._1;
                                {
                                  const $t15574_i1541_i10213_i10712 = (() => {
                                    {
                                      const $t15573_i1540_i10212_i10711 = (() => {
                                        {
                                          const $t15571_i1538_i10210_i10710 = march_int_and(hi_i1533_i10205_i10705, 1048575);
                                          return ($t15571_i1538_i10210_i10710 * 4294967296);
                                        }
                                      })();
                                      return ($t15573_i1540_i10212_i10711 + lo_i1536_i10208_i10708);
                                    }
                                  })();
                                  return { _0: $t15574_i1541_i10213_i10712, _1: rng3_i1537_i10209_i10709 };
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  })();
                  {
                    const bits_i10215_i10714 = $p15579_i10214_i10713._0;
                    {
                      const rng2_i10216_i10715 = $p15579_i10214_i10713._1;
                      {
                        const $t15578_i10218_i10717 = (() => {
                          {
                            const $t15577_i10217_i10716 = bits_i10215_i10714;
                            return ($t15577_i10217_i10716 / 4.50359962737e+15);
                          }
                        })();
                        return { _0: $t15578_i10218_i10717, _1: rng2_i10216_i10715 };
                      }
                    }
                  }
                }
              })();
              {
                const t_i10719 = $p29052_i10718._0;
                {
                  const rng2_i10720 = $p29052_i10718._1;
                  {
                    const out_i10721 = { _0: rng2_i10720, _1: t_i10719 };
                    return out_i10721;
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
                    const $p29052_i10699 = (() => {
                      {
                        const $p15579_i10214_i10694 = (() => {
                          {
                            const $p15576_i1532_i10204_i10685 = Random$next_raw(r2);
                            {
                              const hi_i1533_i10205_i10686 = $p15576_i1532_i10204_i10685._0;
                              {
                                const rng2_i1534_i10206_i10687 = $p15576_i1532_i10204_i10685._1;
                                {
                                  const $p15575_i1535_i10207_i10688 = Random$next_raw(rng2_i1534_i10206_i10687);
                                  {
                                    const lo_i1536_i10208_i10689 = $p15575_i1535_i10207_i10688._0;
                                    {
                                      const rng3_i1537_i10209_i10690 = $p15575_i1535_i10207_i10688._1;
                                      {
                                        const $t15574_i1541_i10213_i10693 = (() => {
                                          {
                                            const $t15573_i1540_i10212_i10692 = (() => {
                                              {
                                                const $t15571_i1538_i10210_i10691 = march_int_and(hi_i1533_i10205_i10686, 1048575);
                                                return ($t15571_i1538_i10210_i10691 * 4294967296);
                                              }
                                            })();
                                            return ($t15573_i1540_i10212_i10692 + lo_i1536_i10208_i10689);
                                          }
                                        })();
                                        return { _0: $t15574_i1541_i10213_i10693, _1: rng3_i1537_i10209_i10690 };
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        })();
                        {
                          const bits_i10215_i10695 = $p15579_i10214_i10694._0;
                          {
                            const rng2_i10216_i10696 = $p15579_i10214_i10694._1;
                            {
                              const $t15578_i10218_i10698 = (() => {
                                {
                                  const $t15577_i10217_i10697 = bits_i10215_i10695;
                                  return ($t15577_i10217_i10697 / 4.50359962737e+15);
                                }
                              })();
                              return { _0: $t15578_i10218_i10698, _1: rng2_i10216_i10696 };
                            }
                          }
                        }
                      }
                    })();
                    {
                      const t_i10700 = $p29052_i10699._0;
                      {
                        const rng2_i10701 = $p29052_i10699._1;
                        {
                          const out_i10702 = { _0: rng2_i10701, _1: t_i10700 };
                          return out_i10702;
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
                          const $p29052_i10680 = (() => {
                            {
                              const $p15579_i10214_i10675 = (() => {
                                {
                                  const $p15576_i1532_i10204_i10666 = Random$next_raw(r3);
                                  {
                                    const hi_i1533_i10205_i10667 = $p15576_i1532_i10204_i10666._0;
                                    {
                                      const rng2_i1534_i10206_i10668 = $p15576_i1532_i10204_i10666._1;
                                      {
                                        const $p15575_i1535_i10207_i10669 = Random$next_raw(rng2_i1534_i10206_i10668);
                                        {
                                          const lo_i1536_i10208_i10670 = $p15575_i1535_i10207_i10669._0;
                                          {
                                            const rng3_i1537_i10209_i10671 = $p15575_i1535_i10207_i10669._1;
                                            {
                                              const $t15574_i1541_i10213_i10674 = (() => {
                                                {
                                                  const $t15573_i1540_i10212_i10673 = (() => {
                                                    {
                                                      const $t15571_i1538_i10210_i10672 = march_int_and(hi_i1533_i10205_i10667, 1048575);
                                                      return ($t15571_i1538_i10210_i10672 * 4294967296);
                                                    }
                                                  })();
                                                  return ($t15573_i1540_i10212_i10673 + lo_i1536_i10208_i10670);
                                                }
                                              })();
                                              return { _0: $t15574_i1541_i10213_i10674, _1: rng3_i1537_i10209_i10671 };
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              })();
                              {
                                const bits_i10215_i10676 = $p15579_i10214_i10675._0;
                                {
                                  const rng2_i10216_i10677 = $p15579_i10214_i10675._1;
                                  {
                                    const $t15578_i10218_i10679 = (() => {
                                      {
                                        const $t15577_i10217_i10678 = bits_i10215_i10676;
                                        return ($t15577_i10217_i10678 / 4.50359962737e+15);
                                      }
                                    })();
                                    return { _0: $t15578_i10218_i10679, _1: rng2_i10216_i10677 };
                                  }
                                }
                              }
                            }
                          })();
                          {
                            const t_i10681 = $p29052_i10680._0;
                            {
                              const rng2_i10682 = $p29052_i10680._1;
                              {
                                const out_i10683 = { _0: rng2_i10682, _1: t_i10681 };
                                return out_i10683;
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
                                const $p29052_i10661 = (() => {
                                  {
                                    const $p15579_i10214_i10656 = (() => {
                                      {
                                        const $p15576_i1532_i10204_i10647 = Random$next_raw(r4);
                                        {
                                          const hi_i1533_i10205_i10648 = $p15576_i1532_i10204_i10647._0;
                                          {
                                            const rng2_i1534_i10206_i10649 = $p15576_i1532_i10204_i10647._1;
                                            {
                                              const $p15575_i1535_i10207_i10650 = Random$next_raw(rng2_i1534_i10206_i10649);
                                              {
                                                const lo_i1536_i10208_i10651 = $p15575_i1535_i10207_i10650._0;
                                                {
                                                  const rng3_i1537_i10209_i10652 = $p15575_i1535_i10207_i10650._1;
                                                  {
                                                    const $t15574_i1541_i10213_i10655 = (() => {
                                                      {
                                                        const $t15573_i1540_i10212_i10654 = (() => {
                                                          {
                                                            const $t15571_i1538_i10210_i10653 = march_int_and(hi_i1533_i10205_i10648, 1048575);
                                                            return ($t15571_i1538_i10210_i10653 * 4294967296);
                                                          }
                                                        })();
                                                        return ($t15573_i1540_i10212_i10654 + lo_i1536_i10208_i10651);
                                                      }
                                                    })();
                                                    return { _0: $t15574_i1541_i10213_i10655, _1: rng3_i1537_i10209_i10652 };
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    })();
                                    {
                                      const bits_i10215_i10657 = $p15579_i10214_i10656._0;
                                      {
                                        const rng2_i10216_i10658 = $p15579_i10214_i10656._1;
                                        {
                                          const $t15578_i10218_i10660 = (() => {
                                            {
                                              const $t15577_i10217_i10659 = bits_i10215_i10657;
                                              return ($t15577_i10217_i10659 / 4.50359962737e+15);
                                            }
                                          })();
                                          return { _0: $t15578_i10218_i10660, _1: rng2_i10216_i10658 };
                                        }
                                      }
                                    }
                                  }
                                })();
                                {
                                  const t_i10662 = $p29052_i10661._0;
                                  {
                                    const rng2_i10663 = $p29052_i10661._1;
                                    {
                                      const out_i10664 = { _0: rng2_i10663, _1: t_i10662 };
                                      return out_i10664;
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
                                      const $p29052_i10642 = (() => {
                                        {
                                          const $p15579_i10214_i10637 = (() => {
                                            {
                                              const $p15576_i1532_i10204_i10628 = Random$next_raw(r5);
                                              {
                                                const hi_i1533_i10205_i10629 = $p15576_i1532_i10204_i10628._0;
                                                {
                                                  const rng2_i1534_i10206_i10630 = $p15576_i1532_i10204_i10628._1;
                                                  {
                                                    const $p15575_i1535_i10207_i10631 = Random$next_raw(rng2_i1534_i10206_i10630);
                                                    {
                                                      const lo_i1536_i10208_i10632 = $p15575_i1535_i10207_i10631._0;
                                                      {
                                                        const rng3_i1537_i10209_i10633 = $p15575_i1535_i10207_i10631._1;
                                                        {
                                                          const $t15574_i1541_i10213_i10636 = (() => {
                                                            {
                                                              const $t15573_i1540_i10212_i10635 = (() => {
                                                                {
                                                                  const $t15571_i1538_i10210_i10634 = march_int_and(hi_i1533_i10205_i10629, 1048575);
                                                                  return ($t15571_i1538_i10210_i10634 * 4294967296);
                                                                }
                                                              })();
                                                              return ($t15573_i1540_i10212_i10635 + lo_i1536_i10208_i10632);
                                                            }
                                                          })();
                                                          return { _0: $t15574_i1541_i10213_i10636, _1: rng3_i1537_i10209_i10633 };
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          })();
                                          {
                                            const bits_i10215_i10638 = $p15579_i10214_i10637._0;
                                            {
                                              const rng2_i10216_i10639 = $p15579_i10214_i10637._1;
                                              {
                                                const $t15578_i10218_i10641 = (() => {
                                                  {
                                                    const $t15577_i10217_i10640 = bits_i10215_i10638;
                                                    return ($t15577_i10217_i10640 / 4.50359962737e+15);
                                                  }
                                                })();
                                                return { _0: $t15578_i10218_i10641, _1: rng2_i10216_i10639 };
                                              }
                                            }
                                          }
                                        }
                                      })();
                                      {
                                        const t_i10643 = $p29052_i10642._0;
                                        {
                                          const rng2_i10644 = $p29052_i10642._1;
                                          {
                                            const out_i10645 = { _0: rng2_i10644, _1: t_i10643 };
                                            return out_i10645;
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
                          const x_i10276 = (() => {
                            {
                              const $t29119_i10275 = (() => {
                                {
                                  const $t29118_i10274 = (() => {
                                    {
                                      const $t29116_i10272 = (() => {
                                        {
                                          const $t29114_i10270 = ($t29128 * 12.9898);
                                          {
                                            const $t29115_i10271 = (sy * 78.233);
                                            return ($t29114_i10270 + $t29115_i10271);
                                          }
                                        }
                                      })();
                                      {
                                        const $t29117_i10273 = (seed * 37.719);
                                        return ($t29116_i10272 + $t29117_i10273);
                                      }
                                    }
                                  })();
                                  return Math.sin($t29118_i10274);
                                }
                              })();
                              return ($t29119_i10275 * 43758.5453);
                            }
                          })();
                          {
                            const $t29120_i10278 = (() => {
                              {
                                const $t1582_i4013_i10277 = Math.floor(x_i10276);
                                return $t1582_i4013_i10277;
                              }
                            })();
                            return (x_i10276 - $t29120_i10278);
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
                            const x_i10264 = (() => {
                              {
                                const $t29119_i10263 = (() => {
                                  {
                                    const $t29118_i10262 = (() => {
                                      {
                                        const $t29116_i10260 = (() => {
                                          {
                                            const $t29114_i10258 = (sx * 12.9898);
                                            {
                                              const $t29115_i10259 = ($t29133 * 78.233);
                                              return ($t29114_i10258 + $t29115_i10259);
                                            }
                                          }
                                        })();
                                        {
                                          const $t29117_i10261 = (seed * 37.719);
                                          return ($t29116_i10260 + $t29117_i10261);
                                        }
                                      }
                                    })();
                                    return Math.sin($t29118_i10262);
                                  }
                                })();
                                return ($t29119_i10263 * 43758.5453);
                              }
                            })();
                            {
                              const $t29120_i10266 = (() => {
                                {
                                  const $t1582_i4013_i10265 = Math.floor(x_i10264);
                                  return $t1582_i4013_i10265;
                                }
                              })();
                              return (x_i10264 - $t29120_i10266);
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
                          const x_i10252 = (() => {
                            {
                              const $t29119_i10251 = (() => {
                                {
                                  const $t29118_i10250 = (() => {
                                    {
                                      const $t29116_i10248 = (() => {
                                        {
                                          const $t29114_i10246 = ($t29138 * 12.9898);
                                          {
                                            const $t29115_i10247 = (sy * 78.233);
                                            return ($t29114_i10246 + $t29115_i10247);
                                          }
                                        }
                                      })();
                                      {
                                        const $t29117_i10249 = (seed * 37.719);
                                        return ($t29116_i10248 + $t29117_i10249);
                                      }
                                    }
                                  })();
                                  return Math.sin($t29118_i10250);
                                }
                              })();
                              return ($t29119_i10251 * 43758.5453);
                            }
                          })();
                          {
                            const $t29120_i10254 = (() => {
                              {
                                const $t1582_i4013_i10253 = Math.floor(x_i10252);
                                return $t1582_i4013_i10253;
                              }
                            })();
                            return (x_i10252 - $t29120_i10254);
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
                            const x_i10240 = (() => {
                              {
                                const $t29119_i10239 = (() => {
                                  {
                                    const $t29118_i10238 = (() => {
                                      {
                                        const $t29116_i10236 = (() => {
                                          {
                                            const $t29114_i10234 = (sx * 12.9898);
                                            {
                                              const $t29115_i10235 = ($t29142 * 78.233);
                                              return ($t29114_i10234 + $t29115_i10235);
                                            }
                                          }
                                        })();
                                        {
                                          const $t29117_i10237 = (seed * 37.719);
                                          return ($t29116_i10236 + $t29117_i10237);
                                        }
                                      }
                                    })();
                                    return Math.sin($t29118_i10238);
                                  }
                                })();
                                return ($t29119_i10239 * 43758.5453);
                              }
                            })();
                            {
                              const $t29120_i10242 = (() => {
                                {
                                  const $t1582_i4013_i10241 = Math.floor(x_i10240);
                                  return $t1582_i4013_i10241;
                                }
                              })();
                              return (x_i10240 - $t29120_i10242);
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
            const x_i10300 = (() => {
              {
                const $t29119_i10299 = (() => {
                  {
                    const $t29118_i10298 = (() => {
                      {
                        const $t29116_i10296 = (() => {
                          {
                            const $t29114_i10294 = (sx * 12.9898);
                            {
                              const $t29115_i10295 = (sy * 78.233);
                              return ($t29114_i10294 + $t29115_i10295);
                            }
                          }
                        })();
                        {
                          const $t29117_i10297 = (seed * 37.719);
                          return ($t29116_i10296 + $t29117_i10297);
                        }
                      }
                    })();
                    return Math.sin($t29118_i10298);
                  }
                })();
                return ($t29119_i10299 * 43758.5453);
              }
            })();
            {
              const $t29120_i10302 = (() => {
                {
                  const $t1582_i4013_i10301 = Math.floor(x_i10300);
                  return $t1582_i4013_i10301;
                }
              })();
              return (x_i10300 - $t29120_i10302);
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
                const x_i10288 = (() => {
                  {
                    const $t29119_i10287 = (() => {
                      {
                        const $t29118_i10286 = (() => {
                          {
                            const $t29116_i10284 = (() => {
                              {
                                const $t29114_i10282 = ($t29155 * 12.9898);
                                {
                                  const $t29115_i10283 = (sy * 78.233);
                                  return ($t29114_i10282 + $t29115_i10283);
                                }
                              }
                            })();
                            {
                              const $t29117_i10285 = (seed * 37.719);
                              return ($t29116_i10284 + $t29117_i10285);
                            }
                          }
                        })();
                        return Math.sin($t29118_i10286);
                      }
                    })();
                    return ($t29119_i10287 * 43758.5453);
                  }
                })();
                {
                  const $t29120_i10290 = (() => {
                    {
                      const $t1582_i4013_i10289 = Math.floor(x_i10288);
                      return $t1582_i4013_i10289;
                    }
                  })();
                  return (x_i10288 - $t29120_i10290);
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
                  const $t29125_i10755 = (() => {
                    {
                      const $t29124_i10754 = (() => {
                        {
                          const $t29123_i10744 = (sx + 3.);
                          {
                            const x_i10228_i10751 = (() => {
                              {
                                const $t29119_i10227_i10750 = (() => {
                                  {
                                    const $t29118_i10226_i10749 = (() => {
                                      {
                                        const $t29116_i10224_i10747 = (() => {
                                          {
                                            const $t29114_i10222_i10745 = ($t29123_i10744 * 12.9898);
                                            {
                                              const $t29115_i10223_i10746 = (sy * 78.233);
                                              return ($t29114_i10222_i10745 + $t29115_i10223_i10746);
                                            }
                                          }
                                        })();
                                        {
                                          const $t29117_i10225_i10748 = (seed * 37.719);
                                          return ($t29116_i10224_i10747 + $t29117_i10225_i10748);
                                        }
                                      }
                                    })();
                                    return Math.sin($t29118_i10226_i10749);
                                  }
                                })();
                                return ($t29119_i10227_i10750 * 43758.5453);
                              }
                            })();
                            {
                              const $t29120_i10230_i10753 = (() => {
                                {
                                  const $t1582_i4013_i10229_i10752 = Math.floor(x_i10228_i10751);
                                  return $t1582_i4013_i10229_i10752;
                                }
                              })();
                              return (x_i10228_i10751 - $t29120_i10230_i10753);
                            }
                          }
                        }
                      })();
                      return ($t29124_i10754 < 0.5);
                    }
                  })();
                  if ($t29125_i10755 === true) {
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
                      const go_i10305 = { $: "$Clo_go$4819", _0: go$apply$4819 };
                      {
                        const $t261_i10308 = (() => {
                          {
                            const go_i4536_i10306 = { $: "$Clo_go$5263", _0: go$apply$5263 };
                            {
                              const $t253_i4537_i10307 = { $: "Nil" };
                              return go$apply$5263(go_i4536_i10306, $t29197, $t253_i4537_i10307);
                            }
                          }
                        })();
                        return go$apply$4819(go_i10305, $t261_i10308, acc);
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
                  const x_i10366 = (() => {
                    {
                      const $t29119_i10365 = (() => {
                        {
                          const $t29118_i10364 = (() => {
                            {
                              const $t29116_i10362 = (() => {
                                {
                                  const $t29114_i10360 = (bf * 12.9898);
                                  {
                                    const $t29115_i10361 = ($t29222 * 78.233);
                                    return ($t29114_i10360 + $t29115_i10361);
                                  }
                                }
                              })();
                              {
                                const $t29117_i10363 = (s2 * 37.719);
                                return ($t29116_i10362 + $t29117_i10363);
                              }
                            }
                          })();
                          return Math.sin($t29118_i10364);
                        }
                      })();
                      return ($t29119_i10365 * 43758.5453);
                    }
                  })();
                  {
                    const $t29120_i10368 = (() => {
                      {
                        const $t1582_i4013_i10367 = Math.floor(x_i10366);
                        return $t1582_i4013_i10367;
                      }
                    })();
                    return (x_i10366 - $t29120_i10368);
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
                        const x_i10354 = (() => {
                          {
                            const $t29119_i10353 = (() => {
                              {
                                const $t29118_i10352 = (() => {
                                  {
                                    const $t29116_i10350 = (() => {
                                      {
                                        const $t29114_i10348 = ($t29227 * 12.9898);
                                        {
                                          const $t29115_i10349 = ($t29228 * 78.233);
                                          return ($t29114_i10348 + $t29115_i10349);
                                        }
                                      }
                                    })();
                                    {
                                      const $t29117_i10351 = (s2 * 37.719);
                                      return ($t29116_i10350 + $t29117_i10351);
                                    }
                                  }
                                })();
                                return Math.sin($t29118_i10352);
                              }
                            })();
                            return ($t29119_i10353 * 43758.5453);
                          }
                        })();
                        {
                          const $t29120_i10356 = (() => {
                            {
                              const $t1582_i4013_i10355 = Math.floor(x_i10354);
                              return $t1582_i4013_i10355;
                            }
                          })();
                          return (x_i10354 - $t29120_i10356);
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
                        const x_i10342 = (() => {
                          {
                            const $t29119_i10341 = (() => {
                              {
                                const $t29118_i10340 = (() => {
                                  {
                                    const $t29116_i10338 = (() => {
                                      {
                                        const $t29114_i10336 = (bf * 12.9898);
                                        {
                                          const $t29115_i10337 = ($t29229 * 78.233);
                                          return ($t29114_i10336 + $t29115_i10337);
                                        }
                                      }
                                    })();
                                    {
                                      const $t29117_i10339 = (s2 * 37.719);
                                      return ($t29116_i10338 + $t29117_i10339);
                                    }
                                  }
                                })();
                                return Math.sin($t29118_i10340);
                              }
                            })();
                            return ($t29119_i10341 * 43758.5453);
                          }
                        })();
                        {
                          const $t29120_i10344 = (() => {
                            {
                              const $t1582_i4013_i10343 = Math.floor(x_i10342);
                              return $t1582_i4013_i10343;
                            }
                          })();
                          return (x_i10342 - $t29120_i10344);
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
                                const x_i10330 = (() => {
                                  {
                                    const $t29119_i10329 = (() => {
                                      {
                                        const $t29118_i10328 = (() => {
                                          {
                                            const $t29116_i10326 = (() => {
                                              {
                                                const $t29114_i10324 = ($t29238 * 12.9898);
                                                {
                                                  const $t29115_i10325 = ($t29239 * 78.233);
                                                  return ($t29114_i10324 + $t29115_i10325);
                                                }
                                              }
                                            })();
                                            {
                                              const $t29117_i10327 = (s2 * 37.719);
                                              return ($t29116_i10326 + $t29117_i10327);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29118_i10328);
                                      }
                                    })();
                                    return ($t29119_i10329 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29120_i10332 = (() => {
                                    {
                                      const $t1582_i4013_i10331 = Math.floor(x_i10330);
                                      return $t1582_i4013_i10331;
                                    }
                                  })();
                                  return (x_i10330 - $t29120_i10332);
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
                                          const x_i10318 = (() => {
                                            {
                                              const $t29119_i10317 = (() => {
                                                {
                                                  const $t29118_i10316 = (() => {
                                                    {
                                                      const $t29116_i10314 = (() => {
                                                        {
                                                          const $t29114_i10312 = (bf * 12.9898);
                                                          {
                                                            const $t29115_i10313 = ($t29243 * 78.233);
                                                            return ($t29114_i10312 + $t29115_i10313);
                                                          }
                                                        }
                                                      })();
                                                      {
                                                        const $t29117_i10315 = (s2 * 37.719);
                                                        return ($t29116_i10314 + $t29117_i10315);
                                                      }
                                                    }
                                                  })();
                                                  return Math.sin($t29118_i10316);
                                                }
                                              })();
                                              return ($t29119_i10317 * 43758.5453);
                                            }
                                          })();
                                          {
                                            const $t29120_i10320 = (() => {
                                              {
                                                const $t1582_i4013_i10319 = Math.floor(x_i10318);
                                                return $t1582_i4013_i10319;
                                              }
                                            })();
                                            return (x_i10318 - $t29120_i10320);
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
                        const go_i10371 = { $: "$Clo_go$4819", _0: go$apply$4819 };
                        {
                          const $t261_i10374 = (() => {
                            {
                              const go_i4536_i10372 = { $: "$Clo_go$5263", _0: go$apply$5263 };
                              {
                                const $t253_i4537_i10373 = { $: "Nil" };
                                return go$apply$5263(go_i4536_i10372, star_clouds, $t253_i4537_i10373);
                              }
                            }
                          })();
                          return go$apply$4819(go_i10371, $t261_i10374, free_clouds);
                        }
                      }
                    }
                  }
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
              const $p29052_i10623_i10975 = (() => {
                {
                  const $p15579_i10214_i10618_i10970 = (() => {
                    {
                      const $p15576_i1532_i10204_i10609_i10961 = Random$next_raw(rng);
                      {
                        const hi_i1533_i10205_i10610_i10962 = $p15576_i1532_i10204_i10609_i10961._0;
                        {
                          const rng2_i1534_i10206_i10611_i10963 = $p15576_i1532_i10204_i10609_i10961._1;
                          {
                            const $p15575_i1535_i10207_i10612_i10964 = Random$next_raw(rng2_i1534_i10206_i10611_i10963);
                            {
                              const lo_i1536_i10208_i10613_i10965 = $p15575_i1535_i10207_i10612_i10964._0;
                              {
                                const rng3_i1537_i10209_i10614_i10966 = $p15575_i1535_i10207_i10612_i10964._1;
                                {
                                  const $t15574_i1541_i10213_i10617_i10969 = (() => {
                                    {
                                      const $t15573_i1540_i10212_i10616_i10968 = (() => {
                                        {
                                          const $t15571_i1538_i10210_i10615_i10967 = march_int_and(hi_i1533_i10205_i10610_i10962, 1048575);
                                          return ($t15571_i1538_i10210_i10615_i10967 * 4294967296);
                                        }
                                      })();
                                      return ($t15573_i1540_i10212_i10616_i10968 + lo_i1536_i10208_i10613_i10965);
                                    }
                                  })();
                                  return { _0: $t15574_i1541_i10213_i10617_i10969, _1: rng3_i1537_i10209_i10614_i10966 };
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  })();
                  {
                    const bits_i10215_i10619_i10971 = $p15579_i10214_i10618_i10970._0;
                    {
                      const rng2_i10216_i10620_i10972 = $p15579_i10214_i10618_i10970._1;
                      {
                        const $t15578_i10218_i10622_i10974 = (() => {
                          {
                            const $t15577_i10217_i10621_i10973 = bits_i10215_i10619_i10971;
                            return ($t15577_i10217_i10621_i10973 / 4.50359962737e+15);
                          }
                        })();
                        return { _0: $t15578_i10218_i10622_i10974, _1: rng2_i10216_i10620_i10972 };
                      }
                    }
                  }
                }
              })();
              {
                const t_i10624_i10976 = $p29052_i10623_i10975._0;
                {
                  const rng2_i10625_i10977 = $p29052_i10623_i10975._1;
                  {
                    const out_i10626_i10978 = { _0: rng2_i10625_i10977, _1: t_i10624_i10976 };
                    return out_i10626_i10978;
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
                      const go_i4052 = { $: "$Clo_go$4823", _0: go$apply$4823, _1: pred_i4051 };
                      {
                        const $t302_i4053 = { $: "Nil" };
                        return go$apply$4823(go_i4052, all_weapons, $t302_i4053);
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
                                                const go_i10377 = { $: "$Clo_go$4821", _0: go$apply$4821 };
                                                {
                                                  const $t261_i10380 = (() => {
                                                    {
                                                      const go_i4539_i10378 = { $: "$Clo_go$5265", _0: go$apply$5265 };
                                                      {
                                                        const $t253_i4540_i10379 = { $: "Nil" };
                                                        return go$apply$5265(go_i4539_i10378, unowned_weapons, $t253_i4540_i10379);
                                                      }
                                                    }
                                                  })();
                                                  return go$apply$4821(go_i10377, $t261_i10380, $t29299);
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
        const go_i4056 = { $: "$Clo_go$4826", _0: go$apply$4826 };
        {
          const $t508_i4057 = { $: "Nil" };
          return go$apply$4826(go_i4056, xs, idx, $t508_i4057);
        }
      }
    })();
    {
      const $t29301 = (idx + 1);
      {
        const $t29302 = List$drop$List_UpgradeKind$Int(xs, $t29301);
        {
          const go_i10383 = { $: "$Clo_go$4821", _0: go$apply$4821 };
          {
            const $t261_i10386 = (() => {
              {
                const go_i4539_i10384 = { $: "$Clo_go$5265", _0: go$apply$5265 };
                {
                  const $t253_i4540_i10385 = { $: "Nil" };
                  return go$apply$5265(go_i4539_i10384, $t29300, $t253_i4540_i10385);
                }
              }
            })();
            return go$apply$4821(go_i10383, $t261_i10386, $t29302);
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
        const $p29052_i10623_i10994_i11340 = (() => {
          {
            const $p15579_i10214_i10618_i10989_i11335 = (() => {
              {
                const $p15576_i1532_i10204_i10609_i10980_i11326 = Random$next_raw(rng);
                {
                  const hi_i1533_i10205_i10610_i10981_i11327 = $p15576_i1532_i10204_i10609_i10980_i11326._0;
                  {
                    const rng2_i1534_i10206_i10611_i10982_i11328 = $p15576_i1532_i10204_i10609_i10980_i11326._1;
                    {
                      const $p15575_i1535_i10207_i10612_i10983_i11329 = Random$next_raw(rng2_i1534_i10206_i10611_i10982_i11328);
                      {
                        const lo_i1536_i10208_i10613_i10984_i11330 = $p15575_i1535_i10207_i10612_i10983_i11329._0;
                        {
                          const rng3_i1537_i10209_i10614_i10985_i11331 = $p15575_i1535_i10207_i10612_i10983_i11329._1;
                          {
                            const $t15574_i1541_i10213_i10617_i10988_i11334 = (() => {
                              {
                                const $t15573_i1540_i10212_i10616_i10987_i11333 = (() => {
                                  {
                                    const $t15571_i1538_i10210_i10615_i10986_i11332 = march_int_and(hi_i1533_i10205_i10610_i10981_i11327, 1048575);
                                    return ($t15571_i1538_i10210_i10615_i10986_i11332 * 4294967296);
                                  }
                                })();
                                return ($t15573_i1540_i10212_i10616_i10987_i11333 + lo_i1536_i10208_i10613_i10984_i11330);
                              }
                            })();
                            return { _0: $t15574_i1541_i10213_i10617_i10988_i11334, _1: rng3_i1537_i10209_i10614_i10985_i11331 };
                          }
                        }
                      }
                    }
                  }
                }
              }
            })();
            {
              const bits_i10215_i10619_i10990_i11336 = $p15579_i10214_i10618_i10989_i11335._0;
              {
                const rng2_i10216_i10620_i10991_i11337 = $p15579_i10214_i10618_i10989_i11335._1;
                {
                  const $t15578_i10218_i10622_i10993_i11339 = (() => {
                    {
                      const $t15577_i10217_i10621_i10992_i11338 = bits_i10215_i10619_i10990_i11336;
                      return ($t15577_i10217_i10621_i10992_i11338 / 4.50359962737e+15);
                    }
                  })();
                  return { _0: $t15578_i10218_i10622_i10993_i11339, _1: rng2_i10216_i10620_i10991_i11337 };
                }
              }
            }
          }
        })();
        {
          const t_i10624_i10995_i11341 = $p29052_i10623_i10994_i11340._0;
          {
            const rng2_i10625_i10996_i11342 = $p29052_i10623_i10994_i11340._1;
            {
              const out_i10626_i10997_i11343 = { _0: rng2_i10625_i10996_i11342, _1: t_i10624_i10995_i11341 };
              return out_i10626_i10997_i11343;
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
              const go_i4059 = { $: "$Clo_go$4829", _0: go$apply$4829 };
              return go$apply$4829(go_i4059, pool, 0);
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
                    const go_i4064 = { $: "$Clo_go$4823", _0: go$apply$4823, _1: pred_i4063 };
                    {
                      const $t302_i4065 = { $: "Nil" };
                      return go$apply$4823(go_i4064, $t29315, $t302_i4065);
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
                      const go_i10413 = { $: "$Clo_go$4821", _0: go$apply$4821 };
                      {
                        const $t261_i10416 = (() => {
                          {
                            const go_i4539_i10414 = { $: "$Clo_go$5265", _0: go$apply$5265 };
                            {
                              const $t253_i4540_i10415 = { $: "Nil" };
                              return go$apply$5265(go_i4539_i10414, shield, $t253_i4540_i10415);
                            }
                          }
                        })();
                        return go$apply$4821(go_i10413, $t261_i10416, spec);
                      }
                    }
                  })();
                  {
                    const $t29351 = (() => {
                      {
                        const go_i10407 = { $: "$Clo_go$4821", _0: go$apply$4821 };
                        {
                          const $t261_i10410 = (() => {
                            {
                              const go_i4539_i10408 = { $: "$Clo_go$5265", _0: go$apply$5265 };
                              {
                                const $t253_i4540_i10409 = { $: "Nil" };
                                return go$apply$5265(go_i4539_i10408, deflect, $t253_i4540_i10409);
                              }
                            }
                          })();
                          return go$apply$4821(go_i10407, $t261_i10410, $t29350);
                        }
                      }
                    })();
                    {
                      const $t29352 = (() => {
                        {
                          const go_i10401 = { $: "$Clo_go$4821", _0: go$apply$4821 };
                          {
                            const $t261_i10404 = (() => {
                              {
                                const go_i4539_i10402 = { $: "$Clo_go$5265", _0: go$apply$5265 };
                                {
                                  const $t253_i4540_i10403 = { $: "Nil" };
                                  return go$apply$5265(go_i4539_i10402, ward, $t253_i4540_i10403);
                                }
                              }
                            })();
                            return go$apply$4821(go_i10401, $t261_i10404, $t29351);
                          }
                        }
                      })();
                      {
                        const $t29353 = (() => {
                          {
                            const go_i10395 = { $: "$Clo_go$4821", _0: go$apply$4821 };
                            {
                              const $t261_i10398 = (() => {
                                {
                                  const go_i4539_i10396 = { $: "$Clo_go$5265", _0: go$apply$5265 };
                                  {
                                    const $t253_i4540_i10397 = { $: "Nil" };
                                    return go$apply$5265(go_i4539_i10396, fire_rate, $t253_i4540_i10397);
                                  }
                                }
                              })();
                              return go$apply$4821(go_i10395, $t261_i10398, $t29352);
                            }
                          }
                        })();
                        {
                          const go_i10389 = { $: "$Clo_go$4821", _0: go$apply$4821 };
                          {
                            const $t261_i10392 = (() => {
                              {
                                const go_i4539_i10390 = { $: "$Clo_go$5265", _0: go$apply$5265 };
                                {
                                  const $t253_i4540_i10391 = { $: "Nil" };
                                  return go$apply$5265(go_i4539_i10390, weapons, $t253_i4540_i10391);
                                }
                              }
                            })();
                            return go$apply$4821(go_i10389, $t261_i10392, $t29353);
                          }
                        }
                      }
                    }
                  }
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
                  const $t29490_i10424 = march_string_slice(row, 0, 1);
                  return draw_sprite_row_go(ctx, row, row_idx, 1, 0, $t29490_i10424, grid_w, grid_h, target_w, target_h);
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
                    return ({ trail: $t29500, t: 0., particles: $t29501, flash: $t29502, actx: $t29503, muted: false, gl: $t29504, player_sprite: $t29505 });
                  }
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
    const $t29512 = (i >= 10);
    if ($t29512 === true) {
      return acc;
    } else {
      return (() => {
        {
          const seed = (() => {
            {
              const $t29514 = (() => {
                {
                  const $t29513 = i;
                  return ($t29513 * 7.);
                }
              })();
              return (t + $t29514);
            }
          })();
          {
            const a = (() => {
              {
                const $t29515 = (() => {
                  {
                    const x_i10449 = (() => {
                      {
                        const $t29509_i10448 = (() => {
                          {
                            const $t29508_i10447 = (() => {
                              {
                                const $t29506_i10445 = (seed * 12.9898);
                                {
                                  const $t29507_i10446 = (1. * 78.233);
                                  return ($t29506_i10445 + $t29507_i10446);
                                }
                              }
                            })();
                            return Math.sin($t29508_i10447);
                          }
                        })();
                        return ($t29509_i10448 * 43758.5453);
                      }
                    })();
                    {
                      const $t29510_i10451 = (() => {
                        {
                          const $t1582_i4087_i10450 = Math.floor(x_i10449);
                          return $t1582_i4087_i10450;
                        }
                      })();
                      return (x_i10449 - $t29510_i10451);
                    }
                  }
                })();
                return ($t29515 * 6.28318530718);
              }
            })();
            {
              const speed = (() => {
                {
                  const $t29518 = (() => {
                    {
                      const $t29517 = (() => {
                        {
                          const x_i10440 = (() => {
                            {
                              const $t29509_i10439 = (() => {
                                {
                                  const $t29508_i10438 = (() => {
                                    {
                                      const $t29506_i10436 = (seed * 12.9898);
                                      {
                                        const $t29507_i10437 = (2. * 78.233);
                                        return ($t29506_i10436 + $t29507_i10437);
                                      }
                                    }
                                  })();
                                  return Math.sin($t29508_i10438);
                                }
                              })();
                              return ($t29509_i10439 * 43758.5453);
                            }
                          })();
                          {
                            const $t29510_i10442 = (() => {
                              {
                                const $t1582_i4087_i10441 = Math.floor(x_i10440);
                                return $t1582_i4087_i10441;
                              }
                            })();
                            return (x_i10440 - $t29510_i10442);
                          }
                        }
                      })();
                      return ($t29517 * 90.);
                    }
                  })();
                  return (40. + $t29518);
                }
              })();
              {
                const life = (() => {
                  {
                    const $t29522 = (() => {
                      {
                        const $t29521 = (() => {
                          {
                            const $t29520 = (() => {
                              {
                                const x_i10431 = (() => {
                                  {
                                    const $t29509_i10430 = (() => {
                                      {
                                        const $t29508_i10429 = (() => {
                                          {
                                            const $t29506_i10427 = (seed * 12.9898);
                                            {
                                              const $t29507_i10428 = (3. * 78.233);
                                              return ($t29506_i10427 + $t29507_i10428);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29508_i10429);
                                      }
                                    })();
                                    return ($t29509_i10430 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29510_i10433 = (() => {
                                    {
                                      const $t1582_i4087_i10432 = Math.floor(x_i10431);
                                      return $t1582_i4087_i10432;
                                    }
                                  })();
                                  return (x_i10431 - $t29510_i10433);
                                }
                              }
                            })();
                            return (0.4 * $t29520);
                          }
                        })();
                        return (0.6 + $t29521);
                      }
                    })();
                    return (0.5 * $t29522);
                  }
                })();
                {
                  const p = (() => {
                    {
                      const $t29524 = (() => {
                        {
                          const $t29523 = Math.cos(a);
                          return ($t29523 * speed);
                        }
                      })();
                      {
                        const $t29526 = (() => {
                          {
                            const $t29525 = Math.sin(a);
                            return ($t29525 * speed);
                          }
                        })();
                        return ({ x: x, y: y, vx: $t29524, vy: $t29526, life: life, max_life: life });
                      }
                    }
                  })();
                  {
                    const $t29527 = (i + 1);
                    {
                      const $t29528 = { $: "Cons", _0: p, _1: acc };
                      return spawn_burst_particles(x, y, t, $t29527, $t29528);
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
      const $f29531 = bursts._0;
      const $f29532 = bursts._1;
      {
        const rest = (() => {
          return $f29532;
        })();
        {
          const pt = (() => {
            return $f29531;
          })();
          {
            const x = pt._0;
            {
              const y = pt._1;
              {
                const $t29529 = spawn_burst_particles(x, y, t, 0, acc);
                return spawn_bursts(rest, t, $t29529);
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
      const $f29558 = flash._0;
      {
        const f = $f29558;
        {
          const x = f._0;
          {
            const y = f._1;
            {
              const tr = f._2;
              {
                const tr2 = (tr - dt_s);
                {
                  const $t29555 = (tr2 > 0.);
                  if ($t29555 === true) {
                    return (() => {
                      {
                        const $t29556 = { _0: x, _1: y, _2: tr2 };
                        return { $: "Some", _0: $t29556 };
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
        const $t29559 = fx.t;
        return ($t29559 + dt_s);
      }
    })();
    {
      const $t29560 = (() => {
        {
          const $t30182_i4107 = game.phase;
          switch ($t30182_i4107.$) {
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
        if ($t29560 === true) {
          trail2 = (() => {
            {
              const $t29561 = fx.trail;
              {
                const $t29564 = (() => {
                  {
                    const $t29562 = game.ball_x;
                    {
                      const $t29563 = game.ball_y;
                      return { _0: $t29562, _1: $t29563 };
                    }
                  }
                })();
                {
                  const $t29553_i10465 = { $: "Cons", _0: $t29564, _1: $t29561 };
                  {
                    const go_i4102_i10466 = { $: "$Clo_go$4835", _0: go$apply$4835 };
                    {
                      const $t508_i4103_i10467 = { $: "Nil" };
                      return go$apply$4835(go_i4102_i10466, $t29553_i10465, 22, $t508_i4103_i10467);
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
          const $t29565 = game.fx_bursts;
          {
            const $t29566 = fx.particles;
            {
              const $t29567 = (() => {
                return spawn_bursts($t29565, t2, $t29566);
              })();
              {
                const particles2 = (() => {
                  {
                    const $t29548_i10454 = { $: "$Clo_$lam29547$3790", _0: $lam29547$apply$3790, _1: dt_s };
                    {
                      const $t29549_i10458 = (() => {
                        {
                          const f_i4097_i10455 = $t29548_i10454;
                          {
                            const go_i4098_i10456 = { $: "$Clo_go$4833", _0: go$apply$4833, _1: f_i4097_i10455 };
                            {
                              const $t270_i4099_i10457 = { $: "Nil" };
                              return go$apply$4833(go_i4098_i10456, $t29567, $t270_i4099_i10457);
                            }
                          }
                        }
                      })();
                      {
                        const $t29552_i10459 = { $: "$Clo_$lam29550$3791", _0: $lam29550$apply$3791 };
                        {
                          const pred_i4093_i10460 = $t29552_i10459;
                          {
                            const go_i4094_i10461 = { $: "$Clo_go$4831", _0: go$apply$4831, _1: pred_i4093_i10460 };
                            {
                              const $t302_i4095_i10462 = { $: "Nil" };
                              return go$apply$4831(go_i4094_i10461, $t29549_i10458, $t302_i4095_i10462);
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
                      const $t29568 = fx.flash;
                      return step_flash($t29568, dt_s);
                    }
                  })();
                  {
                    const flash2 = (() => {
                      {
                        const $t29569 = game.capture_flash;
                        switch ($t29569.$) {
                          case "None": {
                            return flash1;
                            break;
                          }
                          case "Some": {
                            const $f29573 = $t29569._0;
                            {
                              const pt = (() => {
                                return $f29573;
                              })();
                              {
                                const x = pt._0;
                                {
                                  const y = pt._1;
                                  {
                                    const $t29571 = { _0: x, _1: y, _2: 0.45 };
                                    return { $: "Some", _0: $t29571 };
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
      const $f29583 = trail._0;
      const $f29584 = trail._1;
      {
        const rest = (() => {
          return $f29584;
        })();
        {
          const pt = (() => {
            return $f29583;
          })();
          {
            const x = pt._0;
            {
              const y = pt._1;
              {
                const f = (() => {
                  {
                    const $t29576 = (() => {
                      {
                        const $t29574 = i;
                        {
                          const $t29575 = n;
                          return ($t29574 / $t29575);
                        }
                      }
                    })();
                    return (1. - $t29576);
                  }
                })();
                (() => {
                  {
                    const $t29577 = (f * 0.38);
                    return Canvas$set_global_alpha(ctx, $t29577);
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
                    const $t29579 = (() => {
                      {
                        const $t29578 = (2.6 * f);
                        return (1.2 + $t29578);
                      }
                    })();
                    return Canvas$arc(ctx, x, y, $t29579, 0., 6.28318530718);
                  }
                })();
                (() => {
                  return Canvas$fill(ctx);
                })();
                {
                  const $t29581 = (i + 1);
                  return draw_trail(ctx, rest, $t29581, n);
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
      const $f29596 = particles._0;
      const $f29597 = particles._1;
      {
        const rest = (() => {
          return $f29597;
        })();
        {
          const p = (() => {
            return $f29596;
          })();
          {
            const f = (() => {
              {
                const $t29589 = p.life;
                {
                  const $t29590 = p.max_life;
                  return ($t29589 / $t29590);
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
                const $t29591 = p.x;
                {
                  const $t29592 = p.y;
                  {
                    const $t29594 = (() => {
                      {
                        const $t29593 = (1.5 * f);
                        return (0.5 + $t29593);
                      }
                    })();
                    return Canvas$arc(ctx, $t29591, $t29592, $t29594, 0., 6.28318530718);
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
      const $f29612 = flash._0;
      {
        const f = (() => {
          return $f29612;
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
                    const $t29603 = (tr / 0.45);
                    return (1. - $t29603);
                  }
                })();
                {
                  const r = (() => {
                    {
                      const $t29604 = (prog * 60.);
                      return (8. + $t29604);
                    }
                  })();
                  (() => {
                    {
                      const $t29606 = (() => {
                        {
                          const $t29605 = (1. - prog);
                          return ($t29605 * 0.7);
                        }
                      })();
                      return Canvas$set_global_alpha(ctx, $t29606);
                    }
                  })();
                  (() => {
                    return Canvas$set_stroke_style(ctx, "#ffffff");
                  })();
                  (() => {
                    {
                      const $t29609 = (() => {
                        {
                          const $t29608 = (() => {
                            {
                              const $t29607 = (1. - prog);
                              return (2.5 * $t29607);
                            }
                          })();
                          return ($t29608 + 0.5);
                        }
                      })();
                      return Canvas$set_line_width(ctx, $t29609);
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
        const $t29617 = (() => {
          {
            const $t29616 = s.x;
            return ($t29616 + 1.);
          }
        })();
        {
          const $t29619 = (() => {
            {
              const $t29618 = s.y;
              return ($t29618 + 1.);
            }
          })();
          {
            const x_i10483 = (() => {
              {
                const $t29509_i10482 = (() => {
                  {
                    const $t29508_i10481 = (() => {
                      {
                        const $t29506_i10479 = ($t29617 * 12.9898);
                        {
                          const $t29507_i10480 = ($t29619 * 78.233);
                          return ($t29506_i10479 + $t29507_i10480);
                        }
                      }
                    })();
                    return Math.sin($t29508_i10481);
                  }
                })();
                return ($t29509_i10482 * 43758.5453);
              }
            })();
            {
              const $t29510_i10485 = (() => {
                {
                  const $t1582_i4087_i10484 = Math.floor(x_i10483);
                  return $t1582_i4087_i10484;
                }
              })();
              return (x_i10483 - $t29510_i10485);
            }
          }
        }
      }
    })();
    {
      const $t29620 = (r < 0.34);
      if ($t29620 === true) {
        return 0;
      } else {
        return (() => {
          {
            const $t29621 = (r < 0.67);
            if ($t29621 === true) {
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
    const $t29640 = (() => {
      {
        const $t29639 = (() => {
          {
            const $t29638 = (() => {
              {
                const $t29635 = (() => {
                  {
                    const $t29634 = s.x;
                    return ($t29634 + 4.);
                  }
                })();
                {
                  const $t29637 = (() => {
                    {
                      const $t29636 = s.y;
                      return ($t29636 + 4.);
                    }
                  })();
                  {
                    const x_i10510 = (() => {
                      {
                        const $t29509_i10509 = (() => {
                          {
                            const $t29508_i10508 = (() => {
                              {
                                const $t29506_i10506 = ($t29635 * 12.9898);
                                {
                                  const $t29507_i10507 = ($t29637 * 78.233);
                                  return ($t29506_i10506 + $t29507_i10507);
                                }
                              }
                            })();
                            return Math.sin($t29508_i10508);
                          }
                        })();
                        return ($t29509_i10509 * 43758.5453);
                      }
                    })();
                    {
                      const $t29510_i10512 = (() => {
                        {
                          const $t1582_i4087_i10511 = Math.floor(x_i10510);
                          return $t1582_i4087_i10511;
                        }
                      })();
                      return (x_i10510 - $t29510_i10512);
                    }
                  }
                }
              }
            })();
            return ($t29638 * 4.);
          }
        })();
        return Math.trunc($t29639);
      }
    })();
    return (2 + $t29640);
  }
}
const dot_count$clo = { _0: ($_, s) => dot_count(s) };

function draw_pulse_ring(ctx, s, pulse) {
  (() => {
    {
      const $t29647 = (0.1 * pulse);
      return Canvas$set_global_alpha(ctx, $t29647);
    }
  })();
  (() => {
    return Canvas$set_stroke_style(ctx, "#cfcfcf");
  })();
  (() => {
    {
      const $t29649 = (() => {
        {
          const $t29648 = (0.6 * pulse);
          return (1. + $t29648);
        }
      })();
      return Canvas$set_line_width(ctx, $t29649);
    }
  })();
  (() => {
    return Canvas$begin_path(ctx);
  })();
  (() => {
    {
      const $t29650 = s.x;
      {
        const $t29651 = s.y;
        {
          const $t29652 = s.capture_radius;
          return Canvas$arc(ctx, $t29650, $t29651, $t29652, 0., 6.28318530718);
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
      const $t29655 = (() => {
        {
          const $t29654 = (0.035 * pulse);
          return (0.025 + $t29654);
        }
      })();
      return Canvas$set_global_alpha(ctx, $t29655);
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
      const $t29656 = s.x;
      {
        const $t29657 = s.y;
        {
          const $t29661 = (() => {
            {
              const $t29658 = s.radius;
              {
                const $t29660 = (() => {
                  {
                    const $t29659 = (0.9 * pulse);
                    return (1.6 + $t29659);
                  }
                })();
                return ($t29658 * $t29660);
              }
            }
          })();
          return Canvas$arc(ctx, $t29656, $t29657, $t29661, 0., 6.28318530718);
        }
      }
    }
  })();
  return Canvas$fill(ctx);
}
const draw_pulse_halo$clo = { _0: ($_, ctx, s, pulse) => draw_pulse_halo(ctx, s, pulse) };

function draw_pulse_particle(ctx, s, t, n, i) {
  {
    const $t29663 = (i >= n);
    if ($t29663 === true) {
      return {  };
    } else {
      return (() => {
        {
          const a = (() => {
            {
              const $t29667 = (() => {
                {
                  const $t29665 = (() => {
                    {
                      const $t29664 = (() => {
                        {
                          const $t29646_i10782 = (() => {
                            {
                              const $t29645_i10781 = (() => {
                                {
                                  const $t29642_i10771 = (() => {
                                    {
                                      const $t29641_i10770 = s.x;
                                      return ($t29641_i10770 + 5.);
                                    }
                                  })();
                                  {
                                    const $t29644_i10773 = (() => {
                                      {
                                        const $t29643_i10772 = s.y;
                                        return ($t29643_i10772 + 5.);
                                      }
                                    })();
                                    {
                                      const x_i10519_i10778 = (() => {
                                        {
                                          const $t29509_i10518_i10777 = (() => {
                                            {
                                              const $t29508_i10517_i10776 = (() => {
                                                {
                                                  const $t29506_i10515_i10774 = ($t29642_i10771 * 12.9898);
                                                  {
                                                    const $t29507_i10516_i10775 = ($t29644_i10773 * 78.233);
                                                    return ($t29506_i10515_i10774 + $t29507_i10516_i10775);
                                                  }
                                                }
                                              })();
                                              return Math.sin($t29508_i10517_i10776);
                                            }
                                          })();
                                          return ($t29509_i10518_i10777 * 43758.5453);
                                        }
                                      })();
                                      {
                                        const $t29510_i10521_i10780 = (() => {
                                          {
                                            const $t1582_i4087_i10520_i10779 = Math.floor(x_i10519_i10778);
                                            return $t1582_i4087_i10520_i10779;
                                          }
                                        })();
                                        return (x_i10519_i10778 - $t29510_i10521_i10780);
                                      }
                                    }
                                  }
                                }
                              })();
                              return ($t29645_i10781 * 2.4);
                            }
                          })();
                          return (0.4 + $t29646_i10782);
                        }
                      })();
                      return (t * $t29664);
                    }
                  })();
                  {
                    const $t29666 = (() => {
                      {
                        const $t29632_i10768 = (() => {
                          {
                            const $t29629_i10758 = (() => {
                              {
                                const $t29628_i10757 = s.x;
                                return ($t29628_i10757 + 3.);
                              }
                            })();
                            {
                              const $t29631_i10760 = (() => {
                                {
                                  const $t29630_i10759 = s.y;
                                  return ($t29630_i10759 + 3.);
                                }
                              })();
                              {
                                const x_i10501_i10765 = (() => {
                                  {
                                    const $t29509_i10500_i10764 = (() => {
                                      {
                                        const $t29508_i10499_i10763 = (() => {
                                          {
                                            const $t29506_i10497_i10761 = ($t29629_i10758 * 12.9898);
                                            {
                                              const $t29507_i10498_i10762 = ($t29631_i10760 * 78.233);
                                              return ($t29506_i10497_i10761 + $t29507_i10498_i10762);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29508_i10499_i10763);
                                      }
                                    })();
                                    return ($t29509_i10500_i10764 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29510_i10503_i10767 = (() => {
                                    {
                                      const $t1582_i4087_i10502_i10766 = Math.floor(x_i10501_i10765);
                                      return $t1582_i4087_i10502_i10766;
                                    }
                                  })();
                                  return (x_i10501_i10765 - $t29510_i10503_i10767);
                                }
                              }
                            }
                          }
                        })();
                        return ($t29632_i10768 * 6.28318530718);
                      }
                    })();
                    return ($t29665 + $t29666);
                  }
                }
              })();
              {
                const $t29672 = (() => {
                  {
                    const $t29668 = i;
                    {
                      const $t29671 = (() => {
                        {
                          const $t29670 = n;
                          return (6.28318530718 / $t29670);
                        }
                      })();
                      return ($t29668 * $t29671);
                    }
                  }
                })();
                return ($t29667 + $t29672);
              }
            }
          })();
          {
            const r = (() => {
              {
                const $t29673 = s.radius;
                return ($t29673 * 1.8);
              }
            })();
            {
              const px = (() => {
                {
                  const $t29674 = s.x;
                  {
                    const $t29676 = (() => {
                      {
                        const $t29675 = Math.cos(a);
                        return ($t29675 * r);
                      }
                    })();
                    return ($t29674 + $t29676);
                  }
                }
              })();
              {
                const py = (() => {
                  {
                    const $t29677 = s.y;
                    {
                      const $t29679 = (() => {
                        {
                          const $t29678 = Math.sin(a);
                          return ($t29678 * r);
                        }
                      })();
                      return ($t29677 + $t29679);
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
                  const $t29681 = (i + 1);
                  return draw_pulse_particle(ctx, s, t, n, $t29681);
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
      const $f29690 = orbits._0;
      const $f29691 = orbits._1;
      {
        const $jp_clo29697 = (() => {
          return { $: "$Clo_$jp29696$3794", _0: $jp29696$apply$3794, _1: $f29690, _2: $f29691, _3: ctx, _4: s };
        })();
        switch ($f29691.$) {
          case "Nil": {
            {
              const o = $f29690;
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
                  const $t29682 = s.x;
                  {
                    const $t29683 = s.y;
                    {
                      const $t29684 = o.radius;
                      return Canvas$arc(ctx, $t29682, $t29683, $t29684, 0., 6.28318530718);
                    }
                  }
                }
              })();
              return Canvas$stroke(ctx);
            }
            break;
          }
          default: {
            return $jp29696$apply$3794($jp_clo29697);
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
      const $f29713 = aim._0;
      {
        const a = (() => {
          return $f29713;
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
                      const $t29700 = s.x;
                      return ($t29700 - px);
                    }
                  })();
                  {
                    const dy = (() => {
                      {
                        const $t29701 = s.y;
                        return ($t29701 - py);
                      }
                    })();
                    {
                      const range = (() => {
                        {
                          const $t29702 = s.capture_radius;
                          return ($t29702 * 4.);
                        }
                      })();
                      {
                        const $t29706 = (() => {
                          {
                            const $t29705 = (() => {
                              {
                                const $t29703 = (vx * dx);
                                {
                                  const $t29704 = (vy * dy);
                                  return ($t29703 + $t29704);
                                }
                              }
                            })();
                            return ($t29705 > 0.);
                          }
                        })();
                        {
                          const $t29711 = (() => {
                            {
                              const $t29709 = (() => {
                                {
                                  const $t29707 = (dx * dx);
                                  {
                                    const $t29708 = (dy * dy);
                                    return ($t29707 + $t29708);
                                  }
                                }
                              })();
                              {
                                const $t29710 = (range * range);
                                return ($t29709 < $t29710);
                              }
                            }
                          })();
                          return ($t29706 && $t29711);
                        }
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
        const $t29716 = (() => {
          {
            const $t29715 = (() => {
              {
                const $t29714 = (t * 6.);
                return Math.sin($t29714);
              }
            })();
            return (0.5 * $t29715);
          }
        })();
        return (0.5 + $t29716);
      }
    })();
    (() => {
      {
        const $t29718 = (() => {
          {
            const $t29717 = (0.45 * pulse);
            return (0.3 + $t29717);
          }
        })();
        return Canvas$set_global_alpha(ctx, $t29718);
      }
    })();
    (() => {
      return Canvas$set_stroke_style(ctx, "#ffffff");
    })();
    (() => {
      {
        const $t29720 = (() => {
          {
            const $t29719 = (1.6 * pulse);
            return (1.2 + $t29719);
          }
        })();
        return Canvas$set_line_width(ctx, $t29720);
      }
    })();
    (() => {
      return Canvas$begin_path(ctx);
    })();
    (() => {
      {
        const $t29721 = s.x;
        {
          const $t29722 = s.y;
          {
            const $t29723 = s.capture_radius;
            return Canvas$arc(ctx, $t29721, $t29722, $t29723, 0., 6.28318530718);
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
      const $t29725 = s.orbits;
      return draw_orbit_rings(ctx, s, $t29725);
    }
  })();
  (() => {
    {
      const $t29726 = (() => {
        {
          const $t29615_i10820 = (() => {
            {
              const $t29613_i10811 = s.x;
              {
                const $t29614_i10812 = s.y;
                {
                  const x_i10474_i10817 = (() => {
                    {
                      const $t29509_i10473_i10816 = (() => {
                        {
                          const $t29508_i10472_i10815 = (() => {
                            {
                              const $t29506_i10470_i10813 = ($t29613_i10811 * 12.9898);
                              {
                                const $t29507_i10471_i10814 = ($t29614_i10812 * 78.233);
                                return ($t29506_i10470_i10813 + $t29507_i10471_i10814);
                              }
                            }
                          })();
                          return Math.sin($t29508_i10472_i10815);
                        }
                      })();
                      return ($t29509_i10473_i10816 * 43758.5453);
                    }
                  })();
                  {
                    const $t29510_i10476_i10819 = (() => {
                      {
                        const $t1582_i4087_i10475_i10818 = Math.floor(x_i10474_i10817);
                        return $t1582_i4087_i10475_i10818;
                      }
                    })();
                    return (x_i10474_i10817 - $t29510_i10476_i10819);
                  }
                }
              }
            }
          })();
          return ($t29615_i10820 < 0.8);
        }
      })();
      if ($t29726 === true) {
        return (() => {
          {
            const pulse = (() => {
              {
                const $t29732 = (() => {
                  {
                    const $t29731 = (() => {
                      {
                        const $t29730 = (() => {
                          {
                            const $t29728 = (() => {
                              {
                                const $t29727 = (() => {
                                  {
                                    const $t29627_i10809 = (() => {
                                      {
                                        const $t29626_i10808 = (() => {
                                          {
                                            const $t29623_i10798 = (() => {
                                              {
                                                const $t29622_i10797 = s.x;
                                                return ($t29622_i10797 + 2.);
                                              }
                                            })();
                                            {
                                              const $t29625_i10800 = (() => {
                                                {
                                                  const $t29624_i10799 = s.y;
                                                  return ($t29624_i10799 + 2.);
                                                }
                                              })();
                                              {
                                                const x_i10492_i10805 = (() => {
                                                  {
                                                    const $t29509_i10491_i10804 = (() => {
                                                      {
                                                        const $t29508_i10490_i10803 = (() => {
                                                          {
                                                            const $t29506_i10488_i10801 = ($t29623_i10798 * 12.9898);
                                                            {
                                                              const $t29507_i10489_i10802 = ($t29625_i10800 * 78.233);
                                                              return ($t29506_i10488_i10801 + $t29507_i10489_i10802);
                                                            }
                                                          }
                                                        })();
                                                        return Math.sin($t29508_i10490_i10803);
                                                      }
                                                    })();
                                                    return ($t29509_i10491_i10804 * 43758.5453);
                                                  }
                                                })();
                                                {
                                                  const $t29510_i10494_i10807 = (() => {
                                                    {
                                                      const $t1582_i4087_i10493_i10806 = Math.floor(x_i10492_i10805);
                                                      return $t1582_i4087_i10493_i10806;
                                                    }
                                                  })();
                                                  return (x_i10492_i10805 - $t29510_i10494_i10807);
                                                }
                                              }
                                            }
                                          }
                                        })();
                                        return ($t29626_i10808 * 1.8);
                                      }
                                    })();
                                    return (0.6 + $t29627_i10809);
                                  }
                                })();
                                return (t * $t29727);
                              }
                            })();
                            {
                              const $t29729 = (() => {
                                {
                                  const $t29632_i10795 = (() => {
                                    {
                                      const $t29629_i10785 = (() => {
                                        {
                                          const $t29628_i10784 = s.x;
                                          return ($t29628_i10784 + 3.);
                                        }
                                      })();
                                      {
                                        const $t29631_i10787 = (() => {
                                          {
                                            const $t29630_i10786 = s.y;
                                            return ($t29630_i10786 + 3.);
                                          }
                                        })();
                                        {
                                          const x_i10501_i10792 = (() => {
                                            {
                                              const $t29509_i10500_i10791 = (() => {
                                                {
                                                  const $t29508_i10499_i10790 = (() => {
                                                    {
                                                      const $t29506_i10497_i10788 = ($t29629_i10785 * 12.9898);
                                                      {
                                                        const $t29507_i10498_i10789 = ($t29631_i10787 * 78.233);
                                                        return ($t29506_i10497_i10788 + $t29507_i10498_i10789);
                                                      }
                                                    }
                                                  })();
                                                  return Math.sin($t29508_i10499_i10790);
                                                }
                                              })();
                                              return ($t29509_i10500_i10791 * 43758.5453);
                                            }
                                          })();
                                          {
                                            const $t29510_i10503_i10794 = (() => {
                                              {
                                                const $t1582_i4087_i10502_i10793 = Math.floor(x_i10501_i10792);
                                                return $t1582_i4087_i10502_i10793;
                                              }
                                            })();
                                            return (x_i10501_i10792 - $t29510_i10503_i10794);
                                          }
                                        }
                                      }
                                    }
                                  })();
                                  return ($t29632_i10795 * 6.28318530718);
                                }
                              })();
                              return ($t29728 + $t29729);
                            }
                          }
                        })();
                        return Math.sin($t29730);
                      }
                    })();
                    return (0.5 * $t29731);
                  }
                })();
                return (0.5 + $t29732);
              }
            })();
            {
              const $t29733 = pulse_style(s);
              if ($t29733 === 0) {
                return (() => {
                  {
                    const $jp_clo29736 = (() => {
                      return { $: "$Clo_$jp29735$3797", _0: $jp29735$apply$3797, _1: ctx, _2: s, _3: t };
                    })();
                    return draw_pulse_ring(ctx, s, pulse);
                  }
                })();
              } else if ($t29733 === 1) {
                return (() => {
                  {
                    const $jp_clo29738 = (() => {
                      return { $: "$Clo_$jp29737$3798", _0: $jp29737$apply$3798, _1: ctx, _2: s, _3: t };
                    })();
                    return draw_pulse_halo(ctx, s, pulse);
                  }
                })();
              } else {
                return (() => {
                  {
                    const $t29734 = dot_count(s);
                    return draw_pulse_particle(ctx, s, t, $t29734, 0);
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
      const $t29739 = star_targeted(s, aim);
      if ($t29739 === true) {
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
      const $t29740 = s.x;
      {
        const $t29741 = s.y;
        {
          const $t29742 = s.radius;
          return Canvas$arc(ctx, $t29740, $t29741, $t29742, 0., 6.28318530718);
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
            const $t29750 = (() => {
              {
                const $t29749 = (seed * 37.719);
                return (fx + $t29749);
              }
            })();
            {
              const $t29752 = (() => {
                {
                  const $t29751 = (seed * 12.9898);
                  return (fy - $t29751);
                }
              })();
              {
                const x_i10546 = (() => {
                  {
                    const $t29747_i10545 = (() => {
                      {
                        const $t29746_i10544 = (() => {
                          {
                            const $t29744_i10542 = ($t29750 * 12.9898);
                            {
                              const $t29745_i10543 = ($t29752 * 78.233);
                              return ($t29744_i10542 + $t29745_i10543);
                            }
                          }
                        })();
                        return Math.sin($t29746_i10544);
                      }
                    })();
                    return ($t29747_i10545 * 43758.5453);
                  }
                })();
                {
                  const $t29748_i10548 = (() => {
                    {
                      const $t1582_i4118_i10547 = Math.floor(x_i10546);
                      return $t1582_i4118_i10547;
                    }
                  })();
                  return (x_i10546 - $t29748_i10548);
                }
              }
            }
          }
        })();
        {
          const h2 = (() => {
            {
              const $t29755 = (() => {
                {
                  const $t29753 = (fy * 3.271);
                  {
                    const $t29754 = (seed * 71.238);
                    return ($t29753 - $t29754);
                  }
                }
              })();
              {
                const $t29758 = (() => {
                  {
                    const $t29756 = (fx * 1.373);
                    {
                      const $t29757 = (seed * 5.113);
                      return ($t29756 + $t29757);
                    }
                  }
                })();
                {
                  const x_i10537 = (() => {
                    {
                      const $t29747_i10536 = (() => {
                        {
                          const $t29746_i10535 = (() => {
                            {
                              const $t29744_i10533 = ($t29755 * 12.9898);
                              {
                                const $t29745_i10534 = ($t29758 * 78.233);
                                return ($t29744_i10533 + $t29745_i10534);
                              }
                            }
                          })();
                          return Math.sin($t29746_i10535);
                        }
                      })();
                      return ($t29747_i10536 * 43758.5453);
                    }
                  })();
                  {
                    const $t29748_i10539 = (() => {
                      {
                        const $t1582_i4118_i10538 = Math.floor(x_i10537);
                        return $t1582_i4118_i10538;
                      }
                    })();
                    return (x_i10537 - $t29748_i10539);
                  }
                }
              }
            }
          })();
          {
            const $t29761 = (() => {
              {
                const $t29759 = (h1 * 269.5);
                {
                  const $t29760 = (h2 * 183.3);
                  return ($t29759 + $t29760);
                }
              }
            })();
            {
              const $t29765 = (() => {
                {
                  const $t29764 = (() => {
                    {
                      const $t29762 = (fx * 0.618);
                      {
                        const $t29763 = (fy * 0.573);
                        return ($t29762 + $t29763);
                      }
                    }
                  })();
                  return ($t29764 + seed);
                }
              })();
              {
                const x_i10528 = (() => {
                  {
                    const $t29747_i10527 = (() => {
                      {
                        const $t29746_i10526 = (() => {
                          {
                            const $t29744_i10524 = ($t29761 * 12.9898);
                            {
                              const $t29745_i10525 = ($t29765 * 78.233);
                              return ($t29744_i10524 + $t29745_i10525);
                            }
                          }
                        })();
                        return Math.sin($t29746_i10526);
                      }
                    })();
                    return ($t29747_i10527 * 43758.5453);
                  }
                })();
                {
                  const $t29748_i10530 = (() => {
                    {
                      const $t1582_i4118_i10529 = Math.floor(x_i10528);
                      return $t1582_i4118_i10529;
                    }
                  })();
                  return (x_i10528 - $t29748_i10530);
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
      const $t29767 = (h > 0.5);
      if ($t29767 === true) {
        return {  };
      } else {
        return (() => {
          {
            const jx = (() => {
              {
                const $t29768 = (gy + 1000);
                return bg_hash(gx, $t29768, seed);
              }
            })();
            {
              const jy = (() => {
                {
                  const $t29769 = (gx + 1000);
                  return bg_hash($t29769, gy, seed);
                }
              })();
              {
                const x = (() => {
                  {
                    const $t29771 = (() => {
                      {
                        const $t29770 = gx;
                        return ($t29770 * cell);
                      }
                    })();
                    {
                      const $t29772 = (jx * cell);
                      return ($t29771 + $t29772);
                    }
                  }
                })();
                {
                  const y = (() => {
                    {
                      const $t29774 = (() => {
                        {
                          const $t29773 = gy;
                          return ($t29773 * cell);
                        }
                      })();
                      {
                        const $t29775 = (jy * cell);
                        return ($t29774 + $t29775);
                      }
                    }
                  })();
                  {
                    const br = (() => {
                      {
                        const $t29779 = (() => {
                          {
                            const $t29778 = (() => {
                              {
                                const $t29776 = (gx + 2000);
                                {
                                  const $t29777 = (gy + 2000);
                                  return bg_hash($t29776, $t29777, seed);
                                }
                              }
                            })();
                            return (0.45 * $t29778);
                          }
                        })();
                        return (0.12 + $t29779);
                      }
                    })();
                    {
                      const st = (() => {
                        {
                          const $t29780 = (gx - 2000);
                          {
                            const $t29781 = (gy - 2000);
                            return bg_hash($t29780, $t29781, seed);
                          }
                        }
                      })();
                      {
                        const sz = (() => {
                          {
                            const $t29783 = (() => {
                              {
                                const $t29782 = (1.8 * st);
                                return ($t29782 * st);
                              }
                            })();
                            return (1. + $t29783);
                          }
                        })();
                        {
                          const is_pulsing = (() => {
                            {
                              const $t29786 = (() => {
                                {
                                  const $t29784 = (gx + 3000);
                                  {
                                    const $t29785 = (gy + 3000);
                                    return bg_hash($t29784, $t29785, seed);
                                  }
                                }
                              })();
                              return ($t29786 < 0.04);
                            }
                          })();
                          {
                            let pulse;
                            if (is_pulsing === true) {
                              pulse = (() => {
                                {
                                  const speed = (() => {
                                    {
                                      const $t29790 = (() => {
                                        {
                                          const $t29789 = (() => {
                                            {
                                              const $t29788 = (gx + 4000);
                                              return bg_hash($t29788, gy, seed);
                                            }
                                          })();
                                          return (0.45 * $t29789);
                                        }
                                      })();
                                      return (0.35 + $t29790);
                                    }
                                  })();
                                  {
                                    const phase = (() => {
                                      {
                                        const $t29792 = (() => {
                                          {
                                            const $t29791 = (gy + 4000);
                                            return bg_hash(gx, $t29791, seed);
                                          }
                                        })();
                                        return ($t29792 * 6.28318530718);
                                      }
                                    })();
                                    {
                                      const $t29797 = (() => {
                                        {
                                          const $t29796 = (() => {
                                            {
                                              const $t29795 = (() => {
                                                {
                                                  const $t29794 = (t * speed);
                                                  return ($t29794 + phase);
                                                }
                                              })();
                                              return Math.sin($t29795);
                                            }
                                          })();
                                          return (0.5 * $t29796);
                                        }
                                      })();
                                      return (0.5 + $t29797);
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
                                    const $t29800 = (() => {
                                      {
                                        const $t29799 = (() => {
                                          {
                                            const $t29798 = (1. - br);
                                            return ($t29798 * 0.6);
                                          }
                                        })();
                                        return ($t29799 * pulse);
                                      }
                                    })();
                                    return (br + $t29800);
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
                                      const $t29802 = (() => {
                                        {
                                          const $t29801 = (0.35 * pulse);
                                          return (1. + $t29801);
                                        }
                                      })();
                                      return (sz * $t29802);
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
    const $t29804 = (gx > gx_max);
    if ($t29804 === true) {
      return {  };
    } else {
      return (() => {
        (() => {
          return draw_bg_cell(ctx, gx, gy, cell, seed, t);
        })();
        {
          const $t29805 = (gx + 1);
          return draw_bg_row(ctx, $t29805, gx_max, gy, cell, seed, t);
        }
      })();
    }
  }
}
const draw_bg_row$clo = { _0: ($_, ctx, gx, gx_max, gy, cell, seed, t) => draw_bg_row(ctx, gx, gx_max, gy, cell, seed, t) };

function draw_bg_rows(ctx, gx0, gx1, gy, gy_max, cell, seed, t) {
  {
    const $t29806 = (gy > gy_max);
    if ($t29806 === true) {
      return {  };
    } else {
      return (() => {
        (() => {
          return draw_bg_row(ctx, gx0, gx1, gy, cell, seed, t);
        })();
        {
          const $t29807 = (gy + 1);
          return draw_bg_rows(ctx, gx0, gx1, $t29807, gy_max, cell, seed, t);
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
        const $t29810 = (() => {
          {
            const $t29809 = (() => {
              {
                const $t29808 = (cam_x / 70.);
                {
                  const $t1582_i4128 = Math.floor($t29808);
                  return $t1582_i4128;
                }
              }
            })();
            return Math.trunc($t29809);
          }
        })();
        return ($t29810 - 1);
      }
    })();
    {
      const gx1 = (() => {
        {
          const $t29814 = (() => {
            {
              const $t29813 = (() => {
                {
                  const $t29812 = (() => {
                    {
                      const $t29811 = (cam_x + view_w);
                      return ($t29811 / 70.);
                    }
                  })();
                  {
                    const $t1582_i4126 = Math.floor($t29812);
                    return $t1582_i4126;
                  }
                }
              })();
              return Math.trunc($t29813);
            }
          })();
          return ($t29814 + 1);
        }
      })();
      {
        const gy0 = (() => {
          {
            const $t29817 = (() => {
              {
                const $t29816 = (() => {
                  {
                    const $t29815 = (cam / 70.);
                    {
                      const $t1582_i4124 = Math.floor($t29815);
                      return $t1582_i4124;
                    }
                  }
                })();
                return Math.trunc($t29816);
              }
            })();
            return ($t29817 - 1);
          }
        })();
        {
          const gy1 = (() => {
            {
              const $t29821 = (() => {
                {
                  const $t29820 = (() => {
                    {
                      const $t29819 = (() => {
                        {
                          const $t29818 = (cam + view_h);
                          return ($t29818 / 70.);
                        }
                      })();
                      {
                        const $t1582_i4122 = Math.floor($t29819);
                        return $t1582_i4122;
                      }
                    }
                  })();
                  return Math.trunc($t29820);
                }
              })();
              return ($t29821 + 1);
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
      const $f29833 = clouds._0;
      const $f29834 = clouds._1;
      {
        const rest = $f29834;
        {
          const c = $f29833;
          {
            const $t29831 = (() => {
              {
                const $t29823 = (() => {
                  {
                    const $t29822 = c.x;
                    return ($t29822 - cam_x);
                  }
                })();
                {
                  const $t29825 = (() => {
                    {
                      const $t29824 = c.y;
                      return ($t29824 - cam_y);
                    }
                  })();
                  {
                    const $t29826 = c.radius;
                    {
                      const $t29827 = c.strength;
                      {
                        const $t29830 = (() => {
                          {
                            const $t29828 = c.x;
                            {
                              const $t29829 = c.y;
                              {
                                const x_i10555 = (() => {
                                  {
                                    const $t29509_i10554 = (() => {
                                      {
                                        const $t29508_i10553 = (() => {
                                          {
                                            const $t29506_i10551 = ($t29828 * 12.9898);
                                            {
                                              const $t29507_i10552 = ($t29829 * 78.233);
                                              return ($t29506_i10551 + $t29507_i10552);
                                            }
                                          }
                                        })();
                                        return Math.sin($t29508_i10553);
                                      }
                                    })();
                                    return ($t29509_i10554 * 43758.5453);
                                  }
                                })();
                                {
                                  const $t29510_i10557 = (() => {
                                    {
                                      const $t1582_i4087_i10556 = Math.floor(x_i10555);
                                      return $t1582_i4087_i10556;
                                    }
                                  })();
                                  return (x_i10555 - $t29510_i10557);
                                }
                              }
                            }
                          }
                        })();
                        return ({ x: $t29823, y: $t29825, radius: $t29826, strength: $t29827, seed: $t29830 });
                      }
                    }
                  }
                }
              }
            })();
            {
              const $t29832 = to_screen_clouds(rest, cam_x, cam_y);
              return { $: "Cons", _0: $t29831, _1: $t29832 };
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
      const $f29848 = gl_opt._0;
      {
        const gl = $f29848;
        {
          const $t29839 = game.stars;
          {
            const $t29840 = game.camera_y;
            {
              const $t29841 = game.view_h;
              {
                const $t29842 = game.view_w;
                {
                  const clouds = (() => {
                    return Perihelion$Nebula$visible_clouds($t29839, $t29840, $t29841, $t29842, seed);
                  })();
                  {
                    const $t29843 = game.camera_x;
                    {
                      const $t29844 = game.camera_y;
                      {
                        const screen_clouds = to_screen_clouds(clouds, $t29843, $t29844);
                        (() => {
                          {
                            const $t29845 = game.view_w;
                            {
                              const $t29846 = game.view_h;
                              return WebGL$draw_nebula(gl, screen_clouds, $t29845, $t29846, seed);
                            }
                          }
                        })();
                        {
                          const $t29847 = WebGL$canvas_node(gl);
                          return Canvas$draw_node(ctx, $t29847, 0., 0.);
                        }
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
      const $f29857 = stars._0;
      const $f29858 = stars._1;
      {
        const rest = $f29858;
        {
          const s = $f29857;
          (() => {
            {
              const $t29856 = (() => {
                {
                  const $t29852 = (() => {
                    {
                      const $t29849 = s.y;
                      {
                        const $t29851 = (() => {
                          {
                            const $t29850 = (cam + view_h);
                            return ($t29850 + 100.);
                          }
                        })();
                        return ($t29849 < $t29851);
                      }
                    }
                  })();
                  {
                    const $t29855 = (() => {
                      {
                        const $t29853 = s.y;
                        {
                          const $t29854 = (cam - 100.);
                          return ($t29853 > $t29854);
                        }
                      }
                    })();
                    return ($t29852 && $t29855);
                  }
                }
              })();
              if ($t29856 === true) {
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
        const $t29869 = i;
        {
          const $t29871 = (6.28318530718 / 8.);
          return ($t29869 * $t29871);
        }
      }
    })();
    {
      const jitter = (() => {
        {
          const $t29874 = (() => {
            {
              const $t29873 = (() => {
                {
                  const $t29872 = a.shape_seed;
                  {
                    const x_i10565 = (() => {
                      {
                        const $t29867_i10564 = (() => {
                          {
                            const $t29866_i10563 = (() => {
                              {
                                const $t29863_i10560 = ($t29872 * 12.9898);
                                {
                                  const $t29865_i10562 = (() => {
                                    {
                                      const $t29864_i10561 = i;
                                      return ($t29864_i10561 * 78.233);
                                    }
                                  })();
                                  return ($t29863_i10560 + $t29865_i10562);
                                }
                              }
                            })();
                            return Math.sin($t29866_i10563);
                          }
                        })();
                        return ($t29867_i10564 * 43758.5453);
                      }
                    })();
                    {
                      const $t29868_i10567 = (() => {
                        {
                          const $t1582_i4133_i10566 = Math.floor(x_i10565);
                          return $t1582_i4133_i10566;
                        }
                      })();
                      return (x_i10565 - $t29868_i10567);
                    }
                  }
                }
              })();
              return (0.6 * $t29873);
            }
          })();
          return (0.7 + $t29874);
        }
      })();
      {
        const r = (() => {
          {
            const $t29875 = a.radius;
            return ($t29875 * jitter);
          }
        })();
        {
          const pt = (() => {
            {
              const $t29879 = (() => {
                {
                  const $t29876 = a.x;
                  {
                    const $t29878 = (() => {
                      {
                        const $t29877 = Math.cos(angle);
                        return ($t29877 * r);
                      }
                    })();
                    return ($t29876 + $t29878);
                  }
                }
              })();
              {
                const $t29883 = (() => {
                  {
                    const $t29880 = a.y;
                    {
                      const $t29882 = (() => {
                        {
                          const $t29881 = Math.sin(angle);
                          return ($t29881 * r);
                        }
                      })();
                      return ($t29880 + $t29882);
                    }
                  }
                })();
                return { _0: $t29879, _1: $t29883 };
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
    const $t29884 = (i > 7);
    if ($t29884 === true) {
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
                      const $jp_clo29886 = (() => {
                        return { $: "$Clo_$jp29885$3801", _0: $jp29885$apply$3801, _1: ctx, _2: px, _3: py };
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
                const $t29887 = (i + 1);
                return draw_asteroid_edges(ctx, a, $t29887);
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
      const $f29896 = asteroids._0;
      const $f29897 = asteroids._1;
      {
        const rest = (() => {
          return $f29897;
        })();
        {
          const a = (() => {
            return $f29896;
          })();
          {
            const color = (() => {
              {
                const $t29889 = a.mode;
                switch ($t29889.$) {
                  case "AsteroidDrifting": {
                    return "#8a8a94";
                    break;
                  }
                  case "AsteroidOrbiting": {
                    const $f29890 = $t29889._0;
                    const $f29891 = $t29889._1;
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
      const $f29905 = shots._0;
      const $f29906 = shots._1;
      {
        const rest = (() => {
          return $f29906;
        })();
        {
          const s = (() => {
            return $f29905;
          })();
          (() => {
            return Canvas$set_fill_style(ctx, color);
          })();
          (() => {
            return Canvas$begin_path(ctx);
          })();
          (() => {
            {
              const $t29902 = s.x;
              {
                const $t29903 = s.y;
                return Canvas$arc(ctx, $t29902, $t29903, r, 0., 6.28318530718);
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
    const $t29911 = sh.mode;
    switch ($t29911.$) {
      case "ShipOrbiting": {
        const $f29915 = $t29911._0;
        const $f29916 = $t29911._1;
        {
          const angle = (() => {
            return $f29916;
          })();
          {
            const d = (0. - 1.);
            {
              const $t29914 = (d * 1.5707963);
              return (angle + $t29914);
            }
          }
        }
        break;
      }
      case "ShipFlying": {
        const $f29921 = $t29911._0;
        const $f29922 = $t29911._1;
        {
          const vy = (() => {
            return $f29922;
          })();
          {
            const vx = (() => {
              return $f29921;
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
    const $t29927 = game.mode;
    switch ($t29927.$) {
      case "Flying": {
        const $f29928 = $t29927._0;
        const $f29929 = $t29927._1;
        {
          const vy = (() => {
            return $f29929;
          })();
          {
            const vx = (() => {
              return $f29928;
            })();
            return Math.atan2(vy, vx);
          }
        }
        break;
      }
      case "Orbiting": {
        const $f29934 = $t29927._0;
        const $f29935 = $t29927._1;
        const $f29936 = $t29927._2;
        {
          const angle = (() => {
            return $f29936;
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
      const $f29949 = ships._0;
      const $f29950 = ships._1;
      {
        const rest = (() => {
          return $f29950;
        })();
        {
          const sh = (() => {
            return $f29949;
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
                      const $t29945 = (0. - 6.);
                      return Canvas$line_to(ctx, $t29945, 5.);
                    }
                  })();
                  (() => {
                    {
                      const $t29946 = (0. - 6.);
                      {
                        const $t29947 = (0. - 5.);
                        return Canvas$line_to(ctx, $t29946, $t29947);
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
      const $f29958 = pickups._0;
      const $f29959 = pickups._1;
      {
        const rest = (() => {
          return $f29959;
        })();
        {
          const pk = (() => {
            return $f29958;
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
              const $t29955 = pk.x;
              {
                const $t29956 = pk.y;
                return Canvas$arc(ctx, $t29955, $t29956, 8., 0., 6.28318530718);
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
    const $t29964 = (i >= 5);
    if ($t29964 === true) {
      return {  };
    } else {
      return (() => {
        switch (runs.$) {
          case "Nil": {
            return {  };
            break;
          }
          case "Cons": {
            const $f29979 = runs._0;
            const $f29980 = runs._1;
            {
              const rest = (() => {
                return $f29980;
              })();
              {
                const r = (() => {
                  return $f29979;
                })();
                (() => {
                  return Canvas$set_font(ctx, "14px sans-serif");
                })();
                (() => {
                  {
                    const $t29975 = (() => {
                      {
                        const $t29974 = (() => {
                          {
                            const $t29971 = (() => {
                              {
                                const $t29970 = (() => {
                                  {
                                    const $t29967 = (() => {
                                      {
                                        const $t29966 = (() => {
                                          {
                                            const $t29965 = r.score;
                                            return String($t29965);
                                          }
                                        })();
                                        {
                                          const $rc_851 = ($t29966 + " x");
                                          return $rc_851;
                                        }
                                      }
                                    })();
                                    {
                                      const $t29969 = (() => {
                                        {
                                          const $t29968 = r.max_mult;
                                          return String($t29968);
                                        }
                                      })();
                                      {
                                        const $rc_850 = ($t29967 + $t29969);
                                        return $rc_850;
                                      }
                                    }
                                  }
                                })();
                                {
                                  const $rc_849 = ($t29970 + " · ");
                                  return $rc_849;
                                }
                              }
                            })();
                            {
                              const $t29973 = (() => {
                                {
                                  const $t29972 = r.stars;
                                  return String($t29972);
                                }
                              })();
                              {
                                const $rc_848 = ($t29971 + $t29973);
                                return $rc_848;
                              }
                            }
                          }
                        })();
                        {
                          const $rc_847 = ($t29974 + " stars");
                          return $rc_847;
                        }
                      }
                    })();
                    {
                      const $t29976 = (view_w / 2.);
                      return Canvas$fill_text(ctx, $t29975, $t29976, y);
                    }
                  }
                })();
                {
                  const $t29977 = (y + 20.);
                  {
                    const $t29978 = (i + 1);
                    return draw_runs(ctx, rest, view_w, $t29977, $t29978);
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
      const $t29985 = fx.player_sprite;
      switch ($t29985.$) {
        case "None": {
          (() => {
            return Canvas$set_fill_style(ctx, "#ffffff");
          })();
          (() => {
            return Canvas$begin_path(ctx);
          })();
          (() => {
            {
              const $t29986 = game.ball_x;
              {
                const $t29987 = game.ball_y;
                return Canvas$arc(ctx, $t29986, $t29987, 6., 0., 6.28318530718);
              }
            }
          })();
          return Canvas$fill(ctx);
          break;
        }
        case "Some": {
          const $f29995 = $t29985._0;
          {
            const sprite = (() => {
              return $f29995;
            })();
            (() => {
              return Canvas$save(ctx);
            })();
            (() => {
              {
                const $t29989 = game.ball_x;
                {
                  const $t29990 = game.ball_y;
                  return Canvas$translate(ctx, $t29989, $t29990);
                }
              }
            })();
            (() => {
              {
                const $t29992 = (() => {
                  {
                    const $t29991 = ball_heading(game);
                    return ($t29991 + 1.5707963);
                  }
                })();
                return Canvas$rotate(ctx, $t29992);
              }
            })();
            (() => {
              {
                const $t29993 = (0. - 16.);
                {
                  const $t29994 = (0. - 24.);
                  return Canvas$draw_node(ctx, sprite, $t29993, $t29994);
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
    const $t29997 = (() => {
      {
        const $t29996 = game.shield;
        return ($t29996 > 0);
      }
    })();
    if ($t29997 === true) {
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
            const $t29998 = game.ball_x;
            {
              const $t29999 = game.ball_y;
              return Canvas$arc(ctx, $t29998, $t29999, 10., 0., 6.28318530718);
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
      const $t30005 = (cx - 60.);
      {
        const $t30007 = (() => {
          {
            const $t30006 = (view_h / 2.);
            return ($t30006 - 60.);
          }
        })();
        return Canvas$stroke_rect(ctx, $t30005, $t30007, 120., 120.);
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
      let $t30008;
      switch (u.$) {
        case "OffenseWeapon": {
          const $f30001_i10572 = u._0;
          $t30008 = (() => {
            switch ($f30001_i10572.$) {
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
          $t30008 = "Faster Fire";
          break;
        }
        case "DefenseBulletWard": {
          $t30008 = "Bullet Ward";
          break;
        }
        case "DefenseDeflector": {
          $t30008 = "Deflector Plating";
          break;
        }
        case "DefenseShield": {
          $t30008 = "Reinforced Shield";
          break;
        }
        case "SpecialItem": {
          const $f30002_i10573 = u._0;
          $t30008 = (() => {
            switch ($f30002_i10573.$) {
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
          $t30008 = (() => { throw new Error("non-exhaustive pattern match"); })();
          break;
        }
      }
      {
        const $t30009 = (view_h / 2.);
        return Canvas$fill_text(ctx, $t30008, cx, $t30009);
      }
    }
  })();
  (() => {
    return Canvas$set_font(ctx, "10px sans-serif");
  })();
  {
    let $t30010;
    switch (u.$) {
      case "OffenseWeapon": {
        const $f30003_i10569 = u._0;
        $t30010 = (() => {
          switch ($f30003_i10569.$) {
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
        $t30010 = "Faster shooting";
        break;
      }
      case "DefenseBulletWard": {
        $t30010 = "Blocks one enemy shot";
        break;
      }
      case "DefenseDeflector": {
        $t30010 = "Bounces asteroids";
        break;
      }
      case "DefenseShield": {
        $t30010 = "Adds a shield charge";
        break;
      }
      case "SpecialItem": {
        const $f30004_i10570 = u._0;
        $t30010 = (() => {
          switch ($f30004_i10570.$) {
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
        $t30010 = (() => { throw new Error("non-exhaustive pattern match"); })();
        break;
      }
    }
    {
      const $t30012 = (() => {
        {
          const $t30011 = (view_h / 2.);
          return ($t30011 + 20.);
        }
      })();
      return Canvas$fill_text(ctx, $t30010, cx, $t30012);
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
      const $f30017 = choices._0;
      const $f30018 = choices._1;
      {
        const rest = (() => {
          return $f30018;
        })();
        {
          const u = (() => {
            return $f30017;
          })();
          {
            const col_w = (view_w / 3.);
            (() => {
              {
                const $t30015 = (() => {
                  {
                    const $t30014 = (() => {
                      {
                        const $t30013 = i;
                        return ($t30013 + 0.5);
                      }
                    })();
                    return (col_w * $t30014);
                  }
                })();
                {
                  const $rc_852 = (() => {
                    return draw_milestone_card(ctx, u, $t30015, view_h);
                  })();
                  return $rc_852;
                }
              }
            })();
            {
              const $t30016 = (i + 1);
              return draw_milestone_cards(ctx, rest, view_w, view_h, $t30016);
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
      const $t30024 = (() => {
        {
          const $t30023 = game.score;
          return String($t30023);
        }
      })();
      return Canvas$fill_text(ctx, $t30024, 14., 28.);
    }
  })();
  (() => {
    return Canvas$set_text_align(ctx, "right");
  })();
  (() => {
    {
      const $t30027 = (() => {
        {
          const $t30026 = (() => {
            {
              const $t30025 = game.best;
              return String($t30025);
            }
          })();
          {
            const $rc_863 = ("best " + $t30026);
            return $rc_863;
          }
        }
      })();
      {
        const $t30029 = (() => {
          {
            const $t30028 = game.view_w;
            return ($t30028 - 14.);
          }
        })();
        return Canvas$fill_text(ctx, $t30027, $t30029, 28.);
      }
    }
  })();
  (() => {
    {
      const $t30031 = (() => {
        {
          const $t30030 = game.multiplier;
          return ($t30030 > 1);
        }
      })();
      if ($t30031 === true) {
        return (() => {
          (() => {
            return Canvas$set_text_align(ctx, "left");
          })();
          {
            const $t30034 = (() => {
              {
                const $t30033 = (() => {
                  {
                    const $t30032 = game.multiplier;
                    return String($t30032);
                  }
                })();
                {
                  const $rc_862 = ("x" + $t30033);
                  return $rc_862;
                }
              }
            })();
            return Canvas$fill_text(ctx, $t30034, 14., 52.);
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
      const $t30037 = (() => {
        {
          const $t30036 = (() => {
            {
              const $t30035 = Perihelion$Core$active_weapon(game);
              return { $: "OffenseWeapon", _0: $t30035 };
            }
          })();
          {
            let $rc_861;
            switch ($t30036.$) {
              case "OffenseWeapon": {
                const $f30001_i10578 = $t30036._0;
                $rc_861 = (() => {
                  switch ($f30001_i10578.$) {
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
                const $f30002_i10579 = $t30036._0;
                $rc_861 = (() => {
                  switch ($f30002_i10579.$) {
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
        const $t30039 = (() => {
          {
            const $t30038 = game.view_h;
            return ($t30038 - 60.);
          }
        })();
        return Canvas$fill_text(ctx, $t30037, 14., $t30039);
      }
    }
  })();
  (() => {
    {
      const $t30040 = game.special;
      switch ($t30040.$) {
        case "None": {
          return {  };
          break;
        }
        case "Some": {
          const $f30049 = $t30040._0;
          {
            const k = (() => {
              return $f30049;
            })();
            {
              const $t30046 = (() => {
                {
                  const $t30043 = (() => {
                    {
                      const $t30042 = (() => {
                        {
                          const $t30041 = { $: "SpecialItem", _0: k };
                          {
                            let $rc_860;
                            switch ($t30041.$) {
                              case "OffenseWeapon": {
                                const $f30001_i10575 = $t30041._0;
                                $rc_860 = (() => {
                                  switch ($f30001_i10575.$) {
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
                                $rc_860 = "Faster Fire";
                                break;
                              }
                              case "DefenseBulletWard": {
                                $rc_860 = "Bullet Ward";
                                break;
                              }
                              case "DefenseDeflector": {
                                $rc_860 = "Deflector Plating";
                                break;
                              }
                              case "DefenseShield": {
                                $rc_860 = "Reinforced Shield";
                                break;
                              }
                              case "SpecialItem": {
                                const $f30002_i10576 = $t30041._0;
                                $rc_860 = (() => {
                                  switch ($f30002_i10576.$) {
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
                                $rc_860 = (() => { throw new Error("non-exhaustive pattern match"); })();
                                break;
                              }
                            }
                            return $rc_860;
                          }
                        }
                      })();
                      {
                        const $rc_859 = ($t30042 + " x");
                        return $rc_859;
                      }
                    }
                  })();
                  {
                    const $t30045 = (() => {
                      {
                        const $t30044 = game.special_charges;
                        return String($t30044);
                      }
                    })();
                    {
                      const $rc_858 = ($t30043 + $t30045);
                      return $rc_858;
                    }
                  }
                }
              })();
              {
                const $t30048 = (() => {
                  {
                    const $t30047 = game.view_h;
                    return ($t30047 - 40.);
                  }
                })();
                return Canvas$fill_text(ctx, $t30046, 14., $t30048);
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
        const $t30054 = (() => {
          {
            const $t30051 = (() => {
              {
                const $t30050 = game.bullet_ward;
                if ($t30050 === true) {
                  return "ward ";
                } else {
                  return "";
                }
              }
            })();
            {
              const $t30053 = (() => {
                {
                  const $t30052 = game.deflector_plating;
                  if ($t30052 === true) {
                    return "deflect ";
                  } else {
                    return "";
                  }
                }
              })();
              {
                const $rc_857 = ($t30051 + $t30053);
                return $rc_857;
              }
            }
          }
        })();
        {
          const $t30059 = (() => {
            {
              const $t30056 = (() => {
                {
                  const $t30055 = game.shield;
                  return ($t30055 > 0);
                }
              })();
              if ($t30056 === true) {
                return (() => {
                  {
                    const $t30058 = (() => {
                      {
                        const $t30057 = game.shield;
                        return String($t30057);
                      }
                    })();
                    {
                      const $rc_856 = ("shield x" + $t30058);
                      return $rc_856;
                    }
                  }
                })();
              } else {
                return "";
              }
            }
          })();
          {
            const $rc_855 = ($t30054 + $t30059);
            return $rc_855;
          }
        }
      }
    })();
    (() => {
      {
        const $t30061 = (() => {
          {
            const $t30060 = game.view_h;
            return ($t30060 - 20.);
          }
        })();
        return Canvas$fill_text(ctx, defense_tags, 14., $t30061);
      }
    })();
    (() => {
      return Canvas$set_text_align(ctx, "center");
    })();
    {
      const $t30062 = game.phase;
      switch ($t30062.$) {
        case "Ready": {
          (() => {
            return Canvas$set_font(ctx, "22px sans-serif");
          })();
          {
            const $t30064 = (() => {
              {
                const $t30063 = game.view_w;
                return ($t30063 / 2.);
              }
            })();
            {
              const $t30066 = (() => {
                {
                  const $t30065 = game.view_h;
                  return ($t30065 / 2.);
                }
              })();
              return Canvas$fill_text(ctx, "tap to start", $t30064, $t30066);
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
              const $t30070 = (() => {
                {
                  const $t30069 = (() => {
                    {
                      const $t30068 = (() => {
                        {
                          const $t30067 = game.score;
                          return String($t30067);
                        }
                      })();
                      {
                        const $rc_854 = ("score " + $t30068);
                        return $rc_854;
                      }
                    }
                  })();
                  {
                    const $rc_853 = ($t30069 + " — tap to retry");
                    return $rc_853;
                  }
                }
              })();
              {
                const $t30072 = (() => {
                  {
                    const $t30071 = game.view_w;
                    return ($t30071 / 2.);
                  }
                })();
                {
                  const $t30074 = (() => {
                    {
                      const $t30073 = game.view_h;
                      return ($t30073 / 2.);
                    }
                  })();
                  return Canvas$fill_text(ctx, $t30070, $t30072, $t30074);
                }
              }
            }
          })();
          {
            const $t30075 = game.runs;
            {
              const $t30076 = game.view_w;
              {
                const $t30079 = (() => {
                  {
                    const $t30078 = (() => {
                      {
                        const $t30077 = game.view_h;
                        return ($t30077 / 2.);
                      }
                    })();
                    return ($t30078 + 36.);
                  }
                })();
                return draw_runs(ctx, $t30075, $t30076, $t30079, 0);
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
              const $t30081 = (() => {
                {
                  const $t30080 = game.view_w;
                  return ($t30080 / 2.);
                }
              })();
              {
                const $t30084 = (() => {
                  {
                    const $t30083 = (() => {
                      {
                        const $t30082 = game.view_h;
                        return ($t30082 / 2.);
                      }
                    })();
                    return ($t30083 - 90.);
                  }
                })();
                return Canvas$fill_text(ctx, "Choose an upgrade", $t30081, $t30084);
              }
            }
          })();
          {
            const $t30085 = game.milestone_choices;
            {
              const $t30086 = game.view_w;
              {
                const $t30087 = game.view_h;
                return draw_milestone_cards(ctx, $t30085, $t30086, $t30087, 0);
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
      const $t30088 = game.view_w;
      {
        const $t30089 = game.view_h;
        return Canvas$fill_rect(ctx, 0., 0., $t30088, $t30089);
      }
    }
  })();
  {
    const seedf = (() => {
      {
        const $t30090 = game.seed;
        return $t30090;
      }
    })();
    (() => {
      {
        const $t30091 = fx.gl;
        return draw_nebula_gl(ctx, $t30091, game, seedf);
      }
    })();
    (() => {
      return Canvas$save(ctx);
    })();
    (() => {
      {
        const $t30093 = (() => {
          {
            const $t30092 = game.camera_x;
            return (0. - $t30092);
          }
        })();
        {
          const $t30095 = (() => {
            {
              const $t30094 = game.camera_y;
              return (0. - $t30094);
            }
          })();
          return Canvas$translate(ctx, $t30093, $t30095);
        }
      }
    })();
    (() => {
      {
        const $t30096 = game.camera_x;
        {
          const $t30097 = game.camera_y;
          {
            const $t30098 = game.view_w;
            {
              const $t30099 = game.view_h;
              {
                const $t30100 = fx.t;
                return draw_starfield(ctx, $t30096, $t30097, $t30098, $t30099, seedf, $t30100);
              }
            }
          }
        }
      }
    })();
    {
      const aim = (() => {
        {
          const $t30101 = game.mode;
          switch ($t30101.$) {
            case "Flying": {
              const $f30105 = $t30101._0;
              const $f30106 = $t30101._1;
              {
                const vy = (() => {
                  return $f30106;
                })();
                {
                  const vx = (() => {
                    return $f30105;
                  })();
                  {
                    const $t30104 = (() => {
                      {
                        const $t30102 = game.ball_x;
                        {
                          const $t30103 = game.ball_y;
                          return { _0: $t30102, _1: $t30103, _2: vx, _3: vy };
                        }
                      }
                    })();
                    return { $: "Some", _0: $t30104 };
                  }
                }
              }
              break;
            }
            case "Orbiting": {
              const $f30111 = $t30101._0;
              const $f30112 = $t30101._1;
              const $f30113 = $t30101._2;
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
          const $t30122 = game.stars;
          {
            const $t30123 = game.camera_y;
            {
              const $t30124 = game.view_h;
              {
                const $t30125 = fx.t;
                {
                  const $rc_865 = (() => {
                    return draw_stars(ctx, $t30122, $t30123, $t30124, $t30125, aim);
                  })();
                  return $rc_865;
                }
              }
            }
          }
        }
      })();
      (() => {
        {
          const $t30126 = Perihelion$Core$active_weapon(game);
          switch ($t30126.$) {
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
          const $t30129 = game.mode;
          switch ($t30129.$) {
            case "Orbiting": {
              const $f30137 = $t30129._0;
              const $f30138 = $t30129._1;
              const $f30139 = $t30129._2;
              {
                const angle = (() => {
                  return $f30139;
                })();
                {
                  const ring = (() => {
                    return $f30138;
                  })();
                  {
                    const idx = (() => {
                      return $f30137;
                    })();
                    {
                      const $t30130 = game.special;
                      switch ($t30130.$) {
                        case "Some": {
                          const $f30132 = $t30130._0;
                          switch ($f30132.$) {
                            case "TrajectoryPreview": {
                              {
                                const $t30131 = Perihelion$Core$predict_trajectory(game, idx, ring, angle);
                                {
                                  const $rc_864 = (() => {
                                    return draw_trajectory_preview(ctx, $t30131);
                                  })();
                                  return $rc_864;
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
              const $f30148 = $t30129._0;
              const $f30149 = $t30129._1;
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
          const $t30154 = fx.flash;
          return draw_flash(ctx, $t30154);
        }
      })();
      (() => {
        {
          const $t30155 = game.asteroids;
          return draw_asteroids(ctx, $t30155);
        }
      })();
      (() => {
        {
          const $t30156 = game.ships;
          return draw_ships(ctx, $t30156);
        }
      })();
      (() => {
        {
          const $t30157 = game.player_shots;
          return draw_shots(ctx, $t30157, "#ffffff", 3.);
        }
      })();
      (() => {
        {
          const $t30158 = game.enemy_shots;
          return draw_shots(ctx, $t30158, "#8a8a94", 2.5);
        }
      })();
      (() => {
        {
          const $t30159 = game.pickups;
          return draw_pickups(ctx, $t30159);
        }
      })();
      (() => {
        {
          const $t30160 = fx.trail;
          return draw_trail(ctx, $t30160, 0, 22);
        }
      })();
      (() => {
        {
          const $t30162 = fx.particles;
          return draw_particles(ctx, $t30162);
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
    const $t30164 = (() => {
      {
        const $t30163 = Perihelion$Combat$starkiller_target_idx(game);
        return Perihelion$Core$star_at(game, $t30163);
      }
    })();
    switch ($t30164.$) {
      case "None": {
        return {  };
        break;
      }
      case "Some": {
        const $f30170 = $t30164._0;
        {
          const s = $f30170;
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
              const $t30165 = s.x;
              {
                const $t30166 = s.y;
                {
                  const $t30168 = (() => {
                    {
                      const $t30167 = s.capture_radius;
                      return ($t30167 + 12.);
                    }
                  })();
                  return Canvas$arc(ctx, $t30165, $t30166, $t30168, 0., 6.28318530718);
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
      const $f30176 = points._0;
      const $f30177 = points._1;
      {
        const rest = (() => {
          return $f30177;
        })();
        {
          const pt = (() => {
            return $f30176;
          })();
          {
            const x = pt._0;
            {
              const y = pt._1;
              (() => {
                {
                  const $t30172 = (() => {
                    {
                      const $t30171 = march_int_mod(i, 3);
                      return ($t30171 === 0);
                    }
                  })();
                  if ($t30172 === true) {
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
                const $t30174 = (i + 1);
                return draw_trajectory_dots(ctx, rest, $t30174);
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
    const $t30188 = (() => {
      {
        const $t30185 = (() => {
          {
            const $t30184 = game.view_w;
            return (w === $t30184);
          }
        })();
        {
          const $t30187 = (() => {
            {
              const $t30186 = game.view_h;
              return (h === $t30186);
            }
          })();
          return ($t30185 && $t30187);
        }
      }
    })();
    if ($t30188 === true) {
      return {  };
    } else {
      return (() => {
        (() => {
          {
            const $t30190 = (() => {
              {
                const $t30189 = Math.trunc(w);
                return String($t30189);
              }
            })();
            return Dom$set_attr(el, "width", $t30190);
          }
        })();
        {
          const $t30192 = (() => {
            {
              const $t30191 = Math.trunc(h);
              return String($t30191);
            }
          })();
          return Dom$set_attr(el, "height", $t30192);
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
      const $f30193 = gl_opt._0;
      {
        const gl = $f30193;
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
          const $t30207 = (() => {
            {
              const $t30205 = (() => {
                {
                  const $t30204 = game.phase;
                  switch ($t30204.$) {
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
                const $t30206 = (() => {
                  {
                    const $t30182_i4196 = g2.phase;
                    switch ($t30182_i4196.$) {
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
                return ($t30205 && $t30206);
              }
            }
          })();
          if ($t30207 === true) {
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
          const $t30212 = (() => {
            {
              const $t30209 = (() => {
                {
                  const $t30208 = game.mode;
                  switch ($t30208.$) {
                    case "Orbiting": {
                      const $f30194_i4192 = $t30208._0;
                      const $f30195_i4193 = $t30208._1;
                      const $f30196_i4194 = $t30208._2;
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
                const $t30211 = (() => {
                  {
                    const $t30210 = g2.mode;
                    switch ($t30210.$) {
                      case "Flying": {
                        const $f30197_i4189 = $t30210._0;
                        const $f30198_i4190 = $t30210._1;
                        return true;
                        break;
                      }
                      default: {
                        return false;
                      }
                    }
                  }
                })();
                return ($t30209 && $t30211);
              }
            }
          })();
          if ($t30212 === true) {
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
          const $t30213 = g2.capture_flash;
          switch ($t30213.$) {
            case "None": {
              return {  };
              break;
            }
            case "Some": {
              const $f30214 = $t30213._0;
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
          const $t30219 = (() => {
            {
              const $t30216 = (() => {
                {
                  const $t30215 = g2.player_shots;
                  {
                    const go_i4186 = { $: "$Clo_go$4837", _0: go$apply$4837 };
                    return go$apply$4837(go_i4186, $t30215, 0);
                  }
                }
              })();
              {
                const $t30218 = (() => {
                  {
                    const $t30217 = game.player_shots;
                    {
                      const go_i4184 = { $: "$Clo_go$4837", _0: go$apply$4837 };
                      return go$apply$4837(go_i4184, $t30217, 0);
                    }
                  }
                })();
                return ($t30216 > $t30218);
              }
            }
          })();
          if ($t30219 === true) {
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
          const $t30224 = (() => {
            {
              const $t30221 = (() => {
                {
                  const $t30220 = g2.enemy_shots;
                  {
                    const go_i4182 = { $: "$Clo_go$4837", _0: go$apply$4837 };
                    return go$apply$4837(go_i4182, $t30220, 0);
                  }
                }
              })();
              {
                const $t30223 = (() => {
                  {
                    const $t30222 = game.enemy_shots;
                    {
                      const go_i4180 = { $: "$Clo_go$4837", _0: go$apply$4837 };
                      return go$apply$4837(go_i4180, $t30222, 0);
                    }
                  }
                })();
                return ($t30221 > $t30223);
              }
            }
          })();
          if ($t30224 === true) {
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
          const $t30227 = (() => {
            {
              const $t30226 = (() => {
                {
                  const $t30225 = g2.fx_bursts;
                  switch ($t30225.$) {
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
              return (!$t30226);
            }
          })();
          if ($t30227 === true) {
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
          const $t30232 = (() => {
            {
              const $t30229 = (() => {
                {
                  const $t30228 = g2.ships;
                  {
                    const go_i4177 = { $: "$Clo_go$4787", _0: go$apply$4787 };
                    return go$apply$4787(go_i4177, $t30228, 0);
                  }
                }
              })();
              {
                const $t30231 = (() => {
                  {
                    const $t30230 = game.ships;
                    {
                      const go_i4175 = { $: "$Clo_go$4787", _0: go$apply$4787 };
                      return go$apply$4787(go_i4175, $t30230, 0);
                    }
                  }
                })();
                return ($t30229 < $t30231);
              }
            }
          })();
          if ($t30232 === true) {
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
          const $t30237 = (() => {
            {
              const $t30234 = (() => {
                {
                  const $t30233 = game.shield;
                  return ($t30233 === 0);
                }
              })();
              {
                const $t30236 = (() => {
                  {
                    const $t30235 = g2.shield;
                    return ($t30235 > 0);
                  }
                })();
                return ($t30234 && $t30236);
              }
            }
          })();
          if ($t30237 === true) {
            return (() => {
              return Audio$beep(actx, 700., 0.06, "sine");
            })();
          } else {
            return {  };
          }
        }
      })();
      {
        const $t30240 = (() => {
          {
            const $t30238 = (() => {
              {
                const $t30182_i4173 = game.phase;
                switch ($t30182_i4173.$) {
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
              const $t30239 = (() => {
                {
                  const $t30183_i4171 = g2.phase;
                  switch ($t30183_i4171.$) {
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
              return ($t30238 && $t30239);
            }
          }
        })();
        if ($t30240 === true) {
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
      const $f30246 = taps._0;
      const $f30247 = taps._1;
      {
        const tap = (() => {
          return $f30246;
        })();
        {
          const tx = tap._0;
          {
            const col_w = (view_w / 3.);
            {
              const idx = (() => {
                {
                  const $t30242 = (() => {
                    {
                      const $t30241 = tx;
                      return ($t30241 / col_w);
                    }
                  })();
                  return Math.trunc($t30242);
                }
              })();
              {
                const $t30244 = (() => {
                  {
                    const $t30243 = (idx > 2);
                    if ($t30243 === true) {
                      return 2;
                    } else {
                      return idx;
                    }
                  }
                })();
                return { $: "Some", _0: $t30244 };
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
          const $p30271 = dom_window_size();
          {
            const win_w = $p30271._0;
            {
              const win_h = $p30271._1;
              {
                const view_w = win_w;
                {
                  const view_h = win_h;
                  (() => {
                    return resize_canvas(el, game, view_w, view_h);
                  })();
                  (() => {
                    {
                      const $t30252 = fx.gl;
                      return resize_gl($t30252, view_w, view_h);
                    }
                  })();
                  {
                    const g2 = (() => {
                      {
                        const $t30253 = game.phase;
                        switch ($t30253.$) {
                          case "Milestone": {
                            {
                              const $jp_clo30259 = (() => {
                                return { $: "$Clo_$jp30258$3829", _0: $jp30258$apply$3829, _1: cursor, _2: game, _3: keys, _4: taps, _5: view_h, _6: view_w };
                              })();
                              {
                                const $t30254 = (() => {
                                  {
                                    const $t28462_i4208 = { $: "$Clo_$lam28459$3739", _0: $lam28459$apply$3739 };
                                    return List$any$List_String$Fn_String_Bool(keys, $t28462_i4208);
                                  }
                                })();
                                if ($t30254 === true) {
                                  return (() => {
                                    {
                                      const $rc_866 = (() => {
                                        return Perihelion$Core$update(game, taps, keys, cursor, view_w, view_h, 0.0166667);
                                      })();
                                      return $rc_866;
                                    }
                                  })();
                                } else {
                                  return (() => {
                                    {
                                      const $t30256 = (() => {
                                        {
                                          const $rc_867 = milestone_tap_choice(taps, view_w, view_h);
                                          return $rc_867;
                                        }
                                      })();
                                      return Perihelion$Core$pick_milestone(game, $t30256);
                                    }
                                  })();
                                }
                              }
                            }
                            break;
                          }
                          default: {
                            {
                              const $rc_868 = (() => {
                                return Perihelion$Core$update(game, taps, keys, cursor, view_w, view_h, 0.0166667);
                              })();
                              return $rc_868;
                            }
                          }
                        }
                      }
                    })();
                    {
                      const muted2 = (() => {
                        {
                          const $t30260 = fx.muted;
                          {
                            const $t30203_i4206 = (() => {
                              {
                                const $t30202_i4205 = { $: "$Clo_$lam30199$3827", _0: $lam30199$apply$3827 };
                                return List$any$List_String$Fn_String_Bool(keys, $t30202_i4205);
                              }
                            })();
                            if ($t30203_i4206 === true) {
                              return (!$t30260);
                            } else {
                              return $t30260;
                            }
                          }
                        }
                      })();
                      (() => {
                        {
                          const $t30261 = fx.actx;
                          return play_sfx($t30261, muted2, game, g2);
                        }
                      })();
                      {
                        const fx1 = step_fx(fx, g2, 0.0166667);
                        {
                          const fx2 = ({ ...fx1, muted: muted2 });
                          (() => {
                            {
                              const $t30265 = (() => {
                                {
                                  const $t30263 = (() => {
                                    {
                                      const $t30182_i4202 = game.phase;
                                      switch ($t30182_i4202.$) {
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
                                    const $t30264 = (() => {
                                      {
                                        const $t30183_i4200 = g2.phase;
                                        switch ($t30183_i4200.$) {
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
                                    return ($t30263 && $t30264);
                                  }
                                }
                              })();
                              if ($t30265 === true) {
                                return (() => {
                                  {
                                    const $t30268 = (() => {
                                      {
                                        const $t30266 = g2.best;
                                        {
                                          const $t30267 = g2.runs;
                                          return Perihelion$Core$encode_save($t30266, $t30267);
                                        }
                                      }
                                    })();
                                    return Dom$store_set("perihelion.v1", $t30268);
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
                            const $t30270 = { $: "$Clo_$lam30269$3830", _0: $lam30269$apply$3830, _1: ctx, _2: el, _3: fx2, _4: g2 };
                            return Dom$on_frame($t30270);
                          }
                        }
                      }
                    }
                  }
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
    const $p30277 = dom_window_size();
    {
      const win_w = $p30277._0;
      {
        const win_h = $p30277._1;
        {
          const view_w = win_w;
          {
            const view_h = win_h;
            (() => {
              {
                const $t30272 = String(win_w);
                return Dom$set_attr(node, "width", $t30272);
              }
            })();
            (() => {
              {
                const $t30273 = String(win_h);
                return Dom$set_attr(node, "height", $t30273);
              }
            })();
            {
              const $t30275 = (() => {
                {
                  const $t30274 = boot_seed();
                  return Perihelion$Core$fresh_run($t30274, best, runs, view_w, view_h);
                }
              })();
              {
                const $t30276 = fx_init();
                return tick(ctx, node, $t30275, $t30276);
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
    const $t30278 = Dom$find("game-canvas");
    switch ($t30278.$) {
      case "None": {
        return println$String("no #game-canvas found");
        break;
      }
      case "Some": {
        const $f30286 = $t30278._0;
        {
          const node = $f30286;
          {
            const $t30279 = (() => {
              return Canvas$get_context(node);
            })();
            switch ($t30279.$) {
              case "None": {
                return println$String("2d context unavailable");
                break;
              }
              case "Some": {
                const $f30285 = $t30279._0;
                {
                  const ctx = $f30285;
                  {
                    const saved = (() => {
                      {
                        const $t30280 = Dom$store_get("perihelion.v1");
                        switch ($t30280.$) {
                          case "None": {
                            return "";
                            break;
                          }
                          case "Some": {
                            const $f30281 = $t30280._0;
                            {
                              const sv = $f30281;
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
                      const $p30284 = (() => {
                        {
                          const $rc_869 = Perihelion$Core$decode_save(saved);
                          return $rc_869;
                        }
                      })();
                      {
                        const best = $p30284._0;
                        {
                          const runs = $p30284._1;
                          {
                            const $t30283 = (() => {
                              return { $: "$Clo_$lam30282$3831", _0: $lam30282$apply$3831, _1: best, _2: ctx, _3: node, _4: runs };
                            })();
                            return Dom$on_frame($t30283);
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
        const $rc_876 = march_print(x);
        return $rc_876;
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
            const $t28050_i10825 = s.x;
            {
              const $t28051_i10826 = s.y;
              {
                const $t27359_i10057_i10831 = (() => {
                  {
                    const dx_i3632_i10053_i10827 = ($t28065 - $t28050_i10825);
                    {
                      const dy_i3633_i10054_i10828 = ($t28066 - $t28051_i10826);
                      {
                        const $t27357_i3634_i10055_i10829 = (dx_i3632_i10053_i10827 * dx_i3632_i10053_i10827);
                        {
                          const $t27358_i3635_i10056_i10830 = (dy_i3633_i10054_i10828 * dy_i3633_i10054_i10828);
                          return ($t27357_i3634_i10055_i10829 + $t27358_i3635_i10056_i10830);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10060_i10834 = (() => {
                    {
                      const $t27360_i10058_i10832 = (3. + $t28067);
                      {
                        const $t27361_i10059_i10833 = (3. + $t28067);
                        return ($t27360_i10058_i10832 * $t27361_i10059_i10833);
                      }
                    }
                  })();
                  return ($t27359_i10057_i10831 <= $t27362_i10060_i10834);
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
            const $t28050_i10839 = s.x;
            {
              const $t28051_i10840 = s.y;
              {
                const $t27359_i10057_i10845 = (() => {
                  {
                    const dx_i3632_i10053_i10841 = ($t28074 - $t28050_i10839);
                    {
                      const dy_i3633_i10054_i10842 = ($t28075 - $t28051_i10840);
                      {
                        const $t27357_i3634_i10055_i10843 = (dx_i3632_i10053_i10841 * dx_i3632_i10053_i10841);
                        {
                          const $t27358_i3635_i10056_i10844 = (dy_i3633_i10054_i10842 * dy_i3633_i10054_i10842);
                          return ($t27357_i3634_i10055_i10843 + $t27358_i3635_i10056_i10844);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10060_i10848 = (() => {
                    {
                      const $t27360_i10058_i10846 = (3. + $t28076);
                      {
                        const $t27361_i10059_i10847 = (3. + $t28076);
                        return ($t27360_i10058_i10846 * $t27361_i10059_i10847);
                      }
                    }
                  })();
                  return ($t27359_i10057_i10845 <= $t27362_i10060_i10848);
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
      const $t28153_i10851 = p.x;
      {
        const $t28154_i10852 = p.y;
        {
          const $t28156_i10853 = game.ball_x;
          {
            const $t28157_i10854 = game.ball_y;
            {
              const $t27359_i10089_i10859 = (() => {
                {
                  const dx_i3632_i10085_i10855 = ($t28156_i10853 - $t28153_i10851);
                  {
                    const dy_i3633_i10086_i10856 = ($t28157_i10854 - $t28154_i10852);
                    {
                      const $t27357_i3634_i10087_i10857 = (dx_i3632_i10085_i10855 * dx_i3632_i10085_i10855);
                      {
                        const $t27358_i3635_i10088_i10858 = (dy_i3633_i10086_i10856 * dy_i3633_i10086_i10856);
                        return ($t27357_i3634_i10087_i10857 + $t27358_i3635_i10088_i10858);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10092_i10862 = (() => {
                  {
                    const $t27360_i10090_i10860 = (12. + 6.);
                    {
                      const $t27361_i10091_i10861 = (12. + 6.);
                      return ($t27360_i10090_i10860 * $t27361_i10091_i10861);
                    }
                  }
                })();
                return ($t27359_i10089_i10859 <= $t27362_i10092_i10862);
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
          const $t28153_i10865 = q.x;
          {
            const $t28154_i10866 = q.y;
            {
              const $t28156_i10867 = game.ball_x;
              {
                const $t28157_i10868 = game.ball_y;
                {
                  const $t27359_i10089_i10873 = (() => {
                    {
                      const dx_i3632_i10085_i10869 = ($t28156_i10867 - $t28153_i10865);
                      {
                        const dy_i3633_i10086_i10870 = ($t28157_i10868 - $t28154_i10866);
                        {
                          const $t27357_i3634_i10087_i10871 = (dx_i3632_i10085_i10869 * dx_i3632_i10085_i10869);
                          {
                            const $t27358_i3635_i10088_i10872 = (dy_i3633_i10086_i10870 * dy_i3633_i10086_i10870);
                            return ($t27357_i3634_i10087_i10871 + $t27358_i3635_i10088_i10872);
                          }
                        }
                      }
                    }
                  })();
                  {
                    const $t27362_i10092_i10876 = (() => {
                      {
                        const $t27360_i10090_i10874 = (12. + 6.);
                        {
                          const $t27361_i10091_i10875 = (12. + 6.);
                          return ($t27360_i10090_i10874 * $t27361_i10091_i10875);
                        }
                      }
                    })();
                    return ($t27359_i10089_i10873 <= $t27362_i10092_i10876);
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
      const $t28200_i11000 = game.ball_x;
      {
        const $t28201_i11001 = game.ball_y;
        {
          const $t28050_i10598_i11002 = s.x;
          {
            const $t28051_i10599_i11003 = s.y;
            {
              const $t27359_i10057_i10604_i11008 = (() => {
                {
                  const dx_i3632_i10053_i10600_i11004 = ($t28200_i11000 - $t28050_i10598_i11002);
                  {
                    const dy_i3633_i10054_i10601_i11005 = ($t28201_i11001 - $t28051_i10599_i11003);
                    {
                      const $t27357_i3634_i10055_i10602_i11006 = (dx_i3632_i10053_i10600_i11004 * dx_i3632_i10053_i10600_i11004);
                      {
                        const $t27358_i3635_i10056_i10603_i11007 = (dy_i3633_i10054_i10601_i11005 * dy_i3633_i10054_i10601_i11005);
                        return ($t27357_i3634_i10055_i10602_i11006 + $t27358_i3635_i10056_i10603_i11007);
                      }
                    }
                  }
                }
              })();
              {
                const $t27362_i10060_i10607_i11011 = (() => {
                  {
                    const $t27360_i10058_i10605_i11009 = (3. + 6.);
                    {
                      const $t27361_i10059_i10606_i11010 = (3. + 6.);
                      return ($t27360_i10058_i10605_i11009 * $t27361_i10059_i10606_i11010);
                    }
                  }
                })();
                return ($t27359_i10057_i10604_i11008 <= $t27362_i10060_i10607_i11011);
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
          const $t28200_i11014 = game.ball_x;
          {
            const $t28201_i11015 = game.ball_y;
            {
              const $t28050_i10598_i11016 = s.x;
              {
                const $t28051_i10599_i11017 = s.y;
                {
                  const $t27359_i10057_i10604_i11022 = (() => {
                    {
                      const dx_i3632_i10053_i10600_i11018 = ($t28200_i11014 - $t28050_i10598_i11016);
                      {
                        const dy_i3633_i10054_i10601_i11019 = ($t28201_i11015 - $t28051_i10599_i11017);
                        {
                          const $t27357_i3634_i10055_i10602_i11020 = (dx_i3632_i10053_i10600_i11018 * dx_i3632_i10053_i10600_i11018);
                          {
                            const $t27358_i3635_i10056_i10603_i11021 = (dy_i3633_i10054_i10601_i11019 * dy_i3633_i10054_i10601_i11019);
                            return ($t27357_i3634_i10055_i10602_i11020 + $t27358_i3635_i10056_i10603_i11021);
                          }
                        }
                      }
                    }
                  })();
                  {
                    const $t27362_i10060_i10607_i11025 = (() => {
                      {
                        const $t27360_i10058_i10605_i11023 = (3. + 6.);
                        {
                          const $t27361_i10059_i10606_i11024 = (3. + 6.);
                          return ($t27360_i10058_i10605_i11023 * $t27361_i10059_i10606_i11024);
                        }
                      }
                    })();
                    return ($t27359_i10057_i10604_i11022 <= $t27362_i10060_i10607_i11025);
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
      const $t28194_i10879 = a.x;
      {
        const $t28195_i10880 = a.y;
        {
          const $t28196_i10881 = a.radius;
          {
            const $t28197_i10882 = game.ball_x;
            {
              const $t28198_i10883 = game.ball_y;
              {
                const $t27359_i10117_i10888 = (() => {
                  {
                    const dx_i3632_i10113_i10884 = ($t28197_i10882 - $t28194_i10879);
                    {
                      const dy_i3633_i10114_i10885 = ($t28198_i10883 - $t28195_i10880);
                      {
                        const $t27357_i3634_i10115_i10886 = (dx_i3632_i10113_i10884 * dx_i3632_i10113_i10884);
                        {
                          const $t27358_i3635_i10116_i10887 = (dy_i3633_i10114_i10885 * dy_i3633_i10114_i10885);
                          return ($t27357_i3634_i10115_i10886 + $t27358_i3635_i10116_i10887);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10120_i10891 = (() => {
                    {
                      const $t27360_i10118_i10889 = ($t28196_i10881 + 6.);
                      {
                        const $t27361_i10119_i10890 = ($t28196_i10881 + 6.);
                        return ($t27360_i10118_i10889 * $t27361_i10119_i10890);
                      }
                    }
                  })();
                  return ($t27359_i10117_i10888 <= $t27362_i10120_i10891);
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
      const $t28194_i10894 = a.x;
      {
        const $t28195_i10895 = a.y;
        {
          const $t28196_i10896 = a.radius;
          {
            const $t28197_i10897 = game.ball_x;
            {
              const $t28198_i10898 = game.ball_y;
              {
                const $t27359_i10117_i10903 = (() => {
                  {
                    const dx_i3632_i10113_i10899 = ($t28197_i10897 - $t28194_i10894);
                    {
                      const dy_i3633_i10114_i10900 = ($t28198_i10898 - $t28195_i10895);
                      {
                        const $t27357_i3634_i10115_i10901 = (dx_i3632_i10113_i10899 * dx_i3632_i10113_i10899);
                        {
                          const $t27358_i3635_i10116_i10902 = (dy_i3633_i10114_i10900 * dy_i3633_i10114_i10900);
                          return ($t27357_i3634_i10115_i10901 + $t27358_i3635_i10116_i10902);
                        }
                      }
                    }
                  }
                })();
                {
                  const $t27362_i10120_i10906 = (() => {
                    {
                      const $t27360_i10118_i10904 = ($t28196_i10896 + 6.);
                      {
                        const $t27361_i10119_i10905 = ($t28196_i10896 + 6.);
                        return ($t27360_i10118_i10904 * $t27361_i10119_i10905);
                      }
                    }
                  })();
                  return ($t27359_i10117_i10903 <= $t27362_i10120_i10906);
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
          const $t28194_i10909 = a.x;
          {
            const $t28195_i10910 = a.y;
            {
              const $t28196_i10911 = a.radius;
              {
                const $t28197_i10912 = game.ball_x;
                {
                  const $t28198_i10913 = game.ball_y;
                  {
                    const $t27359_i10117_i10918 = (() => {
                      {
                        const dx_i3632_i10113_i10914 = ($t28197_i10912 - $t28194_i10909);
                        {
                          const dy_i3633_i10114_i10915 = ($t28198_i10913 - $t28195_i10910);
                          {
                            const $t27357_i3634_i10115_i10916 = (dx_i3632_i10113_i10914 * dx_i3632_i10113_i10914);
                            {
                              const $t27358_i3635_i10116_i10917 = (dy_i3633_i10114_i10915 * dy_i3633_i10114_i10915);
                              return ($t27357_i3634_i10115_i10916 + $t27358_i3635_i10116_i10917);
                            }
                          }
                        }
                      }
                    })();
                    {
                      const $t27362_i10120_i10921 = (() => {
                        {
                          const $t27360_i10118_i10919 = ($t28196_i10911 + 6.);
                          {
                            const $t27361_i10119_i10920 = ($t28196_i10911 + 6.);
                            return ($t27360_i10118_i10919 * $t27361_i10119_i10920);
                          }
                        }
                      })();
                      return ($t27359_i10117_i10918 <= $t27362_i10120_i10921);
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
          const $t28200_i11028 = game.ball_x;
          {
            const $t28201_i11029 = game.ball_y;
            {
              const $t28050_i10598_i11030 = s.x;
              {
                const $t28051_i10599_i11031 = s.y;
                {
                  const $t27359_i10057_i10604_i11036 = (() => {
                    {
                      const dx_i3632_i10053_i10600_i11032 = ($t28200_i11028 - $t28050_i10598_i11030);
                      {
                        const dy_i3633_i10054_i10601_i11033 = ($t28201_i11029 - $t28051_i10599_i11031);
                        {
                          const $t27357_i3634_i10055_i10602_i11034 = (dx_i3632_i10053_i10600_i11032 * dx_i3632_i10053_i10600_i11032);
                          {
                            const $t27358_i3635_i10056_i10603_i11035 = (dy_i3633_i10054_i10601_i11033 * dy_i3633_i10054_i10601_i11033);
                            return ($t27357_i3634_i10055_i10602_i11034 + $t27358_i3635_i10056_i10603_i11035);
                          }
                        }
                      }
                    }
                  })();
                  {
                    const $t27362_i10060_i10607_i11039 = (() => {
                      {
                        const $t27360_i10058_i10605_i11037 = (3. + 6.);
                        {
                          const $t27361_i10059_i10606_i11038 = (3. + 6.);
                          return ($t27360_i10058_i10605_i11037 * $t27361_i10059_i10606_i11038);
                        }
                      }
                    })();
                    return ($t27359_i10057_i10604_i11036 <= $t27362_i10060_i10607_i11039);
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
                const $t669_i7758 = { $: "$Clo_$lam668$4792", _0: $lam668$apply$4792, _1: k };
                return List$any$List_WeaponKind$Fn_WeaponKind_Bool(owned, $t669_i7758);
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

function $lam29547$apply$3790($clo, p) {
  {
    const dt_s = (() => {
      return $clo._1;
    })();
    {
      const $t29540_i7769 = (() => {
        {
          const $t29537_i7766 = p.x;
          {
            const $t29539_i7768 = (() => {
              {
                const $t29538_i7767 = p.vx;
                return ($t29538_i7767 * dt_s);
              }
            })();
            return ($t29537_i7766 + $t29539_i7768);
          }
        }
      })();
      {
        const $t29544_i7773 = (() => {
          {
            const $t29541_i7770 = p.y;
            {
              const $t29543_i7772 = (() => {
                {
                  const $t29542_i7771 = p.vy;
                  return ($t29542_i7771 * dt_s);
                }
              })();
              return ($t29541_i7770 + $t29543_i7772);
            }
          }
        })();
        {
          const $t29546_i7775 = (() => {
            {
              const $t29545_i7774 = p.life;
              return ($t29545_i7774 - dt_s);
            }
          })();
          return ({ ...p, x: $t29540_i7769, y: $t29544_i7773, life: $t29546_i7775 });
        }
      }
    }
  }
}
const $lam29547$apply$3790$clo = { _0: ($_, $clo, p) => $lam29547$apply$3790($clo, p) };

function $lam29550$apply$3791($clo, p) {
  {
    const $t29551 = p.life;
    return ($t29551 > 0.);
  }
}
const $lam29550$apply$3791$clo = { _0: ($_, $clo, p) => $lam29550$apply$3791($clo, p) };

function $jp29696$apply$3794($clo) {
  {
    const $f29690 = (() => {
      return $clo._1;
    })();
    {
      const $f29691 = (() => {
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
              return $f29691;
            })();
            {
              const o = (() => {
                return $f29690;
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
                  const $t29686 = s.x;
                  {
                    const $t29687 = s.y;
                    {
                      const $t29688 = o.radius;
                      return Canvas$arc(ctx, $t29686, $t29687, $t29688, 0., 6.28318530718);
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
const $jp29696$apply$3794$clo = { _0: ($_, $clo) => $jp29696$apply$3794($clo) };

function $jp29735$apply$3797($clo) {
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
          const $t29734 = dot_count(s);
          return draw_pulse_particle(ctx, s, t, $t29734, 0);
        }
      }
    }
  }
}
const $jp29735$apply$3797$clo = { _0: ($_, $clo) => $jp29735$apply$3797($clo) };

function $jp29737$apply$3798($clo) {
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
          const $t29734 = dot_count(s);
          return draw_pulse_particle(ctx, s, t, $t29734, 0);
        }
      }
    }
  }
}
const $jp29737$apply$3798$clo = { _0: ($_, $clo) => $jp29737$apply$3798($clo) };

function $jp29885$apply$3801($clo) {
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
const $jp29885$apply$3801$clo = { _0: ($_, $clo) => $jp29885$apply$3801($clo) };

function $lam30199$apply$3827($clo, k) {
  {
    const $t30200 = (() => {
      return (k === "m");
    })();
    {
      const $t30201 = (k === "M");
      return ($t30200 || $t30201);
    }
  }
}
const $lam30199$apply$3827$clo = { _0: ($_, $clo, k) => $lam30199$apply$3827($clo, k) };

function $jp30258$apply$3829($clo) {
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
const $jp30258$apply$3829$clo = { _0: ($_, $clo) => $jp30258$apply$3829($clo) };

function $lam30269$apply$3830($clo, _) {
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
const $lam30269$apply$3830$clo = { _0: ($_, $clo, _) => $lam30269$apply$3830($clo, _) };

function $lam30282$apply$3831($clo, _) {
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
const $lam30282$apply$3831$clo = { _0: ($_, $clo, _) => $lam30282$apply$3831($clo, _) };

function go$apply$4092($clo, lst, acc) {
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
const go$apply$4092$clo = { _0: ($_, $clo, lst, acc) => go$apply$4092($clo, lst, acc) };

function go$apply$4319($clo, lst, acc) {
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
const go$apply$4319$clo = { _0: ($_, $clo, lst, acc) => go$apply$4319($clo, lst, acc) };

function go$apply$4759($clo, lst, acc) {
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
const go$apply$4759$clo = { _0: ($_, $clo, lst, acc) => go$apply$4759($clo, lst, acc) };

function go$apply$4761($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8821 = { $: "$Clo_go$5254", _0: go$apply$5254 };
            {
              const $t253_i8822 = { $: "Nil" };
              return go$apply$5254(go_i8821, acc, $t253_i8822);
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
const go$apply$4761$clo = { _0: ($_, $clo, lst, acc) => go$apply$4761($clo, lst, acc) };

function go$apply$4763($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8826 = { $: "$Clo_go$5254", _0: go$apply$5254 };
            {
              const $t253_i8827 = { $: "Nil" };
              return go$apply$5254(go_i8826, acc, $t253_i8827);
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
const go$apply$4763$clo = { _0: ($_, $clo, lst, acc) => go$apply$4763($clo, lst, acc) };

function go$apply$4765($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8831 = { $: "$Clo_go$5256", _0: go$apply$5256 };
            {
              const $t253_i8832 = { $: "Nil" };
              return go$apply$5256(go_i8831, acc, $t253_i8832);
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
const go$apply$4765$clo = { _0: ($_, $clo, lst, acc) => go$apply$4765($clo, lst, acc) };

function go$apply$4767($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8836 = { $: "$Clo_go$5256", _0: go$apply$5256 };
            {
              const $t253_i8837 = { $: "Nil" };
              return go$apply$5256(go_i8836, acc, $t253_i8837);
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
const go$apply$4767$clo = { _0: ($_, $clo, lst, acc) => go$apply$4767($clo, lst, acc) };

function go$apply$4769($clo, lst, acc) {
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
const go$apply$4769$clo = { _0: ($_, $clo, lst, acc) => go$apply$4769($clo, lst, acc) };

function go$apply$4771($clo, lst, acc) {
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
const go$apply$4771$clo = { _0: ($_, $clo, lst, acc) => go$apply$4771($clo, lst, acc) };

function go$apply$4773($clo, lst, acc) {
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
const go$apply$4773$clo = { _0: ($_, $clo, lst, acc) => go$apply$4773($clo, lst, acc) };

function go$apply$4775($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8847 = { $: "$Clo_go$4773", _0: go$apply$4773 };
            {
              const $t253_i8848 = { $: "Nil" };
              return go$apply$4773(go_i8847, acc, $t253_i8848);
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
const go$apply$4775$clo = { _0: ($_, $clo, lst, acc) => go$apply$4775($clo, lst, acc) };

function go$apply$4777($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8852 = { $: "$Clo_go$4773", _0: go$apply$4773 };
            {
              const $t253_i8853 = { $: "Nil" };
              return go$apply$4773(go_i8852, acc, $t253_i8853);
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
const go$apply$4777$clo = { _0: ($_, $clo, lst, acc) => go$apply$4777($clo, lst, acc) };

function go$apply$4779($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8857 = { $: "$Clo_go$4319", _0: go$apply$4319 };
            {
              const $t253_i8858 = { $: "Nil" };
              return go$apply$4319(go_i8857, acc, $t253_i8858);
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
const go$apply$4779$clo = { _0: ($_, $clo, lst, acc) => go$apply$4779($clo, lst, acc) };

function go$apply$4781($clo, lst, acc) {
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
const go$apply$4781$clo = { _0: ($_, $clo, lst, acc) => go$apply$4781($clo, lst, acc) };

function go$apply$4784($clo, lst, yes, no) {
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
                const go_i8868 = { $: "$Clo_go$4769", _0: go$apply$4769 };
                {
                  const $t253_i8869 = { $: "Nil" };
                  return go$apply$4769(go_i8868, yes, $t253_i8869);
                }
              }
            })();
            {
              const $t547 = (() => {
                {
                  const go_i8865 = { $: "$Clo_go$4769", _0: go$apply$4769 };
                  {
                    const $t253_i8866 = { $: "Nil" };
                    return go$apply$4769(go_i8865, no, $t253_i8866);
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
const go$apply$4784$clo = { _0: ($_, $clo, lst, yes, no) => go$apply$4784($clo, lst, yes, no) };

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
                const go_i8880 = { $: "$Clo_go$4773", _0: go$apply$4773 };
                {
                  const $t253_i8881 = { $: "Nil" };
                  return go$apply$4773(go_i8880, yes, $t253_i8881);
                }
              }
            })();
            {
              const $t547 = (() => {
                {
                  const go_i8877 = { $: "$Clo_go$4773", _0: go$apply$4773 };
                  {
                    const $t253_i8878 = { $: "Nil" };
                    return go$apply$4773(go_i8877, no, $t253_i8878);
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

function $lam668$apply$4792($clo, y) {
  {
    const x = (() => {
      return $clo._1;
    })();
    return (y === x);
  }
}
const $lam668$apply$4792$clo = { _0: ($_, $clo, y) => $lam668$apply$4792($clo, y) };

function go$apply$4794($clo, lst, acc) {
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
const go$apply$4794$clo = { _0: ($_, $clo, lst, acc) => go$apply$4794($clo, lst, acc) };

function go$apply$4796($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8888 = { $: "$Clo_go$4769", _0: go$apply$4769 };
            {
              const $t253_i8889 = { $: "Nil" };
              return go$apply$4769(go_i8888, acc, $t253_i8889);
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
const go$apply$4796$clo = { _0: ($_, $clo, lst, acc) => go$apply$4796($clo, lst, acc) };

function go$apply$4799($clo, lst, acc) {
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
const go$apply$4799$clo = { _0: ($_, $clo, lst, acc) => go$apply$4799($clo, lst, acc) };

function go$apply$4802($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8900 = { $: "$Clo_go$5103", _0: go$apply$5103 };
            {
              const $t253_i8901 = { $: "Nil" };
              return go$apply$5103(go_i8900, acc, $t253_i8901);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8897 = { $: "$Clo_go$5103", _0: go$apply$5103 };
                {
                  const $t253_i8898 = { $: "Nil" };
                  return go$apply$5103(go_i8897, acc, $t253_i8898);
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
const go$apply$4802$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4802($clo, lst, k, acc) };

function go$apply$4804($clo, lst, acc) {
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
const go$apply$4804$clo = { _0: ($_, $clo, lst, acc) => go$apply$4804($clo, lst, acc) };

function go$apply$4808($clo, lst, acc) {
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
const go$apply$4808$clo = { _0: ($_, $clo, lst, acc) => go$apply$4808($clo, lst, acc) };

function go$apply$4811($clo, lst, acc) {
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
const go$apply$4811$clo = { _0: ($_, $clo, lst, acc) => go$apply$4811($clo, lst, acc) };

function go$apply$4813($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8917 = { $: "$Clo_go$5103", _0: go$apply$5103 };
            {
              const $t253_i8918 = { $: "Nil" };
              return go$apply$5103(go_i8917, acc, $t253_i8918);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8914 = { $: "$Clo_go$5103", _0: go$apply$5103 };
                {
                  const $t253_i8915 = { $: "Nil" };
                  return go$apply$5103(go_i8914, acc, $t253_i8915);
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
const go$apply$4813$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4813($clo, lst, k, acc) };

function go$apply$4815($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8922 = { $: "$Clo_go$4092", _0: go$apply$4092 };
            {
              const $t253_i8923 = { $: "Nil" };
              return go$apply$4092(go_i8922, acc, $t253_i8923);
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
const go$apply$4815$clo = { _0: ($_, $clo, lst, acc) => go$apply$4815($clo, lst, acc) };

function go$apply$4817($clo, lst, acc) {
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
const go$apply$4817$clo = { _0: ($_, $clo, lst, acc) => go$apply$4817($clo, lst, acc) };

function go$apply$4819($clo, lst, acc) {
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
const go$apply$4819$clo = { _0: ($_, $clo, lst, acc) => go$apply$4819($clo, lst, acc) };

function go$apply$4821($clo, lst, acc) {
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
const go$apply$4821$clo = { _0: ($_, $clo, lst, acc) => go$apply$4821($clo, lst, acc) };

function go$apply$4823($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8933 = { $: "$Clo_go$5265", _0: go$apply$5265 };
            {
              const $t253_i8934 = { $: "Nil" };
              return go$apply$5265(go_i8933, acc, $t253_i8934);
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
const go$apply$4823$clo = { _0: ($_, $clo, lst, acc) => go$apply$4823($clo, lst, acc) };

function go$apply$4826($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8942 = { $: "$Clo_go$5103", _0: go$apply$5103 };
            {
              const $t253_i8943 = { $: "Nil" };
              return go$apply$5103(go_i8942, acc, $t253_i8943);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8939 = { $: "$Clo_go$5103", _0: go$apply$5103 };
                {
                  const $t253_i8940 = { $: "Nil" };
                  return go$apply$5103(go_i8939, acc, $t253_i8940);
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
const go$apply$4826$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4826($clo, lst, k, acc) };

function go$apply$4829($clo, lst, acc) {
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
const go$apply$4829$clo = { _0: ($_, $clo, lst, acc) => go$apply$4829($clo, lst, acc) };

function go$apply$4831($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const pred = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8950 = { $: "$Clo_go$5267", _0: go$apply$5267 };
            {
              const $t253_i8951 = { $: "Nil" };
              return go$apply$5267(go_i8950, acc, $t253_i8951);
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
const go$apply$4831$clo = { _0: ($_, $clo, lst, acc) => go$apply$4831($clo, lst, acc) };

function go$apply$4833($clo, lst, acc) {
  {
    const go = (() => {
      return $clo;
    })();
    {
      const f = $clo._1;
      switch (lst.$) {
        case "Nil": {
          {
            const go_i8955 = { $: "$Clo_go$5267", _0: go$apply$5267 };
            {
              const $t253_i8956 = { $: "Nil" };
              return go$apply$5267(go_i8955, acc, $t253_i8956);
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
const go$apply$4833$clo = { _0: ($_, $clo, lst, acc) => go$apply$4833($clo, lst, acc) };

function go$apply$4835($clo, lst, k, acc) {
  {
    const go = $clo;
    {
      const $t499 = (k <= 0);
      if ($t499 === true) {
        return (() => {
          {
            const go_i8963 = { $: "$Clo_go$5103", _0: go$apply$5103 };
            {
              const $t253_i8964 = { $: "Nil" };
              return go$apply$5103(go_i8963, acc, $t253_i8964);
            }
          }
        })();
      } else {
        return (() => {
          switch (lst.$) {
            case "Nil": {
              {
                const go_i8960 = { $: "$Clo_go$5103", _0: go$apply$5103 };
                {
                  const $t253_i8961 = { $: "Nil" };
                  return go$apply$5103(go_i8960, acc, $t253_i8961);
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
const go$apply$4835$clo = { _0: ($_, $clo, lst, k, acc) => go$apply$4835($clo, lst, k, acc) };

function go$apply$4837($clo, lst, acc) {
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
const go$apply$4837$clo = { _0: ($_, $clo, lst, acc) => go$apply$4837($clo, lst, acc) };

function go$apply$5103($clo, lst, acc) {
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
const go$apply$5103$clo = { _0: ($_, $clo, lst, acc) => go$apply$5103($clo, lst, acc) };

function go$apply$5254($clo, lst, acc) {
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
const go$apply$5254$clo = { _0: ($_, $clo, lst, acc) => go$apply$5254($clo, lst, acc) };

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

function go$apply$5259($clo, lst, acc) {
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
const go$apply$5259$clo = { _0: ($_, $clo, lst, acc) => go$apply$5259($clo, lst, acc) };

function go$apply$5261($clo, lst, acc) {
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
const go$apply$5261$clo = { _0: ($_, $clo, lst, acc) => go$apply$5261($clo, lst, acc) };

function go$apply$5263($clo, lst, acc) {
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
const go$apply$5263$clo = { _0: ($_, $clo, lst, acc) => go$apply$5263($clo, lst, acc) };

function go$apply$5265($clo, lst, acc) {
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
const go$apply$5265$clo = { _0: ($_, $clo, lst, acc) => go$apply$5265($clo, lst, acc) };

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

export { main };
main();
//# sourceMappingURL=perihelion.mjs.map
