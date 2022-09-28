import "reflect-metadata";

export function Optional(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    Reflect.defineMetadata("optional", true, target, propertyKey);
  };
}
