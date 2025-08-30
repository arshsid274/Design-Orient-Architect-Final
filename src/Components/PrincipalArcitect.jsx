import Architect from "../assets/WhatsApp Image 2025-07-10 at 15.16.45_6ebcb4bc.jpg";

function PrincipalArcitect() {
  return (
    <>
      <div className="py-2 lg:py-4 mt-6 lg:mt-16">
        <h2 className="uppercase text-white text-xl md:text-3xl text-center ">
          Founder <span className="text-[#c6a47e]"> & CEO</span>
        </h2>
        <div className="flex flex-col lg:flex-row gap-10 mt-20 md:px-16 bg-black ">
          <div className="w-full max-w-[400px] aspect-square mx-auto">
            <img
              src={Architect}
              alt="Principal Architect"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-4 lg:px-4">
            <div>
              <div className="bg-gradient-to-r from-[#252525] to-[#1a1a1a] border-t-2 border-[#c6a47e] py-6 w-full max-w-md lg:max-w-none lg:w-auto px-6 mx-auto lg:mx-0 text-center lg:text-left rounded-lg shadow-lg">
                <h2 className="text-white text-xl font-semibold">
                  Ar. Praveen Vishwakarma
                </h2>
                <h3 className="text-[#c6a47e] text-lg">
                  Principal Architect & Founder
                </h3>
                <p className="text-gray-400 text-sm mt-2">
                  Bachelor in Architecture (AKTU)
                </p>

                <div className="w-12 h-1 bg-[#c6a47e] mx-auto lg:mx-0 mt-3"></div>
              </div>

              <div className="w-full max-w-md lg:max-w-lg px-4 lg:px-0 py-5">
                <p className="text-gray-300 leading-relaxed">
                  Welcome! I'm Praveen Vishwakarma, passionate about designing
                  spaces that inspire and elevate daily living. Since founding
                  my firm in 2021, my mission has been to create architecture
                  that is not only visually striking but also deeply functional
                  and sustainable. Every project is a new opportunity to blend
                  innovation with timeless design principles, ensuring each
                  space tells its own unique story.
                </p>
                <p className="text-[#c6a47e] mt-4 italic">
                  "Great architecture is about harmony—between people, place,
                  and purpose."
                </p>
              </div>
            </div>
            <div className="w-full max-w-md lg:max-w-none lg:w-96 px-4 lg:px-0 py-5 lg:py-8 flex flex-col justify-center">
              <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                My experience covers a diverse range of projects—from bespoke
                residences and modern commercial spaces to creative interior
                solutions. I value collaboration and believe the best results
                come from listening to clients and understanding their
                aspirations. Every detail matters, and I strive to balance
                innovation, sustainability, and context in every design.
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                <li className="bg-[#232323] text-[#c6a47e] px-3 py-1 rounded-full text-xs font-semibold shadow">
                  Awarded "Emerging Architect 2023"
                </li>
                <li className="bg-[#232323] text-[#c6a47e] px-3 py-1 rounded-full text-xs font-semibold shadow">
                  Member, Indian Institute of Architects
                </li>
                <li className="bg-[#232323] text-[#c6a47e] px-3 py-1 rounded-full text-xs font-semibold shadow">
                  Featured in "Modern Living" Magazine 2024
                </li>
                <li className="bg-[#232323] text-[#c6a47e] px-3 py-1 rounded-full text-xs font-semibold shadow">
                  Guest Speaker, National Design Summit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PrincipalArcitect;
