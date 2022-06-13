import { decorate } from "../../utils/decorate.ts";
import { isString } from "./is_string.ts";

/**
 * Checks the property is a valid URL.
 */
export function IsURL() {
  return decorate({
    typeChecker: isString,
    validationFunction: (property: string) => {
      try {
        new URL(property);
        return true;
      } catch {
        return false;
      }
    },
    message: `This field should be an URL.`,
  });
}
