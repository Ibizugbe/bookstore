const ADD_BOOK = 'bookstore/books/addBook';
const REMOVE_BOOK = 'bookstore/books/removeBook';
export default function bookReducer(state = [], action) {
  switch (action.type) {
    // add action
    case ADD_BOOK: return [
      ...state, action.book,
    ];
    // remove action
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.id);
    // when the action is not defined
    default: return state;
  }
}

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});
