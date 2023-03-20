import { ContainerChapter } from '../../ContainerChapter'
import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'
import { ContainerArticlesRefs } from '../../ContainerArticlesRefs'
import { ArticleRef } from '../../ArticleRef'

const img = 'https://lcseguridadinformatica.files.wordpress.com/2017/01/auditoria-sistemas.jpg'

export function ChapterOne () {
  return (
    <ContainerChapter>
      <Title type={2}>Conceptos generales</Title>
      <Imagen src={img} alt={"Conceptos generales"} />
      <Text>
        <p><strong>El desarrollo normal de las actividades comerciales y financieras de las empresas requiere una constante vigilancia y evaluación;</strong> asimismo, las empresas necesitan una opinión, <em>preferiblemente independiente,</em> que les ayude a medir la eficiencia y eficacia en el cumplimiento de sus objetivos. Por lo general, la evaluación consiste en una <u>revisión metódica, periódica e intelectual</u> de los registros tareas y resultados de la empresa, con lo cual se busca medir y diagnosticar el comportamiento global en el desarrollo de sus actividades y operaciones. <span style="color: var(--tertiary)">Eso es auditoría.</span></p>

        <br />
        
        <p>Los inicios de la auditoría se remontan a la <i>revisión y el diagnóstico</i> que se practicaban a los registros de las operaciones contables de las empresas; después se pasó al <u>análisis, verificación y evaluación</u> de sus aspectos financieros; posteriormente se amplió al examen de algunos rubros de la administración, siguiendo con el análisis de aquellos aspectos que intervenían en todas sus actividades y, por último, su alcance se incrementó conforme se avanzó en la llamada revisión integral. Actualmente se ha llegado a las revisiones especializadas de algunas áreas y actividades específicas que se desempeñan en las instituciones. Entre algunas de estas últimas encontramos: <em>auditoría de sistemas computacionales, auditoría del desarrollo de proyectos de mercadotecnia, auditoría de proyectos económicos,</em> y en sí a muchas ramas de la actividad empresarial.</p>
        
        <br />

        <p>Con el propósito de dar a conocer cuál ha sido el desempeño y desarrollo de este tipo de trabajos, a continuación veremos los aspectos más destacados que intervienen en una auditoría, empezando por sus antecedentes, conceptos básicos y los diferentes tipos o métodos de auditorías, así como sus definiciones. Estos aspectos son sólo una introducción, ya que en capítulos posteriores nos enfocaremos exclusivamente a la <span style="color: var(--tertiary)">auditoría de sistemas computacionales.</span></p>
        
        <br />
      </Text>
      <ContainerArticlesRefs>
        <ArticleRef>
          Antecedentes de la auditoría
        </ArticleRef>
        <ArticleRef>
          Conceptos básicos sobre la auditoría
        </ArticleRef>
        <ArticleRef>
          Clasificación de los tipos de auditorías
        </ArticleRef>
        <ArticleRef>
          Objetivos generales de la auditoría
        </ArticleRef>
        <ArticleRef>
          Marco esquemático de la auditoría de sistemas computacionales
        </ArticleRef>
      </ContainerArticlesRefs>
    </ContainerChapter>
  )
}