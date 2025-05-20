import BrandLogo from "../assets/mainLogo.svg";

export const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-12 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="p-4 relative z-10 rounded-md inline-block bg-white">
                <img width={150} src={BrandLogo} alt="BrandLogo" />
                <span className="absolute inset-0 z-0"></span>
              </span>
            </h3>
            <p className="text-blue-200">
              Offering supportive listening and personal development guidance to help you navigate
              challenges and improve your well-being.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-blue-200 hover:text-white transition duration-300">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#flashcards"
                  className="text-blue-200 hover:text-white transition duration-300"
                >
                  Wellness Tips
                </a>
              </li>
              <li>
                <a href="#booking" className="text-blue-200 hover:text-white transition duration-300">
                  Book a Session
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-blue-200">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-3"></i> hello@prerna.com
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-3"></i> (+91) 97079-34599
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-3"></i> Golaghat, Assam
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-300">
          <p>&copy; 2025 | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
