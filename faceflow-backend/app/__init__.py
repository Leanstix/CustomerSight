from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS
import os

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    app.config.from_object(os.getenv('APP_SETTINGS', 'config.DevelopmentConfig'))
    
    db.init_app(app)
    migrate.init_app(app, db)
    
    from . import routes
    app.register_blueprint(routes.main_bp)
    
    return app
