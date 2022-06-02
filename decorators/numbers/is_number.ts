import { decorate } from "../../utils/decorate.ts";

export function isNumber(property: any) {
  return typeof property === "number";
}

/**
 * Checks the property is a number.
 */
export function IsNumber() {
  return decorate({
    validationFunction: isNumber,
    message: "This field should be a number.",
  });
}
