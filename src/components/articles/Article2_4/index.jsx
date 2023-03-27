import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article2_4 (){
  const img = 'https://www.rm-auditores.com.mx/imagenes/alianzas1.jpg'

  return (
    <div id="2-4" className="article article-none">
      <Title type={3}>Normas generales de auditoría</Title>

      <Text>
        <p>Las normas generales de auditoría son emitidas por asociaciones de profesionales para que los practicantes de esta profesión conozcan y cumplan con estas normas en el desarrollo de cualquier tipo de auditoría. En la actualidad, existen muchas asociaciones de profesionales dedicados a la contabilidad y la ingeniería financiera que emiten normas aplicables a la auditoría financiera y contable. A pesar de que aún no se sabe de asociaciones de auditores de sistemas, informática o disciplinas similares, las asociaciones de contadores y licenciados en administración, y ocasionalmente por asociaciones de auditores internos, se han dado tímidamente intentos por normalizar sus acciones.</p>
        <Imagen src={img} alt={'Normas generales de auditoría'}/>
        <p>Las normas generales de auditoría emitidas por la AICPA establecen que la auditoría debe ser realizada por personal que cuente con la capacitación técnica adecuada y la competencia para ejercer como auditor. El auditor debe conservar una actitud mental independiente en todos los aspectos, ser diligente en la presentación de los resultados de su auditoría y la evidencia que soporte el informe del auditor debe ser suficiente, competente y oportuna, mediante las técnicas, métodos y procedimientos de auditoría.</p>
        <p>El IMCPAC, una asociación de profesionales en México, ha emitido una serie de normas, principios y criterios relacionados con la auditoría, principalmente de carácter contable y financiero. Las normas personales de auditoría establecen que los auditores deben contar con entrenamiento técnico y capacidad profesional, cuidado y diligencia profesional e independencia. Las normas de ejecución del trabajo establecen que se debe planificar y supervisar cabalmente, se debe entender el control interno en estructura y contenido y la evidencia que soporta el informe del auditor debe ser suficiente y competente. Las normas de información establecen que el informe de la auditoría debe presentarse en estricto apego a las normas de auditoría y contabilidad generalmente aceptadas y los informes de auditorías financieras deberán contener la opinión razonada del auditor.</p>
        <p>En general, todas las normas de auditoría establecen que los auditores deben ser independientes, tener integridad profesional, mantener el control interno, obtener y evaluar evidencia suficiente y competente y tener un rango de conocimiento completo, buen conocimiento o conocimiento adecuado.</p>
      </Text>
    </div>
  )
}