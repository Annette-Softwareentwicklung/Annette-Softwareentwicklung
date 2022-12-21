
// ! Das importieren von css modules
import styles from "./projects-section.module.css";

export function ProjectsSection() {
  return <section className={styles.projectsSection}>
    <article>
      <h2>Wir arbeiten...</h2>
      <p>...an Software-Projekten - Mobile Applikationen, Webseiten, Webapplikationen und Backend Services - für unsere Schule</p>
      <div></div>
    </article>
  </section>
}