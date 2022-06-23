import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home";
import NavBar from "./NavBar";
import Tours from "./Tours";
import Guides from "./Guides";
import Reviews from "./Reviews";



function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className='link'>
              <Link to="/" style={{ 
                textDecoration: 'none',
                color: '#040738',  
                }}>HOME</Link>
          </div>
          <div className='link'>
              <Link to="/Tours" style={{ 
                textDecoration: 'none',
                color: '#040738', 
                }}>TOURS</Link>
          </div>
          <div className='link'>
              <Link to="/Guides" style={{ 
                textDecoration: 'none',
                color: '#040738', 
                }}>GUIDES</Link>
          </div>
          <div className='link'>
              <Link to="/Reviews" style={{ 
                textDecoration: 'none',
                color: '#040738', 
                }}>REVIEWS</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/Tours" element={<Tours />} />
          <Route path="/Guides" element={<Guides />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
