import React from 'react'
import Search from './Search'
import './Header.css'

const Header = () => {
  const currentDate = new Date().toLocaleDateString()
  return (
    <header className="header">
      <h1 className="header__title">News App</h1>
      <Search />
      <time dateTime={currentDate}>{currentDate}</time>
    </header>
  )
}

export default Header
