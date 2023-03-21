import { EMAIL } from "../../util/constants"
import styles from "./footer.module.css"
import { CaretUp } from "@phosphor-icons/react"

export function Footer() {
  return <footer className={styles.footer}>
    <button title="Zurück nach oben" onClick={scrollToTop}><CaretUp size={50} color="#3a3636" weight="thin" /></button>
    <h1>© Annette-Softwareentwicklung {new Date().getFullYear()}</h1>
    <p>Mit Leidenschaft und Freude entwickelt. Von Elias Dörr, Jonah Heinisch, Nikos Jeronimo Rohmert, Jonas Erdmann, Rui Bang</p>
    <p>Email: <a href={"mailto:"+EMAIL}>{EMAIL}</a></p>     

  </footer>
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth'});
}