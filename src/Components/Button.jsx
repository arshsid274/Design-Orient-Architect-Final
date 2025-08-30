import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/services", { state: { scrollToId: "target" } });
  };

  return (
    <div className="py-8 flex justify-center px-4">
      <button
        onClick={handleClick}
        className="bg-[#c6a47e] w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-lg py-3 md:py-4 text-white text-sm md:text-base lg:text-lg font-bold uppercase cursor-pointer rounded hover:bg-opacity-90 transition-colors duration-300"
      >
        Read More Services{" "}
        <span>
          <FontAwesomeIcon icon={faCaretRight} />
        </span>
      </button>
    </div>
  );
}

export default Button;
