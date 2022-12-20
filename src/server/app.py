from flask import Flask, jsonify, render_template
from flask_cors import CORS
from flask_assets import Environment as AssetEnv

app = Flask(__name__, static_folder="./static", template_folder="./templates")
CORS(app)


assets = AssetEnv(app)
assets.url = app.static_url_path
assets.register('dist/bundle.js')


@app.route("/intro")
def home():
    print("Received Request")
    data = {
        'body': "You've learned flask!"
    }
    return jsonify(data)


@app.route('/', defaults={'path': '' })
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')

if __name__ == '__main__':
    app.run()
