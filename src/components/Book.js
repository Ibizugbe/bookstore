import React from 'react';

function Book(props) {
  const [title, author] = props;
  return (
    <div className="book">
      <p>
        <span>{title}</span>
        {' '}
        by
        <span>{author}</span>
      </p>
    </div>
  );
}

export default Book;
