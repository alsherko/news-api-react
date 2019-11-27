import React from 'react'
import Header from './header/Header'
import Toolbar from './Toolbar'
import ArticleContainer from '../container/ArticleContainer'
import SourceContainer from '../container/SourceContainer'
import { ArticleProvider } from '../context/ArticleContext'
import './App.css'

const App = () => {
  return (
    <ArticleProvider>
      <Header />
      <main className="main">
        <Toolbar />
        <ArticleContainer />
        <SourceContainer />
      </main>
    </ArticleProvider>
  )
}

export default App
