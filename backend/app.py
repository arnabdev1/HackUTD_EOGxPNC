from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json
import pickle
import pandas as pd
import numpy as np

app = Flask(__name__)
CORS(app)  


DB_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "./data.json"))

# Specify the directory to save uploaded files
UPLOAD_FOLDER = './uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER



def load_pipe():
    with open(DB_PATH, "r") as f:
        data = json.load(f)
    return data["pipes"]

@app.route('/api/pipes', methods=['GET'])
def get_pipes():
    return jsonify(load_pipe())

@app.route('/api/echo', methods=['POST'])
def echo():
    data = request.json
    user_input = data.get('input')
    return jsonify({"output": user_input})


@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return {"message": "No file part"}, 400

    file = request.files['file']

    if file.filename == '':
        return {"message": "No selected file"}, 400

    if file and file.filename.endswith('.csv'):
        filepath = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(filepath)
        run_model(filepath)
        return {"message": "File successfully uploaded"}, 200
    else:
        return {"message": "Invalid file type. Only CSV files are allowed."}, 400


def run_model(filepath):
    print(f"Running model on {filepath}")
    # Load the model and run it on the file
    model = pickle.load(open("../machine-learning/model_new.pkl", "rb"))
    model2 = pickle.load(open("../machine-learning/model_95.pkl", "rb"))
    data = pd.read_csv(filepath)
    
    # For each row
    for each in data.iterrows():
        params = np.array([each[1].values[1], each[1].values[3]]).reshape(1, -1)
        
        # params = np.array([each[1], each[3]])
        try:
            if model.predict(params) > 0.05:
                print("Anomaly detected")
                print("Possible hydration at time: ", each[1].values[0])
        except:
            print("Missing data")
        
        
    predictions = model.predict(data)
    print(predictions)
    print("Model run successful")
    # print the data results
    
    


if __name__ == '__main__':
    app.run(debug=True)