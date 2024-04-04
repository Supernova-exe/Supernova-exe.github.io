"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/MemberBio.css");
var GetMarkdown_1 = __importDefault(require("./GetMarkdown"));
var react_markdown_1 = __importDefault(require("react-markdown"));
var MemberBio = function (_a) {
    var name = _a.name, bio = _a.bio, image = _a.image;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "memberBio", children: [(0, jsx_runtime_1.jsx)("img", { src: image, alt: "picture of" + name }), (0, jsx_runtime_1.jsx)("h1", { children: name }), (0, jsx_runtime_1.jsx)(react_markdown_1.default, { children: (0, GetMarkdown_1.default)("bios/" + bio) })] }));
};
exports.default = MemberBio;
