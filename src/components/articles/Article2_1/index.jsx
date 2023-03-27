import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article2_1 (){
  const img = 'https://definicion.de/wp-content/uploads/2008/10/auditoria-1.jpg'

  return (
    <div id="2-1" className="article article-none">
      <Title type={3}>Definición general de auditoría</Title>

      <Text>
        <p>La auditoría es una revisión independiente que lleva a cabo un auditor profesional utilizando técnicas, métodos y procedimientos especializados para evaluar el cumplimiento de las funciones, actividades, tareas y procedimientos de una entidad administrativa, con el objetivo de emitir un dictamen sobre el resultado de dicha evaluación. Es esencial que el auditor tenga una completa independencia mental, profesional y laboral para actuar como un verdadero profesional al realizar cualquier tipo de evaluación, lo que garantiza la confiabilidad de un auditor.</p>

        <Imagen src={img} alt={'Definición general de auditoría'}/>

        <p>La auditoría es una actividad altamente especializada que solo puede ser realizada por aquellos que tienen la capacitación profesional necesaria y los conocimientos, experiencia, actitudes y aptitudes necesarias para cumplir con los estándares requeridos por las empresas y la sociedad. En México, es un requisito indispensable que los auditores especializados en auditoría fiscal y contable tengan un título y una cédula profesional vigentes respaldados por colegios y asociaciones que respalden la calidad profesional requerida para esta actividad.</p>

        <p>La tarea principal del auditor es evaluar las funciones, actividades, tareas y procedimientos que se llevan a cabo en cualquier empresa o área administrativa para comprobar si se cumplen de manera adecuada. El informe final de una auditoría es el resultado de la revisión, en el que el auditor emite una opinión profesional e independiente, plasmada en un documento formal llamado dictamen, detallando las desviaciones y otros aspectos observados durante su evaluación para que los interesados conozcan el estado de las actividades y operaciones de la empresa o área auditada.</p>
        
        <p>Por último, cualquier profesional con un título universitario puede actuar como auditor, pero si carece de los conocimientos especializados necesarios para esta actividad, difícilmente podrá realizarla de manera eficaz y eficiente. Esto se debe a que no estaría familiarizado con las técnicas, métodos, procedimientos y herramientas especializadas requeridas, y aunque estuviera familiarizado con ellas, no podría utilizarlas eficazmente sin conocimientos profundos en estas áreas especializadas de su profesión original.</p>
      </Text>
    </div>
  )
}