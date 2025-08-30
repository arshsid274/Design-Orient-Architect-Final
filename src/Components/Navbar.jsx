import { useState, useEffect, useRef } from "react";
// import Logo from "../assets/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faBars,
  faXmark,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsDropdown, setProjectsDropdown] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const [mobileProjectsDropdown, setMobileProjectsDropdown] = useState(false);

  const projectCategories = [
    { name: "INTERIOR DESIGN", path: "/interior-design" },
    { name: "COMMERCIAL BUILDING DESIGN", path: "/commercial-design" },
    { name: "HOSPITALITY DESIGN", path: "/hospitality-design" },
    { name: "RESTURANTS", path: "/resturants" },
    { name: "LANDSCAPING PROJECTS", path: "/landscaping-design" },
    { name: "RESIDENTIAL PROJEJCTS", path: "/residential-design" },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProjectsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProjectClick = (category) => {
    navigate(category.path, { state: { title: category.name } });
    setProjectsDropdown(false);
    setMenuOpen(false);
  };

  return (
    <>
      <div className="bg-[black] w-full overflow-visible">
        {/* Top Nav Section */}
        <div className="flex relative items-center max-w-full overflow-hidden py-2 pt-8 pb-6">
          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden z-50 px-4">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <FontAwesomeIcon
                icon={menuOpen ? faXmark : faBars}
                className="text-white text-2xl"
              />
            </button>
          </div>

          {/* Logo + Brand */}
          <div className="flex justify-center items-center w-full px-4 md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <img src="logo.png" alt="" className="h-full w-[80px] max-w-full" />
            <h1
              className="text-[#c6a47e] text-sm sm:text-base md:text-xl lg:text-4xl  pl-2 font-medium uppercase"
              id="brand-title"
            >
              Design Orient Architects
            </h1>
          </div>
        </div>

        {/* Desktop Icons + Links */}
        <div className="flex justify-between items-center  md:py-4 px-3  ">
          {/* Social Icons - only visible on md and up */}
          <div className="hidden md:flex items-center gap-4">
            {/* <FontAwesomeIcon icon={faFacebook} className="text-white text-xl" /> */}
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-xl"
            />
            {/* <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" /> */}
            {/* <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" /> */}
          </div>

          {/* Navigation Menu - only visible on md and up */}
          <div className="hidden md:flex items-center ">
            <ul className="flex gap-6 font-normal uppercase pr-12">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? "text-[#c6a47e] font-semibold" : "text-white"
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "text-[#c6a47e] font-semibold" : "text-white"
                  }
                >
                  ABOUT US
                </NavLink>
              </li>

               <li>
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    isActive ? "text-[#c6a47e] font-semibold" : "text-white"
                  }
                >
                  Projects
                </NavLink>
              </li>
            
              {/* <li className="relative" ref={dropdownRef}>
                <div className="flex items-center">
                   <button
                    onClick={() => setProjectsDropdown(!projectsDropdown)}
                    className="text-white "
                  >
                  <NavLink
                    to="/project"
                    className={({ isActive }) =>
                      isActive
                        ? "text-[#c6a47e] font-semibold "
                        : "text-white hover:text-[#c6a47e] transition-colors "
                    }
                  >
                    Projects
                  </NavLink>
                 
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`text-xs transition-transform duration-300 ${
                        projectsDropdown ? "-rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
                {projectsDropdown && (
                  <div className="absolute top-full left-0 mt-3 w-64 bg-black border border-gray-700 rounded-lg shadow-xl z-[99999]">
                    <div className="py-2">
                      {projectCategories.map((category, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleProjectClick(category)}
                          className="block w-full text-left px-4 py-2 text-white hover:text-[#c6a47e] transition-colors text-sm"
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </li> */}

              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive ? "text-[#c6a47e] font-semibold" : "text-white"
                  }
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? "text-[#c6a47e] font-semibold" : "text-white"
                  }
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right-side Icons - only visible on md and up */}
          <div className="hidden md:flex items-center gap-4">
            <a href="mailto:Designerorients@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-xl"
              />
            </a>
          </div>
        </div>

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#1a1a1a] z-[99998] p-6 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <ul className="flex flex-col gap-4 pt-14 text-white uppercase">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-[#c6a47e] font-semibold" : "text-white"
                }
                onClick={() => setMenuOpen(false)}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-[#c6a47e] font-semibold" : "text-white"
                }
                onClick={() => setMenuOpen(false)}
              >
                ABOUT US
              </NavLink>
            </li>
            {/* Mobile Projects Dropdown */}

            <li>
              <div className="flex items-center justify-between">
                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    isActive ? "text-[#c6a47e] font-semibold" : "text-white"
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  PROJECTS
                </NavLink>

                <button
                  onClick={() =>
                    setMobileProjectsDropdown(!mobileProjectsDropdown)
                  }
                  className="text-white p-2"
                >
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`text-xs transition-transform duration-300 ${
                      mobileProjectsDropdown ? "-rotate-180" : ""
                    }`}
                  />
                </button>
              </div>

              {mobileProjectsDropdown && (
                <div className="ml-4 mt-2 space-y-2">
                  {projectCategories.map((category, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        handleProjectClick(category);
                        setMobileProjectsDropdown(false);
                      }}
                      className="block w-full text-left text-gray-300 hover:text-[#c6a47e] transition-colors"
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              )}
            </li>

            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "text-[#c6a47e] font-semibold" : "text-white"
                }
                onClick={() => setMenuOpen(false)}
              >
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-[#c6a47e] font-semibold" : "text-white"
                }
                onClick={() => setMenuOpen(false)}
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>

          <div className="flex justify-start gap-4 pt-6">
            {/* <FontAwesomeIcon icon={faFacebook} className="text-white text-xl" /> */}
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white text-xl"
            />
            {/* <FontAwesomeIcon icon={faTwitter} className="text-white text-xl" />
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-xl" /> */}

            <a href="mailto:Designerorients@gmail.com">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-white text-xl"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
