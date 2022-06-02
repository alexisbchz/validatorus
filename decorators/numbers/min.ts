import { decorate } from "../../utils/decorate.ts";
import { isNumber } from "./is_number.ts";

/**
 * Checks a property is greater than or equal to a given number.
 */
export function Min(value: number) {
  return decorate({
    typeChecker: isNumber,
    validationFunction: (property) => {
      return property >= value;
    },
    message: `This field should be greater than or equal to ${value}.`,
  });
}
