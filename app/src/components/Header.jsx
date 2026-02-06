import React from 'react'
import "./Header.css";


function Header(a) {
  return (
    <>
    <h1>{a.title}</h1>
    <nav className="navbar">
        <a href='#'>home </a>
        <a href='#'> login  </a>
        <a href='#'>contact us </a>
    </nav>
    </>
  )
}

export default Header