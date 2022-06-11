import { decorate } from "../../utils/decorate.ts";
import { isNumber } from "./is_number.ts";

/**
 * Checks a property is positive.
 */
export function IsPositive() {
  return decorate({
    typeChecker: isNumber,
    validationFunction: (property) => {
      return property >= 0;
    },
    message: `This field should be positive.`,
  });
}
