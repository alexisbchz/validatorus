# 🦕 Validatorus

A decorator-based property validator for classes.

## Example

```typescript
import { IsNumber, Min, validate } from "https://deno.land/x/validatorus/mod.ts";

class User {
  @IsString()
  @Length(3, 10)
  name!: string;

  @IsNumber()
  @Min(18)
  age!: number;
}

const user = {
    name: 'Jean-Claude Vandamme',
    age: 61
}

const result = validate(user, User)
console.log(result)
/*
  {
    errors: { 
      name: ["This field should contain between 3 and 10 characters"] 
    } 
  }
*/
```

## How to contribute ?

WIP