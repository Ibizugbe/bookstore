import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();

  const [formState, setFormState] = useState({ title: '', author: '' });

  const changeState = (e) => {
    e.preventDefault();
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const bookState = (e) => {
    e.preventDefault();
    if (!formState.title.trim() || !formState.author.trim()) return;
    const book = {
      id: uuidv4(),
      title: formState.title,
      author: formState.author,
    };
    dispatch(addBook(book));
    setFormState({ title: '', author: '' });
  };

  return (
    <form action="#" onSubmit={bookState}>
      <input
        type="text"
        onChange={changeState}
        value={formState.author}
        placeholder="Author"
        name="Author"
      />
      <input
        type="search"
        onChange={changeState}
        value={formState.title}
        placeholder="title"
        name="title"
      />
      <input type="submit" value="Add Book" />
    </form>
  );
}

export default Form;
