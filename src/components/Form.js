import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

function Form() {
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState({ title: '', author: '' });

  const changeState = (e) => {
    e.preventDefault();
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const bookState = (e) => {
    e.preventDefault();
    if (!formValue.title.trim() || !formValue.author.trim()) return;
    const book = {
      id: uuidv4(),
      title: formValue.title,
      author: formValue.author,
    };
    dispatch(addBook(book));
    setFormValue({ title: '', author: '' });
  };

  return (
    <form action="#" onSubmit={bookState}>
      <input
        type="text"
        onChange={changeState}
        value={formValue.author}
        placeholder="Author"
        name="author"
      />
      <input
        type="text"
        onChange={changeState}
        value={formValue.title}
        placeholder="title"
        name="title"
      />
      <input type="submit" value="Add Book" />
    </form>
  );
}

export default Form;
