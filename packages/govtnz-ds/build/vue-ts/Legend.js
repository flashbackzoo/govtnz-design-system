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
  props: {
    children: {
      required: false,
      "default": "Legend text"
    }
  },
  computed: {},
  render: new Function('with(this){return _c(\'legend\',{staticClass:"g-fieldset__legend"},[_t("default")],2)}')
});

exports["default"] = _default;