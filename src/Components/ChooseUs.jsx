function ChooseUs() {
    return (
        <>
        <div className="bg-black text-white py-16 px-4 md:px-12 lg:px-20">
      <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">
        Why <span className="text-[#c6a47e]">Choose us?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 max-w-7xl mx-auto">
        {/* 1 */}
        <div className="flex items-start space-x-6">
          <div className="text-[96px] font-bold leading-none text-white">1</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Expertise:</h3>
            <p className="text-base">
              With years of experience, we bring a wealth of knowledge to every project.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="flex items-start space-x-6">
          <div className="text-[96px] font-bold leading-none text-white">2</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Innovation:</h3>
            <p className="text-base">
              We stay at the forefront of architectural trends to offer cutting-edge solutions.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="flex items-start space-x-6">
          <div className="text-[96px] font-bold leading-none text-white">3</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Client-Centric Approach:</h3>
            <p className="text-base">
              Your needs and satisfaction are our top priority.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="flex items-start space-x-6">
          <div className="text-[96px] font-bold leading-none text-white">4</div>
          <div>
            <h3 className="font-bold text-lg mb-1">Sustainability:</h3>
            <p className="text-base">
              Committed to eco-friendly practices, we design with the future in mind.
            </p>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}

export default ChooseUs;