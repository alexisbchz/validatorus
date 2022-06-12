/**
 * Sets a property as optional.
 */
export function IsOptional() {
  return function (target: Object, propertyKey: string | symbol) {
    // Initialize the optional fields array into the target, if not exists.
    if (
      !Object.getOwnPropertyDescriptor(
        Object.getPrototypeOf(target),
        "__optional_fields__"
      )
    ) {
      Object.defineProperty(target, "__optional_fields__", {
        enumerable: false,
        value: [],
      });
    }

    // Push the property keys into the optional fields array.
    const optionalFields = Object.getOwnPropertyDescriptor(
      Object.getPrototypeOf(target),
      "__optional_fields__"
    )?.value as string[];

    optionalFields.push(propertyKey.toString());
  };
}
