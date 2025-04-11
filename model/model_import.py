import joblib  # Importa la librería joblib, que se usa para cargar y guardar modelos de machine learning

# Carga el modelo previamente entrenado y guardado en el archivo 'model.joblib'
model = joblib.load("./model/random_forest.joblib")

# Define una muestra de prueba que representa la presencia o ausencia de síntomas
# Cada valor en la lista es un 0.0 (ausencia) o 1.0 (presencia) de un síntoma en particular
# Define una muestra de prueba con exactamente 100 características (0.0 o 1.0)
test = [[0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0,
         0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
         0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0,
         0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0,
         0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
         0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
         0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
         0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
         0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
         0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]]


# Obtiene las probabilidades de predicción para cada posible enfermedad
results = model.predict_proba(test)[0]

# Crea un diccionario que asigna cada enfermedad a su probabilidad respectiva
prob_per_class_dictionary = dict(zip(model.classes_, results))

# Ordena las enfermedades de mayor a menor probabilidad
# Se obtiene una lista de nombres de enfermedades ordenadas según su probabilidad
results_ordered_by_probability = map(lambda x: x[0], sorted(zip(model.classes_, results), key=lambda x: x[1], reverse=True))

# Crea un diccionario donde se almacenarán las 5 enfermedades más probables
Dictionary = {}

# Selecciona las 5 enfermedades con mayor probabilidad y las almacena en el diccionario con su posición
for i in range(5):  
    Dictionary[i+1] = sorted(zip(model.classes_, results), key=lambda x: x[1], reverse=True)[i]

# Imprime el diccionario con las 5 enfermedades más probables y sus probabilidades asociadas
print(Dictionary)
