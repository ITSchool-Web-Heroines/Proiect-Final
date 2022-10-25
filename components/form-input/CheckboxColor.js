import styles from "../../styles/form.module.css";

export default function CheckboxColor() {
  return (
    <>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Choose your favourite color</legend>

        <input
          type="radio"
          id="brown"
          name="color"
          value="B"
          className={styles.radio}
        />
        <label htmlFor="brown" className={styles.textLabel}>
          Brown
        </label>
        <div></div>

        <input
          type="radio"
          id="Green"
          name="color"
          value="G"
          className={styles.radio}
        />
        <label htmlFor="green" className={styles.textLabel}>
          Green
        </label>
        <div></div>
        <input
          type="radio"
          id="blue"
          name="color"
          value="B"
          className={styles.radio}
        />
        <label htmlFor="blue" className={styles.textLabel}>
          Blue
        </label>
        <div></div>
        <input
          type="radio"
          id="red"
          name="color"
          value="R"
          className={styles.radio}
        />
        <label htmlFor="red" className={styles.textLabel}>
          Red
        </label>
        <div></div>
        <input
          type="radio"
          id="yellow/beige"
          name="color"
          value="Y"
          className={styles.radio}
        />
        <label htmlFor="yellow/beige" className={styles.textLabel}>
          Yellow/Beige
        </label>
        <div></div>

        <input
          type="radio"
          id="black"
          name="color"
          value="B"
          className={styles.radio}
        />
        <label htmlFor="black" className={styles.textLabel}>
          Black
        </label>
      </fieldset>
    </>
  );
}
