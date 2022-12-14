// ! Das importieren von css modules
//import styles from "./index.module.css";
import { Footer, Header } from "../../components"; 
import { LandingSection, TeamSection } from "../../sections";
import styles from "./home.module.css";

export function Home() {
  return <>
      <Header />
      <main>
          <LandingSection />
          <TeamSection />
      </main>
      <Footer />
  </>
}