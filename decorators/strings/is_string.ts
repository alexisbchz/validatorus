import { decorate } from "../../utils/decorate.ts";

/**
 * Checks the property is a string.
 */
export function IsString() {
  return decorate({
    validationFunction: (property) => typeof property === "string",
    message: "This field should be a string.",
  });
}
