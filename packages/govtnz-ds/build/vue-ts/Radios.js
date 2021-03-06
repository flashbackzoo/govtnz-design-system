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
    inline: {
      type: Boolean,
      "default": false,
      required: false
    },
    children: {
      required: false,
      "default": "Radio components"
    }
  },
  computed: {
    computed__class: function computed__class() {
      return "g-radios" + (this.inline ? " g-radios--inline" : "");
    }
  },
  render: new Function("with(this){return _c('div',{class:computed__class},[_t(\"default\")],2)}")
});

exports["default"] = _default;