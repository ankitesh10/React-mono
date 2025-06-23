"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
function Button(_a) {
    var children = _a.children, onClick = _a.onClick;
    return (0, jsx_runtime_1.jsx)("button", { onClick: onClick, children: children });
}
exports.default = Button;
