import type { Validator } from "../types.ts";

export function PartialValidator<T extends new (...args: any[]) => any>(
  decoratedClass: T,
) {
  // Get property keys from the decorated class.
  const validators = Object.getOwnPropertyDescriptor(
    decoratedClass.prototype,
    "__validators__",
  )?.value as Record<string, Validator[]>;

  const propertyKeys = Object.keys(validators);

  // Initialize the optional fields array into the target, if not exists.
  if (!Object.getOwnPropertyDescriptor(decoratedClass, "__optional_fields__")) {
    Object.defineProperty(decoratedClass, "__optional_fields__", {
      enumerable: false,
      value: [],
    });
  }

  // Push the property keys into the optional fields array.
  const optionalFields = (Object.getOwnPropertyDescriptor(
    decoratedClass,
    "__optional_fields__",
  )?.value || []) as string[];

  optionalFields.push(...propertyKeys);

  // Build the partial validator.
  const newClass = class extends decoratedClass {};

  Object.defineProperty(newClass.prototype, "__validators__", {
    enumerable: false,
    value: validators,
    configurable: false,
    writable: false,
  });

  Object.defineProperty(newClass.prototype, "__optional_fields__", {
    enumerable: false,
    value: optionalFields,
  });

  return newClass;
}
