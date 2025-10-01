import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function About() {
  return <h1 className="p-6 text-2xl">About Me</h1>;
}
function Projects() {
  return <h1 className="p-6 text-2xl">Projects</h1>;
}
function Contact() {
  return <h1 className="p-6 text-2xl">Contact</h1>;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}