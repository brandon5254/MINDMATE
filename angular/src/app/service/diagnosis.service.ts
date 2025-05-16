import { Injectable } from '@angular/core';
import { DiagnosisInformation } from '../models/diagnosisInformation';

@Injectable({
  providedIn: 'root'
})
export class DiagnosisService {

  diagnosisList = [
     // ESQUIZOFRENIA PARANOIDE
     new DiagnosisInformation(
      "Esquizofrenia_paranoide",
      "Psiquiatría",
      "Las alucinaciones son percepciones sensoriales falsas, como escuchar voces o ver cosas que no están presentes. Son un síntoma común de la esquizofrenia y pueden afectar significativamente el funcionamiento diario.",
      ["Buscar evaluación psiquiátrica", "Evitar situaciones estresantes", "Considerar tratamiento antipsicótico", "Participar en terapia"]
    ),
    new DiagnosisInformation(
<<<<<<< Updated upstream
      "Esquizofrenia_paranoide",
      "Psiquiatría",
      "Las ideas delirantes implican mantener creencias falsas con firmeza a pesar de la evidencia clara en contra, como pensar que otros conspiran en su contra.",
      ["Consultar a un psiquiatra", "Terapia cognitivo-conductual", "Cumplimiento del tratamiento", "Involucrar apoyo familiar"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_paranoide",
      "Psiquiatría",
      "La suspicacia o desconfianza extrema hacia los demás puede llevar a dificultades en las relaciones interpersonales y aislamiento.",
      ["Evaluación psicológica", "Psicoeducación", "Fomentar relaciones de confianza", "Terapia de apoyo"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_paranoide",
      "Psiquiatría",
      "La creencia de que otros controlan los pensamientos propios refleja un trastorno grave de la percepción del yo, característico de la esquizofrenia paranoide.",
      ["Evaluación psiquiátrica", "Terapia cognitivo-conductual", "Tratamiento antipsicótico", "Seguimiento continuo"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_paranoide",
      "Psiquiatría",
      "El eco del pensamiento implica que el individuo percibe sus pensamientos como repetidos o escuchados por otros, una alteración propia del contenido delirante.",
      ["Tratamiento antipsicótico", "Monitoreo clínico", "Terapia de apoyo", "Evitar estímulos estresantes"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_paranoide",
      "Psiquiatría",
      "La hipervigilancia e irritabilidad son comunes en fases activas de la esquizofrenia paranoide, con estados de alerta excesiva y respuestas agresivas.",
      ["Terapia de regulación emocional", "Reducción de estímulos estresantes", "Evaluación farmacológica", "Apoyo psicosocial"]
    ),

    // ESQUIZOFRENIA DESORGANIZADA
    new DiagnosisInformation(
      "Esquizofrenia_desorganizada",
      "Psiquiatría",
      "El lenguaje desorganizado se manifiesta con dificultad para articular pensamientos de manera coherente, lo que puede dificultar la comunicación.",
      ["Terapia del habla", "Intervención cognitiva", "Evitar situaciones de alta demanda comunicativa", "Apoyo terapéutico"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_desorganizada",
      "Psiquiatría",
      "El comportamiento desorganizado incluye acciones inusuales o inapropiadas para la situación, como desvestirse en público o reacciones emocionales desproporcionadas.",
      ["Supervisión constante", "Ambiente estructurado", "Manejo farmacológico", "Terapia ocupacional"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_desorganizada",
      "Psiquiatría",
      "La afectividad inapropiada se refiere a respuestas emocionales que no concuerdan con el contexto, como reír durante una situación triste.",
      ["Evaluación psiquiátrica", "Entrenamiento en reconocimiento emocional", "Terapia emocional", "Seguimiento clínico"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_desorganizada",
      "Psiquiatría",
      "La pobreza en el contenido del lenguaje, típica de la alogia, refleja una grave alteración en la organización del pensamiento.",
      ["Rehabilitación del lenguaje", "Terapia de estimulación cognitiva", "Apoyo en la comunicación funcional", "Intervención psicosocial"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_desorganizada",
      "Psiquiatría",
      "Las obsesiones y pensamientos intrusivos pueden formar parte de una desorganización cognitiva donde el contenido mental se vuelve repetitivo e invasivo.",
      ["Terapia cognitivo-conductual", "Reducción de ansiedad", "Psicoeducación", "Tratamiento farmacológico"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_desorganizada",
      "Psiquiatría",
      "El comportamiento social inadecuado se manifiesta como falta de criterio en interacciones, característico del subtipo desorganizado.",
      ["Entrenamiento en habilidades sociales", "Supervisión psicosocial", "Terapia conductual", "Apoyo familiar"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_desorganizada",
      "Psiquiatría",
      "Los bloqueos del pensamiento y la pobreza en el contenido verbal, conocidos como alogia, son signos de desorganización mental.",
      ["Terapia del lenguaje", "Estimulación cognitiva", "Terapia cognitivo-conductual", "Apoyo estructurado"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_desorganizada",
      "Psiquiatría",
      "El deterioro en la memoria, la atención y el procesamiento de información afectan las funciones cognitivas superiores.",
      ["Rehabilitación neurocognitiva", "Ambientes estructurados", "Entrenamiento de funciones ejecutivas", "Evaluación neuropsicológica"]
    ),

    // ESQUIZOFRENIA CATATÓNICA
    new DiagnosisInformation(
      "Esquizofrenia_catatónica",
      "Psiquiatría",
      "La catalepsia es un estado en el que la persona mantiene posturas rígidas durante períodos prolongados sin reaccionar a estímulos externos.",
      ["Intervención médica inmediata", "Manejo farmacológico", "Hospitalización si es necesario", "Supervisión continua"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_catatónica",
      "Psiquiatría",
      "La negativismo se refiere a la resistencia a realizar movimientos o acciones solicitadas, incluso cuando no hay razón aparente para negarse.",
      ["Psicoeducación", "Terapia conductual", "Manejo con benzodiacepinas", "Apoyo en un entorno seguro"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_catatónica",
      "Psiquiatría",
      "El mutismo implica una ausencia total del habla, aunque la persona sea capaz de hablar físicamente.",
      ["Evaluación neurológica y psiquiátrica", "Terapia del lenguaje", "Terapia de estimulación", "Farmacoterapia"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_catatónica",
      "Psiquiatría",
      "La hipoexpresividad emocional, la expresión facial reducida y el contacto visual bajo son síntomas negativos comunes en la esquizofrenia catatónica.",
      ["Terapia ocupacional", "Rehabilitación funcional", "Estimulación emocional", "Seguimiento continuo"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_catatónica",
      "Psiquiatría",
      "La falta de iniciativa para la higiene personal y la participación en actividades básicas indica abulia, frecuente en la esquizofrenia catatónica.",
      ["Rutinas estructuradas", "Terapia ocupacional", "Supervisión diaria", "Apoyo familiar"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_catatónica",
      "Psiquiatría",
      "La pérdida de interés por las relaciones sociales, el ocio o la sexualidad se considera una forma de anhedonia profunda.",
      ["Terapia de activación conductual", "Reforzamiento positivo", "Intervención psicosocial", "Grupos motivacionales"]
    ),

    // ESQUIZOFRENIA INDEFERENCIADA
    new DiagnosisInformation(
      "Esquizofrenia_indiferenciada",
      "Psiquiatría",
      "Los síntomas mixtos o variables se presentan cuando una persona muestra características de diferentes tipos de esquizofrenia sin encajar claramente en uno solo.",
      ["Monitoreo clínico regular", "Adaptación del tratamiento según evolución", "Terapias combinadas", "Apoyo psicosocial"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_indiferenciada",
      "Psiquiatría",
      "La confusión en el diagnóstico se da cuando hay síntomas ambiguos o inconsistentes que dificultan clasificar claramente el tipo de esquizofrenia.",
      ["Evaluación multidisciplinaria", "Seguimiento continuo", "Tratamiento flexible", "Educación familiar"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_indiferenciada",
      "Psiquiatría",
      "La variabilidad de síntomas hace referencia a la aparición de diferentes síntomas positivos y negativos sin una predominancia clara.",
      ["Análisis de historial clínico", "Ajustes terapéuticos periódicos", "Terapia integral", "Red de apoyo"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_indiferenciada",
      "Psiquiatría",
      "La dificultad para concentrarse afecta múltiples áreas funcionales y es uno de los síntomas cognitivos más incapacitantes.",
      ["Ambiente estructurado", "Ejercicios de atención", "Terapia cognitiva", "Adaptaciones escolares o laborales"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_indiferenciada",
      "Psiquiatría",
      "Los síntomas afectivos como tristeza, culpa, alteraciones del sueño, apetito y fatiga, pueden coexistir en este subtipo.",
      ["Evaluación para depresión comórbida", "Terapia de apoyo", "Psicoterapia", "Monitoreo clínico"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_indiferenciada",
      "Psiquiatría",
      "La preocupación excesiva, el nerviosismo y los pensamientos intrusivos se asocian con ansiedad comórbida frecuente.",
      ["Terapia cognitivo-conductual", "Reducción del estrés", "Mindfulness", "Tratamiento ansiolítico"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_indiferenciada",
      "Psiquiatría",
      "Síntomas físicos como taquicardia, sudoración, temblores o disnea pueden indicar ansiedad o episodios de pánico.",
      ["Técnicas de relajación", "Ejercicios respiratorios", "Apoyo psicoterapéutico", "Atención médica general"]
    ),

    // ESQUIZOFRENIA RESIDUAL
    new DiagnosisInformation(
      "Esquizofrenia_residual",
      "Psiquiatría",
      "La disminución de síntomas activos significa que los síntomas psicóticos como alucinaciones o delirios han disminuido, pero aún persisten algunos efectos residuales.",
      ["Rehabilitación psicosocial", "Terapias de mantenimiento", "Evitar recaídas", "Terapia ocupacional"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_residual",
      "Psiquiatría",
      "La presencia de síntomas negativos incluye afecto plano, alogia y anhedonia, que persisten incluso cuando los síntomas positivos han desaparecido.",
      ["Intervenciones psicosociales", "Estimulación cognitiva", "Tratamientos antipsicóticos de mantenimiento", "Grupos de apoyo"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_residual",
      "Psiquiatría",
      "Las ideas suicidas representan un riesgo elevado en pacientes con síntomas residuales de tipo depresivo o crónico.",
      ["Atención urgente", "Supervisión familiar o institucional", "Intervención intensiva", "Evaluación de riesgo"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia_residual",
      "Psiquiatría",
      "El deterioro funcional se manifiesta como dificultad para llevar una vida autónoma, mantener relaciones o trabajar, a pesar de la ausencia de síntomas psicóticos agudos.",
      ["Terapia ocupacional", "Planificación de vida asistida", "Apoyo familiar continuo", "Rehabilitación vocacional"])
  ]
=======
      "Esquizofrenia paranoide",
      "Psiquiatría",
      "Caracterizada por delirios paranoides o alucinaciones auditivas. Los pacientes pueden presentar ideas de persecución o grandeza.",
      ["Consultar con psiquiatra", "Seguir tratamiento farmacológico", "Evitar situaciones de estrés", "Asistir a controles regulares"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia desorganizada",
      "Psiquiatría",
      "Forma de esquizofrenia donde predominan el lenguaje y comportamiento desorganizado, y afecto inapropiado.",
      ["Apoyo terapéutico", "Supervisión familiar constante", "Cumplimiento de medicación", "Evaluación neurológica frecuente"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia catatónica",
      "Psiquiatría",
      "Tipo raro que involucra alteraciones motoras extremas: inmovilidad, rigidez o movimientos repetitivos sin propósito.",
      ["Hospitalización si es necesario", "Monitoreo de signos vitales", "Terapia farmacológica intensiva", "Terapia física supervisada"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia indiferenciada",
      "Psiquiatría",
      "Diagnóstico utilizado cuando los síntomas no encajan claramente en otros subtipos específicos.",
      ["Evaluación psiquiátrica completa", "Tratamiento multidisciplinario", "Acompañamiento psicológico", "Monitoreo frecuente"]
    ),
    new DiagnosisInformation(
      "Esquizofrenia residual",
      "Psiquiatría",
      "Presenta síntomas negativos persistentes con escasa actividad psicótica.",
      ["Rehabilitación psicosocial", "Terapia ocupacional", "Seguimiento ambulatorio", "Apoyo familiar"]
    ),
    new DiagnosisInformation(
      "Trastorno esquizoafectivo",
      "Psiquiatría",
      "Condición que combina síntomas de esquizofrenia y trastornos del estado de ánimo como depresión o manía.",
      ["Evaluación psiquiátrica integral", "Tratamiento combinado (antipsicóticos y antidepresivos)", "Psicoterapia cognitiva", "Evitar consumo de sustancias"]
    ),
    new DiagnosisInformation(
      "Trastorno psicótico breve",
      "Psiquiatría",
      "Episodio de síntomas psicóticos que dura menos de un mes y se resuelve completamente.",
      ["Reposo supervisado", "Apoyo emocional", "Evitar situaciones estresantes", "Terapia de seguimiento"]
    ),
    new DiagnosisInformation(
      "Trastorno delirante",
      "Psiquiatría",
      "Caracterizado por la presencia de una o más creencias falsas (delirios) persistentes durante al menos un mes.",
      ["Consulta especializada", "Terapia cognitivo-conductual", "Farmacoterapia antipsicótica", "Psicoeducación familiar"]
    ),
    new DiagnosisInformation(
      "Trastorno esquizofreniforme",
      "Psiquiatría",
      "Presenta síntomas similares a la esquizofrenia, pero de duración menor a seis meses.",
      ["Iniciar tratamiento precoz", "Seguimiento mensual", "Evaluación del estado mental", "Educación sobre síntomas"]
    ),
    new DiagnosisInformation(
      "Trastorno psicótico compartido",
      "Psiquiatría",
      "Trastorno en el que una persona desarrolla un delirio inducido por otra con trastorno psicótico.",
      ["Separar a las personas involucradas", "Intervención psiquiátrica", "Terapia familiar", "Supervisión constante"]
    )
  ];
>>>>>>> Stashed changes

  constructor() { }

  getDiagnosisInformation(diagnosisName: string): DiagnosisInformation {
    const result = this.diagnosisList.find(el => el.name === diagnosisName.trimEnd());
    return result ?? new DiagnosisInformation("", "", "", []);
  }

}
