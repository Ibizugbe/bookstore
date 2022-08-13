/* eslint-disable max-len */
import { React, useState } from 'react';
import Book from './Book';
import Form from './Form';

function BookContainer() {
  const myBooks = useState(
    [{
      title: 'Habits in creation and destruction',
      author: 'John Smith',
      id: 1,
    }],
  );
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
