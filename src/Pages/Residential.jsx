import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import residential1 from "../assets/INTERIOR DESIGN/PRAGATI INN/image 02.jpg";
import residential2 from "../assets/INTERIOR DESIGN/PRAGATI INN/WhatsApp Image 2025-06-30 at 12.00.14_348e1fb8.jpg";
import residential3 from "../assets/INTERIOR DESIGN/PRAGATI INN/pragati1.jpg";
import residential4 from "../assets/SEVEN INN RESTAURANT/03.png";
import residential5 from "../assets/ROOF TOP CAFE/04ps.png";
import residential6 from "../assets/SEVEN INN RESTAURANT/01.png";
import residential7 from "../assets/HOSPITALITY/MAPAZ HOTEL/0001.png";
import residential8 from "../assets/HOSPITALITY/HOTEL HAVANA/Room view 2.jpg";

function Residential() {
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitle = location.state?.title || "Residential Project";

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
          style={{ backgroundImage: `url(${residential1})` }}
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
              Exceptional Residential Architecture & Design
            </h2> */}

              {/* <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Our Residential Design Services
                </h3>
                <p className="text-gray-300 mb-6">
                  We create beautiful, functional homes that reflect your
                  lifestyle and personality. Our residential designs combine
                  comfort, aesthetics, and practicality to deliver your dream
                  home.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Custom Home Design</li>
                  <li>• Home Renovations & Extensions</li>
                  <li>• Interior Space Planning</li>
                  <li>• Kitchen & Bathroom Design</li>
                  <li>• Outdoor Living Spaces</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <p className="text-gray-300 mb-6">
                  With extensive experience in residential architecture, we
                  understand the importance of creating homes that are not just
                  beautiful, but also functional and comfortable for everyday
                  living.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Personalized Design Approach</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Energy Efficient Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Quality Construction Management</span>
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
                    src={residential1}
                    alt="Residential Project 1"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={residential2}
                    alt="Residential Project 2"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={residential3}
                    alt="Residential Project 3"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={residential4}
                    alt="Residential Project 4"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={residential5}
                    alt="Residential Project 5"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={residential6}
                    alt="Residential Project 6"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Residential Design Specializations
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Modern Homes
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Contemporary residential designs featuring clean lines and
                    open floor plans.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Open concept living</li>
                    <li>• Large windows & natural light</li>
                    <li>• Minimalist aesthetics</li>
                  </ul>
                </div>
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Traditional Homes
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Classic residential architecture with timeless appeal and
                    comfortable layouts.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Classic architectural details</li>
                    <li>• Cozy living spaces</li>
                    <li>• Traditional materials</li>
                  </ul>
                </div>
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Family Homes
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Functional family-oriented designs that accommodate growing
                    households.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Multiple bedrooms & bathrooms</li>
                    <li>• Play areas & study spaces</li>
                    <li>• Storage solutions</li>
                  </ul>
                </div>
              </div>
            </div> */}

              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Featured Residential Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#252525] rounded-lg overflow-hidden">
                  <img
                    src={residential7}
                    alt="Modern Family Home"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Modern Family Home
                    </h4>
                    <p className="text-gray-300 mb-4">
                      A contemporary family residence designed for comfort and
                      functionality with modern amenities.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Modern
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Family
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252525] rounded-lg overflow-hidden">
                  <img
                    src={residential8}
                    alt="Traditional Home"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Classic Traditional Home
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Timeless residential design featuring traditional
                      architecture with modern conveniences.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Traditional
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
                  Ready to Build Your Dream Home?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let us help you create a home that perfectly suits your
                  lifestyle and needs. Contact us today to start your
                  residential project journey.
                </p>
                <Link to="/contact">
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Start Your Home Project
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

export default Residential;
