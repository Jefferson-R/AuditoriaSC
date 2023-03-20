import { ContainerChapter } from '../../ContainerChapter'
import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'
import { ContainerArticlesRefs } from '../../ContainerArticlesRefs'
import { ArticleRef } from '../../ArticleRef'

const img = 'https://cdn.euroinnova.edu.es/img/subidasEditor/dise%C3%B1o%20sin%20t%C3%ADtulo%20-%202021-10-29t104425-1636573175.872'

export function ChapterThree () {
  return (
    <ContainerChapter>
      <Title type={2}>Normas ético-morales que regulan la actuación del auditor</Title>
      <Imagen src={img} alt={"Normas ético-morales que regulan la actuación del auditor"} />
      <Text>
      <p>Es muy grande la responsabilidad que tiene el auditor ante la sociedad, sus colegas de profesión y las empresas, ya que el hecho de permitirle que revise profesionalmente los documentos, información, activos y operaciones de la empresa, representa la confianza que se le otorga como <strong>profesional especializado</strong> en la materia; más aún, cuando se acepta su opinión en el dictamen que emite, se da por sentada su calidad moral, profesional y ética. Por eso la sociedad, los funcionarios y empleados de las empresas casi siempre están convencidos de que la actuación de un auditor siempre está respaldada por una gran experiencia, sólidos conocimientos en auditoría y en la utilización de las herramientas de evaluación que corresponden a su área de revisión.</p>

      <br />

      <p>Dicha confianza no sólo se deriva de la experiencia, los conocimientos o la aplicación de técnicas, procedimientos y herramientas de evaluación del auditor, sino que se tiene la certidumbre de que actúa como un verdadero <em>perito en su materia</em> y de que está investido de una excelente ética profesional, laboral, jurídica, moral y personal que le hace confiable en la evaluación y los resultados que emite.</p>

      <br />
      
      <p>Dicha creencia siempre está respaldada porque un auditor cumple, o por lo menos se supone que debe cumplir, con una serie de preceptos, normas y obligaciones, tanto en los ámbitos ético y moral como en el social, jurídico, laboral y profesional que le obligan a sujetarse a las normas establecidas por la sociedad. <u>Dichas normas le obligan a actuar como verdadero profesional de la auditoría.</u> En ello estriba la confianza que se le tiene como auditor.</p>

      <br />
      </Text>
      <ContainerArticlesRefs>
        <ArticleRef>
          Marco conceptual de la ética
        </ArticleRef>
        <ArticleRef>
          Principios de axiología y valores éticos
        </ArticleRef>
        <ArticleRef>
          Criterios y responsabilidades del auditor
        </ArticleRef>
        <ArticleRef>
          Normas profesionales del auditor
        </ArticleRef>
      </ContainerArticlesRefs>
    </ContainerChapter>
  )
}