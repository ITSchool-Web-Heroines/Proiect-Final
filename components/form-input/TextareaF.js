import styles from "../../styles/form.module.css";

export default function TextareaF() {
  const style = {
    fontFamily: "Playfair Display",
  };
  return (
    <div>
      <fieldset className={styles.fieldsetA}>
        <legend className={styles.legend}>
          What to be written on your journal
        </legend>
        <div>
          <label htmlFor="text" style={style}>
            Write your text here{" "}
          </label>
          <div></div>
          <input
            type="textarea"
            id="text"
            className={styles["text-box"]}
            minLength="2"
            maxLength="20"
            name="textarea"
          />
        </div>
      </fieldset>
    </div>
  );
}
