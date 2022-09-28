"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldNotHave = exports.shouldHave = void 0;
var fs_1 = __importDefault(require("fs"));
var shouldHave = function (filePathList) {
    verify(filePathList, true);
};
exports.shouldHave = shouldHave;
var shouldNotHave = function (filePathList) {
    verify(filePathList, false);
};
exports.shouldNotHave = shouldNotHave;
var verify = function (filePathList, shouldHave) {
    var e_1, _a;
    if (shouldHave === void 0) { shouldHave = true; }
    try {
        for (var filePathList_1 = __values(filePathList), filePathList_1_1 = filePathList_1.next(); !filePathList_1_1.done; filePathList_1_1 = filePathList_1.next()) {
            var filePath = filePathList_1_1.value;
            if (!fs_1.default.existsSync(filePath) && shouldHave) {
                throw new Error("Arquivo ".concat(filePath, " n\u00E3o encontrado!"));
            }
            else if (fs_1.default.existsSync(filePath) && !shouldHave) {
                throw new Error("Arquivo ".concat(filePath, " j\u00E1 existe!"));
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (filePathList_1_1 && !filePathList_1_1.done && (_a = filePathList_1.return)) _a.call(filePathList_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
};
