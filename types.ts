type ValidationFunction = (property: any) => boolean;

export type Validator = {
  typeChecker?: ValidationFunction;
  validationFunction: ValidationFunction;
  message: string;
};
