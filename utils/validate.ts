import { Validator } from "../types.ts";

/**
 * Validates an object against a decorated class.
 * @param objectToValidate The object to validate against the decorated class.
 * @param decoratedClass The decorated class used to validate the object.
 * @returns If valid, the object converted to the decorated class ; if not, the errors encountered.
 */
export function validate<T extends abstract new (...args: any[]) => any>(
  objectToValidate: InstanceType<T>,
  decoratedClass: T,
) {
  // Get validators from the decorated class.
  const validators = Object.getOwnPropertyDescriptor(
    decoratedClass.prototype,
    "__validators__",
  )!.value as Record<string, Validator[]>;

  // Check errors.
  let isValid = true;
  const errors: Record<string, string[]> = {};

  for (const key in validators) {
    // Handle the case of a missing key in the object to validate.
    if (!objectToValidate[key]) {
      if (isPropertyOptional(decoratedClass.prototype, key)) {
        // Return the validated object if the object is valid.
        const result = plainToClass(objectToValidate, decoratedClass);

        return { result };
      } else {
        if (errors[key]) {
          errors[key].push("This field is required.");
        } else {
          errors[key] = ["This field is required."];
        }

        isValid = false;
      }

      continue;
    }

    for (const validator of validators[key]) {
      const { validationFunction, message } = validator;

      if (!validationFunction(objectToValidate[key])) {
        if (errors[key]) {
          errors[key].push(message);
        } else {
          errors[key] = [message];
        }

        isValid = false;
      }
    }
  }

  // Return errors if the object is not valid.
  if (!isValid) {
    return { errors };
  }

  // Return the validated object if the object is valid.
  const result = plainToClass(objectToValidate, decoratedClass);

  return { result };
}

/**
 * Instantiate a plain object as a specific class.
 * @param plainObject The object to instantiate.
 * @param target The target class used to instantiate the object.
 * @returns The instantiated object.
 */
export const plainToClass = <
  T extends abstract new (...args: unknown[]) => unknown,
>(
  plainObject: InstanceType<T>,
  target: T,
): InstanceType<T> => {
  return Object.assign(
    Reflect.construct(target, []),
    plainObject,
  ) as InstanceType<T>;
};

/**
 * Checks if a given property is set to optional.
 * @param target The decorated class.
 * @param propertyKey The property to set as optional.
 * @returns a boolean
 */
function isPropertyOptional(
  target: Object,
  propertyKey: string | symbol,
): boolean {
  const optionalFields = (Object.getOwnPropertyDescriptor(
    target,
    "__optional_fields__",
  )?.value || []) as string[];

  return !!optionalFields.find((field) => field === propertyKey);
}
