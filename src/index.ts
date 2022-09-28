import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import CopyTemplate from "./commands/create/CopyTemplate";
import EditVtexFiles from "./commands/create/EditVtexFiles";
import RenamePlaceholders from "./commands/create/RenamePlaceholders";
import { ResolveTemplateDirectory } from "./commands/create/ResolveTemplateDirectory";
import { CreateSchema } from "./commands/create/schema";
import IsValidFolder from "./common/IsValidFolder";
import { CLIApplication } from "./core/CLIApplication";
import { CommandSchema } from "./decorators/CommandSchema";

declare global {
  interface CommandContext {
    templateDirectory: string;
    targetDirectory: string;
  }
}

class M3Essential extends CLIApplication {
  @CommandSchema(CreateSchema)
  private create = [
    IsValidFolder,
    ResolveTemplateDirectory,
    CopyTemplate,
    RenamePlaceholders,
    EditVtexFiles,
  ];

  constructor() {
    super();
    this.commands = {
      create: this.create,
    };
  }
}

export async function cli(args: string[]) {
  clear();
  console.log(chalk.green(figlet.textSync("M3 Essentials")));
  const realArgs = args.slice(2);
  new M3Essential().call(realArgs);
}
