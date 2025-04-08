from flask import Flask, request

app = Flask(__name__)

@app.route('/change-mode', methods=['POST'])
def change_mode():
    mode = request.json.get('mode')
    print(f"Received mode: {mode}")
    # Здесь можно добавить логику для переключения режима
    return {'status': 'OK'}

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
