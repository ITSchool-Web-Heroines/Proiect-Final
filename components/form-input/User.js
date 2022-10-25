import styles from "../../styles/form.module.css";

export default function User() {
  return (
    <div>
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
            name="firstname"
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
            name="lastname"
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
    </div>
  );
}
