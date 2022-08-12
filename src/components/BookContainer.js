import React from 'react';
import Book from './Book';

function BookContainer() {
  return (
    <main>
      <div className="book-container">
        <ul>
          <li className="book-item">
            <Book author="John Doe" title="My love story" />
            <button className="remove">Remove</button>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default BookContainer;
