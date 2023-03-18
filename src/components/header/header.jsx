import { useRef } from "react"
import { useEffect } from "react"
import { DAS_TEAM, PORTFOLIO, TERMIN_PLAN } from "../../util/constants"
import styles from "./header.module.css"

export function Header() {

  const headerRef = useRef(null)

  const scrollEvent = () => {
    if (window.scrollY != 0) {
      headerRef.current.style.backgroundColor = "whitesmoke"
    } else {
      headerRef.current.style.backgroundColor = "white";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent)

    return () => {
      window.removeEventListener("scroll", scrollEvent)
    }
  }, [null])

  return <header className={styles.header} ref={headerRef}>
    <b>Annette-Softwareentwicklung</b>
    <ul>
      <li><a href={`#${DAS_TEAM}`}>Das Team</a></li>
      <li><a href={`#${PORTFOLIO}`}>Portfolio</a></li>
      <li><a href={`#${TERMIN_PLAN}`}>Terminplan</a></li>
    </ul>
  </header>
}