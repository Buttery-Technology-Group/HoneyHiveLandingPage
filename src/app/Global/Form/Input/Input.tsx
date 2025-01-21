import type { ComponentProps } from "react";
import "./Input.scss";

type InputProps = ComponentProps<"input"> & {
  error: string | null;
};

const Input = ({ type, name, placeholder, value, onChange, onBlur, error }: InputProps) => (
  <div className="input-wrapper">
    <input
      type={type}
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="input"
    />
    {error && <p className="input-error">{error}</p>}
  </div>
);

export default Input;
