import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article3_3 (){
  const img = 'https://media.licdn.com/dms/image/C5622AQF19d4uxGk1Qg/feedshare-shrink_2048_1536/0/1627660339618?e=2147483647&v=beta&t=A2XreyrySPUEaWlaOoBa_eJkr_guC5uNqCrQW18qToc'

  return (
    <div id="3-3" className="article article-inactive">
      <Title type={3}>Criterios y responsabilidades del auditor</Title>

      <Text>
        <p>Los criterios y responsabilidades del auditor son fundamentales para asegurar la integridad, la independencia y la eficacia de la auditoría. Estos criterios incluyen aspectos éticos-morales, profesionales-personales, laborales, de elementos de juicio y de cumplimiento legal y normativo.</p>
        <Imagen src={img} alt={'Criterios y responsabilidades del auditor'}/>
        <p>El auditor debe mantener una conducta ética y moral irreprochable, asegurando su independencia y objetividad en todo momento. Debe contar con los conocimientos y habilidades necesarias para llevar a cabo su trabajo de manera efectiva, manteniendo una actitud colaborativa y proactiva con la empresa auditada. También debe cumplir con los horarios y plazos establecidos, mantener una actitud profesional y una comunicación clara y efectiva con la empresa auditada.</p>
        <p>El auditor debe contar con elementos de juicio suficientes y adecuados para poder realizar una evaluación efectiva, llevando a cabo un análisis detallado y exhaustivo de la información disponible. Asimismo, debe cumplir con todas las leyes, normas y regulaciones aplicables a su trabajo, brindando una respuesta adecuada y oportuna ante cualquier situación legal o fiscal que pudiera surgir durante su trabajo. Finalmente, el auditor tiene la responsabilidad de presentar de manera clara, objetiva y concisa los resultados de su trabajo a terceros interesados.</p>
        <p>En resumen, los criterios y responsabilidades del auditor son fundamentales para asegurar la integridad y la calidad de la auditoría, y deben ser tomados en cuenta por el auditor en todo momento para asegurar la eficacia y la ética de su trabajo.</p>
      </Text>
    </div>
  )
}