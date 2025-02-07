// src/pages/HomePage.tsx
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Book Collection Manager</h1>
      <p className="text-xl text-gray-600 mb-8">
        Manage your personal library with ease. Add, edit, and organize your books in one place.
      </p>
      <div className="space-x-4">
        <Link
          to="/books"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
        >
          View Collection
        </Link>
        <Link
          to="/books/add"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
        >
          Add New Book
        </Link>
      </div>
    </div>
  );
};

export default HomePage;