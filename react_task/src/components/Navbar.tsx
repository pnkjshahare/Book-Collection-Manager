// src/components/Navbar.tsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              Book Collection
            </Link>
            <div className="ml-10 space-x-4">
              <Link to="/books" className="text-gray-600 hover:text-gray-900">
                Books
              </Link>
              <Link to="/books/add" className="text-gray-600 hover:text-gray-900">
                Add Book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;