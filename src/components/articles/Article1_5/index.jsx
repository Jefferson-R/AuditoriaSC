import { Title } from "../../Title";
import { Imagen } from "../../Imagen";
import { Text } from "../../Text";

export function Article1_5() {
  const img =
    "https://impulsotecnologico.com/wp-content/uploads/auditoria-de-redes-informaticas-madrid.jpg";

  return (
    <div id="1-5" className="article article-none">
      <Title type={3}>Marco esquemático de la auditoría de sistemas computacionales</Title>

      <Text>
        <p>
          El marco esquemático de la auditoría de sistemas computacionales es
          una guía que permite la evaluación de los diferentes aspectos que
          integran un sistema de cómputo. Esta evaluación se divide en cuatro
          grandes rubros: hardware, software, gestión informática y
          administración de estándares de operación, programación y desarrollo.
        </p>

        <Imagen src={img} alt={"Marco esquemático de la auditoría de sistemas computacionales"} />

        <p>
          En cuanto al hardware, se evalúa la plataforma de hardware, la tarjeta
          madre, los procesadores, los dispositivos periféricos, la arquitectura
          del sistema, las instalaciones eléctricas, de datos y de
          telecomunicaciones, así como las innovaciones tecnológicas de hardware
          y periféricos.
        </p>
        <p>
          Por otro lado, en el rubro de software se evalúa la plataforma del
          software, el sistema operativo, los lenguajes y programas de
          desarrollo, los programas de aplicación y bases de datos, las
          utilerías, bibliotecas y aplicaciones, el software de telecomunicación
          y otros tipos de software como juegos.
        </p>
        <p>
          En cuanto a la gestión informática, se evalúa la actividad
          administrativa del área de sistemas, la operación del sistema de
          cómputo, la planeación y control de actividades, los presupuestos y
          gastos de los recursos informáticos, la gestión de la actividad
          informática y la capacitación y desarrollo del personal informático.
        </p>
        <p>
          Por último, en el rubro de administración de estándares de operación,
          programación y desarrollo se evalúa la información, la administración,
          seguridad y control de la información, la salvaguarda, protección y
          custodia de la información, el cumplimiento de las características de
          la información, el diseño de sistemas, las metodologías de desarrollo
          de sistemas, los estándares de programación y desarrollo, la
          documentación de sistemas, las bases de datos y la administración de
          bases de datos.
        </p>
        <p>
          En conclusión, el marco esquemático de la auditoría de sistemas
          computacionales es una herramienta fundamental para garantizar que los
          sistemas de cómputo funcionen de manera óptima, segura y eficiente, y
          para identificar y corregir las debilidades y fortalezas de los
          diferentes aspectos que integran un sistema de cómputo.
        </p>
      </Text>
    </div>
  );
}
