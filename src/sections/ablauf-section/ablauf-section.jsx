
// ! Das importieren von css modules
import styles from "./ablauf-section.module.css";
import globalStyles from "./../../globals.module.css";

import cn from "classnames";

export function AblaufSection() {
  return <section className={cn(styles.ablaufSection, globalStyles.standardSection)}>
    <article>
      <h2 className={globalStyles.greyHeading}>Terminplan</h2>
      <p>
        <br />
        In der “Annette-Softwareentwicklung” treffen wir uns regelmäßig jeden Mittwoch (16-17 Uhr) per Discord online und besprechen unsere Fortschritte.
        <br />
        <br />
        Wir setzen uns gemeinsam hin und programmieren weiter an andauernde Projekte.
        <br />
        <br />
        Am Wochenende gibt es freiwillige “Programming-Sessions”, bei denen wir weiter an die Projekte arbeiten oder uns fortbilden in der Informatik.
        <br />
        <br />
        Manchmal setzen wir uns auch zusammen und spielen ein paar Videospiele. Die nennen wir “ProGaming-Sessions”
      </p>
      <div></div>
    </article>
  </section>
}