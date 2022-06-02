import { decorate } from "../../utils/decorate.ts";

export function isString(property: any) {
  return typeof property === "string";
}

/**
 * Checks the property is a string.
 */
export function IsString() {
  return decorate({
    validationFunction: isString,
    message: "This field should be a string.",
  });
}
