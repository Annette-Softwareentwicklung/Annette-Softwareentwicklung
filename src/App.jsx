import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home, NotFound } from "./pages";
// durch die index.js dateien, die das Exportieren der Inhalte zusammenbündelt, damit man dann alle components von "./components" importieren kann
import "./globals.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />  
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
