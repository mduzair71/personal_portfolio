function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-blue-600">
          Muhammad Uzair
        </h1>

        {/* Menu */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Skills</li>
          <li className="hover:text-blue-600 cursor-pointer">Projects</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>

      </div>
    </nav>
  )
}

export default Navbar
