import { Checkbox } from "@nextui-org/react";
import styles from "../../styles/form.module.css";

export default function CheckboxType() {
  return (
    <div>
      <p className={styles["text-form"]}>Type of your product</p>
      <Checkbox.Group defaultValue={["journal"]} color="warning">
        <Checkbox
          color="warning"
          defaultSelected={true}
          className={styles.check}
          value="journal"
        >
          Journal
        </Checkbox>
        <Checkbox defaultSelected={false} value="album">
          Photo Album
        </Checkbox>
      </Checkbox.Group>
    </div>
  );
}
