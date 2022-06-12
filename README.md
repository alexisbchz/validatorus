# 🦕 Validatorus

A class-based validator for Deno.

No external dependencies.

## Usage

Create a class, and decorate the properties you want to validate.

```typescript
import {
  IsString,
  IsEmail,
  PartialValidator,
  Length,
  IsOptional,
  IsNumber,
  IsInteger,
  Min,
  validate,
} from "https://deno.land/x/validatorus/mod.ts";

class CreateUserValidator {
  @IsString()
  @IsEmail()
  email!: string;

  @IsNumber()
  @IsInteger()
  @Min(0)
  age!: number;

  @IsString()
  @Length(10, 255)
  password!: string;
}
const createUserPayload: any = {
  email: "john.doe@gmail.com",
  age: -5.2,
};
console.log(
  "createUserPayload",
  validate(createUserPayload, CreateUserValidator)
);
/*
  createUserPayload {
    errors: {
      age: [
        "This field should be greater than or equal to 0.",
        "This field should be an integer."
      ],
      password: [ "This field is required." ]
    }
  }
*/

class UpdateUserValidator extends PartialValidator(CreateUserValidator) {
  @IsOptional()
  @IsString()
  @Length(10, 255)
  confirmationPassword?: string;
}
const updateUserPayload: any = {
  password: "to_b$_4war€_0R_nOT_to_BE",
  confirmationPassword: "t0o$hort",
};
console.log(
  "updateUserPayload",
  validate(updateUserPayload, UpdateUserValidator)
);
/*
  updateUserPayload {
    errors: {
      confirmationPassword: [ "This field should contain between 10 and 255 characters" ]
    }
  }
*/
```

## How to contribute ?

WIP
