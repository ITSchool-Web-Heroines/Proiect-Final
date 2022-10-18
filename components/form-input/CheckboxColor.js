import { Checkbox, Spacer } from "@nextui-org/react";
import styles from "../../styles/form.module.css";

export default function CheckboxColor() {
  return (
    <>
      <p className={styles["text-form"]}>Pick the color</p>
      <Checkbox.Group color="warning" defaultValue={["blue"]}>
        <Checkbox defaultSelected={true} value="blue">
          Blue
        </Checkbox>
        <Spacer />
        <Checkbox defaultSelected={false} value="black">
          Black
        </Checkbox>
        <Spacer />
        <Checkbox defaultSelected={false} value="green">
          Green
        </Checkbox>
        <Spacer />
        <Checkbox defaultSelected={false} value="beige">
          Beige
        </Checkbox>
        <Spacer />
        <Checkbox defaultSelected={false} value="red">
          Red
        </Checkbox>
        <Spacer />
        <Checkbox defaultSelected={false} value="brown">
          Brown
        </Checkbox>
        <Spacer />
        <Checkbox defaultSelected={false} value="colored">
          Colored
        </Checkbox>
      </Checkbox.Group>
    </>
  );
}
