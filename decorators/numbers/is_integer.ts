import { decorate } from "../../utils/decorate.ts";
import { isNumber } from "./is_number.ts";

/**
 * Checks a property is an integer.
 */
export function IsInteger() {
  return decorate({
    typeChecker: isNumber,
    validationFunction: (property) => {
      return Number.isInteger(property);
    },
    message: `This field should be an integer.`,
  });
}
