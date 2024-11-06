import React from "react";
import Home from './Home';
import About from './About';
import User from "./User";
import { BrowserRouter ,Link,Routes,Route} from "react-router-dom";

const Nav=()=>{
    return(
        <div>
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
    )
}

export default Nav;