const articles = {
  plantillas: [
    'Puedes arreglar el siguiente texto:',
    'Haz un blog web en base al siguiente texto:',
    'Decora el siguiente texto con negritas, cursivas y subrayados pero con etiquetas html, decora segun lo veas conveniente. Aqui el texto:'
  ],

  a1_1: {
      blog: `
      <p>En el mundo actual, la auditoría es una actividad fundamental para mantener la confianza en las finanzas de una empresa. Sin embargo, ¿alguna vez te has preguntado de dónde viene la auditoría y cómo ha evolucionado hasta convertirse en la práctica que conocemos hoy en día?</p>
      <p>En este artículo, exploraremos los <em>antecedentes históricos</em> de la auditoría. Desde el registro rudimentario de operaciones mercantiles en la antigüedad hasta la creación de la <em>partida doble</em>, la <em>teneduría de libros</em> y finalmente la auditoría, examinaremos cómo la necesidad de controlar y verificar las actividades mercantiles ha llevado a la evolución de la auditoría.</p>
      <p>Los primeros registros mercantiles datan del trueque en pueblos y ciudades, donde los comerciantes necesitaban llevar un registro de sus actividades comerciales. Con el tiempo, el crecimiento del comercio llevó al surgimiento de los gremios y mercados locales, lo que llevó a una mayor necesidad de llevar un registro más preciso y completo de las actividades comerciales.</p>
      <p>Con la aparición de la <em>partida doble</em> en la contabilidad, la <em>teneduría de libros</em> se convirtió en una práctica común para llevar un registro detallado de las transacciones financieras. A medida que la actividad empresarial crecía y los bancos se involucraban más en las empresas, la necesidad de estados financieros precisos y fiables también aumentaba.</p>
      <p>En este contexto, los informes financieros preparados por profesionales contables eran aceptados por los bancos sin cuestionamiento. Sin embargo, a medida que las actividades empresariales seguían creciendo, era necesario que los informes financieros fueran avalados por un profesional independiente que comprobara y dictaminara sobre la veracidad y confiabilidad de los resultados presentados.</p>
      <p>Es así como formalmente nace la actividad de la auditoría. Desde entonces, la auditoría se ha convertido en una práctica fundamental para garantizar la transparencia y la precisión en las finanzas de una empresa.</p>
      <p>El origen de la auditoría se remonta a finales del siglo XV cuando nobles, ricos y familias pudientes de España, Inglaterra, Holanda, Francia y otros países poderosos contrataban los servicios de revisores de cuentas. Estos profesionales se encargaban de verificar las cuentas manejadas por los administradores de sus bienes y se aseguraban de que no hubiera fraudes en los reportes presentados.</p>
      <p>En México, durante la época colonial, los visitadores venían a revisar el manejo de los tesoros, las recaudaciones, los gastos y la forma en que sus encargados gobernaban en la Nueva España.</p>
      <p>La Ley de Empresas del Reino Unido de mediados del siglo XIX estableció la obligación de presentar estados financieros auditados. Con el paso del tiempo, la auditoría se ha desarrollado y profesionalizado hasta convertirse en una práctica esencial en el mundo empresarial actual.</p>
      <p>Otro de los antecedentes que se pueden mencionar es la <b>Ley de Empresas del Reino Unido de mediados del siglo XIX</b>, que estableció la obligación de llevar contabilidad y presentar estados financieros. Esto llevó a la creación de empresas de auditoría que se encargaban de revisar los estados financieros y certificar su exactitud.</p>
      <p>En la actualidad, la auditoría se ha convertido en una actividad fundamental para las empresas y organizaciones de todo el mundo, ya que les permite verificar la veracidad y confiabilidad de sus registros financieros y contables, detectar errores, fraudes y otros problemas, y mejorar la eficiencia y eficacia de sus operaciones.</p>
      <p>En resumen, los antecedentes de la auditoría se remontan a la necesidad de llevar un registro de las operaciones mercantiles y financieras desde los inicios del comercio. Con el tiempo, esta necesidad evolucionó y se profesionalizó, dando origen a la <i>contabilidad</i> y a la actividad de la <b>auditoría</b> tal como la conocemos hoy en día. La auditoría se ha convertido en una actividad fundamental para las empresas y organizaciones, y continúa evolucionando con la tecnología y las nuevas prácticas empresariales.</p>
      `
  },

  a1_2: {
    text: `
    Como ya hemos mencionado, los campos de aplicación de la auditoría han evoluciona-do mucho, desde su uso en los aspectos netamente contables, hasta su uso en áreas ydisciplinas de carácter especial, como la ingeniería, la medicina y los sistemas compu-tacionales. Evidentemente, junto con ese progreso, también se ha registrado el desarro-llo de las técnicas, métodos, procedimientos y herramientas de cada uno de estos tiposde auditorías, así como un enfoque cada vez más característico y especializado hacia eluso de técnicas más apegadas al área que se va a evaluar.

    Debido a esos constantes cambios, a continuación citaremos el concepto más am-plio de la auditoría, para de ahí analizarlo de acuerdo con lo aportado por la Real Aca-demia Española y después, con esa conceptualización, trasladarlo a una propuesta declasificación de los tipos de auditoría.

    En forma general, la definición que se propone para la auditoría es la siguiente:

    Es la revisión independiente de alguna o algunas actividades, funciones específi-cas, resultados u operaciones de una entidad administrativa, realizada por un profesio-nal de la auditoría, con el propósito de evaluar su correcta realización y, con base enese análisis, poder emitir una opinión autorizada sobre la razonabilidad de sus resulta-dos y el cumplimiento de sus operaciones.

    Como antecedentes académicos, se encontraron las siguientes definiciones:

    Auditor:
    “Persona capacitada para realizar auditorías en empresas u otras instituciones. Pertenece a un colegio oficial. Auditor de guerra: Funcionario miembro del cuerpo jurídico del ejército que informa en los tribunales militares sobre la interpretación o aplicación de las leyes. Auditor de la Rota: Cada uno de los doce miembros del tribunal romano de la Rota.”
    
    Auditoría:
    “Supervisión de las cuentas de una empresa, hecha por decisión de un tribunal o a instancias de particular. Revisión a la economía de una empresa. Revisión de cuentas. Revisión de cuentas, examen y evaluación de la situación financiera y administrativa de una institución o empresa, realizados por especialistas ajenos a la misma. Una revisión interna, conducida por empleados de la compañía, donde se prueba la suficiencia de los procedimientos y sistemas de contabilidad. Constituye adaptación popular del verbo inglés to audit, el cual significa examinar, revisar cuentas.”
    
    En resumen, un auditor es una persona capacitada para realizar auditorías en empresas y otras instituciones. La auditoría es la supervisión y revisión de cuentas, procedimientos y transacciones financieras de una organización, realizada por especialistas ajenos a la misma, con el fin de evaluar la situación financiera y administrativa de la institución o empresa.    
    `,

    blog: `
    La <strong>auditoría</strong> es una disciplina que ha evolucionado a lo largo del tiempo, pasando de ser una herramienta utilizada principalmente en el ámbito contable a ser utilizada en áreas y disciplinas especializadas como la ingeniería, la medicina y los sistemas computacionales. Con este progreso, también ha habido un desarrollo de técnicas, métodos, procedimientos y herramientas específicas para cada tipo de auditoría, lo que ha llevado a un enfoque más especializado en el uso de técnicas apegadas al área que se va a evaluar.

    La definición general de la <em>auditoría</em> es la revisión independiente de alguna o algunas actividades, funciones específicas, resultados u operaciones de una entidad administrativa, realizada por un profesional de la auditoría, con el propósito de evaluar su correcta realización y emitir una opinión autorizada sobre la razonabilidad de sus resultados y el cumplimiento de sus operaciones.
    
    La Real Academia Española también ofrece una definición de <u>auditor</u> y <u>auditoría</u>. Un auditor es una persona capacitada para realizar auditorías en empresas u otras instituciones, mientras que la auditoría es la supervisión y revisión de cuentas, procedimientos y transacciones financieras de una organización, realizada por especialistas ajenos a la misma, con el fin de evaluar la situación financiera y administrativa de la institución o empresa.
    
    En resumen, la <strong>auditoría</strong> es una disciplina que se utiliza para evaluar la correcta realización de actividades, funciones específicas, resultados u operaciones de una entidad administrativa y emitir una opinión autorizada sobre la razonabilidad de sus resultados y el cumplimiento de sus operaciones. Con la evolución de esta disciplina, se han desarrollado técnicas, métodos, procedimientos y herramientas específicas para cada tipo de auditoría, lo que ha llevado a un enfoque más especializado en el uso de técnicas apegadas al área que se va a evaluar.
    `
  },

  a1_3: {
    text: `
    Clasificación de los tipos de auditorías

    Para iniciar nuestro estudio, proponemos que el análisis de los conceptos anteriores se realice al amparo de la siguiente clasificación de los tipos de auditorías, con el fin de identificar los criterios, características y especificaciones de esta disciplina profesional. 
    
    Entre las clasificaciones de los tipos de auditorias podemos encontrar el siguiente cuadro:

    Auditorías por su lugar de aplicación
    • Auditoría externa
    • Auditoría interna

    Auditorías por su área de aplicación
    • Auditoría financiera
    • Auditoría administrativa
    • Auditoría operacional
    • Auditoría integral
    • Auditoría gubernamental
    • Auditoría de sistemas

    Auditorías especializadas en áreas específicas
    • Auditoría al área médica (evaluación médico-sanitaria)
    • Auditoría al desarrollo de obras y construcciones (evaluación de ingeniería)
    • Auditoría fiscal
    • Auditoría laboral
    • Auditoría de proyectos de inversión
    • Auditoría a la caja chica o caja mayor (arqueos)
    • Auditoría al manejo de mercancías (inventarios)
    • Auditoría ambiental
    • Auditoría de sistemas

    Auditoría de sistemas computacionales
    • Auditoría informática
    • Auditoría con la computadora
    • Auditoría sin la computadora
    • Auditoría a la gestión informática
    • Auditoría al sistema de cómputo
    • Auditoría alrededor de la computadora
    • Auditoría de la seguridad de sistemas computacionales
    • Auditoría a los sistemas de redes
    • Auditoría integral a los centros de cómputo
    • Auditoría ISO-9000 a los sistemas computacionales
    • Auditoría outsourcing
    • Auditoría ergonómica de sistemas computacionales

    Clasificación de la auditoría por su lugar de realización

    La primera clasificación se refiere a la forma en que se realiza este tipo de trabajos, y también a cómo se establece la relación laboral en las empresas donde se llevará a cabo la auditoría; esto nos da un lugar de realización externo si el auditor no tiene relación directa con la empresa, o un lugar de realización interno si existe alguna relación del auditor con la propia empresa.
    
    Auditoría externa
    
    La principal característica de este tipo de auditoría es que la realizan auditores totalmente ajenos a la empresa, por lo menos en el ámbito profesional y laboral; esto permite que el auditor externo utilice su libre albedrío en la aplicación de los métodos, técnicas y herramientas de auditoría con las cuales hará la evaluación de las actividades y operaciones de la empresa que audita y, por lo tanto, la emisión de resultados será absolutamente independiente. Su definición es la siguiente:
    
    Es la revisión independiente que realiza un profesional de la auditoría, con total libertad de criterio y sin ninguna influencia, con el propósito de evaluar el desempeño de las actividades, operaciones y funciones que se realizan en la empresa que lo contrata, así como de la razonabilidad en la emisión de sus resultados financieros. La relación de trabajo del auditor es ajena a la institución donde se aplicará la auditoría y esto le permite emitir un dictamen libre e independiente.
    
    Generalmente, estas auditorías externas son realizadas por grandes empresas y despachos independientes de auditores, los cuales, casi siempre gozan de gran popularidad y prestigio dentro del ambiente profesional. El mercado en el cual tienen mayor demanda y aplicación estas auditorías es el ámbito contable, fiscal y financiero de las instituciones, así como en aquellas actividades específicas que demandan una auditoría externa a la empresa cuando existen condiciones especiales que se pretenden evaluar.
    
    Ventajas
    
    Al no tener ninguna dependencia de la empresa, el trabajo de estos auditores es totalmente independiente y libre de cualquier injerencia por parte de las autoridades de la empresa auditada.
    
    En su realización, estas auditorías pueden estar respaldadas por la mayor experiencia de los auditores externos, ya que utilizan técnicas y herramientas que han sido probadas en otras empresas con características similares. Estas auditorías son muy aceptadas en las empresas para certificar registros contables, impuestos y resultados financieros. Además, sus dictámenes pueden ser válidos para las autoridades fiscales, lo que puede satisfacer requisitos legales, siempre y cuando sean realizadas por auditores de prestigio con reconocimiento público.

    Desventajas

    Una de las principales desventajas es que, como el auditor tiene un conocimiento limitado de la empresa, su evaluación puede estar limitada a la información que pueda recopilar. Además, depende en gran medida de la cooperación que los auditados puedan brindarle. Esto puede resultar en evaluaciones, alcances y resultados limitados. Muchas auditorías de este tipo se derivan de imposiciones fiscales y legales que pueden crear ambientes hostiles para los auditores que las realizan. En algunos casos, estas auditorías pueden ser costosas para la empresa, no solo en términos monetarios, sino también en términos de tiempo y trabajo adicional que representan.    

    Auditoría interna

    En la realización de estos tipos de evaluaciones, el auditor que lleva a cabo la auditoría trabaja en la empresa donde se realiza la misma y, por lo tanto, está involucrado en su operación normal. Debido a esto, el auditor puede tener algún tipo de dependencia con las autoridades de la institución, lo cual puede llegar a influir en el juicio que emita sobre la evaluación de las áreas de la empresa. La definición que se sugiere es:
    
    "Es la revisión que realiza un profesional de la auditoría, cuya relación de trabajo es directa y subordinada a la institución donde se aplicará la misma, con el propósito de evaluar en forma interna el desempeño y cumplimiento de las actividades, operaciones y funciones que se desarrollan en la empresa y sus áreas administrativas, así como evaluar la razonabilidad en la emisión de sus resultados financieros. El objetivo final es contar con un dictamen interno sobre las actividades de toda la empresa, que permita diagnosticar la actuación administrativa, operacional y funcional de empleados y funcionarios de las áreas que se auditan."
    
    Ventajas:
    
    Debido a que el auditor pertenece a la empresa, casi siempre conoce integralmente sus actividades, operaciones y áreas; por lo tanto, su revisión puede ser más profunda y con un mayor conocimiento de las actividades, funciones y problemas de la institución. Por esta razón, el contenido de su informe es mucho más valioso.
    
    El informe que rinde el auditor, independientemente del resultado, es sólo de carácter interno y por lo tanto no sale de la empresa, ya que únicamente le sirve a las autoridades de la institución.
    
    Esta auditoría consume sólo recursos internos, por lo tanto no representa ninguna erogación adicional para la empresa en la cual se realiza.
    
    Es de gran utilidad para la buena marcha de la empresa, ya que permite detectar problemas y desviaciones a tiempo.
    
    Puede llevarse un programa concreto de evaluación en apoyo a las autoridades de la empresa, lo cual ayudará a sus dirigentes en la evaluación y la toma de decisiones.
    
    Desventajas:
    
    Su veracidad, alcance y confiabilidad pueden ser limitados, debido a que puede haber cierta injerencia por parte de las autoridades de la institución sobre la forma de evaluar y emitir el informe.
    
    En ocasiones, la opinión del auditor tal vez no sea absoluta, debido a que, al laborar en la misma empresa donde realiza la auditoría, se pueden presentar presiones, compromisos y ciertos intereses al realizar la evaluación.
    
    Se pueden presentar vicios de trabajo del auditor con relativa frecuencia, ya sea en las formas de utilizar las técnicas y herramientas para aplicar la auditoría, como en la forma de evaluar y emitir su informe sobre la misma.
    ` 
  },

  a1_4: {
    text: `
    Objetivos generales de la auditoría

    A continuación, como complemento de los conceptos generales, se señalarán de manera general los objetivos que se pretenden alcanzar con una auditoría, con la única intención de que el lector empiece a comprender las bases sobre las que descansa el desarrollo de una auditoría, cualquiera que sea. Entre esos objetivos, encontramos los siguientes:
    
    • Realizar una revisión independiente de las actividades, áreas o funciones especiales de una institución, a fin de emitir un dictamen profesional sobre la razonabilidad de sus operaciones y resultados.
    
    • Hacer una revisión especializada, desde un punto de vista profesional y autónomo, del aspecto contable, financiero y operacional de las áreas de una empresa.
    
    • Evaluar el cumplimiento de los planes, programas, políticas, normas y lineamientos que regulan la actuación de los empleados y funcionarios de una institución, así como evaluar las actividades que se desarrollan en sus áreas y unidades administrativas.
    
    • Dictaminar de manera profesional e independiente sobre los resultados obtenidos por una empresa y sus áreas, así como sobre el desarrollo de sus funciones y el cumplimiento de sus objetivos y operaciones.
    
    Cabe aclarar que los objetivos antes enunciados son de carácter general. Sin embargo, pueden adecuarse al tipo de auditoría que se pretenda realizar. Es indispensable que antes de iniciar la evaluación de algún área, se establezcan de manera precisa los objetivos que se pretenden cubrir con esa auditoría, a fin de contar con su existencia, difusión y cumplimiento.
    
    Debido a la importancia que tiene el objetivo en cada tipo de auditoría, en el siguiente capítulo se hace un enunciado específico de los principales objetivos de la propuesta de clasificación de auditoría que se mencionó en la sección 1.3 de este capítulo.    
    `
  },

  a1_5: {
    text: `
    Marco esquemático de la auditoría de sistemas computacionales

    La evaluación se realiza en los siguientes aspectos:
    
    Hardware
    • Plataforma de hardware
    • Tarjeta madre
    • Procesadores
    • Dispositivos periféricos
    • Arquitectura del sistema
    • Instalaciones eléctricas, de datos y de telecomunicaciones
    • Innovaciones tecnológicas de hardware y periféricos
    
    Software
    • Plataforma del software
    • Sistema operativo
    • Lenguajes y programas de desarrollo
    • Programas, paqueterías de aplicación y bases de datos
    • Utilerías, bibliotecas y aplicaciones
    • Software de telecomunicación
    • Juegos y otros tipos de software
    
    Gestión informática
    • Actividad administrativa del área de sistemas
    • Operación del sistema de cómputo
    • Planeación y control de actividades
    • Presupuestos y gastos de los recursos informáticos
    • Gestión de la actividad informática
    • Capacitación y desarrollo del personal informático
    
    Administración de estándares de operación, programación y desarrollo
    • Información
    • Administración, seguridad y control de la información
    • Salvaguarda, protección y custodia de la información
    • Cumplimiento de las características de la información
    • Diseño de sistemas
    • Metodologías de desarrollo de sistemas
    • Estándares de programación y desarrollo
    • Documentación de sistemas
    • Bases de datos
    • Administración de bases de datos
    • Diseño de bases de datos        
    `
  },

  //

  a2_1: {
    text: `
    Definición general de auditoría

    En esta sección se presenta una propuesta de definición de auditoría, junto con su desglose correspondiente, con el propósito de brindar un enfoque general sobre la conceptualización de esta importante disciplina de la actuación profesional.
    La auditoría es la revisión independiente que lleva a cabo un auditor profesional, utilizando técnicas, métodos y procedimientos especializados, con el objetivo de evaluar el cumplimiento de las funciones, actividades, tareas y procedimientos de una entidad administrativa, y emitir un dictamen sobre el resultado de dicha evaluación.
    Al analizar esta definición, se pueden obtener los siguientes conceptos:
    
    La auditoría implica una revisión independiente [...]
    Es esencial que el auditor tenga una completa independencia mental, profesional y laboral para llevar a cabo una auditoría, ya que esto le permite actuar como un verdadero profesional al realizar cualquier tipo de evaluación. Esta soberanía de acción le impide tener cualquier tipo de obligación, preferencia, obediencia o algún otro compromiso con la empresa que está auditando.    

    Es precisamente en esta independencia donde radica la actuación profesional y la confiabilidad de un auditor. [...] que lleva a cabo un auditor profesional [...]
    La auditoría es una actividad altamente especializada que solo puede ser realizada por aquellos que tienen la capacitación profesional necesaria. Es esencial que estos profesionales cuenten con los conocimientos, la experiencia, las actitudes y las aptitudes necesarias para realizar este tipo de trabajo, a fin de cumplir con los estándares requeridos por las empresas y la sociedad. En México, es un requisito indispensable que los auditores especializados en auditoría fiscal y contable tengan un título y una cédula profesional vigentes, y estén respaldados por colegios y asociaciones que respalden la calidad profesional requerida para esta actividad. Si alguien realiza una auditoría contable o fiscal sin cumplir con estos requisitos, la opinión o dictamen emitido no será válido.

    [...] utilizando técnicas, métodos y procedimientos especializados, [...]

    Cualquier profesional con un título universitario puede actuar como auditor, pero si carece de los conocimientos especializados necesarios para esta actividad, difícilmente podrá realizarla de manera eficaz y eficiente. Esto se debe a que no estaría familiarizado con las técnicas, métodos, procedimientos y herramientas especializadas requeridas, y aunque estuviera familiarizado con ellas, no podría utilizarlas eficazmente sin conocimientos profundos en estas áreas especializadas de su profesión original.

    [...] con el objetivo de evaluar el cumplimiento de las funciones, actividades, tareas y procedimientos de una entidad administrativa, [...]

    La tarea principal del auditor es evaluar las funciones, actividades, tareas y procedimientos que se llevan a cabo en cualquier empresa o área administrativa para comprobar si se cumplen de manera adecuada. Para evaluar el grado de cumplimiento de estas actividades, el auditor utiliza sus conocimientos, así como las herramientas especializadas en las áreas en las que se aplica la auditoría.

    [...] y emitir un dictamen sobre el resultado de dicha evaluación.

    El informe final de una auditoría es el resultado de la misma, en el cual el auditor, con total libertad y profesionalismo, informa sobre los resultados obtenidos durante la revisión, fundamentándose en la aplicación de sus técnicas, herramientas y conocimientos de auditoría. Para ello, emite una opinión profesional e independiente, plasmada en un documento formal llamado dictamen, en el que se detallan las desviaciones y otros aspectos observados durante su evaluación para que los interesados conozcan el estado de las actividades y operaciones de la empresa o área auditada. Este es el objetivo final de la auditoría: emitir un dictamen profesional e independiente.
    `
  },

  a2_2: {
    text: `
    Objetivos particulares de cada tipo de auditoría

    Aunque ya se señalaron los objetivos generales de la auditoría, conviene repasarlos con la intención de compararlos con una nueva exposición de los objetivos específicos de cada uno de los tipos de auditoría que se proponen en este libro. Concretamente, los objetivos generales de la auditoría, indicados en el punto 1.4 del capítulo anterior, son:
    
    • Realizar una revisión independiente de las actividades, áreas o funciones especiales de una institución para emitir un dictamen profesional sobre la razonabilidad de sus operaciones y resultados.
    • Hacer una revisión especializada, desde un punto de vista profesional y autónomo, del aspecto contable, financiero y operacional de las áreas de una empresa.
    • Evaluar el cumplimiento de los planes, programas, políticas, normas y lineamientos que regulan la actuación de los empleados y funcionarios de una institución, así como de sus áreas y unidades administrativas.
    • Dictaminar de manera profesional e independiente sobre los resultados obtenidos por una empresa y sus áreas, así como sobre el desarrollo de sus funciones y el cumplimiento de sus objetivos y operaciones.
    
    Cabe aclarar que los objetivos que se analizarán a continuación pueden parecer repetitivos en algunos casos y en otros ser muy similares; sin embargo, la intención es presentarlos en cada tipo de auditoría tal y como son, aun a riesgo de parecer redundantes. El único propósito es que el lector compare los objetivos generales con los objetivos específicos de cada uno de los tipos de auditoría propuestos aquí.
    
    Objetivos de la auditoría externa
    
    La auditoría externa es aquella que se realiza con personal totalmente ajeno a la empresa auditada, con libertad absoluta de actuación y libre de cualquier injerencia por parte de la institución donde se practica; por lo tanto, sus objetivos son los siguientes:
    
    • Realizar una evaluación independiente de una institución con la cual no se tenga ni empleo ni subordinación, con el fin de emitir un dictamen externo sobre la razonabilidad de sus actividades, operaciones y resultados.
    • Hacer una revisión independiente sobre el aspecto contable y las finanzas de las áreas de una empresa, emitiendo un dictamen autónomo.
    • Evaluar el cumplimiento de los planes, programas, políticas, normas y lineamientos que regulan las funciones de una institución, así como evaluar las actividades de sus áreas y unidades administrativas, utilizando un enfoque ajeno a la institución.
    
    Objetivos de la auditoría interna
    Debido a que esta auditoría se lleva a cabo con personal que trabaja en la empresa y depende estructuralmente de algún directivo de la misma, es de suma importancia que se establezcan y respeten los objetivos que se citan a continuación:
    
    • Realizar una evaluación independiente dentro de la institución donde se trabaja, contando con un mayor entendimiento de sus actividades y operaciones, con el fin de ayudar a evaluar la actuación de la gestión administrativa.
    
    • Hacer una revisión interna del área contable, de las finanzas y del control interno de las áreas de una empresa, a fin de evaluar su funcionamiento desde un punto de vista interno.
    
    • Evaluar internamente el cumplimiento de los planes, programas, políticas, normas y lineamientos que regulan la actuación de cada uno de los integrantes de una institución, así como de sus áreas administrativas.
    
    • Dictaminar en forma interna sobre las actividades, operaciones y funciones que se realizan en una empresa, contando con un mayor conocimiento de las actividades del personal que labora en ella, así como de sus funciones y tareas.
    
    Objetivos de la auditoría financiera
    Esta auditoría está enfocada básicamente a evaluar la actuación financiera y contable de las empresas, así como sus resultados financieros. Sus objetivos son los siguientes:
    
    • Realizar una evaluación, de manera independiente, de las operaciones financieras de una institución, a fin de emitir un dictamen sobre la razonabilidad de sus registros, operaciones y resultados financieros.
    
    • Hacer una revisión, desde un punto de vista autónomo, de las actividades financieras y de las operaciones y registros contables de las áreas de una empresa.
    
    • Evaluar el cumplimiento de los planes, programas, políticas, lineamientos y normas que regulan las actividades financieras de una institución, así como de sus áreas presupuestales y unidades administrativas.
    
    • Vigilar el ejercicio y cumplimiento de los planes, presupuestos y programas de inversión de una empresa, así como sus bienes e inventarios.
    
    • Revisar los estados financieros que se presentan ante las autoridades fiscales y terceros, con el propósito de evaluar su correcta elaboración, los pagos de impuestos y utilidades de una empresa, así como emitir una opinión sobre el comportamiento de ésta.

    Objetivos de la auditoría administrativa
    La finalidad de este tipo de auditoría es evaluar el comportamiento administrativo de las empresas; por tal razón, los objetivos a cumplir son los siguientes:
    
    •
    Realizar una evaluación, de manera independiente, de las actividades, operaciones, estructura organizacional y funciones de una institución, con el fin de emitir un dictamen sobre la razonabilidad de su gestión administrativa.
    •
    Evaluar el cumplimiento de los planes, programas, políticas, normas y lineamientos que regulan la gestión directiva de las áreas y unidades administrativas de una institución.
    •
    Evaluar la actividad administrativa de los directivos y demás empleados de una empresa, así como dictaminar sobre el cumplimiento de sus funciones y actividades.
    •
    Analizar todo lo relacionado con la gestión administrativa de una empresa.
    
    Objetivos de la auditoría operativa
    Esta auditoría es similar a la anterior, pero está enfocada exclusivamente en las operaciones de una empresa. Sus objetivos son los siguientes:
    •
    Realizar una evaluación, de manera independiente, de las actividades, operaciones, estructura organizacional y funciones de una institución, a fin de emitir un dictamen sobre la razonabilidad de sus operaciones fundamentales.
    •
    Evaluar el cumplimiento de los planes, programas, políticas, normas y lineamientos que regulan la realización de las operaciones de una institución, así como evaluar sus áreas y unidades operacionales.
    •
    Evaluar la actividad operativa de los directivos y demás empleados de una empresa.
    •
    Evaluar los cambios y mejoras en los sistemas de operación, los métodos, procedimientos de trabajo y las técnicas específicas que regulan las operaciones y las actividades de los funcionarios y demás empleados de una empresa.
    •
    Mejorar el uso de los recursos de una empresa en el desarrollo de sus operaciones y actividades.
    •
    Evaluar el volumen, frecuencia y periodicidad de las operaciones y actividades de las diferentes unidades administrativas de una empresa en función de su objetivo institucional.

    Objetivos de la auditoría integral
    La participación de grupos multidisciplinarios que sean capaces de hacer una evaluación total de todas las áreas de una empresa, con mayor profundidad y de forma más completa, es uno de los aspectos fundamentales de esta auditoría, cuyos objetivos son los siguientes:
    • Realizar una evaluación global, multidisciplinaria e independiente sobre las actividades, operaciones, estructura organizacional y funciones de todas y cada una de las áreas y unidades de trabajo de una institución, con el fin de emitir un dictamen global sobre la razonabilidad de sus funciones y operaciones.
    • Evaluar el cumplimiento de los planes, programas, políticas, normas y lineamientos que regulan las áreas y unidades de trabajo de una empresa, así como la correlación e integración de sus funciones y actividades.
    • Dictaminar, de manera integral y multidisciplinaria, sobre los resultados e interrelación de las actividades de cada una de las áreas y unidades administrativas de una empresa, utilizando siempre las mismas herramientas de evaluación para hacer una valoración sistemática y emitir un dictamen veraz.
    • Mejorar los sistemas de operación, los métodos y procedimientos de trabajo, las técnicas específicas y los controles que regulan las operaciones y actividades de todas las áreas de una institución, a través de una evaluación global y multidisciplinaria de las mismas.
    • Aprovechar los recursos de las múltiples disciplinas de la auditoría, para hacer evaluaciones conjuntas de las operaciones y actividades de todas las unidades de trabajo de una empresa.
    
    Objetivos de la auditoría gubernamental
    Esta auditoría es la responsable de evaluar las actividades gubernamentales, públicas y de gobierno. Por lo tanto, sus objetivos son los siguientes:
    • Realizar una evaluación, de manera independiente, sobre las actividades, operaciones, estructura de organización y funciones de las empresas de la administración pública federal, a fin de emitir un dictamen sobre la razonabilidad de su gestión administrativa y del uso de los recursos públicos.
    • Evaluar el adecuado cumplimiento de los planes globales de desarrollo, de los presupuestos y programas de inversión, y el uso correcto de los recursos públicos por parte de cada entidad de las administraciones públicas federal, estatal o municipal.
    • Evaluar la actualización y correcta aplicación de las leyes, normas, políticas y procedimientos que regulan las actividades de una institución gubernamental, así como sus relaciones con otras dependencias y los ciudadanos.
    • Dictaminar sobre los resultados de la gestión administrativa de directivos, empleados y trabajadores de cada una de las empresas y dependencias de las administraciones públicas federal, estatal y municipal, así como sobre el cumplimiento de sus actividades y funciones.

    Objetivos de la auditoría de sistemas
    La evaluación de los sistemas computacionales, la administración del centro de cómputo, el desarrollo de proyectos informáticos, la seguridad de los sistemas computacionales y todo lo relacionado con ellos, se considerarán bajo los siguientes objetivos:
    •
    Realizar una evaluación con personal multidisciplinario y capacitado en el área de sistemas, con el fin de emitir un dictamen independiente sobre la razonabilidad de las operaciones del sistema y la gestión administrativa del área de informática.
    •
    Evaluar el uso de los recursos financieros en las áreas del centro de información, así como el aprovechamiento del sistema computacional, sus equipos periféricos e instalaciones.
    •
    Evaluar el uso y aprovechamiento de los equipos de cómputo, sus periféricos, las instalaciones y el mobiliario del centro de cómputo, así como el uso de sus recursos técnicos y materiales para el procesamiento de información.
    •
    Evaluar el aprovechamiento de los sistemas de procesamiento, sus sistemas operativos, los lenguajes, programas y paqueterías de aplicación y desarrollo, así como el desarrollo e instalación de nuevos sistemas.
    •
    Evaluar el cumplimiento de planes, programas, estándares, políticas, normas y lineamientos que regulan las funciones y actividades de las áreas y de los sistemas de procesamiento de información, así como de su personal y de los usuarios del centro de información.
    •
    Realizar la evaluación de las áreas, actividades y funciones de una empresa, contando con el apoyo de los sistemas computacionales, los programas especiales para auditoría y la paquetería que sirve de soporte para el desarrollo de auditorías mediante la computadora.
    La presentación de los objetivos anteriores tiene el único propósito de que el lector conozca y compare los fines básicos que se pretenden alcanzar en cada tipo propuesto de auditoría, y que los tenga presentes al elegir los fundamentos básicos necesarios para hacer una revisión y, con ello, plantear los objetivos de la auditoría que requiera, buscando hacer una mejor evaluación del área que tenga que auditar.
    `
  },

  a2_3: {
    text: `
    Principales áreas, actividades y resultados que se auditan

    Los siguientes puntos conforman una propuesta de las principales áreas, funciones, operaciones, resultados y actividades de una empresa o unidades administrativas que se pueden auditar, todo de acuerdo con el tipo de evaluación que se requiera. Al hacer esta propuesta, se busca que el lector pueda identificar aquellas orientaciones sobresalientes que le servirán de guía para determinar las evaluaciones que deberá realizar al aplicar una auditoría.
    
    El objetivo de esta exposición es que el auditor cuente con un marco de referencia para encauzar correctamente las formas de revisión, las técnicas, procedimientos y herramientas que puede utilizar en una evaluación, a fin de que pueda valorar sus requerimientos y emitir un dictamen confiable con los resultados de dichas revisiones.
    
    Los puntos que a continuación se proponen se deben considerar como los puntos de partida para cualquier tipo de auditoría, los cuales se pueden ampliar de acuerdo con las necesidades específicas de la revisión que se vaya a realizar. Sin embargo, se sugiere que se tomen en cuenta los siguientes aspectos.

    Evaluación de los estados financieros y operaciones contables

    Uno de los usos tradicionales de la auditoría es revisar el cumplimiento exacto y razonable de las normas contables que regulan los asuntos financieros de una empresa, así como sus registros contables y el cumplimiento de sus operaciones conforme a los principios de contabilidad generalmente aceptados. Además, se evalúa la correcta emisión de los resultados financieros alcanzados durante un periodo específico, verificando que todas estas actividades cumplan con las leyes, normas y regulaciones vigentes, tanto las emitidas por las autoridades correspondientes, como las de asociaciones de profesionales de este ramo, e incluso de la propia empresa en cuestión.
    
    Evaluación de los objetivos, planes, programas y presupuestos
    
    Esta auditoría se realiza al establecimiento de los fines que se pretenden alcanzar en una empresa, a través de la elaboración y cumplimiento de sus objetivos y planes, ya sean generales, particulares, y a largo, mediano o corto plazo. En dicha evaluación se incluye la definición de las actividades, metas y eventos que se deben cumplir, así como la asignación de los recursos y tiempos programados para el desarrollo de esas actividades.
    
    Evaluación de la estructura organizacional, funciones, perfil de puestos, líneas de autoridad y comunicaciones
    
    Esta auditoría se realiza a los aspectos organizacionales de una empresa y a sus unidades administrativas, incluyendo todo lo relacionado con la definición y cumplimiento de sus funciones, así como sus perfiles de puestos, la delimitación de sus líneas jerárquicas de autoridad y responsabilidad, sus canales formales de comunicación y todos aquellos componentes de su estructura organizacional dentro de los cuales se enmarcan todas sus actividades y tareas.
    
    Evaluación de la administración de los recursos humanos de una empresa o del área auditada
    
    Otro aspecto fundamental que se debe contemplar dentro de una auditoría es todo lo relacionado con los recursos humanos de una empresa, en lo que se conoce como auditoría laboral. En esta evaluación se considera la selección, capacitación, adiestramiento y obligaciones de los patrones y trabajadores, el diseño de sus actividades, la definición de sus funciones y tareas, los contratos laborales, así como los aspectos sindicales, normas y reglamentos que regulan las relaciones laborales entre la empresa y el trabajador. También se evalúan las prestaciones que reciben los trabajadores, así como la administración de sus salarios, beneficios adicionales y todo lo relacionado con sus ingresos.

    Evaluación de la administración de prestaciones, impuestos y obligaciones de una empresa, así como de sus funcionarios y personal en general.

    El objetivo principal de esta auditoría es revisar la correcta determinación y cumplimiento de las obligaciones fiscales de la empresa, sus funcionarios, empleados, proveedores y compradores. Se verifica el cumplimiento del pago de impuestos y otras imposiciones gubernamentales, estatales y municipales, tanto de tipo social como relacionados con la seguridad de la comunidad.
    
    Evaluación de las actividades y operaciones de una empresa, así como de sus funcionarios y personal en general.
    
    Esta auditoría tiene como objetivo verificar el correcto desarrollo y ejecución de las operaciones, funciones y actividades de las áreas que integran una institución, así como comprobar que los funcionarios y empleados cumplan con dichas operaciones de acuerdo con las necesidades de la institución.
    
    Evaluación de las normas, políticas, métodos y procedimientos de operación.
    
    Esta auditoría se enfoca en revisar el cumplimiento de las normas, políticas y lineamientos que regulan las actividades de los funcionarios y empleados de una empresa. Además, evalúa los métodos de trabajo y los procedimientos de operación para determinar el buen desempeño de sus labores.
    
    Evaluación de los bienes y activos de una empresa.
    
    Esta auditoría se enfoca en la evaluación de la protección, custodia y forma de uso de los bienes muebles, inmuebles, equipos y sistemas de las áreas de una empresa. Las áreas a evaluar estarán definidas por sus necesidades específicas de revisión o, en su caso, por las actividades especiales que demanda el tipo de activos a evaluar. Se incluyen las instalaciones, comunicaciones y protección de activos de la empresa.
    
    Evaluación de otras áreas y actividades por auditar.
    
    Esta auditoría se enfoca en determinar las áreas, actividades y/o eventos especiales que serán evaluados dentro de una empresa. Estos aspectos estarán definidos por las necesidades particulares de revisión de la empresa y las operaciones que requieran una evaluación mediante una auditoría especial, no considerada dentro de los aspectos anteriores. Es importante señalar que los aspectos a evaluar serán establecidos de acuerdo con las necesidades concretas de la empresa y áreas donde se ejecutará la auditoría. Además, el auditor que realizará la auditoría debe tener experiencia, conocimientos y especialidad en el área a auditar.
    
    Cabe aclarar que los puntos anteriores son únicamente enunciativos y su propósito es que el lector pueda identificar los principales aspectos que deben examinarse dentro de las actividades de cualquier tipo de auditoría. Insistimos en que el propósito de estos puntos es que el lector pueda comprender la existencia e importancia de los aspectos ya mencionados, a fin de trasladarlos a la auditoría de sistemas computacionales, la cual se abordará en los siguientes capítulos.
    `
  },

  a2_4: {
    text: `
    Normas generales de auditoría
    La profesión de auditoría se rige, al menos en el aspecto contable y financiero, por normas y criterios aceptados generalmente, los cuales son emitidos por asociaciones de profesionales que aportan experiencia, conocimientos y actualizaciones en esta materia, a fin de que los practicantes de esta profesión y similares conozcan estas normas y las cumplan en el desarrollo de algún tipo de auditoría, según la profesión que practiquen.
    
    En la actualidad, existen muchas asociaciones de profesionales dedicados a la contabilidad y la ingeniería financiera. Debido a esto, en casi todos los países existe alguna asociación o colegio de contadores, los cuales tienen entre sus principales funciones regular la actuación profesional de sus agremiados. Entre estas regulaciones, se encuentran las normas aplicables a la auditoría financiera y contable. A continuación, citamos las normas generales de auditoría que son emitidas por asociaciones de contadores, mismas que consideran las actividades que debe cumplir el auditor. El propósito de señalar estas normas es que nos sirvan de referencia para tomar en cuenta los aspectos fundamentales del estudio de la auditoría como disciplina y deducir cómo sería su aplicación en las normas de auditoría de sistemas computacionales.
    
    Debemos aclarar que aún no se sabe de asociaciones de auditores de sistemas, informática o disciplinas similares, mediante las cuales se regule la actuación de los auditores, y que los únicos intentos por normalizar sus acciones se dan tímidamente por las asociaciones de contadores y de licenciados en administración y ocasionalmente por asociaciones de auditores internos, por lo menos en México.
    
    Normas generales de auditoría emitidas por el AICPA
    
    Normas generales:
    • La auditoría debe ser realizada por personal que cuente con la capacitación técnica adecuada y la competencia para ejercer como auditor.
    • El auditor debe conservar una actitud mental independiente en todos los aspectos.
    • El auditor debe ser diligente en la presentación de los resultados de su auditoría.
    
    Normas para el trabajo:
    • Para que una auditoría sea eficiente y eficaz, se debe planificar y supervisar cabalmente.
    • El control interno se debe entender en estructura y contenido a fin de aplicarlo en la planeación y determinación de la naturaleza, duración, extensión y profundidad de la realización de una auditoría.
    • La evidencia que soporta el informe del auditor debe ser suficiente, competente y oportuna, esto se logra mediante las técnicas, métodos y procedimientos de auditoría.
    
    Normas de la información:
    • El informe de la auditoría debe presentarse en estricto apego a las normas de auditoría y contabilidad generalmente aceptadas.
    • En el informe de la auditoría se deben señalar las observaciones que se hayan detectado durante el periodo de evaluación, destacando aquellas desviaciones de los procedimientos normales de la operación de la empresa y de los principios generalmente aceptados.
    • Los informes de auditorías financieras deberán contener la opinión razonada del auditor.

    Normas generales de auditoría emitidas por el IMCPAC

    El Instituto Mexicano de Contadores Públicos Agrupados (IMCPAC) es una asociación de profesionales que ha emitido una serie de normas, principios y criterios relacionados con la auditoría, principalmente de carácter contable y financiero, con el propósito de homogeneizar la actuación de estos profesionales al realizar sus auditorías. A continuación se presentan las normas de auditoría emitidas por el IMCPAC:
    
    Normas personales:
    
    Entrenamiento técnico y capacidad profesional.
    Cuidado y diligencia profesional.
    Independencia.
    Normas de ejecución del trabajo:
    
    Planeación y supervisión.
    Estudio y evaluación del control interno.
    Obtención de evidencia suficiente y competente.
    Normas de información:
    
    Declaración de la relación de estados o información financiera y expresión de opinión.
    Bases de opinión sobre estados financieros.
    Normas para todos los auditores:
    En la enciclopedia de la auditoría, William F. Messier propone que todos los auditores deben seguir las siguientes normas, mismas que presentamos a continuación:
    
    Independencia.
    Integridad profesional.
    Fiabilidad de los estados y registros.
    Mantenimiento del control interno.
    Obtención y evaluación de evidencia.
    Rango de conocimiento:
    Conocimiento completo.
    Buen conocimiento.
    Conocimiento adecuado.

    Podríamos seguir citando más normas de auditoría emitidas por asociaciones, colegios o autores en la materia; sin embargo, para el propósito que se busca en este capítulo, sería inadecuado continuar con estas exposiciones a riesgo de parecer desactualizados en las citas de dichas normas. Por esta razón, hasta aquí dejamos los comentarios al respecto; sin embargo, a continuación proponemos normas generales de auditoría y sugerimos profundizar en su contenido, ya que así podremos analizar los principales aspectos a utilizar en la emisión de las normas de auditoría, cualesquiera que sean las áreas donde se apliquen.

    Normas generales
    
    Las normas que se presentan a continuación pueden considerarse como las regulaciones formales que, como mínimo, debe considerar el auditor para desarrollar esta actividad profesional, cualquiera que sea su especialidad. Debido a la importancia de estas normas, se da una explicación breve y general de su aplicación.
    
    Normas para la capacitación del auditor
    
    Estas son las normas relacionadas con la capacitación, adiestramiento y profesionalización de quienes trabajan en la auditoría de sistemas computacionales, debido a que con su adopción se pretende regular los conocimientos, habilidades y requerimientos técnicos de los profesionales que actúan en esta disciplina especializada. Dichas normas se agrupan en dos grandes aspectos:
    
    Capacitación adecuada a las necesidades de auditoría
    Capacitación permanente del profesional dedicado a esta actividad
    Normas para la conducta observable del auditor
    
    Debido a que la auditoría es una ocupación profesional que tiene un gran reconocimiento entre las empresas, trabajadores e incluso autoridades, su realización reclama una considerable responsabilidad, mucho prestigio y una gran capacidad laboral y moral por parte del auditor. Para que esto sea así, es necesario que se regule la intervención del auditor en este campo profesional, mediante una serie de normas que determinarán su actuación. Estas normas se pueden agrupar como sigue:
    
    Para la independencia y actitud mental del auditor
    Para la actuación profesional del auditor
    Para la actividad de auditoría

    Normas para el desarrollo del trabajo del auditor
    Para que la actuación profesional del auditor se realice de la mejor manera y con la eficacia que requieren las empresas y áreas de sistemas, es necesario que esta actividad sea regulada por una serie de normas, criterios y lineamientos que ayuden a uniformar estos trabajos. Para establecer, difundir y aplicar dichas normas, primero deben ser reguladas por algún organismo especializado, el cual previamente las estudia, explica y, una vez debidamente comprobadas, las difunde y establece. Estas normas se pueden aplicar en los siguientes rubros:
    
    • En la planificación de las actividades de auditoría
    • En la supervisión de las actividades del auditor
    • En la aplicación del control interno
    • En la aplicación de las herramientas, técnicas y procedimientos de auditoría
    • En la obtención de las evidencias de la auditoría
    
    Normas para la emisión del informe de la auditoría
    El producto final de una auditoría es la emisión de un informe, en el cual se reportan las incidencias encontradas durante la revisión, así como la opinión del auditor respecto a lo que evaluó. Sin embargo, dicho informe debe ser regulado por algunos lineamientos, a fin de que su elaboración sea acorde con los aspectos profesionales que requiere esta disciplina. Estos lineamientos se aplican para los siguientes aspectos:
    
    • Para la presentación del informe de auditoría
    • Para el dictamen y opinión del auditor
    • Para la aplicación de las normas y principios de auditoría
    `
  },

  a2_5: {
    text: `
    Métodos, técnicas, herramientas y procedimientos de auditoría

    En esta parte de nuestro estudio, sólo haremos mención de las principales herramientas que utiliza el auditor para llevar a cabo su trabajo, aclarando que en los capítulos 9, 10 y 11 de este libro analizaremos cada una de estas herramientas, enfocándolas concretamente hacia la auditoría de sistemas computacionales.
    
    Estas técnicas, métodos y procedimientos de auditoría se ubicarán en tres grandes grupos, considerando a las herramientas tradicionales y otras herramientas específicas aplicables a los sistemas computacionales. En el siguiente cuadro se presentan esos tres grupos:
    
    Instrumentos de recopilación de datos aplicables en la auditoría de sistemas:
    • Entrevistas
    • Cuestionario
    • Encuestas
    • Observación
    • Inventarios
    • Muestreo
    • Experimentación
    
    Técnicas de evaluación aplicables en la auditoría de sistemas:
    • Examen
    • Inspección
    • Confirmación
    • Comparación
    • Revisión documental
    
    Técnicas especiales para la auditoría de sistemas computacionales:
    • Guías de evaluación
    • Ponderación
    • Simulación
    • Evaluación
    • Diagrama del círculo de sistemas
    • Diagramas de sistemas
    • Matriz de evaluación
    • Programas de verificación
    • Seguimiento de programación
    `
  },

  a2_6: {
    text: `
    Estructuras de organización de las empresas y áreas dedicadas a la auditoría

    Tomando en cuenta que en México existen muchas empresas y profesionales que se dedican a la auditoría, y debido a las propias características de esas empresas y/o áreas de auditores, a continuación se presenta una serie de propuestas de organización, bajo las cuales se puede clasificar la estructura de organización de las empresas y áreas de auditoría. Dichas propuestas se dividen en dos grupos.
    
    El primero está determinado por las estructuras de aquellas empresas que se dedican a la auditoría externa. Estas estructuras se agrupan en tres grandes clasificaciones, según el tamaño de la empresa; claro está, todo será considerado de acuerdo con el número de sus ocupantes y actividades que deban realizar.
    
    Para el segundo caso, la estructura de organización está considerada para aquellas empresas que cuentan con áreas de auditoría interna; en esta estructuración también se ubican tres tipos de áreas de auditoría interna dentro de las empresas, tomando en cuenta el tamaño de la institución y el número de empleados que haya en el área de auditoría interna.
    
    Estructuras de organización de las empresas dedicadas a la auditoría externa
    
    Para la presentación de esta clasificación de niveles ideales de estructuras de las empresas dedicadas a la auditoría externa, tomaremos el siguiente criterio de agrupación: grandes empresas dedicadas a la auditoría, despachos o empresas medianas dedicadas a la auditoría y pequeños despachos o auditores independientes. Sobre esta base, se proponen estos niveles de puestos para adecuarse a las necesidades de la empresa auditora.

    Estructuras de organización de las empresas y áreas dedicadas a la auditoría

    Tomando en cuenta que en México existen muchas empresas y profesionales que se dedican a la auditoría, y debido a las propias características de esas empresas y/o áreas de auditores, a continuación se presenta una serie de propuestas de organización, bajo las cuales se puede clasificar la estructura de organización de las empresas y áreas de auditoría. Dichas propuestas se dividen en dos grupos.
    
    El primero está determinado por las estructuras de aquellas empresas que se dedican a la auditoría externa. Estas estructuras se agrupan en tres grandes clasificaciones, según el tamaño de la empresa; claro está, todo será considerado de acuerdo con el número de sus ocupantes y actividades que deban realizar.
    
    Para el segundo caso, la estructura de organización está considerada para aquellas empresas que cuentan con áreas de auditoría interna; en esta estructuración también se ubican tres tipos de áreas de auditoría interna dentro de las empresas, tomando en cuenta el tamaño de la institución y el número de empleados que haya en el área de auditoría interna.
    
    Estructuras de organización de las empresas dedicadas a la auditoría externa
    
    Para la presentación de esta clasificación de niveles ideales de estructuras de las empresas dedicadas a la auditoría externa, tomaremos el siguiente criterio de agrupación: grandes empresas dedicadas a la auditoría, despachos o empresas medianas dedicadas a la auditoría y pequeños despachos o auditores independientes. Sobre esta base se proponen estos niveles de puestos para adecuarse a las necesidades de la empresa auditora:
    
    Grandes empresas dedicadas a la auditoría:
    • Director o gerente general (al nivel de mando superior)
    • Funcionarios de cuenta (por empresa o por área de atención)
    • Gerentes o jefes de departamento o de área de atención
    • Supervisores de auditoría
    • Jefes de grupo o responsables de auditoría (Auditores Senior)
    • Auditores asignados (Auditores Junior)
    • Apoyo administrativo y secretarial
    
    Despachos o empresas medianas dedicadas a la auditoría:
    • Gerente de auditoría
    • Encargado de auditoría (Auditor Senior)
    • Auditores Junior
    • Apoyo secretarial
    
    Pequeños despachos o auditores independientes:
    • Auditor Senior
    • Auditor Junior
    • Apoyo secretarial
    
    Es necesario volver a destacar que los niveles de estructura aquí propuestos son indicativos para la organización de cualquier empresa dedicada a la auditoría externa, en la condición de que esta estructuración puede adecuarse a las necesidades concretas de la propia institución, atendiendo los requerimientos de sus áreas, la especialidad de su personal, las necesidades de sus clientes o de cualquier otro tipo de criterio que le ayude a bien evaluar sus funciones, actividades u operaciones, según sus características y necesidades.
    
    Estructuras de organización de las áreas de auditoría interna
    
    De acuerdo con la estructura de organización, el tamaño de la empresa, las políticas y estilos de dirección de cada institución, la ubicación ideal de las áreas de auditoría interna tiene que ser a nivel de staff o asesoría, dependiendo y reportando directamente a los niveles de mayor jerarquía en la empresa, con subordinación de la dirección general o de una sola de las áreas de alta dirección. 

    Tomando como criterio fundamental la clasificación dictaminada por Nacional Financiera sobre el tamaño de las empresas en México, encontramos que éstas se ubican en los siguientes cinco grupos, de acuerdo con su tamaño: macroempresas, empresas grandes, empresas medianas, empresas pequeñas y microempresas.

    En apego a dicha clasificación, ubicaremos los niveles de puestos de la estructura de la auditoría interna como sigue:
    
    Para auditorías internas de macroempresas y empresas grandes
    • Director o gerente al nivel de área funcional
    • Gerentes o jefes de departamento, de área o de función a auditar
    • Jefes de grupo o encargados (Auditores Senior)
    • Auditores internos (Auditores Junior)
    • Apoyo administrativo y secretarial
    
    Para auditorías internas de empresas medianas
    • Gerente de auditoría
    • Auditor Senior
    • Auditores Junior
    • Apoyo secretarial
    
    Para auditorías internas de empresas pequeñas y microempresas
    • Auditor Senior
    • Auditor Junior
    • Apoyo secretarial
    
    También conviene aclarar que la propuesta de niveles de organización de auditoría interna puede ser modificada de acuerdo con las necesidades y características de la institución, a los requerimientos de atención de sus áreas, a su tamaño, giro y actividades, o por cualquier otro tipo de criterio que le permita hacer una evaluación adecuada.
    `
  },

  //

  a3_1: {
    text: `
    Marco conceptual de la ética

    Para entender lo importante que es el estudio de esta materia, comenzaremos por identificar las definiciones y conceptos básicos que se han vertido alrededor de la ética, para después analizar las principales corrientes y autores del pensamiento filosófico sobre esta parte esencial del comportamiento humano. Contando con este breve esbozo, ya estaremos en condiciones de identificar los principales valores y deberes éticos, criterios y responsabilidades, normas y obligaciones que el profesional de auditoría deberá respetar al ejercer su profesión.
    
    Conceptos básicos relacionados con la ética
    
    Como parte de este inciso, vamos a señalar las principales definiciones de algunos temas relacionados con la ética, con el mero propósito de dar las bases conceptuales de esta materia.
    
    Ético
    
    “Del griego eethikos de éethos: costumbre, carácter. Relativo a la moral.” [1]
    
    Ética
    
    “Relativo a la ética o moral, o que está de acuerdo con sus principios o su exigencia. Parte de la filosofía que estudia los fundamentos y las normas de la conducta humana. Dos son las corrientes principales: la que relaciona la ética con la naturaleza misma del hombre [...] la que no ve en las normas de conducta sociales más que unos convenios sociales reguladores de lo que considera bueno o malo, conveniente o nocivo.” [2]
    
    “Del griego éthicos: Parte de la filosofía que trata de la moral y obligaciones de los hombres.” [3]
    
    Moral
    
    “Del latín moralis [...] Ciencia que enseña las reglas que deben seguirse para hacer el bien y evitar el mal... Conjunto de facultades del espíritu [...].” [4]
    
    “Conjunto de principios y reglas que recomiendan lo bueno y rechazan lo malo [...] Grupo de facultades intelectuales que valora las acciones humanas [...] Juicio moral que no tiene que ver con lo jurídico [...] Que es decente, decoroso, honesto [...].” [5]
    
    Social
    
    “Que pertenece a, o se relaciona con las sociedades humanas [...] Sistema de organización social, política y económica que busca los beneficios de la colectividad y no los de los intereses individuales [...] Que pertenece a, o se relaciona con agrupaciones mercantiles o financieras [...] Que pertenece a, o se relaciona con las actividades que la gente organiza para convivir [...].”

    Con el análisis de los anteriores conceptos, vemos que la moral está relacionada con las normas de conducta de carácter social, jurídico, profesional y religioso que regulan la actuación del hombre en la sociedad, de acuerdo con los preceptos que se establecen conjuntamente para servir de guías en el accionar del hombre dentro de la misma sociedad.

    Lo mismo ocurre con la actuación del profesional dedicado a la auditoría, ya que éste debe conducirse de acuerdo con las normas de conducta social, moral, religiosa, jurídica y profesional, las cuales regularán su actuación como profesional de la auditoría ante la sociedad, autoridades, empresas y empleados de estas últimas.
    
    Sin embargo, la conceptualización de ética va más allá de estos conceptos, como lo señala Nicola Abbagnano en su diccionario de filosofía que dice: “La ética es en general la ciencia de la conducta [...] y existen dos concepciones fundamentales de esta ciencia, a saber: 1. La que considera como ciencia del fin, al que debe dirigirse la conducta del hombre y de los medios para lograr tal fin y derivar tanto el fin como los medios de la naturaleza del hombre. 2. La que la considera como la ciencia del impulso de la conducta humana, e intenta determinarlo con vistas a dirigir o disciplinar la conducta misma.” “Estas dos concepciones se han entrelazado en formas diferentes, tanto en la antigüedad como en el mundo moderno [...] la primera, en efecto, habla el lenguaje ideal con el que el hombre se dirige por naturaleza [...] la segunda, en cambio, habla de los motivos y de las causas de la conducta humana, o también de las fuerzas que la determinan y pretenden atenerse al reconocimiento de los hechos.”
    
    “[...] Gutiérrez Sáenz dice que la Ética estudia reflexivamente el fundamento de la conducta moral. Esto quiere decir que el hombre desde el principio de su vida social (socialización) está sujeto todo el tiempo a seguir una serie de reglas, normas o leyes. Se crea entonces en el individuo una conciencia normativa que le indica cuáles son los caminos adecuados que lo conducirán ordenadamente y con la aceptación de sus congéneres a convivir y obtener los logros que se proponga, como son: la felicidad, la perpetuación, la autorrealización y otros más. Además, como señala Larroyo todas las normas se crean en contacto con los otros seres humanos, por lo que esa conciencia normativa es, en rigor, una conciencia social normativa.
    
    Atendiendo a lo anterior, la definición propuesta de ética profesional del auditor es la siguiente: Es el conjunto de valores y principios éticos, morales y profesionales que permiten regular la actividad del profesional dedicado a la auditoría, con el fin de mejorar su actuación en las empresas que audita, así como establecer la responsabilidad que éste adquiere con el desarrollo de esta profesión.

    Aquí está el texto con el formato corregido:

    Sin embargo, la acepción de ética es mucho más amplia, según el autor y la corriente que se tomen en cuenta para su análisis y aplicación. Esta materia pretende regular el comportamiento y los deberes éticos y profesionales del auditor; de esta manera, encontramos que este campo de estudio es demasiado amplio y tiene muchas corrientes de pensamiento y autores, opuestos entre sí, y diversas formas de utilización. Debido a ello, a continuación le presentaremos las principales corrientes del pensamiento ético, sin profundizar en su análisis, ya que sólo queremos presentarle un breve esbozo del tema, dejándole en absoluta libertad de profundizar sobre este apasionante e importante tema de carácter filosófico.
    
    Principales corrientes éticas
    Debido a que existen muchas corrientes de pensamiento respecto a las doctrinas ético-filosóficas, vamos a seguir las corrientes más características de esta materia, asumiendo de antemano que en este breve análisis podemos dejar sin mencionar otras corrientes muy importantes para algunos lectores; sin embargo, las que aquí se mencionan sólo serán a nivel de identificación, a fin de captar la esencia e importancia del estudio de la ética en la actuación profesional del auditor. Las corrientes éticas que estudiaremos son las siguientes:
    
    Doctrina ética griega
    Doctrina ética aristotélica
    Doctrina ética cristiana
    Doctrina ética kantiana
    Doctrina ética marxista
    Doctrina ética existencialista
    Doctrina ética pragmática
    
    A continuación se hace un breve planteamiento del pensamiento filosófico de estas doctrinas, incluyendo las corrientes de cada una de ellas.
    
    Doctrina ética griega: Esta corriente se enfoca en la idea de que la virtud es el camino hacia la felicidad. Se destacan las figuras de Sócrates, Platón y Aristóteles, quienes consideran que la ética es un componente importante de la filosofía y que se debe buscar la felicidad a través de la razón y la virtud.

    Doctrina ética aristotélica: Esta corriente se centra en la virtud y el bien común. Para Aristóteles, la felicidad se logra a través de la realización de la virtud, y ésta se alcanza por medio de la educación y la práctica. Además, se enfoca en el concepto de justicia y en la importancia de actuar de acuerdo a la ley.
    
    Doctrina ética cristiana: Esta corriente se basa en la moral y la enseñanza religiosa del cristianismo, enfocándose en la idea de que el amor y la caridad son los principios fundamentales de la ética. Se destaca la figura de San Agustín y Santo Tomás de Aquino, quienes proponen que la ética se basa en la ley divina y que se debe actuar de acuerdo a los preceptos morales establecidos por la Iglesia.
    
    Doctrina ética kantiana: Esta corriente se enfoca en la razón y la moralidad. Kant sostiene que la moralidad se debe basar en la razón y no en los sentimientos, y que se debe actuar de acuerdo a principios universales y no por interés personal. Se destaca la idea de la "imperatividad categórica" como principio moral fundamental.
    
    Doctrina ética marxista: Esta corriente se enfoca en la justicia social y la igualdad. Para Marx, la ética se basa en la lucha contra la explotación y la opresión, y en la construcción de una sociedad justa y equitativa. Se destaca la idea de que los valores y la moral están influenciados por las relaciones sociales y económicas.
    
    Doctrina ética existencialista: Esta corriente se enfoca en la libertad y la responsabilidad individual. Los filósofos existencialistas sostienen que cada individuo es libre para tomar decisiones y dar sentido a su vida, y que se debe asumir la responsabilidad de dichas decisiones. Se destaca la figura de Jean-Paul Sartre.
    
    Doctrina ética pragmática: Esta corriente se enfoca en la utilidad y la consecuencia de las acciones. Para los pragmáticos, la moralidad se basa en la búsqueda del bien común y se debe actuar de acuerdo a la consecuencia de las acciones. Se destaca la figura de John Dewey y William James.
    `
  },

  a3_2: {
    text: `
    Principios de axiología y valores éticos

    Para poder hablar de los valores del auditor de sistemas, lo primero es considerar las bases fundamentales de la ciencia que estudia la teoría filosófica de los valores; esto se profundiza mediante la axiología, cuyo significado es: Axiología se deriva del griego axios, valor y logia (de logos), tratado o teoría, teoría del valor.
    
    “Ciencia de los valores, en especial de los valores morales.” La axiología entonces es la ciencia que trata de los valores de carácter moral que pretenden normar la conducta de los individuos ante la sociedad; es evidente que el auditor, como parte de una sociedad, debe considerar y acatar los valores ético-morales regulados mediante esta ciencia. Por ello, es necesario profundizar un poco sobre estos valores, antes de proponer las normas éticas que regularán la actuación del auditor de sistemas computacionales. Aunque la definición de valor es la siguiente: “del latín valor - oris, de valore: valer. Precio, costo o utilidad o valía”, desde el punto de vista filosófico estos conceptos adquieren otro significado, pues desde la antigüedad así se designaban los bienes de la cultura y los bienes vitales o espirituales del individuo, de los cuales no se concebía su existencia como entes aislados ni autónomos, sino como los atributos indispensables del ser. (Estrada Parra: 1992-1994.)
    
    Según Estrada Parra, cuando cita a Max Scheler, señala que los valores son cualidades del orden material, aunque también son objetos ideales. Esto último fue explicado por Hartmann. Para Aristóteles, la bondad, la belleza, la justicia, la verdad y la santidad son entes que no son reales sino meramente ideales; aunque éstos se han considerado como los principales valores que dan las pautas del valor filosófico que pretende alcanzar el ser.
    
    Las características de los valores son:
    
    Objetividad: los valores existen en sí y por sí mismos, y no es necesaria su realización para que existan. Son independientes del sujeto que los obedece o destaca.
    Dependencia: aunque los valores tienen existencia propia, están subordinados a la realidad, lo cual permite que el ser humano conozca su existencia. Además, a pesar de su intemporalidad, los valores son parte de la realidad.
    Polaridad: el valor siempre se presenta como una forma de perfección, y es una forma antagónica de la imperfección o la carencia. El valor verdadero se opone al falso, la belleza a la fealdad, la bondad a la maldad.
    Cualidad: los valores no están relacionados con la cantidad sino con la cualidad; éstos no existen porque puedan aumentar o disminuir, sino porque el hombre se adecua o se acerca a ellos.
    
    Jerarquía

    Los valores se dan en un orden establecido, según su importancia, y este orden se modifica según quien los clasifica. Como complemento de esos conceptos, a continuación vamos a estudiar los principios y valores éticos iniciados por Max Scheler (1874-1928) y Nicolai Hartmann (1882-1950), también conocidos como axiología de Scheler; cuya tesis central es la materialidad y objetividad de los valores, oponiéndose al formalismo de Kant.
    
    “[...] Según Scheler, los valores se conocen por medio de la intuición, y no son accesibles a la razón; ésta es ciega para los valores”. Existen dos clases de intuiciones: la intuición eidética (de tipo racional), por medio de la cual se captan las esencias lógicas, por ejemplo los teoremas, y la intuición emocional, que capta otro tipo de objetos, las esencias analógicas, por ejemplo los valores.
    
    Para Scheler, los valores son jerarquizados de acuerdo con esta propuesta:
    
    Valores de lo agradable y lo desagradable (jerarquía de grado inferior). Son los que tienen relación inmediata con los sentidos y las sensaciones del placer contra el disgusto.
    
    Valores de lo vital y lo antivital (jerarquía de grado medio inferior). Son aquellos cuya convergencia está encaminada a conservar y ampliar la vida en contra del aniquilamiento. Raúl Gutiérrez Sáenz cita esta jerarquía como valores de lo noble y de lo vulgar.
    
    Valores espirituales y no espirituales (jerarquía de grado superior). Son los que están más allá de los entes físicos, aunque sólo se perciben a través del hombre.
    
    Valores religiosos y profanos (valores de grado superior). Son aquellos que se dan entre la tesis de lo santo y lo profano.
    
    También se puede citar la clasificación propuesta por De Finance, quien agrupa la jerarquía de los valores como sigue:
    
    Valores infrahumanos. Son aquellos que perfeccionan al hombre en sus estratos inferiores: la fuerza, el placer, la salud, la agilidad, etcétera.
    
    Valores humanos inframorales. Aquí se colocan todos los valores humanos:
    
    Valores económicos
    Valores no-éticos
    Valores estéticos
    Valores sociales
    Valores morales. Son los valores que dependen exclusivamente del libre albedrío del individuo, en busca de la virtud y el nivel íntimo del comportamiento del individuo. Por ejemplo, entre éstos tenemos: la virtud, la prudencia, la justicia, la fortaleza y la templanza.
    
    Valores religiosos. Considerados como el nivel superior, pues dependen de las potencias superiores al hombre. Por ejemplo, la santidad, la gracia, la caridad, etcétera.
    
    Según el criterio del mismo pensador, analizaremos las características de los valores:

    Son cualidades ideales, pues existen en el espacio y en el tiempo, aunque no son reales. Son alógicas, no captables por la razón, sólo se perciben pero no son lógicas. Son contenidos a priori, nacen de la comprensión de nuestra propia experiencia a través de la intuición. Son objetivos, se dan independientemente de que sean conocidos o estimados. Son trascendentes, como son cualidades ideales, trascienden a los demás. Son materiales, tienen un contenido concreto que no se reduce a una pura forma o estructura universal, sino que se materializa en la esencia del ser. Se distinguen respecto al bien, pues mientras el bien puede ser destruido, el valor permanece sin ser destruido.

    Principales valores y virtudes de José Armando Estrada Parra:
    
    La veracidad: Es la capacidad que tiene el individuo para expresarse con acierto y honradez en la opinión que emite de un suceso, buscando acercarse siempre a la verdad de lo que narra o interpreta.
    La comprensión: Es el conocimiento perfecto de las circunstancias de la persona cuyos problemas se desean entender, adentrándose en su vivencia.
    La tolerancia: Es la capacidad para ser indulgente con la manera de pensar, sentir y actuar de los demás, aunque esta manera de pensar sea diferente a la nuestra, condescendiendo con ellos al saber escucharlos y comprenderlos.
    La bondad: Aunque es de los valores que se consideran de mayor jerarquía, es de los más difíciles de explicar, aunque es fácil de entender intuitivamente. Calidad de lo bueno, indica el diccionario; pero representa la cualidad de no sólo actuar con bondad, sino de actuar además con bien.
    El respeto: Es reconocer y considerar que todos los individuos tienen derechos, opiniones, criterios y privilegios, a fin de vivir en armonía y comprensión con nuestros semejantes.
    La valentía: Entendida como arrojo, ánimo, es propiamente lo que se encuentra entre los extremos, por un lado el arrojo irreflexivo, temeridad y por otro la cobardía; esta virtud está acompañada de un control sobre los actos.

    La templanza
    Moderar los apetitos, las acciones, sentimientos y deseos, a fin de actuar con madurez y serenidad ante las circunstancias que se presentan. También se considera una de las virtudes cardinales del cristianismo.
    
    La justicia
    Es la constante y permanente voluntad de dar a cada quien lo que le corresponde, actuando con equidad e imparcialidad. También es una de las virtudes cardinales.
    
    Principios y valores del auditor
    
    Los siguientes son los aspectos fundamentales que debe poseer el profesional que quiera dedicarse a la actividad de auditoría, a fin de que identifique y cumpla los requisitos que le marca la sociedad para realizar esta función.
    
    Honestidad
    Se dice de quien actúa con veracidad, sinceridad, franqueza, honradez e imparcialidad en el cumplimiento de cualquier encomienda, actividad o trabajo. En el caso del auditor, es el cabal cumplimiento de cada una de estas cualidades, con lo cual proporciona la garantía de calidad profesional y moral que demandan de esta actividad las empresas y personas.
    
    Integridad
    La persona que posee esta cualidad es de principios sólidos y fundamentales y actúa en forma honorable, recta, valerosa y se apega a sus convicciones, cualesquiera que estas sean, y las hace respetar; lo mismo sucede con el cumplimiento de los compromisos, trabajo y actividades que se le encomiendan. Está claro que el profesional que actúa como auditor debe poseer estas cualidades.
    
    Cumplimiento
    Se dice que una persona es cumplida y digna de confianza, cuando cumple escrupulosamente sus promesas, sus compromisos y respeta la esencia y letra de los convenios que contrae. Es obvio que el auditor que desea poseer esta cualidad debe actuar conforme se indica en este punto, ya que será lo que le ayudará a realizar cabalmente sus actividades.
    
    Lealtad
    Es la cualidad que caracteriza a quien es noble, recto, honesto y honrado con su familia, sus amigos, patrones, clientes y con su país, respetando sobre casi todas las cosas una adhesión y constancia con quienes le unen lazos de amistad, amor o profesionalismo. En el caso del auditor, además del cabal respeto a lo anterior, también se considera que es la fidelidad que guarda para con sus auditados, no utilizando ni revelando información que obtiene en forma confidencial de la empresa que audita. En el contexto profesional, también se entiende como la emisión de juicios independientes, profesionales y apegados a lo que detectó en su evaluación, evitando cualquier influencia indebida y conflicto de intereses.

    Imparcialidad
    La imparcialidad se refiere a cuando una persona, en este caso el auditor, busca actuar de manera equitativa en el cumplimiento de su trabajo o de cualquier acción que emprende. Trata de ser siempre justo, honesto y razonable en los juicios que emite, evitando tomar partido hacia algún lado en cualquier auditoría. Además, como profesional de la auditoría, siempre debe estar dispuesto a reconocer errores y a cambiar de posición, creencia y acciones cuando sea necesario. Debe procurar actuar siempre con un amplio compromiso de justicia, equidad, tolerancia y trato igual con los funcionarios y empleados que audite. Lo mismo se aplica a otros profesionales.
    
    Respeto a los demás
    El respeto a los demás es la cualidad que caracteriza a quien demuestra consideración y estima por la dignidad, la intimidad y el derecho de autodeterminación de las personas. Al actuar siempre de manera cortés, expedita y decente, proporciona lo que necesitan para la mejor toma de decisiones sin avergonzarles ni degradarles. Esto es lo que debe hacer el auditor, independientemente del puesto y posición que representa para las empresas.
    
    Ciudadano responsable
    El término "ciudadano responsable" se refiere a la persona, en este caso el auditor, que está dispuesta a respetar y hacer cumplir las leyes, normas y reglamentos del país. Al aceptar la responsabilidad y solidaridad tanto en los derechos como en las obligaciones, que le imponen la sociedad, las empresas y sus conciudadanos. Esta persona respeta los principios y reglas que regulan las relaciones laborales, morales, comerciales, sociales y de cualquier otro tipo, y también evita y, en su caso, protesta contra las injusticias.
    
    Ver por los demás
    Cuando una persona es atenta y amable en su trato, compartida, generosa y tiene un amplio sentido de ayuda hacia sus semejantes, se dice que esa persona ve por los demás. Esta es una de las principales funciones que debe cumplir el auditor. Como su actividad fundamental es auditar (en este caso evaluar el trabajo de jefes y empleados), siempre estará en contacto con los demás, pero desde una posición de supervisión. Por esta razón, debe tener un trato amable, cortés y justo con los que audita. Si es posible, debe ubicarse en el lugar de los demás para tratar de comprender sus reacciones.
    
    Búsqueda de la excelencia
    Es evidente que las personas de éxito, así como los auditores profesionales destacados, son aquellos que buscan la excelencia (que sobresalen en mérito y bondad) como parte fundamental de su ser. Cumplen indefectiblemente con la responsabilidad personal y profesional que requiere esta importante actividad. Estas personas procuran, en todas sus acciones, ser siempre diligentes, confiables, trabajadoras y comprometidas con el servicio que prestan a las empresas. Realizan su trabajo, en este caso la evaluación de las áreas que auditan, lo mejor que pueden. También tienen un alto grado de competencia, capacitación y conocimientos relacionados con la auditoría, los cuales les ayudan a realizar con mayor efectividad y eficiencia su actividad profesional.

    Responsabilidad

    Se entiende como responsabilidad el hecho de aceptar el compromiso que implica la toma de decisiones y las consecuencias previstas por las acciones y omisiones en el cumplimiento del trabajo, de las actividades cotidianas y del desempeño profesional. En el caso específico del auditor, con la evaluación que realiza y con el dictamen que emite, adquiere el compromiso ineludible de una actuación profesional, aceptando plenamente las consecuencias de su actuación personal.
    
    Confiabilidad
    
    Ésta es una de las cualidades más buscadas en el profesional que se dedica a la auditoría, ya que se asume que su actuación está apegada a las normas y criterios que regulan esta profesión (ánimo de hacer las cosas con rectitud). Por esta razón, el auditado puede confiar en que el auditor aplicará las herramientas y métodos necesarios para realizar la auditoría y, derivado de ello, confía en la capacidad profesional de dicho auditor y acepta los juicios que emite.
    
    Veracidad
    
    Derivada de "veraz" (el que dice o profesa la verdad), se confiere veracidad a quien actúa con la suficiente honestidad, experiencia y conocimientos en su ramo, para emitir opiniones y juicios que estén avalados por una confianza en lo que dice, contando con que su actuación siempre será apegada a la verdad. En el caso del auditor, se refiere a la utilización de herramientas, métodos y procedimientos de auditoría, con los cuales puede obtener datos fidedignos, apegados a los sucesos verdaderos y con resultados reales, que le permiten hacer juicios fidedignos y confiables. Por esta razón, se le otorga al auditor, o a cualquier persona, la confianza de que está actuando con suma veracidad.
    
    Principios y valores según alumnos de la UVM San Rafael
    
    Alumnos de diversos semestres de la Licenciatura en Sistemas de Computación Administrativa del plantel San Rafael de la Universidad del Valle de México, realizaron en ésta una serie de encuestas sobre los valores y principios éticos y morales de los habitantes del D.F., cuyos resultados, de acuerdo con el universo y la muestra elegidos, pudieran hacerse extensivos hacia el comportamiento general de los mexicanos.

    En estas aportaciones, se mencionan únicamente los aspectos señalados por los alumnos, quedando a juicio del lector aceptarlos, rechazarlos y, en su caso, adaptarlos a las características propias del área y empresa que aplica la auditoría.

    Integridad familiar:
    Es un gran sentimiento que aún se conserva entre los mexicanos, en el cual se le da el más alto valor a la integridad familiar, a la conservación y respeto hacia los vínculos familiares que nos unen a nuestros parientes. Es una tradición mediante la cual se conserva dicha unión de padres a hijos, e incluso se hace extensiva hacia los abuelos, tíos, sobrinos, primos y otros parientes. Éste se considera como uno de los valores fundamentales del pueblo mexicano. Este valor se conserva y se aprende por medio de la transmisión familiar, mediante la cual se heredan las costumbres y tradiciones que mantienen vigentes los lazos de unión familiar, base de los principios morales y éticos de la sociedad.
    
    Creencia religiosa:
    Otro de los más altos valores que conservan los conciudadanos es una firme creencia en la religión, principalmente en la católica, aunque también existen otras con muchos creyentes. Esto ayuda a establecer, difundir y preservar las normas y principios morales (básicamente de tipo religioso) que regulan la conducta del individuo ante la sociedad.
    
    Ingenio:
    Es la capacidad generalizada de adaptarse fácilmente a los problemas cotidianos, mediante la cual se pueden resolver, o por lo menos sobrellevar, casi todas las situaciones conflictivas que se les presentan a las personas. También se dice de la capacidad de responder a los retos y frases dicharacheras de sus congéneres, que provocan hilaridad. Es una cualidad que aún se transmite, conserva y en mucho ayuda a realizar mejor el trabajo, cualquiera que este sea.
    
    Valor:
    Es la capacidad de afrontar con valentía, atrevimiento y dignidad las situaciones y problemas que se presentan cotidianamente. Esta cualidad ayuda a realizar cualquier actividad que se emprende. En el caso de los auditores, es la valentía para actuar en la evaluación y emisión de los resultados de su revisión.
    
    Honradez:
    Es la actitud que hace que la persona proceda con rectitud e integridad ante los demás, y que sea incapaz de tomar algo que no le corresponde. En el caso del auditor, es uno de los requisitos fundamentales para su actuación profesional.

    Responsabilidad:
    Es la plena aceptación de responder ante los demás por las acciones, actividades y omisiones que se realizan, así como por las decisiones que se toman, aceptando sus consecuencias y beneficios. En el caso del auditor, se refiere a la plena aceptación de las acciones y actividades que realiza y de las decisiones que toma como parte de su actuación profesional.
    
    Lealtad:
    Se dice de la cualidad que tiene aquel que es sincero, honrado y fiel con los demás y consigo mismo. Es decir, aquel que guarda fidelidad a una persona o a una cosa, y que actúa respetando los bienes y acciones de los demás. En el caso del auditor, es la fidelidad que guarda con sus auditados, respetando invariablemente la información, bienes y resultados que obtiene de una evaluación, sin utilizar para sí o para terceros los datos que obtiene en dicha evaluación.
    
    Patriotismo:
    Es la procuración del bienestar y la conservación de los valores nacionales, los cuales son vínculo de unión entre las naciones, los pueblos y los individuos.
    
    Los anteriores son algunos de los muchos principios y valores que debe poseer el auditor dedicado al área de sistemas computacionales. Sin embargo, el lector tiene plena libertad para aumentar, eliminar o modificar algunos de los aspectos antes expuestos. Lo importante es que capte la esencia de estas aportaciones en la actuación de un auditor profesional.
    `
  },

  a3_3: {
    text: `
    Criterios y responsabilidades del auditor

    Los criterios y responsabilidades que analizaremos a continuación vienen a complementar los conceptos antes señalados. Estos criterios son presentados con el propósito de señalar al auditor el rumbo ético y moral que deberá seguir para cumplir y hacer respetar dichos criterios y responsabilidades, y para que norme su actuación profesional ante las empresas, la sociedad y sus colegas, esmerándose en el buen cumplimiento de esta actividad; no solo cuando le sea encomendada una auditoría, sino también en su desempeño personal.
    
    Está claro que la verdadera aplicación de estos criterios y responsabilidades estará relacionada íntimamente con las normas de cada institución en donde actúe el auditor, así como con la experiencia, conocimientos, aptitudes y ética de este último. El estudio de estas regulaciones se puede agrupar en los siguientes aspectos fundamentales:
    
    Criterios y responsabilidades del auditor en el aspecto ético-moral
    Criterios y responsabilidades del auditor en el aspecto profesional-personal
    Criterios y responsabilidades del auditor en el aspecto laboral
    Criterios y responsabilidades del auditor en el aspecto de elementos de juicio
    Criterios y responsabilidades del auditor en su respuesta ante las autoridades, leyes, normas y reglamentos
    Criterios y responsabilidades del auditor en la presentación de resultados a terceros

    Conviene destacar que en este inciso solo se hace un breve análisis de los principales aspectos de estos criterios y responsabilidades de la disciplina de la auditoría; por esta razón, a continuación se hace un breve examen de cada uno de los asuntos que afectan el comportamiento del auditor.

    Los criterios y responsabilidades del auditor se refieren a los estándares que debe seguir el auditor para llevar a cabo su trabajo de manera ética y profesional. A continuación, se describen brevemente cada uno de los criterios:

    Criterios y responsabilidades del auditor en el aspecto ético-moral:
    El auditor debe mantener una conducta ética y moral irreprochable. Debe ser íntegro, honrado y responsable en su desempeño profesional. Esto implica que el auditor debe mantener una independencia de criterio y objetividad en todo momento, lo que le permitirá llevar a cabo sus evaluaciones de manera imparcial y justa. Además, el auditor debe mantener la confidencialidad de la información a la que tenga acceso durante su trabajo y no puede divulgar dicha información a terceros sin autorización previa de la empresa auditada.
    
    Criterios y responsabilidades del auditor en el aspecto profesional-personal:
    En este aspecto, el auditor debe contar con los conocimientos técnicos y habilidades necesarias para llevar a cabo su trabajo de manera efectiva. Debe mantener una constante actualización de sus conocimientos en el campo de la auditoría y estar al día con las regulaciones y leyes que apliquen a su trabajo. Además, debe mantener una actitud proactiva y colaborativa con la empresa auditada, para asegurarse de entender completamente sus necesidades y requerimientos y poder brindar una evaluación efectiva.
    
    Criterios y responsabilidades del auditor en el aspecto laboral:
    El auditor debe cumplir con los horarios y tiempos establecidos para realizar su trabajo y cumplir con los plazos establecidos. Además, debe cumplir con las políticas y procedimientos de la empresa para la que trabaja y asegurarse de que sus evaluaciones se realicen de manera efectiva. Debe tener una actitud profesional en todo momento y mantener una comunicación clara y efectiva con la empresa auditada.
    
    Criterios y responsabilidades del auditor en el aspecto de elementos de juicio:
    El auditor debe contar con elementos de juicio suficientes y adecuados para poder evaluar de manera efectiva la situación de la empresa auditada. Debe llevar a cabo un análisis detallado y exhaustivo de la información disponible y obtener los elementos de juicio necesarios para poder brindar una evaluación efectiva. Además, debe tener una actitud crítica y analítica, para poder identificar cualquier situación que pudiera ser relevante para la evaluación.
    
    Criterios y responsabilidades del auditor en su respuesta ante las autoridades, leyes, normas y reglamentos:
    El auditor debe cumplir con todas las leyes, normas y regulaciones aplicables a su trabajo. Debe mantener una actitud responsable y cumplir con las obligaciones legales y fiscales establecidas por las autoridades competentes. Además, debe brindar una respuesta adecuada y oportuna ante cualquier situación legal o fiscal que pudiera surgir durante su trabajo.

    Criterios y responsabilidades del auditor en la presentación de resultados a terceros:
    El auditor tiene la responsabilidad de presentar de manera clara, objetiva y concisa los resultados de su trabajo a terceros interesados, como pueden ser los accionistas, los administradores, los reguladores y los prestamistas. Estos resultados deben estar respaldados por los elementos de juicio suficientes y adecuados para que los usuarios puedan tomar decisiones informadas sobre la situación financiera de la empresa auditada.
    `
  },

  a3_4: {
    text: `
    Normas profesionales del auditor

    En los puntos anteriores, ya se destacaron los criterios y responsabilidades que regulan la actuación profesional de los auditores, estableciendo en cada caso aquellos aspectos sobresalientes de su actuación. Estos aspectos se consideran de aplicación general y de acatamiento obligatorio para estos profesionales. Sin embargo, a continuación vamos a estudiar las normas que son obligatorias para un auditor, las cuales, en muchos casos, están reguladas y su incumplimiento conlleva una sanción. Para nuestro caso, dichas normas y lineamientos serán analizados desde un plano exclusivamente de aplicación profesional.
    
    Cabe señalar que estas normas profesionales del auditor se apoyan en la experiencia profesional de este autor en el ramo de auditoría, así como en lo determinado por el Instituto Mexicano de Contadores Públicos, A.C. (IMCPAC) y por el Colegio Nacional de Licenciados en Administración, A.C. (CONLA), además de otros autores indicados en el capítulo II de este libro. Este autor complementa este conocimiento con lo aprendido en años de impartir esta materia en aulas universitarias, lo cual ha permitido establecer las normas mínimas que pueden regular la actuación de este tipo de profesionales. Estas normas se pueden agrupar de la manera siguiente:
    
    • Normas permanentes de carácter profesional
    • Normas de carácter social
    • Normas de comportamiento ético-moral
    
    Tenemos que aclarar que, en algunos casos, amigo lector, le parecerán similares y reiterativos algunos de los aspectos que a continuación presentamos. Sin embargo, aunque en muchos casos sí son muy similares en cuanto a su contenido y tratamiento, lo que pretendemos es dar a conocer y reafirmar el entendimiento de los elementos indispensables que tomaremos en cuenta para regular las normas de actuación profesional de un auditor en cualquier rama en donde se lleve a cabo una auditoría.
    
    También conviene mencionar que algunos de estos lineamientos no están escritos ni pueden ser sancionados, pero de alguna manera existen, se conocen en el ambiente laboral y deben ser acatados por los profesionales de la auditoría. Pero también tenemos aquellos que están normados y regulados por organismos que sí contemplansanciones en caso de incumplimiento. Ambos aspectos se analizarán a continuación.

    Normas permanentes de carácter profesional

    Las normas permanentes de carácter profesional son aquellas que debe cumplir invariablemente el profesional dedicado a la actividad de la auditoría de sistemas computacionales; el auditor no debe admitir bajo ninguna circunstancia variación alguna respecto a la aplicación y cumplimiento de dichas normas. Esto se debe a que es obligación profesional (deber ético, moral y profesional) del propio auditor y del personal que colabora con él, hacer una cabal observancia de dichas normas a fin de mantener su prestigio y credibilidad en las empresas donde realice su evaluación.
    
    Entre los casos más relevantes encontramos los siguientes:
    
    Emitir una opinión responsable y profesional respaldada en evidencias comprobadas: una auditoría solamente es válida cuando está debidamente fundamentada por técnicas, métodos y procedimientos de carácter profesional que han sido previamente aprobados y comprobados; estos métodos son un soporte para que el auditor, apoyado en su experiencia y conocimientos de la materia, emita una opinión confiable y de tipo profesional. La opinión fundamentada del auditor le hace confiable en los juicios que emite.
    
    Mantener una disciplina profesional: al igual que en cualquier profesión e incluso en algunas de las actividades laborales, sociales y cotidianas de la vida, un profesional de la auditoría también debe mantener una actuación permanentemente profesional por encima de cualquier cosa, tanto en el aspecto laboral como el personal, lo cual sólo se logra con constancia, voluntad y una férrea disciplina. Parecería jactancioso destacar que el auditor realiza una actividad preponderante para las empresas que audita, pero los funcionarios y empleados de esas instituciones esperan que su actuación, como experto, siempre sea profesional. También se espera lo mismo de su actuación cotidiana; como persona, se presume que siempre actuará con disciplina.
    
    Para ser buen auditor, no sólo hay que trabajar como tal, sino también hay que parecerlo.

    Guardar el secreto profesional

    Debido a que el auditor está en contacto con información confidencial de la empresa que audita, es su obligación no solo profesional sino también ética y moral que, en todos los casos, mantenga el secreto profesional, tanto de la información que le es confiada como de los resultados de su evaluación. Por ningún motivo debe dar a conocer la información que le fue confiada. El auditor es como un confesor, no de almas sino de empresas.
    
    Tener independencia mental
    
    También se debe considerar que, para ser auditor, no solo hay que trabajar en ello sino tener una aptitud, competencia y disposición profesional de tipo muy especial, caracterizada por una actitud mental independiente que siempre debe estar libre de cualquier influencia. Además, el auditor debe tener los suficientes conocimientos, habilidades y experiencia para saber evitar las influencias de cualquier género, así como las amenazas y los aspectos sentimentales que encontrará en la realización de su trabajo. Para ser auditor, hay que ser independiente de pensamiento, palabra y actuación.
    
    Contar con responsabilidad profesional
    
    Si se considera que no es lo mismo ser un profesional que trabaja en la auditoría que ser un profesional de la auditoría, es evidente que no solo hay que laborar como auditor para sobrevivir, sino que hay que actuar y pensar como verdadero profesional de la auditoría. Lo anterior se refleja en la forma de aceptar la responsabilidad que se tiene para cumplir con las actividades de una auditoría. Esta no solo es una norma y obligación profesional, sino que es un requisito ético, moral y personal para actuar como auditor. No solo hay que laborar como auditor, también hay que aceptar la responsabilidad que esto implica.
    
    Capacitación y adiestramiento permanentes
    
    Como en toda actividad profesional, el auditor también requiere de una constante capacitación profesional, laboral y técnica, para que adquiera nuevos conocimientos de métodos, procedimientos y herramientas de evaluación que le ayuden a desempeñar mejor su trabajo. La capacitación puede ser de carácter formal o informal, de tipo académico, laboral o personal. Lo importante es que estos profesionales se capaciten constantemente para realizar mejor su actividad profesional. Para el auditor, la capacitación es la herramienta fundamental para el buen desempeño de su actividad profesional.

    Hacer una planeación de la auditoría y de los programas de evaluación
    Para realizar un buen trabajo de auditoría, es necesario que para cualquier tipo de auditoría que practique, el auditor se apoye en una previa planeación de todas las actividades, herramientas y recursos que deba utilizar, incluyendo los planes, programas y presupuestos, no solo de los recursos a utilizar, sino también de las técnicas, métodos y procedimientos de auditoría. Es evidente que esta actividad es producto de normas y obligaciones de tipo profesional; permanentes, por cierto.
    La planeación de la auditoría es la herramienta indispensable para un buen desarrollo y cumplimiento profesional de la misma.
    
    Hacer la presentación del dictamen por escrito, así como la aclaración de diferencias
    El informe que presente el auditor debe ser lo más confiable posible, con lenguaje claro, bien estructurado y debe contener todos los aspectos fundamentales que apoyan su opinión como profesional, evitando en todos los casos la subjetividad en lo evaluado; la mejor forma de lograrlo es presentar este informe por escrito, a fin de no dejar dudas sobre lo que se está informando. Además, no basta con presentarlo por escrito, también es un requisito normado y una obligación profesional que el contenido del informe esté comentado con los involucrados en la revisión y, si es el caso, deben estar aclaradas las posibles divergencias y dudas que surjan entre el auditor y el auditado. Esto le dará al auditor su carácter profesional.
    El informe de auditoría es un documento legal que no debe ser ocultado a los auditados ni ser presentado a sus espaldas, sino que les debe ser presentado con pleno conocimiento de su contenido.

    Normas de carácter social

    El auditor, como todo profesional y cualquier ciudadano, vive en una sociedad en la cual desempeña su actividad profesional y a la cual sirve con su trabajo. Dicha sociedad se rige por una serie de normas y obligaciones, muchas de ellas no escritas, pero sí aceptadas por los integrantes de esa comunidad. Para entenderlo mejor, nos conviene identificar los conceptos que fundamentan estas normas.
    
    Social
    
    “Perteneciente o relativo a la sociedad humana, o las relaciones entre las clases sociales [...]. Se dice del individuo perteneciente a ella.”
    
    Sociedad
    
    “Del latín societas. Estado de los hombres o de los animales que viven sometidos a las leyes comunes [...]. Reunión de varias personas sometidas a una misma regla [...]. Asociación de varias personas con el fin de proporcionarles alguna utilidad [...].”
    
    Estas definiciones son las que regulan la actuación del auditor dentro de su ambiente social y laboral. El análisis de estas normas se realizará de la manera siguiente:
    
    Acatar las normas y obligaciones de carácter social
    
    Con base en las definiciones anteriores, al convivir con un grupo de personas dentro de un núcleo de la sociedad, el auditor debe regir su conducta con las normas y lineamientos que regulan la actuación de cualquier profesional. Estas normas y obligaciones sociales, que por lo general no están establecidas por escrito, son las que determinan la actuación de este tipo de profesionales y en general de toda la sociedad.
    
    Respetar a las autoridades, leyes, normas y reglamentos
    
    Dentro de las enseñanzas de carácter social que desde pequeños se nos inculcan en la familia y en la sociedad, se encuentra el aprendizaje del civismo, por medio del cual se nos enseña a respetar y acatar, entre otras cosas, lo determinado por las normas, leyes y reglamentos que regulan el comportamiento de las personas que cohabitan dentro de un conglomerado social; también se nos inculca el respeto a las autoridades y disposiciones sociales. Es requisito de carácter social que el auditor sepa respetar y hacer cumplir las disposiciones y normas emanadas de las autoridades que regulan su actividad profesional, tanto en su actuación con las empresas que audita como con las personas que trata en la realización de una auditoría.

    Evitar y prevenir sobornos, componendas y dádivas

    Es requisito indispensable, sin admitir ninguna variación al respecto, que el auditor prevenga y evite cualquier tipo de soborno, componenda o dádiva que pudieran resultar de su actividad profesional; estos términos se definen como sigue.
    
    Sobornar: "Corromper a alguien con dinero, regalos u otro medio para conseguir algo de él." (Del latín "Sobornare". Excitar, incitar, corromper. Corromper a uno con dádivas para conseguir de él una cosa.)
    Componenda: "[...] Chanchullo, solución indigna."
    Ser leal con los auditados
    
    Un requisito indispensable para el auditor, también de comportamiento social, ético, profesional y moral, es que debe ser leal con las empresas que audita y con el personal que labora dentro de ellas. No es válido ni profesional ser desleal con quienes se audita. Además, cumplir con esta obligación, en mucho le ayuda a fundamentar sus relaciones con las empresas, con sus colegas y con la sociedad en general.
    
    Contar con una opinión profesional y defenderla
    
    Al emitir el informe de una auditoría y plasmar su opinión en un dictamen, el auditor demuestra a la sociedad que tiene una opinión personal, la cual fundamenta en la aplicación de sus técnicas, métodos y procedimientos de auditoría, misma que defiende por medio de su opinión profesional, la cual está cimentada por las evidencias que obtiene al realizar su trabajo; eso es lo que espera la colectividad de este profesional. Por esta razón, la comunidad le confiere al auditor una gran calidad moral, social y profesional, ya que da por hecho que su actuación está apegada a una estricta ética profesional y personal, la cual demuestra con la opinión que emite y defiende.
    
    Emitir un dictamen con firma profesional
    
    La sociedad, las autoridades y los responsables de las empresas auditadas reclaman que el informe que emite el auditor esté respaldado por una firma profesional, ya sea de una empresa que avale su actuación o la del propio auditor. Este profesional debe estar avalado y certificado por las autoridades y asociaciones de profesionales del ramo para ejercer esta actividad.
    
    Contar con apoyo didáctico y normativo vigente
    
    Para ejercer la profesión de auditor, también es requisito contar con el apoyo didáctico y normativo que esté vigente en esta actividad, ya que la sociedad, las empresas y sus ejecutivos y empleados reclaman que al realizar esta actividad, el auditor cuente con la capacitación y conocimientos más adelantados y vigentes de su profesión.

    Normas de comportamiento ético y moral

    Aunque ya fueron señaladas como las obligaciones y responsabilidades de carácter ético y moral que debe cumplir el auditor, a continuación vamos a analizar, desde la óptica del aspecto profesional, las normas de conducta que como profesional debe acatar el auditor, dentro de un estricto sentido ético y moral; dichas normas son las siguientes.
    
    Ser incorruptible e insobornable
    
    Ya señalamos en las normas de carácter social que es requisito indispensable, sin admitir ninguna variación al respecto, que el auditor sea insobornable e incorruptible y que no haya ninguna duda respecto a su actuación en la evaluación que está realizando. Esta cualidad moral, más que norma y obligación, es la que da la confianza en la actuación de un profesional de la auditoría. Alterar en algo el informe de la auditoría para minimizar, no informar o modificar lo encontrado en una evaluación no es una actitud ética del auditor, mucho menos moral ni profesional. Si esta actitud se deriva de sobornos, corruptelas y componendas para alterar su opinión, este pseudoauditor carece de calidad profesional. Igual si obedece a otro tipo de intereses ajenos a los fines de la auditoría.
    
    Ser imparcial en los juicios que emite como auditor
    
    Para ser un buen profesional en esta rama, entre otras muchas características, se debe ser imparcial, esto con el propósito de poder emitir un juicio acertado y ecuánime respecto a lo que se está evaluando. El cumplimiento de esta cualidad o norma ético-moral es lo que le da validez y vigencia a la profesión de auditor, debido a que, al emitir un dictamen, éste se hace libre de cualquier presión e influencia y sin ningún sesgo ni parcialidad; el auditor sólo debe informar de lo que realmente observó. Además, debe fundamentar su opinión en las evidencias y pruebas que obtuvo con los métodos, técnicas y herramientas de auditoría que utilizó. Esto no sólo es una norma ético-moral, sino profesional y laboral.

    Contar con un juicio sereno, ético y moral
    También fue señalado en los elementos de juicio que el objetivo final de una evaluación es emitir un dictamen sobre los aspectos que se están evaluando a la luz de las técnicas que utilice el auditor. Por esta razón, es importante identificar los elementos señalados en ese punto y los criterios y obligaciones de carácter ético y moral que adquiere este profesional al emitir un dictamen, mismo que fundamenta en un juicio sereno, el cual apoya con las evidencias de que dispone y con las pruebas obtenidas con sus herramientas de evaluación.
    
    Acatar y hacer cumplir las normas morales y éticas
    Parece reiterativo decir que el auditor debe acatar y hacer cumplir las normas ético-morales que regulan su actuación como profesional, lo cual se aplica invariablemente a su actuación tanto en el ámbito profesional, como en el ámbito personal y social. Esto es lo que esperan de su actuación los funcionarios y empleados de las empresas que audita, sus colegas, las asociaciones a las que pertenezca y la comunidad en general. Todos esperan que su actuación como auditor se apegue invariablemente a un estricto cumplimiento de las normas morales y éticas que regulan a la sociedad.
    `
  }
}
