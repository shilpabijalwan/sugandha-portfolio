import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./Navbar"; // Keep navbar always loaded
import Socials from "./components/social"; // Socials can be shown anytime
import Skeleton from "./components/Skeleton";

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
          <div className="mt-20  m-auto w-4/6">
            <Skeleton />
          </div>
        }
      >
        <Home />
      </Suspense>
      <Suspense
        fallback={
          <div className="mt-20  m-auto w-4/6">
            <Skeleton />
          </div>
        }
      >
        <About />
      </Suspense>
      <Suspense
        fallback={
          <div className="mt-20  m-auto w-4/6">
            <Skeleton />
          </div>
        }
      >
        <ExperienceSection />
      </Suspense>
      <Suspense
        fallback={
          <div className="mt-20  m-auto w-4/6">
            <Skeleton />
          </div>
        }
      >
        <ContactForm />
      </Suspense>
      <Socials />
    </div>
  );
}
export default App;
