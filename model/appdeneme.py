# Importamos las librerías necesarias
from flask import Flask, jsonify, request  # Para crear la API con Flask
import joblib  # Para guardar y cargar el modelo
import pandas as pd  # Para manipulación de datos
import numpy as np  # Para operaciones numéricas
from sklearn.model_selection import train_test_split  # Para dividir los datos en entrenamiento y prueba
from sklearn.metrics import f1_score, accuracy_score, confusion_matrix, precision_score, recall_score  # Para evaluar el modelo
from sklearn.ensemble import RandomForestClassifier  # Modelo de clasificación
import matplotlib.pyplot as plt  # Para visualización de datos
import seaborn as sns  # Para generar la matriz de confusión
import json  # Para manejar respuestas en formato JSON
from flask_cors import CORS  # Para permitir peticiones desde otros dominios

# Inicializamos la aplicación Flask
app = Flask(__name__)
CORS(app)  # Habilitamos CORS para permitir peticiones desde el frontend

# Definimos un endpoint para entrenar el modelo
@app.route('/api/train', methods=['GET', 'POST'])
def train():
    # Obtenemos los parámetros desde la petición (si los hay)
    parameters = request.get_json()

    # Cargamos el dataset principal con enfermedades y síntomas
    df = pd.read_csv('./model/esquizofrenia_dataset8.csv')

    # Limpiamos los datos eliminando espacios en blanco
    cols = df.columns
    data = df[cols].values.flatten()
    df_array = pd.Series(data)
    df_array = df_array.str.strip()
    df_array = df_array.values.reshape(df.shape)

    # Cargamos el dataset de severidad de síntomas
    df1 = pd.read_csv('./model/Symptom-severity-updated.csv')
    symptoms = df1['Symptom'].unique()  # Extraemos la lista de síntomas

    # Creamos un DataFrame con columnas para cada síntoma y la enfermedad
    merged = np.zeros((df.shape[0], len(symptoms) + 1))
    headers = np.insert(symptoms, 0, 'Disease')  # Insertamos 'Disease' como primera columna
    merged = pd.DataFrame(merged, columns=headers)
    merged.Disease = df.Disease  # Asignamos las enfermedades

    # Procesamos los datos para marcar qué síntomas están presentes en cada enfermedad
    diseases = df['Disease'].unique()
    for index, row in df.iterrows():
        dis_sym = pd.Series(row.values.flatten()[1:]).str.strip()
        dis_sym = dis_sym[~pd.isnull(dis_sym)]
        dis_sym = list(dict.fromkeys(dis_sym))  # Eliminamos duplicados
        for y in range(len(dis_sym)):
            merged.loc[index, dis_sym[y]] = 1  # Marcamos la presencia del síntoma

    # Eliminamos filas duplicadas
    merged = merged.drop_duplicates()

    # Separamos los datos en variables de entrada (X) y variable objetivo (Y)
    data = merged.iloc[:, 1:].values  # Todas las columnas menos 'Disease'
    labels = merged['Disease'].values  # La columna 'Disease' será la variable objetivo

    # Mostramos un resumen del dataset procesado
    print('Dataset Describe:\n', merged.describe(), '\n')

    # Dividimos los datos en entrenamiento y prueba (55% - 45%)
    x_train, x_test, y_train, y_test = train_test_split(data, labels, shuffle=True, train_size=0.55)

    # Imprimimos la forma de los datos
    print('x_Train Shape:', x_train.shape, '\nx_test Shape:', x_test.shape,
          '\ny_Train Shape', y_train.shape, '\ny_test Shape:', y_test.shape)

    # Inicializamos y entrenamos el modelo RandomForestClassifier
    model = RandomForestClassifier()
    model.fit(x_train, y_train)

    # Realizamos predicciones en los datos de prueba
    preds = model.predict(x_test)

    # Calculamos la matriz de confusión
    conf_mat = confusion_matrix(y_test, preds, labels=np.unique(merged['Disease'].values))
    df_cm = pd.DataFrame(conf_mat, index=merged['Disease'].unique(), columns=merged['Disease'].unique())
    plt.figure(figsize=(20, 10))
    sns.heatmap(df_cm, annot=True)  # Visualizamos la matriz de confusión

    # Evaluamos el modelo con métricas de rendimiento
    print('\nF1-score% =', f1_score(y_test, preds, average='macro', zero_division=0) * 100)
    print('Precision% =', precision_score(y_test, preds, average='macro', zero_division=0) * 100)
    print('Recall% =', recall_score(y_test, preds, average='macro', zero_division=0) * 100)
    print('Accuracy% =', accuracy_score(y_test, preds) * 100)

    # Probamos el modelo con un ejemplo del dataset
    test = merged.values[100, 1:].reshape(1, -1)
    preds2 = model.predict(test)

    # Obtenemos las probabilidades de predicción para cada enfermedad
    results = model.predict_proba(test)[0]

    # Creamos un diccionario con las probabilidades de cada clase
    prob_per_class_dictionary = dict(zip(model.classes_, results))

    # Ordenamos las enfermedades por probabilidad de predicción
    results_ordered_by_probability = sorted(zip(model.classes_, results), key=lambda x: x[1], reverse=True)

    print('\nThe predicted result: ', preds2, '\n')

    # Guardamos las 5 predicciones más probables en un diccionario
    Dictionary = {}
    print('Top 5 results:')
    for i in range(5):
        print(results_ordered_by_probability[i])
        Dictionary[i + 1] = results_ordered_by_probability[i]

    # Convertimos el diccionario a formato JSON
    json_string = json.dumps(Dictionary)


    # Guardamos el modelo entrenado en un archivo para su uso posterior
    joblib.dump(model, '../model/model.pkl')

    # Devolvemos los resultados en formato JSON
    return json.dumps(Dictionary, indent=4)


# Ejecutamos la aplicación Flask en el puerto 5001
if __name__ == '__main__':
    app.run(port=5001)
