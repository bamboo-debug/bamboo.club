import { getLevel, progressToNextLevel } from "./gamification";
import type {
  Activity,
  BlogPost,
  LeaderboardEntry,
  Module,
  UserProfile,
  WelcomeMessage,
} from "./types";

const samplePoints = 940;
const progress = progressToNextLevel(samplePoints);

export const welcomeMessage: WelcomeMessage = {
  title: "Bienvenido al club de innovación Bamboo",
  body: [
    "Bamboo es el espacio donde las personas del holding pueden aprender a innovar, cuestionar lo establecido y convertir su trabajo diario en una oportunidad de mejora real.",
    "No importa si estás en cuentas, creatividad, estrategia, medios, producción, data, social o administración. La innovación no pertenece a un área. Pertenece a quienes se animan a probar, elevar la vara y mover las ideas hacia adelante.",
    "Este recorrido está pensado para ayudarte a ganar criterio, confianza y visibilidad. Bamboo no busca solo enseñar conceptos. Busca formar personas capaces de transformar equipos, proyectos y carreras.",
  ],
  cta: "Tu camino en Bamboo empieza ahora.",
};

export const demoProfile: UserProfile = {
  id: "demo-user",
  full_name: "Bea Aular",
  email: "bea@texo.com.py",
  area: "Estrategia",
  level: progress.current.level,
  level_name: progress.current.name,
  points: samplePoints,
  streak_days: 4,
  next_level_points: progress.nextLevelPoints,
};

export const modules: Module[] = [
{
    id: "m1",
    slug: "innovacion-en-agencia",
    title: "¿Qué es innovación en una agencia de verdad?",
    description:
      "Una introducción honesta y accionable para entender que innovar no es un show: es mejorar cómo pensamos, trabajamos y generamos valor.",
    month: "Mes 1",
    level_required: 1,
    xp_reward: 120,
    lessons: 4,
    status: "completed",
    theme: "Fundamentos",
    opening:
      "En una agencia, innovación suele confundirse con campañas brillantes, herramientas nuevas o ideas espectaculares. Pero la mayoría de las oportunidades reales no están en el discurso; están escondidas en la fricción cotidiana: briefs confusos, retrabajos, reuniones sin decisión, procesos lentos y talento desperdiciado.",
    opening_extended:
      "Hay una razón por la que esto pasa. Las agencias están organizadas para entregar, no para cuestionarse. El ritmo de producción, la presión de los clientes y la cultura del 'sí, lo hacemos' generan un ambiente donde mejorar cómo se trabaja siempre queda para después. Bamboo existe exactamente para cambiar eso: para que el aprendizaje y la mejora sean parte del trabajo, no una tarea adicional que nunca llega.",
    sections: [
      {
        heading: "La innovación no está lejos",
        body: "Innovar no siempre significa inventar algo desde cero. Muchas veces significa detectar una fricción y mejorarla con criterio. Si una propuesta tarda demasiado en salir, si una presentación no logra vender una idea, o si un equipo necesita demasiadas vueltas para entenderse, ahí hay una oportunidad concreta de innovación.",
        extended_body:
          "El problema es que las fricciones se normalizan. Cuando un proceso roto se repite durante meses, deja de verse como un problema y empieza a verse como 'la manera en que acá se hacen las cosas'. La primera habilidad de un innovador no es generar ideas: es aprender a ver lo que todos dejaron de notar. Eso requiere cierta distancia crítica, la disposición a hacerse preguntas incómodas y la valentía de nombrar lo que no funciona aunque nadie más lo esté nombrando.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia de medios en Latinoamérica detectó que sus ejecutivos de cuenta pasaban en promedio dos horas diarias armando reportes manuales de performance para clientes. Nadie lo había cuestionado porque 'siempre se hizo así'. Un analista junior propuso estandarizar el formato y automatizar la extracción de datos. El cambio tomó tres semanas. El resultado: cada ejecutivo recuperó ocho horas semanales que pasaron a dedicarse a análisis estratégico. Eso es innovación: no glamorosa, no premiada en festivales, pero con impacto real y medible.",
        },
      },
      {
        heading: "En una agencia, el valor se siente",
        body: "La mejor innovación no siempre se ve en un caso de festival. Se siente cuando un equipo trabaja con menos desgaste, cuando un cliente entiende más rápido el valor de una propuesta, o cuando una idea llega más lejos porque el sistema dejó de frenarla.",
        extended_body:
          "El valor en una agencia tiene tres dimensiones que a veces se confunden. La primera es el valor para el cliente: ¿la solución resuelve su problema real? La segunda es el valor para el negocio de la agencia: ¿genera margen, eficiencia, diferenciación? La tercera —y la más olvidada— es el valor para el equipo: ¿las personas pueden trabajar con más criterio, menos desgaste y mayor satisfacción? Una innovación que mejora las dos primeras pero destruye la tercera no es sostenible. Las mejores innovaciones en agencias tocan las tres.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia creativa rediseñó su proceso de brief interno. Antes, el brief llegaba del equipo de cuentas al equipo creativo en un documento de texto sin estructura fija. Los creativos constantemente pedían aclaraciones que retrasaban los proyectos. Después del rediseño, el brief tenía cinco campos obligatorios y dos preguntas de validación que cuentas tenía que responder antes de pasarlo. Los retrabajos bajaron un 40% en el primer trimestre. El cliente no vio el cambio, pero lo vivió: las propuestas llegaban más rápido y más afinadas.",
        },
      },
      {
        heading: "La invitación de Bamboo",
        body: "Bamboo no busca formar gurús de innovación. Busca formar personas valientes, con criterio y método, que sepan detectar lo que se puede mejorar y lo conviertan en acción. Innovar también es revisar cómo damos feedback, cómo armamos un brief o cómo logramos que un proyecto no se ahogue antes de nacer.",
        extended_body:
          "La palabra 'valientes' no es retórica. En muchas organizaciones, señalar que algo no funciona tiene un costo social. La persona que levanta la mano y dice 'este proceso está roto' o 'este cliente no está viendo el valor real de lo que hacemos' puede ser percibida como problemática, negativa o poco colaborativa. Una de las cosas que Bamboo intenta construir es un entorno donde ese tipo de honestidad sea reconocida como lo que realmente es: una contribución al equipo y a la empresa.",
        example: {
          label: "Ejemplo real",
          content:
            "En una agencia de publicidad, una productora júnior notó que en cada proyecto se perdía tiempo en reuniones de kickoff donde se repetía información que ya estaba en el brief. Propuso una plantilla de 'preguntas pre-kick' que el equipo completaba antes de reunirse. La primera reacción fue escéptica. La segunda reunión con la plantilla duró 22 minutos en lugar de 75. Hoy es el estándar de la agencia. Esa persona no tenía cargo de liderazgo: tenía criterio y decisión de actuar.",
        },
      },
      {
        heading: "Por dónde empezar: el mapa de fricciones",
        body: "La herramienta más simple para empezar a innovar es un mapa de fricciones: una lista de las situaciones en tu trabajo que consumen energía sin devolver valor equivalente. No hace falta tecnología ni metodología sofisticada. Hace falta observación honesta y la disposición a escribir lo que normalmente se dice solo en los pasillos.",
        extended_body:
          "Un mapa de fricciones básico tiene tres columnas: la fricción (qué pasa), el impacto (a quién afecta y cómo) y la hipótesis (qué podría mejorarla). El objetivo no es resolver todo al mismo tiempo sino crear visibilidad. Muchas veces, el solo hecho de nombrar una fricción con claridad genera conversaciones que llevan a soluciones que ya estaban disponibles pero nadie había articulado. La innovación más accesible no requiere permiso ni presupuesto: requiere un lenguaje común para hablar de los problemas reales.",
        example: {
          label: "Ejemplo real",
          content:
            "Un equipo de estrategia de contenidos realizó un ejercicio de mapeo de fricciones en una reunión de 30 minutos. Identificaron 11 situaciones recurrentes que generaban desgaste. Las tres más votadas fueron: aprobaciones de cliente que llegaban sin contexto, reuniones de status que podían ser correos, y criterios de éxito de campañas que se definían después de ejecutarlas. Solo con esa lista, el equipo tenía un programa de mejora para los próximos tres meses sin necesitar ningún recurso adicional.",
        },
      },
    ],
    exercise:
      "Dedicá 15 minutos a hacer tu propio mapa de fricciones. Anotá tres situaciones de tu semana laboral que consumieron energía sin devolver valor equivalente. Para cada una escribí: ¿qué pasó exactamente?, ¿a quién afectó además de a vos?, ¿qué tendría que cambiar para que no vuelva a pasar? No busques soluciones todavía. Solo nombrá el problema con la mayor precisión posible.",
    takeaway:
      "No necesitás permiso para innovar. Necesitás aprender a ver lo que todos ya normalizaron.",
    quiz: {
      question: "¿Cuál es una señal real de innovación dentro de una agencia?",
      options: [
        "Tener ideas creativas sin restricciones",
        "Implementar tecnología nueva aunque no resuelva nada",
        "Mejorar un problema cotidiano de manera que genere valor real",
        "Hacer una campaña llamativa aunque el proceso siga roto",
      ],
      correct: 2,
      explanation:
        "La innovación valiosa no depende del espectáculo. Depende de resolver mejor un problema importante para el negocio, el equipo o el cliente. La tecnología, la creatividad y la escala son herramientas — no el fin en sí mismo.",
    },
    resources: [
      { type: "video", title: "Where Good Ideas Come From", author: "Steven Johnson · TED", description: "Cómo los entornos que permiten la colisión de ideas generan más innovación. Aplica directamente al concepto de fricción productiva.", url: "https://www.ted.com/talks/steven_johnson_where_good_ideas_come_from" },
      { type: "video", title: "The Explainer: Disruptive Innovation", author: "Harvard Business Review · YouTube", description: "Explicación clara del concepto de innovación disruptiva de Clayton Christensen.", url: "https://www.youtube.com/watch?v=mbVC0LSNARE" },
      { type: "article", title: "What is Innovation?", author: "McKinsey & Company", description: "Artículo gratuito de McKinsey sobre los tipos de innovación y cuál corresponde a cada tipo de organización.", url: "https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-innovation" },
    ],
  },

{
    id: "m2",
    slug: "mentalidad-innovadora",
    title: "Mentalidad innovadora en entornos creativos",
    description:
      "Cómo pensar con más valentía y menos piloto automático para que la creatividad no se convierta en rutina.",
    month: "Mes 1",
    level_required: 1,
    xp_reward: 140,
    lessons: 5,
    status: "completed",
    theme: "Mentalidad",
    opening:
      "Trabajar en una agencia no te vuelve innovador por defecto. Podés rodearte de ideas, referencias y talento, y aun así vivir atrapado en la repetición. La innovación empieza cuando dejás de aceptar como normal lo que te está limitando.",
    opening_extended:
      "Existe una paradoja en los entornos creativos: las personas que más deberían cuestionar el status quo a veces son las que más lo refuerzan. ¿Por qué? Porque la creatividad en una agencia está casi siempre al servicio de un cliente, de un deadline y de una aprobación. Ese contexto entrena a las personas para ser creativos dentro de límites, no para cuestionar los límites mismos. La mentalidad innovadora es exactamente eso: la capacidad de hacer las dos cosas.",
    sections: [
      {
        heading: "Cuestionar también es crear",
        body: "La creatividad suele celebrarse cuando aparece una gran idea. Pero antes de esa idea hay una decisión más importante: cuestionar. ¿Por qué ese brief está planteado así? ¿Por qué ese entregable necesita cinco aprobaciones? ¿Por qué ese cliente siempre llega tarde al mismo punto? Las preguntas correctas son combustible para la innovación.",
        extended_body:
          "Cuestionar no significa objetar todo ni paralizar el trabajo. Significa desarrollar el hábito de preguntarse 'por qué' antes de aceptar 'así es como se hace'. Hay una diferencia enorme entre cumplir con un proceso porque tiene sentido y cumplirlo porque nunca nadie se detuvo a revisarlo. La persona con mentalidad innovadora hace esa distinción constantemente — y cuando detecta que un proceso existe por inercia y no por lógica, lo nombra y propone cambiarlo.",
        example: {
          label: "Ejemplo real",
          content:
            "En una agencia digital, los diseñadores entregaban tres conceptos visuales por proyecto como estándar. Nadie sabía exactamente por qué eran tres. Un diseñador senior cuestionó la lógica: en proyectos pequeños, preparar tres opciones consumía el doble del tiempo y el cliente casi siempre elegía la primera. Propuso un nuevo estándar: un concepto fuerte con variaciones de ejecución. La agencia lo adoptó para proyectos bajo cierto presupuesto. El resultado fue más tiempo para desarrollar mejor cada concepto y clientes más satisfechos con propuestas más trabajadas.",
        },
      },
      {
        heading: "No te enamores de la primera respuesta",
        body: "En equipos con presión y tiempos cortos, la primera idea aceptable parece suficiente. Los profesionales que crecen son los que empujan una ronda más, una conversación más, una alternativa más. No por obsesión, sino por oficio. Ahí aparece el diferencial.",
        extended_body:
          "Hay una razón psicológica detrás de esto: el cerebro bajo presión busca el cierre rápido. Cuando aparece una solución que 'funciona', hay un alivio inmediato que hace difícil seguir buscando. Eso no es flojera — es biología. La mentalidad innovadora no pelea contra ese impulso: lo reconoce y lo pospone deliberadamente. Una técnica simple es lo que algunos llaman 'la ronda más': antes de aprobar cualquier idea o propuesta, dedicar cinco minutos a generar una alternativa completamente diferente. No para reemplazar la anterior, sino para asegurarse de que la elección es consciente y no solo la primera opción disponible.",
        example: {
          label: "Ejemplo real",
          content:
            "Un equipo de estrategia presentó a su director una propuesta de campaña que 'claramente funcionaba'. El director les pidió que volvieran al día siguiente con una segunda propuesta radicalmente diferente. El equipo estaba seguro de que la primera era mejor. Pero al desarrollar la segunda encontraron un ángulo de comunicación más auténtico para la marca. La campaña que finalmente se presentó al cliente combinó la solidez de la primera con el tono de la segunda. El director nunca les pidió que eligieran entre las dos — les pidió que pensaran más.",
        },
      },
      {
        heading: "Coraje operativo",
        body: "La mentalidad innovadora no vive solo en la inspiración. Vive en decisiones pequeñas: proponer una mejora, traer una idea incómoda a una reunión, defender una solución que todavía está verde, o pedir una prueba rápida antes de pasar semanas perfeccionando algo que nadie validó.",
        extended_body:
          "El coraje operativo no es heroísmo. Es la disposición a incomodarse un poco más que el promedio. A decir 'creo que deberíamos probar esto' en lugar de esperar a que alguien con más jerarquía lo diga primero. A pedir feedback antes de estar listo. A admitir que una idea no funcionó y documentar por qué para que el equipo aprenda. Son micro-decisiones que, acumuladas en el tiempo, construyen una reputación de persona que hace avanzar las cosas.",
        example: {
          label: "Ejemplo real",
          content:
            "Una ejecutiva de cuentas de una agencia B2B tenía la sospecha de que el formato de presentación mensual de resultados no le servía al cliente para tomar decisiones. En lugar de esperar a que el cliente lo dijera, lo planteó ella primero en una reunión: 'Quiero preguntarte algo directo: ¿este reporte te ayuda a tomar alguna decisión concreta?' El cliente respondió que no, que le faltaba ver el dato de costo por lead. Ese cambio tardó 20 minutos en implementarse. La relación con el cliente mejoró notablemente porque sintió que la agencia entendía su negocio.",
        },
      },
      {
        heading: "El sesgo de la comodidad creativa",
        body: "Hay un riesgo específico en las agencias: el de confundir familiaridad con calidad. Cuando un formato, una estructura o un tipo de propuesta 'siempre funciona', se convierte en el camino por defecto. Con el tiempo, ese camino por defecto deja de ser la mejor opción y pasa a ser solo la opción más cómoda.",
        extended_body:
          "La comodidad creativa se detecta cuando el equipo puede anticipar exactamente cómo va a quedar una pieza antes de empezar a trabajarla. Cuando ya saben qué va a aprobar el cliente. Cuando la única variación es el color, el copy o el producto. Eso no es eficiencia — es piloto automático. El antídoto no es desestructurar todo por principio: es introducir deliberadamente una pregunta de apertura al inicio de cada proyecto: '¿Qué haríamos diferente si este fuera el primer proyecto de esta categoría que hacemos?'",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia que trabajaba con la misma categoría de retail desde hacía cuatro años ganó una cuenta nueva en el mismo rubro. En la primera reunión de briefing interno, el director creativo se dio cuenta de que el equipo estaba pensando exactamente igual que para el cliente anterior. Detuvo la reunión y pidió que nadie mirara piezas propias ni de la competencia durante 48 horas antes de la próxima sesión. La propuesta que salió de esa sesión fue la más distinta que habían presentado en años — y fue la que ganó la licitación.",
        },
      },
      {
        heading: "Construir el hábito, no esperar la inspiración",
        body: "La mentalidad innovadora no es un estado de ánimo que llega en los buenos días. Es un conjunto de hábitos que se practican incluso cuando no hay ganas, tiempo ni contexto ideal. Como cualquier habilidad, se construye con repetición deliberada.",
        extended_body:
          "Tres hábitos concretos que desarrollan la mentalidad innovadora en el trabajo diario. Primero, el hábito de la pregunta incómoda: en cada reunión, hacerse al menos una pregunta que nadie esté haciendo. No para molestar, sino para no dar por sentado lo que todos están asumiendo. Segundo, el hábito del registro: anotar las fricciones, las ideas y los aprendizajes aunque no haya tiempo de actuar sobre ellos inmediatamente. La innovación rara vez ocurre en el momento del insight — ocurre cuando ese insight encuentra las condiciones adecuadas para convertirse en acción. Tercero, el hábito de la referencia cruzada: buscar inspiración fuera de la industria. Las mejores ideas en publicidad casi nunca vienen de ver más publicidad.",
        example: {
          label: "Ejemplo real",
          content:
            "Un planner estratégico en una agencia de comunicación adoptó el hábito de llevar un cuaderno físico donde anotaba una 'fricción del día' al salir del trabajo. Después de tres meses tenía 60 observaciones. Al revisarlas, encontró tres patrones que nadie en la agencia había articulado: las presentaciones más largas tenían menor tasa de aprobación, los proyectos con más de cuatro stakeholders del cliente se retrasaban siempre, y los briefings dados por escrito tardaban el doble en arrancar que los briefings dados en persona. Esos tres insights se convirtieron en cambios concretos de proceso que la agencia adoptó en el trimestre siguiente.",
        },
      },
    ],
    exercise:
      "Durante los próximos tres días de trabajo, practicá el hábito de la pregunta incómoda. En cada reunión o interacción importante, hacete esta pregunta antes de hablar: '¿Estoy aceptando algún supuesto que nadie cuestionó?' Si encontrás uno, nombralo — no para criticar, sino para generar conversación. Al final de los tres días, escribí qué pasó cuando lo hiciste y qué pasó cuando no te animaste.",
    takeaway:
      "Tu carrera no cambia solo cuando hacés bien tu trabajo. Cambia cuando te animás a elevar cómo se hace el trabajo.",
    quiz: {
      question: "¿Qué distingue a una persona con mentalidad innovadora?",
      options: [
        "Produce ideas rápido pero evita discutirlas",
        "Tiene años de experiencia y sigue el proceso tal como está",
        "Cuestiona, prueba y empuja las ideas más allá de lo obvio",
        "Solo interviene cuando le piden creatividad",
      ],
      correct: 2,
      explanation:
        "La mentalidad innovadora une criterio, valentía y capacidad de acción. No se limita a generar ideas — las lleva más lejos. Y no espera condiciones perfectas para actuar: encuentra las oportunidades en el trabajo cotidiano.",
    },
    resources: [
      { type: "video", title: "How to Build Your Creative Confidence", author: "David Kelley · TED", description: "El fundador de IDEO explica cómo cualquier persona puede desarrollar confianza creativa.", url: "https://www.ted.com/talks/david_kelley_how_to_build_your_creative_confidence" },
      { type: "video", title: "The Power of Believing That You Can Improve", author: "Carol Dweck · TED", description: "La investigadora del growth mindset explica cómo la mentalidad de crecimiento cambia el aprendizaje.", url: "https://www.ted.com/talks/carol_dweck_the_power_of_believing_that_you_can_improve" },
    ],
  },

{
    id: "m3",
    slug: "entender-cliente-real",
    title: "Entender al cliente de verdad",
    description:
      "Menos suposición y más comprensión real del problema para que el trabajo deje de ser decoración y empiece a generar impacto.",
    month: "Mes 2",
    level_required: 1,
    xp_reward: 150,
    lessons: 5,
    status: "available",
    theme: "Cliente-centrismo",
    opening:
      "En agencias se habla mucho de consumidores, audiencias, stakeholders y targets. Pero el verdadero salto ocurre cuando dejamos de mirar categorías abstractas y empezamos a entender personas, tensiones y objetivos concretos.",
    opening_extended:
      "El problema no es falta de información — es exceso de suposición. La mayoría de los equipos de agencia construyen sus propuestas sobre lo que creen que el cliente quiere, no sobre lo que el cliente realmente necesita. Y lo interesante es que muchas veces el cliente tampoco sabe exactamente qué necesita: sabe que algo no está funcionando, tiene una presión de negocio que resolver, y espera que la agencia lo ayude a articularlo. Ese momento —cuando la agencia logra nombrar el problema real mejor que el propio cliente— es el que construye relaciones de largo plazo.",
    sections: [
      {
        heading: "Detrás del brief hay una ansiedad real",
        body: "Cuando un cliente pide una campaña, en realidad suele estar intentando resolver otra cosa: vender más, justificar presupuesto, ordenar una marca, responder a la competencia o demostrar capacidad interna. Si no entendés esa ansiedad, tu propuesta puede ser creativa y aun así no ser relevante.",
        extended_body:
          "Las ansiedades más comunes de un cliente que llega a una agencia no suelen aparecer en el brief. Aparecen en la conversación informal antes o después de la reunión formal. 'Mi director me está presionando para mostrar resultados este trimestre.' 'El competidor lanzó algo y mi equipo está nervioso.' 'Siento que la marca perdió foco y no sé bien cómo explicarlo.' Esas frases son más informativas que cualquier brief escrito porque revelan la motivación real detrás del pedido. Un equipo que aprende a escucharlas y a trabajar con ellas tiene una ventaja enorme sobre uno que solo trabaja con lo que está escrito.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia recibió el brief de un cliente de consumo masivo para 'una campaña de verano con foco en el producto estrella'. En la reunión de brief, la ejecutiva de cuentas preguntó: '¿Qué tiene que pasar para que vos sientas que esta campaña fue un éxito?' El cliente dudó y dijo: 'En realidad, lo que necesito es que mi equipo comercial la use como argumento de venta en el punto de venta.' Esa respuesta cambió completamente el enfoque. La campaña se diseñó tanto para consumidores finales como para el equipo comercial del cliente. Los resultados en punto de venta fueron un 35% superiores al trimestre anterior.",
        },
      },
      {
        heading: "La empatía no es amabilidad",
        body: "Empatizar no es decirle que sí a todo. Es comprender lo que le importa al otro con suficiente profundidad como para tomar mejores decisiones. Eso aplica al cliente externo, al usuario final y también a tus colegas dentro de la agencia. Una gran parte de la innovación interna nace cuando entendés mejor cómo trabaja el otro.",
        extended_body:
          "La falsa empatía es uno de los problemas más comunes en la relación agencia-cliente. Decirle al cliente lo que quiere escuchar, evitar el conflicto, presentar las noticias difíciles envueltas en tanto eufemismo que pierden el mensaje — todo eso parece amabilidad pero en realidad es una falta de respeto a la inteligencia del cliente. La empatía genuina a veces requiere decir 'creo que el brief está apuntando al síntoma y no al problema' o 'la métrica que querés medir no va a capturar el impacto real de lo que proponemos'. Esas conversaciones son incómodas en el corto plazo y construyen relaciones sólidas en el mediano.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia de comunicación B2B tenía un cliente que insistía en medir el éxito de una campaña de awareness por cantidad de leads. El director de estrategia explicó pacientemente que awareness y generación de leads son etapas distintas del funnel y que medir la primera con métricas de la segunda iba a generar una evaluación incorrecta de los resultados. El cliente no quería escucharlo. En lugar de ceder, la agencia propuso medir ambas cosas pero con expectativas diferenciadas. Al finalizar la campaña, el awareness subió significativamente pero los leads fueron moderados — exactamente como la agencia había anticipado. El cliente aprendió a distinguir las etapas. La relación se fortaleció.",
        },
      },
      {
        heading: "Escuchar cambia la calidad del trabajo",
        body: "Una buena pregunta puede ahorrarte semanas de ejecución equivocada. ¿Qué te preocupa de este proyecto? ¿Qué tendría que pasar para decir esto valió la pena? ¿Dónde se viene trabando siempre? Estas preguntas no son accesorias: son parte del oficio.",
        extended_body:
          "Hay una diferencia entre escuchar para responder y escuchar para entender. En el primer modo, mientras el cliente habla ya estás pensando en qué vas a decir cuando termine. En el segundo modo, estás genuinamente procesando lo que dice para entender qué hay detrás. Las personas que escuchan de verdad hacen preguntas de seguimiento — no para llenar silencio sino porque lo que el cliente dijo abrió algo que vale la pena explorar. Esa calidad de escucha es rara en el mundo de las agencias porque el ritmo de las reuniones no la favorece. Pero cuando ocurre, el cliente lo siente y lo recuerda.",
        example: {
          label: "Ejemplo real",
          content:
            "Un equipo de cuentas preparó una reunión de onboarding con un nuevo cliente con una lista de preguntas estructuradas. Pero en lugar de hacer las preguntas en orden, la ejecutiva empezó con una sola: 'Contame cómo fue la experiencia con tu agencia anterior.' El cliente habló durante 20 minutos sin interrupciones. Lo que reveló en esa conversación — frustraciones específicas, expectativas no cumplidas, una dinámica interna de su empresa que afectaba cómo se tomaban las decisiones — fue más valioso que cualquier brief. La agencia adaptó su forma de trabajar con ese cliente desde el primer día en base a esa escucha.",
        },
      },
      {
        heading: "El cliente interno también es un cliente",
        body: "En una agencia, el 'cliente' no es solo quien paga la factura. El equipo creativo es cliente del equipo de cuentas cuando necesita un brief claro. El equipo de producción es cliente del equipo creativo cuando necesita especificaciones realizables. Aplicar cliente-centrismo hacia adentro mejora tanto la calidad del trabajo como el clima del equipo.",
        extended_body:
          "Muchos de los problemas de calidad en una agencia no vienen de la relación con el cliente externo sino de cómo fluye el trabajo internamente. Un brief ambiguo que llega de cuentas a creatividad genera retrabajos que después el cliente experimenta como lentitud. Una pieza que producción recibe sin las especificaciones correctas genera costos y demoras que después aparecen en el resultado final. El cliente-centrismo interno es la práctica de preguntarse: '¿Qué necesita la persona que va a recibir lo que estoy entregando para hacer bien su trabajo?' Esa pregunta, aplicada consistentemente, transforma la calidad del proceso.",
        example: {
          label: "Ejemplo real",
          content:
            "En una agencia de contenidos digitales, el equipo creativo se quejaba de que los briefs de cuentas eran vagos. El equipo de cuentas se quejaba de que los creativos pedían demasiados detalles. En lugar de seguir con el conflicto, hicieron un ejercicio de rol inverso: los creativos pasaron un día acompañando a cuentas en reuniones con clientes, y cuentas pasó tiempo con creativos en una sesión de conceptualización. Al final, rediseñaron juntos la plantilla de brief. Los campos nuevos respondían exactamente las preguntas que creativos necesitaba responder para trabajar. Los retrabajos bajaron más del 50% en dos meses.",
        },
      },
      {
        heading: "De la comprensión a la propuesta: el salto que pocos dan",
        body: "Entender al cliente profundamente es el primer paso. El segundo — y donde muchos equipos se quedan cortos — es convertir esa comprensión en una propuesta que el cliente reconozca como relevante. No alcanza con tener el insight: hay que traducirlo en algo concreto, defendible y accionable.",
        extended_body:
          "La traducción del insight a la propuesta requiere una habilidad específica: la capacidad de conectar lo que entendiste sobre el cliente con lo que tu agencia puede hacer de manera diferenciada. Esa conexión no es automática ni obvia. Requiere una conversación interna en la que el equipo se pregunte: 'Dado todo lo que sabemos de este cliente, ¿cuál es la propuesta que solo nosotros podríamos hacer?' Esa pregunta — ¿qué propuesta es nuestra? — es la que separa las presentaciones genéricas de las que generan conversaciones estratégicas reales con el cliente.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia ganó una licitación contra cuatro competidores con una propuesta que sorprendió al cliente. En lugar de presentar la campaña que el brief pedía, presentaron primero un diagnóstico de dos páginas que articulaba el problema real del cliente mejor de lo que el propio brief lo hacía. Solo entonces presentaron la campaña, como respuesta a ese diagnóstico. El cliente dijo en el cierre: 'Las otras agencias presentaron lo que pedimos. Ustedes entendieron lo que necesitamos.' Esa distinción ganó la cuenta.",
        },
      },
    ],
    exercise:
      "Elegí un cliente interno o externo con quien trabajes regularmente. Antes de la próxima reunión, prepará tres preguntas que nunca le hayas hecho: una sobre sus frustraciones actuales, una sobre cómo mide el éxito de lo que hacen juntos, y una sobre qué información le falta para tomar mejores decisiones. Después de la reunión, anotá qué aprendiste que no sabías y cómo cambia lo que vas a proponer o entregar.",
    takeaway:
      "Si no entendés el problema real, tu solución puede verse bien y al mismo tiempo no mover nada importante.",
    quiz: {
      question: "¿Qué busca realmente un cliente cuando llega a una agencia?",
      options: [
        "Una campaña original por sí sola",
        "Una presentación estética aunque no resuelva nada",
        "Resultados y claridad frente a un problema real",
        "La última tendencia del mercado",
      ],
      correct: 2,
      explanation:
        "La creatividad es una herramienta. El objetivo del cliente suele ser resolver una necesidad real del negocio o de la marca. La agencia que entiende esa necesidad antes de proponer soluciones construye una ventaja competitiva que va mucho más allá de la calidad de sus piezas.",
    },
    resources: [
      { type: "video", title: "How to Truly Listen", author: "Evelyn Glennie · TED", description: "Una percusionista sorda explica qué significa escuchar de verdad. Clave para entender la empatía como habilidad.", url: "https://www.ted.com/talks/evelyn_glennie_how_to_truly_listen" },
      { type: "article", title: "Jobs to Be Done: Theory to Practice", author: "Christensen Institute", description: "Introducción gratuita al framework JTBD para entender qué quieren realmente los clientes.", url: "https://www.christenseninstitute.org/jobs-to-be-done/" },
    ],
  },

{
    id: "m4",
    slug: "mapa-de-empatia",
    title: "Mapa de empatía: ver lo que el cliente no dice",
    description:
      "Una herramienta práctica para salir de los supuestos y entender qué piensa, siente, hace y escucha tu cliente antes de proponer cualquier solución.",
    month: "Mes 2",
    level_required: 1,
    xp_reward: 150,
    lessons: 4,
    status: "available",
    theme: "Cliente-centrismo",
    opening:
      "El mapa de empatía no es un formulario. Es una forma de mirar. Te obliga a separar lo que el cliente dice de lo que realmente hace, y lo que aparenta sentir de lo que probablemente piensa cuando nadie lo observa.",
    opening_extended:
      "La herramienta fue creada por Dave Gray y popularizada por IDEO y la comunidad de Design Thinking. Su fortaleza no está en la sofisticación sino en la estructura: al forzar al equipo a pensar en dimensiones diferentes del cliente al mismo tiempo, aparecen contradicciones y tensiones que de otra manera quedarían invisibles. Un cliente que dice 'queremos ser disruptivos' pero aprueba solo lo que ya hicieron antes es una contradicción que el mapa de empatía hace visible de manera inmediata.",
    sections: [
      {
        heading: "Las cuatro dimensiones del cliente real",
        body: "El mapa se organiza en cuatro zonas: qué dice y hace (lo observable), qué piensa y siente (lo implícito), qué escucha (sus influencias) y qué ve (su entorno). Cuando completás los cuatro cuadrantes con información real —no inventada— empezás a entender tensiones que nunca te habría contado en una reunión de brief.",
        extended_body:
          "Cada cuadrante tiene un valor diferente. 'Qué dice y hace' es lo más fácil de completar porque es observable. 'Qué piensa y siente' requiere inferencia basada en conversaciones informales y señales no verbales. 'Qué escucha' revela las voces que influyen en sus decisiones — su directorio, su competencia, sus consultores, las noticias de la industria. 'Qué ve' describe el entorno físico y social en el que opera: su industria, sus pares, las tendencias que lo rodean. La combinación de los cuatro da una imagen mucho más rica del cliente que cualquier brief formal.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia de comunicación corporativa usó el mapa de empatía para prepararse para una reunión con un cliente nuevo en el sector financiero. En el cuadrante 'qué escucha' pusieron: reguladores, directorio conservador, medios financieros con foco en riesgo. En 'qué siente' escribieron: presión por modernizar la imagen sin perder credibilidad. Esa combinación les permitió anticipar que cualquier propuesta demasiado disruptiva visualmente sería rechazada aunque al cliente le gustara en privado — porque tenía que defenderla ante un directorio conservador. Presentaron una propuesta de evolución gradual en lugar de revolución. Fue aprobada en la primera reunión.",
        },
      },
      {
        heading: "La brecha entre lo que se dice y lo que se hace",
        body: "Uno de los hallazgos más comunes al usar el mapa es descubrir contradicciones: el cliente dice que quiere innovar pero aprueba solo lo que ya conoce. Dice que quiere resultados pero mide con métricas de vanidad. Esas brechas no son problemas del cliente; son oportunidades para tu propuesta.",
        extended_body:
          "Las brechas entre el decir y el hacer son ventanas a las tensiones reales que vive el cliente. Un cliente que dice 'queremos más alcance digital' pero sigue asignando el 80% del presupuesto a medios tradicionales no es un hipócrita — probablemente tiene presiones internas que hacen difícil mover el presupuesto aunque intelectualmente esté convencido del cambio. Una agencia que entiende esa tensión puede diseñar una propuesta que ayude al cliente a navegar esa presión interna, no solo una que responda al deseo declarado.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia de publicidad detectó con el mapa de empatía que su cliente de consumo masivo siempre aprobaba las ideas más seguras aunque en las reuniones decía entusiasmado querer 'algo diferente'. En lugar de seguir presentando ideas arriesgadas que nunca se aprobaban, propusieron una metodología de aprobación escalonada: primero se aprobaba el concepto en chico con el equipo de marketing, luego se presentaba al directorio con benchmarks de la categoría que contextualizaban el riesgo. El proceso cambió completamente la dinámica de aprobación y empezaron a ejecutar ideas más interesantes.",
        },
      },
      {
        heading: "Cómo llenarlo sin inventar",
        body: "El mapa vale cuando se construye con datos reales: conversaciones, observaciones, correos, grabaciones de reuniones, comentarios espontáneos. Si llenás los cuadrantes con lo que vos creés que siente el cliente, tenés un espejo de tus propios supuestos, no un mapa de él.",
        extended_body:
          "Existen tres fuentes de información que suelen pasarse por alto al construir el mapa. Primera: las conversaciones informales antes y después de las reuniones formales — lo que el cliente dice cuando se apaga el modo 'presentación oficial'. Segunda: los correos y mensajes con cambios de último momento — revelan prioridades reales que no aparecen en el brief. Tercera: las reacciones no verbales durante las presentaciones — cuándo el cliente se inclina hacia adelante, cuándo cruza los brazos, cuándo interrumpe con preguntas de detalle. Un equipo que registra sistemáticamente estas señales construye un mapa mucho más preciso que uno que llena el ejercicio en una reunión de lluvia de ideas.",
        example: {
          label: "Ejemplo real",
          content:
            "Un equipo de estrategia en una agencia decidió registrar durante un mes todos los comentarios espontáneos de sus cinco clientes principales — no los que aparecían en los briefs sino los que surgían en conversaciones informales, en WhatsApp o en charlas de pasillo. Al revisar el registro encontraron un patrón que no esperaban: los tres clientes más insatisfechos con la agencia mencionaban repetidamente que 'no entienden nuestro negocio'. Ese insight llevó a rediseñar el proceso de onboarding de nuevos clientes para incluir inmersión en el negocio del cliente antes de arrancar cualquier proyecto creativo.",
        },
      },
      {
        heading: "Del mapa a la acción: convertir insights en propuestas",
        body: "Un mapa de empatía completado no es el destino — es el punto de partida. El valor real está en cómo ese entendimiento transforma lo que el equipo propone, cómo lo presenta y cómo mide el éxito del trabajo.",
        extended_body:
          "La conexión entre el mapa de empatía y la propuesta se da a través de lo que en Design Thinking se llama 'insight de diseño': una comprensión profunda de una tensión o necesidad del cliente que abre un espacio de solución que antes no era visible. Por ejemplo: si el mapa revela que el cliente necesita defender sus decisiones ante un directorio conservador, el insight podría ser 'necesita evidencia antes de exponerse, no solo ideas'. Ese insight transforma la propuesta: en lugar de presentar la campaña, la agencia presenta primero un piloto pequeño y medible que reduce el riesgo percibido por el directorio.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia usó el mapa de empatía en una licitación para una empresa de telecomunicaciones. El mapa reveló que el decisor principal — el CMO — había tenido una experiencia muy negativa con una agencia anterior que prometió mucho y entregó poco. Su mayor miedo no era el costo sino quedar mal ante su CEO. Con ese insight, la agencia estructuró su propuesta en torno a un piloto de tres meses con métricas muy específicas y compromisos contractuales de resultados. Fue la única agencia que ofreció ese nivel de compromiso. Ganaron la cuenta y la mantienen hace tres años.",
        },
      },
    ],
    exercise:
      "Elegí un cliente actual con quien tengas una relación de al menos tres meses. Dibujá un mapa de empatía básico con cuatro cuadrantes (dice/hace, piensa/siente, escucha, ve) y completalo solo con información que tengas de fuentes reales — conversaciones, mails, reuniones. Marcá en rojo lo que estás asumiendo sin evidencia. Esas zonas rojas son tu agenda de preguntas para la próxima interacción con ese cliente.",
    takeaway:
      "Lo que el cliente no dice suele ser más valioso que lo que sí dice. Aprender a leer los silencios es una ventaja competitiva real.",
    quiz: {
      question: "¿Para qué sirve principalmente el mapa de empatía?",
      options: [
        "Para diseñar la identidad visual del cliente",
        "Para entender las dimensiones visibles e invisibles de lo que vive el cliente",
        "Para organizar el cronograma de un proyecto",
        "Para calcular el ROI de una campaña",
      ],
      correct: 1,
      explanation:
        "El mapa de empatía permite ir más allá de lo declarado y comprender motivaciones, miedos e influencias que no aparecen en un brief. Su valor está en las contradicciones y tensiones que revela, no en confirmar lo que el equipo ya sabía.",
    },
    resources: [
      { type: "tool", title: "Empathy Map Template", author: "Miro", description: "Plantilla gratuita de mapa de empatía lista para usar con instrucciones de facilitación.", url: "https://miro.com/templates/empathy-map/" },
      { type: "article", title: "Empathy Map: Why and How to Use It", author: "Nielsen Norman Group", description: "Artículo completo y gratuito del NNG sobre cómo construir y usar mapas de empatía en proyectos reales.", url: "https://www.nngroup.com/articles/empathy-mapping/" },
    ],
  },

{
    id: "m5",
    slug: "design-thinking-intro",
    title: "Design Thinking: el método que ordena la creatividad",
    description:
      "Qué es, para qué sirve y cómo aplicarlo en proyectos reales de agencia sin necesitar un laboratorio de innovación.",
    month: "Mes 3",
    level_required: 2,
    xp_reward: 160,
    lessons: 5,
    status: "available",
    theme: "Design Thinking",
    opening:
      "Design Thinking no es una metodología de diseño para diseñadores. Es un proceso para resolver problemas poniendo al ser humano en el centro, tolerando la ambigüedad y construyendo soluciones que se prueban antes de ejecutarse a escala.",
    opening_extended:
      "El término fue popularizado por IDEO y la d.school de Stanford en los años 90, pero sus principios son anteriores y más universales: la observación profunda del usuario, la generación de múltiples alternativas antes de converger en una solución, y la validación temprana con prototipos. Lo que lo hace relevante hoy en el contexto de agencias no es su novedad sino su estructura: en un mundo donde los briefs cambian a mitad de camino y los clientes no siempre saben lo que necesitan, tener un proceso que abraza esa ambigüedad en lugar de pelear contra ella es una ventaja operativa real.",
    sections: [
      {
        heading: "Las cinco etapas que no son lineales",
        body: "Empatizar, definir, idear, prototipar y testear son las etapas del proceso. Lo más importante que hay que entender es que no son secuenciales: podés idear, prototipar, descubrir algo nuevo en el testeo y volver a empatizar. El valor está en la iteración, no en seguir el orden.",
        extended_body:
          "La no-linealidad es lo que más cuesta entender a equipos acostumbrados a procesos con fases bien definidas y entregables por etapa. En Design Thinking, volver atrás no es un fracaso — es información. Si en la etapa de testeo descubrís que el usuario no entiende el prototipo, eso significa que la etapa de definición del problema necesita revisión. Si en la etapa de ideación generás una solución que revela un aspecto del problema que no habías considerado, volvés a empatizar. Cada 'retroceso' es en realidad un avance: reduce el riesgo de construir algo que no resuelve el problema real.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia de servicios financieros usó Design Thinking para rediseñar el proceso de onboarding de nuevos clientes. Empezaron con entrevistas de empatía, definieron el problema, generaron ideas y prototiparon un nuevo flujo digital. En el primer testeo con cinco usuarios reales, descubrieron que el problema no era el proceso digital en sí sino la comunicación previa: los clientes llegaban a la app sin saber qué documentos necesitaban. Tuvieron que volver a la etapa de definición y replantear el problema. La solución final fue un simple email previo con una checklist. Costo de implementación: casi cero. Reducción de abandono en el proceso de onboarding: 40%.",
        },
      },
      {
        heading: "Por qué funciona en una agencia",
        body: "En agencias trabajamos constantemente con problemas mal definidos. Un cliente que no sabe exactamente qué quiere. Un usuario que dice una cosa y hace otra. Un brief que cambia a mitad de camino. Design Thinking da herramientas para navegar esa ambigüedad sin paralizarse.",
        extended_body:
          "La razón específica por la que Design Thinking funciona bien en agencias es que resuelve el problema más común de la industria: empezar a ejecutar antes de entender bien el problema. En una agencia, la presión por 'mostrar algo' es permanente. El cliente quiere ver ideas, el director creativo quiere ver ejecuciones, el equipo de cuentas quiere tener algo para llevar a la próxima reunión. Design Thinking no elimina esa presión — le da un cauce productivo. Las etapas de empatizar y definir son formas de 'mostrar algo' — un mapa, un insight, una declaración de problema — que tienen valor real y posicionan a la agencia como estratégica antes de presentar una sola idea creativa.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia integrada ganó una cuenta de tecnología aplicando Design Thinking en la propia licitación. En lugar de presentar campañas, presentaron el resultado de tres entrevistas de empatía con usuarios del producto del cliente y un mapa de los problemas que esos usuarios tenían que el cliente no había articulado. El cliente quedó tan impactado por la profundidad del entendimiento que les pidió que repitieran el ejercicio con más usuarios antes de arrancar cualquier trabajo creativo. La campaña que surgió de ese proceso tuvo el mejor performance de lanzamiento en la historia de la empresa.",
        },
      },
      {
        heading: "El error más común al aplicarlo",
        body: "Muchos equipos lo usan solo para las etapas de ideación y se saltan empatizar y definir. El resultado: ideas muy creativas que no resuelven el problema real. El método solo funciona cuando la etapa de empatía se toma en serio.",
        extended_body:
          "Hay una razón por la que los equipos saltan a idear: es la parte más entretenida. Los post-its, la energía del brainstorming, la libertad de 'no hay ideas malas' — todo eso es estimulante. Empatizar y definir son más lentos, más inciertos y menos espectaculares. Pero son los que determinan si las ideas que se generan después son relevantes o brillantes en el vacío. Una regla práctica: si un equipo puede hacer el ejercicio de ideación sin haber hablado con ningún usuario o cliente real en los últimos cinco días, probablemente está ideando sin empatía suficiente.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia de comunicación interna fue contratada para mejorar el engagement de los empleados de una empresa de retail. El equipo hizo una jornada de ideación con decenas de ideas creativas — una app de gamificación, un programa de reconocimiento, un espacio físico de innovación. Ninguna de las ideas surgió de hablar con los empleados. Cuando finalmente realizaron entrevistas, descubrieron que el problema principal era uno simple: los empleados no entendían cómo sus tareas cotidianas contribuían a los objetivos de la empresa. La solución fue una actualización de los briefings de equipo — sin app, sin gamificación, sin espacio físico. Tres veces más barata y mucho más efectiva.",
        },
      },
      {
        heading: "Cómo aplicarlo sin un laboratorio de innovación",
        body: "Design Thinking no requiere una sala especial, metodólogos certificados ni presupuesto de innovación. Requiere tiempo para observar, disposición para hacer preguntas y voluntad de construir algo antes de tenerlo todo resuelto.",
        extended_body:
          "Versión mínima viable de Design Thinking para un proyecto de agencia: un día de empatía (tres o cuatro entrevistas de 30 minutos con usuarios o stakeholders clave), dos horas de definición (sintetizar lo que se escuchó y escribir el problema en una frase), tres horas de ideación (generar ideas individualmente y luego en grupo), un día de prototipado (construir algo lo suficientemente tangible como para que alguien lo evalúe), y medio día de testeo (mostrar el prototipo a tres personas y observar sus reacciones). Eso es una semana de trabajo, no un proyecto de seis meses. El resultado es mucho más certero que empezar a ejecutar directamente desde el brief.",
        example: {
          label: "Ejemplo real",
          content:
            "Un equipo de cuatro personas en una agencia mediana aplicó esta versión mínima para redesignar el proceso de presentación de campañas. En un día de empatía, entrevistaron a tres clientes y dos colegas de otra agencia. En las entrevistas surgió un insight no esperado: los clientes no rechazaban las ideas creativas — rechazaban la falta de contexto estratégico antes de la idea. El prototipo fue una nueva estructura de presentación que arrancaba con datos de negocio y terminaba con la idea creativa, en lugar del orden inverso habitual. Los primeros tres clientes que la recibieron aprobaron las propuestas en la primera reunión.",
        },
      },
      {
        heading: "Design Thinking y el trabajo cotidiano de una agencia",
        body: "No todos los proyectos necesitan un proceso completo de Design Thinking. Pero sus principios — empatía, definición precisa del problema, iteración, testeo temprano — pueden y deben aplicarse en el trabajo de todos los días, aunque sea en versión reducida.",
        extended_body:
          "La forma más práctica de incorporar Design Thinking al trabajo cotidiano es a través de tres preguntas que se pueden hacer en cualquier proyecto, en cualquier reunión, en cualquier momento: '¿Quién tiene el problema que intentamos resolver y qué sabemos de él más allá del brief?' '¿Estamos seguros de que el problema que estamos resolviendo es el problema real?' '¿Podemos hacer algo pequeño para testear esta idea antes de producirla completa?' Esas tres preguntas, aplicadas con consistencia, generan más valor que cualquier taller de Design Thinking de dos días.",
        example: {
          label: "Ejemplo real",
          content:
            "Una directora de cuentas en una agencia de publicidad empezó a hacer siempre la misma pregunta al inicio de cada proyecto: '¿Tenemos algo pequeño que podamos probar antes de producir la campaña completa?' En el 70% de los casos, la respuesta era sí: un post en redes, un email, una landing page, una encuesta rápida. En el 30% de esos testeos, el resultado modificaba significativamente la dirección de la campaña. En los últimos 18 meses, la agencia no tuvo ningún proyecto con retrabajo mayor después del lanzamiento — el primero en cinco años.",
        },
      },
    ],
    exercise:
      "Elegí un proyecto actual o reciente y aplicá las tres preguntas de Design Thinking: ¿Quién tiene el problema que intentás resolver y qué sabés de él más allá del brief? ¿Estás seguro de que el problema que estás resolviendo es el problema real? ¿Podés hacer algo pequeño para testear la dirección antes de producirla completa? Escribí tus respuestas y anotá qué cambiaría en tu enfoque del proyecto si las tomaras en serio.",
    takeaway:
      "Design Thinking no es un proceso creativo. Es un proceso de comprensión que hace que la creatividad llegue al lugar correcto.",
    quiz: {
      question:
        "¿Cuál es el error más frecuente al aplicar Design Thinking en equipos de agencia?",
      options: [
        "Dedicar demasiado tiempo a la etapa de empatía",
        "Usar post-its en lugar de documentación formal",
        "Saltarse empatizar y definir para ir directo a idear",
        "Invitar al cliente al proceso de ideación",
      ],
      correct: 2,
      explanation:
        "Sin una comprensión profunda del problema, las ideas más creativas pueden ser soluciones brillantes al problema equivocado. La etapa de empatía es la que diferencia la creatividad relevante de la creatividad que impresiona pero no resuelve nada.",
    },
    resources: [
      { type: "video", title: "Design Thinking — A Short Introduction", author: "d.school Stanford · YouTube", description: "La d.school de Stanford explica el proceso de design thinking en menos de 5 minutos.", url: "https://www.youtube.com/watch?v=0V5BwTrQOCs" },
      { type: "tool", title: "Design Thinking Bootcamp Bootleg", author: "d.school Stanford", description: "El toolkit completo y gratuito de la d.school con todas las herramientas de design thinking.", url: "https://dschool.stanford.edu/resources/design-thinking-bootleg" },
    ],
  },

{
    id: "m6",
    slug: "como-definir-problemas",
    title: "Cómo definir un problema antes de resolverlo",
    description:
      "La habilidad más subestimada en agencias: llegar al problema real antes de gastar energía en soluciones que nadie pidió.",
    month: "Mes 3",
    level_required: 2,
    xp_reward: 160,
    lessons: 4,
    status: "available",
    theme: "Design Thinking",
    opening:
      "En ambientes donde la velocidad es moneda, hay una tentación permanente de saltar a las soluciones antes de entender bien el problema. Pero una solución brillante al problema equivocado no solo no ayuda: a veces hace daño.",
    opening_extended:
      "Einstein supuestamente dijo: 'Si tuviera una hora para resolver un problema, dedicaría 55 minutos a pensar en el problema y 5 minutos a pensar en soluciones.' Independientemente de la fuente, la lógica es impecable y completamente contraria a cómo funcionan la mayoría de las agencias. En una industria donde los clientes pagan por ideas y ejecuciones, no por análisis, existe una presión estructural para mostrar soluciones lo más rápido posible. El resultado es una industria muy hábil para generar respuestas y muy poco hábil para asegurarse de que las preguntas son las correctas.",
    sections: [
      {
        heading: "El enunciado del problema importa más de lo que creés",
        body: "Cómo formulás el problema determina qué soluciones podés imaginar. 'Necesitamos más seguidores en Instagram' lleva a ideas de contenido. 'Nuestros clientes no perciben el valor de lo que hacemos' lleva a ideas sobre propuesta de valor, comunicación y experiencia. Son mundos completamente distintos.",
        extended_body:
          "Esta es una de las habilidades más raras y más valiosas en el mundo de las agencias: la capacidad de reformular el problema para abrirlo. Cuando un cliente llega con 'necesitamos una campaña de verano', la pregunta no es '¿qué campaña hacemos?' sino '¿qué problema de negocio está intentando resolver con esa campaña?' La respuesta puede ser algo tan específico como 'necesitamos mover stock de un producto que no está rotando' o tan estratégico como 'necesitamos reposicionar la marca para el segmento joven'. Cada formulación lleva a una estrategia completamente diferente.",
        example: {
          label: "Ejemplo real",
          content:
            "Un cliente de bebidas llegó a una agencia con el brief: 'Queremos una campaña para aumentar el consumo en el canal on-trade (bares y restaurantes).' El equipo de estrategia hizo las preguntas correctas y descubrió que el problema real no era demanda del consumidor final — era que los mozos y bartenders no recomendaban el producto porque no lo conocían. La solución no fue una campaña de consumidor sino un programa de capacitación y experiencia para el canal de venta. El presupuesto fue un tercio del original. Los resultados en volumen superaron en 60% el objetivo inicial.",
        },
      },
      {
        heading: "La técnica de los 5 porqués",
        body: "Cuando alguien describe un problema, preguntá por qué cinco veces seguidas. Cada respuesta te lleva un nivel más profundo. El verdadero problema suele aparecer en el tercer o cuarto porqué. Los dos primeros casi siempre son síntomas.",
        extended_body:
          "La técnica fue desarrollada por Sakichi Toyoda y es uno de los pilares del sistema de producción de Toyota. Su aplicación en agencias es directa y poderosa. El desafío está en hacer los porqués con curiosidad genuina, no como un interrogatorio. Cada 'por qué' debería sonar como 'ayudame a entender más' y no como 'justificá lo que dijiste'. Cuando la técnica funciona bien, el cliente mismo llega a una comprensión más profunda de su propio problema — y eso lo hace más capaz de evaluar si la solución que le proponen es la correcta.",
        example: {
          label: "Ejemplo real",
          content:
            "Problema inicial: 'Las ventas online bajaron 15% este trimestre.' ¿Por qué? 'Porque el tráfico al sitio bajó.' ¿Por qué bajó el tráfico? 'Porque la inversión en pauta digital se redujo.' ¿Por qué se redujo? 'Porque el CMO redirigió presupuesto a una activación de punto de venta.' ¿Por qué se tomó esa decisión? 'Porque la semana anterior el CEO preguntó por los resultados en el canal físico.' El problema real no era digital — era una desconexión en la comunicación interna sobre prioridades. La solución no fue aumentar el presupuesto digital sino proponer un dashboard integrado que el CEO pudiera ver con métricas de todos los canales. La pauta digital se restableció en dos semanas.",
        },
      },
      {
        heading: "El point of view (POV)",
        body: "En Design Thinking existe una herramienta llamada POV: un enunciado que combina usuario + necesidad + insight. Por ejemplo: 'Los directores de cuenta necesitan una forma de presentar el valor estratégico de las campañas porque los clientes evalúan el trabajo solo por métricas de corto plazo'. Ese enunciado abre un espacio de soluciones muy diferente a 'los clientes no valoran nuestro trabajo'.",
        extended_body:
          "La estructura del POV es simple: [usuario] necesita [necesidad] porque [insight]. Pero cada componente requiere precisión. El 'usuario' no puede ser vago ('el cliente') — tiene que ser específico ('el CMO de una empresa de consumo masivo con presupuesto de marketing bajo $500K anuales'). La 'necesidad' no puede ser una solución disfrazada ('necesita una app de métricas') — tiene que ser la necesidad real ('necesita demostrar ROI a su directorio en un lenguaje que ellos entiendan'). El 'insight' es la revelación que hace que la necesidad sea comprensible: el 'por qué' detrás del 'qué'.",
        example: {
          label: "Ejemplo real",
          content:
            "Una agencia de contenidos B2B estaba perdiendo clientes después del primer año. El problema declarado era 'los clientes no ven valor'. Usando el POV, reformularon: 'Los directores de marketing de empresas B2B medianas necesitan demostrar el impacto del contenido en las etapas finales del funnel de ventas porque sus CEO miden el marketing por contratos cerrados, no por métricas de contenido.' Ese POV llevó a una solución muy específica: empezar a integrar los datos de CRM del cliente con los datos de contenido para mostrar qué piezas habían sido consumidas por los leads que finalmente cerraron. La retención de clientes mejoró significativamente en el año siguiente.",
        },
      },
      {
        heading: "Cuándo el problema está bien definido",
        body: "Un problema bien definido tiene tres características: es específico (describe una situación concreta, no una generalidad), es orientado al usuario (nombra a quién afecta y cómo), y es abierto (no implica una solución específica). Si al leer el enunciado del problema ya sabés cuál es la solución, probablemente el problema no está bien definido.",
        extended_body:
          "Hay un test simple para evaluar si un problema está bien definido: el test de las soluciones múltiples. Si el problema admite al menos tres soluciones completamente diferentes y todas son plausibles, está bien definido. Si solo admite una solución obvia, en realidad es una solución disfrazada de problema. Por ejemplo: 'Necesitamos un video para el lanzamiento' es una solución, no un problema. 'Los potenciales clientes no entienden qué hace diferente nuestro producto en los primeros 30 segundos de la conversación de ventas' es un problema — y admite al menos diez soluciones diferentes, incluyendo (pero no solo) un video.",
        example: {
          label: "Ejemplo real",
          content:
            "Un cliente llegó con el pedido: 'Necesitamos rediseñar nuestro sitio web.' La agencia aplicó los 5 porqués y llegó a: 'Los visitantes del sitio no entienden qué hacemos en los primeros 10 segundos.' Ese problema admitía múltiples soluciones: rediseño del sitio (la solución original), pero también una revisión del copy del home, una mejora del explainer video, una simplificación del menú de navegación, o una revisión de los anuncios de búsqueda paga que traían tráfico mal calificado. La solución final fue rediseñar solo el home y el copy — sin tocar el resto del sitio — con un presupuesto un 70% menor al original. El tiempo de permanencia en el sitio aumentó 45% en el primer mes.",
        },
      },
    ],
    exercise:
      "Tomá un problema que tengas ahora mismo — de cliente, de equipo, de proceso — y pasalo por dos filtros. Primero, aplicá los 5 porqués hasta llegar al nivel más profundo que puedas. Segundo, reescribilo como POV con la estructura [usuario] + [necesidad] + [insight]. Compará el enunciado original con el que llegaste al final. ¿Cambiaría la solución que ibas a proponer? ¿Cómo?",
    takeaway:
      "La calidad de tu solución depende directamente de la calidad de tu definición del problema.",
    quiz: {
      question: "¿Qué logra la técnica de los 5 porqués?",
      options: [
        "Genera cinco soluciones diferentes al mismo problema",
        "Evalúa la factibilidad de una idea",
        "Profundiza en las causas reales detrás de un síntoma",
        "Organiza las prioridades del cliente por importancia",
      ],
      correct: 2,
      explanation:
        "Los 5 porqués ayudan a pasar del síntoma visible al problema estructural que lo genera. El síntoma es lo que se ve; el problema real es lo que lo causa. Resolver el síntoma da alivio temporal. Resolver el problema real genera cambio duradero.",
    },
    resources: [
      { type: "article", title: "The 5 Whys Technique", author: "MindTools", description: "Explicación clara y gratuita de la técnica de los 5 porqués con ejemplos de aplicación.", url: "https://www.mindtools.com/a3mi00v/5-whys" },
      { type: "tool", title: "Point of View (POV) Statement", author: "d.school Stanford", description: "La herramienta oficial de la d.school para formular el punto de vista del usuario.", url: "https://dschool.stanford.edu/resources" },
    ],
  },

{
    id: "m7",
    slug: "ideas-que-sobreviven",
    title: "Ideas que sobreviven",
    description: "Cómo hacer que una idea no se quede en una reunión linda sino que avance, se sostenga y genere carrera.",
    month: "Mes 4",
    level_required: 2,
    xp_reward: 180,
    lessons: 6,
    status: "available",
    theme: "Ejecución",
    opening: "En agencias sobran ideas. Lo raro no es tenerlas; lo raro es que lleguen vivas al mundo real. Muchas mueren porque no se explicaron bien, porque no conectaron con negocio, porque no se pudo defender su valor o porque nadie se hizo cargo de empujarlas.",
    sections: [
      { heading: "Vender una idea es parte del trabajo", body: "No alcanza con tener una buena propuesta. También hay que darle contexto, convertirla en una historia comprensible y mostrar por qué importa. Muchas veces el talento no se frustra por falta de creatividad, sino por falta de traducción." },
      { heading: "La viabilidad no mata la ambición", body: "Hacer una idea viable no significa achicarla hasta volverla irrelevante. Significa encontrar una versión que pueda probarse, defenderse y crecer. Un piloto, un MVP o una activación pequeña pueden ser la diferencia entre la intuición y el impacto." },
      { heading: "Las carreras crecen con ideas concretadas", body: "Tu desarrollo profesional no depende solo del talento que tenés, sino de la cantidad de ideas que lográs convertir en movimiento. Las personas que avanzan son las que no se quedan solo con el hallazgo creativo: empujan, alinean, adaptan y hacen que las cosas pasen." },
    ],
    exercise: "Tomá una idea que no haya avanzado y analizala con honestidad: ¿murió por claridad, por timing, por falta de sponsor o por miedo? Escribí cuál habría sido la siguiente versión viable para darle una oportunidad real.",
    takeaway: "Una buena idea suma reputación. Una idea que se concreta cambia equipos, resultados y carreras.",
    quiz: {
      question: "¿Qué necesita una idea para sobrevivir en una agencia?",
      options: ["Ser muy original y quedarse intacta", "Conectar con un problema, explicarse bien y encontrar una forma viable de avanzar", "Depender de que el cliente la apruebe a la primera", "Tener una presentación linda aunque no esté clara"],
      correct: 1,
      explanation: "Las ideas que avanzan combinan valor, claridad y capacidad de implementación. No viven solo del brillo inicial.",
    },
    resources: [
      { type: "video", title: "Start With Why", author: "Simon Sinek · TED", description: "Por qué las ideas que conectan con el propósito tienen más posibilidades de avanzar.", url: "https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action" },
      { type: "video", title: "How to Pitch an Idea", author: "The Futur · YouTube", description: "Chris Do explica cómo presentar y defender ideas creativas frente a clientes y decisores.", url: "https://www.youtube.com/watch?v=5F_JUvPq410" },
    ],
  },

{
    id: "m8",
    slug: "prototipado-rapido",
    title: "Prototipar para aprender, no para impresionar",
    description: "Cómo construir versiones tempranas de ideas que permitan aprender rápido, fallar barato y llegar al mercado con mayor certeza.",
    month: "Mes 4",
    level_required: 2,
    xp_reward: 180,
    lessons: 5,
    status: "available",
    theme: "Ejecución",
    opening: "Un prototipo no es una versión perfecta a menor escala. Es un artefacto que permite aprender algo específico sobre una idea antes de invertir en desarrollarla por completo. Esa diferencia cambia todo: el objetivo no es impresionar, es descubrir.",
    sections: [
      { heading: "Qué preguntas responde un prototipo", body: "Antes de construir cualquier prototipo hay que hacerse una pregunta central: ¿qué quiero aprender con esto? ¿Si el usuario lo entiende? ¿Si la mecánica funciona? ¿Si el cliente está dispuesto a pagar? Cada pregunta requiere un tipo diferente de prototipo. Sin esa pregunta, un prototipo es solo tiempo gastado." },
      { heading: "Tipos de prototipos para contextos de agencia", body: "No todo prototipo es un mockup digital. En agencias pueden ser: una propuesta de concepto en una hoja, un storyboard para testear una narrativa, un deck de pricing para validar disposición de pago, un landing page estático para medir intención de compra, o una experiencia simulada antes de producir." },
      { heading: "Fallar en el prototipo es ganar en el producto", body: "Cuando un prototipo revela que una idea no funciona, eso no es un fracaso: es el sistema funcionando correctamente. Descubrir un problema en etapas tempranas cuesta diez veces menos que descubrirlo después de producir, publicar o presentar ante el cliente final." },
    ],
    exercise: "Elegí una idea que tengas actualmente y diseñá el prototipo más simple posible que permita aprender si tiene sentido. Definí: ¿qué pregunta responde?, ¿qué necesitás construir?, ¿quién lo testea y cómo?",
    takeaway: "El mejor prototipo es el que te enseña algo con el menor costo posible.",
    quiz: {
      question: "¿Cuál es el objetivo principal de un prototipo?",
      options: ["Impresionar al cliente con la calidad del trabajo", "Aprender algo específico sobre una idea antes de invertir en desarrollarla", "Generar una versión reducida del producto final", "Cumplir con un paso obligatorio del proceso creativo"],
      correct: 1,
      explanation: "Los prototipos son herramientas de aprendizaje, no de presentación. Su valor está en lo que revelan, no en lo que muestran.",
    },
    resources: [
      { type: "video", title: "The Single Biggest Reason Why Startups Succeed", author: "Bill Gross · TED", description: "Análisis de cientos de startups para entender qué factor predice más el éxito. La importancia del prototipado.", url: "https://www.ted.com/talks/bill_gross_the_single_biggest_reason_why_startups_succeed" },
      { type: "tool", title: "Figma — Herramienta gratuita de prototipado", author: "Figma", description: "La herramienta más usada para prototipar interfaces digitales. Plan gratuito disponible.", url: "https://www.figma.com" },
    ],
  },

{
    id: "m9", slug: "pensamiento-de-producto", title: "Pensamiento de producto para gente de agencia", description: "Cómo pasar de entregar proyectos únicos a construir soluciones que escalan, se repiten y generan valor sostenido.", month: "Mes 5", level_required: 3, xp_reward: 200, lessons: 6, status: "available", theme: "Producto",
    opening: "Una agencia que solo factura por horas o proyectos únicos tiene un techo estructural de crecimiento. El pensamiento de producto rompe ese techo: implica identificar una necesidad recurrente, construir una solución que pueda entregarse más de una vez y capturar valor de forma escalable.",
    sections: [
      { heading: "La diferencia entre proyecto y producto", body: "Un proyecto se entrega una vez, se cobra una vez y requiere esfuerzo nuevo cada vez. Un producto se construye una vez, mejora con el tiempo y puede entregarse múltiples veces con costos marginales decrecientes." },
      { heading: "Dónde están los productos escondidos en una agencia", body: "Muchas agencias ya hacen lo mismo una y otra vez para clientes distintos: diagnósticos de marca, auditorías de contenido, estrategias de lanzamiento. Eso no es servicio repetido; es un proto-producto esperando ser formalizado y escalado." },
      { heading: "El MVP en contexto de agencia", body: "En una agencia puede ser: la primera versión cobrable de un diagnóstico estandarizado, un taller con metodología propia que se puede replicar, o una herramienta interna que empieza a venderse a clientes. La clave es identificar el mínimo que genera valor." },
    ],
    exercise: "Listá tres servicios que tu agencia repite frecuentemente. Para cada uno: ¿qué tan estandarizado está?, ¿podría entregarse con menos personalización sin perder valor?, ¿hay una versión de esto que pueda funcionar como producto?",
    takeaway: "El mayor activo que puede tener una agencia no es un cliente grande. Es un producto propio que escala sin depender de un solo equipo.",
    quiz: { question: "¿Qué diferencia fundamental tiene un producto respecto a un proyecto de agencia?", options: ["El producto es más caro de vender", "El producto se construye para un cliente específico", "El producto puede entregarse múltiples veces con costos marginales menores", "El proyecto tiene mayor margen de ganancia"], correct: 2, explanation: "La escalabilidad es la característica central del pensamiento de producto: se invierte una vez y se captura valor muchas veces." },
    resources: [
      { type: "video", title: "How to Find Product-Market Fit", author: "Y Combinator · YouTube", description: "El proceso de encontrar el encaje entre producto y mercado explicado por el acelerador más exitoso del mundo.", url: "https://www.youtube.com/watch?v=0LNQxT9LvM0" },
      { type: "tool", title: "Business Model Canvas — Strategyzer", author: "Strategyzer", description: "Herramienta oficial del Business Model Canvas. Plantilla gratuita y recursos de aprendizaje.", url: "https://www.strategyzer.com/library/the-business-model-canvas" },
    ],
  },

{
    id: "m10", slug: "modelo-de-negocio-canvas", title: "Business Model Canvas: diseñar cómo se captura valor", description: "Una herramienta visual para entender, cuestionar y rediseñar la manera en que una idea genera y sostiene ingresos.", month: "Mes 5", level_required: 3, xp_reward: 200, lessons: 5, status: "available", theme: "Producto",
    opening: "El Business Model Canvas no es un plan de negocios. Es un mapa visual de nueve bloques que describe cómo una organización crea, entrega y captura valor. Su poder está en que obliga a pensar en el modelo completo y en hacerlo visible de un vistazo.",
    sections: [
      { heading: "Los nueve bloques que importan", body: "Propuesta de valor, segmentos de clientes, canales, relaciones con clientes, fuentes de ingreso, recursos clave, actividades clave, alianzas y estructura de costos. La propuesta de valor es el corazón: define qué problema resolvés y por qué alguien pagaría por eso." },
      { heading: "Cómo usarlo para evaluar una idea nueva", body: "Antes de invertir en desarrollar cualquier producto o servicio, completar el canvas obliga a responder preguntas que suelen omitirse: ¿cómo llegás al cliente?, ¿cuánto cuesta adquirirlo?, ¿la estructura de costos es compatible con lo que podés cobrar?" },
      { heading: "Iterar el modelo, no solo el producto", body: "Muchas ideas buenas fracasan por modelos de negocio mal diseñados. Cambiar cómo se entrega (freemium vs. suscripción vs. proyecto), a quién se le vende o cómo se cobra puede convertir un producto mediocre en un negocio sostenible." },
    ],
    exercise: "Tomá la idea de producto que identificaste en el módulo anterior y completá un Business Model Canvas básico. Marcá en rojo los bloques donde tenés más suposiciones que datos.",
    takeaway: "Una buena idea sin un modelo de negocio sólido es un regalo sin destinatario.",
    quiz: { question: "¿Cuál es el bloque más importante del Business Model Canvas?", options: ["Estructura de costos", "Fuentes de ingreso", "Propuesta de valor", "Canales"], correct: 2, explanation: "La propuesta de valor es el núcleo del canvas porque conecta directamente con el problema del cliente y justifica la existencia del negocio." },
    resources: [
      { type: "video", title: "Business Model Canvas Explained", author: "Strategyzer · YouTube", description: "Explicación oficial del Business Model Canvas con ejemplos reales de cómo llenarlo.", url: "https://www.youtube.com/watch?v=QoAOzMTLP5s" },
      { type: "tool", title: "Value Proposition Canvas", author: "Strategyzer", description: "Herramienta gratuita para construir y validar una propuesta de valor.", url: "https://www.strategyzer.com/library/the-value-proposition-canvas" },
    ],
  },

{
    id: "m11", slug: "liderazgo-innovacion", title: "Liderar la innovación sin tener el título", description: "Cómo generar cambio desde donde estás, construir aliados internos y lograr que tus ideas muevan a equipos enteros.", month: "Mes 6", level_required: 3, xp_reward: 220, lessons: 6, status: "available", theme: "Liderazgo",
    opening: "El liderazgo en innovación no viene con un cargo. Viene con la disposición a empujar ideas cuando nadie te lo pide, a conectar personas que no se hablan entre sí y a sostener el esfuerzo cuando la organización quiere volver a lo que ya conoce.",
    sections: [
      { heading: "Influencia sin autoridad", body: "Los cambios más duraderos los impulsan personas que entienden bien los problemas, generan confianza y construyen coaliciones alrededor de una idea. Influir sin autoridad formal requiere credibilidad técnica, empatía y paciencia estratégica." },
      { heading: "Construir aliados internos", body: "Toda idea necesita sponsors. Identificar quiénes se beneficiarían de tu propuesta y conectarlos con la idea antes de presentarla a toda la organización es más efectivo que hacer una presentación impactante sin preparar el terreno." },
      { heading: "Sostener la energía cuando la organización frena", body: "Las organizaciones tienen anticuerpos naturales contra el cambio. No porque la gente sea mala, sino porque los sistemas prefieren la estabilidad. Saber cuándo empujar, cuándo esperar y cuándo ajustar es una habilidad que se construye con experiencia." },
    ],
    exercise: "Identificá una iniciativa de mejora que quieras impulsar en los próximos tres meses. Trazá un mapa de aliados: quién podría apoyarla, quién podría resistirla y qué necesitarías mostrar para mover a los indecisos.",
    takeaway: "El liderazgo en innovación no espera permiso. Construye el contexto para que el permiso deje de ser necesario.",
    quiz: { question: "¿Qué es más efectivo para impulsar una idea de innovación en una organización?", options: ["Hacer una presentación muy detallada ante toda la empresa", "Esperar a tener el cargo formal", "Construir aliados estratégicos antes de presentar la idea en grande", "Implementar el cambio sin avisar"], correct: 2, explanation: "Los aliados estratégicos reducen la resistencia y amplifican el impacto. Preparar el terreno es parte del proceso de innovación." },
    resources: [
      { type: "video", title: "How to Start a Movement", author: "Derek Sivers · TED", description: "En 3 minutos explica cómo el liderazgo sin cargo se convierte en movimiento.", url: "https://www.ted.com/talks/derek_sivers_how_to_start_a_movement" },
      { type: "video", title: "How to Lead When You Are Not in Charge", author: "TEDx · YouTube", description: "Cómo generar cambio e influencia sin tener autoridad formal. Muy aplicable al contexto de agencias.", url: "https://www.youtube.com/watch?v=MvMwXwdCBdE" },
    ],
  },

{
    id: "m12", slug: "cultura-de-experimentacion", title: "Construir una cultura de experimentación", description: "Cómo pasar de una organización que teme equivocarse a una que aprende más rápido que la competencia.", month: "Mes 6", level_required: 3, xp_reward: 220, lessons: 5, status: "available", theme: "Liderazgo",
    opening: "Una cultura de experimentación es una donde las hipótesis se prueban antes de ejecutarse a escala, donde los errores documentados valen más que los éxitos no entendidos y donde aprender más rápido es una ventaja competitiva.",
    sections: [
      { heading: "El experimento como unidad de aprendizaje", body: "Un experimento bien diseñado tiene tres elementos: una hipótesis clara, una forma de medirlo y un criterio de éxito definido de antemano. Sin esos tres elementos, no es un experimento: es una apuesta." },
      { heading: "Seguridad psicológica: la condición previa", body: "Ningún equipo experimenta en entornos donde equivocarse tiene consecuencias personales graves. La seguridad psicológica es la condición que hace posible la experimentación genuina. Construirla requiere que los líderes modelen el comportamiento: compartir sus propios fracasos y mostrar qué aprendieron." },
      { heading: "Sistematizar el aprendizaje", body: "El valor de un experimento no está solo en su resultado: está en lo que el equipo aprende de él. Documentar hipótesis, resultados y aprendizajes es lo que convierte una experiencia individual en conocimiento organizacional." },
    ],
    exercise: "Diseñá un experimento mínimo para probar una hipótesis de mejora en tu área. Definí: ¿qué creés que va a pasar y por qué?, ¿cómo lo medís?, ¿cuándo decidís si funcionó o no?",
    takeaway: "Las organizaciones que aprenden más rápido no son las que tienen más talento: son las que tienen mejores sistemas para convertir experiencias en conocimiento.",
    quiz: { question: "¿Qué elemento es indispensable en un experimento bien diseñado?", options: ["Un presupuesto aprobado por dirección", "Una hipótesis clara con criterio de éxito definido de antemano", "Un equipo exclusivamente dedicado a innovación", "La aprobación del cliente antes de testear"], correct: 1, explanation: "Sin hipótesis y criterio de éxito previos, no hay experimento: hay improvisación. La claridad antes de actuar es lo que permite aprender sistemáticamente." },
    resources: [
      { type: "video", title: "Building Psychological Safety at Work", author: "Amy Edmondson · TED", description: "La investigadora que popularizó el concepto explica cómo construirlo en equipos reales.", url: "https://www.ted.com/talks/amy_edmondson_building_a_psychologically_safe_workplace" },
      { type: "article", title: "Psychological Safety and the Learning Organization", author: "Amy Edmondson · HBR", description: "El artículo original de Edmondson sobre seguridad psicológica como condición para el aprendizaje organizacional.", url: "https://hbr.org/1999/11/psychological-safety-and-the-learning-organization" },
    ],
  },

{
    id: "m13", slug: "comunicacion-estrategica", title: "Comunicación estratégica: decir lo correcto al que decide",
    description: "Cómo adaptar el mensaje según el interlocutor para que tus ideas lleguen, convenzan y generen acción.",
    month: "Mes 7", level_required: 3, xp_reward: 240, lessons: 4, status: "available", theme: "Comunicación",
    opening: "En una agencia, la calidad de una idea vale tanto como la calidad con que se comunica. Podés tener el insight más poderoso del año y perderlo en una presentación mal calibrada para el interlocutor.",
    sections: [
      { heading: "El error más común: hablar para todos igual", body: "Un director de marketing necesita escuchar algo diferente que un director financiero, aunque estén en la misma sala. El primero piensa en marca e impacto; el segundo en ROI y riesgo. La misma propuesta, comunicada sin ese filtro, convence a uno y pierde al otro.", extended_body: "Hay cuatro perfiles típicos de decisor en el mundo corporativo. El estratega quiere ver cómo encaja la propuesta en el panorama general. El operativo quiere saber cómo se implementa. El financiero quiere números: inversión, retorno, plazo. El relacional quiere saber cómo impacta en las personas. Una presentación que no habla el idioma del decisor principal está condenada a quedar en revisión.", example: { label: "Ejemplo real", content: "Un equipo estructuró la primera mitad de una presentación para el CMO — posicionamiento, diferenciación — y la segunda para el CFO — costo por lead, payback en 6 meses. El CFO aprobó el presupuesto en la reunión, algo que no había pasado en tres propuestas anteriores." } },
      { heading: "La pirámide invertida: conclusión primero", body: "La mayoría de las presentaciones siguen el orden natural del pensamiento: contexto, análisis, conclusión. El problema es que para cuando llegás a la conclusión, ya perdiste la atención de la mitad de la sala. La pirámide invertida invierte ese orden.", extended_body: "En el contexto de agencias, el formato más efectivo suele ser: primero la respuesta, después el por qué, después el cómo, después qué necesitamos. Ese orden respeta el tiempo del decisor y deja claro desde el primer slide adónde querés llegar.", example: { label: "Ejemplo real", content: "Una agencia cambió el orden de sus presentaciones: pasó de empezar con análisis de mercado a empezar directamente con la recomendación en el primer slide. La tasa de aprobación en primera instancia subió del 40% al 65% en seis meses." } },
      { heading: "Comunicar con datos sin aburrir con números", body: "Los datos convencen cuando están contextualizados y cuando responden una pregunta que el interlocutor ya tiene en mente. Un número sin contexto es ruido. Un número que responde exactamente la duda del cliente es persuasión.", extended_body: "Tres reglas para usar datos en comunicación estratégica. Primero: siempre comparar. Segundo: elegir el número correcto para cada audiencia. Tercero: visualizar, no tabular — una tabla de 40 filas genera ansiedad; un gráfico de barras con tres columnas genera claridad." },
      { heading: "El arte del seguimiento", body: "La presentación no termina cuando salís de la sala. Termina cuando se toma la decisión. El seguimiento estratégico es parte de la comunicación y muchas veces es lo que define si una propuesta avanza o queda en el limbo.", extended_body: "Un buen seguimiento tiene tres elementos: síntesis de lo acordado, próximo paso claro con responsable y fecha, y una pregunta o pendiente específico para mantener el diálogo activo." },
    ],
    exercise: "Pensá en una presentación que tengas que hacer. Identificá quién es el decisor principal y a qué perfil pertenece. Reescribí las primeras tres diapositivas con ese perfil en mente.",
    takeaway: "Comunicar bien no es hablar con claridad. Es entender qué necesita escuchar cada persona para tomar la decisión correcta.",
    quiz: { question: "¿Qué es la pirámide invertida en comunicación estratégica?", options: ["Empezar con el contexto y terminar con la recomendación", "Empezar con la recomendación y luego presentar la evidencia", "Usar más datos que palabras", "Adaptar el tono según el tamaño de la audiencia"], correct: 1, explanation: "La pirámide invertida pone la conclusión primero. Esto respeta el tiempo del decisor y evita que la propuesta quede enterrada al final." },
    resources: [
      { type: "video", title: "How to Speak So That People Want to Listen", author: "Julian Treasure · TED", description: "Principios de comunicación efectiva. Una de las charlas TED más vistas sobre el tema.", url: "https://www.ted.com/talks/julian_treasure_how_to_speak_so_that_people_want_to_listen" },
      { type: "video", title: "The Pyramid Principle — Barbara Minto", author: "YouTube", description: "Explicación gratuita del método de comunicación estructurada de McKinsey para presentar ideas con claridad.", url: "https://www.youtube.com/watch?v=_ZBKX-6Gz6A" },
    ],
  },

{
    id: "m14", slug: "gestion-de-clientes-dificiles", title: "Gestión de clientes difíciles: convertir tensión en confianza",
    description: "Cómo manejar clientes exigentes, relaciones tensas y situaciones de crisis sin perder la calidad del trabajo ni el vínculo.",
    month: "Mes 7", level_required: 3, xp_reward: 240, lessons: 4, status: "available", theme: "Comunicación",
    opening: "Todo el mundo tiene un cliente difícil. La habilidad de gestionar esas relaciones sin perder la calma, la calidad ni la cuenta es una de las más valiosas — y menos enseñadas — en el mundo de las agencias.",
    sections: [
      { heading: "Entender por qué el cliente se comporta así", body: "Un cliente difícil casi siempre tiene una razón. Presión interna, miedo a quedar mal, una mala experiencia previa. Cuando entendés la causa raíz del comportamiento difícil, podés responder a esa causa en lugar de reaccionar al síntoma.", extended_body: "Los tres tipos más comunes. El micromanager necesita control porque teme perder visibilidad — la solución es darle más información proactiva. El indeciso no tiene certeza interna — la solución es hacer más preguntas y reducir las opciones. El agresivo está bajo presión extrema — la solución es no tomar el tono personal.", example: { label: "Ejemplo real", content: "Una directora de cuentas descubrió que su cliente rechazaba propuestas en reuniones porque llegaba habiendo recibido comentarios negativos de su director. Empezó a enviar resúmenes 24 horas antes. Los rechazos en sala bajaron del 70% al 20%." } },
      { heading: "Poner límites sin romper la relación", body: "Aceptar todo lo que pide un cliente difícil no es servicio — es habilitar un patrón insostenible. Poner límites claros, comunicados con respeto y con alternativas, es una señal de profesionalismo.", extended_body: "Un límite bien comunicado tiene tres partes: el impacto de la situación actual, la alternativa concreta que sí es posible, y la decisión en manos del cliente. Esa estructura convierte el límite en una conversación de opciones." },
      { heading: "Manejar el cambio de scope sin perder el margen", body: "El scope creep es uno de los principales destructores de margen en agencias. Aprenderlo a detectar temprano y nombrarlo sin conflicto es una habilidad que protege el negocio y la relación.", extended_body: "La conversación más efectiva no es 'eso no está en el scope' sino '¿lo incluimos como extensión del proyecto o lo dejamos para la siguiente fase?' Esa pregunta hace visible el cambio sin generar confrontación." },
      { heading: "Transformar una crisis en un punto de inflexión", body: "Las crisis de relación con un cliente son también oportunidades para construir confianza más profunda. La manera en que una agencia gestiona sus errores define su reputación más que sus éxitos.", extended_body: "El protocolo de crisis tiene cuatro pasos: reconocimiento inmediato, comprensión del impacto antes de hablar de soluciones, plan de acción concreto con fechas, y seguimiento post-crisis para cerrar el ciclo." },
    ],
    exercise: "Identificá un cliente que hayas considerado difícil. Analizá: ¿a qué tipo pertenece? ¿Cuál era la causa raíz? Escribí tres acciones concretas que aplicarías si esa situación volviera.",
    takeaway: "El cliente más difícil es el que mejor enseña cómo funciona la relación cuando la presión es real.",
    quiz: { question: "¿Cuál es la mejor forma de manejar el scope creep con un cliente?", options: ["Ignorarlo para no generar conflicto", "Rechazarlo directamente", "Nombrarlo y ofrecer incluirlo como extensión o siguiente fase", "Incluirlo sin costo para mantener la relación"], correct: 2, explanation: "Nombrar el cambio sin confrontación protege el margen sin dañar la relación." },
    resources: [
      { type: "video", title: "How to Deal With Difficult People", author: "The Futur · YouTube", description: "Chris Do explica cómo gestionar clientes difíciles desde una perspectiva creativa y estratégica.", url: "https://www.youtube.com/watch?v=5MVNZ9RFcCk" },
      { type: "article", title: "How to Handle Difficult Client Conversations", author: "Smashing Magazine", description: "Guía práctica gratuita para gestionar conversaciones difíciles con clientes en servicios creativos.", url: "https://www.smashingmagazine.com/2015/06/handling-difficult-client-conversations/" },
    ],
  },

{
    id: "m15", slug: "datos-para-no-data-scientists", title: "Datos para no data scientists",
    description: "Cómo leer, interpretar y usar datos para tomar mejores decisiones en cualquier área de una agencia, sin necesitar ser analista.",
    month: "Mes 8", level_required: 3, xp_reward: 250, lessons: 4, status: "available", theme: "Datos",
    opening: "Los datos no son el territorio de los analistas. Son una herramienta de cualquier persona que toma decisiones — y en una agencia, eso incluye a todo el mundo.",
    sections: [
      { heading: "La diferencia entre dato, métrica e insight", body: "Un dato es un hecho crudo. Una métrica es ese dato en contexto. Un insight es la interpretación que habilita una decisión. La mayoría de las conversaciones en agencias se quedan en datos y métricas y nunca llegan al insight.", extended_body: "El insight tiene tres condiciones: es no obvio, es accionable, y es relevante para quien decide. Un insight que el cliente no puede usar no es una herramienta de negocio.", example: { label: "Ejemplo real", content: "Una agencia reportaba costo por clic. Un analista junior propuso agregar conversión por dispositivo. Descubrieron que el 80% de clics venía de mobile pero convertía un tercio. El insight: el problema no era el tráfico sino la experiencia mobile. Ese hallazgo generó un proyecto de UX que multiplicó por tres el retorno publicitario." } },
      { heading: "Cómo detectar cuando los datos mienten", body: "Los datos pueden ser correctos y aun así llevar a conclusiones incorrectas. La correlación sin causalidad, las muestras sesgadas y los períodos mal elegidos producen decisiones equivocadas con datos correctos.", extended_body: "Cuatro preguntas antes de concluir algo: ¿la muestra es representativa? ¿El período de comparación tiene sentido? ¿La métrica mide lo que realmente importa? ¿Hay una explicación alternativa?" },
      { heading: "Métricas que importan vs. métricas de vanidad", body: "Las métricas de vanidad se ven bien en un reporte pero no conectan con ningún objetivo de negocio real. Las que importan son las que cambian cuando el negocio mejora o empeora.", extended_body: "En marketing digital, las métricas de vanidad más comunes son impresiones, seguidores y likes. Las que importan son: costo de adquisición de cliente, tasa de conversión por etapa del funnel y retorno sobre inversión publicitaria." },
      { heading: "Tomar decisiones con datos incompletos", body: "En el mundo real, raramente tenés todos los datos que querés antes de decidir. La habilidad es saber cuándo tenés suficiente información para actuar.", extended_body: "El framework: definir qué decisión hay que tomar y cuándo, identificar qué dato adicional cambiaría la decisión, estimar el costo de esperar, y decidir con lo que hay documentando los supuestos." },
    ],
    exercise: "Tomá el último reporte que presentaste o recibiste. ¿Cuántos datos son métricas de vanidad? ¿Cuáles generan una decisión? Reescribí el resumen en tres líneas con solo los datos accionables.",
    takeaway: "Los datos no toman decisiones. Las personas con criterio toman decisiones con datos.",
    quiz: { question: "¿Qué diferencia un insight de una métrica?", options: ["El insight usa más datos", "El insight es más preciso", "El insight es una interpretación accionable que habilita una decisión", "El insight solo lo puede producir un analista"], correct: 2, explanation: "Un insight no es solo un dato en contexto — es una comprensión que lleva a una acción concreta." },
    resources: [
      { type: "video", title: "How to Make Data More Human", author: "Jer Thorp · TED", description: "Cómo visualizar y comunicar datos de manera que las personas los entiendan y actúen sobre ellos.", url: "https://www.ted.com/talks/jer_thorp_make_data_more_human" },
      { type: "tool", title: "Google Looker Studio", author: "Google", description: "Herramienta gratuita para crear dashboards y visualizaciones de datos conectadas a fuentes reales.", url: "https://lookerstudio.google.com" },
    ],
  },

{
    id: "m16", slug: "tendencias-que-importan", title: "Tendencias que importan: cómo leer el futuro sin adivinar",
    description: "Un método para identificar señales débiles, separar tendencias reales de modas pasajeras y convertir ese conocimiento en ventaja competitiva.",
    month: "Mes 8", level_required: 3, xp_reward: 250, lessons: 4, status: "available", theme: "Datos",
    opening: "Hablar de tendencias es fácil. Identificar cuáles son realmente relevantes para tu negocio, cuáles van a durar y cuáles son solo ruido del momento es una habilidad completamente diferente.",
    sections: [
      { heading: "Señales débiles vs. tendencias establecidas", body: "Una tendencia establecida ya está en todos los decks — si la incluís ahora, llegaste tarde. Las señales débiles son los primeros indicios de un cambio antes de que se vuelva mainstream.", extended_body: "Las señales débiles aparecen en los bordes: comunidades de nicho, comportamientos de early adopters, cambios regulatorios menores, tecnologías prematuras. La habilidad de detectarlas requiere amplitud de fuentes y el hábito de preguntarse 'si esto escala, qué cambia'.", example: { label: "Ejemplo real", content: "En 2019 varias agencias notaron que sus clientes recibían cada vez más preguntas sobre el origen de ingredientes. Las que lo detectaron como señal débil incorporaron narrativas de transparencia dos años antes de que se volviera exigencia del mercado. Sus clientes llegaron preparados; los demás tuvieron que reaccionar." } },
      { heading: "El framework STEEP para leer el entorno", body: "STEEP (Social, Tecnológico, Económico, Ecológico, Político) es un marco para escanear el entorno de manera sistemática y asegurarse de no quedar atrapado en una sola dimensión.", extended_body: "Aplicado a comunicación en 2025: Social — cambio en atención y ascenso de micro-comunidades. Tecnológico — IA generativa transformando producción de contenido. Económico — presión sobre márgenes. Ecológico — regulaciones ESG. Político — privacidad y datos redefiniendo el targeting." },
      { heading: "Separar moda de tendencia", body: "No toda novedad es una tendencia. El metaverso fue presentado como inevitable — y resultó ser moda. La IA generativa está transformando estructuralmente la producción de contenido. ¿Cómo distinguirlos?", extended_body: "Tres preguntas: ¿resuelve un problema real? ¿Hay adopción fuera de early adopters? ¿Cambia la economía de algo? Si reduce costos, crea nuevos modelos o redistribuye poder en una industria, es tendencia. Si solo cambia la forma — es moda." },
      { heading: "Convertir tendencias en oportunidades de negocio", body: "Identificar una tendencia relevante es el primer paso. El segundo — mucho más escaso — es convertirla en una propuesta concreta para un cliente o en un producto propio.", extended_body: "El proceso: definir qué problema hace más urgente la tendencia, identificar qué capacidad propia es más relevante dado ese contexto, formular una propuesta específica, y testear con un cliente early adopter antes de escalar." },
    ],
    exercise: "Elegí una tendencia mencionada en tu industria. Pasala por el filtro de las tres preguntas (¿problema real?, ¿adopción amplia?, ¿cambia la economía?) y evaluá si es moda o tendencia. Si es tendencia, escribí cómo capitalizarla en seis meses.",
    takeaway: "Ver una tendencia antes que los demás vale poco si no podés convertirla en una propuesta concreta.",
    quiz: { question: "¿Cuál es una señal de que algo es tendencia y no moda?", options: ["Aparece en todos los decks de la industria", "Resuelve un problema real y cambia la economía de algo", "Tiene mucha cobertura en medios especializados", "Es adoptada primero por grandes marcas"], correct: 1, explanation: "Las tendencias duraderas resuelven fricciones reales y cambian la estructura económica de una industria." },
    resources: [
      { type: "tool", title: "Google Trends", author: "Google", description: "Herramienta gratuita para detectar tendencias de búsqueda y señales de interés emergente en cualquier tema.", url: "https://trends.google.com" },
      { type: "article", title: "How to Read Megatrends", author: "McKinsey Global Institute", description: "Framework gratuito de McKinsey para identificar y analizar tendencias de largo plazo.", url: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights" },
    ],
  },

{
    id: "m17", slug: "metodologias-agiles-agencias", title: "Metodologías ágiles aplicadas a agencias",
    description: "Cómo adaptar principios de Scrum, Kanban y trabajo iterativo al contexto de una agencia creativa para entregar mejor y con menos desgaste.",
    month: "Mes 9", level_required: 3, xp_reward: 260, lessons: 4, status: "available", theme: "Operaciones",
    opening: "Las metodologías ágiles nacieron en el mundo del software, pero sus principios aplican a cualquier equipo que trabaja con información incompleta, clientes que cambian de opinión y proyectos que evolucionan.",
    sections: [
      { heading: "El problema con el waterfall en agencias", body: "El modelo waterfall — brief, propuesta, aprobación, producción, entrega — funciona cuando los requerimientos están perfectamente definidos al inicio. Eso casi nunca ocurre en una agencia.", extended_body: "El costo del waterfall es concreto: equipos creativos produciendo en vacío sin feedback intermedio, clientes que ven el trabajo por primera vez cuando ya está casi terminado, y presupuestos que se consumen en retrabajo.", example: { label: "Ejemplo real", content: "Una agencia de diseño trabajó tres semanas en una identidad de marca. En la primera presentación, el cliente reveló que su propuesta de valor había pivotado dos semanas antes. Al adoptar check-ins semanales, empezaron a detectar esos cambios en la semana uno, no en la semana tres." } },
      { heading: "Scrum para proyectos creativos: lo que sirve y lo que no", body: "Scrum propone ciclos cortos de entrega, reuniones de sincronización y roles específicos. No todo aplica directamente a una agencia, pero la lógica de ciclos cortos con feedback integrado es transformadora.", extended_body: "Lo que funciona: sprints de 1-2 semanas con un entregable concreto al final, la retrospectiva para aprender de cada ciclo, y el backlog para visibilidad. Lo que no funciona directamente: el daily técnico, la estimación en puntos de historia, y los roles que requieren adaptación." },
      { heading: "Kanban: visibilidad del trabajo en tiempo real", body: "Kanban es más simple que Scrum y más fácil de adoptar en una agencia. Su principio central es visualizar todo el trabajo en curso, limitar las tareas en cada etapa y mover el trabajo de forma continua.", extended_body: "Un tablero básico para agencia tiene cinco columnas: Backlog, En preparación, En producción, En revisión, y Entregado. La regla de oro: no puede haber más de N elementos en cada columna al mismo tiempo." },
      { heading: "Entregas incrementales: el cambio cultural más difícil", body: "Mostrar trabajo sin terminar va contra la cultura de muchas agencias, donde el estándar es presentar algo pulido. Pero mostrar borradores tempranos permite detectar problemas antes de que sean costosos.", extended_body: "La resistencia se supera con expectativas claras al inicio: 'en las semanas 1 y 2 vas a ver conceptos en borrador — su objetivo es validar dirección, no aprobar ejecución'. Esa frase cambia completamente la dinámica." },
    ],
    exercise: "Tomá un proyecto actual y mapealo en un tablero Kanban con las cinco columnas. ¿Dónde se acumula el trabajo? ¿Qué cambiarías si pudieras empezar de cero?",
    takeaway: "La agilidad no acelera la creatividad — reduce el costo del error y acorta el tiempo entre tener una idea y saber si funciona.",
    quiz: { question: "¿Cuál es el principal beneficio de las entregas incrementales en proyectos de agencia?", options: ["Reducen el tiempo total del proyecto a la mitad", "Permiten detectar problemas antes de que sean costosos de corregir", "Eliminan la necesidad de un brief detallado", "Hacen que el cliente se involucre menos"], correct: 1, explanation: "Las entregas incrementales hacen el proyecto más seguro — los problemas se detectan cuando todavía son fáciles y baratos de corregir." },
    resources: [
      { type: "video", title: "Agile Product Ownership in a Nutshell", author: "Henrik Kniberg · YouTube", description: "El video más visto sobre metodologías ágiles. 15 minutos que explican Scrum de manera visual y muy clara.", url: "https://www.youtube.com/watch?v=502ILHjX9EE" },
      { type: "tool", title: "Trello — Tablero Kanban gratuito", author: "Trello", description: "La herramienta más simple para implementar un tablero Kanban en un equipo de agencia.", url: "https://trello.com" },
    ],
  },

{
    id: "m18", slug: "gestion-del-tiempo-creativo", title: "Gestión del tiempo en equipos creativos",
    description: "Cómo organizar el trabajo propio y del equipo para que la energía creativa se enfoque en lo que realmente genera valor.",
    month: "Mes 9", level_required: 3, xp_reward: 260, lessons: 4, status: "available", theme: "Operaciones",
    opening: "El tiempo en una agencia es el único recurso que no se puede recuperar ni comprar de más. Pero la mayoría de los equipos creativos lo gestionan de manera reactiva.",
    sections: [
      { heading: "El mito de la multitarea creativa", body: "Las personas creativas suelen creer que son buenas en multitasking. La neurociencia dice lo contrario: la atención dividida reduce la calidad del output creativo de manera significativa.", extended_body: "El 'deep work' — trabajo profundo — es el estado de concentración en el que se produce el trabajo más valioso. En una agencia, ese estado es constantemente interrumpido. La solución no es eliminar las interrupciones — es proteger activamente bloques de tiempo donde no ocurren." },
      { heading: "Priorización: la habilidad que nadie enseña", body: "Tener una lista larga de tareas no es lo mismo que saber cuál hacer primero. La priorización efectiva requiere distinguir entre urgente e importante.", extended_body: "La matriz de Eisenhower: urgente e importante (hacer ahora), importante pero no urgente (planificar — aquí está el mayor valor), urgente pero no importante (delegar), ni urgente ni importante (eliminar).", example: { label: "Ejemplo real", content: "Un director creativo implementó una regla: las primeras dos horas del día eran intocables para trabajo de concepto. Tres meses después, la calidad de propuestas mejoró notablemente. El tiempo 'perdido' se recuperaba con creces en retrabajo evitado." } },
      { heading: "Reuniones: el mayor destructor de tiempo en agencias", body: "Las reuniones son necesarias. Pero en la mayoría de las agencias, son demasiadas, demasiado largas y sin agenda ni dueño claro.", extended_body: "Tres reglas: toda reunión tiene un objetivo específico y un decisor. La duración default es 25 minutos, no una hora. Toda reunión termina con tres elementos anotados: qué se decidió, quién hace qué y para cuándo." },
      { heading: "Tiempo para innovar dentro de la operación", body: "Si todo el tiempo de un equipo está consumido por la operación diaria, no hay espacio para la mejora. Las organizaciones que innovan de manera sostenida crean las condiciones para que ese espacio exista.", extended_body: "Modelos concretos: 10% de tiempo libre, sprints de innovación trimestrales, viernes sin reuniones. Ninguno es mágico — todos requieren disciplina y respaldo de liderazgo para sostenerse." },
    ],
    exercise: "Registrá tu tiempo durante tres días en bloques de 30 minutos. Clasificá cada actividad según la matriz de Eisenhower. ¿Qué porcentaje fue a cada cuadrante? ¿Qué cambiarías?",
    takeaway: "No es que no tengas tiempo. Es que todavía no decidiste qué no hacer.",
    quiz: { question: "¿Qué cuadrante de la matriz de Eisenhower genera más valor a largo plazo?", options: ["Urgente e importante", "Urgente pero no importante", "Importante pero no urgente", "Ni urgente ni importante"], correct: 2, explanation: "El cuadrante de importante pero no urgente es donde se construye el valor diferencial. Pero es también el que más fácilmente se sacrifica frente a la urgencia diaria." },
    resources: [
      { type: "video", title: "Inside the Mind of a Master Procrastinator", author: "Tim Urban · TED", description: "Por qué nos cuesta priorizar lo importante sobre lo urgente, explicado con humor.", url: "https://www.ted.com/talks/tim_urban_inside_the_mind_of_a_master_procrastinator" },
      { type: "tool", title: "Toggl Track — Registro de tiempo gratuito", author: "Toggl", description: "La herramienta más simple para registrar cómo se usa el tiempo en el trabajo.", url: "https://toggl.com/track/" },
    ],
  },

{
    id: "m19", slug: "storytelling-de-marca", title: "Storytelling de marca: construir narrativas que conectan",
    description: "Los principios del storytelling aplicados a la construcción de marca y comunicación, para que el mensaje sea memorable y genere acción.",
    month: "Mes 10", level_required: 4, xp_reward: 280, lessons: 4, status: "available", theme: "Creatividad",
    opening: "Las personas no recuerdan datos — recuerdan historias. Una marca que solo comunica atributos compite con precio. Una marca que cuenta una historia relevante crea una relación que va más allá de la transacción.",
    sections: [
      { heading: "La estructura que toda historia necesita", body: "Las historias que funcionan comparten una estructura: hay un protagonista, hay un conflicto, hay una transformación. Sin esos tres elementos, hay información, no historia.", extended_body: "El error más común es poner a la marca como protagonista. Las mejores campañas ponen al consumidor como protagonista — la marca es el aliado. Nike no cuenta la historia de sus zapatillas — cuenta la historia de personas que superan sus límites.", example: { label: "Ejemplo real", content: "Una agencia trabajaba para una marca de seguros que quería diferenciarse. En lugar de comunicar cobertura y precio, desarrollaron campañas basadas en historias reales de personas que pudieron empezar de nuevo. El share of voice subió 23 puntos en seis meses." } },
      { heading: "El conflicto como motor de la narrativa", body: "Sin tensión, no hay historia. Las marcas que evitan el conflicto producen mensajes tibios que nadie recuerda. Las que nombran el dolor real de sus consumidores crean conexiones genuinas.", extended_body: "El conflicto puede ser externo (un problema del mundo), interno (una tensión emocional del consumidor) o filosófico (una creencia sobre cómo debería ser algo). La pregunta clave: ¿qué siente el consumidor cuando el problema que mi marca resuelve está presente?" },
      { heading: "Coherencia narrativa a través del tiempo", body: "El storytelling de marca no es una campaña — es una narrativa que se construye a lo largo del tiempo. Las marcas que cambian su narrativa con cada campaña no construyen — reinician.", extended_body: "La coherencia narrativa requiere un documento que la organización usa como brújula: el brand story. Este documento no describe qué vende la marca — describe qué cree la marca, a quién representa y qué transformación propone." },
      { heading: "Storytelling interno: comunicación que mueve equipos", body: "El storytelling no es solo para clientes externos. Las organizaciones que comunican su propósito a través de historias generan más compromiso y más alineación que las que usan memos y PowerPoints.", extended_body: "Las historias internas más efectivas muestran comportamientos deseados en acción — no describen valores en abstracto. Contar la historia de alguien que tomó una decisión difícil y coherente con los valores es infinitamente más poderoso que enlistar los valores en una pared." },
    ],
    exercise: "Elegí una marca. Identificá su protagonista (consumidor, no marca), su conflicto central y la transformación que propone. Reescribí su tagline usando la estructura protagonista-conflicto-transformación.",
    takeaway: "Las personas no recuerdan qué les dijiste. Recuerdan cómo las hiciste sentir con lo que contaste.",
    quiz: { question: "¿Quién debe ser el protagonista en el storytelling de marca?", options: ["La marca y sus valores", "El fundador de la empresa", "El consumidor y su transformación", "El producto y sus atributos"], correct: 2, explanation: "Las marcas más efectivas ponen al consumidor como protagonista. La marca es el aliado que ayuda a superar el conflicto y lograr la transformación." },
    resources: [
      { type: "video", title: "The Clues to a Great Story", author: "Andrew Stanton · TED", description: "El director de Toy Story explica los principios del storytelling que hacen que una historia funcione.", url: "https://www.ted.com/talks/andrew_stanton_the_clues_to_a_great_story" },
      { type: "video", title: "The Magical Science of Storytelling", author: "David JP Phillips · TEDx", description: "La neurociencia detrás del storytelling — qué pasa en el cerebro cuando escuchamos una buena historia.", url: "https://www.youtube.com/watch?v=Nj-hdQMa3uA" },
    ],
  },

{
    id: "m20", slug: "creatividad-bajo-presion", title: "Creatividad bajo presión: cómo pensar mejor cuando el tiempo es corto",
    description: "Técnicas y frameworks para generar ideas de calidad en poco tiempo y mantener el nivel creativo en contextos de alta demanda.",
    month: "Mes 10", level_required: 4, xp_reward: 280, lessons: 4, status: "available", theme: "Creatividad",
    opening: "La creatividad no espera las condiciones perfectas. En una agencia, las mejores ideas a veces nacen con dos horas de plazo, un brief incompleto y un equipo cansado. La diferencia entre los equipos que sostienen calidad bajo presión y los que no no es talento — es método.",
    sections: [
      { heading: "Las restricciones como combustible creativo", body: "Paradójicamente, las restricciones activan la creatividad. Cuando el presupuesto es ilimitado y el tiempo no importa, las posibilidades son infinitas y paralizantes.", extended_body: "Hay evidencia de que las restricciones moderadas mejoran el output creativo. Eliminan el espacio de posibilidades obvias y fuerzan a explorar territorios menos transitados.", example: { label: "Ejemplo real", content: "Una agencia recibió un brief con presupuesto insuficiente para producción audiovisual. Trataron el presupuesto como la restricción que definiría el concepto. La campaña fue completamente basada en UGC. El costo fue un décimo del promedio y el engagement cinco veces superior al benchmark." } },
      { heading: "Técnicas de ideación rápida", body: "El brainstorming clásico produce resultados mediocres. La ideación individual seguida de síntesis grupal produce ideas más diversas y de mayor calidad.", extended_body: "Cuatro técnicas: brainwriting (ideas individuales que se pasan y construyen), SCAMPER (Sustituir, Combinar, Adaptar, Modificar, Poner en otros usos, Eliminar, Reordenar), random input (conexiones forzadas con elementos aleatorios), y el peor resultado posible (invertir la solución negativa)." },
      { heading: "Trabajar con un brief incompleto", body: "El brief perfecto es una fantasía. Saber trabajar con información incompleta — hacer los supuestos correctos e identificar qué preguntas son críticas — es una habilidad diferencial.", extended_body: "El protocolo: identificar el único elemento que no puede estar mal, listar los supuestos explícitamente, definir qué información adicional cambiaría completamente la dirección, y establecer un punto de validación temprana." },
      { heading: "Sostener el nivel creativo en el tiempo", body: "La creatividad sostenida requiere inputs sistemáticos: referencias diversas, experiencias fuera de la industria, contacto con personas con perspectivas radicalmente distintas.", extended_body: "Tres hábitos: referencias cruzadas de industria, diario de observaciones, y proyectos personales sin cliente ni deadline — activan una creatividad diferente que contamina positivamente el trabajo profesional." },
    ],
    exercise: "Tomá un brief actual y aplicá la técnica de SCAMPER. Para cada letra generá al menos una idea. Identificá cuál perspectiva te dio la idea más interesante y reflexioná por qué.",
    takeaway: "La creatividad no es un talento que tenés o no tenés. Es un músculo que se entrena y un método que se aprende.",
    quiz: { question: "¿Por qué las restricciones pueden activar la creatividad?", options: ["Porque reducen el tiempo necesario", "Porque eliminan las posibilidades obvias y fuerzan a explorar territorios menos transitados", "Porque hacen el trabajo más fácil de evaluar", "Porque reducen el número de personas involucradas"], correct: 1, explanation: "Las restricciones moderadas mejoran el output creativo porque eliminan las soluciones obvias y fuerzan al cerebro a encontrar caminos alternativos." },
    resources: [
      { type: "video", title: "Your Elusive Creative Genius", author: "Elizabeth Gilbert · TED", description: "Una nueva manera de pensar sobre la creatividad que reduce el bloqueo y aumenta la producción.", url: "https://www.ted.com/talks/elizabeth_gilbert_your_elusive_creative_genius" },
      { type: "tool", title: "SCAMPER Technique Guide", author: "MindTools", description: "Guía gratuita completa sobre la técnica SCAMPER para generar ideas bajo presión.", url: "https://www.mindtools.com/aix3bol/scamper" },
    ],
  },

{
    id: "m21", slug: "propuesta-de-valor", title: "Construir una propuesta de valor que el cliente entienda en 30 segundos",
    description: "Cómo articular con claridad qué hace tu agencia, para quién y por qué es diferente, de manera que resuene inmediatamente.",
    month: "Mes 11", level_required: 4, xp_reward: 300, lessons: 4, status: "available", theme: "Estrategia",
    opening: "La mayoría de las agencias no saben explicar con claridad qué hacen y por qué son diferentes. Sus sitios web hablan de 'soluciones integrales' y 'creatividad estratégica' — frases que podrían describir a cualquier agencia del mundo.",
    sections: [
      { heading: "El problema con las propuestas de valor genéricas", body: "Cuando una propuesta de valor podría aplicar a tu competencia directa, no es una propuesta de valor — es ruido. Las propuestas genéricas nacen del miedo a excluir.", extended_body: "La paradoja: mientras más específica es una propuesta de valor, más resuena — aunque excluya. Una agencia que dice 'somos especialistas en comunicación para empresas de tecnología B2B en etapa de crecimiento' excluye a muchos — pero para quienes sí aplica, parece exactamente lo que necesitan.", example: { label: "Ejemplo real", content: "Una agencia de comunicación interna reformuló su propuesta de 'especialistas en comunicación corporativa' a 'ayudamos a empresas en procesos de cambio organizacional a alinear a sus equipos con la nueva dirección estratégica'. La tasa de conversión de reuniones a propuesta subió del 30% al 65% en seis meses." } },
      { heading: "Los tres elementos de una propuesta de valor clara", body: "Una propuesta efectiva responde tres preguntas en una oración: ¿qué hacés? ¿para quién? ¿cuál es el resultado que genera?", extended_body: "La fórmula: 'Ayudamos a [segmento específico] a [resultado concreto] a través de [capacidad diferencial]'. Esa estructura responde las tres preguntas y genera la sensación de que la agencia entiende el problema del cliente." },
      { heading: "Diferenciación real vs. diferenciación percibida", body: "Hay dos tipos de diferenciación. La real es una capacidad que genuinamente distingue a la agencia. La percibida es cómo se comunica esa diferencia. Tener diferenciación real sin comunicarla es tan inefectivo como no tenerla.", extended_body: "Las fuentes de diferenciación más difíciles de replicar: especialización sectorial profunda, metodología propia, talento específico, y relaciones con acceso diferencial." },
      { heading: "Validar la propuesta de valor con clientes reales", body: "Una propuesta de valor no se construye en una sala de reuniones — se valida con los clientes que la reciben. Las mejores propuestas suelen surgir de escuchar cómo los clientes actuales describen el valor que reciben.", extended_body: "El método más simple: entrevistar a cinco clientes con la pregunta '¿cómo nos describirías a alguien que no nos conoce?'. Las palabras que repiten son la propuesta de valor que ya existe en la percepción del mercado." },
    ],
    exercise: "Escribí la propuesta de valor de tu agencia usando la fórmula 'Ayudamos a [segmento] a [resultado] a través de [capacidad]'. Mostrásela a tres personas y preguntales si en 30 segundos entienden para quién es y qué la hace diferente.",
    takeaway: "Si no podés explicar en 30 segundos por qué alguien debería contratarte a vos y no a tu competencia, esa es la primera innovación que necesitás hacer.",
    quiz: { question: "¿Por qué una propuesta de valor más específica suele ser más efectiva?", options: ["Porque requiere menos palabras", "Porque excluye a los competidores", "Porque genera más confianza en las personas para quienes es relevante", "Porque es más fácil de recordar"], correct: 2, explanation: "La especificidad genera confianza. Cuando una propuesta describe exactamente el problema del interlocutor, ese interlocutor siente que la agencia los entiende." },
    resources: [
      { type: "video", title: "How to Find Your Positioning", author: "The Futur · YouTube", description: "Chris Do explica cómo construir una propuesta de valor diferenciada para una agencia creativa.", url: "https://www.youtube.com/watch?v=LBsIBVVFNlo" },
      { type: "tool", title: "Value Proposition Canvas", author: "Strategyzer", description: "Herramienta gratuita para construir y validar una propuesta de valor que conecte con las necesidades reales del cliente.", url: "https://www.strategyzer.com/library/the-value-proposition-canvas" },
    ],
  },

{
    id: "m22", slug: "innovacion-en-modelo-de-negocio", title: "Innovar el modelo de negocio de tu agencia",
    description: "Cómo identificar oportunidades para generar ingresos más allá del fee por hora y construir fuentes de valor más sostenibles y escalables.",
    month: "Mes 11", level_required: 4, xp_reward: 300, lessons: 4, status: "available", theme: "Estrategia",
    opening: "El modelo de fee por hora que domina la industria de agencias tiene un problema estructural: limita el ingreso al tiempo disponible y desconecta la remuneración del valor generado.",
    sections: [
      { heading: "El problema del fee por hora", body: "Cuando una agencia cobra por hora, tiene un incentivo perverso: cuanto más tarda, más cobra. Y el cliente tiene el incentivo opuesto. Esa tensión hace que la conversación siempre termine en precio y nunca en valor.", extended_body: "Tres problemas adicionales: limita el crecimiento al número de horas disponibles, penaliza la eficiencia (producir en menos tiempo cobra menos), y desconecta la remuneración del impacto real.", example: { label: "Ejemplo real", content: "Una agencia de performance propuso a un cliente cambiar de fee fijo a comisión sobre el retorno publicitario. El cliente pagó más que con el fee anterior — pero multiplicó por cuatro su ROI. Renovaron el modelo por dos años." } },
      { heading: "Modelos alternativos: retainer de valor, éxito compartido y productos propios", body: "Existen al menos tres alternativas. El retainer de valor cobra precio fijo atado a resultados. El éxito compartido cobra en proporción al impacto. Los productos propios generan ingresos independientes del tiempo del equipo.", extended_body: "El retainer requiere métricas claras y confianza para defender el precio. El éxito compartido requiere datos de negocio del cliente. Los productos propios requieren inversión inicial y disciplina de producto." },
      { heading: "Cómo proponer un modelo diferente sin perder la cuenta", body: "Cambiar el modelo con un cliente existente es difícil porque toca la estructura económica de la relación. La clave es enmarcarlo como alineación de intereses.", extended_body: "El script: 'Queremos proponer una forma de trabajar que alinee mejor nuestros incentivos con tus resultados. En lugar de tiempo, nuestra remuneración estaría vinculada a [métrica de resultado]'. Eso convierte la conversación en valor compartido, no en costos." },
      { heading: "El camino hacia un producto propio", body: "Toda agencia tiene metodologías y conocimientos que podría empaquetar y vender de manera independiente al trabajo proyecto-a-proyecto.", extended_body: "Las preguntas para identificar el producto propio: ¿qué pedido recibimos repetidamente? ¿Qué hacemos que los clientes no podrían hacer solos? ¿Qué conocimiento acumulamos que otros pagarían por tener?" },
    ],
    exercise: "Identificá el servicio de mayor valor que tu agencia entrega frecuentemente. Diseñá una versión empaquetada con: nombre, descripción en dos líneas, precio fijo, entregable específico y métrica de éxito.",
    takeaway: "El modelo de negocio de una agencia no es un dato fijo — es una decisión que puede innovarse como cualquier otra parte del negocio.",
    quiz: { question: "¿Cuál es el problema estructural principal del fee por hora?", options: ["Es difícil de administrar internamente", "Desconecta la remuneración del valor generado y penaliza la eficiencia", "No permite cobrar proyectos grandes", "Requiere demasiada supervisión del cliente"], correct: 1, explanation: "El fee por hora desconecta el precio del impacto y crea un incentivo perverso. Los modelos orientados a valor alinean la remuneración con los resultados." },
    resources: [
      { type: "video", title: "Business Model Innovation", author: "Strategyzer · YouTube", description: "Cómo las empresas más exitosas innovan en su modelo de negocio en lugar de solo en su producto.", url: "https://www.youtube.com/watch?v=wlKP-BaC0jA" },
      { type: "article", title: "Moving From Hourly to Value-Based Pricing", author: "AIGA", description: "Artículo gratuito de la asociación de diseño más grande del mundo sobre cómo transicionar del fee por hora a modelos de valor.", url: "https://www.aiga.org/resources/how-to-set-design-prices-and-rates" },
    ],
  },

{
    id: "m23", slug: "equipos-de-alto-rendimiento", title: "Construir y sostener equipos de alto rendimiento",
    description: "Qué condiciones hacen que un equipo creativo funcione en su mejor nivel y cómo generarlas aunque no tengas el cargo de líder.",
    month: "Mes 12", level_required: 4, xp_reward: 320, lessons: 4, status: "available", theme: "Liderazgo avanzado",
    opening: "Un equipo de alto rendimiento no se declara — se construye. Y no se construye contratando talento estelar: se construye creando las condiciones en las que personas buenas pueden hacer su mejor trabajo.",
    sections: [
      { heading: "Las cinco disfunciones de un equipo", body: "Patrick Lencioni identificó cinco disfunciones: falta de confianza, miedo al conflicto, falta de compromiso, evitación de responsabilidad y falta de atención a los resultados. La base de todo es la confianza.", extended_body: "En agencias, las disfunciones más comunes son las dos primeras. La falta de confianza produce personas que se protegen en lugar de colaborar. El miedo al conflicto produce reuniones donde todos asienten y decisiones que nadie defiende de verdad.", example: { label: "Ejemplo real", content: "Un equipo de estrategia y creativo siempre llegaba a acuerdos rápidos — pero los proyectos generaban retrabajos costosos. El equipo tenía dudas pero no las expresaba por miedo al conflicto. Implementaron una regla: antes de aprobar cualquier brief, cada persona debía plantear al menos una objeción. Los retrabajos bajaron un 60%." } },
      { heading: "Feedback como práctica, no como evento", body: "El feedback en la mayoría de las organizaciones ocurre en las evaluaciones anuales — un evento formal que llega demasiado tarde. Los equipos de alto rendimiento lo convierten en práctica cotidiana.", extended_body: "El feedback efectivo es específico, oportuno, bidireccional y accionable. No 'buen trabajo' sino 'el insight que encontraste en el brief fue lo que diferenció la propuesta'." },
      { heading: "Diversidad como ventaja creativa", body: "Los equipos homogéneos producen soluciones homogéneas. La diversidad de experiencias, perspectivas y maneras de pensar genera fricciones productivas que llevan a soluciones más creativas.", extended_body: "La diversidad más valiosa en un equipo creativo no es solo la demográfica — es la de perspectiva. Alguien que vino de la salud piensa diferente a alguien que creció en publicidad." },
      { heading: "Cómo contribuir al equipo sin tener el cargo", body: "El alto rendimiento no es responsabilidad exclusiva del líder formal. Cada miembro puede contribuir a las condiciones que hacen que el equipo funcione mejor.", extended_body: "Tres comportamientos que cualquier miembro puede adoptar: nombrar lo que nadie dice, compartir el crédito explícitamente, y pedir feedback proactivamente — lo que modela el comportamiento para el resto del equipo." },
    ],
    exercise: "Evaluá tu equipo usando las cinco disfunciones. Asignales puntuación del 1 al 5. Identificá la más baja y escribí una acción concreta que podés tomar esta semana para empezar a mejorarla.",
    takeaway: "El mejor equipo no es el que tiene los mejores individuos — es el que tiene las mejores condiciones para que personas buenas hagan su mejor trabajo.",
    quiz: { question: "Según Lencioni, ¿cuál es la base de las cinco disfunciones de un equipo?", options: ["La falta de resultados claros", "La falta de confianza", "El exceso de conflicto", "La falta de un líder fuerte"], correct: 1, explanation: "La falta de confianza es la disfunción base. Sin ella, el equipo no puede tener conflictos productivos, comprometerse con decisiones ni enfocarse en resultados colectivos." },
    resources: [
      { type: "video", title: "What Makes a Good Team? Google's Research", author: "re:Work by Google · YouTube", description: "Los resultados del Proyecto Aristóteles de Google — la investigación más completa sobre qué hace que un equipo funcione bien.", url: "https://www.youtube.com/watch?v=hHIikHJV9fI" },
      { type: "article", title: "The Five Dysfunctions of a Team", author: "Patrick Lencioni · The Table Group", description: "Resumen gratuito oficial de las cinco disfunciones con el modelo completo y preguntas de diagnóstico.", url: "https://www.tablegroup.com/topics-and-resources/teamwork-5-dysfunctions/" },
    ],
  },

{
    id: "m24", slug: "tu-carrera-como-proyecto-de-innovacion", title: "Tu carrera como proyecto de innovación",
    description: "Cómo aplicar todos los principios de Bamboo a la gestión consciente de tu propio desarrollo profesional para crecer con intención.",
    month: "Mes 12", level_required: 4, xp_reward: 320, lessons: 4, status: "available", theme: "Liderazgo avanzado",
    opening: "El módulo de cierre es una invitación a convertir todo lo que recorriste en Bamboo en una estrategia concreta para tu desarrollo profesional. Tu carrera no es algo que te pasa — es algo que diseñás.",
    sections: [
      { heading: "El autoconocimiento como punto de partida", body: "Antes de diseñar hacia dónde querés ir, necesitás entender de dónde venís: cuáles son tus fortalezas reales, qué tipo de trabajo te genera energía, y cuáles son los patrones en los momentos en que hacés tu mejor trabajo.", extended_body: "La pregunta más honesta: ¿en qué momento del trabajo perdiste la noción del tiempo porque estabas completamente absorbido? Esa es la señal más confiable de dónde están tus fortalezas reales.", example: { label: "Ejemplo real", content: "Una ejecutiva de cuentas llevaba cinco años sintiéndose promedio. Su director le preguntó en qué momento sentía más energía. Sin dudar, respondió: cuando tenía que explicarle la estrategia al cliente y verlo entender. Tres años después era directora de estrategia." } },
      { heading: "Diseñar el próximo movimiento con criterio", body: "Los movimientos de carrera más valiosos no siempre son los ascensos lineales. A veces el más estratégico es un cambio lateral que agrega una capacidad nueva.", extended_body: "Tres tipos de movimiento: vertical (ascenso — suma autoridad), lateral (cambio de función — suma perspectiva), y de profundidad (especialización — suma expertise diferencial). Los mejores perfiles combinan los tres." },
      { heading: "Construir visibilidad sin perder autenticidad", body: "En la economía del conocimiento, ser bueno no es suficiente — también tiene que saberse. La visibilidad no es autopromoción vacía: es hacer visible el valor que generás.", extended_body: "Tres formas de construir visibilidad que generan valor real: compartir aprendizajes, hacer visible el trabajo de otros, y tomar proyectos con audiencia fuera de tu equipo directo." },
      { heading: "El compromiso de Bamboo: de aquí en adelante", body: "Bamboo no termina con este módulo. Termina cuando lo que aprendiste se convierte en acción sostenida — en mejoras reales en cómo trabajás, en proyectos que antes no habrías propuesto.", extended_body: "El compromiso más poderoso que podés tomar no es leer más sobre innovación — es elegir una cosa concreta que vas a hacer diferente la próxima semana. La innovación vive en las pequeñas decisiones cotidianas de las personas que decidieron elevar su propio nivel." },
    ],
    exercise: "Completá tu plan de desarrollo personal Bamboo: una fortaleza que querés desarrollar en seis meses, un movimiento de carrera a explorar, una acción de visibilidad para este mes, y una cosa concreta que vas a hacer diferente la próxima semana.",
    takeaway: "Tu carrera es el proyecto de innovación más importante que vas a gestionar en tu vida. Tratala como tal.",
    quiz: { question: "¿Cuál de estos movimientos de carrera suma principalmente perspectiva y nuevas capacidades?", options: ["El movimiento vertical", "El movimiento lateral", "El movimiento de profundidad", "El movimiento de consolidación"], correct: 1, explanation: "El movimiento lateral — cambiar de función o industria manteniendo el nivel — suma perspectiva y capacidades diversas para ampliar el repertorio." },
    resources: [
      { type: "video", title: "How to Know Your Life Purpose in 5 Minutes", author: "Adam Leipzig · TEDx", description: "El ejercicio más simple para identificar el propósito profesional.", url: "https://www.youtube.com/watch?v=vVsXO9brK7M" },
      { type: "video", title: "Why the Secret to Success is Setting the Right Goals", author: "John Doerr · TED", description: "El sistema OKR explicado por quien lo introdujo en Google. Aplicable al diseño de carrera.", url: "https://www.ted.com/talks/john_doerr_why_the_secret_to_success_is_setting_the_right_goals" },
    ],
  },

{
    id: "m25", slug: "neurociencia-del-aprendizaje", title: "Neurociencia del aprendizaje: cómo el cerebro cambia con la práctica",
    description: "Qué dice la ciencia sobre cómo aprendemos de verdad y cómo aplicarlo para que Bamboo (y cualquier aprendizaje) se convierta en cambio real.",
    month: "Mes 13", level_required: 4, xp_reward: 340, lessons: 4, status: "available", theme: "Ciencia aplicada",
    opening: "Leer sobre innovación no te hace innovador. Escuchar una charla inspiradora no cambia cómo trabajás la semana siguiente. El aprendizaje real — el que transforma comportamientos — ocurre de una manera específica que la neurociencia lleva décadas estudiando. Entender ese mecanismo es la diferencia entre acumular información y desarrollar verdaderas capacidades.",
    sections: [
      { heading: "Cómo se forma un hábito en el cerebro", body: "El aprendizaje que dura no ocurre en una sesión de estudio — ocurre cuando el cerebro consolida una red neuronal a través de la repetición espaciada en el tiempo. Cada vez que practicás una habilidad con dificultad deseable, esa red se fortalece. Cada vez que repassás sin esfuerzo, se debilita.", extended_body: "La mielinización es el proceso por el cual las conexiones neuronales que se usan frecuentemente se recubren de una capa de mielina que las hace más rápidas y eficientes. Un pianista que practica durante años no solo sabe más sobre piano — su cerebro literalmente cambia. Lo mismo aplica a la habilidad de detectar fricciones, formular preguntas correctas o dar feedback constructivo: son redes neuronales que se construyen con práctica deliberada.", example: { label: "Ejemplo real", content: "Un equipo de strategy en una agencia implementó un ritual de 10 minutos al inicio de cada reunión: cada persona nombraba una fricción que había observado en la semana. Al principio costaba — nadie sabía bien qué buscar. Después de tres meses, el equipo detectaba fricciones en tiempo real durante las reuniones con clientes sin necesitar el ritual. La habilidad se había automatizado." } },
      { heading: "El error como maestro: por qué equivocarse acelera el aprendizaje", body: "El cerebro aprende más de los errores que de los aciertos. Cuando cometés un error y lo reconocés, el cerebro libera norepinefrina — un neurotransmisor que aumenta la atención y la plasticidad neuronal. Ese estado es óptimo para el aprendizaje.", extended_body: "La teoría del aprendizaje por error sugiere que el cerebro hace predicciones constantes sobre lo que va a pasar. Cuando la realidad no coincide con la predicción, hay un error de predicción que fuerza al cerebro a actualizar su modelo del mundo. Por eso las simulaciones, los roleplays y los casos de estudio con desenlaces inesperados son tan efectivos: generan errores controlados que aceleran el aprendizaje." },
      { heading: "Recuperación espaciada: el método que multiplica la retención", body: "Estudiar una hora el día antes de un examen produce mucho menos retención que estudiar 15 minutos por día durante cuatro días. La recuperación espaciada — volver a revisar material en intervalos crecientes — es uno de los métodos de aprendizaje con mayor evidencia científica.", extended_body: "El olvido no es el enemigo del aprendizaje — es parte del proceso. Cada vez que intentás recordar algo que empezaste a olvidar, el esfuerzo de recuperación fortalece la memoria más que si lo recordaras fácilmente. Las apps de flashcards como Anki usan este principio. Pero en el contexto de Bamboo, se aplica así: revisitar los conceptos de un módulo anterior mientras avanzás en uno nuevo produce retención mucho mayor que terminar el módulo y no volver a él nunca." },
      { heading: "Del conocimiento al comportamiento: el paso que nadie enseña", body: "El gap más grande en cualquier programa de formación no está entre no saber y saber — está entre saber y hacer. La neurociencia identifica tres condiciones para que el conocimiento se traduzca en comportamiento: la intención de implementación, la práctica en contexto real, y el feedback inmediato.", extended_body: "Una intención de implementación no es 'voy a ser más innovador'. Es 'cuando llegue a la próxima reunión de brief, voy a hacer al menos una pregunta sobre la ansiedad real detrás del pedido del cliente'. Esa especificidad — cuándo, dónde, cómo exactamente — multiplica por tres la probabilidad de que el comportamiento ocurra según investigaciones de Peter Gollwitzer." },
    ],
    exercise: "Elegí una habilidad de los módulos anteriores que querés desarrollar. Diseñá un plan de práctica deliberada para los próximos 30 días: qué vas a practicar exactamente, cuándo, cómo vas a medir el progreso, y cuál es tu intención de implementación específica para la próxima situación laboral relevante.",
    takeaway: "No aprendés lo que estudiás. Aprendés lo que practicás con dificultad, revisás con frecuencia y aplicás en contexto real.",
    quiz: { question: "¿Qué produce el cerebro cuando comete un error reconocido que facilita el aprendizaje?", options: ["Cortisol, que activa la memoria de largo plazo", "Norepinefrina, que aumenta la atención y la plasticidad neuronal", "Dopamina, que genera la sensación de éxito", "Serotonina, que estabiliza el estado de ánimo"], correct: 1, explanation: "El error reconocido libera norepinefrina, que pone al cerebro en un estado de mayor atención y plasticidad — óptimo para actualizar modelos y aprender." },
    resources: [
      { type: "video", title: "How to Learn Faster with the Feynman Technique", author: "Thomas Frank · YouTube", description: "La técnica de aprendizaje de Richard Feynman: enseñar para aprender. Base de la Cultura del Hacer.", url: "https://www.youtube.com/watch?v=_f-qkGJBPts" },
      { type: "video", title: "The First 20 Hours — How to Learn Anything Fast", author: "Josh Kaufman · TEDx", description: "Cómo estructurar el aprendizaje deliberado de cualquier habilidad nueva.", url: "https://www.youtube.com/watch?v=5MgBikgcWnY" },
    ],
  },

{
    id: "m26", slug: "economia-conductual-decisiones", title: "Economía conductual: por qué las personas no deciden de manera racional",
    description: "Cómo los sesgos cognitivos afectan las decisiones de clientes, equipos y vos mismo, y cómo diseñar estrategias que trabajen con la psicología humana en lugar de contra ella.",
    month: "Mes 13", level_required: 4, xp_reward: 340, lessons: 4, status: "available", theme: "Ciencia aplicada",
    opening: "Durante décadas, la economía asumió que las personas toman decisiones racionales: evalúan opciones, calculan beneficios y eligen la mejor alternativa disponible. La economía conductual demostró que eso es una ficción. Las personas deciden con atajos cognitivos, emociones y sesgos que operan por debajo de la conciencia. En una agencia, entender esos mecanismos cambia cómo diseñás campañas, cómo presentás propuestas y cómo liderás equipos.",
    sections: [
      { heading: "Los sesgos más relevantes para una agencia", body: "De los más de 200 sesgos cognitivos documentados, hay cinco que aparecen constantemente en el trabajo de agencias. El sesgo de anclaje hace que el primer número que escucha un cliente se convierta en la referencia para evaluar todo lo que sigue. El sesgo de confirmación hace que las personas busquen información que confirme lo que ya creen. El efecto de encuadre hace que la misma información produzca decisiones diferentes según cómo se presenta.", extended_body: "El sesgo de status quo es especialmente relevante en innovación: las personas prefieren el estado actual de las cosas aunque una alternativa objetivamente mejor esté disponible. Esto explica por qué los clientes aprueban lo que ya conocen y rechazan lo nuevo aunque sea mejor. No es irracionalidad — es conservación de energía cognitiva. El cerebro usa el camino conocido porque es eficiente.", example: { label: "Ejemplo real", content: "Una agencia presentaba siempre tres opciones de presupuesto: básico, estándar y premium. Descubrieron que el 70% de los clientes elegía la opción del medio independientemente de los valores. Al reencuadrar la presentación y empezar con la opción premium (anclaje alto), la proporción de clientes que elegía la opción del medio aumentó significativamente — y esa opción tenía un precio 30% mayor que antes." } },
      { heading: "Arquitectura de decisiones: diseñar el contexto para mejores elecciones", body: "Richard Thaler y Cass Sunstein acuñaron el término 'nudge' para describir intervenciones que modifican el contexto de una decisión sin eliminar opciones ni cambiar incentivos económicos. En una agencia, la arquitectura de decisiones aplica tanto al diseño de campañas como a la estructura de propuestas y reuniones.", extended_body: "Tres nudges clásicos: la opción por defecto (lo que pasa si no se decide activamente — ponerla bien diseñada guía hacia el resultado deseado), la norma social (mostrar que otros similares hacen X aumenta la probabilidad de que alguien haga X), y la simplificación (reducir la complejidad de una decisión aumenta la probabilidad de que se tome en la dirección correcta)." },
      { heading: "Cómo los sesgos afectan la dinámica interna de tu equipo", body: "Los sesgos cognitivos no solo afectan a los clientes — afectan a los equipos creativos constantemente. El pensamiento grupal hace que los equipos converjan prematuramente en la primera idea aceptable. El sesgo de disponibilidad hace que las soluciones más recordadas parezcan las mejores.", extended_body: "El sesgo de sunk cost es especialmente destructivo en agencias: una vez que se invirtió tiempo y energía en una dirección creativa, el equipo resiste cambiarla aunque haya señales claras de que no está funcionando. Nombrar ese sesgo en voz alta cuando aparece — 'creo que estamos cayendo en el sunk cost' — es una de las intervenciones más efectivas para cortarlo." },
      { heading: "Usar la economía conductual éticamente", body: "El conocimiento de los sesgos cognitivos puede usarse para ayudar a las personas a tomar mejores decisiones — o para manipularlas. La diferencia entre un nudge ético y una manipulación está en si el cambio de comportamiento beneficia genuinamente a quien lo experimenta.", extended_body: "En comunicación de marca, la línea es clara: usar arquitectura de decisiones para que una persona elija un producto que le sirve es ético. Usar sesgos para que compre algo que no necesita o que le hace daño no lo es. Las agencias que construyen reputación de largo plazo son las que aplican estos principios en beneficio genuino del consumidor, no solo del cliente que les paga." },
    ],
    exercise: "Identificá un momento reciente donde tomaste una decisión (de trabajo, de compra, de relación con un cliente) y analizala buscando qué sesgo cognitivo pudo haber influido. Luego elegí una presentación o propuesta próxima y aplicá conscientemente un principio de arquitectura de decisiones para mejorarla.",
    takeaway: "Las personas no deciden con lógica — deciden con atajos. Diseñar con eso en mente es más honesto y más efectivo que ignorarlo.",
    quiz: { question: "¿Qué es un nudge en arquitectura de decisiones?", options: ["Una restricción que elimina opciones no deseadas", "Una intervención que modifica el contexto de una decisión sin eliminar opciones", "Un incentivo económico para cambiar comportamiento", "Una campaña publicitaria basada en emociones"], correct: 1, explanation: "Un nudge modifica cómo se presenta una decisión — la opción por defecto, el orden, el encuadre — sin eliminar alternativas ni cambiar incentivos económicos. Trabaja con la psicología humana en lugar de ignorarla." },
    resources: [
      { type: "video", title: "Predictably Irrational — RSA Animate", author: "Dan Ariely · YouTube", description: "Animación sobre los sesgos cognitivos más comunes en decisiones cotidianas.", url: "https://www.youtube.com/watch?v=VZv--sm9XXU" },
      { type: "tool", title: "Cognitive Bias Codex", author: "Wikipedia", description: "Mapa visual gratuito de más de 180 sesgos cognitivos organizados por categoría.", url: "https://en.wikipedia.org/wiki/Cognitive_bias" },
    ],
  },

{
    id: "m27", slug: "inteligencia-artificial-agencias", title: "Inteligencia artificial en agencias: oportunidad real vs. hype",
    description: "Cómo la IA generativa está transformando el trabajo creativo, qué capacidades humanas se vuelven más valiosas y cómo posicionarse estratégicamente frente al cambio.",
    month: "Mes 14", level_required: 4, xp_reward: 360, lessons: 4, status: "available", theme: "Tecnología",
    opening: "La IA generativa no va a reemplazar a las personas creativas — va a reemplazar a las personas creativas que no saben usarla. Esa frase, repetida en muchos contextos, tiene una verdad parcial: lo que cambia no es si los creativos seguirán siendo necesarios, sino qué tipo de capacidades creativas tendrán más valor en un contexto donde la producción de contenido se automatiza parcialmente.",
    sections: [
      { heading: "Qué puede hacer la IA y qué no puede (todavía)", body: "La IA generativa es extraordinariamente buena en tareas de síntesis, variación y producción a escala: generar versiones de un mismo copy para diferentes audiencias, producir imágenes a partir de descripciones, resumir documentos largos, traducir y adaptar contenido. Es significativamente peor en tareas que requieren comprensión profunda de contexto, criterio estratégico y empatía genuina.", extended_body: "Las tareas que la IA hace mejor que un humano promedio hoy: primer borrador de cualquier formato de texto, variaciones de concepto, búsqueda de referencias y benchmarks, síntesis de información dispersa, y producción visual básica. Las tareas donde un humano con criterio sigue siendo superior: definir el problema correcto, leer la dinámica emocional de una relación con un cliente, tomar decisiones estratégicas con información incompleta, y crear trabajo con una perspectiva genuinamente original.", example: { label: "Ejemplo real", content: "Una agencia de contenidos digitales implementó IA para generar primeros borradores de artículos de blog. El tiempo de producción bajó un 60%. Pero descubrieron algo inesperado: los editores pasaban el mismo tiempo que antes — ahora editando borradores de IA en lugar de escribir desde cero. La calidad final dependía completamente del criterio editorial humano. La IA aceleró la producción pero no reemplazó el juicio." } },
      { heading: "El prompt como nueva habilidad profesional", body: "La calidad del output de una IA depende directamente de la calidad del input. Saber formular prompts precisos, dar contexto relevante, especificar el formato deseado y iterar sobre el resultado es una habilidad que se puede aprender y que marca una diferencia enorme en la productividad.", extended_body: "Un buen prompt para trabajo creativo tiene cinco elementos: rol (quién es la IA en este contexto), objetivo (qué resultado específico se busca), contexto (información de fondo relevante), restricciones (qué no debe hacer), y formato (cómo debe presentar el resultado). La diferencia entre 'escribí un email de seguimiento para un cliente' y un prompt bien estructurado con los cinco elementos puede ser la diferencia entre un borrador genérico y uno que parece escrito por alguien que conoce al cliente." },
      { heading: "Cómo las agencias están integrando IA hoy", body: "Las agencias que están integrando IA de manera más efectiva no son las que reemplazaron personas con herramientas — son las que redefinieron el rol de sus personas en función de lo que la IA no puede hacer.", extended_body: "Tres modelos de integración que están funcionando. El modelo de aceleración: la IA produce volumen y los creativos curan, editan y elevan la calidad. El modelo de exploración: la IA genera 20 variaciones de un concepto y los creativos identifican cuáles tienen potencial y los desarrollan. El modelo de síntesis: la IA procesa grandes volúmenes de datos de consumidor y los estrategas interpretan los patrones para generar insights." },
      { heading: "Las capacidades que se vuelven más valiosas con la IA", body: "Si la IA iguala el piso de calidad en producción de contenido, lo que diferencia a los mejores no es la velocidad de producción — es el criterio para saber qué producir, el juicio para evaluar calidad, y la capacidad de construir relaciones de confianza con clientes.", extended_body: "Las tres capacidades que más se revalorizan en un mundo con IA: el pensamiento estratégico (definir qué problema resolver antes de producir cualquier cosa), la inteligencia emocional (leer relaciones, gestionar conflictos, inspirar equipos), y la originalidad genuina (las perspectivas que vienen de experiencias vividas, no de patrones estadísticos sobre texto existente)." },
    ],
    exercise: "Elegí una tarea de tu trabajo diario que lleve más de 30 minutos. Intentá completarla usando IA (ChatGPT, Claude, Gemini u otra) con un prompt bien estructurado. Evaluá el resultado: ¿qué parte fue útil? ¿qué tuviste que corregir o agregar? ¿qué aprendiste sobre cómo formular mejor el prompt?",
    takeaway: "La IA no reemplaza el criterio — lo amplifica. Los que tengan más criterio van a sacar más provecho de la IA que los que tengan menos.",
    quiz: { question: "¿Cuál de estas tareas es donde la IA generativa tiene mayor ventaja sobre un humano promedio?", options: ["Definir el problema estratégico correcto antes de ejecutar", "Leer la dinámica emocional de una relación con un cliente", "Generar múltiples variaciones de un mismo copy para diferentes audiencias", "Crear perspectivas originales basadas en experiencias vividas"], correct: 2, explanation: "La IA es excepcionalmente buena en síntesis, variación y producción a escala. Las tareas de criterio estratégico, empatía genuina y originalidad basada en experiencia siguen siendo dominio humano." },
    resources: [
      { type: "video", title: "How AI Could Empower Any Business", author: "Andrew Ng · TED", description: "El pionero de la IA explica cómo cualquier organización puede aprovechar la inteligencia artificial.", url: "https://www.ted.com/talks/andrew_ng_how_ai_could_empower_any_business" },
      { type: "tool", title: "Claude — Anthropic", description: "Asistente de IA para ideación, borradores, síntesis y análisis en el trabajo diario de agencia.", url: "https://claude.ai" },
      { type: "article", title: "How to Use AI to Do Stuff", author: "Ethan Mollick · One Useful Thing", description: "La guía práctica más útil sobre cómo integrar IA en el trabajo profesional real. Gratuita y actualizada.", url: "https://www.oneusefulthing.org/p/how-to-use-ai-to-do-stuff-an-opinionated" },
    ],
  },

{
    id: "m28", slug: "sostenibilidad-y-comunicacion", title: "Sostenibilidad y comunicación: más allá del greenwashing",
    description: "Cómo comunicar compromisos de sostenibilidad de manera creíble, qué es el greenwashing y por qué las marcas que lo hacen pierden más de lo que ganan.",
    month: "Mes 14", level_required: 4, xp_reward: 360, lessons: 4, status: "available", theme: "Tecnología",
    opening: "La sostenibilidad pasó de ser un diferencial a ser una expectativa básica de consumidores, inversores y reguladores. El problema es que muchas marcas respondieron con comunicación superficial que no resiste el escrutinio — y el mercado lo descubrió. Hoy, comunicar sostenibilidad mal es más dañino que no comunicarla.",
    sections: [
      { heading: "Qué es el greenwashing y por qué es un riesgo real", body: "Greenwashing es la práctica de presentar a una empresa, producto o servicio como más sostenible de lo que realmente es. Puede ser intencional o resultado de ambigüedad y falta de rigor. En cualquier caso, tiene consecuencias reales: pérdida de confianza, cobertura mediática negativa, y en algunos mercados, consecuencias legales.", extended_body: "Las formas más comunes de greenwashing detectadas por reguladores y activistas: afirmaciones vagas como 'eco-friendly' sin evidencia, destacar un atributo ambiental menor mientras se ignoran impactos mayores, usar imágenes y colores 'naturales' que no corresponden a prácticas reales, y certificaciones inventadas o sin respaldo verificable. La Unión Europea está avanzando en regulaciones que prohibirían muchas de estas prácticas.", example: { label: "Ejemplo real", content: "Una marca de moda rápida lanzó una línea 'Conscious' con materiales reciclados que representaban el 1% de su producción total. Los medios especializados lo detectaron y la cobertura negativa superó ampliamente la cobertura positiva que habría generado un lanzamiento honesto y proporcionado. La marca perdió credibilidad en exactamente el segmento que quería conquistar." } },
      { heading: "Cómo evaluar si una marca tiene credibilidad ambiental real", body: "Las marcas con credibilidad ambiental real comparten tres características: sus compromisos son específicos y medibles (no 'reducir emisiones' sino 'reducir emisiones scope 1 y 2 en un 50% para 2030 con línea base 2019'), reportan progreso aunque sea imperfecto, y reconocen sus limitaciones en lugar de presentar una imagen de perfección.", extended_body: "El marco SBTi (Science Based Targets initiative) y los reportes GRI (Global Reporting Initiative) son estándares de credibilidad reconocidos que permiten comparar compromisos entre empresas. Una agencia que entiende estos marcos puede ayudar a sus clientes a comunicar con rigor lo que genuinamente están haciendo — que siempre es más persuasivo que exagerar." },
      { heading: "Comunicar sostenibilidad de manera efectiva y honesta", body: "La comunicación de sostenibilidad más efectiva no exagera ni minimiza — contextualiza. Muestra el punto de partida, el camino recorrido, los desafíos encontrados y el destino al que se apunta. Esa narrativa de progreso honesto es más creíble y más inspiradora que la afirmación de perfección.", extended_body: "Tres principios para comunicar sostenibilidad con credibilidad. Primero, especificidad: datos concretos en lugar de afirmaciones genéricas. Segundo, proporcionalidad: no destacar un logro menor mientras se ignoran impactos mayores. Tercero, continuidad: la sostenibilidad no es una campaña — es una narrativa que se construye en el tiempo con acciones verificables." },
      { heading: "El rol de las agencias en la transición hacia la sostenibilidad", body: "Las agencias tienen un rol activo en la transición hacia la sostenibilidad — no solo como comunicadores de los compromisos de sus clientes, sino como organizaciones que modelan las prácticas que promueven.", extended_body: "Las agencias que más se están diferenciando en este espacio son las que desarrollaron capacidad interna para evaluar la credibilidad de los compromisos de sus clientes antes de comunicarlos. Eso implica conocer los estándares de reporte, entender la cadena de valor de las industrias en las que trabajan, y tener la valentía de decirle a un cliente que su comunicación de sostenibilidad no tiene base suficiente para ser creíble." },
    ],
    exercise: "Elegí un cliente o marca que hayas trabajado recientemente. Investigá cuáles son sus compromisos públicos de sostenibilidad. Evaluálos usando los tres principios del módulo: ¿son específicos y medibles? ¿Son proporcionales al impacto real? ¿Hay continuidad y reporte de progreso? ¿Qué recomendarías cambiar en su comunicación?",
    takeaway: "Comunicar sostenibilidad bien es más difícil que comunicarla mal — pero genera un activo de confianza que ninguna campaña puede comprar.",
    quiz: { question: "¿Cuál de estas es la forma más creíble de comunicar sostenibilidad?", options: ["Usar imágenes de naturaleza y colores verdes en toda la comunicación", "Destacar el atributo ambiental más positivo del producto", "Mostrar el punto de partida, el progreso real y los desafíos con datos específicos", "Obtener una certificación genérica de empresa responsable"], correct: 2, explanation: "La narrativa de progreso honesto — con datos específicos, reconocimiento de limitaciones y continuidad en el tiempo — genera credibilidad que ninguna afirmación de perfección puede lograr." },
    resources: [
      { type: "tool", title: "B Impact Assessment", author: "B Lab", description: "Herramienta gratuita para evaluar el impacto social y ambiental de cualquier organización.", url: "https://www.bcorporation.net/en-us/programs-and-tools/b-impact-assessment/" },
      { type: "video", title: "The Surprising Solution to the Plastic Pollution Problem", author: "David Katz · TED", description: "Cómo el diseño de modelos de negocio puede resolver problemas de sostenibilidad.", url: "https://www.ted.com/talks/david_katz_the_surprising_solution_to_the_plastic_pollution_problem" },
    ],
  },

{
    id: "m29", slug: "gestion-de-la-reputacion", title: "Gestión de reputación en la era digital",
    description: "Cómo construir, proteger y recuperar la reputación de una marca en un entorno donde cualquier persona puede amplificar cualquier mensaje en minutos.",
    month: "Mes 15", level_required: 4, xp_reward: 380, lessons: 4, status: "available", theme: "Estrategia avanzada",
    opening: "La reputación de una marca se construye en años y puede destruirse en horas. En un entorno digital donde un tweet puede generar cobertura global antes de que el equipo de comunicaciones se despierte, la gestión de reputación pasó de ser una función de relaciones públicas a ser una capacidad estratégica central de cualquier organización.",
    sections: [
      { heading: "Cómo se forma la reputación: la brecha entre identidad e imagen", body: "La identidad es lo que una organización dice ser. La imagen es lo que otros perciben que es. La reputación es la percepción acumulada a lo largo del tiempo, basada en experiencias directas e indirectas, en lo que se dice y en lo que se hace. La brecha entre identidad e imagen es donde viven las crisis de reputación.", extended_body: "El modelo de reputación de Charles Fombrun identifica seis dimensiones: atractivo emocional, productos y servicios, visión y liderazgo, entorno de trabajo, desempeño financiero, y responsabilidad social. Una marca puede tener reputación excelente en algunas dimensiones y débil en otras. La gestión de reputación efectiva identifica cuáles dimensiones son más relevantes para los stakeholders prioritarios y trabaja en ellas de manera consistente.", example: { label: "Ejemplo real", content: "Una empresa de tecnología en Latinoamérica tenía excelente reputación de producto — sus usuarios estaban muy satisfechos con el servicio. Pero un incidente de filtración de datos reveló prácticas de seguridad deficientes. La brecha entre la imagen de empresa confiable y la realidad de sus prácticas internas generó una crisis que tardó dos años en resolverse porque no había infraestructura de respuesta construida previamente." } },
      { heading: "Monitoreo de reputación: escuchar antes de que sea tarde", body: "La gestión proactiva de reputación empieza por escuchar sistemáticamente lo que se dice de una marca antes de que se convierta en crisis. El monitoreo de menciones, sentimiento y temas emergentes en medios digitales y redes sociales es la base de cualquier estrategia de reputación moderna.", extended_body: "Tres niveles de monitoreo que toda agencia debería ofrecer a sus clientes. El monitoreo de alertas básico detecta menciones del nombre de la marca en tiempo real. El análisis de sentimiento categoriza esas menciones como positivas, negativas o neutras. El análisis de narrativa identifica los temas y frames que rodean a la marca — no solo qué se dice sino cómo se encuadra, quiénes lo dicen y a qué audiencias llega." },
      { heading: "Gestión de crisis: los primeros 24 horas son determinantes", body: "Las organizaciones que gestionan bien las crisis de reputación comparten una característica: tienen un protocolo preparado antes de que ocurra la crisis. Las que no, improvisan — y en reputación, la improvisación casi siempre amplifica el daño.", extended_body: "El protocolo de crisis de reputación tiene cinco momentos. Primero, verificación: confirmar que el incidente es real antes de responder públicamente. Segundo, evaluación: determinar la escala real y el potencial de escalada. Tercero, decisión de respuesta: qué decir, quién lo dice, por qué canal y cuándo. Cuarto, ejecución: respuesta coordinada y consistente en todos los canales. Quinto, monitoreo post-crisis: seguimiento del impacto de la respuesta y ajuste si es necesario." },
      { heading: "Construir reputación proactivamente: el capital de confianza", body: "La mejor gestión de crisis es la que se hace antes de la crisis — construyendo capital de confianza que actúa como amortiguador cuando ocurre un incidente negativo. Las marcas con alta reputación acumulada sobreviven mejor las crisis que las que llegaron al incidente con poca confianza en reserva.", extended_body: "El capital de confianza se construye con tres activos: consistencia entre lo que se dice y lo que se hace (los incumplimientos son destructores de reputación más rápidos que cualquier crisis), transparencia en los momentos difíciles (las empresas que comunican malas noticias proactivamente son percibidas como más confiables que las que las ocultan), y contribución genuina al entorno donde operan (comunidad, industria, sociedad)." },
    ],
    exercise: "Elegí una marca que hayas gestionado o con la que trabajes. Hacé un mapeo de reputación básico: ¿cuáles son sus tres mayores activos de reputación? ¿Cuáles son sus tres mayores vulnerabilidades? ¿Tiene un protocolo de crisis documentado? ¿Qué recomendarías como próximos pasos para fortalecer su capital de confianza?",
    takeaway: "La reputación no se gestiona en las crisis — se gestiona todos los días. Las crisis solo revelan si el trabajo diario fue bien hecho.",
    quiz: { question: "¿Qué es el capital de confianza en gestión de reputación?", options: ["El presupuesto reservado para comunicación de crisis", "La reputación acumulada que actúa como amortiguador cuando ocurre un incidente negativo", "Las relaciones con periodistas y medios de comunicación", "El historial de premios y reconocimientos de la marca"], correct: 1, explanation: "El capital de confianza es la reputación acumulada a través de consistencia, transparencia y contribución genuina. Las marcas con alto capital de confianza sobreviven mejor las crisis porque los stakeholders les dan el beneficio de la duda." },
    resources: [
      { type: "video", title: "The Currency of Trust", author: "Rachel Botsman · TED", description: "Cómo funciona la confianza en la era digital y por qué es el activo más valioso de cualquier marca.", url: "https://www.ted.com/talks/rachel_botsman_the_currency_of_the_new_economy_is_trust" },
      { type: "tool", title: "Google Alerts", description: "Herramienta gratuita para monitorear menciones de cualquier marca o tema en tiempo real.", url: "https://www.google.com/alerts" },
    ],
  },

{
    id: "m30", slug: "estrategia-de-contenidos", title: "Estrategia de contenidos que genera valor real",
    description: "Cómo construir una estrategia de contenidos orientada a objetivos de negocio concretos, en lugar de producir por producir.",
    month: "Mes 15", level_required: 4, xp_reward: 380, lessons: 4, status: "available", theme: "Estrategia avanzada",
    opening: "La mayoría de las estrategias de contenidos fracasan porque empiezan desde el contenido en lugar de empezar desde el negocio. Se definen formatos, frecuencias y canales antes de responder la pregunta más importante: ¿qué necesita lograr este contenido para la organización?",
    sections: [
      { heading: "El problema con el contenido por volumen", body: "Publicar mucho no es lo mismo que comunicar bien. El modelo de contenido por volumen — dos posts diarios, tres videos por semana, un newsletter cada martes — produce agotamiento de equipo y saturación de audiencia sin generar los resultados que justificarían la inversión.", extended_body: "La paradoja del contenido abundante es que disminuye la atención de la audiencia en lugar de aumentarla. Cuando una marca publica constantemente, sus seguidores aprenden a ignorarla — el contenido pierde urgencia y relevancia. Las marcas que publican con menor frecuencia pero con mayor selección y calidad suelen tener mejores métricas de engagement que las que siguen el modelo de volumen.", example: { label: "Ejemplo real", content: "Una empresa B2B publicaba 15 posts semanales entre LinkedIn, Twitter y su blog. El engagement promedio era bajo y el equipo estaba agotado. Redujeron a 4 posts semanales muy bien producidos, cada uno respondiendo una pregunta específica de su audiencia objetivo. En tres meses, el engagement aumentó un 340% y el tráfico calificado al sitio creció un 80%." } },
      { heading: "Estrategia de contenidos orientada a objetivos: el modelo Jobs to Be Done", body: "El framework Jobs to Be Done, aplicado a contenidos, pregunta: ¿para qué 'contrata' un usuario este contenido? ¿Qué trabajo le hace hacer? Puede ser informarse, entretenerse, convencerse, conectar con otros, tomar una decisión. Cada contenido debería tener un job to be done claro.", extended_body: "Los cinco jobs to be done más comunes en estrategia de contenidos B2B: educar (enseñar algo que el cliente no sabía), validar (confirmar que una decisión que ya tomó o está por tomar es correcta), conectar (generar sensación de comunidad con otros similares), convertir (llevar a una acción específica), y retener (fortalecer la relación con clientes existentes). Una estrategia efectiva tiene contenido deliberadamente diseñado para cada job." },
      { heading: "Cómo medir lo que importa en contenidos", body: "Las métricas de contenidos más comunes — vistas, alcance, impresiones — miden atención pero no valor. Las métricas que realmente importan son las que conectan el contenido con objetivos de negocio: leads generados, cuentas influenciadas, decisiones de compra aceleradas.", extended_body: "El modelo de atribución de contenidos es complejo porque el impacto rara vez es directo — un artículo leído hoy puede influir en una decisión de compra seis meses después. Por eso es importante medir tanto métricas de proceso (¿el contenido llega a la audiencia correcta?) como métricas de resultado (¿cambia comportamientos y genera valor?)." },
      { heading: "Construir una máquina de contenidos eficiente", body: "La producción de contenidos a escala requiere sistemas que no dependan del heroísmo individual — editorial calendars, flujos de aprobación claros, repositorios de assets reutilizables, y procesos de reutilización y adaptación de contenido existente.", extended_body: "El modelo de contenido ancla y derivados es uno de los más eficientes: se produce un contenido largo y profundo (un estudio, un webinar, un artículo extenso) y a partir de él se generan múltiples derivados para diferentes formatos y canales. Una investigación de 30 páginas puede generar 10 posts de LinkedIn, 5 emails, 3 podcasts y 2 infografías — con una fracción del esfuerzo que requeriría producirlos independientemente." },
    ],
    exercise: "Elegí una marca y auditá su estrategia de contenidos actual. Para cada tipo de contenido que publica, identificá: ¿cuál es el job to be done? ¿Está bien ejecutado para ese job? ¿Conecta con algún objetivo de negocio medible? Proponé tres cambios concretos para mejorar la estrategia.",
    takeaway: "El mejor contenido no es el más creativo — es el que hace exactamente el trabajo que necesita hacer para la persona correcta en el momento correcto.",
    quiz: { question: "¿Qué pregunta define el framework Jobs to Be Done aplicado a contenidos?", options: ["¿Qué formato genera más engagement?", "¿Con qué frecuencia debemos publicar?", "¿Para qué contrata un usuario este contenido y qué trabajo le hace hacer?", "¿Qué hace la competencia en términos de contenido?"], correct: 2, explanation: "El framework Jobs to Be Done pregunta cuál es el trabajo que el contenido hace para el usuario — informar, validar, conectar, convertir o retener. Esa claridad de propósito es lo que diferencia contenido estratégico de contenido por volumen." },
    resources: [
      { type: "article", title: "Content Marketing Framework", author: "Content Marketing Institute", description: "Framework gratuito completo para construir una estrategia de contenidos orientada a objetivos de negocio.", url: "https://contentmarketinginstitute.com/articles/content-marketing-strategy-development/" },
      { type: "tool", title: "HubSpot Blog Ideas Generator", author: "HubSpot", description: "Herramienta gratuita para generar ideas de contenido basadas en las preguntas reales de la audiencia.", url: "https://www.hubspot.com/blog-topic-generator" },
    ],
  },

{
    id: "m31", slug: "pensamiento-sistemico", title: "Pensamiento sistémico: ver el todo antes de mover una parte",
    description: "Cómo entender las relaciones entre las partes de un sistema para anticipar consecuencias no deseadas y diseñar intervenciones más efectivas.",
    month: "Mes 16", level_required: 4, xp_reward: 400, lessons: 4, status: "available", theme: "Pensamiento avanzado",
    opening: "La mayoría de los problemas complejos que enfrentan las organizaciones no se resuelven con soluciones lineales. Cuando se ataca un síntoma sin entender el sistema que lo produce, el problema reaparece — a veces peor. El pensamiento sistémico es la habilidad de ver patrones de interacción antes de actuar.",
    sections: [
      { heading: "La diferencia entre pensamiento lineal y pensamiento sistémico", body: "El pensamiento lineal ve el mundo como una cadena de causa y efecto: A causa B, B causa C. El pensamiento sistémico ve el mundo como una red de bucles de retroalimentación: A causa B, B causa C, y C retroalimenta sobre A. Esa diferencia cambia completamente cómo se diagnostica un problema y cómo se diseña una solución.", extended_body: "El archienemigo del pensamiento lineal en organizaciones es la solución que resuelve el síntoma pero no la causa, y que en el proceso genera nuevos problemas. En agencias: aumentar la plantilla para resolver la sobrecarga de trabajo sin cambiar el proceso de generación de proyectos no resuelve el problema — solo lo posterga hasta que la plantilla nueva también esté sobrecargada.", example: { label: "Ejemplo real", content: "Una agencia tenía problemas crónicos de plazo: los proyectos siempre llegaban tarde. La solución lineal fue agregar jefes de proyecto. Los plazos mejoraron temporalmente pero luego empeoraron — los jefes de proyecto estaban agregando reuniones de seguimiento que consumían el tiempo de producción. El problema real era que los briefs llegaban tarde y sin información completa, lo que generaba retrabajo. La solución sistémica fue rediseñar el proceso de brief, no agregar supervisión." } },
      { heading: "Bucles de retroalimentación: cómo los sistemas se auto-refuerzan o se auto-regulan", body: "Hay dos tipos de bucles de retroalimentación. Los bucles de refuerzo amplifican un efecto en la misma dirección — pueden generar crecimiento acelerado pero también colapso acelerado. Los bucles de equilibrio empujan el sistema hacia un estado estable — explican por qué los cambios organizacionales son tan difíciles de sostener.", extended_body: "Un ejemplo de bucle de refuerzo en una agencia: la reputación positiva genera más clientes, más clientes generan más ingresos, más ingresos permiten contratar mejor talento, mejor talento genera más reputación. Este ciclo virtuoso también puede invertirse: la reputación negativa genera menos clientes, menos clientes generan menos ingresos, menos ingresos implican recortes de talento, menos talento genera más problemas de calidad." },
      { heading: "Puntos de apalancamiento: dónde intervenir para cambiar un sistema", body: "No todos los lugares de un sistema son igual de sensibles a la intervención. Donella Meadows identificó una jerarquía de puntos de apalancamiento — desde los menos efectivos (cambiar números o parámetros) hasta los más poderosos (cambiar los objetivos del sistema o la mentalidad que lo generó).", extended_body: "En el contexto de agencias, los cambios de bajo apalancamiento son los más comunes: cambiar los plazos, ajustar los presupuestos, agregar reuniones de seguimiento. Los cambios de alto apalancamiento son más raros pero más poderosos: cambiar la manera en que el equipo entiende el éxito, cambiar qué tipo de trabajo acepta la agencia, cambiar la relación fundamental con los clientes." },
      { heading: "Herramientas de pensamiento sistémico aplicadas a proyectos", body: "Tres herramientas concretas de pensamiento sistémico que se pueden usar en proyectos de agencia sin necesitar formación especializada: los mapas causales (diagramar las relaciones entre factores relevantes), los escenarios de segundo orden (preguntar '¿y luego qué?' dos o tres veces), y los pre-mortems (imaginar que el proyecto fracasó y trabajar hacia atrás para identificar por qué).", extended_body: "El pre-mortem, popularizado por el psicólogo Gary Klein, es especialmente valioso en agencias. Antes de ejecutar un proyecto, el equipo imagina que ya terminó y fue un fracaso total. Cada persona escribe en silencio las razones del fracaso. Luego se comparten. Este ejercicio revela supuestos no examinados, riesgos subestimados y puntos de falla que el pensamiento positivo habitual bloquea." },
    ],
    exercise: "Tomá un problema recurrente en tu agencia o equipo — algo que se intenta resolver repetidamente sin éxito duradero. Dibujá un mapa causal básico: identificá los factores que contribuyen al problema y las relaciones entre ellos. ¿Hay bucles de retroalimentación? ¿Cuál sería el punto de apalancamiento más efectivo para intervenir?",
    takeaway: "Cada solución que no considera el sistema produce el próximo problema.",
    quiz: { question: "¿Qué son los bucles de equilibrio en pensamiento sistémico?", options: ["Bucles que amplifican un efecto en la misma dirección generando crecimiento o colapso", "Bucles que empujan el sistema hacia un estado estable, explicando la resistencia al cambio", "Bucles que conectan diferentes partes de la organización entre sí", "Bucles que miden el equilibrio financiero del sistema"], correct: 1, explanation: "Los bucles de equilibrio son mecanismos que empujan el sistema hacia un estado estable. Explican por qué los cambios organizacionales son tan difíciles de sostener: el sistema tiene fuerzas que lo devuelven al estado anterior." },
    resources: [
      { type: "tool", title: "Kumu — Mapas causales gratuitos", author: "Kumu", description: "Herramienta online gratuita para construir mapas causales y diagramas de sistemas.", url: "https://kumu.io" },
      { type: "video", title: "Thinking in Systems", author: "Donella Meadows · YouTube", description: "La autora explica los conceptos centrales del pensamiento sistémico de manera visual.", url: "https://www.youtube.com/watch?v=OqEeIG8aPPk" },
    ],
  },

{
    id: "m32", slug: "negociacion-para-creativos", title: "Negociación para creativos: defender el valor sin perder la relación",
    description: "Principios y técnicas de negociación aplicados al contexto de agencias: presupuestos, alcances, plazos y condiciones de trabajo.",
    month: "Mes 16", level_required: 4, xp_reward: 400, lessons: 4, status: "available", theme: "Pensamiento avanzado",
    opening: "La mayoría de los creativos y estrategas en agencias son buenos en su trabajo pero evitan la negociación — la perciben como conflicto, como algo que 'no va con su perfil'. El resultado es que aceptan condiciones que no son sostenibles, trabajan con presupuestos que no alcanza y terminan resintiendo a clientes que en realidad están dispuestos a pagar más si alguien se los pide bien.",
    sections: [
      { heading: "Negociación no es conflicto: el error de percepción que cuesta caro", body: "La negociación es un proceso de intercambio de información orientado a encontrar acuerdos que funcionen para ambas partes. En una negociación bien manejada, ambas partes terminan mejor que si no hubieran negociado. El conflicto ocurre cuando la negociación falla — no cuando ocurre.", extended_body: "El modelo de negociación basada en principios, desarrollado en Harvard por Roger Fisher y William Ury, distingue entre posiciones (lo que cada parte dice querer) e intereses (lo que realmente necesita). La mayoría de las negociaciones se estancan en posiciones. Las que llegan a buenos acuerdos exploran los intereses detrás de esas posiciones — y frecuentemente descubren que los intereses son compatibles aunque las posiciones parezcan opuestas.", example: { label: "Ejemplo real", content: "Una agencia y un cliente estaban estancados en el presupuesto de una propuesta: el cliente decía que tenía $50.000 disponibles y la agencia decía que el proyecto valía $80.000. Explorando intereses, la agencia descubrió que el cliente tenía restricciones de caja en el trimestre actual pero no en el siguiente. La solución fue dividir el proyecto en dos fases con pago diferido. Ambas partes obtuvieron lo que necesitaban sin que nadie cediera su posición original." } },
      { heading: "BATNA: tu alternativa define tu poder de negociación", body: "BATNA (Best Alternative to a Negotiated Agreement) es lo que harías si la negociación no llegara a ningún acuerdo. Tu BATNA define tu poder de negociación real — no tu posición declarada, no cuánto querés el acuerdo, sino qué tan bien podés vivir sin él.", extended_body: "Mejorar tu BATNA antes de negociar es la forma más efectiva de mejorar tu posición. Para una agencia, eso significa: tener otros clientes en proceso, tener proyectos propios que generen ingresos independientes, tener una reputación que haga que los clientes lleguen sin que tengas que buscarlos. La dependencia de un solo cliente o de un solo tipo de proyecto debilita estructuralmente la posición negociadora." },
      { heading: "Cómo defender el valor de tu trabajo sin sonar defensivo", body: "Cuando un cliente cuestiona el precio, la respuesta menos efectiva es justificarse — 'es que tenemos muchos gastos', 'es que el mercado cobra así'. La más efectiva es reencuadrar la conversación desde el valor que el trabajo genera, no desde el costo que tiene.", extended_body: "Tres técnicas para defender valor. Primera, el anclaje: nombrar primero el valor que el trabajo genera antes de nombrar el precio ('esta campaña puede generar X en ventas adicionales — nuestra propuesta es de Y'). Segunda, el contraste: comparar el costo con el costo de no hacerlo ('si este problema sigue sin resolverse, el costo para tu negocio es de Z por mes'). Tercera, la desagregación: en lugar de defender el número total, explicar qué incluye y el valor de cada componente." },
      { heading: "Negociar condiciones de trabajo, no solo precios", body: "Las negociaciones más importantes en una agencia no siempre son sobre dinero. Las condiciones de trabajo — plazos, cantidad de rondas de revisión, canales de comunicación, procesos de aprobación — determinan si un proyecto va a ser rentable y sostenible para el equipo.", extended_body: "Las condiciones que vale más la pena negociar al inicio de cualquier proyecto: quiénes son los decisores finales (los proyectos con múltiples aprobadores sin jerarquía clara siempre se descarrilan), cuántas rondas de revisión están incluidas (sin un límite, el retrabajo puede consumir toda la rentabilidad), y qué pasa si el brief cambia significativamente después de empezar (sin una cláusula de re-briefing, los cambios de dirección son pérdidas directas de margen)." },
    ],
    exercise: "Pensá en la última negociación de presupuesto o alcance que tuviste con un cliente. Analizala usando los frameworks del módulo: ¿cuáles eran tus intereses reales vs. tu posición declarada? ¿Cuál era tu BATNA? ¿Usaste alguna técnica de defensa de valor? ¿Qué harías diferente hoy?",
    takeaway: "No podés cobrar lo que valés si no podés defender lo que valés. La negociación es una habilidad, no un rasgo de personalidad.",
    quiz: { question: "¿Qué es el BATNA en una negociación?", options: ["El precio mínimo que estás dispuesto a aceptar", "La mejor alternativa disponible si la negociación no llega a un acuerdo", "La estrategia de apertura de una negociación", "El balance entre lo que pedís y lo que el cliente puede pagar"], correct: 1, explanation: "BATNA es lo que harías si la negociación no llegara a ningún acuerdo. Definir y mejorar tu BATNA antes de negociar es la forma más efectiva de aumentar tu poder de negociación real." },
    resources: [
      { type: "video", title: "Negotiation Skills — Chris Voss", author: "YouTube", description: "El ex-negociador de rehenes del FBI comparte sus técnicas más efectivas de manera gratuita.", url: "https://www.youtube.com/watch?v=guZa7mZV_K4" },
      { type: "article", title: "Getting to Yes — Summary", author: "Negotiation Experts", description: "Resumen gratuito del método de negociación basada en principios de Harvard.", url: "https://www.negotiations.com/articles/fisher-ury/" },
    ],
  },

{
    id: "m33", slug: "innovacion-en-experiencia-de-cliente", title: "Innovación en experiencia de cliente: más allá del journey map",
    description: "Cómo diseñar experiencias que generen lealtad real, no solo satisfacción momentánea, y cómo medir el impacto de la experiencia en resultados de negocio.",
    month: "Mes 17", level_required: 4, xp_reward: 420, lessons: 4, status: "available", theme: "Experiencia",
    opening: "La satisfacción del cliente es el piso, no el techo. En mercados donde los productos y servicios se comoditizan, la experiencia es el principal diferenciador — y la mayoría de las empresas lo entienden intelectualmente pero siguen diseñando experiencias mediocres porque no saben cómo hacerlo de manera sistemática.",
    sections: [
      { heading: "La diferencia entre satisfacción y lealtad", body: "Un cliente satisfecho es el que recibió lo que esperaba. Un cliente leal es el que vuelve aunque tenga alternativas disponibles y recomienda activamente. La investigación de Fred Reichheld muestra que el 80% de los clientes que abandonan una marca reportaron haber estado 'satisfechos' antes de irse. La satisfacción no predice lealtad — la experiencia memorable sí.", extended_body: "Las experiencias que generan lealtad tienen tres características. Primera, resuelven el problema con mínimo esfuerzo para el cliente — el esfuerzo del cliente (CES, Customer Effort Score) es mejor predictor de lealtad que la satisfacción. Segunda, generan al menos un momento de sorpresa positiva que supera las expectativas en un punto específico del journey. Tercera, recuperan bien cuando algo sale mal — la resolución efectiva de un problema puede generar más lealtad que si el problema nunca hubiera ocurrido.", example: { label: "Ejemplo real", content: "Una empresa de telecomunicaciones tenía scores de satisfacción del 78% pero churn (abandono) del 22% anual. Al analizar el journey, descubrieron que la satisfacción se medía inmediatamente después de las interacciones de servicio — que eran buenas — pero ignoraba los momentos de fricción del uso cotidiano del producto: facturas confusas, procesos de cambio de plan difíciles, demoras en activaciones. Rediseñaron esos momentos de fricción y el churn bajó al 14% en dos años." } },
      { heading: "El journey map como punto de partida, no como destino", body: "El customer journey map es una herramienta valiosa para visualizar la experiencia del cliente, pero muchas organizaciones lo usan como un ejercicio de documentación en lugar de como un punto de partida para la innovación.", extended_body: "Un journey map efectivo no solo documenta lo que pasa — identifica los momentos de mayor impacto emocional (los 'peaks' y 'valleys' de la experiencia), los puntos de mayor fricción, y las oportunidades de sorpresa positiva. La investigación de Kahneman sobre memoria de experiencias sugiere que las personas recuerdan y evalúan una experiencia principalmente por su punto más intenso (positivo o negativo) y por cómo termina — no por el promedio. Eso tiene implicaciones directas para dónde invertir en mejorar la experiencia." },
      { heading: "Métricas de experiencia que conectan con negocio", body: "NPS (Net Promoter Score), CES (Customer Effort Score) y CSAT (Customer Satisfaction Score) son las tres métricas de experiencia más usadas. Cada una mide algo diferente y es más útil en diferentes contextos.", extended_body: "El NPS pregunta cuánto recomendarías esta marca (escala 0-10). Es buen predictor de crecimiento orgánico. El CES pregunta cuánto esfuerzo requirió resolver tu problema (escala 1-7). Es buen predictor de churn. El CSAT pregunta qué tan satisfecho estuviste con esta interacción. Es útil para medir touchpoints específicos pero malo como métrica de lealtad general. La combinación de las tres da una imagen más completa que cualquiera sola." },
      { heading: "Diseño de servicio: cuando la experiencia es el producto", body: "El diseño de servicio es la disciplina que aplica principios de diseño a la creación y mejora de servicios — incluyendo los procesos, las personas y los sistemas que los hacen posibles. En una agencia, entender diseño de servicio permite crear valor más allá de la comunicación.", extended_body: "Las herramientas principales del diseño de servicio son el blueprint de servicio (que muestra tanto lo visible para el cliente como los procesos internos que lo soportan), los proto-servicios (versiones mínimas para testear antes de escalar), y el role-playing (simular la experiencia de servicio con el equipo antes de implementar). Estas herramientas permiten diseñar la experiencia de la misma manera que se diseña una campaña: con intención, iteración y testeo." },
    ],
    exercise: "Mapeá el journey completo de un cliente de una marca con la que trabajés. Identificá los tres momentos de mayor impacto emocional (positivos o negativos) y los tres puntos de mayor fricción. Diseñá una intervención específica para mejorar el momento de mayor impacto negativo y una para crear un momento de sorpresa positiva donde hoy no existe ninguno.",
    takeaway: "La experiencia no es lo que hacés — es lo que el cliente recuerda que hiciste. Diseñar para la memoria es diferente a diseñar para la satisfacción.",
    quiz: { question: "¿Qué métrica de experiencia es mejor predictor de churn (abandono)?", options: ["NPS (Net Promoter Score)", "CSAT (Customer Satisfaction Score)", "CES (Customer Effort Score)", "CLV (Customer Lifetime Value)"], correct: 2, explanation: "El CES (Customer Effort Score) mide cuánto esfuerzo requirió al cliente resolver su problema o lograr su objetivo. La investigación muestra que es el mejor predictor de abandono — los clientes que tienen que hacer mucho esfuerzo son los que más probabilidades tienen de irse." },
    resources: [
      { type: "tool", title: "Customer Journey Map Template", author: "Miro", description: "Plantilla gratuita de journey map en Miro con instrucciones de facilitación paso a paso.", url: "https://miro.com/templates/customer-journey-map/" },
      { type: "article", title: "Empathy Maps and Customer Journeys", author: "Nielsen Norman Group", description: "Guía gratuita del NNG sobre cómo combinar mapas de empatía y journey maps.", url: "https://www.nngroup.com/articles/customer-journey-mapping/" },
    ],
  },

{
    id: "m34", slug: "pitching-y-nuevos-negocios", title: "Pitching y nuevos negocios: ganar cuentas con más criterio y menos azar",
    description: "Cómo estructurar el proceso de nuevos negocios de una agencia para que sea sistemático, eficiente y con mayor tasa de conversión.",
    month: "Mes 17", level_required: 4, xp_reward: 420, lessons: 4, status: "available", theme: "Experiencia",
    opening: "La mayoría de las agencias tratan el pitch como un evento excepcional que requiere heroísmo de todo el equipo. Las mejores agencias lo tratan como un proceso con etapas bien definidas, criterios de calificación claros y una máquina de aprendizaje que mejora con cada resultado.",
    sections: [
      { heading: "Calificar antes de participar: el filtro que más ahorra", body: "El tiempo invertido en un pitch que no se debería haber aceptado es tiempo que no se puede invertir en clientes existentes ni en pitches con mayor probabilidad de éxito. La calificación rigurosa de oportunidades antes de comprometerse es la primera palanca para mejorar la rentabilidad del proceso de nuevos negocios.", extended_body: "Los criterios de calificación más importantes para una agencia: fit estratégico (¿es un cliente para el que podemos hacer trabajo que nos enorgullezca?), probabilidad real de ganar (¿hay una razón genuina para creer que esta cuenta puede ser nuestra?), costo del pitch (¿qué sacrificamos para participar?), y valor potencial (¿vale la inversión si ganamos?). Una agencia que responde estas cuatro preguntas honestamente antes de cada pitch reduce su participación en pitches pero aumenta significativamente su tasa de conversión.", example: { label: "Ejemplo real", content: "Una agencia mediana participaba en promedio de 12 pitches anuales y ganaba 2. Al implementar un proceso de calificación riguroso, bajó a 6 pitches anuales y ganó 3. Con la mitad de los pitches ganó más cuentas — y el tiempo liberado de los pitches descartados se invirtió en propuestas no solicitadas para cuentas target que resultaron en 2 cuentas adicionales sin pitch competitivo." } },
      { heading: "La estructura del pitch ganador", body: "Los pitches que ganan no son los más creativos — son los más relevantes. La diferencia está en cuánto de la presentación habla del cliente y cuánto habla de la agencia. Los pitches que pierden suelen hablar principalmente de la agencia; los que ganan hablan principalmente del cliente.", extended_body: "La estructura de un pitch ganador: primero mostrar que entendiste el negocio del cliente mejor que ellos mismos (insight de negocio), luego mostrar que entendiste el problema real que están tratando de resolver (redefinición del problema), luego presentar la propuesta como respuesta específica a ese problema (solución contextualizada), luego mostrar por qué tu agencia es la más capaz para ejecutarla (credenciales relevantes), y finalmente presentar el siguiente paso concreto (cierre accionable)." },
      { heading: "Construir relación antes del pitch: la ventaja del conocimiento", body: "Las cuentas más valiosas raramente se ganan en un pitch competitivo abierto — se construyen a lo largo del tiempo con relaciones que generan confianza antes de que haya una licitación formal. Las agencias que invierten en construir relaciones con prospectos antes de que exista una oportunidad formal tienen una ventaja enorme cuando esa oportunidad aparece.", extended_body: "La estrategia de relación pre-pitch tiene tres momentos: el contenido (producir análisis, perspectivas o investigaciones que el prospecto encuentre genuinamente valiosas), la conexión (buscar encuentros en el contexto donde el prospecto ya está — industria, eventos, comunidades), y la conversación (cuando la relación tiene suficiente confianza, explorar directamente si hay problemas que la agencia podría ayudar a resolver, sin esperar una licitación)." },
      { heading: "Aprender de los pitches perdidos", body: "Cada pitch perdido contiene información valiosa para mejorar los siguientes. Las agencias que sistematizan el aprendizaje post-pitch mejoran significativamente su tasa de conversión a lo largo del tiempo.", extended_body: "El debrief post-pitch debería responder cuatro preguntas: ¿perdimos en la propuesta estratégica, en la ejecución creativa, en la presentación o en la relación? ¿Qué dijo el cliente que valoró de los que ganaron y qué echó de menos en nuestra propuesta? ¿Qué suposición nuestra sobre el cliente resultó incorrecta? ¿Había señales durante el proceso que indicaban el resultado antes de la decisión final? El patrón que emerge de responder estas preguntas en cada pitch perdido es el insumo más valioso para mejorar el proceso." },
    ],
    exercise: "Analizá el último pitch que participó tu agencia (ya sea ganado o perdido). Usando el framework de la estructura del pitch ganador, evaluá qué porcentaje de la presentación hablaba del cliente y qué porcentaje de la agencia. Identificá el momento más débil de la presentación y proponé cómo lo mejorarías.",
    takeaway: "Ganar un pitch no empieza el día de la presentación — empieza el día en que decidís si vale la pena participar.",
    quiz: { question: "¿Qué característica comparten los pitches que ganan consistentemente?", options: ["Son los más creativos y originales de la licitación", "Hablan principalmente del cliente, no de la agencia", "Tienen la producción visual más alta de los participantes", "Presentan el mayor número de ideas y conceptos"], correct: 1, explanation: "Los pitches ganadores hablan principalmente del cliente — su negocio, su problema real, su contexto. La agencia aparece como la solución específica para ese contexto, no como protagonista." },
    resources: [
      { type: "video", title: "The Art of the Pitch", author: "The Futur · YouTube", description: "Chris Do y su equipo explican cómo estructurar propuestas creativas que ganan.", url: "https://www.youtube.com/watch?v=mHTnlwM_gkw" },
      { type: "podcast", title: "2Bobs — Creative Entrepreneurship", author: "David C. Baker y Blair Enns", description: "El podcast más valioso sobre el negocio de las agencias creativas. Todos los episodios son gratuitos.", url: "https://2bobs.com" },
    ],
  },

{
    id: "m35", slug: "cultura-organizacional-agencias", title: "Cultura organizacional: lo que pasa cuando nadie mira",
    description: "Qué es realmente la cultura de una organización, cómo se forma, cómo se cambia y por qué es el factor más determinante del desempeño a largo plazo.",
    month: "Mes 18", level_required: 4, xp_reward: 440, lessons: 4, status: "available", theme: "Organizaciones",
    opening: "La cultura organizacional es lo que la gente hace cuando nadie los está mirando. No los valores enmarcados en la pared, no el discurso del CEO en el kick-off anual — sino los comportamientos reales que se modelan, se refuerzan y se replican en el trabajo cotidiano. Cambiar la cultura es el proyecto más difícil y más importante que puede emprender una organización.",
    sections: [
      { heading: "Cómo se forma realmente la cultura: el modelo de Schein", body: "Edgar Schein identificó tres niveles de cultura organizacional. El nivel más visible son los artefactos: los comportamientos observables, el diseño del espacio, los rituales. El nivel medio son los valores declarados: lo que la organización dice que valora. El nivel más profundo son los supuestos básicos: las creencias inconscientes que realmente guían el comportamiento cuando hay tensión entre valores.", extended_body: "El gap entre valores declarados y supuestos básicos es la fuente de la mayoría de los problemas de cultura. Una organización puede declarar que valora la innovación pero tener un supuesto básico de que los errores se castigan. En esa tensión, el supuesto básico siempre gana: las personas aprenden que es más seguro no innovar, independientemente de lo que diga el manual de valores. Cambiar la cultura requiere cambiar los supuestos básicos, no reescribir los valores.", example: { label: "Ejemplo real", content: "Una agencia tenía 'autonomía y confianza' como valor central pero en la práctica todos los presupuestos mayores a $500 requerían aprobación del director. El mensaje real era: 'no confiamos en vuestro criterio con dinero'. Cambiar ese proceso — dando autonomía real con rendición de cuentas clara — tuvo más impacto en la cultura que años de comunicación interna sobre los valores." } },
      { heading: "Los líderes como modelos de cultura", body: "La cultura de una organización refleja el comportamiento de sus líderes con una fidelidad sorprendente. Lo que los líderes hacen — no lo que dicen — determina qué comportamientos son realmente valorados y cuáles son sancionados.", extended_body: "Los mecanismos a través de los cuales los líderes transmiten cultura son sutiles pero poderosos: a qué prestan atención y qué miden, cómo reaccionan a las crisis y a los errores, a quién promueven y a quién despiden, cómo asignan recursos, y qué comportamientos modelan en sus propias decisiones cotidianas. Un líder que declara valorar el trabajo en equipo pero que en la práctica toma todas las decisiones importantes unilateralmente transmite el mensaje real: la jerarquía importa más que la colaboración." },
      { heading: "Cambiar la cultura: por qué es tan difícil y qué funciona", body: "Las intervenciones de cultura que no funcionan: los talleres de valores, las campañas de comunicación interna, los posters con palabras inspiradoras. Las que funcionan: cambiar las prácticas específicas que producen los comportamientos no deseados, promover a personas que modelan los comportamientos deseados, y actuar rápidamente ante violaciones visibles de los valores declarados.", extended_body: "El marco de cambio cultural más efectivo trabaja en tres frentes simultáneamente. Primero, cambiar los sistemas y procesos que refuerzan los comportamientos actuales — si el sistema de incentivos premia el trabajo individual y se quiere promover la colaboración, el cambio empieza en el sistema de incentivos, no en los discursos. Segundo, cambiar las historias que circulan en la organización — qué casos de éxito se celebran, qué errores se usan como aprendizaje público. Tercero, cambiar a las personas en roles de liderazgo cuando representan incompatibilidad irresoluble con la cultura que se quiere construir." },
      { heading: "Cultura en agencias: los desafíos específicos del sector", body: "Las agencias tienen desafíos culturales específicos que no se encuentran en la misma forma en otras industrias: la tensión entre creatividad y proceso, la dependencia emocional del trabajo de aprobación externa, la cultura del 'pitch heroico' que agota equipos, y la dificultad de escalar sin perder la calidad.", extended_body: "La cultura de la urgencia crónica es uno de los problemas más comunes en agencias. Cuando todo es urgente, nada lo es — y el equipo aprende que la urgencia es el modo por defecto, no la excepción. Las agencias que logran salir de ese patrón lo hacen estableciendo explícitamente qué es urgente de verdad y protegiendo activamente el tiempo para el trabajo profundo que no puede hacerse bajo presión constante." },
    ],
    exercise: "Hacé un diagnóstico de cultura de tu agencia o equipo usando los tres niveles de Schein. Lista tres artefactos culturales observables, tres valores declarados, y —siendo muy honesto— dos o tres supuestos básicos que realmente guían el comportamiento cuando hay tensión. ¿Dónde están los gaps más grandes entre lo que se declara y lo que se hace?",
    takeaway: "La cultura no se declara — se modela. Y se modela en las decisiones pequeñas de todos los días, no en los discursos anuales.",
    quiz: { question: "¿Cuál es el nivel más profundo y más difícil de cambiar de la cultura organizacional según Schein?", options: ["Los artefactos observables como el diseño del espacio y los rituales", "Los valores declarados en los manuales y comunicaciones", "Los supuestos básicos inconscientes que guían el comportamiento real", "Los sistemas de incentivos y compensación"], correct: 2, explanation: "Los supuestos básicos son creencias inconscientes sobre cómo funciona el mundo que se formaron a lo largo del tiempo y que guían el comportamiento real — especialmente cuando hay tensión entre los valores declarados y la situación." },
    resources: [
      { type: "video", title: "How Great Leaders Inspire Action", author: "Simon Sinek · TED", description: "Por qué la cultura empieza con el porqué. La charla más influyente sobre liderazgo cultural.", url: "https://www.ted.com/talks/simon_sinek_how_great_leaders_inspire_action" },
      { type: "article", title: "How Pixar Fosters Collective Creativity", author: "Ed Catmull · HBR", description: "El co-fundador de Pixar explica el sistema que permitió sostener calidad durante décadas.", url: "https://hbr.org/2014/09/how-pixar-fosters-collective-creativity" },
    ],
  },

{
    id: "m36", slug: "el-futuro-de-las-agencias", title: "El futuro de las agencias: escenarios y posicionamiento estratégico",
    description: "Cómo están cambiando las agencias, qué modelos están emergiendo y cómo posicionarse estratégicamente para seguir siendo relevantes en los próximos cinco años.",
    month: "Mes 18", level_required: 4, xp_reward: 440, lessons: 4, status: "available", theme: "Organizaciones",
    opening: "La industria de las agencias está en un proceso de transformación estructural. Las fuerzas que la están cambiando — la IA, la in-housing de capacidades por parte de los clientes, la fragmentación de medios, la presión sobre márgenes — no son temporales. Son cambios estructurales que requieren respuestas estratégicas, no tácticas.",
    sections: [
      { heading: "Las fuerzas que están transformando la industria", body: "Cuatro fuerzas estructurales están cambiando el modelo de negocio de las agencias de manera simultánea. La automatización de la producción por IA reduce el valor de las agencias que compiten en velocidad y volumen. El in-housing — las empresas que internalizan capacidades creativas — reduce la demanda de servicios no diferenciados. La fragmentación de medios hace que la planificación y compra de medios sea más compleja pero también más automatizable. La presión sobre márgenes empuja a las agencias hacia modelos de trabajo más eficientes o más diferenciados.", extended_body: "La combinación de estas cuatro fuerzas crea un escenario de bifurcación: las agencias que no se diferencian claramente van a seguir perdiendo valor y márgenes hasta que no sean sostenibles. Las que encuentran y defienden una posición genuinamente diferenciada van a tener más valor que nunca — precisamente porque habrá menos de ellas.", example: { label: "Ejemplo real", content: "Una agencia de publicidad tradicional en Argentina perdió el 40% de su facturación en tres años cuando sus principales clientes internalizaron la producción digital y la gestión de redes sociales. En lugar de intentar recuperar ese negocio, pivotaron hacia consultoría de transformación de marca — un servicio que requería el tipo de expertise y perspectiva externa que los equipos internos no podían proveer. Hoy facturan más que antes con menos clientes y márgenes significativamente mayores." } },
      { heading: "Los modelos emergentes: consultora, especialista, plataforma", body: "Tres modelos de agencia están ganando relevancia frente al modelo generalista tradicional. La consultora creativa opera upstream — antes del brief, en la definición del problema y la estrategia. La agencia especialista domina profundamente una disciplina, industria o tipo de trabajo específico. La agencia-plataforma combina talento propio con una red de especialistas independientes para escalar y desescalar según la demanda.", extended_body: "El modelo consultora requiere capacidad de diagnóstico, lenguaje de negocio y acceso a decisores senior — diferente al modelo de agencia ejecutora. El modelo especialista requiere construir y defender la posición de expertise durante años — no es un movimiento de corto plazo. El modelo plataforma requiere capacidad de curaduría de talento y gestión de calidad en redes distribuidas. Ninguno es mejor en abstracto — cada uno requiere decisiones de inversión y capacidades distintas." },
      { heading: "Las capacidades que van a definir las agencias del futuro", body: "Más allá del modelo específico, hay capacidades que van a ser determinantes para cualquier tipo de agencia en los próximos años: la capacidad de integrar IA en los procesos de producción, la capacidad de medir y demostrar impacto de negocio, la capacidad de construir y vender productos propios además de servicios.", extended_body: "La capacidad de demostrar impacto de negocio — no solo entregar campañas sino mostrar su contribución al crecimiento del cliente — es la que más va a diferenciar a las agencias sostenibles de las que no lo serán. Los clientes van a seguir pagando bien por trabajo que pueden medir que genera valor. Van a dejar de pagar por trabajo que no puede demostrar su impacto." },
      { heading: "Tu rol en la transformación: agente de cambio desde adentro", body: "La transformación de la industria no es algo que te pasa — es algo que podés influir desde donde estás. Las personas que entienden las fuerzas de cambio y tienen la voluntad de actuar sobre ellas son las que construyen las agencias del futuro.", extended_body: "Tres acciones concretas que cualquier persona puede tomar hoy para posicionarse para el futuro de la industria. Primero, desarrollar fluidez con IA — no como sustituto del criterio sino como amplificador. Segundo, construir capacidad de medición — aprender a conectar el trabajo creativo con métricas de negocio. Tercero, desarrollar perspectiva de negocio del cliente — entender la industria, los competidores y los objetivos estratégicos de cada cliente con la misma profundidad que un consultor." },
    ],
    exercise: "Escribí tu escenario personal para los próximos tres años en la industria. ¿En qué modelo de agencia querés estar trabajando? ¿Qué capacidades necesitás desarrollar para ser valioso en ese modelo? ¿Qué estás haciendo hoy que te acerca a ese escenario y qué te aleja?",
    takeaway: "El futuro de las agencias no está determinado. Está siendo construido ahora por las personas que deciden actuar en lugar de esperar.",
    quiz: { question: "¿Cuál de estos modelos de agencia opera principalmente upstream, antes del brief, en la definición del problema y la estrategia?", options: ["La agencia especialista", "La agencia-plataforma", "La consultora creativa", "La agencia de producción"], correct: 2, explanation: "La consultora creativa se diferencia por operar antes del brief — en la definición del problema, la estrategia y el reencuadre del desafío. Requiere capacidad de diagnóstico, lenguaje de negocio y acceso a decisores senior." },
    resources: [
      { type: "podcast", title: "The Futur with Chris Do", author: "Chris Do", description: "El podcast más relevante sobre el futuro del diseño y la comunicación creativa. Gratuito.", url: "https://thefutur.com/podcast" },
      { type: "podcast", title: "2Bobs", author: "David C. Baker y Blair Enns", description: "Conversaciones sobre el negocio de las agencias creativas. Cada episodio es gratuito.", url: "https://2bobs.com" },
    ],
  },

{
    id: "m37", slug: "cultura-del-hacer", title: "La Cultura del Hacer: aprender haciendo junto a otros",
    description: "La metodología que convierte el conocimiento tácito en capacidad organizacional: cómo el líder enseña, el aprendiz ejecuta y el participante documenta para que el saber circule y crezca.",
    month: "Mes 19", level_required: 4, xp_reward: 340, lessons: 5, status: "available", theme: "La Cultura del Hacer",
    opening: "En la mayoría de las organizaciones, el conocimiento vive en la cabeza de las personas más experimentadas y muere con ellas cuando se van. La Cultura del Hacer es una respuesta concreta a ese problema: un sistema donde aprender y hacer son la misma cosa, y donde cada proyecto es simultáneamente una entrega y una transferencia de conocimiento.",
    sections: [
      { heading: "Los tres roles: Líder, Aprendiz y Participante", body: "La Cultura del Hacer estructura cada proyecto en tres roles que no son jerarquías sino funciones de aprendizaje. El Líder dirige y enseña — comparte su criterio mientras toma decisiones. El Aprendiz ejecuta bajo orientación — hace el trabajo real con apoyo visible. El Participante observa y documenta — registra el proceso, las decisiones y los aprendizajes para que el conocimiento no se pierda.", extended_body: "Los tres roles son temporales y rotativos. El Aprendiz de hoy es el Líder de mañana en ese mismo tema. El Participante que documenta hoy se convierte en Aprendiz en el próximo ciclo. Esa rotación crea una cultura donde enseñar es parte del trabajo de todos.", example: { label: "Ejemplo real", content: "En una agencia de diseño, el director creativo (Líder) tomó a una diseñadora júnior (Aprendiz) para desarrollar un sistema de identidad de marca. Una ejecutiva de cuentas (Participante) documentó el proceso de toma de decisiones. Tres meses después, la diseñadora lideró el próximo proyecto de identidad con un nuevo aprendiz, y la ejecutiva podía explicar a los clientes por qué las decisiones visuales se tomaban como se tomaban." } },
      { heading: "El rol del Líder: dirigir sin monopolizar", body: "El Líder no es el que hace todo — es el que hace visible cómo piensa mientras hace. La diferencia entre un experto que trabaja solo y un Líder que enseña es que el segundo narra su proceso: por qué tomó esa decisión, qué alternativas descartó, qué señales lo llevaron a ese camino.", extended_body: "El mayor error de los Líderes novatos es hacer el trabajo ellos mismos 'porque es más rápido'. Esa eficiencia de corto plazo destruye el aprendizaje. La regla práctica: si el Aprendiz no podría replicar el proceso sin el Líder después del proyecto, el Líder no cumplió su rol." },
      { heading: "El rol del Aprendiz: ejecutar con preguntas activas", body: "El Aprendiz no es un asistente que espera instrucciones — es alguien que ejecuta con curiosidad activa. La diferencia está en la calidad de las preguntas: no '¿qué hago?' sino '¿por qué hacemos esto así y no de otra manera?'", extended_body: "El Aprendiz efectivo hace explícito su razonamiento antes de actuar: 'voy a hacer X porque entiendo que el objetivo es Y — ¿estoy bien orientado?' Esa explicitación permite al Líder corregir supuestos erróneos antes de que se conviertan en trabajo equivocado." },
      { heading: "El rol del Participante: documentar para que el conocimiento circule", body: "El Participante es el guardián del aprendizaje colectivo. Su trabajo no es solo registrar qué se hizo — es capturar por qué se hizo, qué se consideró y descartó, y qué podría hacerse diferente la próxima vez.", extended_body: "Una buena documentación de Participante tiene cuatro elementos: el contexto del proyecto, las decisiones clave con su razonamiento, los momentos de fricción y cómo se resolvieron, y las preguntas abiertas que quedaron sin responder." },
      { heading: "Implementar la Cultura del Hacer sin parar la operación", body: "La objeción más común es que no hay tiempo para enseñar mientras se trabaja. La respuesta es que no se trata de agregar tiempo — se trata de cambiar cómo se usa el tiempo que ya existe.", extended_body: "El primer ciclo siempre es incómodo. A partir del tercer o cuarto ciclo, los roles se vuelven naturales y el tiempo extra se reduce mientras el aprendizaje se acelera.", example: { label: "Ejemplo real", content: "Una agencia mediana implementó la Cultura del Hacer en proyectos de estrategia de contenidos. En el primer trimestre, los proyectos tardaban un 20% más. En el tercer trimestre, tardaban un 15% menos porque los Aprendices habían internalizado el proceso. La documentación de los Participantes se convirtió en el mejor material de onboarding para personas nuevas." } },
    ],
    exercise: "Identificá un proyecto próximo en tu área. Asigná los tres roles explícitamente. Al finalizar, pedile al Participante que comparta su documentación con el equipo. ¿Qué aprendiste de ese rol que no esperabas?",
    takeaway: "El conocimiento que no se transfiere no es un activo — es un riesgo. La Cultura del Hacer convierte cada proyecto en una inversión doble: en el entregable y en el equipo.",
    quiz: { question: "¿Cuál es el mayor error que comete un Líder en la Cultura del Hacer?", options: ["Dar demasiado feedback al Aprendiz durante el proceso", "Hacer el trabajo él mismo porque es más rápido, sin enseñar el proceso", "Dejar que el Participante intervenga en las decisiones", "Documentar el proceso en lugar de dejarlo al Participante"], correct: 1, explanation: "Hacer el trabajo solo destruye el aprendizaje. La eficiencia de corto plazo del Líder que no enseña es la ineficiencia de largo plazo de la organización que no aprende." },
    resources: [
      { type: "article", title: "Pair Programming: Benefits and Best Practices", author: "Martin Fowler", description: "Artículo gratuito sobre el modelo de trabajo en pares — la versión del software de la Cultura del Hacer.", url: "https://martinfowler.com/articles/on-pair-programming.html" },
      { type: "video", title: "The Power of Mentorship in the Workplace", author: "HBR · YouTube", description: "Cómo el modelo mentor-aprendiz genera aprendizaje más efectivo que el entrenamiento formal.", url: "https://www.youtube.com/watch?v=9pX0DKBE0VQ" },
    ],
  },

{
    id: "m38", slug: "documentacion-como-practica", title: "Documentar para aprender: cómo el registro transforma la experiencia en conocimiento",
    description: "Por qué documentar no es burocracia sino la práctica que convierte lo que vivió una persona en lo que puede aprender toda la organización.",
    month: "Mes 19", level_required: 4, xp_reward: 340, lessons: 4, status: "available", theme: "La Cultura del Hacer",
    opening: "Documentar tiene mala reputación en las agencias. Se asocia con formularios y procesos lentos. Pero hay un tipo de documentación completamente diferente: la que captura el razonamiento detrás de las decisiones, los caminos que no se tomaron y los aprendizajes que de otra manera se pierden cuando el proyecto termina.",
    sections: [
      { heading: "La diferencia entre documentar procesos y documentar aprendizajes", body: "Documentar procesos es registrar qué se hizo y en qué orden. Documentar aprendizajes es registrar por qué se tomaron las decisiones que se tomaron, qué se consideró y descartó, y qué haría diferente quien estuvo ahí.", extended_body: "El test más simple: si alguien que no estuvo en el proyecto lee la documentación, ¿aprende algo que cambiaría cómo haría su trabajo? Si no, es documentación de proceso. Si sí, es documentación de aprendizaje.", example: { label: "Ejemplo real", content: "Una agencia documentaba todos sus proyectos con timelines y listas de entregables. Cuando intentaron replicar el éxito de una campaña premiada no pudieron porque ningún documento capturaba las decisiones creativas. Implementaron '5 minutos de cierre' al final de cada proyecto respondiendo tres preguntas. En 18 meses, la tasa de aprobación en primera instancia subió un 35%." } },
      { heading: "Formatos de documentación que la gente realmente usa", body: "La documentación que nadie lee no sirve. Los formatos más efectivos son los más cortos y más específicos: una página con las tres decisiones más importantes del proyecto y su razonamiento, o una conversación grabada de cierre entre el Líder y el Aprendiz.", extended_body: "El principio es que el formato debería costar menos tiempo producirlo que el valor que genera. Una retrospectiva de 30 minutos bien facilitada genera más aprendizaje que un informe de 20 páginas que nadie termina." },
      { heading: "El diario de proyecto: una práctica individual con impacto colectivo", body: "El diario de proyecto es registrar en tiempo real observaciones, preguntas, hipótesis y aprendizajes. No es un informe de estado — es una conversación del profesional consigo mismo sobre lo que está viviendo.", extended_body: "Los mejores diarios son breves (no más de 5 minutos por entrada), honestos (incluyen dudas y errores) y regulares (una entrada por día de trabajo aunque sea una sola oración)." },
      { heading: "El repositorio vivo: convertir documentos en conocimiento accesible", body: "Una biblioteca de aprendizajes solo tiene valor si la gente puede encontrar lo que necesita cuando lo necesita. El repositorio vivo no es una carpeta en un servidor — es un sistema que conecta preguntas actuales con experiencias pasadas.", extended_body: "La diferencia entre guardar documentos y construir un repositorio vivo está en si los documentos se etiquetan por problema (no por proyecto) y si hay una práctica regular de revisitarlos cuando aparecen problemas similares." },
    ],
    exercise: "Al cerrar tu próximo proyecto, dedicá 20 minutos a escribir una página de aprendizajes con tres preguntas: ¿qué funcionó y por qué?, ¿qué no funcionó y por qué?, ¿qué haría diferente? Compartila con alguien que no estuvo en el proyecto.",
    takeaway: "Una organización que no documenta sus aprendizajes está condenada a cometer los mismos errores con personas distintas.",
    quiz: { question: "¿Qué distingue la documentación de aprendizajes de la documentación de procesos?", options: ["Es más larga y detallada", "Captura el razonamiento detrás de las decisiones, no solo qué se hizo", "La hacen solo los líderes del proyecto", "Se hace al inicio del proyecto, no al final"], correct: 1, explanation: "La documentación de aprendizajes captura el por qué de las decisiones, los caminos descartados y lo que haría diferente quien estuvo ahí." },
    resources: [
      { type: "tool", title: "Notion — Templates de documentación", author: "Notion", description: "Templates gratuitos para documentar proyectos creativos con aprendizajes estructurados.", url: "https://www.notion.so/templates/category/docs" },
      { type: "video", title: "Working Out Loud — John Stepper", author: "YouTube", description: "Cómo hacer visible el trabajo mientras se hace, generando aprendizaje colectivo.", url: "https://www.youtube.com/watch?v=XpjNl3Z10uc" },
    ],
  },

{
    id: "m39", slug: "diseno-como-lenguaje", title: "Diseño como lenguaje: lo que cualquier área puede aprender de pensar visualmente",
    description: "El diseño no es solo estética ni es solo el trabajo de los diseñadores. Es una forma de pensar, comunicar y resolver problemas que mejora el trabajo de cualquier área de la agencia.",
    month: "Mes 20", level_required: 4, xp_reward: 360, lessons: 4, status: "available", theme: "Pensamiento visual",
    opening: "Cuando alguien de cuentas dice 'no entiendo de diseño', está confundiendo el oficio con el lenguaje. No necesitás saber usar Figma para entender por qué una decisión visual comunica algo diferente a lo que el cliente espera. El pensamiento visual es una habilidad de cualquiera.",
    sections: [
      { heading: "Qué es el diseño cuando no es decoración", body: "El diseño en su sentido más profundo no es hacer las cosas bonitas — es tomar decisiones sobre cómo algo funciona, comunica y se experimenta. Un brief bien estructurado es diseño. Una reunión con agenda clara es diseño. La pregunta del diseño es siempre: ¿cómo organizamos esto para que funcione mejor para quien lo usa?", extended_body: "Tim Brown, ex-CEO de IDEO, define el diseño como la creación de soluciones que son deseables para las personas, viables para el negocio y técnicamente posibles. Esa definición no menciona estética — menciona la intersección de tres criterios que cualquier persona puede evaluar.", example: { label: "Ejemplo real", content: "Un equipo de cuentas rediseñó el formato de sus reportes mensuales aplicando principios de diseño de información: jerarquía visual, economía de elementos, contexto para los números. Los clientes empezaron a responder con preguntas estratégicas en lugar de pedidos de aclaración. El tiempo de reunión de revisión bajó de 90 a 40 minutos." } },
      { heading: "Los cuatro principios visuales que todo profesional debería conocer", body: "Jerarquía, contraste, proximidad y alineación son cuatro principios que no requieren formación técnica para aplicar pero que transforman radicalmente la calidad de cualquier comunicación visual.", extended_body: "Jerarquía: lo más importante se ve primero. Contraste: las diferencias visuales comunican diferencias de significado. Proximidad: los elementos relacionados se agrupan. Alineación: los elementos alineados comunican orden y relación." },
      { heading: "Cómo dar feedback de diseño sin ser diseñador", body: "'No me gusta el azul' es una opinión. '¿Cómo comunica este color la confianza que la marca necesita proyectar?' es una pregunta de diseño. La diferencia entre las dos no solo cambia la conversación — cambia la calidad del trabajo que resulta.", extended_body: "El framework para dar feedback productivo: describir lo que ves objetivamente, conectarlo con el objetivo de comunicación, y hacer preguntas sobre la intención antes de proponer cambios." },
      { heading: "Pensamiento visual aplicado al trabajo de cada área", body: "Medios puede mapear la experiencia del usuario con una campaña a través de múltiples touchpoints. Cuentas puede visualizar el journey de decisión de un cliente. El pensamiento visual no pertenece a ningún área — pertenece a cualquier problema complejo que se beneficia de ser visto antes de ser resuelto.", extended_body: "La práctica más simple: dibujar una idea antes de escribirla. No tiene que ser técnico — puede ser un diagrama de cajas y flechas. El acto de trasladar una idea a espacio visual obliga a resolver ambigüedades que el lenguaje escrito puede esconder." },
    ],
    exercise: "Tomá una idea, un proceso o un problema de tu trabajo actual y representalo visualmente en papel sin texto o con el mínimo posible. Compartila con alguien de otra área y observá qué preguntas genera.",
    takeaway: "Cuando podés ver un problema, podés resolverlo mejor. El pensamiento visual no es una habilidad de diseñadores — es una habilidad de cualquiera que resuelve problemas complejos.",
    quiz: { question: "¿Cuál es la diferencia entre 'no me gusta el azul' y '¿cómo comunica este color la confianza que la marca necesita?'", options: ["La primera es más específica y útil", "La segunda conecta la decisión visual con el objetivo y genera una conversación productiva", "La primera es más eficiente", "La segunda solo la pueden hacer personas con formación en diseño"], correct: 1, explanation: "El feedback que conecta la decisión visual con el objetivo genera conversaciones productivas independientemente de la formación de quien lo da." },
    resources: [
      { type: "video", title: "The Universal Arts of Graphic Design", author: "PBS Off Book · YouTube", description: "Documental gratuito sobre los principios universales del diseño gráfico que aplican en cualquier contexto.", url: "https://www.youtube.com/watch?v=sTi5SNgxs9k" },
      { type: "tool", title: "Canva — Diseño visual gratuito", author: "Canva", description: "La herramienta más accesible para aplicar principios de diseño visual sin formación técnica.", url: "https://www.canva.com" },
    ],
  },

{
    id: "m40", slug: "direccion-de-arte-para-todos", title: "Dirección de arte: qué decide, por qué importa y cómo colaborar con ella",
    description: "Qué hace realmente un director de arte, cómo toma decisiones y cómo cualquier área puede colaborar más efectivamente con el trabajo creativo visual.",
    month: "Mes 20", level_required: 4, xp_reward: 360, lessons: 4, status: "available", theme: "Pensamiento visual",
    opening: "La dirección de arte es una de las disciplinas más mal entendidas dentro de una agencia. Desde afuera parece que se trata de elegir fuentes y colores. Desde adentro es un proceso de toma de decisiones que traduce estrategia en experiencia visual.",
    sections: [
      { heading: "Qué decide realmente un director de arte", body: "Un director de arte decide cómo se ve y se siente una comunicación. La elección de una tipografía comunica personalidad de marca. La distribución del espacio comunica jerarquía de información. El tratamiento de las imágenes comunica el tono emocional.", extended_body: "Las decisiones de un director de arte se clasifican en tres niveles: de sistema (¿qué lenguaje visual define esta marca?), de campaña (¿cómo se expresa este sistema para este mensaje?), y de pieza (¿cómo se aplica en este formato específico?).", example: { label: "Ejemplo real", content: "Un cliente aprobó la estrategia de 'marca accesible y cercana' pero rechazaba todas las propuestas visuales porque 'no se ve premium'. La ejecutiva de cuentas facilitó una conversación que hizo visible la contradicción entre los dos atributos. El director de arte mostró referencias de marcas que habían resuelto esa tensión. La campaña se aprobó en la segunda presentación." } },
      { heading: "El proceso de dirección de arte: de la estrategia a la pieza", body: "El proceso empieza con la comprensión del problema de comunicación, la investigación de referencias, la definición del concepto visual, el moodboard, el layout y finalmente la producción.", extended_body: "El moodboard no es una presentación de propuestas finales — es una exploración de territorios emocionales para validar dirección antes de invertir en producción. Entender esas etapas ayuda a cualquier área a participar en el momento correcto con el tipo de input correcto." },
      { heading: "Cómo briefear un director de arte para obtener lo que necesitás", body: "El brief para un director de arte debería incluir el estado emocional que busca generar, las referencias que el cliente admira y por qué, y las restricciones no negociables.", extended_body: "La pregunta más poderosa antes de que empiece a trabajar: '¿Cómo debería sentirse alguien que ve esto?' Esa pregunta fuerza a articular el objetivo emocional de la comunicación, que es el insumo más valioso para las decisiones visuales." },
      { heading: "Presentar y defender trabajo de arte frente al cliente", body: "El trabajo de arte muere en las presentaciones cuando se presenta sin contexto estratégico. 'Elegimos esta paleta porque se ve bien' pierde frente a cualquier objeción. 'Elegimos esta paleta porque crea la sensación que tu marca necesita' abre una conversación productiva.", extended_body: "El framework para presentar: recordar el objetivo acordado, explicar cómo cada decisión visual sirve a ese objetivo, y mostrar las alternativas consideradas y descartadas con su razonamiento." },
    ],
    exercise: "La próxima vez que presentes o recibas trabajo de dirección de arte, aplicá el framework de tres pasos: objetivo, cómo cada decisión lo sirve, y alternativas consideradas.",
    takeaway: "El trabajo de arte que no puede explicarse en términos estratégicos es decoración. El que sí puede es comunicación.",
    quiz: { question: "¿Cuál es la pregunta más poderosa para orientar el trabajo de un director de arte antes de que empiece?", options: ["¿Qué colores prefiere el cliente?", "¿Cuánto tiempo tenés disponible?", "¿Cómo debería sentirse alguien que ve esto?", "¿Qué formatos hay que cubrir?"], correct: 2, explanation: "La pregunta sobre el estado emocional que la pieza debe generar fuerza a articular el objetivo real de la comunicación — el insumo más valioso para las decisiones visuales." },
    resources: [
      { type: "tool", title: "Behance — Portafolios de dirección de arte", author: "Adobe Behance", description: "Plataforma gratuita para explorar trabajo de los mejores directores de arte del mundo.", url: "https://www.behance.net" },
      { type: "video", title: "How to Give Creative Feedback", author: "The Futur · YouTube", description: "El proceso de dar feedback creativo que genera conversaciones productivas.", url: "https://www.youtube.com/watch?v=YLBDkz0TwLM" },
    ],
  },

{
    id: "m41", slug: "sistema-de-identidad-visual", title: "Sistemas de identidad visual: por qué la coherencia es una decisión estratégica",
    description: "Qué es un sistema de identidad visual, cómo funciona y por qué su consistencia tiene consecuencias directas en el negocio de una marca.",
    month: "Mes 21", level_required: 4, xp_reward: 380, lessons: 4, status: "available", theme: "Pensamiento visual",
    opening: "Una identidad visual no es un logo. Es un sistema de decisiones consistentes sobre cómo una marca se ve y se siente en todos sus puntos de contacto. Cuando ese sistema funciona bien, la marca se vuelve reconocible incluso sin que aparezca su nombre.",
    sections: [
      { heading: "Los componentes de un sistema de identidad visual", body: "Un sistema efectivo tiene al menos seis componentes que trabajan juntos: el logo y sus variaciones, la paleta de colores con reglas de aplicación, el sistema tipográfico con jerarquías, el lenguaje fotográfico, los elementos gráficos de soporte, y la voz visual general.", extended_body: "La diferencia entre una guía de marca con reglas y una con principios: las reglas dicen 'usá el Pantone 285C'. Los principios dicen 'este azul comunica confianza técnica — úsalo cuando quieras transmitir capacidad sin distancia'. Los principios generan mejores decisiones en situaciones nuevas.", example: { label: "Ejemplo real", content: "Una fintech desarrolló su identidad con una guía técnicamente perfecta pero sin principios para el contexto local. El equipo interno empezó a tomar decisiones ad-hoc. En dos años, la marca tenía cuatro versiones paralelas en diferentes canales. El costo de unificarla fue tres veces el de haberla diseñado con principios adaptables desde el inicio." } },
      { heading: "Por qué la coherencia visual genera confianza", body: "La coherencia visual no es un capricho estético — es un mecanismo de confianza. Cuando una marca se ve igual en todos sus puntos de contacto, el cerebro la reconoce más rápido y le atribuye más credibilidad.", extended_body: "Las marcas coherentes aprovechan el mecanismo de reconocimiento visual para construir familiaridad que reduce la fricción de decisión. Las marcas inconsistentes obligan al cerebro a hacer más trabajo de evaluación en cada contacto." },
      { heading: "Cómo evolucionar una identidad sin perder coherencia", body: "Las marcas que duran tienen identidades que evolucionan con coherencia. La diferencia entre un rediseño que fortalece y uno que confunde está en si mantiene los elementos de reconocimiento mientras actualiza los que han envejecido.", extended_body: "El framework de evolución: ¿qué elementos son reconocidos y valorados? (no cambiarlos o con mucho cuidado), ¿qué elementos han envejecido? (candidatos a evolucionar), ¿qué nuevos territorios necesita la marca para plataformas que no existían cuando se creó el sistema? (extensiones)." },
      { heading: "El rol de cada área en mantener vivo un sistema de identidad", body: "Un sistema de identidad vive o muere por las decisiones cotidianas de todas las personas que producen materiales de marca — no solo los diseñadores.", extended_body: "La responsabilidad de la coherencia de marca requiere que todas las áreas entiendan el sistema lo suficiente para tomar decisiones informadas. No significa que todos sean diseñadores — significa que todos pueden distinguir cuándo una decisión fortalece el sistema y cuándo lo debilita." },
    ],
    exercise: "Auditá la identidad visual de una marca con la que trabajes revisando cinco puntos de contacto diferentes. ¿Cuánta coherencia hay? ¿Qué le diría esa inconsistencia a alguien que ve la marca por primera vez?",
    takeaway: "Una marca coherente no es un lujo estético — es una ventaja competitiva que acumula familiaridad que ninguna campaña puede generar sola.",
    quiz: { question: "¿Cuál es la diferencia clave entre una guía de marca con reglas y una con principios?", options: ["Las reglas son más fáciles de seguir", "Los principios explican el porqué y generan mejores resultados en situaciones nuevas", "Las reglas son más efectivas para marcas grandes", "No hay diferencia práctica"], correct: 1, explanation: "Los principios explican la intención detrás de las reglas. Eso permite tomar mejores decisiones en situaciones que las reglas nunca anticiparon." },
    resources: [
      { type: "video", title: "Branding: Why It Matters and How to Build It", author: "The Futur · YouTube", description: "Los principios fundamentales de construcción de marca con ejemplos reales.", url: "https://www.youtube.com/watch?v=l-S2Y3SF3bM" },
      { type: "tool", title: "Coolors — Generador de paletas de color", author: "Coolors", description: "Herramienta gratuita para explorar y crear paletas de color para sistemas de identidad visual.", url: "https://coolors.co" },
    ],
  },

{
    id: "m42", slug: "planificacion-de-medios-estrategica", title: "Planificación de medios: dónde, cuándo y a quién, con criterio",
    description: "Cómo se toman las decisiones de dónde aparece un mensaje para que llegue a las personas correctas en el momento correcto, y por qué esas decisiones son tan estratégicas como la creatividad.",
    month: "Mes 22", level_required: 4, xp_reward: 400, lessons: 4, status: "available", theme: "Medios como estrategia",
    opening: "La mejor campaña del mundo no funciona si llega a las personas equivocadas, en el momento equivocado o en el canal equivocado. La planificación de medios es la disciplina que toma esas decisiones.",
    sections: [
      { heading: "El principio central: el contexto cambia el mensaje", body: "El mismo mensaje comunicado en diferentes contextos produce efectos completamente diferentes. Un aviso de seguros de salud en una sala de espera médica llega en un momento de alta relevancia. El mismo aviso en una app de entretenimiento llega en un momento de baja receptividad.", extended_body: "El concepto de 'momento de receptividad' es central en la planificación moderna. Las personas no son igualmente receptivas a todos los mensajes en todos los momentos. La planificación efectiva busca llegar a la audiencia cuando está en el estado mental más predispuesto a recibir el mensaje.", example: { label: "Ejemplo real", content: "Una marca de seguros de auto descubrió que sus avisos en YouTube tenían tasas de conversión tres veces más altas cuando aparecían antes de reviews de autos que en contenido general. Concentrar el 70% del presupuesto en ese contexto específico aumentó las conversiones en un 140% sin cambiar el presupuesto total." } },
      { heading: "Los tres objetivos de medios y cómo se miden", body: "Toda planificación balancea alcance (cuántas personas distintas ven el mensaje), frecuencia (cuántas veces lo ve cada persona) y relevancia (qué tan bien el contexto del medio se alinea con el mensaje).", extended_body: "Optimizar los tres con presupuesto limitado es el desafío central. Las mejores planificaciones testean antes de escalar en lugar de comprometer todo el presupuesto desde el inicio." },
      { heading: "Medios digitales vs. medios tradicionales: complementariedad, no competencia", body: "La discusión 'digital vs. tradicional' es un falso dilema. Los medios más efectivos son los que se eligen en función del objetivo y la audiencia.", extended_body: "Los medios tradicionales generan awareness masivo y credibilidad. Los digitales ofrecen precisión de targeting, medición en tiempo real y bajo costo de experimentación. La planificación moderna usa cada uno donde sus ventajas importan más." },
      { heading: "Cómo cualquier área contribuye a una mejor planificación de medios", body: "La planificación de medios no debería ser una decisión tomada solo por el equipo de medios al final del proceso creativo. Las mejores planificaciones emergen de una conversación que incluye estrategia, creatividad y medios desde el inicio.", extended_body: "El equipo creativo sabe qué formato necesita una idea para llegar a su potencial. El equipo de cuentas sabe qué contextos son más relevantes para el cliente. El equipo de datos sabe qué canales tienen mejor rendimiento histórico." },
    ],
    exercise: "Tomá una campaña activa o reciente. Para cada canal usado, respondé: ¿en qué estado de ánimo está la audiencia cuando lo consume? ¿El contexto ayuda o dificulta la recepción del mensaje? Proponé un cambio de distribución de presupuesto basado en ese análisis.",
    takeaway: "La creatividad decide qué se dice. La planificación de medios decide si alguien lo escucha. Las dos son estratégicas.",
    quiz: { question: "¿Qué es el 'momento de receptividad' en planificación de medios?", options: ["El momento del día con mayor audiencia en cada medio", "El estado mental en que la audiencia está más predispuesta a recibir el mensaje", "El momento del año con mayores ventas para la categoría", "El período con mayor presupuesto disponible para invertir"], correct: 1, explanation: "El momento de receptividad es el estado mental y emocional en que la audiencia está más abierta al mensaje. Llegar en el contexto correcto puede multiplicar el impacto de la misma inversión." },
    resources: [
      { type: "tool", title: "Think with Google", author: "Google", description: "Plataforma gratuita con insights de audiencias, tendencias de consumo de medios y herramientas de planificación.", url: "https://www.thinkwithgoogle.com" },
      { type: "video", title: "The Science of Advertising", author: "Byron Sharp · YouTube", description: "Byron Sharp explica con evidencia empírica cómo funciona realmente la planificación de medios.", url: "https://www.youtube.com/watch?v=VB-bOaVNbXk" },
    ],
  },

{
    id: "m43", slug: "compra-de-medios-digitales", title: "Cómo funciona la compra de medios digitales: lo que toda la agencia debería saber",
    description: "El ecosistema de compra programática, social y buscadores explicado para no especialistas, con foco en qué decisiones importan y cómo afectan el trabajo de todas las áreas.",
    month: "Mes 22", level_required: 4, xp_reward: 400, lessons: 4, status: "available", theme: "Medios como estrategia",
    opening: "El ecosistema de medios digitales cambió tan rápido que dejó a muchos profesionales de agencia con conocimiento superficial de algo que impacta directamente su trabajo. Una ejecutiva de cuentas que no entiende la compra programática no puede tener conversaciones estratégicas sobre inversión digital.",
    sections: [
      { heading: "El ecosistema digital simplificado: quién hace qué", body: "El ecosistema tiene tres grandes tipos de actores: los anunciantes (marcas que quieren llegar a su audiencia), los publishers (medios y plataformas que tienen audiencia), y los intermediarios tecnológicos (plataformas que conectan a los dos primeros de manera eficiente).", extended_body: "La compra programática es el proceso de comprar inventario publicitario digital de manera automatizada en tiempo real usando datos. En el tiempo que tarda una página web en cargar, se realizan miles de micro-subastas que determinan qué aviso aparece para qué usuario.", example: { label: "Ejemplo real", content: "Un cliente preguntó por qué su campaña en Meta tenía CPMs tan altos en diciembre. El ejecutivo de cuentas pudo explicar que en Q4 todos los anunciantes aumentan inversión para la temporada navideña, elevando el precio del inventario en subasta. Esa explicación transformó la conversación de 'la agencia gasta mal' a 'entendemos la dinámica del mercado'." } },
      { heading: "Social, search y programática: qué hace cada uno y cuándo usarlo", body: "Social (Meta, TikTok, LinkedIn) es ideal para construir audiencias y generar awareness. Search (Google, Bing) captura intención declarada. La compra programática escala alcance con eficiencia.", extended_body: "La decisión de mix no es solo de presupuesto — es de objetivo. Para generar conocimiento: social y programática. Para capturar demanda existente: search es insustituible. Para recuperar a personas con interés previo: retargeting programático." },
      { heading: "Métricas digitales que importan vs. las que solo parecen importantes", body: "CTR, impresiones, alcance — todas estas métricas dicen algo sobre comportamiento de audiencia, pero ninguna dice directamente si la inversión está generando resultado de negocio.", extended_body: "Las métricas que conectan medios con negocio: costo por conversión, ROAS, costo de adquisición de cliente (para conversión directa), brand lift y share of search (para construcción de marca)." },
      { heading: "Privacidad y datos: el cambio estructural que redefine el targeting", body: "La eliminación de cookies de terceros y las regulaciones de privacidad están transformando cómo funciona el targeting digital. Las agencias que no entienden este cambio asesoran con un modelo en proceso de obsolescencia.", extended_body: "El futuro se orienta hacia: first-party data (datos propios con consentimiento), contextual targeting (relevancia al contenido, no al perfil del usuario), y publisher-based audiences. Las marcas que construyan first-party data ahora tienen una ventaja estructural." },
    ],
    exercise: "Tomá una campaña digital activa. Clasificá las métricas reportadas en tres categorías: métricas de proceso, de resultado intermedio y de negocio. ¿Qué categoría domina los reportes? ¿Qué métricas de negocio podrían agregarse?",
    takeaway: "Entender cómo funciona la compra de medios digitales te convierte en un colaborador más efectivo con los especialistas y un asesor más valioso para tus clientes.",
    quiz: { question: "¿Qué es la compra programática?", options: ["La compra de espacios con acuerdos fijos de precio y posición", "El proceso automatizado de comprar inventario digital en tiempo real usando datos", "La planificación mensual de la inversión digital", "La negociación directa con Meta y Google para mejores precios"], correct: 1, explanation: "La compra programática es el proceso automatizado que en fracciones de segundo conecta anunciantes con inventario digital, usando datos para optimizar quién ve qué mensaje." },
    resources: [
      { type: "tool", title: "Google Skillshop — Certificaciones gratuitas", author: "Google", description: "Cursos gratuitos de Google sobre Ads, Analytics, YouTube y más. Certificaciones reconocidas.", url: "https://skillshop.withgoogle.com" },
      { type: "tool", title: "Meta Blueprint — Cursos gratuitos", author: "Meta", description: "Plataforma de formación gratuita de Meta para aprender las herramientas publicitarias.", url: "https://www.facebook.com/business/learn" },
    ],
  },

{
    id: "m44", slug: "gestion-de-cuentas-como-valor", title: "Gestión de cuentas como creación de valor: más allá del coordinador",
    description: "Qué diferencia a un ejecutivo de cuentas que despacha pedidos de uno que crea valor estratégico, y cómo ese diferencial impacta en la retención de clientes.",
    month: "Mes 23", level_required: 4, xp_reward: 420, lessons: 4, status: "available", theme: "Cuentas como valor",
    opening: "El ejecutivo de cuentas tiene un problema de identidad en la industria. Desde adentro de la agencia a veces se lo percibe como el mensajero que lleva el brief de un lado al otro. Ninguna de esas descripciones captura el valor real que puede crear alguien que entiende profundamente tanto el negocio del cliente como las capacidades de la agencia.",
    sections: [
      { heading: "El espectro del ejecutivo de cuentas: de coordinador a asesor", body: "Hay un espectro claro. En un extremo está el coordinador: gestiona plazos, transmite briefs, reporta avances. En el otro está el asesor estratégico: entiende el negocio del cliente en profundidad, anticipa necesidades antes de que se expresen.", extended_body: "La diferencia no es de experiencia — es de orientación. El coordinador se orienta hacia el proceso. El asesor se orienta hacia el resultado. Solo el segundo construye relaciones resistentes a la competencia de precio.", example: { label: "Ejemplo real", content: "Una ejecutiva de cuentas, ante la amenaza de que el cliente moviera trabajo a un equipo interno, presentó un análisis del costo de oportunidad de esa decisión en términos de tiempo interno, curva de aprendizaje y proyectos perdidos. El cliente mantuvo el presupuesto. Lo que la salvó no fue la relación personal — fue que podía hablar el lenguaje de negocio del cliente." } },
      { heading: "Entender el negocio del cliente: la inversión que más retorna", body: "El activo más valioso de un ejecutivo de cuentas no es su habilidad de gestión de proyectos — es su conocimiento del negocio del cliente. Eso incluye su industria, su modelo de negocio, sus competidores y sus objetivos estratégicos más allá del brief.", extended_body: "Las tres fuentes de conocimiento: las conversaciones informales donde aparece la información real, las fuentes públicas sobre la industria del cliente, y las conversaciones con personas de otras áreas del cliente más allá del contacto directo." },
      { heading: "Proactividad: proponer antes de que pidan", body: "El ejecutivo de cuentas reactivo espera el brief. El proactivo lleva propuestas antes de que el cliente las pida. La agencia que propone es percibida como socia; la que espera es percibida como proveedor.", extended_body: "La proactividad efectiva no es proponer por proponer — es proponer con contexto y relevancia. El ejecutivo monitorea el negocio del cliente, detecta oportunidades antes de que el cliente las nombre, y llega con una propuesta específica." },
      { heading: "El mapa de poder interno del cliente", body: "Los proyectos complejos no tienen un cliente — tienen múltiples stakeholders con diferentes objetivos y definiciones de éxito. El ejecutivo que no tiene ese mapa trabaja a ciegas.", extended_body: "El mapa tiene cuatro dimensiones para cada stakeholder: nivel de influencia formal, actitud hacia la agencia (promotor, neutral o detractor), motivaciones e intereses personales, y relaciones entre los stakeholders entre sí." },
    ],
    exercise: "Para uno de tus clientes actuales, hacé un mapa de stakeholders con las cuatro dimensiones. Identificá promotores, neutrales y detractores. Diseñá una estrategia específica para cada grupo.",
    takeaway: "Los ejecutivos de cuentas que crean valor no gestionan proyectos — gestionan relaciones estratégicas. Y las relaciones estratégicas son el activo menos replicable de cualquier agencia.",
    quiz: { question: "¿Qué diferencia principalmente a un ejecutivo de cuentas asesor de uno coordinador?", options: ["El asesor tiene más años de experiencia", "El asesor se orienta hacia el resultado e impacto de negocio, no solo hacia el proceso", "El asesor maneja más cuentas simultáneamente", "El asesor tiene más conocimiento técnico sobre producción"], correct: 1, explanation: "La diferencia fundamental es de orientación: el coordinador gestiona el proceso, el asesor gestiona el resultado." },
    resources: [
      { type: "video", title: "Building Trust with Clients", author: "The Futur · YouTube", description: "Cómo construir relaciones de confianza con clientes que van más allá de la transacción.", url: "https://www.youtube.com/watch?v=eD3M_WJGqTo" },
      { type: "article", title: "The Trusted Advisor — Key Principles", author: "The Table Group", description: "Los principios clave de construcción de confianza en servicios profesionales.", url: "https://www.tablegroup.com/topics-and-resources/" },
    ],
  },

{
    id: "m45", slug: "brief-perfecto", title: "El brief perfecto: cómo formular el problema que genera la mejor solución",
    description: "Por qué el brief es la decisión más importante de cualquier proyecto y cómo escribir uno que libere al equipo creativo en lugar de limitarlo.",
    month: "Mes 23", level_required: 4, xp_reward: 420, lessons: 4, status: "available", theme: "Cuentas como valor",
    opening: "La mayoría de los proyectos mediocres no fallaron en la ejecución — fallaron en el brief. Un brief mal formulado produce trabajo brillante que resuelve el problema equivocado. La habilidad de escribir briefs excelentes es una de las más valiosas y menos enseñadas en cualquier agencia.",
    sections: [
      { heading: "Los seis elementos que no pueden faltar en un brief excelente", body: "Un brief excelente tiene: el problema de negocio real, la audiencia con suficiente especificidad, el único objetivo de comunicación, la restricción más importante, el insight que abre el espacio creativo, y la métrica de éxito.", extended_body: "El elemento más difícil y más valioso es el insight. Un insight no es un dato — es una comprensión de la tensión entre lo que la audiencia quiere y lo que tiene. Un insight bien formulado hace que el equipo creativo diga 'sí, eso es exactamente así'.", example: { label: "Ejemplo real", content: "Una agencia recibió el brief: 'comunicar que nuestros seguros de vida son más accesibles'. El equipo reformuló: 'Las personas no compran seguros de vida porque hablar de la propia muerte se siente como rendirse, pero en realidad comprar un seguro es el acto de amor más concreto que podés hacer por tu familia'. La campaña resultante tuvo el mejor recall de la historia de la marca." } },
      { heading: "El brief como conversación: cómo construirlo con el cliente", body: "Los mejores briefs no se reciben — se construyen. La conversación para construirlo es donde el ejecutivo de cuentas agrega más valor: traduciendo el problema de negocio en el problema de comunicación correcto.", extended_body: "Las cinco preguntas que no pueden faltar: ¿qué tiene que cambiar en la cabeza, el corazón o el comportamiento de la audiencia? ¿Qué les impide cambiar hoy? ¿Cuál es el único mensaje más importante? ¿Cómo vamos a saber si funcionó? ¿Hay algo que el equipo creativo necesita saber para no cometer el error evidente?" },
      { heading: "El brief interno: cómo la agencia se briefa a sí misma", body: "Muchos problemas de calidad no empiezan en el brief del cliente — empiezan en cómo ese brief se traduce y transmite internamente.", extended_body: "La práctica de 'brief de validación' — donde el equipo creativo devuelve su comprensión antes de empezar a trabajar — reduce significativamente los retrabajos por malentendidos. No es burocracia: es una inversión de 30 minutos que puede ahorrar días de trabajo." },
      { heading: "Re-briefing: cuándo y cómo cambiar de dirección sin perder al cliente", body: "Cuando un proyecto va en la dirección equivocada, la peor decisión es seguir adelante sin decir nada. La mejor es llegar con la observación y con un camino alternativo.", extended_body: "El protocolo: identificar en qué punto el brief actual no lleva al resultado que el cliente necesita, proponer un brief revisado, y explicar qué cambia y por qué vale la pena. Presentado así, el re-briefing fortalece la confianza." },
    ],
    exercise: "Tomá el último brief que recibiste o escribiste. Evalualo con los seis elementos del módulo. Reescribilo con los elementos que faltan.",
    takeaway: "El brief es el contrato de expectativas de un proyecto. Cuando es vago, cualquier resultado parece que lo cumple. Cuando es preciso, el equipo sabe exactamente qué tiene que lograr.",
    quiz: { question: "¿Qué es un insight en el contexto de un brief de comunicación?", options: ["Un dato cuantitativo sobre el tamaño de la audiencia", "Una comprensión de la tensión entre lo que la audiencia quiere y lo que tiene, que abre el espacio creativo", "La descripción del tono de comunicación de la campaña", "El objetivo de ventas que la campaña debe lograr"], correct: 1, explanation: "El insight es la comprensión de una tensión real en la audiencia. Un buen insight abre inmediatamente posibilidades creativas que no existían sin él." },
    resources: [
      { type: "video", title: "How to Write a Creative Brief", author: "The Futur · YouTube", description: "Proceso completo para escribir un brief creativo que libere al equipo en lugar de limitarlo.", url: "https://www.youtube.com/watch?v=dG4C9RQfQBo" },
      { type: "tool", title: "Brief Template — Miro", author: "Miro", description: "Template gratuito de brief creativo con los elementos correctos para estructurar proyectos.", url: "https://miro.com/templates/creative-brief/" },
    ],
  },

{
    id: "m46", slug: "produccion-creativa", title: "Producción creativa: donde la idea se convierte en realidad",
    description: "Cómo funciona la producción de piezas creativas y cómo todas las áreas pueden colaborar para que la idea llegue entera a la ejecución.",
    month: "Mes 24", level_required: 4, xp_reward: 440, lessons: 4, status: "available", theme: "Cuentas como valor",
    opening: "La producción es el momento donde la idea se encuentra con la realidad. Es donde los presupuestos se ajustan, los plazos se comprimen y las decisiones tomadas en la presentación resultan más complejas de lo que parecían.",
    sections: [
      { heading: "El rol del productor creativo: traductor entre ideas y ejecución", body: "El productor creativo es la persona que sabe qué cuesta, cuánto tarda y qué es técnicamente posible. Sin ese conocimiento, las ideas brillantes quedan atrapadas en presupuestos insuficientes.", extended_body: "El mejor productor no dice 'no se puede' — dice 'para lograr ese efecto con este presupuesto, la solución más efectiva es esta'. Esa capacidad de encontrar caminos alternativos que mantienen la intención creativa dentro de las restricciones es lo que distingue a un productor estratégico.", example: { label: "Ejemplo real", content: "Un director creativo diseñó una campaña que requería rodar en tres países simultáneamente. La productora calculó el costo real: tres veces el presupuesto. En lugar de rechazar la idea, propuso rodar en una sola locación con diseño de producción que evocara los tres países. El resultado fue visualmente indistinguible al 30% del costo." } },
      { heading: "El proceso de producción audiovisual: de la idea al final", body: "Tres etapas claramente diferenciadas: preproducción (todo lo que se planea antes de grabar), producción (el rodaje) y postproducción (edición, color, sonido, aprobaciones).", extended_body: "El error más costoso: tomar decisiones de preproducción durante la producción. Cambiar el casting el día del rodaje o modificar el storyboard durante la grabación multiplica exponencialmente los costos." },
      { heading: "Producción digital: escalabilidad vs. personalización", body: "La producción de contenidos digitales tiene una lógica diferente. La escalabilidad — producir muchas variaciones para diferentes audiencias, formatos y canales — es central.", extended_body: "El modelo de producción modular: crear un 'master' de contenido y generar múltiples derivados con mínimo esfuerzo adicional. Una campaña bien diseñada puede generar 50 piezas a partir de 10 assets principales." },
      { heading: "Cómo todas las áreas afectan la calidad de la producción", body: "La calidad final depende de que el brief sea claro antes de empezar, de que la idea esté suficientemente desarrollada cuando llega a producción, y de que las aprobaciones lleguen en tiempo y con claridad.", extended_body: "Los tres problemas más costosos y más evitables: cambios de brief una vez empezada la producción, desarrollos creativos incompletos que llegan a producción sin resolverse, y aprobaciones circulares donde cada revisión genera nuevos cambios." },
    ],
    exercise: "Mapea el proceso de producción de un proyecto reciente desde el brief hasta la entrega. Identificá los tres momentos de mayor fricción. ¿Eran evitables? ¿Quién podría haberlos prevenido?",
    takeaway: "La producción no es donde se ejecutan las ideas — es donde se revela si las ideas estaban realmente resueltas.",
    quiz: { question: "¿Cuál es el error más costoso en producción audiovisual?", options: ["Elegir proveedores demasiado caros en preproducción", "Tomar decisiones de preproducción durante el rodaje", "Tener demasiadas personas del cliente en el set", "Rodar más material del necesario"], correct: 1, explanation: "Cambiar decisiones de preproducción durante el rodaje multiplica exponencialmente los costos porque el equipo y los recursos ya están contratados y en movimiento." },
    resources: [
      { type: "tool", title: "Frame.io — Revisión de video", author: "Frame.io", description: "Herramienta para revisión y aprobación de material audiovisual. Plan gratuito disponible.", url: "https://frame.io" },
      { type: "video", title: "How Film Production Works", author: "Crash Course · YouTube", description: "Serie gratuita que explica el proceso completo de producción audiovisual de manera accesible.", url: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtN_7NKL_OjF1UuFQDrIaWFn" },
    ],
  },

{
    id: "m47", slug: "salir-de-la-comoditizacion", title: "Salir de la comoditización: construir lo que nadie puede copiar fácilmente",
    description: "Por qué las agencias quedan atrapadas en la guerra de precios y cómo construir una posición diferenciada sostenible en el tiempo.",
    month: "Mes 25", level_required: 4, xp_reward: 460, lessons: 5, status: "available", theme: "Salir de la comoditización",
    opening: "La comoditización de las agencias no es un accidente — es el resultado predecible de ofrecer servicios que cualquier agencia puede replicar. Cuando los clientes no pueden distinguir claramente el valor de una agencia versus otra, la única diferencia perceptible es el precio.",
    sections: [
      { heading: "Por qué las agencias se comoditizan: el diagnóstico honesto", body: "Las agencias se comoditizan por tres razones: ofrecen los mismos servicios con el mismo lenguaje, aceptan cualquier tipo de cliente y proyecto sin criterio, y no invierten en capacidades propias que tarden tiempo en desarrollarse.", extended_body: "La comoditización también es resultado de la asimetría de información que las agencias permiten persistir. Cuando un cliente no puede distinguir la calidad de dos propuestas antes de trabajar, decide por precio.", example: { label: "Ejemplo real", content: "Una agencia de Montevideo se especializó en comunicación para el sector financiero regulado en Latinoamérica. En tres años se convirtió en la referencia del sector. Sus honorarios eran 40% más altos que el mercado general y tenían lista de espera. Ningún competidor podía construir esa combinación de expertise regulatorio y cultural en menos de cinco años." } },
      { heading: "Las tres fuentes de diferenciación sostenible", body: "La diferenciación sostenible viene de: especialización profunda (conocer un sector mejor que nadie), metodología propia (un proceso que genera resultados demostrablemente superiores), y activos intelectuales (datos, herramientas o frameworks que solo la agencia posee).", extended_body: "La especialización sectorial es la más poderosa porque requiere tiempo para construirse. Una agencia con cinco años en una industria sabe cosas que ningún recién llegado puede aprender en seis meses." },
      { heading: "Crear productos propios: de vender tiempo a vender valor", body: "La transición de agencia de servicios a agencia con productos propios cambia fundamentalmente la lógica de valor. Un producto se puede escalar independientemente del tiempo del equipo.", extended_body: "Los productos propios más comunes en agencias innovadoras: diagnósticos estandarizados que se venden como producto, metodologías de workshop propietarias, herramientas digitales de medición, y programas de formación que posicionan a la agencia como experta." },
      { heading: "Posicionamiento: la decisión que precede a todas las demás", body: "El posicionamiento no es el tagline — es la decisión de a quién sirve la agencia, con qué problema, de qué manera diferenciada. Esa decisión estructura todas las demás.", extended_body: "La objeción más común es el miedo a excluir oportunidades. La realidad es la contraria: una agencia sin posicionamiento claro excluye las oportunidades más valiosas porque no puede ganarlas. Los clientes que buscan un experto no van a elegir a un generalista." },
      { heading: "Design-led como ventaja competitiva: lecciones de DesignSingapore", body: "El estudio de DesignSingapore encontró que las organizaciones que integran el diseño en su estrategia tienen significativamente mejor desempeño en innovación, retención de clientes y crecimiento.", extended_body: "Para una agencia, ser design-led no significa tener buenos diseñadores — significa usar el pensamiento de diseño en todas las decisiones estratégicas. Los 22 principios identificados por DesignSingapore son un mapa hacia esa transformación." },
    ],
    exercise: "Hacé un diagnóstico honesto de la posición de tu agencia. ¿Podría cualquier competidor hacer lo mismo? ¿Qué sabemos o podemos hacer que nadie más puede replicar fácilmente? Proponé un posicionamiento más específico y los tres pasos que lo harían creíble.",
    takeaway: "La comoditización no es un destino inevitable — es la consecuencia de no haber decidido quiénes son.",
    quiz: { question: "¿Cuál de estas fuentes de diferenciación es la más difícil de replicar?", options: ["Una propuesta creativa brillante para una campaña", "Una especialización sectorial construida durante cinco o más años", "Un equipo de personas con mucho talento individual", "Una tecnología de producción de última generación"], correct: 1, explanation: "La especialización sectorial profunda requiere años para construirse — conocimiento acumulado que no se puede comprar ni copiar rápidamente." },
    resources: [
      { type: "article", title: "Design-Led Culture Study Playbook", author: "DesignSingapore Council", description: "El playbook completo y gratuito con los 22 principios para construir una organización design-led.", url: "https://designsingapore.org/resources/a-playbook-for-building-a-design-led-culture/" },
      { type: "video", title: "How to Find Your Niche", author: "The Futur · YouTube", description: "Chris Do explica cómo identificar y defender una especialización que diferencie a una agencia.", url: "https://www.youtube.com/watch?v=Z_cp4wdSKEw" },
    ],
  },

{
    id: "m48", slug: "cliente-centrismo-avanzado", title: "Cliente-centrismo avanzado: de la empatía a la co-creación",
    description: "Cómo pasar del cliente-centrismo como filosofía al cliente-centrismo como práctica sistemática, incluyendo métodos de investigación real y co-creación con usuarios.",
    month: "Mes 25", level_required: 4, xp_reward: 460, lessons: 4, status: "available", theme: "Cliente-centrismo avanzado",
    opening: "Decir que tu agencia es cliente-céntrica es tan común que ya no significa nada. La diferencia entre las agencias que solo lo dicen y las que lo practican está en si tienen métodos sistemáticos para entender a las personas reales que usan o reciben los productos y servicios de sus clientes.",
    sections: [
      { heading: "Investigación de usuario real vs. supuestos documentados", body: "La mayoría de los briefs describen a la audiencia objetivo combinando datos demográficos con suposiciones sobre comportamiento. Esa descripción rara vez viene de investigación real con personas reales.", extended_body: "Las tres técnicas más accesibles sin laboratorio de UX: entrevistas en profundidad de 30-45 minutos con 5 a 8 personas (suficientes para identificar patrones), observación contextual (acompañar a personas mientras hacen lo que el proyecto intenta mejorar), y análisis de conversaciones en comunidades donde la audiencia ya habla del tema.", example: { label: "Ejemplo real", content: "Una agencia recibió el brief para una campaña de adopción de mascotas. El equipo asumía que la barrera era el costo. Cuatro entrevistas revelaron que la barrera real era el miedo al apego y la pérdida. La campaña que resultó tuvo el triple de tasa de conversión que la campaña anterior." } },
      { heading: "Personas de diseño: más allá del perfil demográfico", body: "Una persona de diseño no es un perfil demográfico con nombre y foto. Es una síntesis de insights de investigación real que captura motivaciones, frustraciones y comportamientos de un tipo específico de usuario.", extended_body: "Una persona efectiva tiene cinco elementos: contexto (cómo es su vida), motivaciones (por qué haría algo), frustraciones (qué le impide hacerlo), comportamiento actual (cómo resuelve hoy el problema), y una cita que captura su actitud en su propia voz." },
      { heading: "Co-creación: cuando el usuario es parte del proceso de diseño", body: "La co-creación lleva el cliente-centrismo un paso más adelante: en lugar de diseñar para los usuarios, diseña con ellos.", extended_body: "La co-creación no significa que los usuarios toman las decisiones de diseño — sigue siendo responsabilidad del equipo tomar decisiones informadas. Significa que las decisiones se toman con información real de quienes van a vivir las consecuencias." },
      { heading: "Diseño inclusivo: diseñar para los bordes para mejorar el todo", body: "El diseño inclusivo crea productos y comunicaciones que funcionan para el mayor rango posible de personas. Cuando se diseña para los excluidos, el resultado suele funcionar mejor para todos.", extended_body: "El mensaje de texto fue diseñado para personas con problemas auditivos. Los audiolibros para personas con discapacidad visual. Cada innovación pensada para minorías se convirtió en tecnología masiva porque resolvía problemas que todos tenemos en ciertas situaciones." },
    ],
    exercise: "Para un proyecto actual, realizá al menos tres entrevistas cortas (20-30 minutos) con personas reales de la audiencia objetivo. Preguntales sobre su vida y cómo resuelven hoy el problema que tu proyecto intenta abordar. ¿Qué cambiaría en el proyecto con esa información?",
    takeaway: "El cliente-centrismo sin investigación real no es cliente-centrismo — es proyectar las propias suposiciones con más empatía.",
    quiz: { question: "¿Cuántas entrevistas en profundidad son típicamente suficientes para identificar patrones significativos?", options: ["Al menos 50 para resultados estadísticamente significativos", "1 o 2 para una perspectiva representativa", "5 a 8 para identificar patrones sin llegar a la saturación", "20 o más para cubrir toda la diversidad"], correct: 2, explanation: "La investigación cualitativa con 5 a 8 entrevistas es típicamente suficiente para identificar los patrones más importantes. El objetivo es comprensión profunda, no representatividad estadística." },
    resources: [
      { type: "article", title: "How to Conduct User Interviews", author: "Nielsen Norman Group", description: "Guía gratuita completa del NNG sobre cómo facilitar entrevistas de usuario efectivas.", url: "https://www.nngroup.com/articles/user-interviews/" },
      { type: "tool", title: "Persona Template — Miro", author: "Miro", description: "Template gratuito para construir personas de diseño basadas en investigación real.", url: "https://miro.com/templates/personas/" },
    ],
  },

{
    id: "m49", slug: "innovacion-en-servicios", title: "Innovación en servicios: crear nuevas ofertas que el mercado necesita pero no pidió",
    description: "El proceso para identificar oportunidades de nuevos servicios que emergen de la comprensión profunda de los problemas reales de los clientes.",
    month: "Mes 26", level_required: 4, xp_reward: 480, lessons: 4, status: "available", theme: "Cliente-centrismo avanzado",
    opening: "Los clientes no siempre saben lo que necesitan — pero siempre saben qué les duele. La innovación en servicios más valiosa no viene de preguntarle a los clientes qué quieren sino de observar qué problemas no resueltos tienen.",
    sections: [
      { heading: "Jobs to Be Done: entender qué contratan los clientes realmente", body: "La teoría de Clayton Christensen propone que los clientes no compran productos o servicios — contratan algo para hacer un trabajo. Una empresa no contrata una agencia creativa — contrata la capacidad de conectar con sus audiencias de manera que genere resultado de negocio.", extended_body: "La pregunta de Jobs to Be Done para innovación es: ¿qué trabajo real están intentando hacer nuestros clientes que hoy no tienen una solución satisfactoria? Eso frecuentemente revela oportunidades que ningún brief habría articulado.", example: { label: "Ejemplo real", content: "Una agencia de contenidos B2B descubrió que el trabajo real de sus clientes no era 'producir contenido' sino 'demostrarle al directorio que el marketing generaba pipeline de ventas'. Desarrollaron un servicio de atribución de contenido a ventas que ningún competidor ofrecía. En 18 meses representaba el 35% de su facturación con el margen más alto de la empresa." } },
      { heading: "Identificar el espacio blanco: dónde nadie resuelve el problema", body: "El espacio blanco es la intersección entre un problema real y significativo y la ausencia de soluciones satisfactorias. Encontrarlo requiere observar el comportamiento real de los clientes.", extended_body: "Las señales de espacio blanco: los clientes construyendo soluciones internas que no deberían tener que construir, los workarounds que las personas crean, las quejas recurrentes sobre la misma fricción en múltiples clientes." },
      { heading: "El concierge MVP: testear antes de escalar", body: "Un nuevo servicio es una hipótesis. El concierge MVP es la forma más rápida de testearla: una persona hace manualmente lo que el servicio eventual haría de manera eficiente.", extended_body: "Si los clientes no pagan por la versión manual, probablemente no pagarán por la escalada. Si pagan y quedan satisfechos, hay evidencia antes de invertir en construirlo completamente." },
      { heading: "Llevar la innovación a toda la agencia", body: "La innovación en servicios no es responsabilidad exclusiva de la dirección — es una capacidad que puede distribuirse cuando se crean los sistemas y la cultura correcta.", extended_body: "Las organizaciones que más innovan tienen un sistema para capturar las observaciones de todos los niveles: las fricciones cotidianas, las preguntas sin respuesta, los workarounds que el equipo inventa. Esas observaciones, agregadas, revelan patrones que ninguna persona sola podría ver." },
    ],
    exercise: "Durante los próximos cinco días, registrá cada vez que un cliente pida algo fuera del scope habitual o que notes una fricción que no pueden resolver. Al final, buscá patrones. ¿Hay alguna oportunidad de nuevo servicio?",
    takeaway: "Los clientes no innovan los servicios que necesitan — observan el problema. Las agencias que observan bien pueden diseñar las soluciones que los clientes no sabían que podían pedir.",
    quiz: { question: "¿Qué es un concierge MVP en el contexto de prototipado de servicios?", options: ["Un servicio premium para los mejores clientes", "Una versión manual del servicio que se hace para testear si los clientes pagan antes de escalarlo", "Una propuesta de servicio en formato ejecutivo", "Un piloto de servicio gratuito durante tres meses"], correct: 1, explanation: "El concierge MVP es la forma más rápida de testear si un nuevo servicio resuelve un problema real antes de invertir en construirlo." },
    resources: [
      { type: "video", title: "Jobs to Be Done — Clayton Christensen", author: "YouTube", description: "El propio Christensen explica el framework JTBD con el ejemplo del milkshake que se hizo famoso.", url: "https://www.youtube.com/watch?v=sfGtw2C95Ms" },
      { type: "tool", title: "Sprint Toolkit — Google Ventures", author: "Google Ventures", description: "Todos los templates y recursos gratuitos del Sprint para prototipar y testear nuevas ideas de servicio.", url: "https://www.thesprintbook.com/free-resources" },
    ],
  },

{
    id: "m50", slug: "cultura-de-diseno-en-toda-la-organizacion", title: "Cultura de diseño en toda la organización: cuando el diseño es de todos",
    description: "Cómo construir una organización donde el pensamiento de diseño no es una disciplina de un departamento sino una capacidad compartida que mejora todas las áreas.",
    month: "Mes 26", level_required: 4, xp_reward: 480, lessons: 5, status: "available", theme: "Cultura de diseño",
    opening: "Las organizaciones más innovadoras del mundo no tienen departamentos de diseño que son buenos — tienen organizaciones enteras que piensan con mentalidad de diseño. En esas organizaciones, el diseño no es lo que hacen los diseñadores — es la manera en que toda la organización aborda los problemas.",
    opening_extended: "El estudio de DesignSingapore encontró que las organizaciones design-led superan a sus competidores en casi todas las métricas de negocio: crecimiento de ingresos, retención de clientes, capacidad de innovación y atracción de talento. El factor diferenciador no era tener mejores diseñadores — era haber construido una cultura donde el diseño como forma de pensar permea todas las decisiones.",
    sections: [
      { heading: "Los 22 principios de DesignSingapore: qué tienen en común las organizaciones design-led", body: "El estudio identificó 22 principios agrupados en seis categorías: liderazgo que modela el pensamiento de diseño, estrategia que integra el diseño desde el inicio, personas con fluidez en diseño en todos los niveles, procesos que incorporan design thinking como práctica estándar, espacio y herramientas que facilitan la colaboración creativa, y métricas que hacen visible el valor del diseño.", extended_body: "El principio más contraintuitivo: las organizaciones design-led más efectivas no son las que más invierten en el departamento de diseño — son las que más invierten en que todas las demás áreas tengan fluidez en diseño.", example: { label: "Ejemplo real", content: "Una empresa de logística en Singapur tenía un equipo de diseño de dos personas. Pero su CEO participaba personalmente en workshops de design thinking y su equipo de operaciones había adoptado el journey mapping. Resultado: lanzaron tres nuevos servicios en un año mientras sus competidores con equipos de diseño más grandes seguían ofreciendo los mismos servicios." } },
      { heading: "Fluidez en diseño: qué significa para cada área de la agencia", body: "La fluidez en diseño no significa que todos sean diseñadores — significa que todos pueden participar informadamente en conversaciones de diseño.", extended_body: "El test de fluidez es simple: ¿puede la persona dar feedback de diseño que genere una conversación productiva en lugar de una defensiva? ¿Puede distinguir entre una decisión visual que sirve al objetivo y una que no? Si la respuesta es sí, hay fluidez." },
      { heading: "Rituales de diseño: las prácticas que construyen la cultura", body: "Las culturas no se construyen con discursos — se construyen con rituales. Los rituales de diseño son las prácticas repetidas que hacen que la mentalidad de diseño sea parte del trabajo cotidiano.", extended_body: "Los rituales más efectivos según DesignSingapore: reviews de experiencia de cliente regulares donde participa todo el equipo, sesiones de feedback con protocolo estructurado que cualquier área puede facilitar, y rituales de aprendizaje de referencias donde el equipo comparte trabajo inspirador de dentro y fuera de la industria." },
      { heading: "Cómo medir el valor de una cultura de diseño", body: "Lo que no se mide no existe en la conversación de negocio. Las organizaciones que logran sostener la inversión en cultura de diseño son las que construyeron métricas que conectan el pensamiento de diseño con resultados de negocio.", extended_body: "Las métricas más usadas: NPS interno (indicador de cultura), velocidad de innovación (cuánto tarda un concepto en convertirse en servicio testeable), tasa de éxito de nuevos lanzamientos, y porcentaje de empleados que participan activamente en mejoras de experiencia." },
      { heading: "El camino de Bamboo: de aprender sobre diseño a ser una organización design-led", body: "Bamboo no es un programa de capacitación en diseño — es un programa de transformación cultural. El objetivo no es que las personas del holding sepan más — es que lo practiquen de manera cotidiana y lo enseñen a través de la Cultura del Hacer.", extended_body: "La Cultura del Hacer es el mecanismo de transferencia. Los 22 principios de DesignSingapore son el mapa de destino. Bamboo es el camino entre los dos. Cada módulo completado, cada ejercicio practicado, cada insight compartido es un paso hacia una organización que no solo habla de innovación — que la vive." },
    ],
    exercise: "Diseñá una iniciativa concreta para introducir un ritual de diseño en tu área o equipo. Puede ser tan simple como reservar 15 minutos al final de cada reunión de proyecto para preguntar '¿cómo podría ser mejor la experiencia de quien recibe esto?'. Implementalo durante un mes y documentá qué cambia.",
    takeaway: "Una cultura de diseño no se construye con un departamento de diseño excelente. Se construye con una organización entera que aprende a pensar con la mentalidad del diseño.",
    quiz: { question: "Según DesignSingapore, ¿qué distingue a las organizaciones design-led más efectivas?", options: ["Invierten más presupuesto en tecnología de diseño", "Todas las áreas tienen fluidez en diseño y participan en decisiones de diseño", "Contratan diseñadores más talentosos que la competencia", "Tienen más proyectos de diseño premiados"], correct: 1, explanation: "Las organizaciones design-led más efectivas no son las que más invierten en el departamento de diseño sino las que más invierten en que todas las áreas tengan fluidez en diseño." },
    resources: [
      { type: "article", title: "Design-Led Culture Study Playbook", author: "DesignSingapore Council y ROHEI", description: "Los 22 principios y casos reales de 27 organizaciones líderes. Referencia completa y gratuita.", url: "https://designsingapore.org/resources/a-playbook-for-building-a-design-led-culture/" },
      { type: "video", title: "How to Build a Culture of Innovation", author: "Linda Hill · TED", description: "La investigadora de Harvard explica cómo construir culturas de innovación organizacional.", url: "https://www.ted.com/talks/linda_hill_how_to_manage_for_collective_creativity" },
    ],
  },

{
    id: "m51", slug: "marca-personal-profesional", title: "Marca personal: cómo construir reputación con intención en el mundo profesional",
    description: "Por qué la reputación profesional no es vanidad sino un activo estratégico, y cómo construirla con consistencia y autenticidad.",
    month: "Mes 27", level_required: 4, xp_reward: 500, lessons: 4, status: "available", theme: "Desarrollo profesional",
    opening: "En la economía del conocimiento, ser bueno en tu trabajo no es suficiente — también tiene que saberse. La marca personal no es un perfil de LinkedIn bien armado ni publicar contenido todos los días. Es la suma de lo que hacés, cómo lo hacés y qué perciben los demás de vos cuando no estás en la sala.",
    sections: [
      { heading: "Qué es la marca personal y qué no es", body: "La marca personal no es autopromoción vacía ni es un personaje construido para las redes sociales. Es la gestión consciente de cómo querés ser conocido en tu industria y en tu organización, basada en lo que genuinamente sos y lo que genuinamente hacés.", extended_body: "La prueba más simple de tu marca personal actual: preguntale a cinco colegas con qué tres palabras te describirían si alguien les preguntara quién sos profesionalmente. Si las respuestas son vagas o contradictorias, tu marca personal existe pero no está gestionada. Si son consistentes y precisas, ya tenés una marca — el trabajo es amplificarla.", example: { label: "Ejemplo real", content: "Una estratega de contenidos en una agencia mediana empezó a publicar un análisis semanal de campañas que le parecían interesantes, explicando por qué funcionaban o fallaban desde el punto de vista estratégico. En seis meses, tres directores de marketing de empresas distintas le pidieron reuniones para hablar de sus estrategias de contenido. Ninguna de esas reuniones habría ocurrido sin la visibilidad que construyó con esa práctica simple y consistente." } },
      { heading: "Los tres pilares de una marca personal sólida", body: "Una marca personal sólida descansa en tres pilares que se refuerzan mutuamente: la especialización (ser conocido por algo específico), la consistencia (aparecer regularmente con el mismo nivel de calidad), y la generosidad (compartir conocimiento sin esperar retorno inmediato).", extended_body: "La especialización no significa saber solo una cosa — significa tener una perspectiva clara sobre algo específico. Podés ser un estratega con perspectiva fuerte sobre cómo la IA está cambiando la producción de contenidos. Eso es más memorable y más valioso que ser 'alguien que sabe de marketing digital'." },
      { heading: "Hacer visible el trabajo sin perder autenticidad", body: "La visibilidad no requiere volumen — requiere consistencia y relevancia. Compartir un aprendizaje honesto una vez por semana genera más reputación que publicar contenido genérico todos los días.", extended_body: "Tres formas de construir visibilidad que generan valor real: compartir aprendizajes de proyectos reales (con el nivel de detalle que la confidencialidad permite), hacer visible el trabajo de otros de manera generosa y específica, y tomar proyectos con audiencia fuera de tu equipo directo como presentaciones internas, participación en eventos o contribución a publicaciones." },
      { heading: "Marca personal dentro de la organización: visibilidad interna", body: "La marca personal no es solo externa. Dentro de una organización, la manera en que te conocen tus colegas, líderes y otras áreas determina qué oportunidades llegan a vos y cuáles no.", extended_body: "Las tres prácticas de visibilidad interna más efectivas: participar con criterio en reuniones donde antes te limitabas a escuchar, proponer proyectos de mejora aunque no sean tu responsabilidad formal, y hacer visible públicamente el trabajo de otros — las personas generosas con el crédito construyen reputación de liderazgo más rápido que las que acumulan mérito individual." },
    ],
    exercise: "Respondé estas tres preguntas con honestidad: ¿Por qué cosa específica querés ser conocido en los próximos dos años? ¿Qué estás haciendo hoy que construye esa reputación? ¿Qué estás haciendo hoy que la contradice o la debilita? A partir de esas respuestas, elegí una acción concreta de visibilidad que podás sostener por al menos tres meses.",
    takeaway: "Tu reputación se construye en los momentos donde nadie te está mirando y se comunica en los momentos donde todos lo hacen.",
    quiz: { question: "¿Cuál es la prueba más simple para evaluar el estado actual de tu marca personal?", options: ["Revisar cuántos seguidores tenés en LinkedIn", "Preguntarle a cinco colegas con qué tres palabras te describirían profesionalmente", "Calcular cuántas veces fuiste mencionado en medios del sector", "Ver si tu nombre aparece en las primeras páginas de búsqueda de Google"], correct: 1, explanation: "La marca personal existe en la percepción de los demás. Preguntarle a colegas cómo te describirían revela si esa percepción es consistente y está alineada con cómo querés ser conocido." },
    resources: [
      { type: "video", title: "How to Build Your Personal Brand", author: "The Futur · YouTube", description: "Chris Do explica paso a paso cómo construir una marca personal auténtica y diferenciada.", url: "https://www.youtube.com/watch?v=c7m9GnnpNQ0" },
      { type: "article", title: "Show Your Work — Austin Kleon", author: "Austin Kleon Blog", description: "El autor comparte gratuitamente los principios del libro en su blog personal.", url: "https://austinkleon.com/show-your-work/" },
    ],
  },

{
    id: "m52", slug: "liderazgo-de-proyectos-creativos", title: "Liderazgo de proyectos creativos: mantener la visión mientras el mundo cambia",
    description: "Cómo liderar un proyecto creativo desde el brief hasta la entrega manteniendo la intención original mientras se navegan las presiones de la realidad.",
    month: "Mes 27", level_required: 4, xp_reward: 500, lessons: 4, status: "available", theme: "Desarrollo profesional",
    opening: "Liderar un proyecto creativo no es lo mismo que gestionar uno. El gestor se asegura de que las cosas pasen en tiempo y forma. El líder se asegura de que lo que pasa valga la pena. En un contexto de presión constante, esa distinción determina si el trabajo que llega al cliente tiene algo que decir o es solo una entrega que cumple con el checklist.",
    sections: [
      { heading: "Mantener la intención creativa bajo presión", body: "El mayor enemigo de la calidad en proyectos creativos no es el cliente difícil ni el presupuesto ajustado — es la acumulación de pequeñas concesiones que cada una parece razonable y que juntas destruyen lo que hacía interesante al trabajo.", extended_body: "El líder de proyecto creativo necesita tener claro cuáles son los elementos no negociables de la propuesta — los que si se pierden hacen que el trabajo deje de ser lo que prometió ser — y cuáles son los elementos negociables sin consecuencias para la intención original. Esa distinción, comunicada con claridad al equipo y al cliente, es lo que permite defender lo que importa sin parecer inflexible en todo.", example: { label: "Ejemplo real", content: "Un director creativo lideraba una campaña que tenía como elemento central el silencio — piezas sin música y sin voz en off que confiaban en la imagen. El cliente, nervioso, pidió agregar música en la última semana. El director explicó que el silencio no era una elección estética sino el argumento central de la campaña — que sin él, la campaña decía exactamente lo mismo que todas las demás. El cliente aprobó sin música. La campaña ganó tres premios." } },
      { heading: "Dar feedback creativo que eleva en lugar de corregir", body: "El feedback creativo más común en agencias apunta a lo que está mal. El feedback creativo más valioso apunta a lo que el trabajo está intentando lograr y a cómo podría lograrlo mejor.", extended_body: "La diferencia entre feedback correctivo y feedback generativo: el correctivo dice 'esto no funciona'. El generativo dice 'veo lo que estás buscando aquí — ¿qué pasaría si...?' El segundo mantiene la energía creativa del equipo y abre posibilidades; el primero la cierra." },
      { heading: "Tomar decisiones con información incompleta", body: "Los proyectos creativos rara vez tienen toda la información que quisieran cuando hay que decidir. El líder de proyecto que espera certeza completa para decidir paraliza el trabajo. El que decide con lo que tiene y establece puntos de revisión mantiene el proyecto en movimiento.", extended_body: "El framework de decisión en proyectos creativos: definir cuál es la decisión que hay que tomar y para cuándo, identificar qué información adicional cambiaría la decisión, estimar el costo de esperar vs. el riesgo de decidir con lo que hay, y documentar los supuestos para poder revisarlos si cambia la información." },
      { heading: "El cierre del proyecto: aprender antes de arrancar el próximo", body: "La mayoría de los proyectos creativos terminan con la entrega. Los mejores terminan con una conversación de cierre donde el equipo reflexiona sobre qué funcionó, qué no y qué haría diferente.", extended_body: "Una retrospectiva de proyecto bien facilitada de 30 minutos genera más aprendizaje organizacional que meses de trabajo sin reflexión sistemática. Las preguntas que no pueden faltar: ¿la idea llegó entera a la ejecución?, ¿dónde perdimos calidad y por qué?, ¿qué aprendimos sobre este cliente o esta categoría que no sabíamos antes?" },
    ],
    exercise: "En tu próximo proyecto como líder o co-líder, identificá en el brief cuáles son los tres elementos creativos no negociables — los que si se pierden hacen que el trabajo deje de ser lo que prometió ser. Documentálos antes de que empiece la producción y usálos como guía en las decisiones difíciles que van a venir.",
    takeaway: "El líder de un proyecto creativo es el guardián de la intención original. Su trabajo no es aprobar todo lo que se produce — es asegurarse de que lo que se produce todavía tiene algo que decir.",
    quiz: { question: "¿Cuál es la diferencia entre feedback correctivo y feedback generativo?", options: ["El correctivo es más rápido de dar", "El generativo apunta a lo que el trabajo intenta lograr y cómo podría lograrlo mejor", "El correctivo es más honesto con el equipo creativo", "El generativo solo funciona con equipos muy experimentados"], correct: 1, explanation: "El feedback generativo mantiene la energía creativa del equipo abriendo posibilidades en lugar de cerrándolas. Parte del objetivo del trabajo y pregunta cómo llegar mejor a él." },
    resources: [
      { type: "article", title: "How Pixar Fosters Collective Creativity", author: "Ed Catmull · HBR", description: "El co-fundador de Pixar explica el sistema de feedback creativo que permitió sostener calidad durante décadas.", url: "https://hbr.org/2014/09/how-pixar-fosters-collective-creativity" },
      { type: "video", title: "How to Give Creative Feedback", author: "The Futur · YouTube", description: "El proceso de dar feedback que eleva el trabajo en lugar de bloquearlo.", url: "https://www.youtube.com/watch?v=YLBDkz0TwLM" },
    ],
  },

{
    id: "m53", slug: "innovation-sprint", title: "Innovation Sprint: cómo resolver un problema complejo en cinco días",
    description: "El método de Google Ventures adaptado al contexto de agencias: cómo concentrar el trabajo de meses en una semana de foco intenso con resultado testeable.",
    month: "Mes 28", level_required: 4, xp_reward: 520, lessons: 4, status: "available", theme: "Métodos avanzados",
    opening: "El Sprint es un proceso de cinco días para responder preguntas críticas de negocio a través del diseño, prototipado y testeo con usuarios reales. Fue desarrollado por Jake Knapp en Google Ventures y ha sido usado por cientos de empresas para lanzar productos, resolver problemas complejos y tomar decisiones estratégicas con evidencia real en lugar de opiniones.",
    sections: [
      { heading: "Los cinco días del Sprint: qué pasa en cada uno", body: "Lunes: mapear el problema y elegir el objetivo más importante. Martes: generar soluciones individualmente sin filtro. Miércoles: decidir cuál solución prototipar. Jueves: construir el prototipo. Viernes: testear con cinco usuarios reales y aprender.", extended_body: "Lo que hace al Sprint poderoso no es la secuencia en sí — es la disciplina de no mezclar etapas. El lunes no se generan soluciones todavía. El martes no se decide todavía. El jueves no se testea todavía. Esa separación de modos de pensamiento produce resultados que el trabajo habitual — donde todo se mezcla — no puede generar.", example: { label: "Ejemplo real", content: "Una agencia de comunicación digital usó un Sprint para responder si su nueva oferta de servicios de atribución de contenido era viable. En cinco días mapearon el problema, generaron cinco conceptos de servicio diferentes, construyeron un prototipo de propuesta y lo testearon con cuatro potenciales clientes. Descubrieron que el servicio era atractivo pero que el nombre y el precio estaban completamente equivocados. Ese aprendizaje en una semana habría tomado meses de iteración en el mercado real." } },
      { heading: "Cuándo usar un Sprint y cuándo no", body: "Un Sprint es ideal cuando hay una pregunta crítica sin respuesta clara, cuando hay múltiples perspectivas válidas en conflicto, y cuando el costo de equivocarse es alto. No es ideal para proyectos operativos, para trabajo que ya tiene una dirección clara, o para equipos que no pueden comprometer cinco días de foco exclusivo.", extended_body: "La pregunta de Sprint más efectiva tiene tres características: es específica (no '¿cómo crecemos?' sino '¿cómo logramos que los clientes actuales nos recomienden más?'), es respondible en una semana (hay algo que se puede prototipar y testear), y tiene consecuencias reales (la respuesta va a cambiar algo importante en el negocio o el producto)." },
      { heading: "Adaptar el Sprint al ritmo de una agencia", body: "Cinco días de foco total son difíciles de conseguir en una agencia con clientes activos. Existen versiones adaptadas: el Sprint de dos días (para problemas menos complejos), el Sprint distribuido (tres horas por día durante dos semanas), y el Sprint de cliente (donde el cliente participa en algunas etapas).", extended_body: "La regla de oro de cualquier adaptación: no comprometer las tres etapas más importantes — la definición del problema (lunes), la decisión de qué prototipar (miércoles) y el testeo con usuarios reales (viernes). El prototipado y la generación de soluciones son más flexibles en su forma." },
      { heading: "El prototipo del Sprint: bueno suficiente para aprender", body: "El prototipo del Sprint no tiene que ser perfecto — tiene que ser suficientemente real para que un usuario reaccione auténticamente. En una agencia, eso puede ser un deck de propuesta, una landing page estática, un video de concepto o incluso una experiencia simulada en persona.", extended_body: "La trampa más común del prototipado en agencias es el perfeccionismo: el equipo invierte tanto tiempo en hacer el prototipo impresionante que no queda tiempo para el testeo. La regla de Jake Knapp: si el prototipo tardó más de un día en construirse para un Sprint de cinco días, algo está mal." },
    ],
    exercise: "Identificá un problema o una pregunta sin respuesta clara en tu agencia o para un cliente. Usando la estructura del Sprint, respondé: ¿cuál es la pregunta específica que el Sprint respondería? ¿Qué prototipo mínimo podría testear esa respuesta? ¿Con quiénes habría que testear? ¿Qué aprenderías que cambiaría una decisión importante?",
    takeaway: "El Sprint no comprime el trabajo — comprime la ambigüedad. En cinco días podés tener más certeza sobre una dirección que en meses de iteración sin foco.",
    quiz: { question: "¿Qué caracteriza a una buena pregunta de Sprint?", options: ["Es lo suficientemente amplia para cubrir todos los aspectos del negocio", "Es específica, respondible en una semana con un prototipo, y sus consecuencias son reales", "Puede responderse con datos existentes sin necesidad de testeo", "La puede formular cualquier persona sin conocimiento del problema"], correct: 1, explanation: "Una buena pregunta de Sprint es específica, tiene algo que se puede prototipar y testear en el tiempo disponible, y su respuesta va a cambiar algo importante." },
    resources: [
      { type: "tool", title: "Sprint Templates — Google Ventures", author: "Google Ventures", description: "Todos los templates y guías del Sprint de Google Ventures completamente gratuitos.", url: "https://www.thesprintbook.com/free-resources" },
      { type: "video", title: "How the Design Sprint Works", author: "Google Ventures · YouTube", description: "El equipo de GV explica el proceso de Sprint con ejemplos reales de proyectos.", url: "https://www.youtube.com/watch?v=K2vSQl5Hy-8" },
    ],
  },

{
    id: "m54", slug: "metricas-de-impacto-creativo", title: "Métricas de impacto creativo: cómo medir lo que importa sin matar la creatividad",
    description: "Cómo construir un sistema de métricas que conecte el trabajo creativo con resultados de negocio reales, sin reducir la calidad a números.",
    month: "Mes 28", level_required: 4, xp_reward: 520, lessons: 4, status: "available", theme: "Métodos avanzados",
    opening: "La creatividad tiene mala relación con las métricas porque la mayoría de las métricas disponibles miden lo fácil de medir, no lo importante de medir. Una campaña puede tener millones de impresiones y no mover una sola decisión de compra. Un video puede volverse viral y no generar ningún resultado de negocio. El desafío no es elegir entre creatividad y métricas — es construir métricas que honren las dos cosas.",
    sections: [
      { heading: "El problema con las métricas que la industria usa por defecto", body: "Las métricas de publicidad más usadas — impresiones, alcance, clicks, engagement rate — miden atención, no impacto. Son fáciles de obtener, fáciles de reportar y fáciles de mejorar sin que el negocio del cliente mejore en absoluto.", extended_body: "Las métricas de vanidad tienen un incentivo perverso: una agencia puede optimizar sus reportes para verse bien en métricas que no tienen consecuencias reales para el cliente. Esa optimización destruye la confianza de largo plazo. Las agencias que construyen relaciones duraderas son las que eligen medir lo que importa aunque sea más difícil de medir.", example: { label: "Ejemplo real", content: "Una agencia de performance digital propuso a su cliente de e-commerce cambiar el reporte mensual: eliminar el reporte de impresiones y alcance y reemplazarlo por un análisis de la contribución de cada canal al ingreso total, calculado con un modelo de atribución multi-touch. El primer reporte reveló que la campaña de display, que tenía las métricas de awareness más altas, contribuía menos del 3% del ingreso atribuible. El presupuesto se redirigió. El ingreso del cliente aumentó un 28% en el trimestre siguiente con el mismo presupuesto total." } },
      { heading: "Construir un framework de métricas en tres niveles", body: "Un framework de métricas efectivo tiene tres niveles: las métricas de proceso (¿el trabajo está llegando a la audiencia correcta?), las métricas de resultado intermedio (¿está cambiando el comportamiento de la audiencia?), y las métricas de negocio (¿está generando valor para el cliente?).", extended_body: "El error más común es quedarse en el primer nivel porque es el más fácil de medir. El segundo nivel requiere datos de comportamiento — búsquedas, visitas, comparaciones de compra. El tercer nivel requiere acceso a datos de negocio del cliente — ventas, conversiones, retención — que muchos clientes no están dispuestos a compartir. La conversación para pedir ese acceso es una de las más importantes que puede tener un ejecutivo de cuentas." },
      { heading: "Medir la creatividad sin cuantificar el alma", body: "Hay aspectos del trabajo creativo que tienen valor y que no son directamente cuantificables: la originalidad de una idea, la calidad de la ejecución, el impacto cultural de una campaña. Esos aspectos también necesitan ser evaluados, aunque con métodos diferentes.", extended_body: "Las tres formas de evaluar calidad creativa sin reducirla a números: la evaluación de pares (revisión del trabajo por creativos externos con criterio claro), el brand lift study (medición de cambio en percepción de marca antes y después de la campaña), y el análisis de longevidad (cuánto tiempo sigue generando atención y conversación el trabajo después de su lanzamiento)." },
      { heading: "Presentar métricas al cliente de manera que generen decisiones", body: "Un reporte de métricas que no genera ninguna decisión es un documento de archivo. El objetivo de reportar métricas no es demostrar que la agencia trabajó — es darle al cliente la información que necesita para tomar mejores decisiones sobre su inversión.", extended_body: "El formato de reporte que genera más decisiones: empieza con la conclusión más importante (no con los datos), incluye solo las métricas que conectan directamente con los objetivos del cliente, traduce los números a lenguaje de negocio ('esto representa X ventas adicionales' en lugar de 'el CTR subió un 0.3%'), y termina con una recomendación específica y accionable." },
    ],
    exercise: "Tomá el último reporte que presentaste a un cliente. Evaluá: ¿cuántas métricas son de proceso, cuántas de resultado intermedio y cuántas de negocio? ¿Hay alguna decisión que el cliente tomó como resultado de ese reporte? Reescribí el resumen ejecutivo del reporte con solo las métricas que conectan directamente con los objetivos de negocio del cliente.",
    takeaway: "Las métricas que no generan decisiones no son métricas — son administración de la apariencia. El trabajo de la agencia no es reportar lo que pasó sino ayudar al cliente a entender qué significa y qué hacer con eso.",
    quiz: { question: "¿Cuál es el objetivo real de reportar métricas a un cliente?", options: ["Demostrar que la agencia invirtió bien el presupuesto asignado", "Darle al cliente la información que necesita para tomar mejores decisiones sobre su inversión", "Justificar los honorarios de la agencia con datos de actividad", "Cumplir con los entregables contractuales del período"], correct: 1, explanation: "Un reporte de métricas que no genera ninguna decisión es un documento de archivo. El objetivo es dar al cliente información accionable, no demostrar que la agencia trabajó." },
    resources: [
      { type: "tool", title: "Google Analytics 4 — Gratuito", author: "Google", description: "La herramienta de analítica web más usada del mundo. Gratuita con cursos de certificación incluidos.", url: "https://analytics.google.com" },
      { type: "tool", title: "Looker Studio — Dashboards gratuitos", author: "Google", description: "Herramienta gratuita para crear dashboards de métricas conectados a múltiples fuentes de datos.", url: "https://lookerstudio.google.com" },
    ],
  },

{
    id: "m55", slug: "gestion-del-conocimiento", title: "Gestión del conocimiento: cómo una agencia aprende más rápido que su competencia",
    description: "Sistemas y prácticas para capturar, organizar y activar el conocimiento colectivo de una agencia como ventaja competitiva real.",
    month: "Mes 29", level_required: 4, xp_reward: 540, lessons: 4, status: "available", theme: "Organización inteligente",
    opening: "Una agencia que aprende más rápido que su competencia tiene una ventaja que ninguna inversión en tecnología puede replicar directamente. El problema es que la mayoría de las agencias aprenden por accidente — cuando un error duele suficiente o cuando una persona talentosa comparte lo que sabe antes de irse. La gestión del conocimiento convierte ese aprendizaje accidental en un sistema.",
    sections: [
      { heading: "El conocimiento que se va cuando se va la gente", body: "El conocimiento más valioso de una agencia no está en los servidores — está en la cabeza de las personas. Cómo hablar con ese cliente difícil, por qué fallaron las tres últimas campañas de esa categoría, qué funciona realmente en ese mercado. Cuando esa persona se va, ese conocimiento se va con ella.", extended_body: "Nonaka y Takeuchi distinguen entre conocimiento explícito (lo que puede documentarse y transferirse fácilmente) y conocimiento tácito (lo que se sabe pero es difícil de articular — el criterio, la intuición, el saber cómo). La gestión del conocimiento efectiva convierte el conocimiento tácito en explícito a través de prácticas sistemáticas de externalización.", example: { label: "Ejemplo real", content: "Una agencia perdió a su director de estrategia más senior después de ocho años. Con él se fue el conocimiento de cómo tres de sus clientes más importantes tomaban decisiones — información que había construido en cientos de conversaciones informales. El proceso de reemplazarlo tomó 14 meses. La agencia implementó después un programa de documentación de 'conocimiento de cliente' que el equipo actualiza trimestralmente. La siguiente salida de un senior tuvo impacto mínimo en la continuidad del servicio." } },
      { heading: "Los cuatro procesos de creación de conocimiento", body: "Nonaka y Takeuchi identificaron cuatro procesos que convierten el conocimiento individual en organizacional: socialización (tácito a tácito — aprender haciendo junto a otros), externalización (tácito a explícito — articular lo que se sabe), combinación (explícito a explícito — integrar conocimientos existentes de nuevas maneras), e internalización (explícito a tácito — practicar hasta que el conocimiento documentado se vuelve instinto).", extended_body: "La Cultura del Hacer de Texo es una implementación directa del proceso de socialización: el conocimiento tácito del Líder se transfiere al Aprendiz a través de la práctica compartida. La documentación del Participante es el proceso de externalización. Los módulos de Bamboo son la combinación. El ejercicio de cada módulo es la internalización." },
      { heading: "Sistemas simples que funcionan: cómo empezar sin burocracia", body: "La mayoría de los sistemas de gestión del conocimiento fracasan porque son demasiado complejos para que la gente los use en el ritmo real del trabajo. Los que funcionan son los que tienen el menor rozamiento posible entre la experiencia y su documentación.", extended_body: "Tres sistemas simples que funcionan en agencias: el '5 minutos de cierre' al final de cada proyecto (tres preguntas, cinco minutos, formato libre), la 'biblioteca de briefs ejemplares' donde se guardan los briefs que generaron los mejores trabajos con anotaciones del por qué, y el 'diario de cliente' donde cada ejecutivo documenta lo que aprende de su cliente cada trimestre." },
      { heading: "De repositorio a sistema vivo: cómo hacer que el conocimiento circule", body: "Un repositorio de documentos que nadie usa es un archivo, no un sistema de conocimiento. La diferencia está en si hay una práctica activa de buscar y usar ese conocimiento cuando se necesita.", extended_body: "Las organizaciones con mejor gestión del conocimiento tienen dos prácticas que las distinguen: el onboarding basado en conocimiento acumulado (los nuevos aprenden de los casos reales de la agencia antes que de teoría genérica) y las 'pre-mortem' basadas en histórico (antes de cada proyecto, el equipo revisa qué aprendizajes de proyectos similares son relevantes)." },
    ],
    exercise: "Identificá el conocimiento más valioso que existe en tu equipo y que actualmente vive solo en la cabeza de una o dos personas. Diseñá un proceso simple para externalizarlo: ¿qué formato usarías?, ¿cuánto tiempo tomaría?, ¿dónde se guardaría?, ¿cómo lo encontraría alguien que lo necesite en seis meses?",
    takeaway: "El conocimiento que no se comparte es un riesgo. El que se comparte es una ventaja. La diferencia entre los dos está en si la organización tiene sistemas para convertir la experiencia en aprendizaje colectivo.",
    quiz: { question: "¿Qué proceso convierte el conocimiento tácito en explícito según Nonaka y Takeuchi?", options: ["Socialización", "Externalización", "Combinación", "Internalización"], correct: 1, explanation: "La externalización es el proceso de articular el conocimiento tácito — lo que se sabe pero es difícil de expresar — en formas que otros puedan acceder y usar. Es el proceso más valioso y más difícil de la gestión del conocimiento." },
    resources: [
      { type: "tool", title: "Notion — Wiki de conocimiento", author: "Notion", description: "La herramienta más usada para construir repositorios de conocimiento organizacional. Plan gratuito.", url: "https://www.notion.so" },
      { type: "video", title: "How to Build a Learning Organization", author: "HBR · YouTube", description: "Cómo construir organizaciones que aprenden sistemáticamente de su experiencia.", url: "https://www.youtube.com/watch?v=MRqh8oLY7Ik" },
    ],
  },

{
    id: "m56", slug: "colaboracion-entre-disciplinas", title: "Colaboración entre disciplinas: cuando cuentas, creativo, medios y producción trabajan como uno",
    description: "Qué hace que la colaboración entre áreas diferentes sea generativa en lugar de burocrática, y cómo diseñar proyectos donde las perspectivas múltiples producen trabajo mejor.",
    month: "Mes 29", level_required: 4, xp_reward: 540, lessons: 4, status: "available", theme: "Organización inteligente",
    opening: "Las mejores campañas de agencia no nacen de un área que hace su parte y la pasa a la siguiente. Nacen de un momento donde alguien de cuentas dice algo que abre una idea que el creativo no habría tenido solo, y ese creativo dice algo que el planificador de medios convierte en una oportunidad de canal que nadie había visto. Ese momento no ocurre por accidente — ocurre cuando la colaboración está diseñada para producirlo.",
    sections: [
      { heading: "Por qué la colaboración entre áreas falla en la mayoría de las agencias", body: "La colaboración interdisciplinaria falla por tres razones que se refuerzan mutuamente: los silos de proceso (cada área hace su parte en secuencia sin solapamiento real), los silos de lenguaje (cada disciplina tiene su jerga y sus marcos de referencia que las demás no comparten), y los silos de incentivos (cada área es evaluada por sus propios entregables, no por el resultado conjunto).", extended_body: "La solución no es eliminar las especialidades — es diseñar los momentos de cruce donde cada especialidad puede enriquecer el trabajo de las demás. Eso requiere claridad sobre cuándo necesitamos perspectiva múltiple (al inicio de un proyecto, cuando el trabajo está trabado, en los momentos de decisión estratégica) y cuándo necesitamos foco individual (en la ejecución, en la producción).", example: { label: "Ejemplo real", content: "Una agencia implementó 'briefs de cocreación' para proyectos estratégicamente importantes: en lugar de que cuentas entregara el brief a creativo que lo entregaba a medios, los tres equipos pasaban dos horas juntos con el cliente antes de que nadie trabajara por separado. El tiempo total del proyecto no cambió. La calidad del trabajo sí: en los primeros seis meses con ese formato, la tasa de aprobación en primera instancia subió del 45% al 72%." } },
      { heading: "El lenguaje común como infraestructura de colaboración", body: "Los equipos que colaboran bien tienen un vocabulario compartido sobre el trabajo — términos con significados precisos que todos usan de la misma manera. Sin ese vocabulario, la misma palabra puede significar cosas completamente diferentes para personas de áreas distintas.", extended_body: "Bamboo es, entre otras cosas, un proyecto de construcción de lenguaje común. Cuando una persona de medios y una de creatividad y una de cuentas hablan de 'insight', de 'Jobs to Be Done' o de 'momento de receptividad', están usando los mismos conceptos con el mismo significado. Ese lenguaje compartido reduce dramáticamente el tiempo de alineación en proyectos y aumenta la calidad de las conversaciones estratégicas." },
      { heading: "Diseñar momentos de colaboración real en el proceso de trabajo", body: "La colaboración efectiva no es tener más reuniones — es tener los momentos correctos de encuentro entre perspectivas diferentes en los momentos donde esas perspectivas pueden cambiar algo.", extended_body: "Los tres momentos donde la colaboración interdisciplinaria tiene mayor impacto: la definición del problema (donde la perspectiva de medios puede revelar oportunidades de canal que cambian la estrategia creativa), la generación de ideas (donde la perspectiva de producción puede eliminar direcciones costosas antes de enamorarse de ellas), y la evaluación del trabajo antes de presentarlo al cliente (donde la perspectiva de cuentas puede anticipar objeciones que no aparecen desde adentro del equipo creativo)." },
      { heading: "La Cultura del Hacer como modelo de colaboración interdisciplinaria", body: "La Cultura del Hacer, donde un Líder, un Aprendiz y un Participante trabajan juntos en un proyecto real, es también un modelo de colaboración interdisciplinaria cuando los tres roles son de áreas diferentes.", extended_body: "Un Líder de creativo con un Aprendiz de cuentas y un Participante de medios produce un proyecto donde las tres perspectivas están integradas desde el proceso, no sumadas al final. El Aprendiz de cuentas aprende cómo piensa el creativo. El Participante de medios documenta decisiones que informarán futuras planificaciones. El proyecto gana y el equipo aprende." },
    ],
    exercise: "En tu próximo proyecto, identificá un momento donde la perspectiva de un área diferente a la tuya podría mejorar el trabajo. Proponé explícitamente incluir a alguien de esa área en ese momento específico — no en todo el proyecto, sino en ese momento. Documentá qué cambió en el trabajo como resultado.",
    takeaway: "La colaboración que genera trabajo mejor no es más reuniones — es los momentos correctos de encuentro entre perspectivas diferentes en los momentos donde esas perspectivas pueden cambiar algo.",
    quiz: { question: "¿Cuál de estos es el momento donde la colaboración interdisciplinaria tiene mayor impacto?", options: ["Durante la producción final de las piezas", "En la reunión de presentación al cliente", "En la definición del problema, antes de que nadie empiece a trabajar por separado", "En la revisión de las métricas después del lanzamiento"], correct: 2, explanation: "La definición del problema es donde la perspectiva de diferentes disciplinas puede cambiar la dirección completa del proyecto. Una vez que el problema está definido y el trabajo empezó, la colaboración tiene impactos más marginales." },
    resources: [
      { type: "tool", title: "MURAL — Colaboración visual gratuita", author: "MURAL", description: "Herramienta gratuita para workshops y colaboración visual entre equipos multidisciplinarios.", url: "https://www.mural.co" },
      { type: "video", title: "How to Collaborate Across Differences", author: "Tina Opie · TED", description: "Cómo la colaboración entre personas con perspectivas diferentes produce mejores resultados.", url: "https://www.ted.com/talks/tina_opie_want_to_solve_a_hard_problem_get_out_of_your_lane" },
    ],
  },

{
    id: "m57", slug: "etica-en-comunicacion", title: "Ética en comunicación: los límites que construyen reputación de largo plazo",
    description: "Qué decisiones éticas enfrenta una agencia en su trabajo cotidiano y cómo construir un marco de criterio que va más allá del 'si es legal, está bien'.",
    month: "Mes 30", level_required: 4, xp_reward: 560, lessons: 4, status: "available", theme: "Profesionalismo avanzado",
    opening: "La ética en comunicación no es solo evitar lo ilegal. Es tomar decisiones sobre qué trabajo hacer y cómo hacerlo que sean coherentes con el impacto que queremos tener en el mundo. En una industria que da forma a percepciones, actitudes y comportamientos de millones de personas, esa responsabilidad es real y significativa.",
    sections: [
      { heading: "Las decisiones éticas que una agencia enfrenta regularmente", body: "Las agencias enfrentan decisiones éticas todo el tiempo que raramente se nombran como tales: ¿trabajamos para este cliente aunque su producto hace daño? ¿Usamos esta técnica de persuasión aunque explota un sesgo cognitivo de manera que no beneficia al consumidor? ¿Representamos a este grupo de personas de una manera que refuerza estereotipos para que el mensaje sea más efectivo?", extended_body: "El problema con no nombrar esas decisiones como éticas es que se toman por inercia o por presión en lugar de por criterio. Una agencia que tiene un marco ético explícito — aunque sea imperfecto — toma esas decisiones con más consistencia y puede defenderlas frente a clientes, empleados y el mercado.", example: { label: "Ejemplo real", content: "Una agencia recibió una propuesta de trabajo de una empresa de juegos de azar que quería una campaña dirigida a adultos mayores. El equipo de cuentas la presentó como una oportunidad interesante. El director creativo planteó la pregunta ética directamente: '¿Estamos cómodos diseñando comunicación que puede aprovechar vulnerabilidades específicas de ese segmento?' La agencia decidió no tomar el proyecto. Esa decisión generó conversación interna que llevó a formalizar un criterio de selección de clientes que antes no existía." } },
      { heading: "Publicidad responsable: más allá del cumplimiento legal", body: "La publicidad responsable no es solo cumplir con las regulaciones — es preguntarse si el mensaje que se está comunicando es verdadero, si las expectativas que genera son alcanzables, y si el efecto sobre las personas que lo reciben es positivo o negativo.", extended_body: "Los cuatro criterios de publicidad responsable de la International Chamber of Commerce: legalidad (cumple con las leyes aplicables), decencia (no ofende la sensibilidad razonable), honestidad (no engaña ni explota), y veracidad (los claims son verificables y justos). Esos criterios son el piso — no el techo." },
      { heading: "Diversidad e inclusión en la comunicación: de la corrección política a la representación honesta", body: "La representación de personas en la comunicación tiene consecuencias reales sobre cómo esos grupos se perciben a sí mismos y son percibidos por los demás. Una comunicación que representa siempre al mismo tipo de persona como protagonista de las historias de éxito comunica algo sobre quiénes merecen ser protagonistas.", extended_body: "La diferencia entre inclusión decorativa (agregar personas de grupos subrepresentados como fondo) e inclusión genuina (contar historias que reflejan la complejidad real de la experiencia de esos grupos) es visible y la audiencia la detecta. La inclusión genuina requiere investigación real con las comunidades que se quiere representar — no suposiciones bien intencionadas." },
      { heading: "Construir un criterio ético en el equipo: conversaciones que la industria evita", body: "La ética no puede ser solo responsabilidad del director o del departamento legal. Necesita ser una conversación que el equipo puede tener en cualquier nivel cuando aparece una situación que la requiere.", extended_body: "Tres prácticas para construir criterio ético en equipo: el 'test del titular' (¿estarías cómodo si este trabajo apareció en un artículo crítico de un medio que respetás?), las retrospectivas de decisiones difíciles (revisar regularmente proyectos donde hubo dilemas éticos para aprender del proceso), y los espacios formales para que cualquier miembro del equipo pueda plantear una preocupación ética sin consecuencias." },
    ],
    exercise: "Pensá en un proyecto reciente donde hubo una decisión que en retrospectiva tiene una dimensión ética que no fue nombrada explícitamente. ¿Cuál era la decisión? ¿Qué valores estaban en tensión? ¿Qué habrías hecho diferente si hubiera existido un marco ético explícito para evaluarla? Escribí un párrafo sobre cómo ese caso podría informar un criterio de selección de proyectos para tu agencia.",
    takeaway: "Las agencias que construyen reputación de largo plazo son las que toman decisiones éticas consistentes, no las que evitan los problemas legales. La diferencia está en si la ética es un marco de criterio o solo una restricción.",
    quiz: { question: "¿Qué es la 'inclusión genuina' en comunicación, a diferencia de la inclusión decorativa?", options: ["Incluir el mismo porcentaje de representación de todos los grupos en cada campaña", "Contar historias que reflejan la complejidad real de la experiencia de los grupos representados", "Usar personas de grupos subrepresentados como protagonistas visibles de las piezas", "Obtener aprobación de organizaciones representativas antes de publicar cualquier campaña"], correct: 1, explanation: "La inclusión genuina va más allá de la visibilidad — requiere contar historias que reflejan la experiencia real de los grupos representados, lo que a su vez requiere investigación real con esas comunidades." },
    resources: [
      { type: "article", title: "Advertising Ethics Guidelines", author: "Interactive Advertising Bureau", description: "Guía gratuita del IAB sobre estándares éticos en publicidad digital.", url: "https://www.iab.com/guidelines/" },
      { type: "video", title: "The Ethics of Persuasive Design", author: "TEDx · YouTube", description: "Cómo las decisiones de diseño y comunicación tienen consecuencias éticas reales.", url: "https://www.youtube.com/watch?v=FzMBsJMiCFY" },
    ],
  },

{
    id: "m58", slug: "innovacion-abierta", title: "Innovación abierta: aprender de afuera para crecer adentro",
    description: "Cómo las agencias pueden incorporar perspectivas, ideas y conocimiento externo para acelerar su propia innovación sin tener que generarlo todo internamente.",
    month: "Mes 30", level_required: 4, xp_reward: 560, lessons: 4, status: "available", theme: "Profesionalismo avanzado",
    opening: "El modelo de innovación cerrada — donde toda la innovación ocurre dentro de la organización con recursos propios — tiene un techo estructural. Las organizaciones más innovadoras del mundo son las que aprendieron a combinar su conocimiento interno con el externo de manera sistemática. Para una agencia, eso significa aprender de otras industrias, de sus propios clientes y de su comunidad.",
    sections: [
      { heading: "Qué es la innovación abierta y por qué importa para agencias", body: "La innovación abierta, concepto de Henry Chesbrough, propone que las organizaciones no pueden ni deben generar todo el conocimiento que necesitan internamente. El conocimiento valioso está distribuido en el ecosistema — en los clientes, en proveedores, en otras industrias, en universidades — y las organizaciones que aprenden a acceder a él tienen una ventaja significativa.", extended_body: "Para una agencia, la innovación abierta toma formas muy concretas: incorporar a personas con formación no publicitaria (ingenieros, médicos, antropólogos) que traen perspectivas que la agencia no tiene, co-crear con los clientes en lugar de solo producir para ellos, y aprender sistemáticamente de industrias que resolvieron problemas similares de maneras que la publicidad no ha explorado.", example: { label: "Ejemplo real", content: "Una agencia de comunicación corporativa contrató a una médica reconvertida como estratega. En su primera semana, observó que los briefs de su agencia tenían el mismo problema que los diagnósticos médicos mal hechos: identificaban síntomas en lugar de causas. Propuso adaptar el framework de diagnóstico diferencial de la medicina al proceso de brief. En seis meses, ese framework se convirtió en la metodología de brief de la agencia y fue el principal diferenciador que mencionaban los clientes cuando los preguntaban por qué elegían trabajar con ellos." } },
      { heading: "Aprender de otras industrias: referencias cruzadas como práctica sistemática", body: "Las mejores ideas en publicidad y comunicación raramente vienen de ver más publicidad y comunicación. Vienen de entender cómo otras industrias resolvieron problemas análogos con soluciones que la agencia nunca habría generado desde su propio marco de referencia.", extended_body: "Las industrias con mayor potencial de transferencia de aprendizaje para agencias: el diseño de servicios (cómo se crean experiencias consistentes en escala), el entretenimiento (cómo se construye audiencia y fidelidad), la educación (cómo se transfiere conocimiento complejo de manera accesible), y la tecnología de producto (cómo se itera rápido con evidencia real de usuarios)." },
      { heading: "Co-innovar con clientes: de proveedores a socios de desarrollo", body: "Las agencias que co-innovan con sus clientes — que desarrollan nuevos servicios o metodologías en colaboración con ellos — tienen dos ventajas: desarrollan soluciones más relevantes porque emergen de problemas reales, y construyen relaciones que son mucho más difíciles de reemplazar que las de proveedor-cliente.", extended_body: "La co-innovación requiere un tipo de relación con el cliente diferente al modelo transaccional habitual. El cliente tiene que estar dispuesto a compartir sus problemas reales antes de que haya soluciones, y la agencia tiene que estar dispuesta a trabajar en un proceso iterativo donde el resultado no está predefinido. Esa relación se construye con confianza acumulada, no con una propuesta." },
      { heading: "Comunidades de práctica: aprender junto a pares de otras organizaciones", body: "Una comunidad de práctica es un grupo de personas que comparten un interés, un oficio o una profesión y que aprenden juntos a través del intercambio de experiencias, problemas y soluciones. Para las agencias, participar en comunidades de práctica con personas de otras agencias — incluso competidoras en algunos casos — genera aprendizaje que ninguna fuente interna puede replicar.", extended_body: "Las comunidades de práctica más valiosas para personas de agencias: las comunidades de strategy y planning (donde se comparten frameworks y casos de categorías que pocas agencias ven solas), las comunidades de producción (donde se comparten proveedores, técnicas y estándares), y las comunidades de liderazgo creativo (donde se comparten los desafíos de mantener calidad creativa bajo presión comercial)." },
    ],
    exercise: "Identificá una industria completamente diferente a la publicidad y la comunicación que haya resuelto un problema que tu agencia enfrenta regularmente. Investigá cómo lo resolvieron. Diseñá una adaptación de esa solución al contexto de tu agencia y proponé un experimento pequeño para testear si funciona.",
    takeaway: "La innovación más poderosa no viene de pensar más profundamente en lo que ya sabés — viene de exponer lo que sabés a perspectivas que nunca habrías generado solo.",
    quiz: { question: "¿Qué propone el modelo de innovación abierta de Chesbrough?", options: ["Que las organizaciones deben proteger su conocimiento interno de la competencia", "Que el conocimiento valioso está distribuido en el ecosistema y las organizaciones deben aprender a acceder a él", "Que la innovación debe ser liderada por equipos especializados y no distribuirse en toda la organización", "Que las agencias deben adquirir empresas de otras industrias para incorporar sus capacidades"], correct: 1, explanation: "La innovación abierta propone que ninguna organización puede ni debe generar todo el conocimiento que necesita internamente. El conocimiento valioso está distribuido en el ecosistema y las organizaciones que aprenden a accederlo tienen una ventaja estructural." },
    resources: [
      { type: "video", title: "The Power of Open Innovation", author: "Henry Chesbrough · YouTube", description: "El creador del concepto explica por qué compartir conocimiento genera más innovación que protegerlo.", url: "https://www.youtube.com/watch?v=RUNy2M8fXJA" },
      { type: "article", title: "Open Innovation — What It Is", author: "Harvard Business Review", description: "Artículo gratuito de HBR sobre el modelo de innovación abierta con ejemplos de implementación.", url: "https://hbr.org/2020/06/open-innovation-business-model" },
    ],
  },

{
    id: "m59", slug: "estrategia-de-crecimiento-agencia", title: "Estrategia de crecimiento: cómo escalar una agencia sin perder lo que la hace buena",
    description: "Los modelos de crecimiento disponibles para una agencia, sus tradeoffs reales y cómo elegir el camino que es coherente con el tipo de organización que se quiere construir.",
    month: "Mes 31", level_required: 4, xp_reward: 580, lessons: 4, status: "available", theme: "Visión estratégica",
    opening: "Crecer es la ambición de casi toda agencia. El problema es que el crecimiento sin estrategia suele destruir exactamente lo que hizo buena a la agencia mientras era pequeña: la calidad del trabajo, la cultura del equipo, la proximidad con los clientes. La estrategia de crecimiento es la disciplina de decidir cómo crecer de manera que refuerce esas cosas en lugar de erosionarlas.",
    sections: [
      { heading: "Los tres modelos de crecimiento y sus tradeoffs reales", body: "Las agencias crecen principalmente de tres maneras: por volumen (más clientes, más proyectos, más personas), por valor (mismos clientes, trabajo más estratégico, honorarios más altos), o por diversificación (nuevos servicios, nuevas industrias, nuevos mercados). Cada modelo tiene implicaciones completamente diferentes para la cultura, la capacidad y la rentabilidad.", extended_body: "El crecimiento por volumen es el más común y el más peligroso: escala los ingresos pero también los costos, la complejidad de gestión y el riesgo de diluir la calidad. El crecimiento por valor es el más rentable pero requiere posicionamiento específico y capacidad de tener conversaciones estratégicas con clientes. La diversificación es la más arriesgada porque requiere desarrollar nuevas capacidades mientras se mantiene el negocio actual.", example: { label: "Ejemplo real", content: "Una agencia de diseño en Santiago creció de 8 a 35 personas en tres años por volumen de clientes. En el cuarto año, su director notó que la tasa de retención de clientes había bajado del 85% al 52% y que los mejores creativos estaban renunciando. El crecimiento había diluido la cultura y la calidad que habían construido el negocio. Pasaron un año reduciendo el número de clientes y recuperando calidad antes de volver a crecer — esta vez con un modelo de valor que aumentó los ingresos por cliente en lugar del número de clientes." } },
      { heading: "La trampa del crecimiento reactivo: decir sí a todo lo que llega", body: "El crecimiento reactivo ocurre cuando una agencia acepta cualquier oportunidad que llega sin evaluar si es coherente con la dirección que quiere tomar. Es la forma más común y más destructiva de crecer.", extended_body: "El antídoto al crecimiento reactivo es tener criterios de selección de proyectos y clientes explícitos antes de que lleguen las oportunidades. Esos criterios deberían responder: ¿este proyecto nos hace mejores en lo que queremos ser buenos? ¿Este cliente nos lleva hacia el posicionamiento que buscamos? ¿Este trabajo construye la reputación que queremos tener?" },
      { heading: "Escalar la cultura: el desafío que nadie anticipa", body: "La cultura de una agencia pequeña — la manera en que se trabaja, se toman decisiones y se relaciona el equipo — no se escala automáticamente cuando la agencia crece. Requiere esfuerzo activo y sistemático para que los valores y comportamientos que definen a la organización se transmitan a las personas que se incorporan.", extended_body: "Las tres prácticas más efectivas para escalar cultura: el onboarding que transmite cultura (no solo procesos), los rituales que refuerzan valores regularmente (no solo en eventos anuales), y el liderazgo que modela comportamientos (no solo declara valores). La Cultura del Hacer es un mecanismo de transmisión cultural que se vuelve más valioso, no menos, a medida que la organización crece." },
      { heading: "El crecimiento que vale la pena: cómo saber si estás en el camino correcto", body: "El crecimiento que vale la pena no es el que maximiza ingresos o headcount — es el que construye una organización más capaz, más resiliente y más interesante de lo que era antes. Las métricas de ese tipo de crecimiento son diferentes.", extended_body: "Las métricas de crecimiento que importan para una agencia: la tasa de retención de clientes (¿el trabajo genera relaciones que duran?), la tasa de retención de talento (¿el ambiente genera crecimiento que hace que las personas quieran quedarse?), el margen por proyecto (¿el crecimiento mejora o deteriora la rentabilidad?), y el tipo de trabajo que se está ganando (¿el crecimiento está llevando hacia el posicionamiento deseado o lejos de él?)." },
    ],
    exercise: "Describí el crecimiento que querés para tu agencia o equipo en los próximos tres años — no en términos de números sino en términos de qué tipo de organización querés ser, qué tipo de trabajo querés hacer y qué tipo de personas querés tener. A partir de esa descripción, identificá cuál de los tres modelos de crecimiento es más coherente con ese destino y cuáles son los dos riesgos más importantes que tenés que gestionar en el camino.",
    takeaway: "El mejor crecimiento no es el más rápido — es el que construye una organización más capaz de hacer el trabajo que importa.",
    quiz: { question: "¿Cuál es el modelo de crecimiento más rentable para una agencia aunque sea el más difícil de ejecutar?", options: ["Crecimiento por volumen: más clientes y más proyectos", "Crecimiento por valor: trabajo más estratégico con los mismos clientes a honorarios más altos", "Crecimiento por diversificación: nuevos servicios y nuevos mercados", "Crecimiento por adquisición: comprar otras agencias o estudios"], correct: 1, explanation: "El crecimiento por valor es el más rentable porque aumenta el ingreso por cliente sin aumentar proporcionalmente los costos de operación. Requiere posicionamiento específico y capacidad de tener conversaciones estratégicas." },
    resources: [
      { type: "podcast", title: "How I Built This — NPR", author: "Guy Raz · NPR", description: "Podcast gratuito con historias de cómo los fundadores de empresas más exitosas las construyeron.", url: "https://www.npr.org/podcasts/510313/how-i-built-this" },
      { type: "video", title: "How to Build a Company Where the Best Ideas Win", author: "Ray Dalio · TED", description: "El fundador de Bridgewater explica cómo construir una organización que escala sin perder calidad.", url: "https://www.ted.com/talks/ray_dalio_how_to_build_a_company_where_the_best_ideas_win" },
    ],
  },

{
    id: "m60", slug: "cultura-de-diseno-organizacion", title: "Cultura de diseño en toda la organización: cuando el diseño es de todos",
    description: "Cómo construir una organización donde el pensamiento de diseño no es una disciplina de un departamento sino una capacidad compartida que mejora todas las áreas.",
    month: "Mes 31", level_required: 4, xp_reward: 580, lessons: 5, status: "available", theme: "Visión estratégica",
    opening: "Las organizaciones más innovadoras del mundo no tienen departamentos de diseño que son buenos — tienen organizaciones enteras que piensan con mentalidad de diseño. En esas organizaciones, el diseño no es lo que hacen los diseñadores — es la manera en que toda la organización aborda los problemas. Construir eso es el proyecto más ambicioso y más valioso de Bamboo.",
    opening_extended: "El estudio de DesignSingapore encontró que las organizaciones design-led superan a sus competidores en innovación, retención de clientes y crecimiento. El factor diferenciador no era tener mejores diseñadores — era haber construido una cultura donde el diseño como forma de pensar permea todas las decisiones.",
    sections: [
      { heading: "Los 22 principios de DesignSingapore para organizaciones design-led", body: "El estudio de DesignSingapore con 27 organizaciones líderes identificó 22 principios agrupados en seis categorías: liderazgo que modela el pensamiento de diseño, estrategia que integra el diseño desde el inicio, personas con fluidez en diseño en todos los niveles, procesos que incorporan design thinking como práctica estándar, espacio y herramientas que facilitan la colaboración creativa, y métricas que hacen visible el valor del diseño.", extended_body: "El principio más contraintuitivo del estudio: las organizaciones design-led más efectivas no son las que más invierten en el departamento de diseño — son las que más invierten en que todas las demás áreas tengan fluidez en diseño. Un CEO de finanzas que entiende por qué la experiencia del usuario importa para el negocio es más valioso para una cultura design-led que un equipo de diseño excelente que trabaja en aislamiento.", example: { label: "Ejemplo real", content: "Una empresa de logística en Singapur participante del estudio tenía un equipo de diseño de dos personas. Pero su CEO participaba en workshops de design thinking y su equipo de operaciones había adoptado el journey mapping para rediseñar sus procesos internos. Resultado: lanzaron tres nuevos servicios en un año mientras sus competidores con equipos de diseño más grandes seguían ofreciendo los mismos servicios." } },
      { heading: "Fluidez en diseño para cada área de la agencia", body: "La fluidez en diseño no significa que todos sean diseñadores — significa que todos pueden participar informadamente en conversaciones de diseño y tomar decisiones de diseño con criterio.", extended_body: "El test de fluidez es simple: ¿puede la persona dar feedback de diseño que genere una conversación productiva? ¿Puede distinguir cuándo una decisión visual sirve al objetivo de comunicación y cuándo no? ¿Puede hacer la pregunta correcta cuando no está segura? Si la respuesta es sí, hay fluidez en diseño." },
      { heading: "Rituales de diseño: las prácticas que construyen cultura", body: "Las culturas no se construyen con discursos — se construyen con rituales. Los rituales de diseño son las prácticas repetidas que hacen que la mentalidad de diseño sea parte del trabajo cotidiano.", extended_body: "Los rituales más efectivos identificados por DesignSingapore: reviews de experiencia de cliente donde participa todo el equipo, sesiones de feedback de diseño con protocolo estructurado que cualquier área puede facilitar, y rituales de aprendizaje donde el equipo comparte trabajo inspirador de dentro y fuera de la industria." },
      { heading: "Medir el valor de la cultura de diseño", body: "Lo que no se mide no existe en la conversación de negocio. Las organizaciones que logran sostener la inversión en cultura de diseño son las que construyeron métricas que conectan el pensamiento de diseño con resultados de negocio reales.", extended_body: "Las métricas más usadas: NPS interno (indicador de cultura organizacional), velocidad de innovación (cuánto tarda un concepto en convertirse en servicio testeable), tasa de éxito de nuevos lanzamientos, y porcentaje de personas que participan activamente en iniciativas de mejora de experiencia." },
      { heading: "Bamboo como proyecto de transformación cultural: de aquí en adelante", body: "Bamboo no es un programa de capacitación — es un proyecto de transformación cultural. El objetivo no es que las personas del holding sepan más sobre innovación y diseño — es que lo practiquen cotidianamente, lo enseñen a través de la Cultura del Hacer, y juntos construyan una organización que usa el diseño como ventaja competitiva.", extended_body: "La Cultura del Hacer es el mecanismo de transferencia. Los 22 principios de DesignSingapore son el mapa de destino. Bamboo es el camino entre los dos. Cada módulo completado, cada ejercicio practicado, cada aprendizaje compartido es un paso hacia una organización que no solo habla de innovación — que la vive. El experto de Bamboo no es quien más sabe — es quien más hace, más enseña y más aprende." },
    ],
    exercise: "Diseñá tu plan de los próximos 90 días como agente de cambio cultural en tu área. ¿Qué ritual de diseño vas a introducir? ¿A quién vas a enseñar algo usando la Cultura del Hacer? ¿Qué iniciativa de mejora de experiencia vas a proponer? ¿Cómo vas a medir si algo cambió? Escríbilo y compartilo con alguien que te pueda pedir cuenta de ese compromiso.",
    takeaway: "Una cultura de diseño no se construye con un departamento de diseño excelente. Se construye con una organización entera que decide aprender a pensar diferente — y que tiene el sistema, la práctica y el compromiso para sostener ese aprendizaje en el tiempo.",
    quiz: { question: "¿Qué distingue a las organizaciones design-led más efectivas según el estudio de DesignSingapore?", options: ["Invierten más presupuesto en tecnología de diseño", "Todas las áreas tienen fluidez en diseño y participan en decisiones de diseño", "Contratan diseñadores más talentosos que la competencia", "Tienen más proyectos premiados internacionalmente"], correct: 1, explanation: "Las organizaciones design-led más efectivas no son las que más invierten en el departamento de diseño sino las que más invierten en que todas las áreas tengan fluidez en diseño. La mentalidad de diseño como capacidad organizacional distribuida supera al talento de diseño concentrado." },
    resources: [
      { type: "article", title: "Design-Led Culture Study Playbook", author: "DesignSingapore Council y ROHEI", description: "Los 22 principios y casos reales de 27 organizaciones líderes. Referencia más completa disponible. Gratuito.", url: "https://designsingapore.org/resources/a-playbook-for-building-a-design-led-culture/" },
      { type: "video", title: "How to Build a Culture of Innovation", author: "Linda Hill · TED", description: "La investigadora de Harvard explica cómo construir culturas de innovación distribuida.", url: "https://www.ted.com/talks/linda_hill_how_to_manage_for_collective_creativity" },
    ],
  }];

export const activities: Activity[] = [
  {
    id: "a0",
    title: "Lanzamiento de Bamboo · Club de Innovación Texo",
    category: "evento",
    date_label: "Miércoles 22 de abril · 17:00 a 19:00",
    xp_reward: 100,
    status: "upcoming",
    description:
      "El evento inaugural de Bamboo. El primer paso del club de innovación del holding. Si estuviste, postulá tus puntos con una foto o descripción de tu participación.",
  },
  {
    id: "a1",
    title: "Workshop: detectar oportunidades invisibles",
    category: "taller",
    date_label: "18 mayo · 9:00 a 11:00",
    xp_reward: 120,
    status: "upcoming",
    description:
      "Una sesión para aprender a leer fricciones en procesos, briefs y reuniones antes de que se conviertan en desgaste normalizado.",
  },
  {
    id: "a2",
    title: "Curso interno: design thinking para cualquier área",
    category: "curso",
    date_label: "25 mayo · 15:00 a 17:00",
    xp_reward: 150,
    status: "upcoming",
    description:
      "Adaptado para cuentas, creatividad, medios, producción, estrategia y equipos de soporte. La idea es que todos puedan usar el método.",
  },
  {
    id: "a3",
    title: "Charla: tendencias que están redefiniendo la industria",
    category: "evento",
    date_label: "5 junio · 18:00",
    xp_reward: 80,
    status: "upcoming",
    description:
      "Una mirada externa a lo que está cambiando en la industria creativa y cómo posicionarse mejor frente a esos cambios.",
  },
  {
    id: "a4",
    title: "Reto del mes: mejorar una experiencia interna",
    category: "reto",
    date_label: "Cierre 30 mayo",
    xp_reward: 200,
    status: "upcoming",
    description:
      "Identificá una fricción diaria, proponé una mejora y presentala como prototipo simple o recomendación accionable.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "b1",
    title: "La diferencia entre quienes crecen en agencia y quienes se estancan",
    summary: "Una mirada directa sobre iniciativa, criterio y la capacidad de mejorar sistemas, no solo tareas.",
    excerpt: "Las agencias no premian únicamente talento. Premian a las personas que detectan un problema antes que el resto, lo nombran con claridad y hacen algo para que cambie.",
    author: "Ariel Ojeda",
    tag: "Carrera",
    status: "published",
    xp_reward: 250,
  },
  {
    id: "b2",
    title: "Cómo detectar oportunidades de innovación en el día a día",
    summary: "Una guía simple para encontrar oportunidades en retrabajos, aprobaciones lentas y conversaciones mal planteadas.",
    excerpt: "La innovación no empieza en un offsite. Empieza en ese momento en que notás que algo consume energía sin devolver valor.",
    author: "Cristiane Viedma",
    tag: "Oportunidades",
    status: "published",
    xp_reward: 250,
  },
  {
    id: "b3",
    title: "Borrador: cómo vender una idea antes de que la maten por miedo",
    summary: "Plantilla editorial para transformar una intuición creativa en una propuesta entendible y defendible.",
    excerpt: "Muchas ideas no mueren porque sean malas. Mueren porque nadie logró contar por qué importaban.",
    author: "Renato Torres",
    tag: "Ejecución",
    status: "draft",
    xp_reward: 150,
  },
];

export const leaderboard: LeaderboardEntry[] = [
  { id: "l1", name: "Cristiane Viedma", area: "Creatividad", points: 1820, level_name: getLevel(1820).name },
  { id: "l2", name: "Renato Torres",    area: "Producción",  points: 1510, level_name: getLevel(1510).name },
  { id: "l3", name: "Bea Aular",        area: "Estrategia",  points: 940,  level_name: getLevel(940).name  },
  { id: "l4", name: "Ariel Ojeda",      area: "Cuentas",     points: 840,  level_name: getLevel(840).name  },
];