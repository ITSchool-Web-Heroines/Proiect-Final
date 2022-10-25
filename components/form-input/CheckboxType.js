import styles from "../../styles/form.module.css";

export default function CheckboxType() {
  return (
    <div>
      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>
          Choose the type of the product
        </legend>
        <input type="radio" id="journal" name="type" className={styles.radio} />
        <label htmlFor="journal" className={styles.textLabel}>
          Journal
        </label>
        <div></div>
        <input type="radio" id="album" name="type" className={styles.radio} />
        <label htmlFor="album" className={styles.textLabel}>
          Photo Album
        </label>
      </fieldset>
    </div>
  );
}
