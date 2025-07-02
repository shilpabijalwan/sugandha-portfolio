import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./Navbar"; // Keep navbar always loaded
import Socials from "./components/social"; // Socials can be shown anytime

const Home = lazy(() => import("./home"));
const About = lazy(() => import("./about"));
const ExperienceSection = lazy(() => import("./experience"));
const ContactForm = lazy(() => import("./contact"));
function App() {
  return (
    <div className="">
      <Navbar />
      <Suspense
        fallback={
          <div className="text-white text-center py-10">Loading Home...</div>
        }
      >
        <Home />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center py-10">Loading About...</div>
        }
      >
        <About />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center py-10">
            Loading Experience...
          </div>
        }
      >
        <ExperienceSection />
      </Suspense>
      <Suspense
        fallback={
          <div className="text-white text-center py-10">Loading Contact...</div>
        }
      >
        <ContactForm />
      </Suspense>
      <Socials />
    </div>
  );
}
export default App;
