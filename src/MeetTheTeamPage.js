"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
require("./css/MeetTheTeamPage.css");
var IsaacSupernova_jpg_1 = __importDefault(require("./images/TeamMemberImages/IsaacSupernova.jpg"));
var BillySupernova_jpg_1 = __importDefault(require("./images/TeamMemberImages/BillySupernova.jpg"));
var KateSupernova_jpg_1 = __importDefault(require("./images/TeamMemberImages/KateSupernova.jpg"));
var SherrySupernova_jpg_1 = __importDefault(require("./images/TeamMemberImages/SherrySupernova.jpg"));
var ThomasSupernova_jpg_1 = __importDefault(require("./images/TeamMemberImages/ThomasSupernova.jpg"));
var VinuthaSupernova_jpg_1 = __importDefault(require("./images/TeamMemberImages/VinuthaSupernova.jpg"));
var MemberBio_1 = __importDefault(require("./MemberBio"));
var MeetTheTeamPage = function () {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "meetTheTeamPage", children: [(0, jsx_runtime_1.jsx)("h1", { children: "Meet the team" }), (0, jsx_runtime_1.jsxs)("div", { className: "bio-container", children: [(0, jsx_runtime_1.jsxs)("div", { children: [" ", (0, jsx_runtime_1.jsx)(MemberBio_1.default, { name: "Isaac", bio: "Isaac.md", image: IsaacSupernova_jpg_1.default })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(MemberBio_1.default, { name: "Billy", bio: "Billy.md", image: BillySupernova_jpg_1.default }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(MemberBio_1.default, { name: "Kate", bio: "Kate.md", image: KateSupernova_jpg_1.default }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(MemberBio_1.default, { name: "Sherry", bio: "Sherry.md", image: SherrySupernova_jpg_1.default }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(MemberBio_1.default, { name: "Thomas", bio: "Thomas.md", image: ThomasSupernova_jpg_1.default }) }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(MemberBio_1.default, { name: "Vinutha", bio: "Vinutha.md", image: VinuthaSupernova_jpg_1.default }) })] })] }));
};
exports.default = MeetTheTeamPage;
