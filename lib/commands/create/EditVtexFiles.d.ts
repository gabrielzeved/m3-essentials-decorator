import { Middleware } from "../../core/Middleware";
import { CreateSchema } from "./schema";
export default class EditVtexFiles extends Middleware {
    process(__: CommandContext, args: CreateSchema, next: () => any): Promise<void>;
}
