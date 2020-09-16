import React from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import Resume from './Components/Resume/Resume'
import './App.css'
import {AnimatePresence } from 'framer-motion'

function App() {
  return (
    <div>

      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/resume" component={Resume} />
        </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
