import "reflect-metadata";
export declare type Newable<T> = {
    new (...args: any[]): T;
};
export declare type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];
export declare function CommandSchema(commandSchema: Newable<Object>): PropertyDecorator;
