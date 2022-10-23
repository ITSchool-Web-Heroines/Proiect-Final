import Image from "next/image";
import css from "../styles/Location.module.css";

const Location = () => {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <div className={css.card}>
          <h2 className={css.motto}>
            TEXT TEXT TEXT
          </h2>
        </div>
        <div className={css.card}>
          <h1 className={css.title}>FIND OUR LOCATIONS</h1>
          <p className={css.text}>
            1654 R. Don Road #304.
            <br /> NewYork, 85022
            <br /> (602) 867-1010
          </p>
          <p className={css.text}>
            2356 K. Laquie Rd #235.
            <br /> NewYork, 85022
            <br /> (602) 867-1011
          </p>
          <p className={css.text}>
            1614 E. Erwin St #104.
            <br /> NewYork, 85022
            <br /> (602) 867-1012
          </p>
          <p className={css.text}>
            1614 W. Caroll St #125.
            <br /> NewYork, 85022
            <br /> (602) 867-1013
          </p>
        </div>
        <div className={css.card}>
          <h1 className={css.title}>WORKING HOURS</h1>
          <p className={css.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 19:00
          </p>
          <p className={css.text}>
            SATURDAY - SUNDAY
            <br /> CLOSED
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;