import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Department from "./components/Department";
import Admissions from "./components/Admissions";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Facilities from "./components/Facilities";
import Placement from "./components/Placement";
import Alumni from "./components/Alumni";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Whatsapp from "./components/whatsapp";

function App() {
  return (
    <>
      <Navbar />
      {/* <Whatsapp />
      <Banner />
      <Department />
      <Admissions />
      <Contact />
      <AboutUs />
      <Facilities />
      <Placement />
      <Alumni />
      <Footer /> */}
    </>
  );
}

export default App;
