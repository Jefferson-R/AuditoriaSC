export function showArticle (idArticle, setIndexArticle) {
  const articles = document.querySelectorAll('.article')
  const articlesArr = Array.from(articles)
  
  const sidebar = document.querySelector('.sidebar')
  const main = document.querySelector('.main')
  
  const indexCurrentArticle = articlesArr.findIndex(article => article.id == idArticle)
  
  setIndexArticle({id: idArticle, index: indexCurrentArticle})
  
  const article = articlesArr[indexCurrentArticle]
  
  main.classList.add('main-inactive')
  article.classList.remove('article-inactive')
  sidebar.classList.remove('sidebar-inactive')
}