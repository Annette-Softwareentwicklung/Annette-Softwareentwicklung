
// ! Das importieren von css modules
import styles from "./projects-section.module.css";
import globalStyles from "./../../globals.module.css";
import cn from "classnames";
import { PORTFOLIO } from "../../util/constants";


export function ProjectsSection() {
  return <section className={cn(styles.projectsSection, globalStyles.standardSection)} id={PORTFOLIO}>
    <article>
      <h2>Wir arbeiten...</h2>
      <p>...an Software-Projekten - Mobile Applikationen, Webseiten, Webapplikationen und Backend Services - für unsere Schule</p>
    </article>
  </section>
}