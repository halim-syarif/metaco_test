/*eslint-disable*/
import React from "react";
import '../assets/styles/index.css'
import { Link } from "react-router-dom";
import Metaco from "../assets/img/logo-metaco.js";


export default function Navbar() {

  return (
    <nav>
      <div className="nav-container">
        <Metaco />
        <div>
          <Link to="/explorer">Explorer</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </div>
      </div>
    </nav>
  );
}
