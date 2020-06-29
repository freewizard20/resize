import React from "react";
import Homepage from "./components/Homepage";
import Footer from "./components/nav/Footer";
import Header from "./components/nav/Header";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/pages/About";
import Tos from "./components/pages/Tos";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/About" exact component={About} />
          <Route path="/tos" exact component={Tos} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
