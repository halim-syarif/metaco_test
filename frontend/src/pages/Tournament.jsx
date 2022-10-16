import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TournamentCard from '../components/TournamentCard'
import { getAllTournament } from "../store/action";

export default function Tournament() {
  const dispatch = useDispatch()
  const { tournaments } = useSelector(state => state)

  useEffect(() => {
    dispatch(getAllTournament())
    // eslint-disable-next-line
  },[])

  return (
    <div className="body">
      <h1>ALL Tournament</h1>
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

