from flask import Flask
from model import connect_to_db, db
app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined










if __name__ == "__main__":
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)
    db.create_all()