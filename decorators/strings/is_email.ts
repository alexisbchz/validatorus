import { decorate } from "../../utils/decorate.ts";

/**
 * Checks the property is a valid email address.
 */
export function IsEmail() {
  return decorate({
    validationFunction: (property) => {
      if (typeof property !== "string") {
        return true;
      }

      const regex = new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );

      return regex.test(property);
    },
    message: "This field should be a valid email address.",
  });
}
