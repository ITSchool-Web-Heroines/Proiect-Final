import React from "react";
import { Input, useInput, Grid } from "@nextui-org/react";
import styles from "../../styles/form.module.css";

export default function Email() {
  const { value, reset, bindings } = useInput("");

  const validateEmail = (value) => {
    return value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);
  };

  const helper = React.useMemo(() => {
    if (!value)
      return {
        text: "",
        color: "",
      };
    const isValid = validateEmail(value);
    return {
      text: isValid ? "Correct email" : "Enter a valid email",
      color: isValid ? "success" : "error",
    };
  }, [value]);
  return (
    <Grid>
      <p className={styles["text-form"]}>Your email</p>
      <Input
        {...bindings}
        clearable
        shadow={false}
        onClearClick={reset}
        status={helper.color}
        color={helper.color}
        helperColor={helper.color}
        helperText={helper.text}
        type="email"
      />
    </Grid>
  );
}
