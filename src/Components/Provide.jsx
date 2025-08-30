import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Arcitect from "../assets/Arcitect.svg";
import Interior from "../assets/Interior.svg";
import Landscaping from "../assets/Landscaping.svg";
import Renovation from "../assets/Renovation.svg";
import Planning from "../assets/Planning.svg";
import Solution from "../assets/Idea.svg";
import Furniture from "../assets/Furniture.svg";

const Provide = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isServices = location.pathname === "/services";

  useEffect(() => {
    const scrollToId = location.state?.scrollToId;
    if (scrollToId) {
      const element = document.getElementById(scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="pb-2 lg:mt-16 mt-0">
      <h2 className="uppercase text-white text-xl md:text-3xl text-center   py-12 lg:mt-10 mt-0">
        What <span className="text-[#c6a47e]">We provide</span>
      </h2>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 text-white gap-4 lg:gap-8 sm:px-12 lg:py-5 ">
        {/* Architecture */}
        <div className="grid-span-1 relative border border-[#c6a47e] bg-[#252525] text-white md:h-90 p-6 flex flex-col items-center justify-center text-center">
          <div className="absolute top-2 left-4 w-px h-10 lg:h-12 bg-[#c6a472]" />
          <div className="absolute top-4 left-2 h-px w-10 lg:w-12 bg-[#c6a472]" />
          <div className="absolute bottom-2 right-4 w-px h-10 lg:h-12 bg-[#c6a472]" />
          <div className="absolute bottom-4 right-2 h-px w-10 lg:w-12 bg-[#c6a472]" />
          <img
            src={Arcitect}
            alt="Arcitect"
            className="w-12 h-12 mb-4 bg-[#c6a472]"
          />

          <h2 className="text-2xl font-bold mb-4">Architecture</h2>
          <p className="text-sm max-w-xl">
            Our residential projects range from contemporary urban apartments to
            sprawling country estates. From corporate offices to retail spaces
            and hospitality venues, our commercial projects are designed to
            enhance productivity and provide a welcoming environment for clients
            and customers.
          </p>
        </div>

        {/* Interior Design */}
        <div className="grid-span-1 relative border border-[#c6a47e] bg-[#252525] text-white md:h-90 p-6 flex flex-col items-center justify-center text-center">
          <div className="absolute top-2 left-4 w-px h-10 lg:h-12 bg-[#c6a472]" />
          <div className="absolute top-4 left-2 h-px w-10 lg:w-12 bg-[#c6a472]" />
          <div className="absolute bottom-2 right-4 w-px h-10 lg:h-12 bg-[#c6a472]" />
          <div className="absolute bottom-4 right-2 h-px w-10 lg:w-12 bg-[#c6a472]" />
          <img
            src={Interior}
            alt="Arcitect"
            className="w-12 h-12 mb-4 bg-[#c6a472]"
          />
          <h2 className="text-2xl font-bold mb-4">Interior Design</h2>
          <p className="text-sm max-w-xl">
            Our interior design services transform interiors into inviting and
            efficient spaces. Whether it’s a cozy home or a dynamic workplace,
            we focus on creating interiors that are visually appealing and
            perfectly suited to their intended use.
          </p>
        </div>

        {/* Landscaping */}
        <div className="grid-span-1 relative border border-[#c6a47e] bg-[#252525] text-white md:h-90 p-6 flex flex-col items-center justify-center text-center">
          <div className="absolute top-2 left-4 w-px h-10 lg:h-12 bg-[#c6a472]" />
          <div className="absolute top-4 left-2 h-px w-10 lg:w-12 bg-[#c6a472]" />
          <div className="absolute bottom-2 right-4 w-px h-10 lg:h-12 bg-[#c6a472]" />
          <div className="absolute bottom-4 right-2 h-px w-10 lg:w-12 bg-[#c6a472]" />
          <img
            src={Landscaping}
            alt="Arcitect"
            className="w-12 h-12 mb-4 bg-[#c6a472]"
          />
          <h2 className="text-2xl font-bold mb-4">Landscaping</h2>
          <p className="text-sm max-w-xl">
            Our landscape designs bring outdoor spaces to life. From serene
            garden retreats to dynamic public spaces, our landscaping projects
            are crafted to enhance the natural beauty and functionality of their
            surroundings.
          </p>
        </div>
      </div>

      {isServices && (
        <div id="target">
          <div className="hidden  lg:grid  grid-cols-3 text-white gap-4 md:gap-8 sm:px-12 md:py-5">
            <div></div>
            <div className="grid-span-1 relative border border-[#c6a47e] bg-[#252525] text-white md:h-90 p-6 flex flex-col items-center justify-center text-center">
              {/* Decorative corner lines */}
              <div className="absolute top-2 left-4 w-px h-10 md:h-12 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 md:w-12 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 md:h-12 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 md:w-12 bg-[#c6a472]" />

              {/* Icon */}
              <img
                src={Renovation}
                alt="Arcitect"
                className="w-12 h-12 mb-4 bg-[#c6a472]"
              />

              {/* Title */}
              <h2 className="text-[10px] md:text-2xl font-bold mb-4">
                Renovations And Remodels
              </h2>

              {/* Description */}
              <p className="hidden md:block text-sm max-w-xl">
                We specialize in breathing new life into existing structures.
                Our renovation projects preserve the charm and character of the
                original building while introducing modern conveniences and
                design elements.
              </p>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-3 text-white gap-4 md:gap-8 sm:px-12 md:py-5">
            {/* Card 1 */}
            <div className="relative border border-[#c6a47e] bg-[#252525] text-white md:h-90 p-6 flex flex-col items-center justify-center text-center">
              <div className="absolute top-2 left-4 w-px h-10 md:h-12 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 md:w-12 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 md:h-12 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 md:w-12 bg-[#c6a472]" />
              <img
                src={Planning}
                alt="Arcitect"
                className="w-12 h-12 mb-4 bg-[#c6a472]"
              />
              <h2 className="text-[10px] md:text-2xl font-bold mb-4">
                Detailed And Phased Planning
              </h2>
              <p className="hidden md:block text-sm max-w-xl">
                We start with the creation of initial design concepts which
                leads to a cohesive plan. Further detailing of architectural
                elements, materials and systems is done before finalization of
                all design details.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative border border-[#c6a47e] bg-[#252525] text-white md:h-90 p-6 flex flex-col items-center justify-center text-center">
              <div className="absolute top-2 left-4 w-px h-10 md:h-12 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 md:w-12 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 md:h-12 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 md:w-12 bg-[#c6a472]" />
              <img
                src={Solution}
                alt="Arcitect"
                className="w-12 h-12 mb-4 bg-[#c6a472]"
              />
              <h2 className="text-[10px] md:text-2xl font-bold mb-4">
                Turnkey Solutions
              </h2>
              <p className="hidden md:block text-sm max-w-xl">
                Turnkey solutions are a comprehensive project delivery method
                where we manage all phases of your project, delivering a
                finished product that is ready for immediate use. This approach
                simplifies the process for our clients, ensuring a smooth and
                efficient journey from start to finish.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative border border-[#c6a47e] bg-[#252525] text-white md:h-90 p-6 flex flex-col items-center justify-center text-center">
              <div className="absolute top-2 left-4 w-px h-10 md:h-12 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 md:w-12 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 md:h-12 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 md:w-12 bg-[#c6a472]" />
              <img
                src={Furniture}
                alt="Arcitect"
                className="w-12 h-12 mb-4 bg-[#c6a472]"
              />
              <h2 className="text-[10px] md:text-2xl font-bold mb-4">
                Furniture Design
              </h2>
              <p className="hidden md:block text-sm max-w-xl">
                We believe that furniture is not just about function, but also
                about form, style, and individuality. Our custom furniture
                design services bring your vision to life, creating unique
                pieces that enhance and complement your space.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Carousel */}
      <div className="block lg:hidden px-4 ">
        {isHome && (
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            infiniteLoop
            emulateTouch
            swipeable
            autoPlay={false}
          >
            {/* Architecture Slide */}

            <div className="text-white relative border border-[#c6a47e] bg-[#252525] p-6  flex flex-col items-center justify-center text-center h-[500px]">
              <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />
              <img
                src={Arcitect}
                alt="Arcitect"
                className="w-12 h-[180px] mb-4 bg-[#c6a472]"
              />
              <h2 className="text-xl font-bold mb-2">Architecture</h2>
              <p
                className="text-sm h-25
      "
              >
                Our residential projects range from contemporary urban
                apartments to sprawling country estates. From corporate offices
                to retail spaces and hospitality venues, our commercial projects
                are designed to enhance productivity and provide a welcoming
                environment for clients and customers.
              </p>
            </div>

            {/* Interior Design Slide */}
            <div className="text-white relative border border-[#c6a47e] bg-[#252525] p-6 flex flex-col items-center justify-center text-center h-[500px]">
              <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />
              <img
                src={Interior}
                alt="Arcitect"
                className="w-12 h-[180px] mb-4  bg-[#c6a472]"
              />

              <h2 className="text-xl font-bold mb-2">Interior Design</h2>
              <p className="text-sm">
                Our interior design services transform interiors into inviting
                and efficient spaces. Whether it’s a cozy home or a dynamic
                workplace, we focus on creating interiors that are visually
                appealing and perfectly suited to their intended use.
              </p>
            </div>

            {/* Landscaping Slide */}
            <div className="text-white relative border border-[#c6a47e] bg-[#252525] p-6 flex flex-col items-center justify-center text-center h-[500px]">
              <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />
              <img
                src={Landscaping}
                alt="Arcitect"
                className="w-12 h-[180px] mb-4 bg-[#c6a472]"
              />

              <h2 className="text-xl font-bold mb-2">Landscaping</h2>
              <p className="text-sm">
                Our landscape designs bring outdoor spaces to life. From serene
                garden retreats to dynamic public spaces, our landscaping
                projects are crafted to enhance the natural beauty and
                functionality of their surroundings.
              </p>
            </div>
          </Carousel>
        )}
        {isServices && (
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={true}
            infiniteLoop
            emulateTouch
            swipeable
            autoPlay={false}
          >
            {/* Architecture Slide */}

            <div className="text-white relative border border-[#c6a47e] bg-[#252525] p-6 flex flex-col items-center justify-center text-center h-[500px]">
              <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />
              <img
                src={Arcitect}
                alt="Arcitect"
                className="w-12 h-[180px] mb-4 bg-[#c6a472]"
              />

              <h2 className="text-xl font-bold mb-2">Architecture</h2>
              <p className="text-sm h-25">
                Our residential projects range from contemporary urban
                apartments to sprawling country estates. From corporate offices
                to retail spaces and hospitality venues, our commercial projects
                are designed to enhance productivity and provide a welcoming
                environment for clients and customers.
              </p>
            </div>

            {/* Interior Design Slide */}
            <div className="text-white relative border border-[#c6a47e] bg-[#252525] p-6 flex flex-col items-center justify-center text-center h-[500px]">
              <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />
              <img
                src={Interior}
                alt="Arcitect"
                className="w-12 h-[180px] mb-4 bg-[#c6a472]"
              />

              <h2 className="text-xl font-bold mb-2">Interior Design</h2>
              <p className="text-sm">
                Our interior design services transform interiors into inviting
                and efficient spaces. Whether it’s a cozy home or a dynamic
                workplace, we focus on creating interiors that are visually
                appealing and perfectly suited to their intended use.
              </p>
            </div>

            {/* Landscaping Slide */}
            <div className="text-white relative border border-[#c6a47e] bg-[#252525] p-6 flex flex-col items-center justify-center text-center h-[500px]">
              <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />
              <img
                src={Landscaping}
                alt="Arcitect"
                className="w-12 h-[180px] mb-4 bg-[#c6a472]"
              />

              <h2 className="text-xl font-bold mb-2">Landscaping</h2>
              <p className="text-sm">
                Our landscape designs bring outdoor spaces to life. From serene
                garden retreats to dynamic public spaces, our landscaping
                projects are crafted to enhance the natural beauty and
                functionality of their surroundings.
              </p>
            </div>

            <div className="text-white relative border border-[#c6a47e] bg-[#252525] p-6 flex flex-col items-center justify-center text-center h-[500px]">
              <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />
              <img
                src={Renovation}
                alt="Arcitect"
                className="w-12 h-[180px] mb-4 bg-[#c6a472]"
              />

              <h2 className="text-xl font-bold mb-2">
                Renovations And Remodels
              </h2>
              <p className="text-sm">
                We specialize in breathing new life into existing structures.
                Our renovation projects preserve the charm and character of the
                original building while introducing modern conveniences and
                design elements.
              </p>
            </div>

            <div className="text-white relative border border-[#c6a47e] bg-[#252525] p-6 flex flex-col items-center justify-center text-center h-[500px]">
              <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />
              <img
                src={Planning}
                alt="Arcitect"
                className="w-12 h-[180px] mb-4 bg-[#c6a472]"
              />

              <h2 className="text-xl font-bold mb-2">
                Detailed And Phased Planning
              </h2>
              <p className="text-sm">
                We start with the creation of initial design concepts which
                leads to a cohesive plan. Further detailing of architectural
                elements, materials and systems is done before finalization of
                all design details.
              </p>
            </div>

            <div className="text-white relative border border-[#c6a47e] bg-[#252525] p-6 flex flex-col items-center justify-center text-center h-[500px]">
              <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />
              <img
                src={Solution}
                alt="Arcitect"
                className="w-12 h-[180px] mb-4 bg-[#c6a472]"
              />

              <h2 className="text-xl font-bold mb-2">Turnkey Solutions</h2>
              <p className="text-sm">
                Turnkey solutions are a comprehensive project delivery method
                where we manage all phases of your project, delivering a
                finished product that is ready for immediate use. This approach
                simplifies the process for our clients, ensuring a smooth and
                efficient journey from start to finish.
              </p>
            </div>

            <div className="text-white relative border border-[#c6a47e] bg-[#252525] p-6 flex flex-col items-center justify-center text-center h-[500px]">
              <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
              <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
              <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />
              <img
                src={Furniture}
                alt="Arcitect"
                className="w-12 h-[180px] mb-4 bg-[#c6a472]"
              />
              <h2 className="text-xl font-bold mb-2">Furniture Design</h2>
              <p className="text-sm">
                We believe that furniture is not just about function, but also
                about form, style, and individuality. Our custom furniture
                design services bring your vision to life, creating unique
                pieces that enhance and complement your space.
              </p>
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Provide;
