import { Textarea } from "@nextui-org/react";
import styles from "../../styles/form.module.css";

export default function TextareaF() {
  return (
    <div className={styles["text-area"]}>
      <label className={styles["text-form"]} htmlFor="textarea">
        What to be written on your journal
      </label>
      <Textarea id="textarea" />
    </div>
  );
}
