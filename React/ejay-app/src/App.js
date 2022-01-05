// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Home from './components/pages/Home';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    // <div className="App">
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>
    </>
    // </div>
  );
}

export default App;
