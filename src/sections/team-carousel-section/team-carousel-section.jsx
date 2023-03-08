
import styles from "./team-carousel-section.module.css"
import globalStyles from "./../../globals.module.css";

export function TeamCarousel() {

  return <section className={globalStyles.standardSection}>
    <h2 className={globalStyles.greyHeading}>Das Team</h2>
    <section className={styles.carousel}>
    </section>
  </section>

}