import { useEffect, useState } from "react";
import { NAV_ITEMS } from "./constants";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [activeHash, setActiveHash] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item?.link).filter((id) =>
      id.startsWith("#")
    );

    const sectionElements = sectionIds
      .map((id) => document.querySelector(id))
      .filter(Boolean);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          const hash = `#${visible.target.id}`;
          setActiveHash(hash);
          history.replaceState(null, null, hash); // no scroll jump
        }
      },
      {
        threshold: 0.5,
      }
    );

    sectionElements.forEach((el) => observer.observe(el));

    // ✅ On load fallback: detect current hash section
    const currentHash = window.location.hash;
    if (currentHash && document.querySelector(currentHash)) {
      setActiveHash(currentHash);
    }

    return () => observer.disconnect();
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="w-full">
      {/* 🔹 Mobile Sticky Header */}
      <div className="sm:hidden sticky top-0 z-50 bg-[#0f1a24] border-b border-[#2a3b4d]">
        <div className="flex justify-between items-center px-5 py-4">
          {NAV_ITEMS[2] && (
            <a
              href={NAV_ITEMS[2].link}
              className="nameDiv rounded-full h-10 w-10 text-center font-bold text-white"
            >
              {NAV_ITEMS[2].title}
            </a>
          )}
          <button onClick={toggleMenu} className="text-white z-50">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* 🔹 Desktop Nav */}
      <div className="nav hidden sm:flex justify-between items-center">
        {NAV_ITEMS.map((ele, ind) => (
          <a
            href={ele.link}
            key={ele.link}
            className={`p-2 transition-all duration-300
              ${
                ind === 2
                  ? "nameDiv rounded-full h-10 w-10 text-center font-bold"
                  : ""
              }
              ${
                ele.link === activeHash
                  ? "bg-[#77530a] text-white rounded-full px-8"
                  : "text-white"
              }
            `}
          >
            {ele.title}
          </a>
        ))}
      </div>

      {/* 🔹 Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden absolute top-[64px] left-0 w-full bg-[#0f1a24] z-40 px-5 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((ele, ind) =>
            ind === 2 ? null : (
              <a
                href={ele.link}
                key={ele.link}
                onClick={() => setMenuOpen(false)}
                className={`p-2 transition-all duration-300 ${
                  ele.link === activeHash
                    ? "bg-[#77530a] text-white rounded-full px-4"
                    : "text-white"
                }`}
              >
                {ele.title}
              </a>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
