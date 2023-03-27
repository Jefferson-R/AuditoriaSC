import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article1_3 (){
  const img = 'https://chaui201711701221087.files.wordpress.com/2017/03/auditoria-de-marca.jpg?w=640'

  return (
    <div id="1-3" className="article article-none">
      <Title type={3}>Clasificación de los tipos de auditorías</Title>

      <Text>
        <p>La auditoría es una disciplina profesional que se clasifica en diferentes tipos según el lugar y el área de aplicación en la que se lleve a cabo, así como por su especialización en áreas específicas, como la médica, la fiscal, la laboral, la de proyectos de inversión, entre otras. La clasificación por su lugar de realización se refiere a si la auditoría es interna o externa, y la segunda se basa en el área de aplicación, como la financiera, la operacional o la gubernamental, entre otras. La auditoría externa se caracteriza por ser realizada por auditores ajenos a la empresa, lo que les permite emitir resultados independientes, libres y sin influencias, y es muy demandada en el ámbito contable, fiscal y financiero de las instituciones.</p>
        <Imagen src={img} alt={'Clasificación de los tipos de auditorías'}/>
        <p>Las auditorías externas son realizadas por grandes empresas y despachos independientes de auditores que gozan de prestigio y experiencia, utilizando técnicas y herramientas probadas en otras empresas con características similares. Sus dictámenes pueden ser válidos para las autoridades fiscales, siempre y cuando sean realizados por auditores de prestigio con reconocimiento público. Sin embargo, una de las principales desventajas es que el auditor tiene un conocimiento limitado de la empresa, lo que puede afectar la calidad de su evaluación. Además, su evaluación depende en gran medida de la cooperación que los auditados puedan brindarle, lo que puede resultar en evaluaciones, alcances y resultados limitados.</p>
        <p>En conclusión, la clasificación de los tipos de auditorías nos permite identificar los criterios, características y especificaciones de esta disciplina profesional, y elegir el tipo de auditoría que mejor se adapte a las necesidades de la empresa. La auditoría externa, al ser realizada por auditores ajenos a la empresa, se caracteriza por emitir resultados independientes y libres de influencias, lo que la hace muy demandada en el ámbito contable, fiscal y financiero de las instituciones. No obstante, es importante tener en cuenta sus limitaciones, como el conocimiento limitado de la empresa y la dependencia de la cooperación de los auditados para obtener información relevante.</p>
      </Text>
    </div>
  )
}