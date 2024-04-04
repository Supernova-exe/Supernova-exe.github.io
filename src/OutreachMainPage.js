"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var GetMarkdown_1 = __importDefault(require("./GetMarkdown"));
var react_markdown_1 = __importDefault(require("react-markdown"));
require("./css/MenuPage.css");
var react_router_dom_1 = require("react-router-dom");
var OutreachMainPage = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "menuPage outreachMainPage", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Outreach" }), (0, jsx_runtime_1.jsx)(react_markdown_1.default, { children: (0, GetMarkdown_1.default)("outreach/MainOutreach.md") }), (0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "../24-25OffSeason", children: "2024-2025 Off Season" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "../centerstage", children: "Centerstage (2023-2024)" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "../23-24OffSeason", children: "2023-2024 Off Season" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "../powerplay", children: "Powerplay (2022-2023)" }) })] }) })] }));
};
exports.default = OutreachMainPage;
