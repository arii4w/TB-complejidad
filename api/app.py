from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

@app.route('/api/districts', methods=['GET'])
def get_district_data():
    # Cargar datos del CSV
    df = pd.read_csv('data/Dataset.csv', delimiter=';')
    
    # Filtrar y ordenar datos
    df = df[['DISTRITO', 'GENERACION_MUN_TDIA']].dropna()
    latest_data = df.sort_values('GENERACION_MUN_TDIA', ascending=False).to_dict(orient='records')

    # Enviar datos como JSON
    return jsonify(latest_data)

if __name__ == '__main__':
    app.run()
