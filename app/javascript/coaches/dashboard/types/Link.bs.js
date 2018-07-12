// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");

function title(t) {
  return t[/* title */0];
}

function url(t) {
  return t[/* url */1];
}

function private_(t) {
  return t[/* private */2];
}

function decode(json) {
  return /* record */[
          /* title */Json_decode.field("title", Json_decode.string, json),
          /* url */Json_decode.field("url", Json_decode.string, json),
          /* private */Json_decode.field("private", Json_decode.bool, json)
        ];
}

exports.title = title;
exports.url = url;
exports.private_ = private_;
exports.decode = decode;
/* No side effect */