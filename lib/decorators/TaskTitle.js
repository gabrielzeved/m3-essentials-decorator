"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTitle = void 0;
function TaskTitle(title) {
    return function (constructor) {
        Reflect.defineMetadata("taskTitle", title, constructor.prototype);
    };
}
exports.TaskTitle = TaskTitle;
