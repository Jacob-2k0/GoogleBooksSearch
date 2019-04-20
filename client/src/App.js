import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Main from "./pages/Main";
import Saved from "./pages/Saved";
import "./App.css"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;