import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BooksList from './pages/BooksList';
import AddBook from './pages/AddBook';
import BookDetail from './pages/BookDetail';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksList />} />
              <Route path="/books/add" element={<AddBook />} />
              <Route path="/books/:id" element={<BookDetail />} />
              <Route path="/books/:id/edit" element={<BookDetail />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;