import { Middleware } from "../../core/Middleware";
import { TaskTitle } from "../../decorators/TaskTitle";
import path from "path";
import { CreateSchema } from "./schema";
import { fileURLToPath } from "url";

@TaskTitle("Resolving template folder")
export class ResolveTemplateDirectory extends Middleware {
  async process(context: CommandContext, args: CreateSchema, next: () => any) {
    const templateUrl = path.resolve(
      //@ts-expect-error
      fileURLToPath(import.meta.url),
      "../../../templates",
      args.template.toLowerCase()
    );

    context.templateDirectory = templateUrl;

    await next();
  }
}
