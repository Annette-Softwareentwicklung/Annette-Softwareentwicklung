
// ! Das importieren von css modules
import styles from "./introduction-section.module.css";
import logo from "./../../assets/images/logo.png";

export function IntroductionSection() {
  return <section className={styles.introductionSection}>
    <article>
      <h2>Wir sind...</h2>
      <p>...eine Arbeitsgemeinschaft am Annette-von-Droste-Hülshoff-Gymnasium</p>
      <div></div>
      <div class="flex">
        <div class="flex-item">
        <p>...und Teil des P</p>
        </div>
        <div class="flex-item">
          <img src="scr/assets/imagescdia_v_1_0_dark2x.png" alt="Community der Informatischen Ag's" />
        </div>
      </div>
    </article>
  </section>
}