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
    target: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target2: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target3: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target4: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target5: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target6: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target7: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" },
    target8: { Blank: "_blank", Top: "_top", Self: "_self", Parent: "_parent" }
};
const SummaryListCheckYourAnswers = ({ href, rel, target, href2, rel2, target2, href3, rel3, target3, href4, rel4, target4, href5, rel5, target5, href6, rel6, target6, href7, rel7, target7, href8, rel8, target8 }) => (React.createElement("dl", { className: "g-summaryListCheckYourAnswers-summary-list" },
    React.createElement("div", { className: "g-summaryListCheckYourAnswers-summary-list__row" },
        React.createElement("dt", { className: "g-summaryListCheckYourAnswers-summary-list__key" }, "Name"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__value" }, "Sarah Philips"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__actions" },
            React.createElement("a", { className: "g-summaryListCheckYourAnswers-link", href: href, rel: rel, target: constants.target[target] },
                "Change",
                React.createElement("span", { className: "g-summaryListCheckYourAnswers-visually-hidden" },
                    " ",
                    "name")))),
    React.createElement("div", { className: "g-summaryListCheckYourAnswers-summary-list__row" },
        React.createElement("dt", { className: "g-summaryListCheckYourAnswers-summary-list__key" }, "Date of birth"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__value" }, "5 January 1978"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__actions" },
            React.createElement("a", { className: "g-summaryListCheckYourAnswers-link", href: href2, rel: rel2, target: constants.target2[target2] },
                "Change",
                React.createElement("span", { className: "g-summaryListCheckYourAnswers-visually-hidden" },
                    " ",
                    "date of birth")))),
    React.createElement("div", { className: "g-summaryListCheckYourAnswers-summary-list__row" },
        React.createElement("dt", { className: "g-summaryListCheckYourAnswers-summary-list__key" }, "Contact information"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__value" },
            "72 Guild Street",
            React.createElement("br", null),
            "London",
            React.createElement("br", null),
            "SE23 6FH"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__actions" },
            React.createElement("a", { className: "g-summaryListCheckYourAnswers-link", href: href3, rel: rel3, target: constants.target3[target3] },
                "Change",
                React.createElement("span", { className: "g-summaryListCheckYourAnswers-visually-hidden" },
                    " ",
                    "contact information")))),
    React.createElement("div", { className: "g-summaryListCheckYourAnswers-summary-list__row" },
        React.createElement("dt", { className: "g-summaryListCheckYourAnswers-summary-list__key" }, "Contact details"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__value" },
            "07700 900457",
            React.createElement("br", null),
            "sarah.phillips@example.com"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__actions" },
            React.createElement("a", { className: "g-summaryListCheckYourAnswers-link", href: href4, rel: rel4, target: constants.target4[target4] },
                "Change",
                React.createElement("span", { className: "g-summaryListCheckYourAnswers-visually-hidden" },
                    " ",
                    "contact details")))),
    React.createElement("div", { className: "g-summaryListCheckYourAnswers-summary-list__row" },
        React.createElement("dt", { className: "g-summaryListCheckYourAnswers-summary-list__key" }, "Previous application number"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__value" }, "502135326"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__actions" },
            React.createElement("a", { className: "g-summaryListCheckYourAnswers-link", href: href5, rel: rel5, target: constants.target5[target5] },
                "Change",
                React.createElement("span", { className: "g-summaryListCheckYourAnswers-visually-hidden" }, "previous application number")))),
    React.createElement("div", { className: "g-summaryListCheckYourAnswers-summary-list__row" },
        React.createElement("dt", { className: "g-summaryListCheckYourAnswers-summary-list__key" }, "Licence type"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__value" }, "For personal use"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__actions" },
            React.createElement("a", { className: "g-summaryListCheckYourAnswers-link", href: href6, rel: rel6, target: constants.target6[target6] },
                "Change",
                React.createElement("span", { className: "g-summaryListCheckYourAnswers-visually-hidden" },
                    " ",
                    "licence type")))),
    React.createElement("div", { className: "g-summaryListCheckYourAnswers-summary-list__row" },
        React.createElement("dt", { className: "g-summaryListCheckYourAnswers-summary-list__key" }, "Home address"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__value" },
            React.createElement("p", { className: "g-summaryListCheckYourAnswers-body" },
                "72 Guild Street",
                React.createElement("br", null),
                "London",
                React.createElement("br", null),
                "SE23 6FH")),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__actions" },
            React.createElement("a", { className: "g-summaryListCheckYourAnswers-link", href: href7, rel: rel7, target: constants.target7[target7] },
                "Change",
                React.createElement("span", { className: "g-summaryListCheckYourAnswers-visually-hidden" },
                    " ",
                    "home address")))),
    React.createElement("div", { className: "g-summaryListCheckYourAnswers-summary-list__row" },
        React.createElement("dt", { className: "g-summaryListCheckYourAnswers-summary-list__key" }, "Licence period"),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__value" },
            React.createElement("p", { className: "g-summaryListCheckYourAnswers-body" }, "This is a longer paragraph of text provided by the user to provide additional information."),
            React.createElement("p", { className: "g-summaryListCheckYourAnswers-body" }, "This is a second paragraph of text provided by the user.")),
        React.createElement("dd", { className: "g-summaryListCheckYourAnswers-summary-list__actions" },
            React.createElement("a", { className: "g-summaryListCheckYourAnswers-link", href: href8, rel: rel8, target: constants.target8[target8] },
                "Change",
                React.createElement("span", { className: "g-summaryListCheckYourAnswers-visually-hidden" },
                    " ",
                    "licence period"))))));
SummaryListCheckYourAnswers.props = [
    "href",
    "rel",
    "target",
    "href2",
    "rel2",
    "target2",
    "href3",
    "rel3",
    "target3",
    "href4",
    "rel4",
    "target4",
    "href5",
    "rel5",
    "target5",
    "href6",
    "rel6",
    "target6",
    "href7",
    "rel7",
    "target7",
    "href8",
    "rel8",
    "target8"
];
exports.default = SummaryListCheckYourAnswers;
//# sourceMappingURL=SummaryListCheckYourAnswers.js.map