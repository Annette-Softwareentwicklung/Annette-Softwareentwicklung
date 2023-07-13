import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import cn from "classnames"
import { useEffect, useState } from "react"
import { ProjectCard } from "../../components"
import globalStyles from "./../../globals.module.css"

import styles from "./projects-carousel.module.css"

import annetteApp from "./../../assets/images/projects/annette_app.svg"
import onlineFormular from "./../../assets/images/projects/online_formular.png"
import website from "./../../assets/images/projects/website.png"
import adventskalender from "./../../assets/images/projects/adventskalender.png"
import onlinebibliothek from "./../../assets/images/projects/onlinebibliothek.png"
import svseite from "./../../assets/images/projects/svseite.png"
import { fetchFromHyGraph } from "../../util"

export const ProjectsCarousel = () => {

  const [selectedIndex, setSelectedIndex] = useState(2)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  // Abspeichern dieser Daten in Javascript, da diese Zahlen für die Berechnung der Position essentiell sind
  const initialCardWidth = 300;
  const initialCardIncrease = 150;
  const initialCardGap = 50;
  const [cardWidth, setCardWidth] = useState(initialCardWidth)
  const [cardWidthIncrease, setCardWidthIncrease] = useState(initialCardIncrease) // um so viel wird die Karte größer wenn sie ausgewählt wird
  const [cardGap, setCardGap] = useState(initialCardGap)
  const [projectData, setProjectData] = useState([])
  // me when Mathe-LK
  const offsetLeft = windowWidth / 2 - (selectedIndex * (cardWidth + cardGap) + (cardWidth + cardWidthIncrease) / 2)

  const setWindowEvent = () => { 
    if (window.innerWidth < 680) {
      setCardWidth(250)
      setCardWidthIncrease(0)
    } else {
      setCardWidth(initialCardWidth)
      setCardWidthIncrease(initialCardIncrease)
    }

    setWindowWidth(window.innerWidth) 
  }


  useEffect(() => {
    
    async function getProjects() {

      const projects = await fetchFromHyGraph(`
        query {
          projekts {
            titel
            beschreibung
            height
            position
            foto {
              url
            }
          }
        }
      `) 

      projects.json().then((json) => {
        setProjectData(json.data.projekts)
      })


    }

    getProjects()

    window.addEventListener("resize", setWindowEvent)
  


    return () => {
      window.removeEventListener("resize", setWindowEvent)
    }
  }, [null])



  const allProjects = projectData.map((entry, index) => {
    return <ProjectCard 
      key={index} 
      onClick={() => setSelectedIndex(index)}
      position={entry.position}
      pHeight={entry.height}
      title={entry.titel}
      description={entry.beschreibung} 
      imageUrl={entry.foto.url}
      selected={selectedIndex == index}
      width={cardWidth}
      widthIncrease={cardWidthIncrease}
    />
  })




  return <section className={globalStyles.standardSection}>
    <section className={globalStyles.biggerSection}>

      <h2 className={cn(globalStyles.greyHeading, styles.heading)}>Portfolio</h2>
      <p className={styles.hinweis}>- anclicken -</p>

      <div 
        className={styles.carousel}
        style={{
          gap: `${cardGap}px`,
          left: offsetLeft
        }}
      >
        {allProjects}
      </div>
      <div className={styles.carouselController}>
        <CaretLeft 
          size={50} 
          weight="thin" 
          className={styles.caretLeft} 
          onClick={() => setSelectedIndex(Math.max(selectedIndex-1, 0))}
        />
        {
          allProjects.map((_, index) => <div
            key={index}
            style={{
              backgroundColor: selectedIndex == index ? "black" : "lightgrey"
            }}
            className={styles.dot} 
            onClick={() => setSelectedIndex(index)} 
          />)
        }
        <CaretRight 
          size={50} 
          weight="thin" 
          className={styles.caretRight} 
          onClick={() => setSelectedIndex(Math.min(selectedIndex+1, projectData.length - 1))}
        />
      </div>

    </section>
  </section>
}