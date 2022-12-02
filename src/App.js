import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Show from './Component/Show';
import Create from './Component/Create';
import Update from './Component/Update';
import Nav from './Component/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Show />} />
        <Route path='/create' element={<Create />} />
        <Route path='/update' element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
