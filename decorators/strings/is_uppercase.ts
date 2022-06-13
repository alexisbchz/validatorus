import { decorate } from "../../utils/decorate.ts";
import { isString } from "./is_string.ts";

/**
 * Checks the property is uppercase.
 */
export function IsUppercase() {
  return decorate({
    typeChecker: isString,
    validationFunction: (property: string) => {
      return property === property.toUpperCase();
    },
    message: `This field should be uppercase.`,
  });
}
