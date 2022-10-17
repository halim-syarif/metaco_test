import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TournamentCard from '../components/TournamentCard'
import { getAllTournament } from "../store/action";
import ScaleLoader from "react-spinners/ScaleLoader";

export default function Tournament() {
  const dispatch = useDispatch()
  const { loading, tournaments } = useSelector(state => state)

  useEffect(() => {
    dispatch(getAllTournament())
    // eslint-disable-next-line
  },[])

  return (
    <div className="body">
      <div className="row">
        <h1>ALL Tournament</h1>
        <div style={{marginTop: "30px", marginLeft: "20px"}}>
          <ScaleLoader
            color="lightBlue"
            height="20px"
            width="10px"
            loading={loading}
          />
        </div>
      </div>
      <div className="tournament-container">
        {
          tournaments.length > 0 && tournaments.map(el => {
            return <TournamentCard key={el.id} data={el}/>
          })
        }
      </div>
    </div>
  );
}

