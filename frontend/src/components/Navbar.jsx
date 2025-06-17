import { useState } from "react";
import BrandLogo from "../assets/mainLogo.svg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed w-full bg-white bg-opacity-90 shadow-sm z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-blue-400 flex items-center">
            <span>
              <img width={200} src={BrandLogo} alt="BrandLogo" />
            </span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-blue-400 hover:text-blue-600">
              Home
            </a>
            <a href="#flashcards" className="nav-link text-blue-400 hover:text-blue-600">
              Wellness Tips
            </a>
            <a
              href="#booking"
              className="group flex items-center justify-center px-8 py-2 text-white font-semibold text-sm rounded-full bg-[#ff135a] shadow-[0_0_0.2em_0_#ff135a] transition-all duration-1000 hover:shadow-[0_0_0.4em_0_#ff135a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff145b80]"
            >
              <span>BOOK A SESSION</span>
              <span className="flex items-center transition-all duration-500 group-hover:ml-2">
                <i className="icon-arrow-1 fas fa-chevron-right"></i>
                <i className="icon-arrow-2 fas fa-chevron-right"></i>
                <i className="icon-arrow-3 fas fa-chevron-right"></i>
              </span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="md:hidden focus:outline-none"
            id="menu-toggle"
          >
            <i className="fas fa-bars text-blue-400 text-2xl"></i>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden bg-white w-full px-6 py-4 ${isOpen ? "block" : "hidden"}`}
          id="mobile-menu"
        >
          <div className="flex flex-col space-y-4">
            <a
              href="#home"
              onClick={() => {
                setIsOpen(false);
              }}
              className="nav-link text-blue-400 hover:text-blue-600"
            >
              Home
            </a>
            <a
              href="#flashcards"
              onClick={() => {
                setIsOpen(false);
              }}
              className="nav-link text-blue-400 hover:text-blue-600"
            >
              Wellness Tips
            </a>
            <a
              href="#booking"
              onClick={() => {
                setIsOpen(false);
              }}
              className="group flex items-center justify-center px-8 py-2 text-white font-semibold text-sm rounded-full bg-[#ff135a] shadow-[0_0_0.2em_0_#ff135a] transition-all duration-1000 hover:shadow-[0_0_0.4em_0_#ff135a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff145b80]"
            >
              <span>BOOK A SESSION</span>
              <span className="flex items-center transition-all duration-500 group-hover:ml-2">
                <i className="icon-arrow-1 fas fa-chevron-right"></i>
                <i className="icon-arrow-2 fas fa-chevron-right"></i>
                <i className="icon-arrow-3 fas fa-chevron-right"></i>
              </span>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
