import React, { Fragment } from 'react'
import Header from './header/Header'
import Toolbar from './Toolbar'
import ArticleContainer from '../container/ArticleContainer'
import SourceContainer from '../container/SourceContainer'
import Footer from './Footer'
import { ArticleProvider } from '../context/ArticleContext'
import './App.css'

const App = () => {
  return (
    <Fragment>
      <ArticleProvider>
        <Header />
        <main className="main">
          <Toolbar />
          <ArticleContainer />
          <SourceContainer />
        </main>
      </ArticleProvider>
      <Footer />
    </Fragment>
  )
}

export default App
