
import React from 'react';
import { NavLink } from "react-router-dom";

export default class navbar extends React.Component {

  render() {

    return (
      <div id="navbar">
        <div id="navbar-items">
          <NavLink activeStyle={{
            fontWeight: "bold",
            color: "red"
          }} to="/" id="home">Home</NavLink>

          <NavLink activeStyle={{
            textDecoration: "none",
            color: "black"
          }} to="/about">About</NavLink>

          <NavLink activeStyle={{
            textDecoration: "none",
            color: "black"
          }} to="/projects">Projecs</NavLink>

          <div id="navbar-location-right">
            <NavLink activeStyle={{
            fontWeight: "bold",
            color: "red"
          }} id="admin" to="#">By Moe</NavLink>
          </div>
        </div>
      </div>
    )
  }
}
