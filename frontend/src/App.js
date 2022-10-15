// eslint-disable-next-line
import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css'

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LeaderBoard from "./pages/LeaderBoard";
import Explorer from "./pages/Explorer";
import Footer from "./components/Footer";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/explorer" component={Explorer} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
}


export default App;
