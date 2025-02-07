// src/components/BookForm.tsx
import { useForm } from 'react-hook-form';
import { BookFormData } from '../types/book';

interface BookFormProps {
  onSubmit: (data: BookFormData) => void;
  initialData?: BookFormData;
}

const BookForm = ({ onSubmit, initialData }: BookFormProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<BookFormData>({
    defaultValues: initialData
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          {...register('title', { required: 'Title is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Author</label>
        <input
          type="text"
          {...register('author', { required: 'Author is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
        />
        {errors.author && (
          <p className="text-red-500 text-sm mt-1">{errors.author.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Genre</label>
        <input
          type="text"
          {...register('genre', { required: 'Genre is required' })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
        />
        {errors.genre && (
          <p className="text-red-500 text-sm mt-1">{errors.genre.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default BookForm;