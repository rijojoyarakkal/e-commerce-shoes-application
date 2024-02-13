import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div> <div className="navbar">
    <div className="links">
      <Link to="/Login"> Login </Link>
      <Link to="/signup "> signup </Link>
      </div></div>
      </div>
      )
}

export default Header