import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Exterior from "../assets/Exterior.jpg";
import Interior from "../assets/Slider3.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Welcome = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/"; // ✅ Checking if on Home
  const isAbout = location.pathname === "/about"; // ✅ Checking if on About

  useEffect(() => {
    const scrollToId = location.state?.scrollToId;
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div className="items-center justify-center bg-black pt-7 overflow-hidden">
      <h1 className="text-white text-xl md:text-3xl py-6 md:py-10 lg:py-14 font-medium text-center uppercase">
        Welcome To Design Orient Architects
      </h1>

      <div className="relative md:h-[600px] lg:h-[700px] xl:h-[800px] min-h-screen  md:grid md:grid-cols-2 py-5">
        {/* Left Section */}
        <div className="bg-[black] md:mt-30 text-white flex items-center justify-center overflow-visible md:pl-8">
          <div className="border-6 border-[#494949] relative md:h-70 md:w-60 lg:h-100 lg:w-80 xl:h-[500px] xl:w-[400px]">
            <img
              src={Interior}
              alt="Interior"
              className="md:absolute md:-top-35 md:-left-30 xl:-top-45 xl:-left-40 md:border-14 md:border-[#494949] w-full z-10"
            />
            <img
              src={Exterior}
              alt="Exterior"
              className="hidden md:block absolute -top-10 left-25 xl:-top-15 xl:left-35 h-full w-full object-cover z-0"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-black font-medium px-6 md:px-14 md:mr-16 py-8 justify-center">
          <h1 className="text-white text-2xl py-8">
            We Design & Create Best Eco-Friendly and Reliable Design
          </h1>

          <div className="bg-[#252525] px-8 py-8">
            <h2 className="text-[#c6a47e] text-xl">
              5+ <span className="text-white">Years of</span> Experience
            </h2>
          </div>

          <p className="text-white text-sm py-8">
            Design Orient Architects is a full-service architectural firm
            committed to delivering exceptional design solutions tailored to
            each client's unique needs. Our holistic approach ensures that every
            aspect of your project, from initial concept to final construction,
            is handled with the utmost care and attention to detail.
          </p>

          {isHome && (
  <div
    scrollToId="target"
    className="py-8 pb-12 flex justify-center md:justify-start"
  >
    <button
      onClick={handleClick}
      className="bg-[#c6a47e] px-8 py-2 text-white cursor-pointer"
    >
      Read More{" "}
      <span>
        <FontAwesomeIcon icon={faCaretRight} />
      </span>
    </button>
  </div>
)}

        </div>
      </div>
    </div>
  );
};

export default Welcome;
