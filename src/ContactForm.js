"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_spinners_1 = require("react-spinners");
var ContactForm = function () {
    var _a = (0, react_1.useState)(""), name = _a[0], setName = _a[1];
    var _b = (0, react_1.useState)(""), email = _b[0], setEmail = _b[1];
    var _c = (0, react_1.useState)(""), message = _c[0], setMessage = _c[1];
    var _d = (0, react_1.useState)(false), error = _d[0], setError = _d[1];
    var navigate = (0, react_router_dom_1.useNavigate)();
    var _e = (0, react_1.useState)(false), isLoading = _e[0], setIsLoading = _e[1];
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var data, url, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    data = {
                        name: name,
                        email: email,
                        message: message
                    };
                    url = "https://script.google.com/macros/s/AKfycbxZRTmYrDYejw6LXeWA7OzjC748SJ8ZftJnplxbVzgMNWGHayzNJJ78bCylFpJbccjYyw/exec";
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    setIsLoading(true);
                    return [4 /*yield*/, fetch(url, {
                            method: 'POST',
                            body: JSON.stringify(data),
                            headers: { 'Content-Type': 'application/json' },
                            mode: 'no-cors',
                        })];
                case 2:
                    _a.sent();
                    setIsLoading(false);
                    setName("");
                    setEmail("");
                    setMessage("");
                    setError(false);
                    navigate("/thankyou");
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    setError(true);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)("div", { className: "container", children: (0, jsx_runtime_1.jsx)("div", { className: "row justify-content-center", children: (0, jsx_runtime_1.jsx)("div", { className: "col-lg-6  col-md-8 col-sm-12", children: (0, jsx_runtime_1.jsxs)("form", { onSubmit: handleSubmit, className: "p-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "form-floating mb-3", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: "form-control", id: "name", value: name, onChange: function (e) { return setName(e.target.value); }, required: true }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "name", children: "Name" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-floating mb-3", children: [(0, jsx_runtime_1.jsx)("input", { type: "email", className: "form-control", id: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, required: true, pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$" }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "email", children: "Email" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "form-floating mb-3", children: [(0, jsx_runtime_1.jsx)("textarea", { className: "form-control", id: "message", value: message, onChange: function (e) { return setMessage(e.target.value); }, required: true }), (0, jsx_runtime_1.jsx)("label", { htmlFor: "message", children: "Message" })] }), isLoading ? ((0, jsx_runtime_1.jsx)(react_spinners_1.ClipLoader, { color: "#b600d0", loading: isLoading, size: 70, "aria-label": "Loading" })) : ((0, jsx_runtime_1.jsx)("button", { type: "submit", className: "btn btn-primary btn-lg", children: "Submit" })), error && (0, jsx_runtime_1.jsxs)("p", { className: "alert alert-danger text-danger-emphasis", children: ["There was an error with your submission. Make sure you are connected to the internet. If the problem persists, please email us at ", (0, jsx_runtime_1.jsx)("a", { href: 'mailto:supernova21774@gmail.com', children: "supernova21774@gmail.com" })] })] }) }) }) }));
};
exports.default = ContactForm;
