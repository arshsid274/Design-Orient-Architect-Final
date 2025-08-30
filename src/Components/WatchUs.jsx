import WatchUsImage from "../assets/Exterior.jpg";
import WatchUsImageMob from "../assets/Exterior.jpg";

const steps = [
  {
    number: 1,
    title: "Consultation",
    description:
      "We begin with a thorough consultation to understand your vision, needs, and budget.",
  },
  {
    number: 2,
    title: "Concept Development",
    description:
      "Our team develops a concept that aligns with your goals and site conditions.",
  },
  {
    number: 3,
    title: "Design Phase",
    description:
      "Detailed drawings and 3D models are created to visualize the project.",
  },
  {
    number: 4,
    title: "Construction",
    description:
      "Our experienced team oversees the construction to ensure quality and adherence to the design.",
  },
];

const statsData = [
  { count: "150+", label: "Projects Finished" },
  { count: "120+", label: "Happy Clients" },
  { count: "100+", label: "Projects In Progress" },
  { count: "200+", label: "Visitors" },
];

const StepCard = ({ number, title, description }) => (
  <div className="grid grid-cols-4   md:py-10 lg:py-3 xl:py-7 xl:px-8  items-center justify-center  ">
    <div className="col-span-1 border-[6px] border-[#1f1e1e] text-base md:text-xl lg:text-3xl text-center flex items-center justify-center w-14 h-14 md:w-23 md:h-23 lg:w-18 lg:h-18 xl:h-[80px] xl:w-[80px]">
      {number}
    </div>
    <div className="col-span-3">
      <h3 className="text-xs md:text-sm lg:text-base font-semibold ">
        {title}
        <span className="block border-b-2 border-[#c6a47e] w-5 md:w-10 lg:w-14 mt-1"></span>
      </h3>
      <p className=" md:block text-xs md:text-base lg:text-sm xl:text-xl mt-2">{description}</p>
    </div>
  </div>
);

function WatchUs() {
  return (
    <>
      {/* Desktop View */}
      <div className="hidden lg:block text-white  bg-[#000000]">
        <div className="grid grid-cols-2">
          <div
            className="w-full  aspect-auto bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${WatchUsImage})` }}
          ></div>
          <div className="px-7 ">
            <h2 className="font-medium uppercase text-center text-sm lg:text-xl  mb-6">
              Watch Us How We <br />
              <span className="text-[#c6a47e]">Create Your Dream</span>
            </h2>
            {steps.map((step, index) => (
              <StepCard key={index} {...step} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="block lg:hidden bg-[#000000] text-white px-4  py-6">
        <img
          src={WatchUsImage}
          alt="Watch Us"
          className=" w-full object-cover aspect-video"
        />
        <h2 className="font-medium uppercase text-center text-xl mt-6">
          Watch Us How We <br />
          <span className="text-[#c6a47e]">Create Your Dream</span>
        </h2>
        <div className="mt-6 md:px-25 md:py-6">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>

      {/* Stats Section - Shared for all screens */}
      {/* <div className="bg-[#c6a47e] py-10 px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center">
          {statsData.map((stat, index) => (
            <div key={index}>
              <h3 className="text-2xl md:text-3xl font-semibold">{stat.count}</h3>
              <p className="text-sm md:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
}

export default WatchUs;
