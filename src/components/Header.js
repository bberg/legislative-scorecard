import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header(props) {
  return (
    <div className="header">
      <div className="banner container">
        <Link to="/" className="brand">
          DC Open Advocacy
        </Link>
        <span className="scorecard-title">DC Council Legislative Scorecard</span>
      </div>
      <nav className="container">
        
        <NavLink to="/bills" activeClassName="active">Bills</NavLink>
        <NavLink to="/all-scores" activeClassName="active">All Scores</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
      </nav>
    </div>
  )
}

// <NavLink to="/legislators" activeClassName="active">Legislators</NavLink>
