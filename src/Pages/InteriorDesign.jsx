import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import LatestInterior from "../assets/Latest_Interior.jpg";
import interoir from "../assets/INTERIOR DESIGN/RESIDENTIAL/img35.jpg";
import Exterior from "../assets/INTERIOR DESIGN/RESIDENTIAL/img77.jpg";
import Exterior1 from "../assets/INTERIOR DESIGN/RESIDENTIAL/img50.jpg";
import LatestVilla from "../assets/INTERIOR DESIGN/RESIDENTIAL/img64.jpg";
import LatestResidential from "../assets/INTERIOR DESIGN/PRAGATI INN/pragati1.jpg";
import LatestVilla2 from "../assets/INTERIOR DESIGN/PRAGATI INN/pragati3.jpg";
import Slider1 from "../assets/INTERIOR DESIGN/RESIDENTIAL/img49.jpg";
import Slider2 from "../assets/INTERIOR DESIGN/PRAGATI INN/lobbykk.jpg";

function InteriorDesign() {
  const navigate = useNavigate();
  const location = useLocation();

  // Get dynamic heading from location state or default to 'Interior Design'
  const pageTitle = location.state?.title || "Interior Design";
  return (
    <>
      <div className="bg-black ">
        <Navbar />
        <div className="bg-black text-white min-h-screen">
          {/* Hero Section */}
          {/* <div
            className="relative h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${LatestInterior})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h1 className="text-xl md:text-6xl font-bold text-center">
                {pageTitle}
              </h1>
            </div>
          </div> */}

          {/* Content Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-6xl mx-auto">
              {/* <h2 className="text-3xl font-bold mb-8 text-[#c6a47e]">
              Transform Your Space with Expert Interior Design
            </h2> */}

              {/* <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Our Interior Design Services
                </h3>
                <p className="text-gray-300 mb-6">
                  We create stunning interior spaces that reflect your
                  personality and lifestyle. Our expert designers combine
                  functionality with aesthetics to deliver exceptional results.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Residential Interior Design</li>
                  <li>• Commercial Space Planning</li>
                  <li>• Custom Furniture Design</li>
                  <li>• Color Consultation</li>
                  <li>• Lighting Design</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <p className="text-gray-300 mb-6">
                  With years of experience in interior design, we understand how
                  to maximize space, enhance natural light, and create
                  environments that inspire and comfort.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Professional Design Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>3D Visualization & Rendering</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Project Management</span>
                  </div>
                </div>
              </div>
            </div> */}

              {/* Image Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                  Our {pageTitle} Portfolio
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  <img
                    src={interoir}
                    alt="Interior Design Project 1"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={Exterior}
                    alt="Exterior Design Project"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={Exterior1}
                    alt="Exterior Design Project 2"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={LatestResidential}
                    alt="Residential Project"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={LatestVilla}
                    alt="Villa Project 1"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={LatestVilla2}
                    alt="Villa Project 2"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Additional Content Sections */}
              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Our Design Process
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c6a47e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">1</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Consultation</h4>
                  <p className="text-gray-300">
                    We begin with understanding your vision, needs, and budget
                    requirements.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c6a47e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">2</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Design</h4>
                  <p className="text-gray-300">
                    Our team creates detailed plans and 3D visualizations for
                    your approval.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#c6a47e] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">3</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Implementation</h4>
                  <p className="text-gray-300">
                    We manage the entire project from start to finish with
                    attention to detail.
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
                    src={Slider1}
                    alt="Featured Project 1"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Modern Residential Design
                    </h4>
                    <p className="text-gray-300 mb-4">
                      A contemporary home featuring clean lines, open spaces,
                      and natural lighting.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Modern
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Residential
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252525]  rounded-lg overflow-hidden">
                  <img
                    src={Slider2}
                    alt="Featured Project 2"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Luxury Villa Interior
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Elegant interior design combining luxury with
                      functionality and comfort.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Luxury
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Villa
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

              {/* Call to Action */}
              <div className="text-center bg-[#252525]  rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our expert team bring your vision to life. Contact us
                  today for a consultation and discover how we can create the
                  perfect space for you.
                </p>
                <Link to="/contact">
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Get Started Today
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

export default InteriorDesign;
