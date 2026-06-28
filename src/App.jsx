import { useState } from "react";
import { Loading } from "./components/loading.jsx";
import { Navbar } from "./components/sections/Navbar.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import { Home } from "./components/sections/Home.jsx";
import { Project } from "./components/sections/Project.jsx";
import { Contact } from "./components/sections/Contact.jsx";
import { About } from "./components/sections/About.jsx";
import { Certificate } from "./components/sections/Certificate.jsx";
import "./index.css";
import { Footer } from "./components/Footer.jsx";
import { PortfolioChatbot } from "./components/PortfolioChatbot.jsx";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}{" "}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Certificate />
        <Project />
        <Contact />
        <Footer />
        <PortfolioChatbot />
      </div>
    </>
  );
}

export default App;
