import { useState } from 'react';
import LatestInterior from "../assets/INTERIOR DESIGN/RESIDENTIAL/img49.jpg";

import LatestCommercial from "../assets/Latest_Commercial.jpg";
import LatestHospitality from "../assets/HOSPITALITY/ASHOKA HOTEL/DSC03719.png";
import LatestVilla from "../assets/INTERIOR DESIGN/PRAGATI INN/pragati3.jpg";
import LatestLandscaping from "../assets/INTERIOR DESIGN/tile-merchant-ireland-sTNjUy-vyT0-unsplash.jpg";
import LatestResidencial from "../assets/INTERIOR DESIGN/PRAGATI INN/lobbykk.jpg";



import interoir from "../assets/INTERIOR DESIGN/RESIDENTIAL/img35.jpg";
import Exterior from "../assets/INTERIOR DESIGN/RESIDENTIAL/img77.jpg";
import Exterior1 from "../assets/INTERIOR DESIGN/RESIDENTIAL/img50.jpg";
import LatestVilla3 from "../assets/INTERIOR DESIGN/RESIDENTIAL/img64.jpg";
import LatestResidential2 from "../assets/INTERIOR DESIGN/PRAGATI INN/pragati1.jpg";
import LatestVilla2 from "../assets/INTERIOR DESIGN/PRAGATI INN/pragati3.jpg";


import LatestHospitality2 from "../assets/HOSPITALITY/HOTEL HAVANA/Room view 1.jpg";
import SevenInn from "../assets/HOSPITALITY/HOTEL HAVANA/Room view 3.jpg";
import Ashoka from "../assets/HOSPITALITY/HOTEL HAVANA/Room view 2.jpg";
import Slider5 from "../assets/HOSPITALITY/HOTEL HAVANA/WhatsApp Image 2025-03-08 at 6.36.33 PM (1).jpeg";
import WatchUsImage from "../assets/HOSPITALITY/HOTEL HAVANA/WhatsApp Image 2025-03-08 at 6.36.33 PM (2).jpeg";
import Philosphy from "../assets/HOSPITALITY/HOTEL HAVANA/WhatsApp Image 2025-03-08 at 6.36.33 PM (3).jpeg";



import hospital1 from "../assets/HOSPITALITY/ASHOKA HOTEL/DSC03719.png";
import hospital2 from "../assets/HOSPITALITY/ASHOKA HOTEL/WhatsApp Image 2025-06-30 at 12.00.02_0a252b1b.jpg";
import hospital3 from "../assets/HOSPITALITY/ASHOKA HOTEL/DSC03768.png";
import hospital4 from "../assets/HOSPITALITY/ASHOKA HOTEL/WhatsApp Image 2025-06-30 at 12.00.14_de096187.jpg";
import hospital5 from "../assets/HOSPITALITY/ASHOKA HOTEL/DSC03831.png";
import hospital6 from "../assets/HOSPITALITY/ASHOKA HOTEL/DSC03841.png";



import villa1 from "../assets/ROOF TOP CAFE/01ps.png";
import villa2 from "../assets/ROOF TOP CAFE/04ps.png";
import villa3 from "../assets/ROOF TOP CAFE/07ps.png";
import villa4 from "../assets/SEVEN INN RESTAURANT/01.png";
import villa5 from "../assets/SEVEN INN RESTAURANT/02.png";
import villa6 from "../assets/INTERIOR DESIGN/PRAGATI INN/pragati3.jpg";



import landscaping1 from "../assets/INTERIOR DESIGN/naoki-suzuki-LKGHNKEJtIk-unsplash.jpg";
import landscaping2 from "../assets/INTERIOR DESIGN/adam-bignell-Eej-nuadMdo-unsplash.jpg";
import landscaping3 from "../assets/INTERIOR DESIGN/nathaniel-villaire-vEnZM2AfW2E-unsplash.jpg";
import landscaping4 from "../assets/INTERIOR DESIGN/tile-merchant-ireland-sTNjUy-vyT0-unsplash.jpg";
import landscaping5 from "../assets/INTERIOR DESIGN/victor-0NJ9urGXrIg-unsplash.jpg";
import landscaping6 from "../assets/INTERIOR DESIGN/jason-grant-6h55ZVQJTtI-unsplash.jpg";



import residential1 from "../assets/INTERIOR DESIGN/PRAGATI INN/image 02.jpg";
import residential2 from "../assets/INTERIOR DESIGN/PRAGATI INN/WhatsApp Image 2025-06-30 at 12.00.14_348e1fb8.jpg";
import residential3 from "../assets/INTERIOR DESIGN/PRAGATI INN/pragati1.jpg";
import residential4 from "../assets/SEVEN INN RESTAURANT/03.png";
import residential5 from "../assets/ROOF TOP CAFE/04ps.png";
import residential6 from "../assets/SEVEN INN RESTAURANT/01.png";


import Gallery from "../Components/Gallery"

const interiorDesignImages = [
    { src: interoir, alt: "Interior Design" },
    { src: Exterior, alt: "Exterior Design" },
    { src: Exterior1, alt: "Exterior Design 1" },
    { src: LatestVilla3, alt: "Latest Villa 3" },
    { src: LatestResidential2, alt: "Latest Residential 2" },
    { src: LatestVilla2, alt: "Latest Villa 2" },
];

const commercialBuildingImages = [
  { src: LatestHospitality2, alt: "LatestHospitality2" },
    { src: SevenInn, alt: "SevenInn" },
    { src: Ashoka, alt: "Ashoka" },
    { src: Slider5, alt: "Slider5" },
    { src: WatchUsImage, alt: "WatchUsImage" },
    { src: Philosphy, alt: "Philosphy" },
];

const hospitalityDesignImages = [
   { src: hospital1, alt: "hospital1" },
    { src: hospital2, alt: "hospital2" },
    { src: hospital3, alt: "hospital3" },
    { src: hospital4, alt: "hospital4" },
    { src: hospital5, alt: "hospital5" },
    { src: hospital6, alt: "hospital6" },
];

const Resturants=[ 
    { src: villa1, alt: "villa1" },
    { src: villa2, alt: "villa2" },
    { src: villa3, alt: "villa3" },
    { src: villa4, alt: "villa4" },
    { src: villa5, alt: "villa5" },
    { src: villa6, alt: "villa6" },
];

const landscapingProjects = [
  { src: landscaping1, alt: "landscaping1" },
    { src: landscaping2, alt: "landscaping2" },
    { src: landscaping3, alt: "landscaping3" },
    { src: landscaping4, alt: "landscaping4" },
    { src: landscaping5, alt: "landscaping5" },
    { src: landscaping6, alt: "landscaping6" },
];

const residentialProjects = [
   { src: residential1, alt: "residential1" },
    { src: residential2, alt: "residential2" },
    { src: residential3, alt: "residential3" },
    { src: residential4, alt: "residential4" },
    { src: residential5, alt: "residential5" },
    { src: residential6, alt: "residential6" },
];

function LatestWork() {
   const [showInteriorDesign, setInteriorDesign] = useState(false);
   const [showCommercialBuilding,setCommercialBuilding] = useState(false);
   const [showHospitalityDesign,setHospitalityDesign] = useState(false);
   const [ShowResturants,setResturants] = useState(false);
   const [showLandscapingProjects,setLandscapingProjects] = useState(false);
   const [showResidentialProject,setResidentialProject] = useState(false);

   const closeAllModals = () => {
     setInteriorDesign(false);
     setCommercialBuilding(false);
     setHospitalityDesign(false);
     setResturants(false);
     setLandscapingProjects(false);
     setResidentialProject(false);
   };

   const openModal = (modalName) => {
  // Check if the clicked modal is already open
  const isCurrentModalOpen = 
    (modalName === 'interior' && showInteriorDesign) ||
    (modalName === 'commercial' && showCommercialBuilding) ||
    (modalName === 'hospitality' && showHospitalityDesign) ||
    (modalName === 'restaurants' && ShowResturants) ||
    (modalName === 'landscaping' && showLandscapingProjects) ||
    (modalName === 'residential' && showResidentialProject);

  // Always close all modals first
  closeAllModals();

  // If the clicked modal wasn't open, open it and scroll to it
  if (!isCurrentModalOpen) {
    switch(modalName) {
      case 'interior':
        setInteriorDesign(true);
        break;
      case 'commercial':
        setCommercialBuilding(true);
        break;
      case 'hospitality':
        setHospitalityDesign(true);
        break;
      case 'restaurants':
        setResturants(true);
        break;
      case 'landscaping':
        setLandscapingProjects(true);
        break;
      case 'residential':
        setResidentialProject(true);
        break;
    }
    
    // Scroll to the modal after a short delay to ensure it's rendered
    setTimeout(() => {
      const element = document.getElementById(`${modalName}-modal`);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }
};

  return (
    <>
      <div>
        <h2 className="uppercase text-white text-xl md:text-3xl text-center py-12 lg:mt-10 mt-0 ">
          See Our <span className="text-[#c6a47e]">Latest Work </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-white">
  <div className="">
    <div
      style={{ backgroundImage: `url(${LatestInterior})` }}
      className="bg-cover bg-center h-48 md:h-64 flex items-end cursor-pointer hover:opacity-90 transition-opacity"
       onClick={() => openModal('interior')}
    >
      <p className="font-bold text-sm md:text-lg backdrop-brightness-50 w-full px-2 py-2 ">
        Interior Design
      </p>
    </div>

    <div
      style={{ backgroundImage: `url(${LatestCommercial})` }}
      className="bg-cover bg-center h-48 md:h-64 flex items-end cursor-pointer hover:opacity-90 transition-opacity"
      onClick={() => openModal('commercial')}
    >
      <p className="font-bold text-sm md:text-lg backdrop-brightness-50 w-full px-2 py-2">
        Institutional Building Design 
      </p>
    </div>
  </div>

  <div
    style={{ backgroundImage: `url(${LatestHospitality})` }}
    className="bg-cover bg-center h-48 md:h-96 xl:h-full flex items-end cursor-pointer hover:opacity-90 transition-opacity"
   onClick={() => openModal('hospitality')}
  >
    <p className="font-bold text-sm md:text-lg backdrop-brightness-50 w-full px-2 py-2">
      Hospitality Design
    </p>
  </div>

  <div className="">
    <div
      style={{ backgroundImage: `url(${LatestVilla})` }}
      className="bg-cover bg-center h-48 md:h-64 flex items-end cursor-pointer hover:opacity-90 transition-opacity"
       onClick={() => openModal('restaurants')}
    >
      <p className="font-bold text-sm md:text-lg backdrop-brightness-50 w-full px-2 py-2">
        Restraunt Design
      </p>
    </div>

    <div
      style={{ backgroundImage: `url(${LatestLandscaping})` }}
      className="bg-cover bg-center h-48 md:h-64 flex items-end cursor-pointer hover:opacity-90 transition-opacity"
      onClick={() => openModal('landscaping')}
    >
      <p className="font-bold text-sm md:text-lg backdrop-brightness-50 w-full px-2 py-2">
        Landscaping Projects
      </p>
    </div>
  </div>

  <div
    style={{ backgroundImage: `url(${LatestResidencial})` }}
    className="bg-cover bg-center h-48 md:h-96 xl:h-full flex items-end cursor-pointer hover:opacity-90 transition-opacity"
     onClick={() => openModal('residential')}
  >
    <p className="font-bold text-sm md:text-lg backdrop-brightness-50 w-full px-2 py-2">
      Residential Project
    </p>
  </div>
</div>

        {showInteriorDesign && (
        <div id="interior-modal">

          

          <div className="mb-12">
             <h2 className="uppercase text-white text-xl md:text-3xl text-center py-12 lg:mt-10 mt-0 ">
          Our Interior <span className="text-[#c6a47e]">Design Portfolio </span>
        </h2>

                          
                          <Gallery images={interiorDesignImages}></Gallery>





                          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                            <img
                              src={interoir}
                              alt="Interior Design Project 1"
                              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                            <img
                              src={Exterior}
                              alt="Exterior Design Project"
                              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                            <img
                              src={Exterior1}
                              alt="Exterior Design Project 2"
                              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                            <img
                              src={LatestResidential2}
                              alt="Residential Project"
                              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                            <img
                              src={LatestVilla3}
                              alt="Villa Project 1"
                              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                            <img
                              src={LatestVilla2}
                              alt="Villa Project 2"
                              className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-300"
                            />
                          </div> */}
                        </div>

                        <div className="text-center bg-[#252525]  rounded-lg p-8 my-12">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our expert team bring your vision to life. Contact us
                  today for a consultation and discover how we can create the
                  perfect space for you.
                </p>
              
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Get Started Today
                  </button>
                
              </div>
        </div>
        )}
         {showCommercialBuilding && (
        <div id="commercial-modal">
          <div className="mb-12">
                          <h2 className="uppercase text-white text-xl md:text-3xl text-center py-12 lg:mt-10 mt-0 ">
          Our Insititutional <span className="text-[#c6a47e]">Design Portfolio </span>
        </h2>
                          <Gallery images={commercialBuildingImages}></Gallery>
                          </div>

                        <div className="text-center bg-[#252525]  rounded-lg p-8 my-12">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our expert team bring your vision to life. Contact us
                  today for a consultation and discover how we can create the
                  perfect space for you.
                </p>
              
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Get Started Today
                  </button>
                
              </div>
        </div>
        )}
         {showHospitalityDesign && (
        <div id="hospitality-modal">
          <div className="mb-12">
                          <h2 className="uppercase text-white text-xl md:text-3xl text-center py-12 lg:mt-10 mt-0 ">
          Our Hospitality <span className="text-[#c6a47e]">Design Portfolio </span>
        </h2>
                          <Gallery images={hospitalityDesignImages}></Gallery>
                          </div>

                        <div className="text-center bg-[#252525]  rounded-lg p-8 my-12">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our expert team bring your vision to life. Contact us
                  today for a consultation and discover how we can create the
                  perfect space for you.
                </p>
              
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Get Started Today
                  </button>
                
              </div>
        </div>
        )}
         {ShowResturants && (
        <div id="restaurants-modal">
          <div className="mb-12">
                          <h2 className="uppercase text-white text-xl md:text-3xl text-center py-12 lg:mt-10 mt-0 ">
          Our  Restraunt  <span className="text-[#c6a47e]">Design Portfolio </span>
        </h2>
                          <Gallery images={Resturants}></Gallery>
                          </div>

                        <div className="text-center bg-[#252525]  rounded-lg p-8 my-12">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our expert team bring your vision to life. Contact us
                  today for a consultation and discover how we can create the
                  perfect space for you.
                </p>
              
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Get Started Today
                  </button>
                
              </div>
        </div>
        )}
        {showLandscapingProjects && (
        <div id="landscaping-modal">
          <div className="mb-12">
                          <h2 className="uppercase text-white text-xl md:text-3xl text-center py-12 lg:mt-10 mt-0 ">
          Our Landscaping <span className="text-[#c6a47e]">Design Portfolio </span>
        </h2>
                          <Gallery images={landscapingProjects}></Gallery>
                          </div>

                        <div className="text-center bg-[#252525]  rounded-lg p-8 my-12">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our expert team bring your vision to life. Contact us
                  today for a consultation and discover how we can create the
                  perfect space for you.
                </p>
              
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Get Started Today
                  </button>
                
              </div>
        </div>
        )}
{showResidentialProject && (
        <div id="residential-modal">
          <div className="mb-12">
                          <h2 className="uppercase text-white text-xl md:text-3xl text-center py-12 lg:mt-10 mt-0 ">
          Our Residential <span className="text-[#c6a47e]">Design Portfolio </span>
        </h2>
                          <Gallery images={residentialProjects}></Gallery>
                          </div>

                        <div className="text-center bg-[#252525]  rounded-lg p-8 my-12">
                <h3 className="text-2xl font-semibold mb-4 text-[#c6a47e]">
                  Ready to Transform Your Space?
                </h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Let our expert team bring your vision to life. Contact us
                  today for a consultation and discover how we can create the
                  perfect space for you.
                </p>
              
                  <button className="bg-[#c6a47e] text-black px-8 py-3 rounded-lg font-semibold hover:bg-opacity-80 transition-colors duration-300">
                    Get Started Today
                  </button>
                
              </div>
        </div>
        )}


      </div>
    </>
  );
}

export default LatestWork;
