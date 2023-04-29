import React from 'react'
import '../styles/Main.css'

const Navbar = () => {
  return (
    <div className='container-fluid'><nav className="navbar">
    <div className="logo">
      <img src='https://cdn.dribbble.com/users/1331452/screenshots/6696000/quiz_icon.png' alt="Logo" />
    </div>
    <div className="website-name">
      <h1>Uop Soc Career Advice Quiz</h1>
    </div>
  </nav></div>
  )
}

export default Navbar