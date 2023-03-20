import { CaretLeft, CaretRight, Dot } from "@phosphor-icons/react"
import cn from "classnames"
import { useEffect, useState } from "react"
import { ProjectCard } from "../../components"
import globalStyles from "./../../globals.module.css"

import styles from "./projects-carousel.module.css"

export const ProjectsCarousel = () => {

  const [selectedIndex, setSelectedIndex] = useState(2)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const setWindowEvent = () => setWindowWidth(window.innerWidth)


  useEffect(() => {
    window.addEventListener("resize", setWindowEvent)
  
    return () => {
      window.removeEventListener("resize", setWindowEvent)
    }
  }, [null])
  

  // hier bitte alle Projekte als React Components reintun.

  const allProjectsData = [
    {
      position: "top",
      height: 0.85,
      title: "Antragsformular Förderverein",
      description: "Eine digitales Formular für den Förderverein. Papier sparen!",
      imageUrl: ""
    },
    {
      position: "bottom",
      height: 0.8,
      title: "Webseite der SV",
      description: "Eine Webseite für die Schüler*innenvertretung am Annette-Gymnasium.",
      imageUrl: ""
    },
    {
      position: "top",
      height: 1,
      title: "Annette-App",
      description: "Die Offizielle Applikation der Schule für Schülerinnen und Schüler",
      imageUrl: ""
    },
    {
      position: "top",
      height: 0.8,
      title: "Online Lehrerbibliothek",
      description: "Eine digitale Sammlung von Büchern am Annette für Lehrerinnen und Lehrer",
      imageUrl: ""
    },
    {
      position: "bottom",
      height: 0.9,
      title: "Unsere Webseite",
      description: "Diese Webseite hier. Wir haben zu wenige Projekte also tun wir das rein hehe",
      imageUrl: ""
    },
    {
      position: "top",
      height: 0.8,
      title: "Adventskalender am Annette-Gymnasium",
      description: "Ein lustiges kleines Video, um Interesse für die Informatik zu erwecken",
      imageUrl: ""
    },
  ]

  // Abspeichern dieser Daten in Javascript, da diese Zahlen für die Berechnung der Position essentiell sind
  const cardWidth = 300;
  const cardWidthIncrease = 150; // um so viel wird die Karte größer wenn sie ausgewählt wird
  const cardGap = 50;
  // me when Mathe-LK
  const offsetLeft = windowWidth / 2 - (selectedIndex * (cardWidth + cardGap) + (cardWidth + cardWidthIncrease) / 2)


  const allProjects = allProjectsData.map((entry, index) => {
    return <ProjectCard 
      key={index} 
      position={entry.position}
      pHeight={entry.height}
      title={entry.title}
      description={entry.description} 
      imageUrl={entry.imageUrl}
      selected={selectedIndex == index}
      width={cardWidth}
      widthIncrease={cardWidthIncrease}
    />
  })




  return <section className={globalStyles.standardSection}>
    <section className={globalStyles.biggerSection}>

      <h2 className={globalStyles.greyHeading}>Portfolio</h2>

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
          onClick={() => setSelectedIndex(Math.min(selectedIndex+1, allProjectsData.length - 1))}
        />
      </div>

    </section>
  </section>
}