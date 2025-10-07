import HomePage from "./component page/homepage";
import CardSection from "./component path/Card";
import Contact from "./component path/contact";
import Experience from "./component path/experience";
import Footer from "./component path/footer";
import Navbar from "./component path/navbar";
import Skill from "./component path/Skill";
import About from "./component page/Aboutme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <CardSection />
                <Skill />
                <Experience />
                <Contact />
              </>
            }
          />
          <Route path="/projects" element={<CardSection />} />
          <Route path="/skills" element={<Skill />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
