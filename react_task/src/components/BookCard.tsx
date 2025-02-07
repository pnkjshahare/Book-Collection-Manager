import { Link } from 'react-router-dom';
import { Book } from '../types/book';

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{book.title}</h3>
      <p className="text-gray-600 mb-2">by {book.author}</p>
      <p className="text-gray-500 mb-2">{book.genre}</p>
      <p className="text-gray-700 mb-4 line-clamp-3">{book.description}</p>
      <Link
        to={`/books/${book.id}`}
        className="text-blue-600 hover:text-blue-800"
      >
        View Details →
      </Link>
    </div>
  );
};

export default BookCard;
