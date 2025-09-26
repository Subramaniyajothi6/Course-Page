import  { useState } from "react";


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-black sticky top-0 z-50 shadow-lg">
      <div className=" mx-auto flex items-center justify-between px-4    py-4 flex-wrap ">
        {/* Left: Brand Logo */}
        <a href="/" className="text-white font-bold text-xl flex-shrink-0">
           MOSH
        </a>

        {/* Hamburger menu for mobile */}
        <button 
          className="block md:hidden text-white focus:outline-none ml-4"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white rounded"></span>
            <span className="block h-0.5 w-6 bg-white rounded"></span>
            <span className="block h-0.5 w-6 bg-white rounded"></span>
          </div>
        </button>

        {/* Center: Nav Links */}
        <div className={`${isMobileMenuOpen ? 'flex' : 'hidden'} md:flex md:flex-grow md:justify-center md:gap-12 md:items-center w-full md:w-auto flex-col md:flex-row`}>
          <a href="/courses" className="text-gray-400 transition-colors ease-in-out duration-300 hover:text-white font-medium py-2 md:py-0">
            Courses
          </a>
          <a href="/p/learning-paths" className="text-gray-400 transition-colors ease-in-out duration-300   hover:text-white font-medium py-2 md:py-0">
            Learning Paths
          </a>
          <a href="/p/all-access" className="text-gray-400 transition-colors ease-in-out duration-300 hover:text-white font-medium py-2 md:py-0">
            Lifetime Access
          </a>
          <a href="https://forum.codewithmosh.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition-colors ease-in-out duration-300 hover:text-white font-medium py-2 md:py-0">
            Forum
          </a>
          <a href="/p/contact" className="text-gray-400 transition-colors ease-in-out duration-300 hover:text-white font-medium py-2 md:py-0">
            Contact
          </a>
        </div>

        {/* Right: Members Area Button */}
        <a
          href="/members"
          className="hidden md:inline-block bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition"
        >
          Members Area
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
