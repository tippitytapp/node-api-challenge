import React from 'react';
import ProjectsList from "./projects/ProjectsList"
import logo from './logo.svg';
import './App.css';
import AddProject from './projects/AddProject';
import {Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Link to="/projects">Click Here to View All Projects</Link><br/>
    <Link to="/add">Click Here to Add a Project</Link>
    <Route path="/projects"><ProjectsList /></Route>
    <Route exact path="/add"><AddProject /></Route>
    </div>
  );
}

export default App;
