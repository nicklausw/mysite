import React from 'react'
import { Link, Router } from '@reach/router'

const burgerClick = () => {
  const el = document.getElementById("burger");
  const target = el.dataset.target;
  const $target = document.getElementById(target);

  // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
  el.classList.toggle('is-active');
  $target.classList.toggle('is-active');
}

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar is-spaced is-black" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <h1 style={{fontSize: "30px"}}>nicklausw</h1>
          </Link>
          <a role="button" id="burger" className="navbar-burger" onClick={burgerClick} aria-label="menu" aria-expanded="false" data-target="navbarBasic">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className="navbar-start"></div>
        <div className="navbar-end">
        <div id="navbarBasic" className="navbar-menu has-background-black">
            <Link onClick={burgerClick} className="navbar-item has-text-white has-background-black" to="/">
              Home
            </Link>

            <Link onClick={burgerClick} className="navbar-item has-text-white has-background-black" to="/about">
              About
            </Link>
            </div>
        </div>
      </nav>
    );
  }
}