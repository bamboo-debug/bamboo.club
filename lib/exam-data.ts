export type ExamQuestion = {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  theme: string;
};

export const EXAM_PASSING_SCORE = 70; // porcentaje mínimo para aprobar
export const EXAM_XP_PASS = 500;
export const EXAM_XP_FAIL = 100;

export const examQuestions: ExamQuestion[] = [
  /* ── FUNDAMENTOS ── */
  {
    id: "e1",
    theme: "Fundamentos",
    question: "¿Cuál es la señal más confiable de que una innovación fue genuinamente valiosa?",
    options: [
      "Que ganó un premio en un festival de creatividad",
      "Que resolvió un problema real generando valor medible para el negocio o el equipo",
      "Que fue la primera en su categoría en el mercado",
      "Que fue implementada con tecnología de vanguardia",
    ],
    correct: 1,
    explanation:
      "El valor real de la innovación se mide por el impacto generado, no por el reconocimiento externo ni por la novedad tecnológica.",
  },
  {
    id: "e2",
    theme: "Fundamentos",
    question: "¿Por qué muchas oportunidades de innovación pasan desapercibidas en las agencias?",
    options: [
      "Porque los equipos creativos no tienen tiempo para innovar",
      "Porque las fricciones cotidianas se normalizan y dejan de verse como problemas",
      "Porque la innovación es responsabilidad exclusiva de la dirección",
      "Porque los clientes no valoran los cambios internos",
    ],
    correct: 1,
    explanation:
      "La normalización de las fricciones —aceptar como inevitable lo que podría mejorarse— es la principal razón por la que las oportunidades de innovación más accesibles no se ven.",
  },
  {
    id: "e3",
    theme: "Fundamentos",
    question: "¿Qué distingue a Bamboo como programa de aprendizaje?",
    options: [
      "Se enfoca exclusivamente en herramientas digitales y tecnología",
      "Forma a personas con criterio, valentía y método para detectar lo que puede mejorarse y convertirlo en acción",
      "Es un programa solo para líderes y directores de área",
      "Proporciona plantillas de procesos listos para implementar",
    ],
    correct: 1,
    explanation:
      "Bamboo no busca formar expertos teóricos sino personas capaces de identificar problemas reales y convertirlos en mejoras concretas desde cualquier área.",
  },
  /* ── MENTALIDAD ── */
  {
    id: "e4",
    theme: "Mentalidad",
    question: "¿Qué representa el 'coraje operativo' en el contexto de innovación?",
    options: [
      "Implementar cambios radicales sin consultar al equipo",
      "Tomar decisiones pequeñas de mejora aunque no se tenga permiso explícito",
      "Presentar ideas únicamente cuando están completamente desarrolladas",
      "Resistir las presiones externas de clientes difíciles",
    ],
    correct: 1,
    explanation:
      "El coraje operativo vive en decisiones cotidianas: proponer una mejora, traer una idea incómoda, defender una solución que todavía está verde.",
  },
  {
    id: "e5",
    theme: "Mentalidad",
    question: "¿Por qué en entornos de alta presión es tan frecuente quedarse con la primera idea aceptable?",
    options: [
      "Porque los equipos creativos están sobrecalificados para las tareas",
      "Porque la presión y el tiempo corto hacen que la primera opción viable parezca suficiente",
      "Porque los clientes prefieren velocidad a calidad",
      "Porque las segundas ideas casi siempre son peores que las primeras",
    ],
    correct: 1,
    explanation:
      "La presión crea atajos cognitivos. Los profesionales que crecen son los que reconocen ese mecanismo y eligen deliberadamente explorar una ronda más.",
  },
  /* ── CLIENTE-CENTRISMO ── */
  {
    id: "e6",
    theme: "Cliente-centrismo",
    question: "¿Qué diferencia a la empatía genuina de la amabilidad superficial?",
    options: [
      "La empatía requiere formación psicológica especializada",
      "La empatía implica comprender lo que importa al otro con suficiente profundidad para tomar mejores decisiones",
      "La amabilidad es más efectiva en relaciones con clientes difíciles",
      "La empatía solo aplica al consumidor final, no al cliente de la agencia",
    ],
    correct: 1,
    explanation:
      "Empatizar no es decirle que sí a todo: es comprender lo que realmente importa al otro para que las decisiones —creativas, estratégicas, de proceso— sean más relevantes.",
  },
  {
    id: "e7",
    theme: "Cliente-centrismo",
    question: "¿Qué revela frecuentemente el mapa de empatía cuando se completa correctamente?",
    options: [
      "La preferencia del cliente por determinados estilos visuales",
      "El presupuesto real disponible para el proyecto",
      "Contradicciones entre lo que el cliente dice y lo que realmente hace o necesita",
      "El nivel jerárquico real del contacto dentro de su organización",
    ],
    correct: 2,
    explanation:
      "Una de las revelaciones más comunes del mapa de empatía son las brechas entre lo declarado y lo observable: el cliente que dice querer innovar pero aprueba solo lo conocido.",
  },
  {
    id: "e8",
    theme: "Cliente-centrismo",
    question: "¿Por qué los cuadrantes 'en rojo' del mapa de empatía son valiosos?",
    options: [
      "Indican áreas donde el cliente tiene problemas críticos que resolver",
      "Señalan las zonas donde se está adivinando, que se convierten en agenda de preguntas",
      "Muestran dónde la competencia tiene mayor penetración",
      "Representan las oportunidades de up-selling más rentables",
    ],
    correct: 1,
    explanation:
      "Los cuadrantes donde se está adivinando en lugar de observar son exactamente los puntos donde más se puede aprender con una buena conversación.",
  },
  /* ── DESIGN THINKING ── */
  {
    id: "e9",
    theme: "Design Thinking",
    question: "¿Por qué Design Thinking describe sus etapas como no lineales?",
    options: [
      "Porque el proceso puede ejecutarse en cualquier orden según la preferencia del equipo",
      "Porque los insights de etapas posteriores suelen requerir volver a etapas anteriores",
      "Porque en proyectos cortos se pueden saltear algunas etapas sin consecuencias",
      "Porque la etapa de ideación siempre debe ir antes que la de definición",
    ],
    correct: 1,
    explanation:
      "El valor de Design Thinking está en la iteración: un aprendizaje en la etapa de testeo puede revelar que la definición del problema era incorrecta, requiriendo volver a empatizar.",
  },
  {
    id: "e10",
    theme: "Design Thinking",
    question: "¿Cómo cambia la formulación del problema el espacio de soluciones disponibles?",
    options: [
      "No lo cambia: un buen problema tiene siempre las mismas soluciones posibles",
      "Solo afecta la presentación, no las ideas generadas",
      "Una formulación más amplia siempre genera más soluciones que una específica",
      "La formulación delimita qué soluciones son imaginables: cambiarla abre o cierra territorios enteros",
    ],
    correct: 3,
    explanation:
      "El ejemplo clásico: 'necesitamos más seguidores' lleva a ideas de contenido; 'nuestros clientes no perciben nuestro valor' lleva a ideas de propuesta, comunicación y experiencia. Mismo síntoma, formulaciones radicalmente distintas.",
  },
  {
    id: "e11",
    theme: "Design Thinking",
    question: "¿Qué estructura tiene un Point of View (POV) bien formulado?",
    options: [
      "Problema + solución propuesta + presupuesto estimado",
      "Usuario + necesidad + insight",
      "Síntoma + causa raíz + indicador de éxito",
      "Audiencia + mensaje + canal de comunicación",
    ],
    correct: 1,
    explanation:
      "El POV combina quién es el usuario, qué necesita y cuál es el insight que explica esa necesidad. Esa combinación define el problema de manera que abre soluciones nuevas.",
  },
  /* ── EJECUCIÓN ── */
  {
    id: "e12",
    theme: "Ejecución",
    question: "¿Por qué 'vender la idea' es parte del trabajo creativo, no una actividad separada?",
    options: [
      "Porque los clientes siempre necesitan validación externa de las propuestas",
      "Porque sin capacidad de comunicar el valor, las mejores ideas mueren antes de ser evaluadas realmente",
      "Porque los equipos de cuentas no tienen criterio para evaluar ideas creativas",
      "Porque las presentaciones definen el precio que se puede cobrar",
    ],
    correct: 1,
    explanation:
      "Muchos talentos no se frustran por falta de ideas sino por falta de traducción: la incapacidad de convertir una propuesta en una historia que conecte con lo que le importa a quien decide.",
  },
  {
    id: "e13",
    theme: "Ejecución",
    question: "¿Cuál es el propósito central de un prototipo?",
    options: [
      "Demostrar el nivel técnico del equipo al cliente",
      "Generar una versión reducida pero completa del entregable final",
      "Aprender algo específico sobre una idea con el menor costo posible",
      "Cumplir con el paso de aprobación antes de la producción",
    ],
    correct: 2,
    explanation:
      "Un prototipo no es una versión pequeña del producto final: es una herramienta de aprendizaje. Su calidad se mide por lo que permite descubrir, no por lo que muestra.",
  },
  {
    id: "e14",
    theme: "Ejecución",
    question: "¿Qué convierte a un fracaso de prototipo en un resultado valioso?",
    options: [
      "Que el error fue causado por factores externos fuera del control del equipo",
      "Que el aprendizaje generado reduce el costo y el riesgo de etapas posteriores",
      "Que el cliente aceptó el resultado como parte del proceso",
      "Que el equipo documentó quién fue responsable del error",
    ],
    correct: 1,
    explanation:
      "Descubrir que una idea no funciona en etapa de prototipo cuesta diez veces menos que descubrirlo después de producir y lanzar. El prototipo convierte el fracaso en información barata.",
  },
  /* ── PRODUCTO ── */
  {
    id: "e15",
    theme: "Producto",
    question: "¿Qué es el MVP en el contexto de una agencia de servicios?",
    options: [
      "El Most Valuable Professional, el empleado con mejor desempeño",
      "La versión más cara del servicio ofrecida al mejor cliente",
      "La versión mínima de un servicio estandarizado que genera valor y puede replicarse",
      "El presupuesto mínimo aceptable para iniciar un proyecto",
    ],
    correct: 2,
    explanation:
      "En agencias, el MVP puede ser un diagnóstico estandarizado, un taller replicable o una herramienta interna que empieza a venderse. Lo mínimo que genera valor y puede escalarse.",
  },
  {
    id: "e16",
    theme: "Producto",
    question: "¿Qué bloque del Business Model Canvas define mejor si una idea tiene sentido comercial?",
    options: [
      "Estructura de costos",
      "Canales de distribución",
      "Propuesta de valor",
      "Fuentes de ingreso",
    ],
    correct: 2,
    explanation:
      "La propuesta de valor es el núcleo porque conecta directamente con el problema del cliente y justifica por qué alguien pagaría. Sin una propuesta de valor clara, los demás bloques no tienen base.",
  },
  {
    id: "e17",
    theme: "Producto",
    question: "¿Qué diferencia fundamental hay entre un servicio de agencia y un producto?",
    options: [
      "El producto siempre es digital; el servicio es presencial",
      "El producto puede entregarse múltiples veces con costos marginales decrecientes; el servicio requiere esfuerzo nuevo cada vez",
      "El servicio es más rentable porque se puede cobrar por hora",
      "El producto requiere mayor inversión inicial pero menor talento para ejecutar",
    ],
    correct: 1,
    explanation:
      "La escalabilidad es la diferencia central: un producto bien diseñado reduce el costo marginal de entrega a medida que se repite, algo que el servicio personalizado no puede lograr.",
  },
  /* ── LIDERAZGO ── */
  {
    id: "e18",
    theme: "Liderazgo",
    question: "¿Qué es la 'influencia sin autoridad' y por qué es relevante en innovación?",
    options: [
      "La capacidad de tomar decisiones sin necesitar aprobación de superiores",
      "La habilidad de generar credibilidad y aliados para impulsar cambios sin depender de un cargo formal",
      "El poder de vetar propuestas que no se alinean con la estrategia del área",
      "La posibilidad de asignar recursos sin pasar por procesos administrativos",
    ],
    correct: 1,
    explanation:
      "Los cambios más duraderos los impulsan personas que construyen confianza y coaliciones, no solo quienes tienen autoridad formal. La innovación casi siempre requiere operar sin ese respaldo jerárquico.",
  },
  {
    id: "e19",
    theme: "Liderazgo",
    question: "¿Por qué las organizaciones tienen 'anticuerpos' naturales contra el cambio?",
    options: [
      "Porque los empleados temen perder sus trabajos ante la automatización",
      "Porque los sistemas organizacionales están diseñados para estabilidad y predecibilidad, no para cambio continuo",
      "Porque la innovación siempre requiere más presupuesto del disponible",
      "Porque los clientes prefieren proveedores que no cambian su forma de trabajar",
    ],
    correct: 1,
    explanation:
      "La resistencia no es malicia: es el sistema protegiendo su estabilidad. Entender eso permite responder con paciencia estratégica en lugar de frustración.",
  },
  {
    id: "e20",
    theme: "Liderazgo",
    question: "¿Qué condición hace posible la experimentación genuina en un equipo?",
    options: [
      "Presupuesto dedicado a proyectos de innovación aprobado por dirección",
      "Seguridad psicológica: saber que equivocarse no tiene consecuencias personales graves",
      "Acceso a herramientas de prototipado y tecnología de punta",
      "Un equipo exclusivamente dedicado a innovación separado del negocio principal",
    ],
    correct: 1,
    explanation:
      "Ningún equipo experimenta genuinamente en entornos donde el error tiene consecuencias personales. La seguridad psicológica es la condición previa a todo lo demás.",
  },
  /* ── ESTRATEGIA ── */
  {
    id: "e21",
    theme: "Estrategia",
    question: "¿Qué revela la entrevista de contexto en la metodología Jobs to Be Done?",
    options: [
      "Las características técnicas que el cliente más valora en un servicio",
      "El presupuesto que el cliente tiene disponible para el año siguiente",
      "La narrativa de qué estaba pasando en el negocio del cliente cuando decidió contratar",
      "La lista de competidores que el cliente evaluó antes de elegir",
    ],
    correct: 2,
    explanation:
      "La entrevista de contexto busca entender el momento de contratación: qué frustración lo llevó a actuar, qué alternativas consideró, cómo sabrá que tomó la decisión correcta. Eso revela el job real.",
  },
  {
    id: "e22",
    theme: "Estrategia",
    question: "¿Cuáles son los tres niveles del 'trabajo' que cubre el framework JTBD?",
    options: [
      "Estratégico, táctico y operacional",
      "Funcional, social y emocional",
      "Corto, mediano y largo plazo",
      "Individual, de equipo y organizacional",
    ],
    correct: 1,
    explanation:
      "JTBD identifica que toda contratación tiene una dimensión funcional (qué hace), social (cómo lo hace ver ante otros) y emocional (cómo lo hace sentir). Entender los tres niveles transforma la propuesta de valor.",
  },
  {
    id: "e23",
    theme: "Estrategia",
    question: "¿Por qué los datos cuantitativos solos son insuficientes para decisiones de innovación?",
    options: [
      "Porque los equipos de datos suelen cometer errores de medición",
      "Porque los datos cuantitativos dicen qué está pasando pero no por qué, y eso limita la calidad de la decisión",
      "Porque las métricas de innovación no pueden medirse numéricamente",
      "Porque los clientes no confían en los datos estadísticos",
    ],
    correct: 1,
    explanation:
      "Los datos cuantitativos dan el qué; los cualitativos dan el por qué. Las decisiones robustas requieren ambos: métricas sin contexto pueden llevar a respuestas correctas sobre preguntas equivocadas.",
  },
  {
    id: "e24",
    theme: "Estrategia",
    question: "¿Qué hace que un experimento sea genuinamente falsable?",
    options: [
      "Que pueda ejecutarse con un presupuesto mínimo",
      "Que el resultado positivo esté garantizado antes de empezar",
      "Que exista al menos un resultado posible que cambiaría la decisión o el rumbo",
      "Que sea ejecutado por una persona externa al proyecto",
    ],
    correct: 2,
    explanation:
      "La falsabilidad es el criterio central: si no hay ningún resultado que cambiaría el camino elegido, no se está experimentando sino confirmando supuestos con apariencia científica.",
  },
  /* ── MÉTRICAS ── */
  {
    id: "e25",
    theme: "Estrategia",
    question: "¿Qué miden las métricas de outcome en innovación?",
    options: [
      "El esfuerzo invertido en actividades de innovación",
      "La cantidad de prototipos y experimentos producidos",
      "El cambio real generado en el comportamiento de usuarios o en los resultados del negocio",
      "El número de ideas generadas en sesiones de ideación",
    ],
    correct: 2,
    explanation:
      "Las métricas de outcome son las únicas que validan si la innovación cumplió su propósito: miden impacto real, no actividad ni producción.",
  },
  {
    id: "e26",
    theme: "Estrategia",
    question: "¿Qué caracteriza a una North Star Metric bien elegida?",
    options: [
      "Es siempre una métrica financiera como ingresos o margen",
      "Refleja el valor que el producto entrega al usuario, no solo al negocio",
      "Es la métrica más fácil de medir con las herramientas disponibles",
      "Incluye varios indicadores combinados para mayor precisión",
    ],
    correct: 1,
    explanation:
      "La North Star Metric refleja el valor entregado al usuario como proxy del éxito. Para Spotify era minutos de escucha, no suscripciones pagadas: mide si el producto cumple su promesa.",
  },
  /* ── COMUNICACIÓN ── */
  {
    id: "e27",
    theme: "Comunicación",
    question: "¿Por qué atacar directamente la resistencia al cambio suele reforzarla?",
    options: [
      "Porque genera conflicto que distrae al equipo de los objetivos",
      "Porque la resistencia protege algo que la persona genuinamente valora y ignorarlo la vuelve más defensiva",
      "Porque el equipo de liderazgo siempre apoya a quien resiste el cambio",
      "Porque las personas resistentes tienen más experiencia que los innovadores",
    ],
    correct: 1,
    explanation:
      "La resistencia casi siempre tiene una razón legítima. Una narrativa efectiva incluye esas razones y muestra cómo la propuesta las respeta, creando apertura en lugar de cierre.",
  },
  {
    id: "e28",
    theme: "Comunicación",
    question: "¿Cuál de estas es la estructura más efectiva para presentar una idea de cambio?",
    options: [
      "Solución → beneficios → costos → ejemplos",
      "Situación actual → tensión → posibilidad → solución → primeros pasos",
      "Antecedentes → marco teórico → metodología → resultados esperados",
      "Problema → causas → responsables → plan de acción",
    ],
    correct: 1,
    explanation:
      "La estructura narrativa (situación → tensión → posibilidad → solución → primeros pasos) crea el contexto emocional necesario para que la propuesta se sienta como un viaje, no como una presentación.",
  },
  /* ── ORGANIZACIÓN ── */
  {
    id: "e29",
    theme: "Organización",
    question: "¿Cuál es el mecanismo central detrás de la mayoría de las disrupciones empresariales históricas?",
    options: [
      "Las empresas disrumpidas eran incompetentes o poco creativas",
      "Las empresas disrumpidas perfeccionaron tanto lo que sabían hacer que ignoraron señales de cambio externo",
      "Las empresas disrumpidas no tenían acceso a la tecnología necesaria para adaptarse",
      "Las empresas disrumpidas eligieron mercados equivocados para expandirse",
    ],
    correct: 1,
    explanation:
      "La trampa del éxito: las organizaciones más exitosas dedican sus mejores recursos a optimizar lo que ya funciona, reduciendo la capacidad de detectar y responder a cambios estructurales en el entorno.",
  },
  {
    id: "e30",
    theme: "Organización",
    question: "¿Qué hace que una organización sea 'ambidiestra' en términos de innovación?",
    options: [
      "Que tiene equipos de trabajo con perfiles muy diferentes entre sí",
      "Que gestiona simultáneamente la optimización del negocio actual y la exploración de negocios futuros",
      "Que aplica design thinking en todos sus proyectos sin excepción",
      "Que tiene un área de innovación con presupuesto propio independiente del core",
    ],
    correct: 1,
    explanation:
      "La ambidestreza organizacional es la capacidad de explotar el presente mientras se explora el futuro, con estructuras y métricas diferenciadas para cada tipo de actividad.",
  },
  {
    id: "e31",
    theme: "Organización",
    question: "¿Por qué la capacidad de absorción es clave en la innovación abierta?",
    options: [
      "Porque determina cuántos socios externos puede gestionar la organización simultáneamente",
      "Porque sin base de conocimiento interna, el conocimiento externo no puede entenderse ni adaptarse",
      "Porque facilita la protección de la propiedad intelectual compartida",
      "Porque reduce los costos de transferencia de conocimiento entre organizaciones",
    ],
    correct: 1,
    explanation:
      "La innovación abierta requiere capacidades internas fuertes para reconocer, evaluar y adaptar el conocimiento externo. Sin esa base, el acceso a ideas externas produce contacto, no transformación.",
  },
  /* ── TENDENCIAS ── */
  {
    id: "e32",
    theme: "Tendencias",
    question: "¿Qué impacto tiene la IA generativa en el modelo de negocio de las agencias creativas?",
    options: [
      "Elimina la necesidad de equipos creativos en las agencias",
      "Reduce el costo marginal de producción, desplazando el diferencial competitivo hacia estrategia y criterio",
      "Aumenta la demanda de producción porque los clientes quieren más contenido",
      "Solo afecta a las agencias que trabajan con clientes de tecnología",
    ],
    correct: 1,
    explanation:
      "La comoditización de la producción por IA no elimina las agencias, pero sí invalida el modelo donde el diferencial es producción. El valor migra hacia lo que los sistemas no replican fácilmente.",
  },
  {
    id: "e33",
    theme: "Tendencias",
    question: "¿Qué oportunidad crea para las agencias el fenómeno del 'cliente como medio'?",
    options: [
      "Mayor demanda de publicidad en medios tradicionales",
      "Posibilidad de ofrecer servicios de compra programática a menor costo",
      "Ayudar a construir y monetizar audiencias directas en lugar de solo comprar atención en medios pagos",
      "Acceso a datos de consumidores que antes solo tenían los medios",
    ],
    correct: 2,
    explanation:
      "Las marcas con audiencias propias reducen su dependencia de medios pagos. Eso abre un nuevo territorio para agencias que puedan ayudar a construir, gestionar y monetizar comunidades directas.",
  },
  /* ── ÉTICA ── */
  {
    id: "e34",
    theme: "Ética",
    question: "¿Qué son las 'consecuencias de segundo orden' en el diseño de innovaciones?",
    options: [
      "Los beneficios adicionales que se descubren después del lanzamiento",
      "Los efectos indirectos no diseñados que emergen en el sistema más amplio",
      "Las mejoras iterativas que se hacen en la segunda versión del producto",
      "Los impactos financieros esperados para el segundo año de operación",
    ],
    correct: 1,
    explanation:
      "Las consecuencias de segundo orden son los efectos no previstos sobre mercados laborales, comunidades, comportamientos o entorno. Considerarlas es parte del diseño responsable.",
  },
  {
    id: "e35",
    theme: "Ética",
    question: "¿Qué sesgo frecuente afecta los procesos de co-creación e investigación de usuarios?",
    options: [
      "Sesgo de anclaje en los precios de los competidores",
      "Sesgo de confirmación en la selección de metodologías",
      "Sobre-representación de quienes tienen más acceso y tiempo para participar",
      "Sesgo de autoridad hacia los usuarios más seniors",
    ],
    correct: 2,
    explanation:
      "Los procesos de co-creación tienden a incluir a quienes tienen más recursos para participar, generando innovaciones que funcionan bien para algunos y refuerzan desventajas para otros.",
  },
  /* ── PORTAFOLIO ── */
  {
    id: "e36",
    theme: "Estrategia avanzada",
    question: "En el modelo de los tres horizontes de McKinsey, ¿qué caracteriza al Horizonte 3?",
    options: [
      "Optimización del negocio actual con resultados en meses",
      "Escalado de negocios emergentes con resultados en 1-3 años",
      "Exploración de opciones para el futuro con resultados en 3-10 años",
      "Gestión de crisis y recuperación de negocios en declive",
    ],
    correct: 2,
    explanation:
      "El Horizonte 3 cubre la exploración de territorios completamente nuevos. Sus resultados son inciertos y lejanos, pero sin inversión en H3 la organización no construye capacidades para el futuro.",
  },
  {
    id: "e37",
    theme: "Estrategia avanzada",
    question: "¿Por qué evaluar iniciativas de H3 con métricas de H1 garantiza su cancelación?",
    options: [
      "Porque los equipos de H3 son más pequeños y no pueden cumplir los mismos objetivos",
      "Porque las métricas de H1 (ROI, eficiencia) no aplican a etapas de exploración con alta incertidumbre",
      "Porque la dirección siempre prioriza resultados de corto plazo independientemente de las métricas",
      "Porque el presupuesto de H3 siempre es insuficiente para lograr resultados comparables",
    ],
    correct: 1,
    explanation:
      "La exploración genera aprendizajes, no retornos de corto plazo. Medirla con métricas de eficiencia o ROI hace que siempre parezca un fracaso comparada con iniciativas maduras.",
  },
  /* ── SISTEMA ── */
  {
    id: "e38",
    theme: "Estrategia avanzada",
    question: "¿Cuál es el punto de apalancamiento más poderoso para transformar un sistema organizacional?",
    options: [
      "Cambiar los indicadores de performance",
      "Reemplazar a los líderes que generan los problemas",
      "Transformar el paradigma desde el que se percibe el sistema",
      "Aumentar el presupuesto destinado a innovación",
    ],
    correct: 2,
    explanation:
      "Según Meadows, el paradigma —los supuestos desde los que se opera— determina objetivos, reglas y qué cambios son posibles. Es la palanca de mayor impacto porque cambia lo que se puede imaginar.",
  },
  {
    id: "e39",
    theme: "Estrategia avanzada",
    question: "¿Qué distingue a un 'transformador organizacional' de un innovador?",
    options: [
      "El transformador tiene más años de experiencia y reconocimiento",
      "El transformador rediseña las reglas del sistema que determina qué mejoras son posibles",
      "El innovador trabaja en proyectos individuales; el transformador gestiona equipos",
      "El transformador tiene acceso a más recursos para implementar cambios grandes",
    ],
    correct: 1,
    explanation:
      "El innovador mejora dentro del sistema. El transformador rediseña el contexto —incentivos, métricas, supuestos— que determina qué mejoras son posibles para todos.",
  },
  /* ── SPRINT ── */
  {
    id: "e40",
    theme: "Métodos",
    question: "¿Por qué en un Design Sprint las ideas se generan de manera individual antes de compartirlas en grupo?",
    options: [
      "Para evaluar la creatividad individual de cada miembro del equipo",
      "Para evitar el pensamiento grupal que hace converger prematuramente las ideas",
      "Porque el tiempo disponible no permite sesiones de ideación colectiva",
      "Para que cada persona pueda defender su idea sin influencia de los demás",
    ],
    correct: 1,
    explanation:
      "El pensamiento grupal hace que las primeras ideas mencionadas dominen la conversación. La ideación individual paralela genera diversidad real antes de convergir.",
  },
  {
    id: "e41",
    theme: "Métodos",
    question: "¿Qué aprende un equipo en el viernes de un Design Sprint que justifica todo el proceso?",
    options: [
      "Si el prototipo tiene el nivel técnico adecuado para mostrarlo al cliente",
      "Si las hipótesis centrales del proyecto tienen sentido para usuarios reales antes de invertir meses de desarrollo",
      "Si el equipo tiene las habilidades necesarias para ejecutar el proyecto completo",
      "Si el cliente está dispuesto a pagar el precio estimado para la solución",
    ],
    correct: 1,
    explanation:
      "Cinco entrevistas en un solo día revelan si la idea tiene sentido para personas reales. Ese aprendizaje, obtenido en una semana, puede evitar meses de trabajo en la dirección equivocada.",
  },
  /* ── INCREMENTAL VS DISRUPTIVA ── */
  {
    id: "e42",
    theme: "Estrategia",
    question: "¿Por qué la innovación incremental suele tener mejor ROI del que se le atribuye?",
    options: [
      "Porque requiere menos creatividad y puede ejecutarse con equipos menores",
      "Porque los clientes prefieren mejoras graduales a cambios radicales",
      "Porque genera valor medible con menor riesgo y en tiempos más cortos que la innovación radical",
      "Porque es la única viable en organizaciones con presupuestos limitados",
    ],
    correct: 2,
    explanation:
      "Las mejoras del 20% en un proceso existente, digitalizaciones o rediseños de experiencia generan más valor en menos tiempo y con mucho menos riesgo que proyectos disruptivos que tardan años en mostrar impacto.",
  },
  {
    id: "e43",
    theme: "Estrategia",
    question: "¿Cuál es el error de escala más frecuente en proyectos de innovación?",
    options: [
      "Lanzar el producto en un mercado demasiado pequeño para validar el modelo",
      "Escalar a nivel masivo antes de haber validado las hipótesis centrales",
      "Invertir en tecnología de producción antes de tener demanda confirmada",
      "Contratar más personas de las necesarias en la etapa inicial",
    ],
    correct: 1,
    explanation:
      "Escalar antes de aprender es uno de los errores más costosos en innovación. La escala correcta para empezar es la mínima que permite aprender lo necesario.",
  },
  /* ── PREGUNTAS INTEGRADORAS ── */
  {
    id: "e44",
    theme: "Integración",
    question: "¿Qué tienen en común Design Thinking, Jobs to Be Done y el mapa de empatía como herramientas?",
    options: [
      "Todas requieren tecnología específica para ser aplicadas correctamente",
      "Todas ponen al ser humano —sus necesidades, motivaciones y contexto— como punto de partida",
      "Todas son metodologías creadas para startups y no aplican en agencias tradicionales",
      "Todas generan entregables visuales que pueden presentarse directamente al cliente",
    ],
    correct: 1,
    explanation:
      "La orientación al ser humano es el eje compartido. Todas estas herramientas buscan reemplazar los supuestos del equipo por comprensión real de la persona que importa.",
  },
  {
    id: "e45",
    theme: "Integración",
    question: "¿Cómo se conectan el prototipado rápido y la cultura de experimentación?",
    options: [
      "El prototipado es una etapa del proceso de experimentación, que ocurre después de la hipótesis y antes del testeo",
      "La cultura de experimentación elimina la necesidad de prototipar porque se prueban ideas directamente",
      "El prototipado solo aplica a productos físicos; la experimentación aplica a procesos",
      "Ambos son sinónimos que describen el mismo proceso con diferente nombre",
    ],
    correct: 0,
    explanation:
      "El prototipo es la herramienta que hace testeable una hipótesis. La cultura de experimentación es el entorno que hace posible construir y evaluar ese prototipo sin miedo a las consecuencias del error.",
  },
  {
    id: "e46",
    theme: "Integración",
    question: "¿Qué relación hay entre la propuesta de valor del Canvas y el Job to Be Done?",
    options: [
      "El Canvas reemplaza al JTBD en proyectos de mayor escala",
      "El JTBD ayuda a identificar el trabajo que el cliente necesita completar, que es exactamente lo que debería describir la propuesta de valor del Canvas",
      "Ambas son herramientas de análisis financiero aplicadas a diferentes etapas del proyecto",
      "El JTBD define el precio, y la propuesta de valor define el producto",
    ],
    correct: 1,
    explanation:
      "El JTBD revela el trabajo funcional, social y emocional del cliente. Una propuesta de valor efectiva en el Canvas describe exactamente cómo ayuda a completar ese trabajo, conectando ambas herramientas.",
  },
  {
    id: "e47",
    theme: "Integración",
    question: "¿Por qué la seguridad psicológica es un prerrequisito tanto para la experimentación como para el liderazgo innovador?",
    options: [
      "Porque ambos procesos requieren recursos que solo se asignan en entornos de confianza",
      "Porque sin seguridad psicológica las personas ni proponen ideas ni las prueban, bloqueando ambos procesos",
      "Porque los clientes perciben mejor la innovación en organizaciones con alta cohesión de equipo",
      "Porque la seguridad psicológica reduce los conflictos que retrasan los proyectos",
    ],
    correct: 1,
    explanation:
      "Sin seguridad psicológica, las personas no proponen ideas que puedan ser rechazadas ni ejecutan experimentos que puedan fallar. Es la condición de base sin la que ningún proceso de innovación funciona.",
  },
  {
    id: "e48",
    theme: "Integración",
    question: "¿Cuál de estos escenarios describe mejor la aplicación correcta del pensamiento de producto en una agencia?",
    options: [
      "Cobrar por hora en lugar de por proyecto para capturar mejor el valor generado",
      "Identificar un servicio que se repite frecuentemente, estandarizarlo, empaquetarlo y escalarlo como producto replicable",
      "Crear una filial tecnológica que desarrolle software independiente del negocio de comunicación",
      "Reemplazar todos los servicios personalizados por soluciones estándar para reducir costos",
    ],
    correct: 1,
    explanation:
      "El pensamiento de producto en una agencia parte de reconocer servicios repetidos como proto-productos: estandarizarlos permite escalar el valor sin escalar el esfuerzo en la misma proporción.",
  },
  {
    id: "e49",
    theme: "Integración",
    question: "¿Qué distingue a una organización que 'aprende' de una que solo 'ejecuta'?",
    options: [
      "La organización que aprende dedica más tiempo a capacitación formal",
      "La organización que aprende convierte experiencias —incluyendo errores— en conocimiento organizacional sistemático",
      "La organización que aprende tiene líderes más jóvenes y abiertos al cambio",
      "La organización que aprende invierte más en tecnología de gestión del conocimiento",
    ],
    correct: 1,
    explanation:
      "La diferencia no está en cuánto ocurre sino en qué se hace con lo que ocurre. Documentar hipótesis, resultados y aprendizajes convierte la experiencia individual en conocimiento que queda disponible para toda la organización.",
  },
  {
    id: "e50",
    theme: "Integración",
    question: "Si tuvieras que resumir el propósito de Bamboo en una frase, ¿cuál de estas lo describe mejor?",
    options: [
      "Entrenar a los empleados en las últimas herramientas digitales del mercado",
      "Generar un ranking de los más creativos para premiarlos con reconocimiento interno",
      "Formar personas con criterio, método y valentía para transformar cómo trabaja el holding desde adentro",
      "Certificar a los empleados en metodologías ágiles reconocidas internacionalmente",
    ],
    correct: 2,
    explanation:
      "Bamboo no busca formar expertos teóricos ni rankings de creatividad: busca que cada persona del holding pueda detectar oportunidades reales y convertirlas en mejoras concretas, desde cualquier área y nivel.",
  },
  {
    id: "e51",
    theme: "Integración",
    question: "¿Qué hace que una agencia sea difícil de disrumpir por competidores o tecnología?",
    options: [
      "Tener muchos años de historia y clientes establecidos",
      "Construir capacidades propias de producto, método y conocimiento que no se replican fácilmente",
      "Especializarse en un solo sector vertical con relaciones profundas",
      "Adoptar todas las tecnologías nuevas antes que la competencia",
    ],
    correct: 1,
    explanation:
      "Las capacidades propias —metodología, productos escalables, conocimiento organizacional— son más difíciles de copiar que los servicios genéricos. Son lo que diferencia a una agencia que construye el futuro de una que defiende el presente.",
  },
  {
    id: "e52",
    theme: "Integración",
    question: "¿Cuál de los siguientes comportamientos describe mejor a alguien que completó el recorrido Bamboo?",
    options: [
      "Propone nuevas herramientas digitales en cada reunión de equipo",
      "Puede diagnosticar problemas reales, diseñar experimentos para probarlos y construir aliados para implementarlos",
      "Conoce de memoria los nombres de todas las metodologías de innovación más usadas",
      "Participa activamente en todos los talleres y eventos del programa",
    ],
    correct: 1,
    explanation:
      "El recorrido completo de Bamboo apunta a desarrollar una capacidad integrada: detectar problemas con empatía y criterio, generar y probar soluciones con método, y mover organizaciones con narrativa y liderazgo.",
  },
];
