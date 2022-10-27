import css from "../styles/Location.module.css";
import Image from 'next/image'

const Location = () => {
  return (
    <div className={css.container}>
      <div className={css.item}>
        <Image src="/img/L1.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={css.item}>
        <div className={css.card}>
          <h2 className={css.motto}>
          Apple Inc. is an American multinational technology company specializing in consumer electronics, software and online services headquartered in Cupertino, California, United States.
          </h2>
        </div>
        <div className={css.card}>
          <h1 className={css.title}>OUR STORES</h1>
          <p className={css.text}>
            1234 R. Don Road
            <br /> United Kingdom, NK7 UK2
            <br /> +44 (875) 867 1010
          </p>
          <p className={css.text}>
            5678 K. Laquie Rd
            <br /> NewYork, 85022
            <br /> +1 (602) 867 1011
          </p>
          <p className={css.text}>
            6738 Main Street
            <br /> France, 23 384
            <br /> +35 (905) 867 1012
          </p>
          <p className={css.text}>
            8526 Saint John
            <br /> Spain, 53X U2
            <br /> + 42 (102) 867 1013
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