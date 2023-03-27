import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article3_1 (){
  const img = 'https://www.esan.edu.pe/images/blog/2019/01/31/1500x844-etica-decisiones.jpg'

  return (
    <div id="3-1" className="article article-none">
      <Title type={3}>Marco conceptual de la ética</Title>

      <Text>
        <p>El marco conceptual de la ética es fundamental para comprender su importancia en el comportamiento humano. Para comenzar, es necesario identificar las definiciones y conceptos básicos que se han vertido en torno a la ética, para luego analizar las principales corrientes y autores del pensamiento filosófico sobre esta materia. Una vez que se tengan estas bases conceptuales, se pueden identificar los principales valores y deberes éticos, criterios y responsabilidades, normas y obligaciones que el profesional de auditoría debe respetar al ejercer su profesión.</p>
        <Imagen src={img} alt={'Marco conceptual de la ética'}/>
        <p>La ética se relaciona con las normas de conducta de carácter social, jurídico, profesional y religioso que regulan la actuación del hombre en la sociedad. El profesional dedicado a la auditoría debe conducirse de acuerdo con estas normas de conducta para regular su actuación como profesional ante la sociedad, autoridades, empresas y empleados.</p>
        <p>Sin embargo, la conceptualización de ética va más allá de estas definiciones. La ética es la ciencia de la conducta que estudia reflexivamente el fundamento de la conducta moral. Desde el principio de la vida social del hombre, se crea en él una conciencia normativa que le indica cuáles son los caminos adecuados que lo conducirán a convivir y obtener los logros que se proponga, como la felicidad, la perpetuación de la especie, entre otros.</p>
        <p>En resumen, el estudio del marco conceptual de la ética es esencial para comprender las bases y fundamentos que rigen la conducta humana. Los valores, deberes éticos, criterios, responsabilidades, normas y obligaciones que rigen al profesional de auditoría son parte de la ética, que estudia reflexivamente el fundamento de la conducta moral del hombre y su papel en la sociedad.</p>
      </Text>
    </div>
  )
}