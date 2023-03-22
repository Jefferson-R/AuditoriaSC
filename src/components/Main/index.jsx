import { Header } from '../Header'
import { ChapterOne } from '../chapters/ChapterOne'
import { ChapterTwo } from '../chapters/ChapterTwo'
import { ChapterThree } from '../chapters/ChapterThree'
import './main.scss'

export function Main () {
  return (
    <div id='main' className="main">
      <Header />

      <ChapterOne />
      <ChapterTwo />
      <ChapterThree />
    </div>
  )
}