import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article2_3 (){
  const img = 'https://contaduriapublica.org.mx/wp-content/uploads/2019/03/shutterstock_352626623-1024x717.jpg'

  return (
    <div id="2-3" className="article article-none">
      <Title type={3}>Principales áreas, actividades y resultados que se auditan</Title>

      <Text>
        <p>Las principales áreas, funciones, operaciones, resultados y actividades de una empresa o unidad administrativa que se pueden auditar. Los puntos planteados son útiles como punto de partida para cualquier tipo de auditoría, aunque se pueden ampliar de acuerdo con las necesidades específicas de la revisión. La finalidad es que el auditor cuente con un marco de referencia para aplicar la auditoría de manera correcta, utilizando las técnicas, procedimientos y herramientas adecuados para emitir un dictamen confiable con los resultados de la revisión.</p>

        <Imagen src={img} alt={'Principales áreas, actividades y resultados que se auditan'}/>

        <p>Entre las principales áreas que se pueden auditar, se incluyen la evaluación de los estados financieros y operaciones contables, donde se revisa el cumplimiento de las normas contables y se verifica la correcta emisión de los resultados financieros alcanzados durante un periodo específico, de acuerdo con las leyes y regulaciones vigentes. También se puede realizar una evaluación de los objetivos, planes, programas y presupuestos, así como de la estructura organizacional, funciones, perfil de puestos, líneas de autoridad y comunicaciones.</p>

        <p>Otra área importante es la evaluación de la administración de los recursos humanos, que incluye la selección, capacitación, adiestramiento y obligaciones de los trabajadores, la definición de sus funciones y tareas, los contratos laborales, así como los aspectos sindicales, normas y reglamentos que regulan las relaciones laborales. Además, se puede auditar la administración de las prestaciones, impuestos y obligaciones fiscales de la empresa y sus funcionarios, así como de sus bienes y activos.</p>

        <p>Por último, también se puede realizar una evaluación de las normas, políticas, métodos y procedimientos de operación de la empresa, a fin de determinar el buen desempeño de sus labores y cumplimiento de sus objetivos. En resumen, esta propuesta de áreas a auditar permite al auditor tener una guía para determinar las evaluaciones que debe realizar, ampliando los puntos planteados según las necesidades específicas de cada revisión.</p>
      </Text>
    </div>
  )
}