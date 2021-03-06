"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _default = _vue["default"].extend({
  functional: true,
  // no internal state
  props: {},
  computed: {},
  render: new Function("with(this){return _m(0)}"),
  staticRenderFns: new Function(['with(this){return _c(\'div\',{staticClass:"g-warning-text"},[_c(\'span\',{staticClass:"g-warning-text__icon",attrs:{"aria-hidden":"true"}},[_v("\\n!\\n\\n")]),_v(" "),_c(\'strong\',{staticClass:"g-warning-text__text"},[_c(\'span\',{staticClass:"g-warning-text__assistive"},[_v("\\nWarning\\n\\n")]),_v("\\n\\n\\n    You can be fined up to $5,000 if you don’t register.\\n  \\n\\n")])])}'])
});

exports["default"] = _default;