import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route,Redirect } from "react-router-dom";
import dashboard from "./views/dashboard";
import game from "./views/game";
import profile from "./views/profile";
import wallet from "./views/wallet";
import bids from "./views/bids";
import Gamescreen from "./component/gamescreen";
import Login from "./views/login";
import PrivateRoute from "./component/privateRoute";

import GameProvider from "./context/gameContext";

function App() {
  return (
      <GameProvider>
        <div className="App">
          <Router >
              <Route exact path="/">
                  <Redirect to="/dashboard" />
              </Route>
              <PrivateRoute component={dashboard} path="/dashboard" />
              <PrivateRoute component={game} path="/game"  />
              <PrivateRoute component={profile} path="/profile"  />
              <PrivateRoute component={wallet} path="/wallet"  />
              <PrivateRoute component={bids} path="/bids"  />
              <PrivateRoute component={Gamescreen} path="/gamescreen"  />
              <Route path="/login" component={Login}  />
          </Router>
        </div>
      </GameProvider>

  );
}

export default App;
