/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";


export default function Navbar() {

  return (
    <nav>
      <div className="nav-container">
        <div>
          <img src="https://metaco.gg/icon/logo-metaco.svg" alt={"metaco_img"} height={50} width={120} />
        </div>
        <div>
          <Link to="/explorer">Explorer</Link>
          <Link to="/tournament">Tournament</Link>
          <Link to="/leaderboard">Leaderboard</Link>
        </div>
      </div>
    </nav>
  );
}
