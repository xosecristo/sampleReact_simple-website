import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home.jsx';
import { About } from './pages/About';
import { Cards } from './pages/Cards';

import './App.css'

function App() {
  return (
    <main>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/Cards' exact component={Cards} />
          <Route path='/About' exact component={About} />
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
