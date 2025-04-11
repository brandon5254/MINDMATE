import pandas as pd
import random

# Definir los 52 síntomas posibles
sintomas = [
    'alucinaciones', 'ideas_delirantes', 'falta_de_motivacion', 'anhedonia', 'aislamiento_social',
    'perdida_memoria', 'deficit_atencion', 'procesamiento_info', 'depresion', 'suicidio', 'ansiedad',
    'disfuncion_psicosocial', 'problemas_interpersonales', 'bajo_rendimiento_laboral', 'bajo_rendimiento_escolar',
    'dificultad_autocuidado', 'falta_independencia', 'apatía', 'comportamiento_desorganizado',
    'pensamiento_desorganizado', 'incoherencia', 'catatonia', 'mutismo', 'risa_inapropiada',
    'hostilidad', 'sintomas_somáticos', 'cambios_sueño', 'hipersensibilidad', 'reacciones_paranoides',
    'hipoactividad', 'hiperactividad', 'rituales_compulsivos', 'conducta_bizarra', 'dificultad_comunicacion',
    'sintomas_negativos_globales', 'insomnio', 'problemas_memoria_trabajo', 'incapacidad_planeacion',
    'dificultad_tomar_decisiones', 'rigidez_pensamiento', 'disociacion_afectiva', 'falta_iniciativa',
    'disminucion_expresion_emocional', 'pensamientos_intrusivos', 'agresividad', 'pérdida_empleo',
    'abandono_escolar', 'dificultades_economicas', 'problemas_legales', 'trastornos_comorbilidad',
    'problemas_conducta'
]

# Tipos de esquizofrenia
tipos = ['Esquizofrenia_paranoide', 'Esquizofrenia_desorganizada', 'Esquizofrenia_catatónica', 'Esquizofrenia_indiferenciada', 'Esquizofrenia_residual']

# Función para generar una muestra con síntomas aleatorios
def generar_muestra(sintomas, min_sintomas=10, max_sintomas=18):
    seleccionados = random.sample(sintomas, random.randint(min_sintomas, max_sintomas))
    fila = [s if s in seleccionados else '' for s in sintomas]
    return fila

# Crear el dataset
data = []
for tipo in tipos:
    for _ in range(10):  # 10 muestras por tipo
        fila = generar_muestra(sintomas)
        data.append([tipo] + fila)

# Crear DataFrame y guardar como CSV
df = pd.DataFrame(data, columns=['Disease'] + sintomas)
df.to_csv('esquizofrenia_dataset.csv', index=False)

print("✅ Dataset generado exitosamente como 'esquizofrenia_dataset.csv'")
