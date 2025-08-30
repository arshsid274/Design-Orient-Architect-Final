// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// export default function StepSlider({ stepId }) {
//   const [image, setImage] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const imgPath = `/images/step${stepId}.jpg`;
//     setImage(imgPath);
//   }, [stepId]);

//   const goNext = () => {
//     const next = stepId < 3 ? stepId + 1 : 1;
//     navigate(`/step/${next}`);
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
//       <AnimatePresence mode="wait">
//         <motion.img
//           key={stepId}
//           src={image}
//           alt={`Step ${stepId}`}
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 1.05 }}
//           transition={{ duration: 0.4 }}
//           className="w-full max-w-md rounded-2xl shadow-lg mb-8"
//         />
//       </AnimatePresence>

//       <button
//         onClick={goNext}
//         className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
//       >
//         Next
//       </button>
//     </div>
//   );
// }


function SlideBox({ title, subtitle, description }) {
  return (
    <div className="  absolute inset-0 items-center justify-center bg-black bg-opacity-25">
      <div className="text-white max-w-2xl text-center px-6 py-8 bg-[#2e2e2e90]  ">
        {title && <h2 className="text-3xl sm:text-base md:text-4xl font-bold text-[white] mb-2">{title}</h2>}
        {subtitle && <h3 className="text-xl sm:text-base md:text-2xl font-medium text-[#c6a47e] mb-4">{subtitle}</h3>}
        <p className="text-sm sm:text-sm md:text-base leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

