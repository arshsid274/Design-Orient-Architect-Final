import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import LatestCommercial from "../assets/Latest_Commercial.jpg";
import LatestHospitality from "../assets/HOSPITALITY/HOTEL HAVANA/Room view 1.jpg";
import Exterior from "../assets/HOSPITALITY/ASHOKA HOTEL/WhatsApp Image 2025-06-30 at 12.00.02_0a252b1b.jpg";
import Exterior1 from "../assets/HOSPITALITY/MAPAZ HOTEL/0001.png";
import SevenInn from "../assets/HOSPITALITY/HOTEL HAVANA/Room view 3.jpg";
import Ashoka from "../assets/HOSPITALITY/HOTEL HAVANA/Room view 2.jpg";
import Slider1 from "../assets/Slider1.jpg";
import Slider2 from "../assets/Slider2.jpg";
import Slider3 from "../assets/Slider3.jpg";
import Slider4 from "../assets/Slider4.jpg";
import Slider5 from "../assets/HOSPITALITY/HOTEL HAVANA/WhatsApp Image 2025-03-08 at 6.36.33 PM (1).jpeg";
import Slider6 from "../assets/HOSPITALITY/MAPAZ HOTEL/vvvv.png";
import WatchUsImage from "../assets/HOSPITALITY/HOTEL HAVANA/WhatsApp Image 2025-03-08 at 6.36.33 PM (2).jpeg";
import Philosphy from "../assets/HOSPITALITY/HOTEL HAVANA/WhatsApp Image 2025-03-08 at 6.36.33 PM (3).jpeg";
import Philos from "../assets/HOSPITALITY/MAPAZ HOTEL/0002 (1).png";

function CommercialBuildingDesign() {
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitle = location.state?.title || "Commercial Building Design";

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
          style={{ backgroundImage: `url(${LatestCommercial})` }}
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
              Innovative Commercial Architecture Solutions
            </h2> */}

              {/* <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Our Commercial Design Services
                </h3>
                <p className="text-gray-300 mb-6">
                  We specialize in creating functional and impressive commercial
                  spaces that enhance business operations and leave lasting
                  impressions on clients and employees alike.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Office Building Design</li>
                  <li>• Retail Space Planning</li>
                  <li>• Industrial Facility Design</li>
                  <li>• Mixed-Use Development</li>
                  <li>• Corporate Headquarters</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <p className="text-gray-300 mb-6">
                  With extensive experience in commercial architecture, we
                  understand the unique requirements of business environments
                  and deliver designs that optimize workflow and productivity.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Strategic Space Planning</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Sustainable Design Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Code Compliance & Permits</span>
                  </div>
                </div>
              </div>
            </div> */}

              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                  Our {pageTitle} Portfolio
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {/* <img
                  src={LatestCommercial}
                  alt="Commercial Building Project 1"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                /> */}
                  <img
                    src={LatestHospitality}
                    alt="Hospitality Design Project"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={SevenInn}
                    alt="Seven Inn Commercial Project"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={Ashoka}
                    alt="Ashoka Commercial Complex"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  {/* <img
                  src={Slider1}
                  alt="Modern Office Building"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                /> */}
                  {/* <img
                  src={Slider2}
                  alt="Corporate Headquarters"
                  className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                /> */}
                  <img
                    src={Slider5}
                    alt="Commercial Complex"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={WatchUsImage}
                    alt="Business Center"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={Philosphy}
                    alt="Commercial Architecture"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
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
                  <h4 className="text-xl font-semibold mb-2">Site Analysis</h4>
                  <p className="text-gray-300">
                    Comprehensive site evaluation and feasibility studies for
                    optimal commercial development.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c6a47e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Concept Design</h4>
                  <p className="text-gray-300">
                    Creative architectural concepts that balance functionality
                    with aesthetic appeal.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c6a47e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Development</h4>
                  <p className="text-gray-300">
                    Detailed drawings, specifications, and permit documentation
                    for construction.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c6a47e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">4</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Construction</h4>
                  <p className="text-gray-300">
                    Project oversight and construction administration ensuring
                    quality delivery.
                  </p>
                </div>
              </div>
            </div> */}

              {/* Specializations Section */}
              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Commercial Specializations
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Office Buildings
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Modern workspace design that promotes productivity and
                    collaboration.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Open floor plans</li>
                    <li>• Meeting rooms & conference facilities</li>
                    <li>• Break areas & cafeterias</li>
                  </ul>
                </div>
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Retail Spaces
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Strategic retail design that enhances customer experience
                    and sales.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Shopping centers</li>
                    <li>• Standalone retail stores</li>
                    <li>• Food courts & restaurants</li>
                  </ul>
                </div>
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Industrial Facilities
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Functional industrial design optimized for operations and
                    safety.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Manufacturing plants</li>
                    <li>• Warehouses & distribution</li>
                    <li>• Research & development</li>
                  </ul>
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
                    src={Slider3}
                    alt="Corporate Office Complex"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Corporate Office Complex
                    </h4>
                    <p className="text-gray-300 mb-4">
                      A state-of-the-art office building designed for maximum
                      efficiency and employee satisfaction.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Corporate
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Office
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252525] rounded-lg overflow-hidden">
                  <img
                    src={Slider4}
                    alt="Mixed-Use Development"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Mixed-Use Development
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Innovative mixed-use design combining retail, office, and
                      hospitality spaces.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Mixed-Use
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Commercial
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

              {/* Additional Portfolio Images */}
              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                More Commercial Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <img
                  src={Slider6}
                  alt="Retail Complex"
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={Exterior}
                  alt="Office Tower"
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={Exterior1}
                  alt="Mixed-Use Building"
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
                <img
                  src={Philos}
                  alt="Commercial Plaza"
                  className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div> */}

              <div className="text-center bg-[#252525] rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Build Your Commercial Vision?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our experienced team help you create a commercial space
                  that drives business success. Contact us today to discuss your
                  project requirements.
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

export default CommercialBuildingDesign;
