import { Title } from '../../Title'
import { Imagen } from '../../Imagen'
import { Text } from '../../Text'

export function Article3_2 (){
  const img = 'https://www.unesco.org/sites/default/files/styles/best_image/public/artificial-intelligence-4550606-900x400.jpg?itok=LjBmlCVb'

  return (
    <div id="3-2" className="article article-none">
      <Title type={3}>Principios de axiología y valores éticos</Title>

      <Text>
        <p>La axiología es la ciencia que estudia los valores, especialmente los valores morales. Los valores son cualidades que dan pautas al valor filosófico que pretende alcanzar el ser. Los valores tienen características como la objetividad, la dependencia, la polaridad y la cualidad. Estos valores tienen una jerarquía establecida según su importancia, y este orden se modifica según quien los clasifica.</p>
        <Imagen src={img} alt={'Principios de axiología y valores éticos'}/>
        <p>Max Scheler y Nicolai Hartmann, iniciadores de la axiología de Scheler, proponen la materialidad y objetividad de los valores, oponiéndose al formalismo de Kant. Para Scheler, los valores se conocen por medio de la intuición, y no son accesibles a la razón. Scheler clasifica los valores en cuatro categorías jerárquicas: valores de lo agradable y lo desagradable, valores de lo vital y lo antivital, valores espirituales y no espirituales, y valores religiosos y profanos.</p>
        <p>En cuanto a los valores éticos, el auditor de sistemas debe considerar y acatar los valores ético-morales regulados mediante la axiología, ya que como parte de una sociedad, su conducta debe estar en línea con los valores de carácter moral que pretenden normar la conducta de los individuos ante la sociedad. Por lo tanto, es importante que los auditores de sistemas se adhieran a estas normas éticas en su trabajo diario para asegurar su integridad y la de las empresas que auditan. En resumen, la axiología y los valores éticos son fundamentales para garantizar la correcta actuación de los auditores de sistemas y asegurar el cumplimiento de los valores morales y éticos en la sociedad.</p>
      </Text>
    </div>
  )
}