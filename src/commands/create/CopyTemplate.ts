import { Middleware } from "../../core/Middleware";
import { TaskTitle } from "../../decorators/TaskTitle";
import ncp from "ncp";
import { promisify } from "util";
import { CreateSchema, CUSTOM_REACT_PATH, PLACEHOLDER } from "./schema";
//@ts-expect-error
import replace from "string-replace-stream";

@TaskTitle("Copying template files")
export default class CopyTemplate extends Middleware {
  async process(context: CommandContext, args: CreateSchema, next: () => any) {
    let copy = promisify(ncp);

    const templateDirectory = context.templateDirectory;
    context.targetDirectory = process.cwd();

    await copy(
      templateDirectory,
      context.targetDirectory + "\\" + CUSTOM_REACT_PATH,
      {
        transform: function (read, write) {
          read.pipe(replace(PLACEHOLDER, args.name)).pipe(write);
        },
        clobber: false,
      }
    );

    await next();
  }
}
