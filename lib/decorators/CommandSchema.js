"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommandSchema = void 0;
require("reflect-metadata");
function CommandSchema(commandSchema) {
    return function (target, propertyKey) {
        Reflect.defineMetadata("commandSchema", commandSchema, target, propertyKey);
    };
}
exports.CommandSchema = CommandSchema;
