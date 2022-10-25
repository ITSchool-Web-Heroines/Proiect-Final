import { Input, Grid } from "@nextui-org/react";
import styles from "../../styles/form.module.css";

export default function PhoneNo() {
  return (
    <Grid>
      <p className={styles["text-form"]}>Your phone number</p>
      <Input type="number" name="number" />
    </Grid>
  );
}
