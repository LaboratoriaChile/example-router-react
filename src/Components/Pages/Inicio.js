import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Profile from './Profile';
import Wall from './../Pages/Wall';
import './styles.css';


const Inicio = () => (
  <Router>
    <div>
      <Link to="/" className="link">Wall</Link>
      <Link to="/profile" className="link">Profile</Link>
      <Route exact path="/" component={Wall} />
      <Route path="/profile" component={Profile} />
    </div>
  </Router>
);



export default Inicio;