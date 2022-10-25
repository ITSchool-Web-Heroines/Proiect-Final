import styles from "./Skills.module.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHtml5, faCss3, faJs, faSass, faReact, faBootstrap } from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  return (
    <div>
      <div className={styles.skill}>
        <div className={styles.skillbox}>
          <FontAwesomeIcon className={styles.brand} icon={faHtml5} />
          <span>HTML5</span>
        </div>

        <div className={styles.skillbox}>
          <FontAwesomeIcon className={styles.brand} icon={faCss3} />
          <span>CSS3</span>
        </div >

        <div className={styles.skillbox}>
          <FontAwesomeIcon className={styles.brand} icon={faJs} />
          <span>JavaScript</span>
        </div>

        <div className={styles.skillbox}>
          <FontAwesomeIcon className={styles.brand} icon={faSass} />
          <span>GIT</span>
        </div>

        <div className={styles.skillbox}>
          <FontAwesomeIcon className={styles.brand} icon={faReact} />
          <span>React</span>
        </div>

        <div className={styles.skillbox}>
          <FontAwesomeIcon className={styles.brand} icon={faSass} />
          <span>Sass</span>
        </div>

        <div className={styles.skillbox}>
          <FontAwesomeIcon className={styles.brand} icon={faBootstrap} />
          <span>Bootstrap</span>
        </div>

      </div>
    </div>
  )
}


 export default Skills;


