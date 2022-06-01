/**
 * Sets a property as optional.
 */
export function IsOptional(): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    // Put the optional fields array into the target, if not exists.
    if (!Object.getOwnPropertyDescriptor(target, "__optional_fields__")) {
      Object.defineProperty(target, "__optional_fields__", {
        enumerable: false,
        value: [],
      });
    }

    // Push the field into the optional fields array.
    const optionalFields =
      Object.getOwnPropertyDescriptor(target, "__optional_fields__")!.value;

    optionalFields.push(propertyKey);
  };
}
