"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Radios = function Radios(_ref) {
  var inline = _ref.inline,
      children = _ref.children;
  return _react["default"].createElement("div", {
    className: "g-radios".concat(inline ? " g-radios--inline" : "")
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Radio components"));
};

Radios.props = ["inline", "children"];
var _default = Radios;
exports["default"] = _default;