import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article1_4 (){
  const img = 'https://www.escuelaeuropeaexcelencia.com/wp-content/uploads/2018/12/5-Pasos-para-una-auditoria-interna-de-calidad-efectiva.jpg'

  return (
    <div id="1-4" className="article article-none">
      <Title type={3}>Objetivos generales de la auditoría</Title>

      <Text>
        <p>La auditoría es un proceso fundamental que busca revisar de manera independiente y especializada el desempeño contable, financiero y operativo de una institución. Los objetivos generales de la auditoría incluyen evaluar la razonabilidad de las operaciones y resultados de una institución, así como verificar el cumplimiento de los planes, programas, políticas, normas y lineamientos que regulan su actuación.</p>

        <Imagen src={img} alt={'Objetivos generales de la auditoría'}/>

        <p>Además, otro objetivo importante de la auditoría es emitir un dictamen profesional e independiente sobre el desempeño de una empresa, así como sobre el cumplimiento de sus objetivos y operaciones. Estos objetivos pueden adaptarse a los diferentes tipos de auditoría que se pretendan realizar, y es fundamental establecer de manera precisa los objetivos que se pretenden cubrir antes de iniciar la evaluación de algún área.</p>

        <p>Cabe destacar que los objetivos generales de la auditoría proporcionan las bases sobre las que se desarrolla este proceso, y son fundamentales para garantizar la transparencia y eficacia de las actividades de una empresa. Por lo tanto, es esencial que los auditores cuenten con una sólida comprensión de estos objetivos y los tengan en cuenta al realizar su trabajo, para asegurar la calidad y eficacia de sus evaluaciones.</p>

        <p>En el siguiente capítulo se abordarán los objetivos específicos de la propuesta de clasificación de auditoría mencionada anteriormente, lo que permitirá una mayor comprensión de las diferentes categorías de auditoría y de los objetivos que se persiguen en cada una de ellas.</p>
      </Text>
    </div>
  )
}