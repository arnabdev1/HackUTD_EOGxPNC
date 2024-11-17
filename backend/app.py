from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS to allow requests from the frontend

@app.route('/api/echo', methods=['POST'])
def echo():
    data = request.json
    user_input = data.get('input')
    return jsonify({"output": user_input})

if __name__ == '__main__':
    app.run(debug=True)
