import React, { useContext } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Work from "./components/work/Work";
import Qualification from "./components/qualification/Qualification";
//import Testimonials from './components/testimonials/Testimonials';
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import { ThemeContext } from "./Theme.js";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        {/* <Testimonials /> */}
        <Contact />
      </main>

      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
