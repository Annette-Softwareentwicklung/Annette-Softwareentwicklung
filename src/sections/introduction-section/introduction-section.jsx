
// ! Das importieren von css modules
import styles from "./introduction-section.module.css";
import logo from "./../../assets/images/logo.png";
import logocdia from "./../../assets/images/cdia_v_1_0_dark2x.png";

export function IntroductionSection() {
  return <section className={styles.introductionSection}>
    <article>
      <h2>Wir sind...</h2>
      <p>...eine Arbeitsgemeinschaft am Annette-von-Droste-Hülshoff-Gymnasium</p>
      <div></div>
      <div className="flex">
        <div className="flex-item">
        <p>...und Teil des Projekts "Community der Informatischen AGs", einer Programmier-Gemeinschaft mit AGs am Koblenzer, Schloß und Annette-von-Droste-Hülshoff Gymnasium.</p>
        </div>
        <div className="flex-item">
          <img src={logocdia} alt="Community der Informatischen Ag's" />
        </div>
      </div>
    </article>
  </section>
}