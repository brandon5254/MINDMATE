import { Injectable } from '@angular/core';
import { DiagnosisInformation } from '../models/diagnosisInformation';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  diagnosisList = [
    new DiagnosisInformation(
      "Alucinaciones",
      "Psiquiatría",
      "Las alucinaciones son percepciones sensoriales falsas, como escuchar voces o ver cosas que no están presentes. Son un síntoma común de la esquizofrenia y pueden afectar significativamente el funcionamiento diario.",
      ["Buscar evaluación psiquiátrica", "Evitar situaciones estresantes", "Considerar tratamiento antipsicótico", "Participar en terapia"]
  ),
  new DiagnosisInformation(
      "Ideas delirantes",
      "Psiquiatría",
      "Las ideas delirantes implican mantener creencias falsas con firmeza a pesar de la evidencia clara en contra, como pensar que otros conspiran en su contra.",
      ["Consultar a un psiquiatra", "Terapia cognitivo-conductual", "Cumplimiento del tratamiento", "Involucrar apoyo familiar"]
  ),
  new DiagnosisInformation(
      "Control del pensamiento",
      "Psiquiatría",
      "El control del pensamiento se refiere a la creencia de que los pensamientos están siendo influenciados o controlados por fuerzas externas, un tipo de delirio común en la esquizofrenia.",
      ["Evaluación psiquiátrica inmediata", "Medicamentos antipsicóticos", "Técnicas de orientación a la realidad", "Monitoreo terapéutico"]
  ),
  new DiagnosisInformation(
      "Obsesiones de presencia",
      "Psiquiatría",
      "La obsesión con una presencia no vista se refiere a la sensación persistente o creencia de que alguien o algo está presente cuando no lo está, lo que contribuye a la ansiedad y la confusión.",
      ["Técnicas de enraizamiento terapéutico", "Revisión de medicación", "Reafirmación del entorno", "Psicoterapia de apoyo"]
  ),
  new DiagnosisInformation(
      "Desorganización del pensamiento",
      "Psiquiatría",
      "La desorganización del pensamiento afecta la capacidad para mantener conexiones lógicas, lo que conduce a un discurso y comportamiento incoherente o tangencial.",
      ["Rutina diaria estructurada", "Terapia del habla", "Medicamentos psiquiátricos", "Terapia de remediación cognitiva"]
  ),
  new DiagnosisInformation(
      "Lenguaje desorganizado",
      "Psiquiatría",
      "El lenguaje desorganizado se manifiesta mediante incoherencias, cambios frecuentes de tema o uso sin sentido de palabras. Refleja pensamiento desorganizado típico en la esquizofrenia.",
      ["Evaluación por terapeuta del lenguaje", "Técnicas de conversación con apoyo", "Cumplimiento de medicación", "Terapia conductual"]
  ),
  new DiagnosisInformation(
      "Catatonía",
      "Psiquiatría",
      "La catatonía es una alteración psicomotora que puede incluir rigidez, falta de movimiento o movimientos excesivos, y se observa en casos graves de esquizofrenia.",
      ["Atención médica inmediata", "Tratamiento con benzodiacepinas", "Terapia electroconvulsiva (si es necesario)", "Monitoreo continuo"]
  ),
  new DiagnosisInformation(
      "Paranoia intensa",
      "Psiquiatría",
      "La paranoia intensa se caracteriza por desconfianza extrema y sospechas irracionales, lo que puede llevar al aislamiento social y angustia emocional.",
      ["Reafirmación terapéutica", "Entorno de baja estimulación", "Medicamentos antipsicóticos", "Supervisión psiquiátrica"]
  ),
  new DiagnosisInformation(
      "Comportamiento motor desorganizado",
      "Psiquiatría",
      "El comportamiento motor desorganizado incluye agitación impredecible, reacciones inapropiadas o movimientos sin propósito, interfiriendo con la vida diaria.",
      ["Ajustes de seguridad en el entorno", "Terapia ocupacional", "Apoyo conductual", "Manejo de medicación"]
  ),
  new DiagnosisInformation(
      "Dificultades en teoría de la mente",
      "Psiquiatría",
      "Las dificultades en la teoría de la mente afectan la capacidad para comprender los pensamientos, emociones e intenciones de los demás, lo que lleva a malentendidos sociales.",
      ["Entrenamiento en habilidades sociales", "Terapia grupal", "Rehabilitación cognitiva", "Psicoeducación familiar"]
  ),
  new DiagnosisInformation(
    "Eco del pensamiento",
    "Psiquiatría",
    "El eco del pensamiento es un fenómeno en el que la persona percibe que sus propios pensamientos se repiten en voz alta dentro de su mente, como si alguien más los repitiera. Es común en cuadros psicóticos.",
    ["Evaluación psiquiátrica", "Terapia antipsicótica", "Entrenamiento en control cognitivo", "Seguimiento regular"]
),
new DiagnosisInformation(
    "Comportamiento social inadecuado",
    "Psiquiatría",
    "El comportamiento social inadecuado se refiere a acciones que no se ajustan a normas sociales, como invadir el espacio personal o hablar fuera de contexto. Puede ser un signo de deterioro funcional.",
    ["Psicoeducación social", "Terapia conductual", "Supervisión familiar", "Apoyo en ambientes estructurados"]
),
new DiagnosisInformation(
    "Hipoexpresividad emocional",
    "Psiquiatría",
    "La hipoexpresividad emocional implica una disminución notable en la expresión emocional, afectando la comunicación no verbal y la percepción social.",
    ["Terapia ocupacional", "Ejercicios de expresión emocional", "Terapia de interacción social", "Evaluación psicológica"]
),
new DiagnosisInformation(
    "Expresión facial reducida",
    "Psiquiatría",
    "La expresión facial reducida es un síntoma negativo de la esquizofrenia caracterizado por una disminución en los gestos faciales espontáneos y reacciones emocionales visibles.",
    ["Estimulación emocional", "Terapia de espejo", "Intervención psicosocial", "Terapia con feedback visual"]
),
new DiagnosisInformation(
    "Gesticulación reducida",
    "Psiquiatría",
    "La gesticulación reducida se refiere a la disminución en el uso de movimientos corporales para comunicarse, lo cual puede dificultar la interacción interpersonal.",
    ["Terapia de habilidades sociales", "Terapias expresivas (como teatro o arte)", "Estimulación motora", "Psicoeducación"]
),
new DiagnosisInformation(
    "Contacto visual bajo",
    "Psiquiatría",
    "El contacto visual bajo es una dificultad común en personas con esquizofrenia y puede reflejar aislamiento emocional, ansiedad social o síntomas negativos.",
    ["Entrenamiento en habilidades sociales", "Terapia cognitivo-conductual", "Apoyo en grupo", "Ejercicios de interacción visual"]
),
new DiagnosisInformation(
    "Afectividad inapropiada",
    "Psiquiatría",
    "La afectividad inapropiada ocurre cuando las respuestas emocionales no coinciden con la situación, como reír en momentos tristes o mostrar enojo sin motivo aparente.",
    ["Evaluación clínica especializada", "Reestructuración cognitiva", "Terapia emocional", "Medicamentos estabilizadores"]
),
new DiagnosisInformation(
    "Alogia",
    "Psiquiatría",
    "La alogia es un síntoma negativo que se manifiesta como un empobrecimiento general del lenguaje, dificultando la comunicación verbal.",
    ["Terapia del lenguaje", "Terapia ocupacional", "Intervención cognitiva", "Apoyo comunicacional estructurado"]
),
new DiagnosisInformation(
    "Alogia - pobreza del habla",
    "Psiquiatría",
    "La pobreza del habla es una forma específica de alogia donde la persona produce pocas palabras, generalmente en respuestas breves y poco elaboradas.",
    ["Estimulación verbal guiada", "Terapia del lenguaje", "Rutinas de conversación", "Apoyo terapéutico frecuente"]
),
new DiagnosisInformation(
    "Alogia - pobreza de contenido",
    "Psiquiatría",
    "La pobreza de contenido se presenta cuando el habla es abundante pero con poco contenido significativo, reflejando pensamiento vacío o desorganizado.",
    ["Terapia de comunicación estructurada", "Reforzamiento del pensamiento lógico", "Apoyo en expresión verbal", "Evaluación neuropsicológica"]
),
new DiagnosisInformation(
  "Alogia - bloqueos del pensamiento",
  "Psiquiatría",
  "Los bloqueos del pensamiento son interrupciones súbitas en el flujo de ideas, lo cual genera pausas prolongadas o silencios durante la conversación. Es común en la esquizofrenia como parte de los síntomas negativos.",
  ["Terapia del lenguaje", "Entrenamiento cognitivo", "Apoyo terapéutico en conversación", "Evaluación psiquiátrica"]
),
new DiagnosisInformation(
  "Abulia",
  "Psiquiatría",
  "La abulia es una disminución profunda de la motivación y la voluntad para iniciar actividades, incluso básicas. Está asociada a trastornos psicóticos como la esquizofrenia.",
  ["Rutina diaria estructurada", "Terapia conductual activadora", "Psicoeducación", "Tratamiento farmacológico supervisado"]
),
new DiagnosisInformation(
  "Abulia - higiene",
  "Psiquiatría",
  "La abulia relacionada con la higiene se refiere a la falta de motivación para realizar actividades básicas de autocuidado, como el aseo personal.",
  ["Supervisión familiar", "Terapia ocupacional", "Refuerzo positivo", "Monitoreo de rutinas de autocuidado"]
),
new DiagnosisInformation(
  "Abulia - trabajo o estudio",
  "Psiquiatría",
  "Este subtipo de abulia afecta directamente la capacidad para mantener responsabilidades académicas o laborales, debido a la apatía o desmotivación.",
  ["Apoyo psicosocial", "Terapia estructurada", "Metas progresivas", "Apoyo profesional vocacional"]
),
new DiagnosisInformation(
  "Anergia física",
  "Psiquiatría",
  "La anergia física se manifiesta como fatiga extrema o falta de energía, sin causa médica aparente. A menudo es un síntoma negativo de la esquizofrenia.",
  ["Evaluación médica y psiquiátrica", "Ejercicio físico gradual", "Intervención motivacional", "Apoyo terapéutico"]
),
new DiagnosisInformation(
  "Anhedonia",
  "Psiquiatría",
  "La anhedonia es la incapacidad para experimentar placer o interés en actividades que antes resultaban placenteras. Es un síntoma central de los trastornos psicóticos.",
  ["Terapia cognitivo-conductual", "Actividades estructuradas", "Entrenamiento en reconocimiento emocional", "Evaluación farmacológica"]
),
new DiagnosisInformation(
  "Anhedonia - sociabilidad",
  "Psiquiatría",
  "Esta forma de anhedonia implica falta de interés en establecer o mantener relaciones sociales, lo cual puede conducir al aislamiento progresivo.",
  ["Terapia grupal", "Entrenamiento en habilidades sociales", "Actividades supervisadas", "Apoyo familiar"]
),
new DiagnosisInformation(
  "Anhedonia - intereses recreativos",
  "Psiquiatría",
  "Se refiere a la pérdida de interés en actividades recreativas como pasatiempos, deportes o arte, reflejando una pérdida general del disfrute.",
  ["Terapia ocupacional", "Agenda de actividades", "Estimulación dirigida", "Motivación reforzada por logros"]
),
new DiagnosisInformation(
  "Anhedonia - intereses sexuales",
  "Psiquiatría",
  "Este tipo de anhedonia implica una disminución significativa o total del deseo o disfrute de la actividad sexual, afectando relaciones íntimas.",
  ["Terapia sexual con especialista", "Psicoeducación", "Terapia de pareja (si aplica)", "Revisión farmacológica"]
),
new DiagnosisInformation(
  "Anhedonia - relaciones con amigos",
  "Psiquiatría",
  "La anhedonia social también puede manifestarse como desinterés o incapacidad para mantener vínculos amistosos, reduciendo el soporte social.",
  ["Actividades de socialización guiada", "Intervención grupal", "Apoyo comunitario", "Terapia emocional"]
),
new DiagnosisInformation(
  "Anhedonia - relaciones con la familia",
  "Psiquiatría",
  "Esta forma de anhedonia se refiere a la pérdida de interés en mantener vínculos afectivos con miembros de la familia, generando aislamiento y deterioro de la red de apoyo.",
  ["Terapia familiar", "Reforzamiento de vínculos afectivos", "Psicoeducación en el entorno", "Actividades terapéuticas en grupo"]
),
new DiagnosisInformation(
  "Deterioro de la memoria",
  "Psiquiatría",
  "El deterioro de la memoria, especialmente la memoria de trabajo, es común en personas con esquizofrenia, afectando el aprendizaje y el funcionamiento cotidiano.",
  ["Ejercicios de memoria", "Estimulación cognitiva", "Apoyo con recordatorios visuales", "Rehabilitación neuropsicológica"]
),
new DiagnosisInformation(
  "Deterioro de la atención",
  "Psiquiatría",
  "Las dificultades atencionales afectan la capacidad para mantener el foco y procesar información, lo que complica tareas simples y conversaciones.",
  ["Terapia cognitiva", "Rutinas estructuradas", "Evitar multitareas", "Técnicas de mindfulness"]
),
new DiagnosisInformation(
  "Déficit en el procesamiento de la información",
  "Psiquiatría",
  "Este déficit implica lentitud para comprender, responder o interpretar estímulos, generando confusión e interferencia en la vida diaria.",
  ["Terapias de estimulación cognitiva", "Apoyo en la comunicación", "Actividades con instrucciones claras", "Adaptaciones ambientales"]
),
new DiagnosisInformation(
  "Tristeza",
  "Psiquiatría",
  "La tristeza persistente puede estar presente en esquizofrenia, sobre todo en fases depresivas o tras eventos estresantes, agravando otros síntomas.",
  ["Acompañamiento psicológico", "Terapia emocional", "Técnicas de afrontamiento", "Supervisión psiquiátrica"]
),
new DiagnosisInformation(
  "Sentimiento de culpa",
  "Psiquiatría",
  "El sentimiento de culpa puede surgir por percepciones distorsionadas de haber hecho daño a otros, incluso sin fundamento real, generando malestar intenso.",
  ["Reestructuración cognitiva", "Terapia individual", "Apoyo emocional", "Evaluación de pensamientos intrusivos"]
),
new DiagnosisInformation(
  "Cambios en el apetito",
  "Psiquiatría",
  "Las alteraciones en el apetito pueden ir desde la pérdida total del hambre hasta un aumento excesivo, a menudo relacionado con el estado emocional o efectos de medicamentos.",
  ["Evaluación nutricional", "Plan de alimentación supervisado", "Registro de hábitos", "Ajustes farmacológicos si es necesario"]
),
new DiagnosisInformation(
  "Sueño o fatiga",
  "Psiquiatría",
  "Las alteraciones del sueño, como insomnio o somnolencia excesiva, junto con fatiga constante, son frecuentes en esquizofrenia y pueden empeorar otros síntomas.",
  ["Higiene del sueño", "Rutinas de descanso", "Evaluación del tratamiento farmacológico", "Terapias de relajación"]
),
new DiagnosisInformation(
  "Disminución del libido",
  "Psiquiatría",
  "La disminución del deseo sexual es común en esquizofrenia, ya sea por síntomas negativos, efectos secundarios de medicamentos o factores emocionales.",
  ["Terapia sexual", "Apoyo emocional", "Evaluación de efectos secundarios", "Psicoeducación sobre sexualidad"]
),
new DiagnosisInformation(
  "Dificultad de concentración",
  "Psiquiatría",
  "Este síntoma se manifiesta como incapacidad para mantener la atención en tareas específicas, afectando el rendimiento cognitivo y funcional.",
  ["Ejercicios de enfoque atencional", "Ambientes sin distracciones", "Terapia cognitiva", "Técnicas de organización"]
),
new DiagnosisInformation(
  "Ideas suicidas",
  "Psiquiatría",
  "Las ideas suicidas pueden presentarse en personas con esquizofrenia, especialmente durante episodios depresivos, desesperanza o en respuesta a alucinaciones o delirios.",
  ["Evaluación de riesgo suicida", "Atención psiquiátrica inmediata", "Intervención en crisis", "Red de apoyo terapéutico"]
),
new DiagnosisInformation(
  "Preocupación",
  "Psiquiatría",
  "La preocupación constante o excesiva por situaciones irreales o hipotéticas es común en pacientes con esquizofrenia, particularmente en fases ansiosas.",
  ["Terapia cognitiva", "Técnicas de relajación", "Psicoeducación sobre ansiedad", "Supervisión farmacológica"]
),
new DiagnosisInformation(
  "Nerviosismo",
  "Psiquiatría",
  "El nerviosismo puede manifestarse como una respuesta de inquietud emocional persistente, a veces asociada a síntomas psicóticos o ansiedad comórbida.",
  ["Ejercicios de respiración", "Terapia emocional", "Técnicas de afrontamiento", "Intervención psicoeducativa"]
),
new DiagnosisInformation(
  "Pensamientos intrusivos",
  "Psiquiatría",
  "Los pensamientos intrusivos son ideas no deseadas, repetitivas y perturbadoras que generan ansiedad o angustia, frecuentes en trastornos psicóticos.",
  ["Terapia cognitivo-conductual", "Registro de pensamientos", "Desensibilización progresiva", "Evaluación psiquiátrica"]
),
new DiagnosisInformation(
  "Taquicardia",
  "Psiquiatría",
  "La taquicardia, o aumento anormal del ritmo cardíaco, puede ser resultado de episodios de ansiedad intensa o efectos secundarios de medicamentos.",
  ["Evaluación médica", "Técnicas de respiración", "Reducción del estrés", "Revisión de tratamiento farmacológico"]
),
new DiagnosisInformation(
  "Sudoración",
  "Psiquiatría",
  "La sudoración excesiva puede presentarse durante crisis de ansiedad o ataques de pánico, los cuales pueden coexistir con la esquizofrenia.",
  ["Relajación muscular progresiva", "Ambiente ventilado", "Evaluación por endocrinología si persiste", "Terapia psicológica"]
),
new DiagnosisInformation(
  "Temblores",
  "Psiquiatría",
  "Los temblores pueden deberse al uso de medicamentos antipsicóticos o a episodios de ansiedad. Deben diferenciarse de trastornos neurológicos.",
  ["Consulta médica", "Cambio o ajuste de medicación", "Ejercicios de relajación", "Seguimiento neurológico si es necesario"]
),
new DiagnosisInformation(
  "Disnea",
  "Psiquiatría",
  "La disnea, o dificultad para respirar, puede acompañar episodios de ansiedad aguda o ataques de pánico en pacientes con esquizofrenia.",
  ["Evaluación médica urgente", "Técnicas de respiración controlada", "Ambiente calmado", "Supervisión terapéutica"]
),
new DiagnosisInformation(
  "Hipervigilancia",
  "Psiquiatría",
  "La hipervigilancia es un estado de alerta exagerado, a menudo vinculado con paranoia o ansiedad, y puede presentarse en cuadros esquizofrénicos.",
  ["Terapia emocional", "Reducción de estímulos", "Psicoeducación sobre percepciones distorsionadas", "Tratamiento farmacológico"]
),
new DiagnosisInformation(
  "Irritabilidad",
  "Psiquiatría",
  "La irritabilidad puede ser un síntoma asociado al estrés, frustración o síntomas psicóticos activos, generando conflictos interpersonales.",
  ["Terapia conductual", "Control de impulsos", "Ambiente estructurado", "Supervisión de medicación"]
)]

  constructor() { }

    getDiagnosisInformation(diagnosisName: string) : DiagnosisInformation{
      var result = this.diagnosisList.find( el => el.name == diagnosisName.trimEnd());

      if(result != null)
        return result;
      else
        return new DiagnosisInformation("","","",[]);
    }

  }
