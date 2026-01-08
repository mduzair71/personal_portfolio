import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-4 left-1/2 -translate-x-1/2 z-50
    max-w-6xl rounded-2xl
    bg-gradient-to-r from-blue-500/90 via-indigo-500/90 to-purple-500/90
    backdrop-blur-xl shadow-2xl
    animate-gradient">

      <div className="px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-white 
        hover:scale-105 transition-transform duration-300 cursor-pointer">
          Muhammad Uzair
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white font-medium">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, i) => (
            <li key={i}>
              <a href={`#${item.toLowerCase()}`} className="relative group">
                <span className="group-hover:text-yellow-300 
                transition-all duration-300">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] 
                bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div
          className="md:hidden text-white text-3xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-white">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item, i) => (
            <li key={i} onClick={() => setOpen(false)}>
              <a href={`#${item.toLowerCase()}`} className="hover:text-yellow-300 transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
