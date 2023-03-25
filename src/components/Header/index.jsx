import { Title } from '../Title'
import { ToggleTheme } from '../ToggleTheme'
import './header.scss'

const imgSala = 'https://img.freepik.com/fotos-premium/interior-moderno-elegante-sala-estar-oscura-acogedor-sofa-gris-oscuro-sobre-paneles-pared-negros_67155-18619.jpg'

export function Header () {
  return (
    <div className='header'>
        <div className='header-theme-button'><ToggleTheme /></div>
        <div className='header-title'><Title type={1}>Auditoría de Sistemas Computacionales</Title></div>
        <div className='degraded'></div>
        <img src={imgSala} alt="Auditoría de Sistemas Computacionales" className='header--image' />
        <hr className='header-hr' />
    </div>
  )
}