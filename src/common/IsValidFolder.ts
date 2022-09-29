import chalk from "chalk";
import {
  CreateSchema,
  CUSTOM_REACT_PATH,
  CUSTOM_STORE_PATH,
} from "../commands/create/schema";
import { Middleware } from "../core/Middleware";
import { TaskTitle } from "../decorators/TaskTitle";
import { shouldHave, shouldNotHave } from "../utils/checkFiles";

@TaskTitle("Checking files")
export default class IsValidFolder extends Middleware {
  async process(context: CommandContext, args: CreateSchema, next: () => any) {
    try {
      const necessaryFiles = [
        `${context.targetDirectory}\\${CUSTOM_STORE_PATH}interfaces.json`,
      ];
      shouldHave(necessaryFiles);

      const filesThatCantExist = [
        `${context.targetDirectory}\\${CUSTOM_REACT_PATH}${args.name}.tsx`,
      ];
      shouldNotHave(filesThatCantExist);
    } catch (err: any) {
      console.error("%s " + err.message, chalk.red.bold("ERROR"));
      process.exit(1);
    }

    await next();
  }
}
