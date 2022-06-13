import { decorate } from "../../utils/decorate.ts";
import { isString } from "./is_string.ts";

/**
 * Checks the property contains a given string.
 */
export function Contains(value: string) {
  return decorate({
    typeChecker: isString,
    validationFunction: (property: string) => {
      return property.includes(value);
    },
    message: `This field should contain "${value}".`,
  });
}
