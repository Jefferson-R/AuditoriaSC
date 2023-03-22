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
      <Imagen src={img} alt={'Los antecedentes históricos de la auditoría'}/>

      <Text>
        <p>En el mundo actual, la auditoría es una actividad fundamental para mantener la confianza en las finanzas de una empresa. Sin embargo, ¿alguna vez te has preguntado de dónde viene la auditoría y cómo ha evolucionado hasta convertirse en la práctica que conocemos hoy en día?</p>
        <p>En este artículo, exploraremos los <em>antecedentes históricos</em> de la auditoría. Desde el registro rudimentario de operaciones mercantiles en la antigüedad hasta la creación de la <em>partida doble</em>, la <em>teneduría de libros</em> y finalmente la auditoría, examinaremos cómo la necesidad de controlar y verificar las actividades mercantiles ha llevado a la evolución de la auditoría.</p>
        <p>Los primeros registros mercantiles datan del trueque en pueblos y ciudades, donde los comerciantes necesitaban llevar un registro de sus actividades comerciales. Con el tiempo, el crecimiento del comercio llevó al surgimiento de los gremios y mercados locales, lo que llevó a una mayor necesidad de llevar un registro más preciso y completo de las actividades comerciales.</p>
        <p>Con la aparición de la <em>partida doble</em> en la contabilidad, la <em>teneduría de libros</em> se convirtió en una práctica común para llevar un registro detallado de las transacciones financieras. A medida que la actividad empresarial crecía y los bancos se involucraban más en las empresas, la necesidad de estados financieros precisos y fiables también aumentaba.</p>

        <Imagen src={img1} alt={'auditoria financiera'}/>

        <p>En este contexto, los informes financieros preparados por profesionales contables eran aceptados por los bancos sin cuestionamiento. Sin embargo, a medida que las actividades empresariales seguían creciendo, era necesario que los informes financieros fueran avalados por un profesional independiente que comprobara y dictaminara sobre la veracidad y confiabilidad de los resultados presentados.</p>
        <p>Es así como formalmente nace la actividad de la auditoría. Desde entonces, la auditoría se ha convertido en una práctica fundamental para garantizar la transparencia y la precisión en las finanzas de una empresa.</p>
        <p>El origen de la auditoría se remonta a finales del siglo XV cuando nobles, ricos y familias pudientes de España, Inglaterra, Holanda, Francia y otros países poderosos contrataban los servicios de revisores de cuentas. Estos profesionales se encargaban de verificar las cuentas manejadas por los administradores de sus bienes y se aseguraban de que no hubiera fraudes en los reportes presentados.</p>
        <p>En México, durante la época colonial, los visitadores venían a revisar el manejo de los tesoros, las recaudaciones, los gastos y la forma en que sus encargados gobernaban en la Nueva España.</p>

        <Imagen src={img2} alt={'auditoria financiera'} />

        <p>La Ley de Empresas del Reino Unido de mediados del siglo XIX estableció la obligación de presentar estados financieros auditados. Con el paso del tiempo, la auditoría se ha desarrollado y profesionalizado hasta convertirse en una práctica esencial en el mundo empresarial actual.</p>
        <p>Otro de los antecedentes que se pueden mencionar es la <b>Ley de Empresas del Reino Unido de mediados del siglo XIX</b>, que estableció la obligación de llevar contabilidad y presentar estados financieros. Esto llevó a la creación de empresas de auditoría que se encargaban de revisar los estados financieros y certificar su exactitud.</p>
        <p>En la actualidad, la auditoría se ha convertido en una actividad fundamental para las empresas y organizaciones de todo el mundo, ya que les permite verificar la veracidad y confiabilidad de sus registros financieros y contables, detectar errores, fraudes y otros problemas, y mejorar la eficiencia y eficacia de sus operaciones.</p>
        <p>En resumen, los antecedentes de la auditoría se remontan a la necesidad de llevar un registro de las operaciones mercantiles y financieras desde los inicios del comercio. Con el tiempo, esta necesidad evolucionó y se profesionalizó, dando origen a la <i>contabilidad</i> y a la actividad de la <b>auditoría</b> tal como la conocemos hoy en día. La auditoría se ha convertido en una actividad fundamental para las empresas y organizaciones, y continúa evolucionando con la tecnología y las nuevas prácticas empresariales.</p>
      </Text>
    </div>
  )
}