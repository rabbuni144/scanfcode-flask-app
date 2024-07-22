
#! From flask importing the Flask , render_template
from flask import Flask,render_template
#!  WSGI application
app=Flask(__name__)

# main app route
@app.route('/')
def welcome():
    return render_template("index.html")

# a rote to add new students
@app.route("/newstudent")
def addstudent():
    return "/"

if __name__ == '__main__':
    app.run(debug=True)