
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
import { useEffect, useState } from "react";
import { fetchFromHyGraph } from "../../util";

export function TeamCarousel() {

  const [members, setMembers] = useState([])

  useEffect(() => {

    async function fetchMembers() {
      const result = await fetchFromHyGraph(`
        query {
          mitglieder {
            name
            rolle
            foto {
              url
            }
          }
        }
      `)

      result.json().then((json) => setMembers(json.data.mitglieder));
    }

    fetchMembers()

  }, null)


  return <section className={globalStyles.standardSection} id={DAS_TEAM}>
    <h2 className={globalStyles.greyHeading}>Das Team</h2>
    <div className={cn(styles.carousel, globalStyles.biggerSection)}>
      <section className={styles.grid}>
        {
          members.map((member) => {
            return <Card name={member.name} title={member.rolle} imgUrl={member.foto.url}/>
          })
        }
      </section>
    </div>
  </section>

}