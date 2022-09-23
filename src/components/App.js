import React from "react";
import { Route, Switch} from "react-router-dom";
import About from "./About.js";
import Login from "./Login.js";
import Home from "./Home.js";
import NavBar from "./Navbar.js";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;