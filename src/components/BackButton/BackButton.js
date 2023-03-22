export function hideArticle (currentArticle, setCurrentArticle) {
  const articles = document.querySelectorAll('.article')
  const articlesArr = Array.from(articles)

  const sidebar = document.querySelector('.sidebar')
  const main = document.querySelector('.main')
  const article = articlesArr[currentArticle.index]

  setCurrentArticle({})
  
  sidebar.classList.add('sidebar-inactive')
  article.classList.add('article-inactive')
  main.classList.remove('main-inactive')
}