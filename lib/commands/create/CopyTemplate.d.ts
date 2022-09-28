import { Middleware } from "../../core/Middleware";
import { CreateSchema } from "./schema";
export default class CopyTemplate extends Middleware {
    process(context: CommandContext, args: CreateSchema, next: () => any): Promise<void>;
}
