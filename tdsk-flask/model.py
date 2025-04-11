import json
import joblib
import numpy as np

# Cargar modelo y columnas esperadas
model = joblib.load("../model/random_forest.joblib")
with open("../model/symptom_columns.json", "r", encoding="utf-8") as f:
    expected_columns = json.load(f)

def getResult(symptoms):
    # 🔍 Si symptoms viene anidado, lo desanidamos
    if isinstance(symptoms[0], list):
        print("Flattening symptoms...")
        symptoms = symptoms[0]

    # Asegura que symptoms tenga exactamente la longitud esperada
    expected_length = len(expected_columns)
    if len(symptoms) > expected_length:
        symptoms = symptoms[:expected_length]
    elif len(symptoms) < expected_length:
        symptoms += [0.0] * (expected_length - len(symptoms))

    # Asegura que todos los elementos sean flotantes
    symptoms = [float(x) for x in symptoms]

    # Convertir a array y asegurar la forma correcta
    test_input = np.array(symptoms).reshape(1, -1)

    print("INPUT RECIBIDO:", test_input)
    print("SHAPE:", test_input.shape)

    # Realiza la predicción
    results = model.predict_proba(test_input)[0]

    # Resultados ordenados
    sorted_results = sorted(zip(model.classes_, results), key=lambda x: x[1], reverse=True)
    Dictionary = {i + 1: sorted_results[i] for i in range(min(5, len(sorted_results)))}

    return Dictionary
