export declare abstract class Middleware {
    abstract process(context: CommandContext, args: any, next: () => any): Promise<any>;
}
