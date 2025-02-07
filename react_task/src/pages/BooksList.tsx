// src/pages/BooksList.tsx
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/index';
import BookCard from '../components/BookCard';

const BooksList = () => {
  const books = useSelector((state: RootState) => state.books.books);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Books</h1>
        <Link
          to="/books/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add New Book
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>

      {books.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No books in your collection. Start by adding one!
        </p>
      )}
    </div>
  );
};

export default BooksList;