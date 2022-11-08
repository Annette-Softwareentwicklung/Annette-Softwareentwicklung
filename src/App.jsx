import { Footer, Header } from "./components"; 
import { LandingSection } from "./sections";
// durch die index.js dateien, die das Exportieren der Inhalte zusammenbündelt, damit man dann alle components von "./components" importieren kann


function App() {
  return (
    <>
      <Header />
      <main>
        <LandingSection />
      </main>
      <Footer />
    </>
  );
}

function Header() {
  return (
    <table>
		<tr>
			<td><p>Annette Softwareentwicklung</p></td>
			<td><p>Unser Team</p></td>
			<td><p>Unsere Projekte</p></td>
			<td><p>Kontakt</p></td>
		</tr>
		
		<tr>
			<td><h1>Entwickeln für moderne Zukunft</h1></td>
			<td><img src=""></img></td>
		</tr>
	</table>
	<hr>
  );
}

export default App;
