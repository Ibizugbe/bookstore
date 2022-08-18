import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Category from './components/Category';
import BookContainer from './components/BookContainer';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<BookContainer />} />
        <Route path="/components/Category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
