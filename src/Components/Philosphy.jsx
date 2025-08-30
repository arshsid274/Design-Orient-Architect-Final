import PhilosphyImg from "../assets/Slider3.jpg";

function Philosphy() {
  return (
    <div className="relative bg-black text-white lg:px-12 xl:px-[120px] py-16 grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden">
      {/* Text Section */}
      <div className="z-10 font-medium px-5">
        <h1 className="text-2xl font-bold mb-6">Our Design Philosophy</h1>
        <p className="text-sm leading-relaxed max-w-xl">
          At the heart of our practice is a simple yet powerful idea: design
          should be both beautiful and purposeful.
          <br />
          <br />
          We believe that great architecture is not just about how a building
          looks, but how it lives—how it functions, flows, and feels. Our
          approach is client-focused and context-driven, combining aesthetics
          with usability, innovation with tradition, and sustainability with
          style.
          <br />
          <br />
          Every project begins with listening. We understand the lifestyle,
          needs, and aspirations of our clients and translate that into design
          solutions that are personalized, intelligent, and enduring. Whether
          it's a cozy home, a vibrant workspace, or a public space that brings
          people together—our goal is to make architecture that tells a story
          and leaves a lasting impression.
          <br />
          <br />
          We are passionate about integrating natural elements, maximizing
          daylight, and using sustainable materials to create spaces that are
          not only visually appealing but also environmentally responsible. Our
          team thrives on collaboration, creativity, and a relentless pursuit of
          excellence, ensuring that every project is a true reflection of our
          clients’ dreams and values.
        </p>
      </div>

      {/* Image Section */}
      <div className="relative flex justify-end items-center md:pr-14 ">
        {/* White box above the image */}
        <div className="hidden lg:block absolute -top-14 -right-2 lg:w-[62%] xl:w-[64%] 2xl:w-[42%]  h-64 bg-[#252525] z-10 " />

        {/* Image */}
        <img
          src={PhilosphyImg}
          alt="Interior"
          className="w-[400px] h-auto object-cover relative z-20 py-8 lg:py-0 "
        />
      </div>
    </div>
  );
}

export default Philosphy;
