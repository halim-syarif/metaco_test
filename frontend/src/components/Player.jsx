/*eslint-disable*/
import React from "react";


export default function Player({ player }) {

  return (
    <div className="grid-item">
      {
        player.picture ? (
          <img src={player.picture} alt={player.name + "_img"} height={70} width={70}/>
        ) : (
          <img src="https://metaco.gg/images/default-image-reward-thumb.svg" alt={player.name + "_img"}  height={70} width={70}/>
        )
      }
      <p>{player.name}</p>
      <p>coin : {player.coin}</p>
      <button className="blue-button" style={{fontSize: "10px", width: "100px"}}>LIHAT PROFILE</button>
    </div>
  );
}
