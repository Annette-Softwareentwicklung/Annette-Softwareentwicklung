import { Footer, Header } from "./components"; 
import { LandingSection } from "./sections";
import {Card} from "./components/CardComponent";
import logo from "./assets/images/logo.png";
// durch die index.js dateien, die das Exportieren der Inhalte zusammenbündelt, damit man dann alle components von "./components" importieren kann


function App() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
          <Card name={"Rui Zhang"} title={"Leiter"} imgUrl={logo}/>
      </main>
      <Footer />
    </>
  );
}

export default App;