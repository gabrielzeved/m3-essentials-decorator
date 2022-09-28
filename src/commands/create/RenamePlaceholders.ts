import { Middleware } from "../../core/Middleware";
import { TaskTitle } from "../../decorators/TaskTitle";
import { renameDir, renameFile } from "../../utils/rename";
import { CreateSchema, CUSTOM_REACT_PATH, PLACEHOLDER } from "./schema";

@TaskTitle("Renaming template files")
export default class RenamePlaceholders extends Middleware {
  async process(context: CommandContext, args: CreateSchema, next: () => any) {
    renameFile(
      context.targetDirectory + "\\" + CUSTOM_REACT_PATH + PLACEHOLDER + ".tsx",
      PLACEHOLDER,
      args.name
    );

    renameDir(
      context.targetDirectory +
        "\\" +
        CUSTOM_REACT_PATH +
        "components\\" +
        PLACEHOLDER,
      PLACEHOLDER,
      args.name
    );

    await next();
  }
}
