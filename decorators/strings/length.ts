import { decorate } from "../../utils/decorate.ts";
import { isString } from "./is_string.ts";

/**
 * Checks the property's length.
 */
export function Length(min: number, max: number) {
  return decorate({
    typeChecker: isString,
    validationFunction: (property) => {
      if (min > property.length || property.length > max) {
        return false;
      }

      return true;
    },
    message: `This field should contain between ${min} and ${max} characters`,
  });
}
