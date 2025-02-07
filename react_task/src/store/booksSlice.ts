import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book, BooksState } from '../types/book';

const initialState: BooksState = {
  books: [],
  status: 'idle',
  error: null
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex(book => book.id === action.payload.id);
      if (index !== -1) {
        state.books[index] = action.payload;
      }
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    }
  }
});

export const { addBook, updateBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;