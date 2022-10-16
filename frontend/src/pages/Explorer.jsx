import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/action";

import Search from "../components/Search";
import Player from "../components/Player"
import ReactPaginate from 'react-paginate';

export default function Explorer() {
  const dispatch = useDispatch()
  const { users, usersCount } = useSelector(state => state)

  const [itemsPerPage, setItemsPerPage] = useState(6)
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(0)

  const [searchName, setSearchName] = useState('')

  const fetchData = () => {
    dispatch(getUsers(itemsPerPage, itemOffset, searchName))
  }

  useEffect(() => {
    if(users.length > 0){
      setPageCount(Math.ceil(usersCount / itemsPerPage))
    }
    // eslint-disable-next-line
  },[users, usersCount])

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    setItemOffset(event.selected * itemsPerPage);
  };

  const changeAmountData = () => {
    let amountData = document.getElementById('amountData').value
    setItemsPerPage(amountData)
  }

  const clearData = () => {
    setItemsPerPage(6)
    setSearchName('')
  }

  return (
    <div className="body">
      <div className="header">
        <p style={{color: '#343a40', marginRight: '10px'}}>Home<span style={{color: '#fff'}}>{' '}/ Gamer Explorer</span></p>
        <div className="row">
          <Search placeholder={'Search'} searchName={searchName} setSearchName={setSearchName} findSearch={fetchData}/>
          <div className="select-wrapper">
            <select id="amountData" style={{marginLeft: "20px"}} onChange={changeAmountData} value={itemsPerPage}>
              <option value="6">6 Data</option>
              <option value="12">12 Data</option>
              <option value="18">18 Data</option>
            </select>
          </div>
          <button className="grey-button" style={{marginLeft: "20px", width: "100px"}} onClick={clearData}>Clear</button>
        </div>
        <div className="row" style={{ marginTop: "20px"}}>
          <button className="blue-button">Team</button>
          <button className="grey-button" style={{marginLeft: "20px"}}>Player</button>
        </div>
      </div>
      <div className="body-container">
        <p>Hasil : {usersCount} Player</p>
        <div className="grid-container">
          {
            users.length > 0 && users.map(el => {
              return <Player key={el.id} player={el}/>
            })
          }
        </div>
        <div style={{marginTop: '25px'}}>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            className="pagination"
            pageRangeDisplayed={2}
            marginPagesDisplayed={3}
            pageCount={pageCount}
            previousLabel="<"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      </div>
    </div>
  );
}

