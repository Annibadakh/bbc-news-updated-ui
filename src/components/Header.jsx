import { useEffect, useState } from "react";
import { motion, AnimatePresence, isDragActive } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation  } from "react-router-dom";
import logo from '../assets/bbclogo.png';

const navItems = {
  "/": "Home",
  "/news": {
    label: "News",
    sub: {
      "/news/asia": "Asia",
      "/news/world": "World",
      "/news/politics": "Politics",
      "/news/economy": "Economy",
    },
  },
  "/sport": {
    label: "Sport",
    sub: {
      "/sport/football": "Football",
      "/sport/cricket": "Cricket",
      "/sport/formula1": "Formula 1",
      "/sport/rugby": "Rugby U",
      "/sport/tennis": "Tennis",
      "/sport/golf": "Golf",
      "/sport/athletics": "Athletics",
      "/sport/cycling": "Cycling",
    },
  },
  "/business": {
    label: "Business",
    sub: {
      "/business/markets": "Markets",
      "/business/tech": "Tech",
      "/business/companies": "Companies",
      "/business/startups": "Startups",
    },
  },
  "/innovation": {
    label: "Innovation",
    sub: {
      "/innovation/ai": "AI",
      "/innovation/biotech": "Biotech",
      "/innovation/greentech": "Green Tech",
    },
  },
  "/culture": {
    label: "Culture",
    sub: {
      "/culture/books": "Books",
      "/culture/film": "Film",
      "/culture/music": "Music",
      "/culture/tv": "TV",
    },
  },
  "/arts": {
    label: "Arts",
    sub: {
      "/arts/design": "Design",
      "/arts/photography": "Photography",
      "/arts/sculpture": "Sculpture",
    },
  },
  "/travel": {
    label: "Travel",
    sub: {
      "/travel/destinations": "Destinations",
      "/travel/tips": "Tips",
      "/travel/experiences": "Experiences",
    },
  },
  "/earth": {
    label: "Earth",
    sub: {
      "/earth/climate": "Climate",
      "/earth/nature": "Nature",
      "/earth/sustainability": "Sustainability",
    },
  },
  "/audio": "Audio",
  "/video": "Video",
  "/live": "Live",
};

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Left: Logo */}
        <div className="font-bold text-lg text-blue-600">
          <img className="h-10" src={logo} alt="Logo" />
        </div>

        {/* Center: Nav Items (Desktop) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium relative">
          {Object.entries(navItems).map(([path, item]) => {
            const label = typeof item === "string" ? item : item.label;
            const subItems = typeof item === "object" && item.sub;
            const isactive = location.pathname.split("/");
            return (
              <div
                key={path}
                className="relative group"
                onMouseEnter={() => setHoveredItem(path)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <button
                  onClick={() => navigate(path)}
                  className={`hover:text-blue-600  transition relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 group-hover:after:w-full after:transition-all ${`/${isactive[1]}` == path ? (`text-blue-600 after:w-full`) : ``}`}
                >
                  {label}
                </button>
                {subItems && hoveredItem === path && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full mt-0 bg-white shadow-lg rounded-md py-2 w-48 border"
                  >
                    {Object.entries(subItems).map(([subPath, subLabel]) => (
                      <li
                        key={subPath}
                        onClick={() => navigate(subPath)}
                        className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-gray-800 transition cursor-pointer"
                      >
                        {subLabel}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Auth Buttons */}
        <div className="hidden md:flex items-center gap-2 md:gap-4">
          <button onClick={() => navigate("/register")} className="text-sm md:text-base px-4 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
            Register
          </button>
          <button onClick={() => navigate("/login")} className="text-sm md:text-base px-4 py-1 border border-gray-500 text-gray-700 rounded-full hover:bg-gray-100 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-gray-700"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-md border-t border-gray-100 p-4 h-[100vh] overflow-y-auto"
          >
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 mb-3">
                <button onClick={() => navigate("/register")} className="w-full text-sm px-4 py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition">
                  Register
                </button>
                <button onClick={() => navigate("/login")} className="w-full text-sm px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-100 transition">
                  Sign In
                </button>
              </div>

              {Object.entries(navItems).map(([path, item]) => {
                const label = typeof item === "string" ? item : item.label;
                const subItems = typeof item === "object" && item.sub;
                const isactive = location.pathname.split("/")
                return (
                  <div key={path} className="border-b py-2">
                    <div
                      onClick={() =>
                        setHoveredItem(hoveredItem === path ? null : path)
                      }
                      className={`font-medium ${`/${isactive[1]}` == path ? `text-blue-600` : `text-gray-800`}  hover:text-blue-600 flex justify-between items-center cursor-pointer`}
                    >
                      <span onClick={() => !subItems && navigate(path)}>{label}</span>
                      {subItems && (
                        <span className="text-gray-500  text-sm">
                          {hoveredItem === path ? "▲" : "▼"}
                        </span>
                      )}
                    </div>
                    <AnimatePresence>
                      {subItems && hoveredItem === path && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 mt-1 text-sm text-gray-600 overflow-hidden"
                        >
                          {Object.entries(subItems).map(([subPath, subLabel]) => (
                            <li
                              key={subPath}
                              onClick={() => navigate(subPath)}
                              className="py-1 hover:text-blue-600 transition cursor-pointer"
                            >
                              {subLabel}
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
