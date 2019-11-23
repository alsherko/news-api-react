import React from 'react'
import Search from './Search'
import './Header.css'

const Header = () => {
  const currentDate = new Date().toJSON()
  const [yyyy, mm, dd] = currentDate.slice(0, 10).split('-')
  return (
    <header className="header">
      <h1 className="header__title">News App</h1>
      <Search />
      <time dateTime={currentDate}>{`${dd}-${mm}-${yyyy}`}</time>
    </header>
  )
}

export default Header
