from flask import Flask, render_template, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return render_template("index.html")

@app.route('/svg_d3')
def svg_d3():
    return render_template("d3_svg_sample.html")

@app.route('/anim_svg_d3')
def anim_svg_d3():
    return render_template("d3_svg_transition_sample.html")

@app.route('/d3_csv')
def d3_csv():
    return render_template("d3_with_data.html")


@app.route('/test')
def test():
    return render_template("test.html")

@app.route('/d3_network')
def d3_network():
    return render_template("d3_network_sample.html")

@app.route('/d3_network_json')
def d3_network_json():
    return render_template("d3_network_json.html")

@app.route('/html_sample')
def html_sample():
    return render_template("html_svg_sample.html")

if __name__ == '__main__':
    host_name = 'localhost'
    port_num = 5055
    app.run(debug=True, host=host_name, port=port_num)