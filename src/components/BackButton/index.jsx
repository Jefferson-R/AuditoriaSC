import { useContext } from 'preact/hooks'
import { currentArticleContext } from '../App'
import { hideArticle } from './BackButton'
import './backbutton.scss'

export function BackButton() {
  const {currentArticle, setCurrentArticle} = useContext(currentArticleContext)

  return (
    <button onClick={() => hideArticle(currentArticle, setCurrentArticle)} className="back-button">
      <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="48.000000pt" height="48.000000pt"
        viewBox="0 0 48.000000 48.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="var(--secondary)"
          stroke="none">
          <path
            d="M75 300 l-60 -60 63 -62 c48 -49 64 -60 74 -50 9 9 4 20 -27 52 l-39 40 185 2 c156 3 184 5 184 18 0 13 -28 15 -184 18 l-185 2 38 39 c33 34 41 61 18 61 -4 0 -34 -27 -67 -60z" />
        </g>
      </svg>
    </button>
  )
}