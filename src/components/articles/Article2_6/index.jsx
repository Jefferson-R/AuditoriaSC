import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article2_6 (){
  const img = 'https://www.laboneconsultoria.com.br/wp-content/uploads/2022/04/Classifica%C3%A7%C3%A3o-das-empresas-pelo-porte.jpg'

  return (
    <div id="2-6" className="article article-inactive">
      <Title type={3}>Estructuras de organización de las empresas y áreas dedicadas a la auditoría</Title>

      <Text>
        <p>La estructura organizativa de las empresas y las áreas de auditoría es fundamental para asegurar la eficiencia y efectividad de los procesos de auditoría. En México, existen diversas propuestas de organización para clasificar estas estructuras, las cuales se dividen en dos grupos.</p>
        <Imagen src={img} alt={'Estructuras de organización de las empresas y áreas dedicadas a la auditoría'}/>
        <p>El primer grupo se enfoca en las empresas de auditoría externa, y se clasifica en tres grandes categorías según el tamaño de la empresa. Para adecuarse a las necesidades de la empresa, se proponen niveles de puestos que incluyen desde directores o gerentes generales, hasta auditores junior y apoyo administrativo y secretarial.</p>
        <p>El segundo grupo se enfoca en las empresas que cuentan con áreas de auditoría interna, y se ubican tres tipos de áreas de auditoría interna dentro de las empresas, tomando en cuenta el tamaño de la institución y el número de empleados que haya en el área de auditoría interna.</p>
        <p>Es importante destacar que los niveles de estructura propuestos son indicativos para la organización de cualquier empresa dedicada a la auditoría externa o interna, y pueden ajustarse a las necesidades específicas de la institución, tales como las especialidades de su personal, las necesidades de sus clientes o cualquier otro criterio que le ayude a evaluar sus funciones, actividades u operaciones.</p>
        <p>En conclusión, la estructura organizativa es fundamental para garantizar la calidad de los procesos de auditoría. En este sentido, las propuestas de organización presentadas son una guía para las empresas y áreas de auditoría que buscan mejorar su eficiencia y efectividad en la realización de sus actividades.</p>
      </Text>
    </div>
  )
}