import { Middleware } from "../../core/Middleware";
import { CreateSchema } from "./schema";
export declare class ResolveTemplateDirectory extends Middleware {
    process(context: CommandContext, args: CreateSchema, next: () => any): Promise<void>;
}
