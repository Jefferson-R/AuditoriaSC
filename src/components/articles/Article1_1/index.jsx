import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'
import '../article.scss'

export function Article1_1 (){
  const img = 'https://userscontent2.emaze.com/images/d29419c7-4720-4db3-ab04-8c429d74137a/3cdf73f4-8eb5-4490-8f0d-3d729a9a693dimage5.jpeg'
  const img1 = 'https://www.ceupe.com/images/easyblog_articles/1465/b2ap3_large_auditoria-financieera.jpg'
  const img2 = 'https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2016/05/31081505/tipos-de-auditoria.jpg'

  return (
    <div id="1-1" className="article article-inactive">
      <Title type={3}>Los antecedentes históricos de la auditoría</Title>

      <Text>
        <p>La auditoría es una práctica esencial para garantizar la transparencia y la precisión en las finanzas de una empresa. Pero, ¿sabías que esta actividad tiene sus raíces en la antigüedad? Desde el registro rudimentario de operaciones mercantiles hasta la creación de la partida doble y la teneduría de libros, la necesidad de controlar y verificar las actividades mercantiles ha llevado a la evolución de la auditoría.</p>

        <Imagen src={img} alt={'Los antecedentes históricos de la auditoría'}/>
        
        <p>En la antigüedad, los comerciantes necesitaban llevar un registro de sus actividades comerciales, y con el tiempo, la necesidad de llevar un registro más preciso y completo de las actividades comerciales aumentó. La aparición de la partida doble en la contabilidad y la teneduría de libros se convirtió en una práctica común para llevar un registro detallado de las transacciones financieras.</p>

        <p>A medida que la actividad empresarial crecía, la necesidad de estados financieros precisos y fiables también aumentaba. Los informes financieros preparados por profesionales contables eran aceptados por los bancos sin cuestionamiento. Sin embargo, era necesario que los informes financieros fueran avalados por un profesional independiente que comprobara y dictaminara sobre la veracidad y confiabilidad de los resultados presentados.</p>

        <p>Así nace formalmente la actividad de la auditoría. Desde entonces, la auditoría se ha convertido en una práctica fundamental para garantizar la transparencia y la precisión en las finanzas de una empresa. La auditoría se ha desarrollado y profesionalizado hasta convertirse en una práctica esencial en el mundo empresarial actual.</p>

        <p>En resumen, los antecedentes de la auditoría se remontan a la necesidad de llevar un registro de las operaciones mercantiles y financieras desde los inicios del comercio. La auditoría se ha convertido en una actividad fundamental para las empresas y organizaciones, y continúa evolucionando con la tecnología y las nuevas prácticas empresariales. Si buscas garantizar la transparencia y la precisión en las finanzas de tu empresa, la auditoría es una actividad que no puedes pasar por alto.</p>
      </Text>
    </div>
  )
}