namespace App {
  export interface ValidationTypes {
    value: string | number;
    typeRef?: string;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }

  export type ListenersType<T> = (items: T[]) => void;
}
