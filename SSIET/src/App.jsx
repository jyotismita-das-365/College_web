import Navbar from "./components/Navbar";
import Department from "./components/Department";
import Admissions from "./components/Admissions";
import Contact from "./components/Contact";
import AboutUs from "./components/AboutUs";
import Facilities from "./components/Facilities";
import Placement from "./components/Placement";
import Alumni from "./components/Alumni";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <>
    <Navbar />
    <Banner />
    <Department />
    <Admissions />
    <Contact />
    <AboutUs />
    <Facilities /> 
    <Placement />
    <Alumni />
    <Gallery />
    <Events />
    <Footer />
    </>
  );
}

export default App;