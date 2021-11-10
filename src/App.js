import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css'

import { Navbar } from './components/Navbar';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About';

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/About' exact component={About} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
