import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import landscaping1 from "../assets/INTERIOR DESIGN/naoki-suzuki-LKGHNKEJtIk-unsplash.jpg";
import landscaping2 from "../assets/INTERIOR DESIGN/adam-bignell-Eej-nuadMdo-unsplash.jpg";
import landscaping3 from "../assets/INTERIOR DESIGN/nathaniel-villaire-vEnZM2AfW2E-unsplash.jpg";
import landscaping4 from "../assets/INTERIOR DESIGN/tile-merchant-ireland-sTNjUy-vyT0-unsplash.jpg";
import landscaping5 from "../assets/INTERIOR DESIGN/victor-0NJ9urGXrIg-unsplash.jpg";
import landscaping6 from "../assets/INTERIOR DESIGN/jason-grant-6h55ZVQJTtI-unsplash.jpg";
import landscaping7 from "../assets/INTERIOR DESIGN/allen-y-cD-3eRIc9l8-unsplash.jpg";

function LandscapingProjects() {
  const navigate = useNavigate();
  const location = useLocation();

  const pageTitle = location.state?.title || "Landscaping Projects";

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
          style={{ backgroundImage: `url(${landscaping1})` }}
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
              Transformative Landscape Architecture & Design
            </h2> */}

              {/* <div className="grid md:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Our Landscaping Services
                </h3>
                <p className="text-gray-300 mb-6">
                  We create stunning outdoor environments that harmonize with
                  nature while enhancing the beauty and functionality of your
                  property. Our designs blend artistry with sustainability.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Garden Design & Planning</li>
                  <li>• Hardscape & Softscape Design</li>
                  <li>• Water Feature Installation</li>
                  <li>• Outdoor Living Spaces</li>
                  <li>• Sustainable Landscaping</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Why Choose Us?</h3>
                <p className="text-gray-300 mb-6">
                  With expertise in landscape architecture, we understand how to
                  create outdoor spaces that are both beautiful and
                  environmentally responsible, enhancing your property's value
                  and appeal.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Eco-Friendly Design Solutions</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Native Plant Integration</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-[#c6a47e] rounded-full mr-3"></span>
                    <span>Water Conservation Systems</span>
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
                    src={landscaping1}
                    alt="Landscaping Project 1"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={landscaping2}
                    alt="Landscaping Project 2"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={landscaping3}
                    alt="Landscaping Project 3"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={landscaping4}
                    alt="Landscaping Project 4"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={landscaping5}
                    alt="Landscaping Project 5"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                  <img
                    src={landscaping6}
                    alt="Landscaping Project 6"
                    className="w-full h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Landscaping Specializations
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Residential Gardens
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Beautiful private gardens designed to complement your home
                    and lifestyle.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Custom garden design</li>
                    <li>• Seasonal planting plans</li>
                    <li>• Outdoor entertainment areas</li>
                  </ul>
                </div>
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Commercial Landscapes
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Professional landscaping that enhances business properties
                    and creates welcoming environments.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Corporate campus design</li>
                    <li>• Retail landscape design</li>
                    <li>• Public space planning</li>
                  </ul>
                </div>
                <div className="bg-[#252525] rounded-lg p-6">
                  <h4 className="text-xl font-semibold mb-3 text-[#c6a47e]">
                    Water Features
                  </h4>
                  <p className="text-gray-300 mb-4">
                    Stunning water elements that add tranquility and visual
                    interest to any landscape.
                  </p>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Fountains & waterfalls</li>
                    <li>• Ponds & water gardens</li>
                    <li>• Irrigation systems</li>
                  </ul>
                </div>
              </div>
            </div> */}

              {/* <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-[#c6a47e]">
                Featured Landscape Projects
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-[#252525] rounded-lg overflow-hidden">
                  <img
                    src={landscaping6}
                    alt="Garden Design Project"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Luxury Garden Design
                    </h4>
                    <p className="text-gray-300 mb-4">
                      A sophisticated garden featuring native plants, water
                      features, and outdoor living spaces.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Garden
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Luxury
                      </span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252525] rounded-lg overflow-hidden">
                  <img
                    src={landscaping7}
                    alt="Commercial Landscape"
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h4 className="text-xl font-semibold mb-2">
                      Corporate Campus Landscape
                    </h4>
                    <p className="text-gray-300 mb-4">
                      Professional landscaping that creates an inspiring work
                      environment and enhances property value.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Commercial
                      </span>
                      <span className="bg-[#c6a47e] text-black px-3 py-1 rounded-full text-sm">
                        Corporate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

              <div className="text-center bg-[#252525] rounded-lg p-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Transform Your Outdoor Space?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let us create a landscape that enhances your property's beauty
                  and value. Contact us today to discuss your landscaping
                  vision.
                </p>
                <Link to="/contact">
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Start Your Landscape Project
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

export default LandscapingProjects;
