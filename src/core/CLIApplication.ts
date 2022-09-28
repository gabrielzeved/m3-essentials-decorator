import inquirer, { QuestionCollection } from "inquirer";
import { QuestionType } from "../decorators/Question";
import { Middleware } from "./Middleware";

export class CLIApplication {
  protected commands: Record<string, (new () => Middleware)[]> = {};

  buildSchema(command: string, args: any[]) {
    if (this.commands[command]) {
      const schema = new (Reflect.getMetadata(
        "commandSchema",
        this,
        command
      ))();

      for (let [index, key] of Object.keys(schema).entries()) {
        schema[key] = args[index];
      }
      return schema;
    }
    return null;
  }

  async call(args: any[]) {
    const command: string = args[0];
    if (this.commands[command]) {
      let schema = this.buildSchema(command, args.slice(1));

      const answers = await this.askQuestions(schema);

      schema = {
        ...schema,
        ...answers,
      };

      const context = {} as CommandContext;

      this.runMiddleware(command, context, schema, 0);
    }
  }

  async askQuestions(schema: any) {
    const necessaryQuestions: QuestionCollection = [];
    Object.keys(schema).map((key: string) => {
      if (!schema[key]) {
        const question: QuestionType = Reflect.getMetadata(
          "question",
          schema,
          key
        );
        //@ts-expect-error
        if (question) necessaryQuestions.push(question);
      }
    });
    return inquirer.prompt(necessaryQuestions);
  }

  runMiddleware(
    command: string,
    context: CommandContext,
    schema: any,
    index: number
  ) {
    if (index >= this.commands[command].length) return;

    const middleware = new this.commands[command][index]();

    middleware.process(context, schema, () => {
      this.runMiddleware(command, context, schema, index + 1);
    });
  }
}
