import { EMAIL } from "../../util/constants"
import styles from "./footer.module.css"


export function Footer() {
  return <footer className={styles.footer}>
    <h1>© Annette-Softwareentwicklung {new Date().getFullYear()}</h1>
    <p>Mit Leidenschaft und Freude entwickelt. Von Elias Dörr, Jonah Heinisch, Nikos Jeronimo Rohmert, Jonas Erdmann, Rui Bang</p>
    <p>Email: <a href={"mailto:"+EMAIL}>{EMAIL}</a></p>     

  </footer>
}