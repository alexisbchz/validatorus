import { decorate } from "../../utils/decorate.ts";
import { isString } from "./is_string.ts";

/**
 * Checks the property is lowercase.
 */
export function IsLowercase() {
  return decorate({
    typeChecker: isString,
    validationFunction: (property: string) => {
      return property === property.toLowerCase();
    },
    message: `This field should be lowercase.`,
  });
}
