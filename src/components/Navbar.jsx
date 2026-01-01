function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-blue-600">
          Muhammad Uzair
        </h1>

        {/* Menu */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-800 cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 cursor-pointer">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-600 cursor-pointer">
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 cursor-pointer">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 cursor-pointer">
              Contact
            </a>
          </li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
