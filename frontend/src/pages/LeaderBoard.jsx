import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLeaderBoard } from "../store/action";

export default function LeaderBoard() {
  const dispatch = useDispatch()
  const { leaderBoards } = useSelector(state => state)

  useEffect(() => {
    dispatch(getLeaderBoard())
    // eslint-disable-next-line
  },[])

  return (
    <div className="body">
      <h1 style={{textAlign: "center"}}>LeaderBoard</h1>
      <div className="container">
        <table>
          <thead>
            <tr>
              <td style={{width: "100px"}}>Rangking</td>
              <td style={{textAlign: "left", width: "350px"}}>Nama Team</td>
              <td style={{textAlign: "left", width: "250px"}}>Nama Kapten</td>
              <td style={{width: "100px"}}>Point</td>
            </tr>
          </thead>
          <tbody>
            {
              leaderBoards.length > 0 && leaderBoards.map((el, idx) => {
                return (
                  <tr key={idx} className={idx < 3 ? "active" : ""}>
                    <td style={{width: "100px"}}>{idx + 1}</td>
                    <td style={{textAlign: "left", width: "350px", display: "flex", flexDirection: "row", alignItems: "center" }}>
                      {
                        el.logo ? (
                          <img src={el.logo} alt={el.name} height={30} width={30} />
                        ) : (
                          <img src="https://metaco.gg/images/default-image-reward-thumb.svg" alt={"metaco_img"} height={30} width={30} />
                        )
                      }
                      <span style={{ marginLeft: "20px"}}>{el.name}</span>
                    </td>
                    <td style={{textAlign: "left", width: "250px"}}>{el.User ? el.User.name : "-"}</td>
                    <td style={{width: "100px"}}>{el.total_point || 0}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

