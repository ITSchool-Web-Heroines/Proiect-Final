import React from "react";
import styles from "../styles/form.module.css";

export default function formular() {
  const style = {
    fontFamily: "Playfair Display",
  };
  return (
    <div>
      <form
        method="post"
        className={styles["form-container"]}
        name="order v1"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="order v1" />
        <div hidden>
          <input name="bot-field" />
        </div>

        <fieldset className={styles.fieldsetA}>
          <legend className={styles.legend}>About you</legend>
          <div>
            <label htmlFor="firstname" className={styles.textLabel}>
              First Name:{" "}
            </label>
            <input
              type="text"
              id="firstname"
              className={styles["text-input"]}
              name="first-name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastname" className={styles.textLabel}>
              Last Name:{" "}
            </label>
            <input
              type="text"
              id="lastname"
              name="last-name"
              className={styles["text-input"]}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={styles.textLabel}>
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={styles["text-input"]}
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className={styles.textLabel}>
              Phone:{" "}
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className={styles["text-input"]}
              required
            />
          </div>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>
            Choose the type of the product
          </legend>
          <input
            type="radio"
            id="journal"
            name="type"
            className={styles.radio}
          />
          <label htmlFor="journal" className={styles.textLabel}>
            Journal
          </label>
          <div></div>
          <input type="radio" id="album" name="type" className={styles.radio} />
          <label htmlFor="album" className={styles.textLabel}>
            Photo Album
          </label>
        </fieldset>
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
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
