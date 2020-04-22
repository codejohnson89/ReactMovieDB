import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Header from './components/modules/Header';
import Footer from './components/modules/Footer';
import Contact from './components/Contact';

import './App.scss';
import Results from './components/modules/Results';
import Tvshows from './components/Tvshows';
import SignUp from './components/SignUp';


function App() {
  return (
    <Router>
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tvshows" exact component={Tvshows} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/results" exact component={Results} />
        <Route path="/SignUp" exact component={SignUp} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
