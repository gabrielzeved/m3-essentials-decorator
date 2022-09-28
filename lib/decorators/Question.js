"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Question = void 0;
require("reflect-metadata");
function Question(question) {
    return function (target, propertyKey) {
        Reflect.defineMetadata("question", question, target, propertyKey);
    };
}
exports.Question = Question;
