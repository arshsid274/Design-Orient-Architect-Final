// import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-black text-white px-10 py-12 flex flex-col md:flex-row justify-evenly items-start gap-10">
          {/* Logo and About */}
          <div className="flex flex-col max-w-md">
            <div className="flex items-center mb-4">
              <img
                src="logo.png"
                alt="Design Orient Architects"
                className=" h-[60px]"
              />
              <h3 className="text-[#c6a47e] md:text-xl lg:text-2xl  pl-3 font-semibold uppercase">
                Design Orient Architects
              </h3>
            </div>
            <p className="text-sm leading-relaxed">
              Design Orient Architects is a full-service architectural firm
              committed to delivering exceptional design solutions tailored to
              each client's unique needs. Our holistic approach ensures that
              every aspect of your project, from initial concept to final
              construction, is handled with the utmost care and attention to
              detail.
            </p>

            <div className=" flex items-center  gap-4 py-8">
              {/* <FontAwesomeIcon
                icon={faFacebook}
                className="text-white text-xl"
              /> */}
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-white text-xl"
              />
              {/* <FontAwesomeIcon
                icon={faTwitter}
                className="text-white text-xl"
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-white text-xl"
              /> */}
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col lg:pt-4">
            <h3 className="text-[#c6a47e] text-lg font-semibold mb-4 uppercase">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/residential-design"
                  state={{ title: "Residential Design" }}
                  className="hover:text-[#c6a47e] transition-colors"
                >
                  Residential Design
                </Link>
              </li>
              <li>
                <Link
                  to="/interior-design"
                  state={{ title: "Interior Design" }}
                  className="hover:text-[#c6a47e] transition-colors"
                >
                  Interior Design
                </Link>
              </li>
              <li>
                <Link
                  to="/landscaping-design"
                  state={{ title: "Landscaping Projects" }}
                  className="hover:text-[#c6a47e] transition-colors"
                >
                  Landscaping
                </Link>
              </li>
              <li>Detailed and Phased Planning</li>
              <li>Renovations and Remodels</li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="flex flex-col lg:pt-4">
            <h3 className="text-[#c6a47e] text-lg font-semibold mb-4 uppercase">
              Contacts
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>{" "}
                <a href="https://www.google.com/maps/place/Sales+Tax+Department/@26.7263138,83.3843996,17z/data=!3m1!4b1!4m6!3m5!1s0x3991437a8af2e49f:0xb783bafc1a649919!8m2!3d26.7263138!4d83.3869745!16s%2Fg%2F11cjtxr597?entry=ttu&g_ep=EgoyMDI1MDQxNi4xIKXMDSoASAFQAw%3D%3D">
                  47, Sale Tax Office, Taramandal, Gorakhpur, Uttar Pradesh
                  27301
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+917599255046">+91 75992 55046</a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span> <a href="tel:+917355433269">+91 73554 33269</a>
              </li>
              <li className="flex items-center gap-2">
                <span>✉️</span>{" "}
                <a href="mailto:designorients@gmail.com">
                  designorients@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-[#c6a47e] px-6 py-4 lg:flex justify-between w-full ">
          <h4>© 2025 Design Orient Architects. All rights reserved.</h4>
          <h4>
            <a
              href="https://www.shineinfosolutions.in/"
              target="_blank"
              className="text-[#c6a47e]"
            >
              Developed By Shine Infosolution
            </a>
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Footer;
