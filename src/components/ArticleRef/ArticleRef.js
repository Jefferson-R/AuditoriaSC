import { hideArticle } from "../BackButton/BackButton"

export function showArticle (idArticle, setCurrentArticle, currentArticle) {
  const articles = document.querySelectorAll('.article')
  const articlesArr = Array.from(articles)
  
  const sidebar = document.querySelector('.sidebar')
  const main = document.querySelector('.main')
  
  if (currentArticle?.id) {
    hideArticle(currentArticle, setCurrentArticle, false, currentArticle.id == idArticle)
  }

  const indexCurrentArticle = articlesArr.findIndex(article => article.id == idArticle)
  
  setCurrentArticle({id: idArticle, index: indexCurrentArticle})
  
  const article = articlesArr[indexCurrentArticle]
  
  main.classList.add('main-inactive')
  article.classList.remove('article-opacity')
  article.classList.remove('article-none')
  sidebar.classList.remove('sidebar-inactive')
}