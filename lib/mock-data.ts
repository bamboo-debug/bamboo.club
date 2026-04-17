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
  /* ─────────────────────────────────────────────
     MES 1 · MÓDULO 1 · Fundamentos
  ───────────────────────────────────────────── */
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
  },

  /* ─────────────────────────────────────────────
     MES 1 · MÓDULO 2 · Mentalidad
  ───────────────────────────────────────────── */
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
  },

  /* ─────────────────────────────────────────────
     MES 2 · MÓDULO 3 · Cliente-centrismo
  ───────────────────────────────────────────── */
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
  },

  /* ─────────────────────────────────────────────
     MES 2 · MÓDULO 4 · Cliente-centrismo
  ───────────────────────────────────────────── */
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
  },

  /* ─────────────────────────────────────────────
     MES 3 · MÓDULO 5 · Design Thinking
  ───────────────────────────────────────────── */
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
  },

  /* ─────────────────────────────────────────────
     MES 3 · MÓDULO 6 · Design Thinking
  ───────────────────────────────────────────── */
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
  },

  /* ─────────────────────────────────────────────
     MES 4 · MÓDULOS 7-8 (sin expandir en esta versión)
  ───────────────────────────────────────────── */
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
  },

];

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