import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import Contact from './components/Contact';

import './App.scss';

function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
