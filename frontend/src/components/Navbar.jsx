import BrandLogo from "../assets/mainLogo.svg";

export const Navbar = () => {
  return (
    <>
      <nav className="fixed w-full bg-white bg-opacity-90 shadow-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-400 flex items-center">
            <span>
              <img width={200} src={BrandLogo} alt="BrandLogo" />
            </span>
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="nav-link text-blue-400 hover:text-blue-600">
              Home
            </a>
            <a href="#flashcards" className="nav-link text-blue-400 hover:text-blue-600">
              Wellness Tips
            </a>
            <a href="#booking" className="nav-link text-blue-400 hover:text-blue-600">
              Book a Session
            </a>
          </div>
          <button className="md:hidden focus:outline-none" id="menu-toggle">
            <i className="fas fa-bars text-blue-400 text-2xl"></i>
          </button>
        </div>
        {/* Mobile menu */}
        <div className="md:hidden hidden bg-white w-full px-6 py-4" id="mobile-menu">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="nav-link text-blue-400 hover:text-blue-600">
              Home
            </a>
            <a href="#flashcards" className="nav-link text-blue-400 hover:text-blue-600">
              Wellness Tips
            </a>
            <a href="#booking" className="nav-link text-blue-400 hover:text-blue-600">
              Book a Session
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
