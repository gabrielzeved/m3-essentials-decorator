"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optional = void 0;
require("reflect-metadata");
function Optional() {
    return function (target, propertyKey) {
        Reflect.defineMetadata("optional", true, target, propertyKey);
    };
}
exports.Optional = Optional;
