import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

      // Add basic styling for NavLinks
      const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };
    
    return (
      <div>
        <NavLink
        to="/"
        exact //so it knows to only set activeStyle when route is deeply equal to link 
        style={linkStyles} // add styling to Navlink
        activeStyle={{background: "darkblue"}} //add prop for activeStyle
        >
        Home
      </NavLink>
  
      <NavLink
        to="/about"
        exact
        style={linkStyles}
        activeStyle={{background: "darkblue"}}
      >
        About
      </NavLink>
  
      <NavLink
        to="/login"
        exact
        style={linkStyles}
        activeStyle={{background: "darkblue"}}
      >
        Login
      </NavLink>
  
      <NavLink
      to="/signup"
      exact
      style={linkStyles}
      activeStyle={{background: "darkblue"}}
      >
      SignUp
      </NavLink>
  
      <NavLink
      to="/messages"
      exact
      style={linkStyles}
      activeStyle={{background: "darkblue"}}
      >
      Messages
      </NavLink>
  
    </div>)
}

export default Navbar;