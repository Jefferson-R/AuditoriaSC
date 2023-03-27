import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article1_2 (){
  const img = 'https://www.ealde.es/wp-content/uploads/2018/08/gestion-de-riesgos-auditoria.jpg'

  return (
    <div id="1-2" className="article article-none">
      <Title type={3}>Conceptos básicos sobre la auditoría</Title>

      <Text>
        <p>La <strong>auditoría</strong> es una disciplina que ha evolucionado a lo largo del tiempo, pasando de ser una herramienta utilizada principalmente en el ámbito contable a ser utilizada en áreas y disciplinas especializadas como la ingeniería, la medicina y los sistemas computacionales. Con este progreso, también ha habido un desarrollo de técnicas, métodos, procedimientos y herramientas específicas para cada tipo de auditoría, lo que ha llevado a un enfoque más especializado en el uso de técnicas apegadas al área que se va a evaluar.</p>

        <Imagen src={img} alt={'Conceptos básicos sobre la auditoría'}/>
        
        <p>La definición general de la <em>auditoría</em> es la revisión independiente de alguna o algunas actividades, funciones específicas, resultados u operaciones de una entidad administrativa, realizada por un profesional de la auditoría, con el propósito de evaluar su correcta realización y emitir una opinión autorizada sobre la razonabilidad de sus resultados y el cumplimiento de sus operaciones.</p>

        <p>La Real Academia Española también ofrece una definición de <u>auditor</u> y <u>auditoría</u>. Un auditor es una persona capacitada para realizar auditorías en empresas u otras instituciones, mientras que la auditoría es la supervisión y revisión de cuentas, procedimientos y transacciones financieras de una organización, realizada por especialistas ajenos a la misma, con el fin de evaluar la situación financiera y administrativa de la institución o empresa.</p>

        <p>En resumen, la <strong>auditoría</strong> es una disciplina que se utiliza para evaluar la correcta realización de actividades, funciones específicas, resultados u operaciones de una entidad administrativa y emitir una opinión autorizada sobre la razonabilidad de sus resultados y el cumplimiento de sus operaciones. Con la evolución de esta disciplina, se han desarrollado técnicas, métodos, procedimientos y herramientas específicas para cada tipo de auditoría, lo que ha llevado a un enfoque más especializado en el uso de técnicas apegadas al área que se va a evaluar.</p>
      </Text>
    </div>
  )
}