import React from "react";
import Ashoka from "../assets/hotelleaf.jpg";
import Seven from "../assets/dirt'oFF .png";
import Detailling from "../assets/detailing.png";
import Gda from "../assets/gda.png";
import Havana from "../assets/havana.png";
import Maapas from "../assets/maapas.png";
import Pragati from "../assets/pragati.png";
import Samasti from "../assets/samasti.png";

import "./Marquee.css";

function Marquee() {
  const items = [
    Ashoka,
    Seven,
    Detailling,
    Gda,
    Havana,
    Maapas,
    Pragati,
    Samasti,
    Ashoka,
    Seven,
    Detailling,
  ];

  return (
    <>
      <div className="pt-16 pb-2">
        <h1 className="text-white text-center text-xl md:text-3xl mb-8">
          Our <span className="text-[#c6a47e]">Clients</span>{" "}
        </h1>
        <div className="marquee marquee--6 h-32 flex items-center mb-0">
          {items.map((item, index) => (
            <img
              key={index}
              className="marquee__item"
              src={item}
              width="150"
              height="100"
              alt=""
              style={{
                "--marquee-item-index": index + 1,
                objectFit: "contain",
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Marquee;
