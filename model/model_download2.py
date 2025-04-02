import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import f1_score, accuracy_score, confusion_matrix, precision_score, recall_score
from sklearn.ensemble import RandomForestClassifier
import matplotlib.pyplot as plt
import seaborn as sns
import json
import joblib

# Cargar dataset
df = pd.read_csv('./model/datasets.csv')  

# Limpiar espacios en blanco en los síntomas
cols = df.columns
data = df[cols].values.flatten()
df_array = pd.Series(data).str.strip().values.reshape(df.shape)

# Cargar severidad de síntomas
df1 = pd.read_csv('./model/symptom-severity-updated.csv')
symptoms = df1['Symptom'].unique()

# Crear DataFrame binario con síntomas como columnas
merged = pd.DataFrame(np.zeros((df.shape[0], len(symptoms)+1)), columns=np.insert(symptoms, 0, 'Disease'))
merged['Disease'] = df['Disease']

# Llenar valores de síntomas con 1 si están presentes
for index, row in df.iterrows():
    dis_sym = pd.Series(row.values.flatten()[1:]).str.strip().dropna().unique()
    for symptom in dis_sym:
        merged.loc[index, symptom] = 1

# Eliminar duplicados
merged = merged.drop_duplicates()

# Verificar valores NaN en merged
print("\nValores NaN antes de limpieza:")
print(merged.isna().sum().sum())

# Reemplazar NaN con 0
merged.fillna(0, inplace=True)

# Verificar que no haya NaN después de la limpieza
print("\nValores NaN después de limpieza:")
print(merged.isna().sum().sum())

# Separar datos y etiquetas
data = merged.iloc[:, 1:].values
labels = merged['Disease'].values

# Descripción del dataset
print('Dataset Describe:\n', merged.describe(), '\n')

# División en train/test
x_train, x_test, y_train, y_test = train_test_split(data, labels, shuffle=True, train_size=0.55)
print('x_train Shape:', x_train.shape, '\nx_test Shape:', x_test.shape, 
      '\ny_train Shape:', y_train.shape, '\ny_test Shape:', y_test.shape)

# Verificar NaN en x_train y x_test antes de entrenar
print("\nValores NaN en x_train:", np.isnan(x_train).sum())
print("Valores NaN en x_test:", np.isnan(x_test).sum())

# Si hay NaN, reemplazar por 0
x_train = np.nan_to_num(x_train)
x_test = np.nan_to_num(x_test)

# Modelo Random Forest
model = RandomForestClassifier()
model.fit(x_train, y_train)

# Predicción
preds = model.predict(x_test)

# Matriz de confusión
conf_mat = confusion_matrix(y_test, preds, labels=np.unique(merged['Disease'].values))
df_cm = pd.DataFrame(conf_mat, index=merged['Disease'].unique(), columns=merged['Disease'].unique())
plt.figure(figsize=(20,10))
sns.heatmap(df_cm, annot=True)

# Guardar modelo entrenado
joblib.dump(model, "./modell.joblib")

# Predicción de prueba
test = merged.values[100, 1:].reshape(1, -1)
preds2 = model.predict(test)
results = model.predict_proba(test)[0]

# Diccionario de probabilidades
prob_per_class_dictionary = dict(zip(model.classes_, results))
results_ordered_by_probability = sorted(zip(model.classes_, results), key=lambda x: x[1], reverse=True)

# Imprimir top 5 predicciones
print('\nThe predicted result: ', preds2, '\n')
Dictionary = {i+1: results_ordered_by_probability[i] for i in range(5)}
print('Top 5 results:', Dictionary)

# Guardar resultados en JSON
json_string = json.dumps(Dictionary)
