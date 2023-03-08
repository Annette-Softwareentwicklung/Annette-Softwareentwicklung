
// ! Das importieren von css modules
import styles from "./team-section.module.css";
import globalStyles from "./../../globals.module.css";
import logo from "./../../assets/images/logo.png";
import cdialogo from "./../../assets/images/cdia_v_1_0_dark2x.png";
import cn from "classnames";

export function TeamSection() {
  return <section className={cn(styles.teamSection, globalStyles.standardSection)}>
    <article>
      <h2>Wir sind...</h2>
      <p>...eine Arbeitsgemeinschaft am Annette-von-Droste-Hülshoff-Gymnasium</p>
      <div></div>
      <div className={styles.flex}>
        <div>
          <p>
            ...und Teil des Projekts "Community der Informatischen AGs", einer Programmier-Gemeinschaft mit AGs am Koblenzer, Schloß und Annette-von-Droste-Hülshoff Gymnasium.
            <br/>
            <br/>
            Mehr Informationen dazu <a href="https://www.community-inf-ag.de">hier</a>
          </p>
        </div>
        <div className={styles.flexitemlogocdia}>
          <a href="https://www.community-inf-ag.de">
            <img src={cdialogo} alt="Community der Informatischen Ag's" />
          </a>
        </div>
      </div>
    </article>
  </section>
}