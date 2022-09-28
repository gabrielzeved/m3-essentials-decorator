export function TaskTitle(title: string): ClassDecorator {
  return function (constructor: Function) {
    Reflect.defineMetadata("taskTitle", title, constructor.prototype);
  };
}
