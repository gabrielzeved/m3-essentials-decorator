import inquirer from "inquirer";
import "reflect-metadata";
export declare type QuestionType = inquirer.Question<inquirer.Answers> | {
    choices: string[];
};
export declare function Question(question: QuestionType): PropertyDecorator;
