import { IsBoolean, IsEnum, IsNotEmpty, IsString } from "class-validator";
import { Question } from "../../decorators/Question";

export const CUSTOM_STORE_PATH = "custom\\store\\";
export const CUSTOM_REACT_PATH = "custom\\react\\";
export const PLACEHOLDER = "COMPONENT_NAME";

export enum Templates {
  CSS_HANDLES = "css-handles",
  CSS = "css",
  SASS = "sass",
}

export class CreateSchema {
  @IsString()
  @IsNotEmpty()
  @Question({
    type: "input",
    name: "name",
    message: "Digite o nome do componente: ",
  })
  name: string = "";

  @IsEnum(Templates)
  @Question({
    type: "list",
    name: "template",
    message: "Escolha um template para seu componente",
    choices: Object.values(Templates),
    default: Templates.CSS_HANDLES,
  })
  template: string = "";

  @IsBoolean()
  checkFolder: boolean = true;
}
