import {
  Control,
  FieldPath,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";

export type ZooControl<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
  rules?: Omit<
    RegisterOptions<T>,
    "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
  >;
};

export interface ZooForm {
  id: string;
  pwd: string;
  name: string;
  email: string;
  phone: string;
  identity: string;
  occupation: string;
  score?: string;
  level?: string;
}

//** https://github.com/kangactor123/react-hook-form-repo/tree/master/src/page */
