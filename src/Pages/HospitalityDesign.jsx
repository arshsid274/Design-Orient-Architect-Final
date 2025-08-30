import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import hospital1 from "../assets/HOSPITALITY/ASHOKA HOTEL/DSC03719.png";
import hospital2 from "../assets/HOSPITALITY/ASHOKA HOTEL/WhatsApp Image 2025-06-30 at 12.00.02_0a252b1b.jpg";
import hospital3 from "../assets/HOSPITALITY/ASHOKA HOTEL/DSC03768.png";
import hospital4 from "../assets/HOSPITALITY/ASHOKA HOTEL/WhatsApp Image 2025-06-30 at 12.00.14_de096187.jpg";
import hospital5 from "../assets/HOSPITALITY/ASHOKA HOTEL/DSC03831.png";
import hospital6 from "../assets/HOSPITALITY/ASHOKA HOTEL/DSC03841.png";

import hospital7 from "../assets/HOSPITALITY/MAPAZ HOTEL/0001.png";
import hospital8 from "../assets/HOSPITALITY/HOTEL HAVANA/WhatsApp Image 2025-03-08 at 6.36.33 PM.jpeg";

function HospitalityDesign() {
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitle = location.state?.title || "Hospitality Design";

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

        </div> */}

          {/* <div
          className="relative h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${hospital1})` }}
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
              Exceptional Hospitality Architecture & Design
            </h2> */}

              {/* <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Our Hospitality Design Services
                </h3>
                <p className="text-gray-300 mb-6">
                  We create memorable hospitality experiences through thoughtful
                  design that combines comfort, functionality, and aesthetic
                  appeal to delight guests and optimize operations.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Hotel & Resort Design</li>
                  <li>• Restaurant & Bar Design</li>
                  <li>• Spa & Wellness Centers</li>
                  <li>• Event & Conference Facilities</li>
                  <li>• Boutique Accommodations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <p className="text-gray-300 mb-6">
                  With deep understanding of hospitality industry needs, we
                  design spaces that enhance guest satisfaction while maximizing
                  operational efficiency and revenue potential.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Guest Experience Optimization</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Brand Identity Integration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Operational Efficiency Design</span>
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
                    src={hospital1}
                    alt="Hospitality Design Project 1"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={hospital2}
                    alt="Hospitality Design Project 2"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={hospital3}
                    alt="Hospitality Design Project 3"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={hospital4}
                    alt="Hospitality Design Project 4"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={hospital5}
                    alt="Hospitality Design Project 5"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={hospital6}
                    alt="Hospitality Design Project 6"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Hospitality Specializations
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Hotels & Resorts
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Luxury accommodations designed for comfort and memorable
                    experiences.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Guest room design</li>
                    <li>• Lobby & reception areas</li>
                    <li>• Pool & recreation facilities</li>
                  </ul>
                </div>
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Restaurants & Bars
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Dining spaces that create atmosphere and enhance culinary
                    experiences.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Fine dining restaurants</li>
                    <li>• Casual dining spaces</li>
                    <li>• Bar & lounge areas</li>
                  </ul>
                </div>
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Wellness Centers
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Tranquil spaces designed for relaxation and rejuvenation.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Spa treatment rooms</li>
                    <li>• Fitness centers</li>
                    <li>• Meditation spaces</li>
                  </ul>
                </div>
              </div>
            </div> */}
              {/* Design Process Section */}
              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Our Design Process
              </h3>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c6a47e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Research</h4>
                  <p className="text-gray-300">
                    Understanding your brand and target guests for optimal
                    design strategy.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c6a47e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Concept</h4>
                  <p className="text-gray-300">
                    Creating unique design concepts that enhance guest
                    experience.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c6a47e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Development</h4>
                  <p className="text-gray-300">
                    Detailed planning including layouts and operational flow
                    optimization.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c6a47e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">4</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Implementation</h4>
                  <p className="text-gray-300">
                    Project management ensuring seamless execution of your
                    vision.
                  </p>
                </div>
              </div>
            </div> */}

              {/* Featured Projects */}
              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Featured Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#252525] rounded-lg overflow-hidden">
                  <img
                    src={hospital7}
                    alt="Luxury Hotel"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Luxury Resort & Spa
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Premium resort featuring world-class amenities and
                      breathtaking design.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Luxury
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Resort
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252525] rounded-lg overflow-hidden">
                  <img
                    src={hospital8}
                    alt="Boutique Hotel"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Boutique Hotel Design
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Intimate space combining local culture with modern
                      comfort.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Boutique
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Hotel
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

              {/* Additional Portfolio */}
              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                More Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <img
                  src={hospital3}
                  alt="Restaurant"
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={hospital4}
                  alt="Hotel Lobby"
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={hospital5}
                  alt="Spa Design"
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={hospital6}
                  alt="Conference Center"
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div> */}

              <div className="text-center bg-[#252525] rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Create Exceptional Guest Experiences?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let us help you design hospitality spaces that captivate
                  guests and drive business success. Contact us to discuss your
                  hospitality project.
                </p>
                <Link to="/contact">
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Start Your Project
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

export default HospitalityDesign;
