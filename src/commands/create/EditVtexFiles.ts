import chalk from "chalk";
import _ from "lodash";
import { Middleware } from "../../core/Middleware";
import { TaskTitle } from "../../decorators/TaskTitle";
import writeInJson from "../../utils/writeJson";
import { CreateSchema, CUSTOM_STORE_PATH } from "./schema";

@TaskTitle("Editing VTEX files")
export default class EditVtexFiles extends Middleware {
  async process(__: CommandContext, args: CreateSchema, next: () => any) {
    try {
      let key = `m3-` + _.kebabCase(args.name);
      writeInJson(CUSTOM_STORE_PATH + "interfaces.json", {
        [key]: {
          component: args.name,
        },
      });
    } catch {
      console.error(
        "%s pasta de execução inválida, verifique se está na pasta raiz e execute novamente",
        chalk.red.bold("ERROR")
      );
      process.exit(1);
    }
    await next();
  }
}
