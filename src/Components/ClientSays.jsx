import {  faCaretRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {  faGreaterThan,faLessThan } from '@fortawesome/free-solid-svg-icons';
import ceo1Img from "../assets/Ceo1.jpg";
import ceo2Img from "../assets/Ceo2.jpg";
import ceo3Img from "../assets/Ceo3.jpg";


function ClientSays() {
    return (

        <>

        {/* desktop view */}
        <div className="hidden md:block py-16 pb-[100px]">
        <h2 className="uppercase  text-white text-xl md:text-3xl text-center py-5  md:py-5">What <span className="text-[#c6a47e]" >Our client Says</span>  </h2>

        
        <div className="grid grid-cols-3 text-white gap-4
         md:gap-8  sm:px-12 md:py-5 ">
            <div className="relative border border-[#c6a47e] bg-[#252525] text-white md:h-90 p-6 flex flex-col items-center justify-center text-center">
      {/* Decorative corner lines */}
      <div className="absolute top-2 left-4 w-px h-10 md:h-24 bg-[#c6a472]" />
      <div className="absolute top-4 left-2 h-px w-10 md:w-24 bg-[#c6a472]" />
      <div className="absolute bottom-2 right-4 w-px h-10 md:h-24 bg-[#c6a472]" />
      <div className="absolute bottom-4 right-2 h-px w-10 md:w-24 bg-[#c6a472]" />

      <div className='absolute -bottom-18 border-2 border-[#c6a47e] p-4 flex flex-col items-center justify-center'>

      <img src={ceo1Img} alt="" className='w-[100px] h-[100px] ' />
      </div>

      

    

      {/* Description */}
      <p className="hidden lg:block text-sm max-w-xl">
        Our residential projects range from contemporary urban apartments to sprawling country estates. <br />
        From corporate offices to retail spaces and hospitality venues, our commercial projects are designed
        to enhance productivity and provide a welcoming environment for clients and customers.
      </p>

      <div className=' hidden md:flex flex-row gap-2 text-2xl py-3 text-[#c6a472]'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
     
      <div className='flex flex-col gap-1'>
        <h2 className='text-lg'>Devid Matin</h2>
        <h3 className='text-[#c6a472] text-base'>CEO FOUNDER</h3>
      </div>
           </div>
           <div className="relative border border-[#c6a47e] bg-[#252525] text-white md:h-90  p-6 flex flex-col items-center justify-center text-center">
      {/* Decorative corner lines */}
      <div className="absolute top-2 left-4 w-px h-10 md:h-24 bg-[#c6a472]" />
      <div className="absolute top-4 left-2 h-px w-10 md:w-24 bg-[#c6a472]" />
      <div className="absolute bottom-2 right-4 w-px h-10 md:h-24 bg-[#c6a472]" />
      <div className="absolute bottom-4 right-2 h-px w-10 md:w-24 bg-[#c6a472]" />

      <div className='absolute -bottom-18 border-2 border-[#c6a47e] p-4 flex flex-col items-center justify-center'>

      <img src={ceo2Img} alt="" className='w-[100px] h-[100px] ' />
      </div>



      {/* Description */}
      <p className="hidden lg:block  text-sm max-w-xl">
      Our interior design services transform interiors into inviting and efficient spaces. Whether it’s a cozy home or a dynamic workplace, we focus on creating interiors that are visually appealing and perfectly suited to their intended use.
      </p>

      <div className='hidden md:flex flex-row gap-2 text-2xl py-3 text-[#c6a472]'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
     
      <div className='flex flex-col gap-1'>
        <h2 className='text-lg'>David Martin</h2>
        <h3 className='text-[#c6a472] text-base'>CEO FOUNDER</h3>
      </div>
           </div>
           <div className="relative border border-[#c6a47e] bg-[#252525] text-white md:h-90  p-6 flex flex-col items-center justify-center text-center">
      {/* Decorative corner lines */}
      
      <div className="absolute top-2 left-4 w-px h-10 md:h-24 bg-[#c6a472]" />
      <div className="absolute top-4 left-2 h-px w-10 md:w-24 bg-[#c6a472]" />
      <div className="absolute bottom-2 right-4 w-px h-10 md:h-24 bg-[#c6a472]" />
      <div className="absolute bottom-4 right-2 h-px w-10 md:w-24 bg-[#c6a472]" />

      <div className='absolute -bottom-18 border-2 border-[#c6a47e] p-4 flex flex-col items-center justify-center'>

      <img src={ceo3Img} alt="" className='w-[100px] h-[100px] ' />
      </div>


    

      {/* Description */}
      <p className="hidden lg:block text-sm max-w-xl">
      Our landscape designs bring outdoor spaces to life. From serene garden retreats to dynamic public spaces, our landscaping projects are crafted to enhance the natural beauty and functionality of their surroundings.
     </p>

     <div className='hidden md:flex flex-row gap-2 text-2xl py-3 text-[#c6a472]'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /></div>
     
      <div className='flex flex-col gap-1'>
        <h2 className='text-lg' >David Martin</h2>
        <h3 className='text-[#c6a472] text-base'>CEO FOUNDER</h3>
      </div>
           </div>

         
          </div>
          {/* <div className='py-8 flex justify-center no-flex  xl:py-20'> 
  <button className="bg-[#c6a47e] w-[30%] sm:w-[20%] md:w-[20%] xl:w-[25%]  py-2  xl:py-4 text-white text-[11px] font-bold md:text-[10px] xl:text-[20px] uppercase">Read More services <span><FontAwesomeIcon icon={faCaretRight} /></span> </button>
  </div> */}
           



        
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
  <div className="py-5 px-4 bg-black relative">
    <h2 className="uppercase text-white text-xl text-center py-5">
      What <span className="text-[#c6a47e]">Our client Says</span>
    </h2>

    <Carousel
      showArrows={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
      autoPlay={false}
      emulateTouch
      renderArrowPrev={(onClickHandler, _hasPrev, label) => (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="absolute top-1/2 left-2 -translate-y-1/2 z-10 bg-transparent text-[#c6a47e] text-2xl w-10 h-10 flex items-center justify-center border-2 border-[#c6a47e] rounded-full"
        >
          <FontAwesomeIcon icon={faLessThan} />
        </button>
      )}
      renderArrowNext={(onClickHandler, _hasNext, label) => (
        <button
          type="button"
          onClick={onClickHandler}
          title={label}
          className="absolute top-1/2 right-2 -translate-y-1/2 z-10 bg-transparent text-[#c6a47e] text-2xl w-10 h-10 flex items-center justify-center border-2 border-[#c6a47e] rounded-full"
        >
          <FontAwesomeIcon icon={faGreaterThan} />
        </button>
      )}
    >
      {/* Slide 1 */}
      <div className="relative border border-[#c6a47e] bg-[#252525] text-white p-6 rounded-lg flex flex-col items-center justify-between text-center h-[520px]">
        <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
        <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
        <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
        <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />

        <img
          src={ceo1Img}
          alt="Devid Matin"
          className="w-[200px] h-[300px] object-cover border-2 border-[#c6a47e] p-1 mb-4"
        />

        <p className="text-sm mb-4">
          Our residential projects range from contemporary urban apartments to sprawling country estates. From corporate offices to retail spaces and hospitality venues, our commercial projects are designed to enhance productivity and provide a welcoming environment.
        </p>

        <div className="flex gap-1 text-xl text-[#c6a472] mb-2">
          {[...Array(5)].map((_, idx) => (
            <FontAwesomeIcon icon={faStar} key={idx} />
          ))}
        </div>

        <div>
          <h2 className="text-lg">Devid Matin</h2>
          <h3 className="text-[#c6a472] text-base">CEO FOUNDER</h3>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="relative border border-[#c6a47e] bg-[#252525] text-white p-6 rounded-lg flex flex-col items-center justify-between text-center h-[520px]">
        <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
        <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
        <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
        <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />

        <img
          src={ceo2Img}
          alt="Devid Matin"
          className="w-[200px] h-[300px] object-cover border-2 border-[#c6a47e] p-1 mb-4"
        />

        <p className="text-sm mb-4">
          Our interior design services transform interiors into inviting and efficient spaces. Whether it’s a cozy home or a dynamic workplace, we create spaces that are visually appealing and functionally perfect.
        </p>

        <div className="flex gap-1 text-xl text-[#c6a472] mb-2">
          {[...Array(5)].map((_, idx) => (
            <FontAwesomeIcon icon={faStar} key={idx} />
          ))}
        </div>

        <div>
          <h2 className="text-lg">Devid Matin</h2>
          <h3 className="text-[#c6a472] text-base">CEO FOUNDER</h3>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="relative border border-[#c6a47e] bg-[#252525] text-white p-6 rounded-lg flex flex-col items-center justify-between text-center h-[520px]">
        <div className="absolute top-2 left-4 w-px h-10 bg-[#c6a472]" />
        <div className="absolute top-4 left-2 h-px w-10 bg-[#c6a472]" />
        <div className="absolute bottom-2 right-4 w-px h-10 bg-[#c6a472]" />
        <div className="absolute bottom-4 right-2 h-px w-10 bg-[#c6a472]" />

        <img
          src={ceo3Img}
          alt="Devid Matin"
          className="w-[200px] h-[300px] object-cover border-2 border-[#c6a47e] p-1 mb-4"
        />

        <p className="text-sm mb-4">
          Our landscape designs bring outdoor spaces to life. From serene garden retreats to vibrant public areas, we enhance both aesthetics and functionality of outdoor environments.
        </p>

        <div className="flex gap-1 text-xl text-[#c6a472] mb-2">
          {[...Array(5)].map((_, idx) => (
            <FontAwesomeIcon icon={faStar} key={idx} />
          ))}
        </div>

        <div>
          <h2 className="text-lg">Devid Matin</h2>
          <h3 className="text-[#c6a472] text-base">CEO FOUNDER</h3>
        </div>
      </div>
    </Carousel>
  </div>
</div>





        </>
    );
}

export default ClientSays;