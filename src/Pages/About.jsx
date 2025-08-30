import Welcome from "../Components/Welcome";
import PrincipalArcitect from "../Components/PrincipalArcitect";
import Philosphy from "../Components/Philosphy";
import ChooseUs from "../Components/ChooseUs";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Marquee from "../Components/Marquee";
import Values from "../Components/Values";
import Navbar from "../Components/Navbar";
import CoreValues from "../Components/CoreValues";

function About() {
  return (
    <>
      <div className="bg-black ">
        <div className="  ">
          <Navbar />
          <PrincipalArcitect />
          {/* <Welcome /> */}
          <Philosphy />
          {/* <CoreValues /> */}
          <Values />
          {/* <Marquee /> */}
          <ChooseUs />

          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default About;
