import { useState } from 'preact/hooks'
import { createContext } from 'preact'
import { Main } from '../Main'
import { Nav } from '../Nav'
import { Sidebar } from '../Sidebar'
import './app.scss'

export const currentArticleContext = createContext()

export function App() {
  const [currentArticle, setCurrentArticle] = useState({})

  return (
    <>
      <currentArticleContext.Provider value={{currentArticle, setCurrentArticle}}>
        <Main />
        <Sidebar />
        <Nav />
      </currentArticleContext.Provider>
    </>
  )
}
