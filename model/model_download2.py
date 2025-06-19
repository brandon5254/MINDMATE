import joblib
import json

# Cargar el modelo previamente entrenado
model = joblib.load("./model/random_forest.joblib")

# Cargar los síntomas que el modelo 
with open("./model/symptom_columns.json", "r", encoding="utf-8") as f:
    expected_symptoms = json.load(f)

# Síntomas seleccionados por el usuario opcional se puede modificar esta lista
user_symptoms = [
    "alucinaciones",
    "catatonía",
    "paranoia intensa",
    "alogia",
    "hipervigilancia"
]

# Crear vector binario de entrada
test_vector = [1.0 if symptom in user_symptoms else 0.0 for symptom in expected_symptoms]
test_vector = [test_vector]  # Convertir a matriz 1x100

# Predecir las probabilidades
probabilities = model.predict_proba(test_vector)[0]

# Crear diccionario de probabilidades
prob_per_class_dictionary = dict(zip(model.classes_, probabilities))

# Ordenar de mayor a menor
sorted_results = sorted(prob_per_class_dictionary.items(), key=lambda x: x[1], reverse=True)

# Imprimir top 5 resultados
print("\nTop 5 enfermedades predichas:")
for i, (enfermedad, prob) in enumerate(sorted_results[:5], 1):
    print(f"{i}. {enfermedad}: {prob:.4f}")
