import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article2_2 (){
  const img = 'https://grupoconsultorefe.com/uploads/articulos/thumbnail/SMT4NFKPKMbIIY7cRFn8NLA0IjwuEkxnvxmHirjw.jpeg'

  return (
    <div id="2-2" className="article article-none">
      <Title type={3}>Objetivos particulares de cada tipo de auditoría</Title>

      <Text>
        <p>La auditoría externa busca evaluar de manera independiente la institución auditada para emitir un dictamen externo sobre la razonabilidad de sus actividades, operaciones y resultados. Además, revisa el aspecto contable y las finanzas de las áreas de la empresa, y evalúa el cumplimiento de los planes, programas, políticas, normas y lineamientos que regulan las funciones de la institución.</p>
        
        <Imagen src={img} alt={'Objetivos particulares de cada tipo de auditoría'}/>

        <p>Por otro lado, la auditoría interna se lleva a cabo con personal que trabaja en la empresa y tiene como objetivos realizar una evaluación independiente dentro de la institución donde se trabaja, para ayudar a evaluar la actuación de la gestión administrativa. Además, se realiza una revisión interna del área contable, de las finanzas y del control interno de las áreas de una empresa, se evalúa el cumplimiento de los planes, programas, políticas, normas y lineamientos que regulan la actuación de cada uno de los integrantes de una institución, y se dictamina en forma interna sobre las actividades, operaciones y funciones que se realizan en una empresa.</p>

        <p>En cuanto a la auditoría financiera, se enfoca en evaluar la actuación financiera y contable de las empresas, así como sus resultados financieros. Sus objetivos son evaluar de manera independiente las operaciones financieras de una institución, revisar las actividades financieras y de las operaciones y registros contables de las áreas de una empresa, evaluar el cumplimiento de los planes, programas, políticas, lineamientos y normas que regulan las actividades financieras de una institución, vigilar el ejercicio y cumplimiento de los planes, presupuestos y programas de inversión de una empresa, y revisar los estados financieros que se presentan ante las autoridades fiscales y terceros para evaluar su correcta elaboración.</p>

        <p>Finalmente, la auditoría operacional busca evaluar la eficiencia y eficacia de los procesos, sistemas y actividades de una institución para mejorar su funcionamiento y desempeño. Sus objetivos son evaluar de manera independiente la eficacia y eficiencia de los sistemas de control interno, evaluar la calidad de los controles establecidos para asegurar la salvaguarda de los recursos y evaluar el cumplimiento de los planes, programas, políticas, lineamientos y normas que regulan las actividades de la institución.</p>
      </Text>
    </div>
  )
}