/* eslint-disable max-len */
import { React } from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

function BookContainer() {
  const myBooks = useSelector((state) => state.books);
  return (
    <main>
      <div className="book-container">
        <ul>
          <li className="book-item">
            {myBooks.map((book) => <Book key={book.id} author={book.author} title={book.title} />)}
            <button className="remove" type="button">Remove</button>
          </li>
        </ul>
        <Form />
      </div>
    </main>
  );
}

export default BookContainer;
