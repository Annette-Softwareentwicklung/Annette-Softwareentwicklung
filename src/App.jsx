import { Footer, Header } from "./components"; 
import { LandingSection, TeamSection } from "./sections";
// durch die index.js dateien, die das Exportieren der Inhalte zusammenbündelt, damit man dann alle components von "./components" importieren kann
import "./globals.css"

function App() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
