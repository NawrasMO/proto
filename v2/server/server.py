from flask import Flask, render_template, request, jsonify
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

app.run("0.0.0.0",80)
