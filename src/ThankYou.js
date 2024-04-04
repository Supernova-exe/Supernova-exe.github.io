"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_router_dom_1 = require("react-router-dom");
var ThankYou = function () {
    var navigate = (0, react_router_dom_1.useNavigate)();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "container", children: [(0, jsx_runtime_1.jsx)("h4", { children: "Thank you for your submission!" }), (0, jsx_runtime_1.jsx)("p", { children: "We will be in touch with you shortly" }), (0, jsx_runtime_1.jsx)("button", { className: "btn btn-primary", onClick: function () { return navigate("/"); }, children: "Go back" })] }));
};
exports.default = ThankYou;
