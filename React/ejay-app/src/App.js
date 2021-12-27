import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Resume from './components/pages/Resume';
import Education from './components/pages/Education';
import Project from './components/pages/Project';


import Navbar from './components/Navbar';


import './App.css';


function App() {
  return (
    // <div className="App">
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          
          <Route path='/education' element={<Education/>} />
          <Route path='/project' element={<Project/>} />

          <Route path='/resume' element={<Resume/>} />
          
        </Routes>
      </Router>
    </>

    // </div>
  );
}

export default App;
