
// ! hier importiert man stylesheets. Und es funktioniert dann einfach.
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Projekt Struktur !! kurz lesen und danach könnt ihr's löschen !!</h1>
      <p>Wie ihr seht ist der Code sehr ähnlich wie HTML</p>
      <p>Hier könnt ihr dann euren HTML Content reinschreiben. In App.css könnt ihr dann das Aussehen ändern.</p>
      <p>Ein wichtiger Unterschied den ihr jetzt wissen solltet ist, dass es "className" statt "class" heißt in React.</p>
      <p>Schreibt in die Console / den Terminal "npm start" und gebt dann in eurem Browser "localhost:3000". Dann erscheint die Webseite mit allen aktuellen Inhalte der Datei</p>

      <a href="https://reactjs.org/docs/components-and-props.html">Falls ihr mehr Infos zu React haben wollt und jetzt direkt "advanced features" lernen wollt: Hier ist die Dokumentationsseite</a>
      <p>Hier werdet ihr sehen, dass diese function "App" also ein "Component" ist</p>
      <p>Den Rest schafft ihr sicherlich auch selbst :)</p>
    </div>
  );
}

export default App;
