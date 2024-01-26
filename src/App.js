
import About2 from "./components/about";
import Contact from "./components/contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar"; 
import Skills2 from "./components/skills";
import { Carousel } from "./components/Carousel";

function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <About2/>
      <Skills2 />
      <Carousel />
      <Contact />
    </div>
  );
}
export default App;