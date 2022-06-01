import { decorate } from "../../utils/decorate.ts";

/**
 * Checks a property is lower than or equal to a given number.
 */
export function Max(value: number) {
  return decorate({
    validationFunction: (property) => {
      if (typeof property !== "number") {
        return true;
      }

      return property <= value;
    },
    message: `This field should be lower than or equal to ${value}.`,
  });
}
