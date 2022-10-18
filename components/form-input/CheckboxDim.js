import { Checkbox } from "@nextui-org/react";
import styles from "../../styles/form.module.css";

export default function CheckboxDim() {
  return (
    <div>
      <p className={styles["text-form"]}>Select dimensions</p>
      <Checkbox.Group color="warning" defaultValue={["small"]}>
        <Checkbox value="small">Small</Checkbox>
        <Checkbox value="big">Big</Checkbox>
      </Checkbox.Group>
    </div>
  );
}
