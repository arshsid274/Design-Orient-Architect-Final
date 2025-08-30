import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
function ContactUsForm() {
  return (
    <>
      <div className=" flex flex-col md:grid md:grid-cols-2 text-white     max-w-full ">
        <div className="relative  bg-[#252525] flex flex-col px-6 md:px-14 py-14  h-[500px] md:h-[600px] overflow-hidden ">
          <h2 className="text-[#c6a47e] text-xl md:text-3xl   font-medium  ">
            Contact Information
          </h2>
          <p className=" text-xs sm:text-sm md:text-base lg:text-lg py-5 flex gap-4">
            We are currently actively seeking applications from
            Architects,Architectural Interior Designers.Please send Resumes and
            Portfolios (Max 10mb) to Designerorients@gmail.com
          </p>
          <div className=" text-xs sm:text-sm md:text-base lg:text-lg py-5 flex gap-6 ">
            <FontAwesomeIcon icon={faPhone} size="lg" className="text-white" />{" "}
            <a href="tel:+917599255046">
              <h4 className="">+91-7599255046</h4>
            </a>
          </div>
          <div className="text-xs sm:text-sm md:text-base lg:text-lg py-5 flex gap-6">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="lg"
              className="text-white"
            />{" "}
            <a href="mailto:Designerorients@gmail.com">
              <h4> Designerorients@gmail.com</h4>
            </a>
          </div>
          <div className=" text-xs sm:text-sm md:text-base lg:text-lg py-5 flex gap-6">
            <FontAwesomeIcon
              icon={faLocationDot}
              size="lg"
              className="text-white"
            />{" "}
            <a href="https://www.google.com/maps/place/Sales+Tax+Department/@26.7263138,83.3843996,17z/data=!3m1!4b1!4m6!3m5!1s0x3991437a8af2e49f:0xb783bafc1a649919!8m2!3d26.7263138!4d83.3869745!16s%2Fg%2F11cjtxr597?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">
              <h4>
                47,sale tax office,Taramandal,Gorakhpur,Uttar Pradesh 273017
              </h4>{" "}
            </a>
          </div>
          <div className="absolute bottom-5 flex items-center gap-4">
            {/* <FontAwesomeIcon icon={faFacebook} className="text-white text-2xl" /> */}
            {/* <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-2xl"
            /> */}
            {/* <FontAwesomeIcon icon={faTwitter} className="text-white text-2xl" />
               <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" /> */}
          </div>
          <div className="absolute -bottom-12 -right-10 md:-bottom-18 md:-right-15 w-[150px] h-[150px] md:w-[250px] md:h-[250px] bg-[#8c7761] rounded-full z-2"></div>
          <div className="absolute bottom-12 right-12 md:bottom-18 md:right-24 w-[70px] h-[70px] md:w-[120px] md:h-[120px] bg-[#c6a47e] rounded-full z-3"></div>
        </div>
        <div className=" flex flex-col justify-evenly px-12 py-12">
          <div className="flex w-full justify-evenly items-center gap-16 ">
            <fieldset className="flex-1">
              <legend className="text-white text-sm font-semibold mb-1">
                First Name
              </legend>
              <input
                type="text"
                className="w-full bg-black border-0 border-b border-white text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-white"
                placeholder=""
              />
            </fieldset>

            <fieldset className="flex-1">
              <legend className="text-white text-sm font-semibold mb-1 ">
                Last Name
              </legend>
              <input
                type="text"
                className="w-full bg-black border-0 border-b border-white text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-white"
                placeholder=""
              />
            </fieldset>
          </div>

          <div className="flex w-full justify-evenly items-center gap-16 mt-6">
            <fieldset className="flex-1">
              <div className="validator-hint text-sm text-white">Email</div>
              <input
                className="w-full bg-black border-0 border-b border-white text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-white"
                type="email"
                required
                placeholder="mail@site.com"
              />
            </fieldset>

            <fieldset className="flex-1">
              <p className="validator-hint text-sm text-white">Phone Number</p>
              <input
                type="tel"
                className="w-full bg-black border-0 border-b border-white text-white placeholder-transparent focus:outline-none focus:ring-0 focus:border-white"
                required
                placeholder="Phone"
                pattern="[0-9]*"
                minLength="10"
                maxLength="10"
                title="Must be 10 digits"
              />
            </fieldset>
          </div>

          <div className="text-white pt-12">
            <h2 className="text-lg font-semibold mb-4">Select Subject?</h2>
            <div className="flex flex-wrap gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  value="general"
                  defaultChecked
                  className="appearance-none w-4 h-4 rounded-full border border-white bg-[#ccc] checked:bg-[#c6a47e] checked:border-white checked:ring-2 checked:ring-[#c6a47e]"
                />
                <span className="text-white">General Inquiry</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  value="consultation"
                  className="appearance-none w-4 h-4 rounded-full border border-white bg-[#ccc] checked:bg-[#c6a47e] checked:border-white checked:ring-2 checked:ring-[#c6a47e]"
                />
                <span className="text-white">Consultation</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  value="career"
                  className="appearance-none w-4 h-4 rounded-full border border-white bg-[#ccc] checked:bg-[#c6a47e] checked:border-white checked:ring-2 checked:ring-[#c6a47e]"
                />
                <span className="text-white">Career</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="subject"
                  value="internship"
                  className="appearance-none w-4 h-4 rounded-full border border-white bg-[#ccc] checked:bg-[#c6a47e] checked:border-white checked:ring-2 checked:ring-[#c6a47e]"
                />
                <span className="text-white">Internship</span>
              </label>
            </div>
          </div>

          <div class="text-white w-full pt-12">
            <label for="message" class="block text-white mb-2">
              Message
            </label>
            <textarea
              id="message"
              class="w-full bg-black border-0 border-b border-white text-white placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-white resize-none"
              placeholder="Write your message.."
              rows="4"
            ></textarea>

            <div class="w-full flex justify-center md:justify-end mt-6 pr-3">
              <button class="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3 px-6 rounded-md transition-all">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsForm;
