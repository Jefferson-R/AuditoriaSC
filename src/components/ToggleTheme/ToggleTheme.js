export function toggleTheme (){
  const currentTheme = document.body.dataset.theme

  switch (currentTheme) {
    case "dark":
      document.body.dataset.theme = "light"
      break;

    case "light":
      document.body.dataset.theme = "dark"
      break;
  
    default:
      break;
  }
}