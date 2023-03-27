import { useState } from 'preact/hooks'
import { createContext } from 'preact'
import { Main } from '../Main'
import { Sidebar } from '../Sidebar'
import { Footer } from '../Footer'
import './app.scss'

export const currentArticleContext = createContext()

export function App() {
  const [currentArticle, setCurrentArticle] = useState({})

  return (
    <>
      <currentArticleContext.Provider value={{currentArticle, setCurrentArticle}}>
        <Main />
        <Sidebar />
        <Footer />
      </currentArticleContext.Provider>
    </>
  )
}
