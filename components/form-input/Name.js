import { Textarea } from "@nextui-org/react";
import styles from "../../styles/form.module.css";

export default function Name() {
  return (
    <div className={styles["text-area"]}>
      <label className={styles["text-form"]} htmlFor="name">
        Your name
      </label>
      <Textarea id="name" />
    </div>
  );
}
