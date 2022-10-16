import React from "react";

export default function LeaderBoard() {
  return (
    <div className="body">
      <h1>LeaderBoard</h1>
      <div>scrollable tornament</div>
      <div className="row" style={{ marginTop: "20px"}}>
        <button className="blue-button">Team</button>
        <button className="grey-button" style={{marginLeft: "20px"}}>Player</button>
      </div>
    </div>
  );
}

