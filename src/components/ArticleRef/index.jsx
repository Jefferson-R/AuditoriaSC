import { Text } from '../Text'
import './articleRef.scss'

export function ArticleRef ({link, children}) {
  return (
    <div className="linkContainer">
      <strong><Text>{children}</Text></strong>
      <a href={link}><button><span>Leer más</span></button></a>
    </div>
  )
}