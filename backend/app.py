from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json

app = Flask(__name__)
CORS(app)  

DB_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "./data.json"))

def load_pipe():
    with open(DB_PATH, "r") as f:
        data = json.load(f)
    return data["pipes"]

@app.route('/api/pipes', methods=['GET'])
def get_pipes():
    return jsonify(load_pipe())

DB_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), "..data.json"))

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

if __name__ == '__main__':
    app.run(debug=True)