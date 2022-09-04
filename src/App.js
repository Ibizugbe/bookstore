import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Category from './components/Category';
import BookContainer from './components/BookContainer';
import Nav from './components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

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
