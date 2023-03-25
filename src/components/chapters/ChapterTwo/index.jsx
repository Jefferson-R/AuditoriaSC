import { ContainerChapter } from '../../ContainerChapter'
import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'
import { ContainerArticlesRefs } from '../../ContainerArticlesRefs'
import { ArticleRef } from '../../ArticleRef'

const img = 'https://www.dedalocomunicacion.com/wp-content/uploads/2019/02/libros_lenguaje.jpg'

export function ChapterTwo () {
  return (
    <ContainerChapter>
      <Title type={2}>Elementos fundamentales en el estudio de la auditoría</Title>
      <Imagen src={img} alt={"Elementos fundamentales en el estudio de la auditoría"} />
      <Text>
        <p>La <b>auditoría</b> es una disciplina <i>fundamental</i> en el mundo empresarial y financiero. Su <i>propósito</i> es evaluar y medir el <i>rendimiento</i> de las empresas en términos de eficiencia y eficacia en el cumplimiento de sus objetivos. La auditoría no solo se enfoca en los aspectos financieros, sino que también abarca otros aspectos como la administración y el comportamiento global de la empresa.</p>

        <br />

        <p>Para <i>entender los fundamentos</i> de cualquier tipo de auditoría, es importante tener en cuenta los puntos que se tratan en este <u>capítulo</u>. La uniformidad de los cimientos, conceptos y aplicaciones de la auditoría asegura que cualquier tipo de auditoría sigue un proceso riguroso y bien definido. Sin embargo, el objetivo específico y las herramientas utilizadas pueden variar según la especialidad a evaluar.</p>

        <br />

        <p>Es importante destacar que la auditoría no solo se enfoca en encontrar errores o irregularidades en la empresa, sino que también puede proporcionar <i>recomendaciones y soluciones</i> para mejorar su desempeño. <span style="color: var(--tertiary)">La auditoría puede ayudar a las empresas a ser más eficientes y efectivas</span> en sus operaciones, lo que a su vez puede tener un impacto positivo en su <i>rentabilidad</i> y en la <i>satisfacción</i> de sus clientes.</p>

        <br />

        <p>En <u>conclusión</u>, la auditoría es una herramienta clave para las empresas en su búsqueda de la <i>mejora continua</i> y la <i>excelencia operativa</i>. Entender los fundamentos de cualquier tipo de auditoría es esencial para su correcta aplicación y para obtener los mejores resultados posibles.</p>
        
        <br />
      </Text>
      <ContainerArticlesRefs>
        <ArticleRef idArticle={'2-1'}>
          Definición general de auditoría
        </ArticleRef>
        <ArticleRef idArticle={'2-2'}>
          Objetivos particulares de cada tipo de auditoría
        </ArticleRef>
        <ArticleRef idArticle={'2-3'}>
          Principales áreas, actividades y resultados que se auditan
        </ArticleRef>
        <ArticleRef idArticle={'2-4'}>
          Normas generales de auditoría
        </ArticleRef>
        <ArticleRef idArticle={'2-5'}>
          Métodos, técnicas, herramientas y procedimientos de auditoría
        </ArticleRef>
        <ArticleRef idArticle={'2-6'}>
          Estructuras de organización de las empresas y áreas dedicadas...
        </ArticleRef>
      </ContainerArticlesRefs>
    </ContainerChapter>
  )
}