import { ValidationTypes } from "../interfaces/validationTypes.interfaces";

export function validateInput(dataOnValidation: ValidationTypes): boolean {
  const { value, typeRef, required, minLength, maxLength, min, max } =
    dataOnValidation;
  let isValid: boolean = true;
  if (required) {
    isValid = isValid && value.toString().trim().length !== 0;
  }

  if (typeRef) {
    isValid = isValid && typeof value === typeRef;
  }

  if (minLength != null && typeof value !== "string") {
    isValid = isValid && value.toString().length >= minLength;
  }

  if (maxLength != null && typeof value !== "string") {
    isValid = isValid && value.toString().length <= maxLength;
  }

  if (min != null && typeof value === "number") {
    isValid = isValid && value >= min;
  }

  if (max != null && typeof value === "number") {
    isValid = isValid && value <= max;
  }

  return isValid;
}
