import { decorate } from "../../utils/decorate.ts";

/**
 * Checks the property is a number.
 */
export function IsNumber() {
  return decorate({
    validationFunction: (property) => typeof property === "number",
    message: "This field should be a number.",
  });
}
