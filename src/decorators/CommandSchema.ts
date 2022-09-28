import "reflect-metadata";

export type Newable<T> = { new (...args: any[]): T };
export type PropType<TObj, TProp extends keyof TObj> = TObj[TProp];

export function CommandSchema(
  commandSchema: Newable<Object>
): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata("commandSchema", commandSchema, target, propertyKey);
  };
}
