import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return <div className="flex justify-between">
 <NavLink to="/about">
            About Us
          </NavLink>
          <NavLink to="/contacts">
            Contacts
          </NavLink>
          <NavLink to="/">
            Main
          </NavLink>
  </div>
}

export default Header;
