// ! Das importieren von css modules
//import styles from "./index.module.css";
import { Footer, Header } from "../../components"; 
import { LandingSection, TeamSection, ProjectsSection, AblaufSection, TeamCarousel } from "../../sections";
import styles from "./home.module.css";

export function Home() {
  return <>
      <Header />
      <main className={styles.main}>
          <LandingSection />
          <TeamSection />
          <TeamCarousel />
          <ProjectsSection />
          <AblaufSection />
      </main>
      <Footer />
  </>
}