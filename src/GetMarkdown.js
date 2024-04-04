"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function GetMarkdown(path) {
    var _a = (0, react_1.useState)(''), markdown = _a[0], setMarkdown = _a[1];
    (0, react_1.useEffect)(function () {
        Promise.resolve("".concat(("./markdown/" + path))).then(function (s) { return __importStar(require(s)); }).then(function (res) {
            fetch(res.default)
                .then(function (res) { return res.text(); })
                .then(function (res) { return setMarkdown(res); })
                .catch(function (err) { return console.log(err); });
        })
            .catch(function (err) { return console.log(err); });
    });
    return markdown;
}
exports.default = GetMarkdown;
