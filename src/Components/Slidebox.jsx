function SlideBox({ title, subtitle, description }) {
  return (
    <div className="flex absolute inset-0 items-center justify-center bg-opacity-20">
      <div className="text-white max-w-xs sm:max-w-sm md:max-w-md text-center px-2 py-2 sm:px-4 sm:py-4 bg-[#2e2e2e90] text-xs sm:text-sm md:text-base">
        {title && (
          <h2 className="text-sm sm:text-xl md:text-xl lg:text-3xl font-bold text-[white] mb-1 sm:mb-2">
            {title}
          </h2>
        )}
        {subtitle && (
          <h3 className="text-xs sm:text-base md:text-2xl lg:text-2xl font-medium text-[#c6a47e] mb-2 sm:mb-4">
            {subtitle}
          </h3>
        )}
        <p className="block text-xs sm:text-sm md:text-base lg:text-lg leading-tight sm:leading-relaxed line-clamp-3 sm:line-clamp-4 md:line-clamp-none">
          {description}
        </p>
      </div>
    </div>
  );
}

export default SlideBox;
