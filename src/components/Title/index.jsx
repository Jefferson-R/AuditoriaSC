import './title.scss'

export function Title ({type ,children}) {
  {switch (type) {
    case 1:
      return <h1 className='title-1'>{children}</h1>
      break;

    case 2:
      return <h2 className='title-1'>{children}</h2>
      break;
      
    case 3:
      return <h3 className='title-2'>{children}</h3>
      break;

    default:
      break;
  }}
}