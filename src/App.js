import CallToAction from "./components/CallToAction";
import ClientArea from "./components/ClientArea";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Pricing />
      <CallToAction />
      <Testimonial />
      <ClientArea />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
