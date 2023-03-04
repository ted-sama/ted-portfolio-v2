import "./App.css";
import Homebar from "./components/Homebar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { MainContainer } from "./globalStyles";

function App() {
  return (
    <div className="App">
      <MainContainer>
        <Homebar />
        <Hero />
        <About />
        <Projects />
        <Contact />
      </MainContainer>
    </div>
  );
}

export default App;
