import { decorate } from "../../utils/decorate.ts";
import { isNumber } from "./is_number.ts";

/**
 * Checks a property is negative.
 */
export function IsNegative() {
  return decorate({
    typeChecker: isNumber,
    validationFunction: (property) => {
      return property < 0;
    },
    message: `This field should be negative.`,
  });
}
