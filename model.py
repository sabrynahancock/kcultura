from datetime import datetime
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


class Admin(db.Model):
    """Data model for admin"""
    __tablename__ = "admin"

    admin_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    email = db.Column(db.String(50))
    password = db.Column(db.String(200))

    blogposts = db.relationship("BlogPost", back_populates="admin")

class BlogPost(db.Model):
    __tablename__ = "blogposts"


    blog_id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(200))
    post = db.Column(db.String(500))
    photo_url = db.Column(db.String(100))
    datetime = db.Column(db.DateTime)

    admin = db.relationship("Admin", back_populates="blogposts")


def connect_to_db(app):
    """Connect the database to our Flask app."""

    app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql:///kcultura"
    app.config["SQLALCHEMY_ECHO"] = False
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    print("Connected to db!")
    
if __name__ == "__main__":
    from flask import Flask

    app = Flask(__name__)
    connect_to_db(app)

    # Create the tables
    with app.app_context():
        db.create_all()
