"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var writeInJson = function (filePath, object, overwrite) {
    if (overwrite === void 0) { overwrite = true; }
    var file = fs_1.default.readFileSync(filePath);
    var JsonObject = JSON.parse(file.toString());
    if (overwrite)
        JsonObject = __assign(__assign({}, JsonObject), object);
    else
        JsonObject = __assign(__assign({}, object), JsonObject);
    fs_1.default.writeFileSync(filePath, JSON.stringify(JsonObject, null, "\t"));
};
exports.default = writeInJson;
