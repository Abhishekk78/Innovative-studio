import "./App.css";
import Navbar from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Portfolio" element={<Portfolio />}></Route>
        <Route exact path="/Contact" element={<Contact />}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
