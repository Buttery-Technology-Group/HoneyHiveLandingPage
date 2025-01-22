import { type FormEvent, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { useForm } from "../../../hooks";
import { Input } from "./Input";
import { Button } from "./Button";
import { Loading } from "../Loading";
import Arrow from "../../../assets/icons/arrow.svg?react";
import styles from "./Form.module.scss";

const Form = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { value: email, onChange, onBlur, error, setError, isValid, validate } = useForm("email");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const isValidEmail = validate();
    if (isValidEmail)
      try {
        setIsLoading(true);
        await addDoc(collection(db, "waitlist"), { email });
        setShowThankYou(true);
      } catch (e) {
        setError("Error adding email to waitlist.");
      } finally {
        setTimeout(() => setIsLoading(false), 2000);
      }
  };

  if (isLoading) return <Loading />;

  if (showThankYou) return <p className={styles.thankYou}>Your email has been added to our waitlist.</p>;

  return (
    <>
      <h1 className={styles.title}>Join Waitlist</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
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
          <Arrow />
        </Button>
      </form>
    </>
  );
};

export default Form;
