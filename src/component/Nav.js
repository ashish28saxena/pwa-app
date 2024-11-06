import React from "react";
import Home from './Home';
import About from './About';
import User from "./User";
import Shop from "./Shop"; 
import { BrowserRouter ,Link,Routes,Route} from "react-router-dom";
import { useSelector } from "react-redux";

const Nav=()=>{
  const amount=useSelector(state=>state.amount)
  const userresult=useSelector(state=>state.showuser)
  console.log("!!!!!!!!!!!!!!!!!!!!!!",userresult);
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

        <li className="nav-item">
        <Link to="/shop" className="nav-link">Shop</Link>
        </li>

        <li className="nav-item">
        <button className="nav-link bg-primary"> your Blance is : {amount}</button>
        </li>
        
      </ul>
    </div>
  </nav>
  <Routes>
    <Route path="/" element={<Home />}> </Route>
    <Route path="/about" element={<About />} />
    <Route path="/user" element={<User />} />
    <Route path="/shop" element={<Shop/>} />
      
   
  </Routes>  
    </BrowserRouter>

        </div>
    )
}

export default Nav;