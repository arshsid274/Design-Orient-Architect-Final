import Welcome from "../Components/Welcome";
import LatestWork from "../Components/LatestWork";
import Provide from "../Components/Provide";
import WatchUs from "../Components/WatchUs";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Button from "../Components/Button";
import Marquee from "../Components/Marquee";
const Home = () => {
  return (
    <div>
      <Welcome />
      <LatestWork className="mt-0" />
      <Marquee />
      <Provide className="mt-0" />

      <Button />

      <WatchUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
