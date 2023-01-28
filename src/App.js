
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AddBook } from './components/AddBook';
import { BookList } from './components/BookList';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/add-books' element={<AddBook></AddBook>}></Route>
        <Route path='/book-lists' element={<BookList></BookList>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
