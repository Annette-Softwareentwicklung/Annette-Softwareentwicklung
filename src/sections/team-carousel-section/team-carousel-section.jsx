
import styles from "./team-carousel-section.module.css"
import globalStyles from "./../../globals.module.css";
import { Card } from "../../components";


// Images:
import rui from "./../../assets/images/team/Rui.JPG";
import alex from "./../../assets/images/team/Alex.JPG";
import elias from "./../../assets/images/team/Elias.JPG";
import nikos from "./../../assets/images/team/Nikos.JPG";
import yonas from "./../../assets/images/team/Yonas.JPG";
import cn from "classnames";
import { DAS_TEAM } from "../../util/constants";

export function TeamCarousel() {

  return <section className={globalStyles.standardSection} id={DAS_TEAM}>
    <h2 className={globalStyles.greyHeading}>Das Team</h2>
    <div className={cn(styles.carousel, globalStyles.biggerSection)}>
      <section className={styles.grid}>
        <Card name="Rui Zhang" title="Leiter, Gründer" imgUrl={rui}/>
        <Card name="Alex Hausegger" title="UI, UX" imgUrl={alex}/>
        <Card name="Elias Dörr" title="UI, UX" imgUrl={elias}/>
        <Card name="Nikos Jeronimo Rohmert" title="UI, UX" imgUrl={nikos}/>
        <Card name="Yonas Lalouh" title="UI, UX" imgUrl={yonas}/>
      </section>
    </div>
  </section>

}