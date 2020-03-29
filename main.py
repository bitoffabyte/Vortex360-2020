from flask import Flask, render_template, request, redirect

app=Flask(__name__)

@app.route('/')
def defaul():
	return render_template('index.html')
	
@app.route('/hack')
def hack():
	return render_template('timer.html')

@app.errorhandler(404)
def page_not_found(e):
	return redirect('/')
	
if __name__=="__main__":
	app.run(debug=True)