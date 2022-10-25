import styles from "../../styles/form.module.css";

export default function CheckboxDim() {
  return (
    <div>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Choose the journal sizes</legend>

        <input
          type="radio"
          id="small"
          name="dim"
          value="S"
          className={styles.radio}
        />
        <label htmlFor="small" className={styles.textLabel}>
          Small
        </label>
        <div></div>

        <input
          type="radio"
          id="big"
          name="dim"
          value="B"
          className={styles.radio}
        />
        <label htmlFor="big" className={styles.textLabel}>
          Big
        </label>
        <div></div>

        <input
          type="radio"
          id="medium"
          name="dim"
          value="M"
          className={styles.radio}
        />
        <label htmlFor="medium" className={styles.textLabel}>
          Medium
        </label>
      </fieldset>
    </div>
  );
}
