from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')


@app.route('/countdown')
def countdown():
    return render_template('countdown.html')

@app.route('/mischief')
def mischief():
    return render_template('mischief.html')

@app.route('/singles')
def singles():
    return render_template('singles.html')

@app.route('/captivated')
def captivated():
    return render_template('captivated.html')



if __name__ == "__main__":
    app.run(debug=True)