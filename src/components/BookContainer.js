import React from 'react';
import Book from './Book';

function BookContainer() {
  const books = {
    title: 'Habits in creation and destruction',
    author: 'John Smith',
  };
  return (
    <main>
      <div className="book-container">
        <ul>
          <li className="book-item">

            <Book author={books.author} title={books.title} />
            <button className="remove">Remove</button>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default BookContainer;
