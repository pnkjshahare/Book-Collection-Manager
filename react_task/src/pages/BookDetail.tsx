import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { updateBook, deleteBook } from '../store/booksSlice';
import BookForm from '../components/BookForm';
import DeleteModal from '../components/DeleteModal';
import { BookFormData } from '../types/book';

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const book = useSelector((state: RootState) =>
    state.books.books.find(b => b.id === id)
  );

  if (!book) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h2 className="text-2xl font-bold text-gray-700">Book not found</h2>
        <button
          onClick={() => navigate('/books')}
          className="mt-4 text-blue-600 hover:text-blue-800"
        >
          Return to Books List
        </button>
      </div>
    );
  }

  const handleUpdate = (data: BookFormData) => {
    dispatch(updateBook({ ...data, id: book.id }));
    setIsEditing(false);
  };

  const handleDelete = () => {
    dispatch(deleteBook(book.id));
    navigate('/books');
  };

  if (isEditing) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Edit Book</h1>
          <button
            onClick={() => setIsEditing(false)}
            className="text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
        </div>
        <BookForm
          initialData={{
            title: book.title,
            author: book.author,
            genre: book.genre,
            description: book.description
          }}
          onSubmit={handleUpdate}
        />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{book.title}</h1>
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Author</h2>
            <p className="text-gray-600">{book.author}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Genre</h2>
            <p className="text-gray-600">{book.genre}</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-700">Description</h2>
            <p className="text-gray-600">{book.description}</p>
          </div>
        </div>
        
        <div className="mt-6 space-x-4">
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Edit Book
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
          >
            Delete Book
          </button>
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default BookDetail;