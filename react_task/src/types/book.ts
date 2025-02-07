export interface Book {
    id: string;
    title: string;
    author: string;
    genre: string;
    description: string;
  }
  
  export type BookFormData = Omit<Book, 'id'>;
  
  export interface BooksState {
    books: Book[];
    status: 'idle' | 'loading' | 'failed';
    error: string | null;
  }