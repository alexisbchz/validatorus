type ValidationFunction = (property: any) => boolean;

export type Validator = {
  validationFunction: ValidationFunction;
  message: string;
};
