"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/MenuPage.css");
var react_router_dom_1 = require("react-router-dom");
var AchievementsMainPage = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "menuPage robotMainPage", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Robots" }), (0, jsx_runtime_1.jsx)("nav", { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "../centerstage", children: "Centerstage (2023-2024)" }) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { to: "../powerplay", children: "Powerplay (2022-2023)" }) })] }) })] }));
};
exports.default = AchievementsMainPage;
