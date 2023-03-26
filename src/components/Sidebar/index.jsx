import './sidebar.scss'
import { BackButton } from '../BackButton'
import { Article1_1 } from '../articles/Article1_1'
import { Article1_2 } from '../articles/Article1_2'
import { Article1_3 } from '../articles/Article1_3'
import { Article1_4 } from '../articles/Article1_4'
import { Article1_5 } from '../articles/Article1_5'
import { Article2_1 } from '../articles/Article2_1'
import { Article2_2 } from '../articles/Article2_2'
import { Article2_3 } from '../articles/Article2_3'
import { Article2_4 } from '../articles/Article2_4'
import { Article2_5 } from '../articles/Article2_5'
import { Article2_6 } from '../articles/Article2_6'
import { Article3_1 } from '../articles/Article3_1'
import { Article3_2 } from '../articles/Article3_2'
import { Article3_3 } from '../articles/Article3_3'
import { Article3_4 } from '../articles/Article3_4'

export function Sidebar () {
  return (
    <div className="sidebar sidebar-inactive">
      <div className="back-button-container">
        <BackButton />
      </div>
      <Article1_1 />
      <Article1_2 />
      <Article1_3 />
      <Article1_4 />
      <Article1_5 />
      <Article2_1 />
      <Article2_2 />
      <Article2_3 />
      <Article2_4 />
      <Article2_5 />
      <Article2_6 />
      <Article3_1 />
      <Article3_2 />
      <Article3_3 />
      <Article3_4 />
    </div>
  )
}