import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Tamil Nadu Tourism
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                Home
              </Link>
              <Link to="/destinations" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                Destinations
              </Link>
              <Link to="/about" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                About
              </Link>
              <Link to="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
