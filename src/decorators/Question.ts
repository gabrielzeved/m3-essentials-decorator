import inquirer from "inquirer";
import "reflect-metadata";

export type QuestionType =
  | inquirer.Question<inquirer.Answers>
  | { choices: string[] };

export function Question(question: QuestionType): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata("question", question, target, propertyKey);
  };
}
