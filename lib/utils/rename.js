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
exports.renameFile = exports.renameDir = void 0;
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var checkFiles_1 = require("./checkFiles");
function renameDir(dir, placeholder, newValue, recursive) {
    var e_1, _a;
    if (recursive === void 0) { recursive = true; }
    var newDir = dir;
    if (dir.includes(placeholder)) {
        newDir = dir.replace(placeholder, newValue);
        fs_1.default.renameSync(dir, newDir);
    }
    var files = fs_1.default.readdirSync(newDir);
    try {
        for (var files_1 = __values(files), files_1_1 = files_1.next(); !files_1_1.done; files_1_1 = files_1.next()) {
            var filename = files_1_1.value;
            var filePath = "".concat(newDir, "/").concat(filename);
            var file = fs_1.default.statSync(filePath);
            var newPath = "".concat(newDir, "/").concat(filename.replace(placeholder, newValue));
            if (filename.includes(placeholder)) {
                fs_1.default.renameSync(filePath, newPath);
            }
            if (file.isDirectory() && recursive) {
                renameDir(newPath, placeholder, newValue, recursive);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (files_1_1 && !files_1_1.done && (_a = files_1.return)) _a.call(files_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
exports.renameDir = renameDir;
function renameFile(filePath, placeholder, newValue) {
    (0, checkFiles_1.shouldHave)([filePath]);
    var filename = path_1.default.basename(filePath);
    if (filename.startsWith(placeholder)) {
        var newPath = filePath.replace(placeholder, newValue);
        fs_1.default.renameSync(filePath, newPath);
    }
}
exports.renameFile = renameFile;
