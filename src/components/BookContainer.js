import React from 'react';
import Book from './Book';

function BookContainer() {
  const myBooks = [{
    title: 'Habits in creation and destruction',
    author: 'John Smith',
    id: 1,
  }];
  return (
    <main>
      <div className="book-container">
        <ul>
          <li className="book-item">
            {myBooks.map((book) => {
              return <Book key={book.id} author={book.author} title={book.title} />
            })}
            <button className="remove" type="button">Remove</button>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default BookContainer;
