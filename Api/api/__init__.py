from flask import Flask, Blueprint
from api.transcription import transcription_bp
import openai
from api.config import Config

app = Flask(__name__)
openai.api_key = Config.OPENAI_API_KEY
api_bp = Blueprint('api', __name__, url_prefix='/api')

api_bp.register_blueprint(transcription_bp)


app.register_blueprint(api_bp)