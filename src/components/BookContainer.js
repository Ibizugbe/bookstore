/* eslint-disable max-len */
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from './Book';
import Form from './Form';
import { fetchBooks } from '../redux/books/books';

function BookContainer() {
  const dispatch = useDispatch();
  const myBooks = useSelector((state) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <main>
      <div className="book-container">
        <ul className="p-0 m-0">
          <li className="book-item">
            {myBooks.map((book) => (
              <Book
                key={book.item_id}
                id={book.item_id}
                author={book.author}
                title={book.title}
                category={book.category}
              />
            ))}
          </li>
        </ul>
        <Form />
      </div>
    </main>
  );
}

export default BookContainer;
