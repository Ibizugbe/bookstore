import React from 'react';

function BookContainer() {
  return ( 
    <main>
      <div className="book-container">
        <ul>
          <li className="book-item">
            <Book />
            <button className="remove"></button>
          </li>
        </ul>
      </div>
    </main>
   );
}

export default BookContainer;