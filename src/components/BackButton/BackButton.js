export function hideArticle (currentArticle, setCurrentArticle, hideSidebar = true, same) {
  const articles = document.querySelectorAll('.article')
  const articlesArr = Array.from(articles)

  const sidebar = document.querySelector('.sidebar')
  const main = document.querySelector('.main')
  const article = articlesArr[currentArticle.index]

  setCurrentArticle({})

  if (hideSidebar) {
    sidebar.classList.add('sidebar-inactive')
    main.classList.remove('main-inactive')
  }
  if (!same) {
    setTimeout(() => {
      article.classList.add('article-none')
    }, 400);
  }
}