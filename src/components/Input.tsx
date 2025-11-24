import {
  type FieldValues,
  type Path,
  type UseFormRegister,
} from "react-hook-form";

interface InputFieldProps<T extends FieldValues> {
  label: Path<T>;
  register?: UseFormRegister<T>;
  required?: boolean;
}

const InputField = <T extends FieldValues>({
  label,
  register,
  required,
}: Readonly<InputFieldProps<T>>) => {
  return (
    <span>
      {register ? (
        <input
          className="form-control"
          placeholder={label}
          {...register(label, { required })}
        ></input>
      ) : (
        <input className="form-control" placeholder={label} name={label} />
      )}
    </span>
  );
};

export default InputField;
