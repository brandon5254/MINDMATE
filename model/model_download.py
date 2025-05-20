## backend/app.py
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import f1_score, accuracy_score, confusion_matrix, precision_score, recall_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.impute import SimpleImputer
import matplotlib.pyplot as plt
import seaborn as sns
import json
import joblib

# read data set
df = pd.read_csv('./model/esquizofrenia_dataset5.csv')  

cols = df.columns
data = df[cols].values.flatten()
        
df_array = pd.Series(data)
df_array = df_array.str.strip()
df_array = df_array.values.reshape(df.shape)

df1 = pd.read_csv('./model/Symptom-severity-updated.csv')

symptoms = df1['Symptom'].unique()
merged = np.zeros((df.shape[0], len(symptoms)+1))
headers = np.insert(symptoms, 0, 'Disease')
merged = pd.DataFrame(merged, columns=headers)
merged.Disease = df.Disease

diseases = df['Disease'].unique()
for index, row in df.iterrows():
    dis_sym = pd.Series(row.values.flatten()[1:]).str.strip()
    dis_sym = dis_sym[~pd.isnull(dis_sym)]
    dis_sym = list(dict.fromkeys(dis_sym))
    for y in range(len(dis_sym)):
        merged.loc[index, dis_sym[y]] = 1
        
merged = merged.drop_duplicates()

# Preparamos X y y
data = merged.iloc[:,1:].values
labels = merged['Disease'].values

# Imputación: rellenar posibles NaNs con 0
imputer = SimpleImputer(strategy="constant", fill_value=0)
data = imputer.fit_transform(data)

print('Dataset Describe:\n', merged.describe(), '\n')
                                
x_train, x_test, y_train, y_test = train_test_split(data, labels, shuffle=True, train_size=0.55)
print('x_Train Shape:', x_train.shape, '\nx_test Shape:', x_test.shape, 
      '\ny_Train Shape', y_train.shape, '\ny_test Shape:', y_test.shape)

# Entrenar modelo
model = RandomForestClassifier()
model.fit(x_train, y_train)

# Predicción
preds = model.predict(x_test)

conf_mat = confusion_matrix(y_test, preds, labels=np.unique(merged['Disease'].values))
df_cm = pd.DataFrame(conf_mat, index=merged['Disease'].unique(), columns=merged['Disease'].unique())
plt.figure(figsize=(20,10))
sns.heatmap(df_cm, annot=True)

# Prueba de predicción con un ejemplo
test = merged.values[100, 1:].reshape(1, -1)
test = imputer.transform(test)  # Asegúrate de imputar también el test

preds2 = model.predict(test)
results = model.predict_proba(test)[0]

# Diccionario de resultados por clase
prob_per_class_dictionary = dict(zip(model.classes_, results))
results_ordered_by_probability = map(lambda x: x[0], sorted(zip(model.classes_, results), key=lambda x: x[1], reverse=True))

print('\nThe predicted result: ', preds2, '\n')

Dictionary = {}

print('Top 5 results:')
for i in range(5):  
    print(sorted(zip(model.classes_, results), key=lambda x: x[1], reverse=True)[i])
    Dictionary[i+1] = sorted(zip(model.classes_, results), key=lambda x: x[1], reverse=True)[i]

json_string = json.dumps(Dictionary)

# Al final del script, justo antes o después de joblib.dump
with open("./model/symptom_columns.json", "w", encoding="utf-8") as f:
    json.dump(list(merged.columns[1:]), f, ensure_ascii=False, indent=2)

joblib.dump(model, "./random_forest.joblib")
