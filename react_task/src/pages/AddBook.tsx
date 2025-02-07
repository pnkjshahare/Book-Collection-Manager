// src/pages/AddBook.tsx
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addBook } from '../store/booksSlice';
import { BookFormData } from '../types/book';
import BookForm from '../components/BookForm';

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (data: BookFormData) => {
    dispatch(addBook({
      ...data,
      id: Date.now().toString()
    }));
    navigate('/books');
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Book</h1>
      <BookForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddBook;
