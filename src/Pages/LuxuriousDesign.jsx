import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import villa1 from "../assets/ROOF TOP CAFE/01ps.png";
import villa2 from "../assets/ROOF TOP CAFE/04ps.png";
import villa3 from "../assets/ROOF TOP CAFE/07ps.png";
import villa4 from "../assets/SEVEN INN RESTAURANT/01.png";
import villa5 from "../assets/SEVEN INN RESTAURANT/02.png";
import villa6 from "../assets/INTERIOR DESIGN/PRAGATI INN/pragati3.jpg";
import villa7 from "../assets/INTERIOR DESIGN/RESIDENTIAL/img49.jpg";
import villa8 from "../assets/HOSPITALITY/HOTEL HAVANA/Room view 2.jpg";

function LuxuriousDesign() {
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitle = location.state?.title || "RESTURANT";

  return (
    <>
      <div className="bg-black ">
        <Navbar />
        <div className="bg-black text-white min-h-screen">
          {/* <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate("/projects")}
            className="flex items-center text-[#c6a47e] hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Projects
          </button>
        </div> */}

          {/* <div
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${villa1})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-xl md:text-6xl font-bold text-center">
              {pageTitle}
            </h1>
          </div>
        </div> */}

          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* <h2 className="text-3xl font-bold mb-8 text-[#c6a47e]">
              Exquisite Luxury Villa Design & Architecture
            </h2> */}

              {/* <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Our Villa Design Services
                </h3>
                <p className="text-gray-300 mb-6">
                  We create extraordinary luxury villas that epitomize elegance,
                  comfort, and sophistication. Each design reflects the unique
                  lifestyle and preferences of our discerning clients.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Custom Villa Architecture</li>
                  <li>• Luxury Interior Design</li>
                  <li>• Landscape & Garden Design</li>
                  <li>• Pool & Outdoor Living Spaces</li>
                  <li>• Smart Home Integration</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <p className="text-gray-300 mb-6">
                  With expertise in luxury residential design, we understand the
                  art of creating villas that are not just homes, but personal
                  sanctuaries that reflect your lifestyle and aspirations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Bespoke Design Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Premium Material Selection</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Seamless Indoor-Outdoor Living</span>
                  </div>
                </div>
              </div>
            </div> */}

              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                  Our {pageTitle} Portfolio
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <img
                    src={villa1}
                    alt="Luxury Villa Project 1"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={villa2}
                    alt="Luxury Villa Project 2"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={villa3}
                    alt="Luxury Villa Project 3"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={villa4}
                    alt="Luxury Villa Project 4"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={villa5}
                    alt="Luxury Villa Project 5"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={villa6}
                    alt="Luxury Villa Project 6"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Villa Design Specializations
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Modern Villas
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Contemporary designs featuring clean lines, open spaces, and
                    cutting-edge technology.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Minimalist architecture</li>
                    <li>• Floor-to-ceiling windows</li>
                    <li>• Smart home systems</li>
                  </ul>
                </div>
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Classic Villas
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Timeless elegance with traditional architectural elements
                    and luxurious finishes.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Classical proportions</li>
                    <li>• Premium materials</li>
                    <li>• Ornate detailing</li>
                  </ul>
                </div>
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Resort Villas
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Vacation-inspired designs that bring resort-style luxury to
                    private residences.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Tropical aesthetics</li>
                    <li>• Outdoor entertainment</li>
                    <li>• Wellness facilities</li>
                  </ul>
                </div>
              </div>
            </div> */}

              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Featured Villa Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#252525] rounded-lg overflow-hidden">
                  <img
                    src={villa7}
                    alt="Modern Luxury Villa"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Modern Luxury Villa
                    </h4>
                    <p className="text-gray-300 mb-4">
                      A stunning contemporary villa featuring panoramic views
                      and state-of-the-art amenities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Modern
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Luxury
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252525] rounded-lg overflow-hidden">
                  <img
                    src={villa8}
                    alt="Mediterranean Villa"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Mediterranean Villa
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Classic Mediterranean architecture with modern luxury and
                      breathtaking outdoor spaces.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Mediterranean
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Classic
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

              <div className="text-center bg-[#252525] rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Build Your Dream Villa?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let us create a luxury villa that exceeds your expectations.
                  Contact us today to begin your journey toward the ultimate in
                  residential luxury.
                </p>
                <Link to="/contact">
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Start Your Villa Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LuxuriousDesign;
