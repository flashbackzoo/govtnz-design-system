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
const constants = {
    styleSize: {
        xlarge: "g-heading-xl",
        large: "g-heading-l",
        medium: "g-heading-m",
        small: "g-heading-s",
        xsmall: "g-heading-xs",
        xxsmall: "g-heading-xxs"
    }
};
const H6 = ({ styleSize, marginBottom8, id, children }) => (React.createElement("h6", { className: `${constants.styleSize[styleSize] !== undefined
        ? constants.styleSize[styleSize]
        : ""}${marginBottom8 ? " g-heading-mb-8" : ""}`, id: id }, children !== undefined ? (children) : (React.createElement(React.Fragment, null, "Example text"))));
H6.props = ["styleSize", "marginBottom8", "id", "children"];
exports.default = H6;
//# sourceMappingURL=H6.js.map