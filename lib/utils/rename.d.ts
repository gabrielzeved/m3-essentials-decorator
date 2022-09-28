declare function renameDir(dir: string, placeholder: string, newValue: string, recursive?: boolean): void;
declare function renameFile(filePath: string, placeholder: string, newValue: string): void;
export { renameDir, renameFile };
