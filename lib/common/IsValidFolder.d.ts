import { CreateSchema } from "../commands/create/schema";
import { Middleware } from "../core/Middleware";
export default class IsValidFolder extends Middleware {
    process(context: CommandContext, args: CreateSchema, next: () => any): Promise<void>;
}
