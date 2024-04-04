"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/HomePage.css");
var TextImageOverlay_1 = __importDefault(require("./TextImageOverlay"));
var Supernova_jpg_1 = __importDefault(require("./images/Supernova.jpg"));
var react_markdown_1 = __importDefault(require("react-markdown"));
var GetMarkdown_1 = __importDefault(require("./GetMarkdown"));
var ContactForm_1 = __importDefault(require("./ContactForm"));
var WhoWeArePath = "WhoWeAre.md";
var GetInTouchPath = "GetInTouch.md";
var HomePage = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "homePage", children: [(0, jsx_runtime_1.jsx)(TextImageOverlay_1.default, { imageUrl: Supernova_jpg_1.default, alt: "picture of team", children: (0, jsx_runtime_1.jsx)("h1", { children: "SUPERNOVA.EXE 21774" }) }), (0, jsx_runtime_1.jsxs)("div", { className: "aboutUs", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Who we are" }), (0, jsx_runtime_1.jsx)(react_markdown_1.default, { children: (0, GetMarkdown_1.default)(WhoWeArePath) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "getInTouch", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Get in touch" }), (0, jsx_runtime_1.jsx)(react_markdown_1.default, { children: (0, GetMarkdown_1.default)(GetInTouchPath) }), (0, jsx_runtime_1.jsx)(ContactForm_1.default, {})] })] }));
};
exports.default = HomePage;
