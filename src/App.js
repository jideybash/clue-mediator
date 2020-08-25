import React from "react";
import "./App.css";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import PageNotFound from "./PageNotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
