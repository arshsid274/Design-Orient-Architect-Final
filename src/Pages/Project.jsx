import LatestWork from "../Components/LatestWork";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import ClientSays from "../Components/ClientSays";
import Navbar from "../Components/Navbar";
function Project() {
  return (
    <>
      <div className="bg-black ">
        <div className="  ">
          <Navbar />
          <LatestWork />
          {/* <ClientSays/> */}
          <ContactForm />
          <Footer />
        </div>
      </div>
    </>
  );
}
export default Project;
