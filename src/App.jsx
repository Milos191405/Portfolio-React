
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import SocialSidebar from "./components/SocialSidebar";
import "./index.css";




function App() {
  return (

    <>
      <Navbar />
      <SocialSidebar />
      <Home />
      <About />
      <Skills />
      <Work/> 
      <Contact/> 
    </>
  );
}

export default App;
