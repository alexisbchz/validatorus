import { decorate } from "../../utils/decorate.ts";

/**
 * Checks a property is greater than or equal to a given number.
 */
export function Min(value: number) {
  return decorate({
    validationFunction: (property) => {
      if (typeof property !== "number") {
        return true;
      }

      return property >= value;
    },
    message: `This field should be greater than or equal to ${value}.`,
  });
}
