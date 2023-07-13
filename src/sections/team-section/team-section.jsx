// ! Das importieren von css modules
import styles from "./team-section.module.css";
import globalStyles from "./../../globals.module.css";
import logo from "./../../assets/images/logo.png";
import cdialogo from "./../../assets/images/cdia_v_1_0_dark2x.png";
import cn from "classnames";

import team from "./../../assets/images/team/team.png";
import { useEffect, useState } from "react";
import { fetchFromHyGraph } from "../../util";

export function TeamSection() {

  const [imageUrl, setImageUrl] = useState("")

  useEffect(() => {

    async function fetchGruppenFoto() {

      return (await fetchFromHyGraph(`
        query {
          gruppenFotos {
            foto {
              url
            }
          }
        } 
      `)).json().then((json) => {
        setImageUrl(json.data.gruppenFotos[0].foto.url)
      });

    } 

    fetchGruppenFoto();

  }, null);



  return <section className={cn(styles.teamSection, globalStyles.standardSection)}>
    <article>
      <h2>Wir sind...</h2>
      <img className={cn(globalStyles.biggerSection, styles.teamimage)} src={imageUrl} alt="Foto vom gesamten Team" />
      <img className={styles.logo} src={cdialogo} alt="Community der Informatischen Ag's" />
      <p>...eine Arbeitsgemeinschaft am Annette-von-Droste-Hülshoff-Gymnasium</p>
      <br />
      <p>
        ...und Teil des Projekts "Community der Informatischen AGs", einer Programmier-Gemeinschaft mit AGs am Koblenzer, Schloß und Annette-von-Droste-Hülshoff Gymnasium.
        <br/>
        <br/>
        Mehr Informationen dazu <a href="https://community-der-informatischen-ags.vercel.app/">hier</a>
      </p>
    </article>
  </section>
}