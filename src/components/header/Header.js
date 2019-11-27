import React from 'react'
import Search from './Search'
import './Header.css'

const Header = () => {
  const currentDate = new Date().toLocaleDateString()
  return (
    <header className="header">
      <aside>
        <h1 className="header__title">News</h1>
        <time dateTime={currentDate}>{currentDate}</time>
      </aside>
      <Search />
    </header>
  )
}

export default Header
