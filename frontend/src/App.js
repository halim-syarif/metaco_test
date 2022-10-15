// eslint-disable-next-line
import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import './assets/styles/index.css'

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tournament from "./pages/Tournament";
import LeaderBoard from "./pages/LeaderBoard";
import Explorer from "./pages/Explorer";
import Footer from "./components/Footer";
import { setErrorMessage, setSuccessMessage } from "./store/action";

function App() {
  const dispatch = useDispatch()
  const { errorMessage, successMessage } = useSelector(state => state)

  useEffect(() => {
    if(errorMessage){
      toast(errorMessage)
      dispatch(setErrorMessage(''))
    }
    if(successMessage){
      toast(successMessage)
      dispatch(setSuccessMessage(""))
    }
    // eslint-disable-next-line
  },[errorMessage, successMessage])


  return (
    <div className="App">
      <ToastContainer/>
      <Navbar />
      <Switch>
        <Route path="/tournament" component={Tournament} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/explorer" component={Explorer} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}


export default App;
