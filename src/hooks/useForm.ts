import { useState } from "react";

type Field = {
  [key: string]: {
    regex: RegExp;
    message: string;
  };
};

const field: Field = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Please insert a valid email.",
  },
};

const useForm = (type: string) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isValid, setIsValid] = useState(false);

  const validate = (value: string) => {
    if (value.length === 0) {
      setError("Field can not be empty.");
      setIsValid(false);
      return false;
    } else if (field[type] && !field[type].regex.test(value)) {
      setError(field[type].message);
      setIsValid(false);
      return false;
    } else {
      setError(null);
      setIsValid(true);
      return true;
    }
  };

  const onChange = ({ target }: { target: EventTarget }) => {
    if (target instanceof HTMLInputElement) {
      if (error) validate(target.value);
      setValue(target.value);
    }
  };

  return {
    value,
    setValue,
    onChange,
    onBlur: () => validate(value),
    error,
    setError,
    isValid,
    validate: () => validate(value),
  };
};

export default useForm;
