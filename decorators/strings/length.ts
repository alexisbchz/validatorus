import { decorate } from "../../utils/decorate.ts";

/**
 * Checks the property's length.
 */
export function Length(min: number, max: number) {
  return decorate({
    validationFunction: (property) => {
      if (typeof property !== "string") {
        return true;
      }

      if (min > property.length || property.length > max) {
        return false;
      }

      return true;
    },
    message: `This field should contain between ${min} and ${max} characters`,
  });
}
