import Navbar from "./Components/Navbar.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Project from "./Pages/Project.jsx";
import Services from "./Pages/Services.jsx";

import Contact from "./Pages/Contact.jsx";
import BaseLayout from "./Components/BaseLayout";
import InteriorDesign from "./Pages/InteriorDesign.jsx";
import CommercialBuildingDesign from "./Pages/CommercialBuildingDesign.jsx";
import HospitalityDesign from "./Pages/HospitalityDesign.jsx";
import LuxuriousDesign from "./Pages/LuxuriousDesign.jsx";
import LandscapingProjects from "./Pages/LandscapingProjects.jsx";
import Residential from "./Pages/Residential.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      { path: "/", element: <Home /> },

      { path: "/contact", element: <Contact /> },
    ],
  },
  { path: "/about", element: <About /> },
  { path: "/project", element: <Project /> },
  { path: "/services", element: <Services /> },
  { path: "/interior-design", element: <InteriorDesign /> },
  { path: "/commercial-design", element: <CommercialBuildingDesign /> },
  { path: "/hospitality-design", element: <HospitalityDesign /> },
  { path: "/resturants", element: <LuxuriousDesign /> },
  { path: "/landscaping-design", element: <LandscapingProjects /> },
  { path: "/residential-design", element: <Residential /> },
]);

function App() {
  return (
    <>
      {" "}
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
