import { useContext } from 'preact/hooks'
import { currentArticleContext } from '../App'
import { Text } from '../Text'
import { showArticle } from './ArticleRef'
import './articleRef.scss'

export function ArticleRef ({idArticle, children}) {
  const {currentArticle ,setCurrentArticle} = useContext(currentArticleContext)

  return (
    <div className="linkContainer">
      <strong><Text>{children}</Text></strong>
      <button onClick={() => showArticle(idArticle, setCurrentArticle, currentArticle)}><span>Leer más</span></button>
    </div>
  )
}