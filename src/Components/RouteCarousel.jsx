import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SlideBox from "./Slidebox";

import Slider1 from "../assets/Slider1.jpg";
import Slider2 from "../assets/Slider2.jpg";
import Slider3 from "../assets/Slider3.jpg";
import Slider4 from "../assets/Slider4.jpg";
import Slider5 from "../assets/Slider5.jpg";
import Slider6 from "../assets/Slider6.png";

const slides = [
  {
    image: Slider1,
    alt: "Home",
    title: "INNOVATIVE DESIGN",
    subtitle: "TIMELESS ARCHITECTURE",
    description:
      "At Design Orient Architects, we are passionate about creating spaces that not only meet your needs but also inspire and stand the test of time. Our team of expert architects, designers, and planners brings together a wealth of experience and a shared vision for excellence in every project we undertake.",
  },
  {
    image: Slider2,
    alt: "About",
    title: "",
    subtitle: "OUR STORY",
    description:
      "Founded on a passion for design and a commitment to excellence, Design Orient Architects has grown into a trusted name in architecture and landscaping. Our journey began with a simple vision: to create spaces that enhance the lives of those who use them.",
  },
  {
    image: Slider3,
    alt: "Projects",
    title: "",
    subtitle: "OUR PORTFOLIO",
    description:
      "Welcome to our portfolio, where we proudly present a collection of our most distinguished projects. Explore our diverse range of completed projects that showcase our commitment to excellence, innovation and creativity. From luxurious homes to state-of-the-art commercial spaces, our portfolio speaks for itself.",
  },
  {
    image: Slider4,
    alt: "Services",
    title: "",
    subtitle: "WE DESIGN IDEAS",
    description:
      "At Design Orient Architects, we believe that every project begins with powerful idea. Our approach to design is rooted in creativity, innovation, and a deep understanding of our clients' need and aspirations.",
  },
  {
    image: Slider5,
    alt: "Gallery",
    title: "",
    subtitle: "OUR GALLERY",
    description:
      "Discover the beauty and craftsmanship of our architectural creations through our curated gallery. Each image tells a story of innovation, attention to detail, and our commitment to transforming visions into reality.",
  },
  {
    image: Slider6,
    alt: "Contact",
    title: "",
    subtitle: "GET IN TOUCH",
    description:
      "We would love to hear about your project ideas. Contact us today to schedule a consultation and take the first step toward realizing your architectural vision. At Design Orient Architects, we are dedicated to creating spaces that inspire and endure.",
  },
];

const RouteCarousel = () => {
  return (
    <div className="relative w-full">
      <Carousel
        autoPlay
        stopOnHover={false}
        showThumbs={false}
        showStatus={false}
        interval={2500}
        infiniteLoop
        showArrows={true}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 z-10 bg-transparent text-[#c6a47e] text-lg md:text-2xl w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border-2 border-[#c6a47e] rounded-full hover:bg-[#c6a47e] hover:text-black transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faLessThan} />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute top-1/2 right-2 md:right-4 -translate-y-1/2 z-10 bg-transparent text-[#c6a47e] text-lg md:text-2xl w-8 h-8 md:w-12 md:h-12 flex items-center justify-center border-2 border-[#c6a47e] rounded-full hover:bg-[#c6a47e] hover:text-black transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGreaterThan} />
            </button>
          )
        }
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative">
            <div
              className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[700px] xl:h-[816px] bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
              role="img"
              aria-label={slide.alt}
            />
            <SlideBox
              title={slide.title}
              subtitle={slide.subtitle}
              description={slide.description}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default RouteCarousel;
