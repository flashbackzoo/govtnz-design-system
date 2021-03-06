"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const FormDivider = ({ children }) => (React.createElement("div", { className: "g-radios-form-divider" }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example Text"))));
FormDivider.props = ["children"];
exports.default = FormDivider;
//# sourceMappingURL=FormDivider.js.map