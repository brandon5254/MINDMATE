from flask import Flask, request, jsonify
from flask_cors import CORS

import model
import numpy as np

app = Flask(__name__)
CORS(app)


@app.route('/api/getResult',methods = ['POST', 'GET'])
def getResult():
    if request.method == 'POST':

        req = request.get_json()
        result = model.getResult(list(req.values()))
        return result

    elif request.method == 'GET':

        result = model.getResultAmaGet()
        return result
    
    else:
        return ""
@app.route('/getResult', methods=['POST'])
def get_result():
    data = request.get_json()
    print("Datos recibidos:", data)  # 👈 esto muestra en consola lo que recibe el backend

    # 👇 Asegúrate de usar solo los primeros 100 valores
    input_data = np.array(data['test'][:100]).reshape(1, -1)
    prediction_proba = model.predict_proba(input_data)
    top5 = np.argsort(prediction_proba[0])[::-1][:5]

    results = []
    for i in top5:
        results.append({
            'label': model.classes_[i],
            'value': round(prediction_proba[0][i] * 100, 2)
        })

    print("Resultados:", results)  # 
    return jsonify(results)


if __name__ == '__main__':
    app.run()
