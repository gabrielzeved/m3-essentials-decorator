declare global {
    interface CommandContext {
        templateDirectory: string;
        targetDirectory: string;
    }
}
export declare function cli(args: string[]): Promise<void>;
