import { type FormEvent, useState } from "react";
import { Input } from "./Input";
import { Button } from "./Button";
import useForm from "../../../hooks/useForm";
import { Loading } from "../Loading";
import ArrowRight from "../../../assets/icons/arrow-right.svg?react";
import "./Form.scss";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { value: email, onChange, onBlur, error, setError, isValid, validate } = useForm("email");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidEmail = validate();
    if (isValidEmail)
      try {
        setIsLoading(true);
      } catch (e) {
        setError("Error adding email to waitlist.");
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
  };

  if (isLoading) return <Loading />;

  return (
    <form className="form" onSubmit={handleSubmit}>
      <Input
        type="email"
        name="email"
        placeholder="Email address"
        value={email}
        onChange={onChange}
        onBlur={onBlur}
        error={error}
      />
      <Button type="submit" disabled={!isValid}>
        <ArrowRight />
      </Button>
    </form>
  );
};

export default Form;
