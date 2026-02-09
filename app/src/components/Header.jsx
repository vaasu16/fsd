import React from 'react'
import "./Header.css";


function Header({title,color,card}) {
  return (
    <>
    <h1>{title}</h1>
    <h2>{color}</h2>
    {card}

    <nav className="navbar">
        <a href='#'>home </a>
        <a href='#'> login  </a>
        <a href='#'>contact us </a>
    </nav>
    </>
  )
}

export default Header