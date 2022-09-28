"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSchema = exports.Templates = exports.PLACEHOLDER = exports.CUSTOM_REACT_PATH = exports.CUSTOM_STORE_PATH = void 0;
var class_validator_1 = require("class-validator");
var Question_1 = require("../../decorators/Question");
exports.CUSTOM_STORE_PATH = "custom\\store\\";
exports.CUSTOM_REACT_PATH = "custom\\react\\";
exports.PLACEHOLDER = "COMPONENT_NAME";
var Templates;
(function (Templates) {
    Templates["CSS_HANDLES"] = "css-handles";
    Templates["CSS"] = "css";
    Templates["SASS"] = "sass";
})(Templates = exports.Templates || (exports.Templates = {}));
var CreateSchema = /** @class */ (function () {
    function CreateSchema() {
        this.name = "";
        this.template = "";
        this.checkFolder = true;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsNotEmpty)(),
        (0, Question_1.Question)({
            type: "input",
            name: "name",
            message: "Digite o nome do componente: ",
        })
    ], CreateSchema.prototype, "name", void 0);
    __decorate([
        (0, class_validator_1.IsEnum)(Templates),
        (0, Question_1.Question)({
            type: "list",
            name: "template",
            message: "Escolha um template para seu componente",
            choices: Object.values(Templates),
            default: Templates.CSS_HANDLES,
        })
    ], CreateSchema.prototype, "template", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)()
    ], CreateSchema.prototype, "checkFolder", void 0);
    return CreateSchema;
}());
exports.CreateSchema = CreateSchema;
