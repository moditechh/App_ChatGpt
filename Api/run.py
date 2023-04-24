from api import app
from api.config import Config

if __name__ == '__main__':
    app.run(host='10.0.0.104',port='8000',debug=True)