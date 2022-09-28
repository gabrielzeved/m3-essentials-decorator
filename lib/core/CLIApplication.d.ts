import inquirer from "inquirer";
import { Middleware } from "./Middleware";
export declare class CLIApplication {
    protected commands: Record<string, (new () => Middleware)[]>;
    buildSchema(command: string, args: any[]): any;
    call(args: any[]): Promise<void>;
    askQuestions(schema: any): Promise<inquirer.Answers>;
    runMiddleware(command: string, context: CommandContext, schema: any, index: number): void;
}
