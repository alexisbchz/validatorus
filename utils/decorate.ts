import { Validator } from "../types.ts";

/**
 * Creates a property decorator registering a validator.
 * @param validator The validator object to register for the given property.
 * @returns A property decorator
 */
export function decorate(validator: Validator): PropertyDecorator {
  return function (target: Object, propertyKey: string | symbol) {
    // Put the validators object into the target, if not exists.
    if (!Object.getOwnPropertyDescriptor(target, "__validators__")) {
      Object.defineProperty(target, "__validators__", {
        enumerable: false,
        value: {},
      });
    }

    // Push the validator into the validators object.
    const propertyDescriptor =
      Object.getOwnPropertyDescriptor(target, "__validators__")!.value;

    const validators = propertyDescriptor[propertyKey];

    if (validators) {
      validators.push(validator);
    } else {
      propertyDescriptor[propertyKey] = [validator];
    }
  };
}
