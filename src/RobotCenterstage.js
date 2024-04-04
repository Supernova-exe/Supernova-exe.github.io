"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/RobotPage.css");
var ScorpioImage_jpg_1 = __importDefault(require("./images/ScorpioImage.jpg"));
var RobotPowerplay = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "robotPage powerplayRobot", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Centerstage Robot" }), (0, jsx_runtime_1.jsx)("img", { src: ScorpioImage_jpg_1.default, alt: "Imgage of Scorpio, our robot from Centerstage" }), (0, jsx_runtime_1.jsx)("h2", { children: "This is Scorpio, our robot from the Centerstage season" }), (0, jsx_runtime_1.jsx)("h1", { children: "Behind the bot" }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("iframe", { width: "560", height: "315", src: "https://www.youtube.com/embed/iin2ZSc_T18?si=l-04P1s2jr1_Qw2v", title: "YouTube video player", frameBorder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowFullScreen: true })] }));
};
exports.default = RobotPowerplay;
