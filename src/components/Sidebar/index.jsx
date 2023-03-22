import './sidebar.scss'
import { BackButton } from '../BackButton'
import { Article1_1 } from '../articles/Article1_1'

export function Sidebar () {
  return (
    <div className="sidebar sidebar-inactive">
      <BackButton />
      <Article1_1 />
    </div>
  )
}