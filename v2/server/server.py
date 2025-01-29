from flask import Flask, render_template, request, jsonify, send_from_directory
import sys
sys.path.insert(0, './venv/lib/python3.12/site-packages/')
from flask_cors import CORS
import datetime
import logging
app = Flask(__name__)
logging.basicConfig(filename='logs.log', level=logging.INFO)

#@app.before_request
#def log_request_info():
    # Log the IP and timestamp of each request
#    ip = request.remote_addr
#    timestamp = datetime.datetime.now()
#    logging.info(f"Access from {ip} at {timestamp}")

# Define the routes
@app.route('/')
def index1():
    ip = request.remote_addr
    timestamp = datetime.datetime.now()
    logging.info(f"Access from {ip} at {timestamp}")
    return render_template('index.html')

    
@app.route('/submit', methods=['POST'])
def submit_data():
    data = request.json
    name = data['name']
    subject = data['subject']
    mobile = data['mobile']
    
    # Write data to a file
    with open('data.txt', 'a') as file:
        file.write(f'Name: {name}, Subject: {subject}, Mobile: {mobile}\n')
    
    return jsonify({"status": "success", "message": "Data saved"}), 200



@app.route('/.well-known/pki-validation/')
def serve_pki_file1():
    return send_from_directory('./','9899A8679BFDD398ECE17097C20F5149.txt')


@app.route('/.well-known/pki-validation/9899A8679BFDD398ECE17097C20F5149.txt')
def serve_pki_file():
    return send_from_directory('./','9899A8679BFDD398ECE17097C20F5149.txt')


app.run(host='0.0.0.0', port=443, ssl_context=('./certificate.crt', 'private.key'))
CORS(app)
