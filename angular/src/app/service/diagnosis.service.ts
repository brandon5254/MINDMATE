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
      "El deterioro funcional se manifiesta como dificultad para llevar una vida autónoma, mantener relaciones o trabajar, a pesar de la ausencia de síntomas psicóticos agudos.",
      ["Terapia ocupacional", "Planificación de vida asistida", "Apoyo familiar continuo", "Rehabilitación vocacional"])
  ]

  constructor() { }

    getDiagnosisInformation(diagnosisName: string) : DiagnosisInformation{
      var result = this.diagnosisList.find( el => el.name == diagnosisName.trimEnd());

      if(result != null)
        return result;
      else
        return new DiagnosisInformation("","","",[]);
    }

  }
