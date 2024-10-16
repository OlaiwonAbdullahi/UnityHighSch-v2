import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import MobileNavBar from "./components/MobileNavBar";
import Footer from "./components/Footer";
import Demography from "./components/Demography";

const App = () => {
  return (
    <div className="bg-yellow-50/75">
      <Router>
        <Navbar />
        <MobileNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/demo" element={<Demography />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
