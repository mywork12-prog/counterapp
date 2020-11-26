import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import dashboard from "./views/dashboard";
import game from "./views/game";
import profile from "./views/profile";
import wallet from "./views/wallet";
import bids from "./views/bids";
import Gamescreen from "./component/gamescreen";
import Login from "./views/login";
// import PrivateRoute from "./component/privateRoute";

import GamesContext from "./context/gameContext";

function App() {
  return (
      <GamesContext>
        <div className="App">
          <Router >
            <Route  path="/gamescreen" component={Gamescreen}  />
            <Route path="/" component={Login} exact />
            <Route path="/dashboard" component={dashboard}  />
            <Route path="/game" component={game}  />
            <Route path="/profile" component={profile}  />
            <Route path="/wallet" component={wallet}  />
            <Route path="/bids" component={bids}  />
          </Router>
        </div>
      </GamesContext>

  );
}

export default App;
