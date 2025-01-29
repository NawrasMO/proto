from flask import Flask, render_template, request, jsonify, send_from_directory
app = Flask(__name__)

# Define the routes
@app.route('/')
def index1():
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
