"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var Fieldset = function Fieldset(_ref) {
  var hintId = _ref.hintId,
      children = _ref.children;
  return _react["default"].createElement("div", {
    className: "g-fieldset-form-group"
  }, _react["default"].createElement("fieldset", {
    "aria-describedby": hintId,
    className: "g-fieldset"
  }, children !== undefined ? children : _react["default"].createElement(_react["default"].Fragment, null, "Legend and other fieldset contents...")));
};

Fieldset.props = ["hintId", "children"];
var _default = Fieldset;
exports["default"] = _default;