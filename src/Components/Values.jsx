function Values() {
  return (
    <div className="bg-[#181818] text-white py-12 px-6 md:px-24 flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-[#c6a47e]">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl mb-2">🤝</span>
          <h3 className="font-semibold mb-2">Collaboration</h3>
          <p className="text-gray-300 text-sm">
            We believe the best ideas emerge through open dialogue and teamwork,
            both within our studio and with our clients.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl mb-2">🌱</span>
          <h3 className="font-semibold mb-2">Sustainability</h3>
          <p className="text-gray-300 text-sm">
            Our designs prioritize eco-friendly materials and energy-efficient
            solutions for a better tomorrow.
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-3xl mb-2">✨</span>
          <h3 className="font-semibold mb-2">Innovation</h3>
          <p className="text-gray-300 text-sm">
            We embrace creativity and forward-thinking to deliver unique,
            timeless spaces that inspire and endure.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Values;
