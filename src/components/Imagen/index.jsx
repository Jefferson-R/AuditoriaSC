import './imagen.scss'

export function Imagen ({src, alt}) {
  return <img src={src} alt={alt} loading='lazy' />
}