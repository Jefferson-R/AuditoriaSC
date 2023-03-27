import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article2_5 (){
  const img = 'https://dqsiberica.com/wp-content/uploads/2019/12/ISO_9001_3.jpg'

  return (
    <div id="2-5" className="article article-none">
      <Title type={3}>Métodos, técnicas, herramientas y procedimientos de auditoría</Title>

      <Text>
        <p>La auditoría es un proceso de evaluación de los registros financieros, contables y operativos de una organización para asegurar su exactitud y cumplimiento con las normas y regulaciones. Los métodos, técnicas, herramientas y procedimientos utilizados por los auditores se pueden dividir en tres grupos: instrumentos de recopilación de datos, técnicas de evaluación y técnicas especiales para la auditoría de sistemas computacionales.</p>
        <Imagen src={img} alt={'Métodos, técnicas, herramientas y procedimientos de auditoría'}/>
        <p>Los instrumentos de recopilación de datos incluyen entrevistas, cuestionarios, encuestas, observación, inventarios, muestreo y experimentación. Estas herramientas se utilizan para obtener información y datos relevantes para la auditoría de los sistemas.</p>
        <p>Las técnicas de evaluación incluyen el examen, la inspección, la confirmación, la comparación y la revisión documental. Estas técnicas se utilizan para verificar la exactitud y la validez de los datos y la información recopilados durante la auditoría.</p>
        <p>Las técnicas especiales para la auditoría de sistemas computacionales incluyen guías de evaluación, ponderación, simulación, evaluación, diagrama del círculo de sistemas, diagramas de sistemas, matriz de evaluación, programas de verificación y seguimiento de programación. Estas técnicas se utilizan específicamente en la auditoría de sistemas informáticos para evaluar la eficacia y la seguridad de los sistemas.</p>
        <p>En resumen, los auditores utilizan una variedad de herramientas y técnicas para realizar una auditoría completa y precisa. La selección de herramientas y técnicas depende del tipo de auditoría y de los sistemas que se están auditando.</p>
      </Text>
    </div>
  )
}