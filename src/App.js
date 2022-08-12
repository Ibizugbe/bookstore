import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Catigory from './components/Catigory';
import BookContainer from './components/BookContainer';
import Nav from './components/Nav';


function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<BookContainer />} />
      <Route path="/components/Catigory" element={<Catigory />} />
    </Routes>
    </>
  );
}

export default App;
