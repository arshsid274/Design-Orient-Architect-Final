import WatchUs from "../Components/WatchUs";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Provide from "../Components/Provide";
import Navbar from "../Components/Navbar";

function Services() {
  return (
    <>
      <div className="bg-black ">
        <div className="  ">
          <Navbar />
          <Provide />

          <WatchUs />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Services;
