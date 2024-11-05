
import './App.css';
import Home from './component/Home';
import About from './component/About';
import User from './component/User'; 
//import { Link,BrowserRouter, Routes } from 'react-router-dom';
import { BrowserRouter ,Link,Routes,Route} from "react-router-dom";
//import { Nav } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/about" className="nav-link">About</Link>
        </li>
        <li className="nav-item">
        <Link to="/user" className="nav-link">User</Link>
        </li>
        
      </ul>
    </div>
  </nav>
  <Routes>
    <Route path="/" element={<Home />}> </Route>
    <Route path="/about" element={<About />} />
    <Route path="/user" element={<User />} />
      
   
  </Routes>  
    </BrowserRouter>
    
      
    </div>
  );
}

export default App;
