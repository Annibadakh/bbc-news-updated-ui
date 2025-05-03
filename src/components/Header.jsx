import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = {
  Home: [],
  News: ["Local", "World", "Politics", "Economy"],
  Sport: [
    "Football",
    "Cricket",
    "Formula 1",
    "Rugby U",
    "Tennis",
    "Golf",
    "Athletics",
    "Cycling",
  ],
  Business: ["Markets", "Tech", "Companies", "Startups"],
  Innovation: ["AI", "Biotech", "Green Tech"],
  Culture: ["Books", "Film", "Music", "TV"],
  Arts: ["Design", "Photography", "Sculpture"],
  Travel: ["Destinations", "Tips", "Experiences"],
  Earth: ["Climate", "Nature", "Sustainability"],
  Audio: [],
  Video: [],
  Live: [],
};

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 md:py-4">
        {/* Left: Register / Sign In */}
        <div className="font-bold text-lg text-blue-600">MyLogo</div>

        {/* Center: Nav Items (Desktop) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium relative">
          {Object.entries(navItems).map(([item, subItems]) => (
            <div
              key={item}
              className="relative group"
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <button className="hover:text-blue-600 transition relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-blue-600 group-hover:after:w-full after:transition-all">
                {item}
              </button>
              {subItems.length > 0 && hoveredItem === item && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full mt-0 bg-white shadow-lg rounded-md py-2 w-48 border"
                >
                  {subItems.map((subItem) => (
                    <li
                      key={subItem}
                      className="px-4 py-2 hover:bg-gray-100 hover:text-blue-600 text-gray-800 transition"
                    >
                      {subItem}
                    </li>
                  ))}
                </motion.ul>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Logo */}
        
        <div className="hidden md:flex items-center gap-2 md:gap-4">
          <button className="text-sm md:text-base px-4 py-1 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
            Register
          </button>
          <button className="text-sm md:text-base px-4 py-1 border border-gray-500 text-gray-700 rounded-full hover:bg-gray-100 transition">
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
                <button className="w-full text-sm px-4 py-2 border border-blue-500 text-blue-600 rounded-full hover:bg-blue-50 transition">
                  Register
                </button>
                <button className="w-full text-sm px-4 py-2 border border-gray-400 text-gray-700 rounded-full hover:bg-gray-100 transition">
                  Sign In
                </button>
              </div>

              {Object.entries(navItems).map(([item, subItems]) => (
                <div key={item} className="border-b py-2">
                  <div
                    onClick={() =>
                      setHoveredItem(hoveredItem === item ? null : item)
                    }
                    className="font-medium text-gray-800 flex justify-between items-center cursor-pointer"
                  >
                    {item}
                    {subItems.length > 0 && (
                      <span className="text-gray-500 text-sm">
                        {hoveredItem === item ? "▲" : "▼"}
                      </span>
                    )}
                  </div>
                  <AnimatePresence>
                    {subItems.length > 0 && hoveredItem === item && (
                      <motion.ul
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="pl-4 mt-1 text-sm text-gray-600 overflow-hidden"
                      >
                        {subItems.map((subItem) => (
                          <li
                            key={subItem}
                            className="py-1 hover:text-blue-600 transition"
                          >
                            {subItem}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
