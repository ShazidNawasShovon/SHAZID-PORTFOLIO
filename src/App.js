import About from "../src/About/About";
import "./App.css";

import Contact from "../src/Contact/Contact";
import Footer from "../src/Footer/Footer";
import Home from "../src/Home/Home";
import Project from "../src/Projects/Project";
import Service from "../src/Services/Service";

import Header from "./Header/Header";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Home />

        <About />

        <Service />
        <Project />

        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
