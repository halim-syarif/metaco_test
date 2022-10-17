/*eslint-disable*/
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import IcEdit from '../assets/img/edit'
import IcSave from '../assets/img/save'
import IcTrash from '../assets/img/trash'
import { postSaveWinner, deleteWinner, editSaveWinner, setErrorMessage } from "../store/action";

export default function TournamentCard({ data }) {
  const dispatch = useDispatch()
  const [winnerList, setWinnerList] = useState({
    "1" : '',
    "2" : '',
    "3" : ''
  })
  const [editMode, setEditMode] = useState({
    "1" : false,
    "2" : false,
    "3" : false
  })

  const changeEditMode = (key) => {
    if(editMode[key]){
      setEditMode({
        ...editMode, 
        [key] : false
      })
    } else {
      setEditMode({
        ...editMode, 
        [key] : true
      })
    }
  }

  const saveWinner = (position) => {
    const winner = document.getElementById(`winner${position}-` + data.id).value
    if (winner != winnerList[position]){
      if (winner){
        if (!winnerList[position]){
          dispatch(postSaveWinner(data.id, winner, position))
        } else {
          dispatch(editSaveWinner(data.id, winner, winnerList[position], position))
        }
      }
    } 
    changeEditMode(position)
  }

  const checkWinnerList = (data) => {
    let winner1, winner2, winner3

    data.forEach(el => {
      if(el.position === 1) winner1 = el.team_id
      if(el.position === 2) winner2 = el.team_id
      if(el.position === 3) winner3 = el.team_id
    });

    setWinnerList({
      ...winnerList,
      "1" : winner1,
      "2" : winner2,
      "3" : winner3
    })
  }

  useEffect(() => {
    if (data.Tournament_results.length > 0){
      checkWinnerList(data.Tournament_results)
    } else {
      setWinnerList({
        "1" : '',
        "2" : '',
        "3" : ''
      })
    }
  },[data])

  useEffect(() => {
    if (winnerList["1"]) {
      document.getElementById("option1-" + winnerList["1"]).selected = true
    } else {
      document.getElementById("default1-" + data.id).selected = true
    }
    if (winnerList["2"]) {
      document.getElementById("option2-" + winnerList["2"]).selected = true
    } else {
      document.getElementById("default2-" + data.id).selected = true
    }
    if (winnerList["3"]) {
      document.getElementById("option3-" + winnerList["3"]).selected = true
    } else {
      document.getElementById("default3-" + data.id).selected = true
    }
  },[winnerList])

  return (
    <div className="tournament-card">
      <h3>{data.title}</h3>
      <p>start date : {data.start_date}</p>
      <p>end date : {data.end_date}</p>
      <p>Slot : {data.slot}</p>
      <p>Participant : {data.team_count} Team</p>
      <p>Winner</p>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <p>Juara 1: </p>
        <div className={editMode["1"] ? "select-wrapper" : ""}>
          <select id={"winner1-" + data.id} className={editMode["1"] ? "gray" : ""} style={{marginLeft: "20px"}} disabled={!editMode["1"]} >
            <option value="" id={"default1-" + data.id} disabled >Select Winner</option>
            {
              data.Teams.map(el => {
                return <option key={el.id} value={el.id} id={"option1-" + el.id}>{el.name}</option>
              })
            }
          </select>
        </div>
        <div className="action">
          {
            editMode["1"] ? (
              <div className="iconAction" onClick={() => saveWinner("1")}>
                <IcSave />
              </div>
            ) : (
              <div className="iconAction" onClick={() => changeEditMode("1")}>
                <IcEdit />
              </div>
            )
          }
          <div className="iconAction" onClick={() => dispatch(deleteWinner(data.id, "1"))}>
            <IcTrash />
          </div>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <p>Juara 2: </p>
        <div className={editMode["2"] ? "select-wrapper" : ""}>
          <select id={"winner2-" + data.id} className={editMode["2"] ? "gray" : ""} style={{marginLeft: "20px"}} disabled={!editMode["2"]} >
            <option value="" id={"default2-" + data.id} disabled >Select Winner</option>
            {
              data.Teams.map(el => {
                return <option key={el.id} value={el.id} id={"option2-" + el.id}>{el.name}</option>
              })
            }
          </select>
        </div>
        <div className="action">
          {
            editMode["2"] ? (
              <div className="iconAction" onClick={() => saveWinner("2")}>
                <IcSave />
              </div>
            ) : (
              <div className="iconAction" onClick={() => changeEditMode("2")}>
                <IcEdit />
              </div>
            )
          }
          <div className="iconAction" onClick={() => dispatch(deleteWinner(data.id, "2"))}>
            <IcTrash />
          </div>
        </div>
      </div>
      <div className="row" style={{ justifyContent: "space-between" }}>
        <p>Juara 3: </p>
        <div className={editMode["3"] ? "select-wrapper" : ""}>
          <select id={"winner3-" + data.id} className={editMode["3"] ? "gray" : ""} style={{marginLeft: "20px"}} disabled={!editMode["3"]} >
            <option value="" id={"default3-" + data.id} disabled >Select Winner</option>
            {
              data.Teams.map(el => {
                return <option key={el.id} value={el.id} id={"option3-" + el.id}>{el.name}</option>
              })
            }
          </select>
        </div>
        <div className="action">
          {
            editMode["3"] ? (
              <div className="iconAction" onClick={() => saveWinner("3")}>
                <IcSave />
              </div>
            ) : (
              <div className="iconAction" onClick={() => changeEditMode("3")}>
                <IcEdit />
              </div>
            )
          }
          <div className="iconAction" onClick={() => dispatch(deleteWinner(data.id, "3"))}>
            <IcTrash />
          </div>
        </div>
      </div>
    </div>
  );
}
