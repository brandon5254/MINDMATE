import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import f1_score, accuracy_score, confusion_matrix, precision_score, recall_score
from sklearn.ensemble import RandomForestClassifier
import matplotlib.pyplot as plt
import seaborn as sns
import json
import joblib
from sklearn.impute import SimpleImputer
import os

# Leer los datasets
df = pd.read_csv('./model/dataset5.csv')  
df1 = pd.read_csv('./model/Symptom-severity-updated.csv')

# Limpiar valores
cols = df.columns
data = df[cols].values.flatten()
df_array = pd.Series(data).str.strip().values.reshape(df.shape)

# Unir síntomas
symptoms = df1['Symptom'].unique()
merged = pd.DataFrame(0, index=range(df.shape[0]), columns=np.insert(symptoms, 0, 'Disease'))
merged['Disease'] = df['Disease']

# Codificar los síntomas como binarios
for index, row in df.iterrows():
    dis_sym = pd.Series(row.values.flatten()[1:]).str.strip()
    dis_sym = dis_sym[~pd.isnull(dis_sym)].unique()
    for symptom in dis_sym:
        if symptom in merged.columns:
            merged.loc[index, symptom] = 1

merged = merged.drop_duplicates()

# Separar datos y etiquetas
X = merged.iloc[:, 1:].values
y = merged['Disease'].values

# Guardar los nombres de las características
feature_names = merged.columns[1:]
joblib.dump(feature_names, './model/features.joblib')

# Imputar valores faltantes
imputer = SimpleImputer(strategy="mean")
X = imputer.fit_transform(X)
joblib.dump(imputer, './model/imputer.joblib')

# División de datos
x_train, x_test, y_train, y_test = train_test_split(X, y, train_size=0.55, shuffle=True)

# Entrenar modelo
model = RandomForestClassifier()
model.fit(x_train, y_train)

# Guardar modelo
joblib.dump(model, "./model/random_forest.joblib")

# Evaluación
preds = model.predict(x_test)
conf_mat = confusion_matrix(y_test, preds, labels=np.unique(y))
df_cm = pd.DataFrame(conf_mat, index=np.unique(y), columns=np.unique(y))
plt.figure(figsize=(20, 10))
sns.heatmap(df_cm, annot=True)
plt.title("Matriz de Confusión")
plt.show()

# Ejemplo de predicción
test = merged.iloc[100, 1:].values.reshape(1, -1)
test = imputer.transform(test)
results = model.predict_proba(test)[0]

# Mostrar top 5 resultados
Dictionary = {}
for i in range(5):
    Dictionary[i+1] = sorted(zip(model.classes_, results), key=lambda x: x[1], reverse=True)[i]

json_string = json.dumps(Dictionary)
print("Top 5 results:\n", json_string)
