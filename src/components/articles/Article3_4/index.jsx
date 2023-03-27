import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article3_4 (){
  const img = 'https://image.jimcdn.com/app/cms/image/transf/none/path/sec7a247cc21dee53/image/i0683c16277d81545/version/1550962471/que-sabes-acerca-de-la-auditor%C3%ADa-tributaria-ebenezer-frank-salas.jpg'

  return (
    <div id="3-4" className="article article-none">
      <Title type={3}>Normas profesionales del auditor</Title>

      <Text>
        <p>Las normas profesionales del auditor son un conjunto de criterios y responsabilidades que regulan la actuación de los auditores, estableciendo aspectos sobresalientes de su desempeño. Dichas normas son de aplicación general y de acatamiento obligatorio para estos profesionales. A su vez, existen normas que son obligatorias para un auditor, las cuales en muchos casos están reguladas y su incumplimiento conlleva una sanción. Estas normas y lineamientos se apoyan en la experiencia profesional y están reguladas por organismos específicos.</p>
        <Imagen src={img} alt={'Normas profesionales del auditor'}/>
        <p>Estas normas se dividen en tres grupos: las normas permanentes de carácter profesional, las normas de carácter social y las normas de comportamiento ético-moral. Las normas permanentes de carácter profesional son aquellas que debe cumplir invariablemente el auditor y su personal, para mantener su prestigio y credibilidad en las empresas donde realizan evaluaciones. Estas normas incluyen la emisión de una opinión responsable y profesional, la disciplina profesional, la guarda del secreto profesional y la independencia mental.</p>
        <p>La emisión de una opinión responsable y profesional respaldada en evidencias comprobadas es fundamental para que la auditoría sea válida. La disciplina profesional es necesaria para mantener una actuación permanentemente profesional en el aspecto laboral y personal. La guarda del secreto profesional es obligatoria para mantener la confidencialidad de la información que se maneja durante la auditoría. La independencia mental es esencial para que el auditor tenga la aptitud, competencia y objetividad necesarias para su trabajo.</p>
        <p>En conclusión, para ser un buen auditor, es fundamental cumplir con las normas y lineamientos establecidos. El respeto por estas normas garantiza la calidad y la credibilidad de la evaluación realizada. Ser un auditor responsable, disciplinado, confiable y ético es esencial para mantener el prestigio en la profesión y para brindar un servicio eficiente y efectivo a las empresas auditadas.</p>
      </Text>
    </div>
  )
}