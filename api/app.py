from flask import Flask, render_template, Blueprint
from flask_restx import Api, Resource, fields
from werkzeug.middleware.proxy_fix import ProxyFix
import requests
from bs4 import BeautifulSoup
from flask_cors import CORS, cross_origin
import os

app = Flask(__name__)

blueprint = Blueprint('api', __name__, url_prefix='/api/')

app.wsgi_app = ProxyFix(app.wsgi_app)
api = Api(blueprint, doc='/', version='1.0', title='API do Campeonato Brasileiro',
    description="Uma API para o acompanhamento do Campeonato Brasileiro\n\nDesenvolvido por: Fábio Vitor \n\nGithub: https://github.com/FVitor7\nemail: fabvitor2010@gmail.com")
        
app.register_blueprint(blueprint)
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app)

ns = api.namespace("times", description="API  operations")

team = api.model('API', {
    "id": fields.Integer(readonly=True, description='Necessário para identificar a equipe'),
    "posicao": fields.String(required=True, description='Posicão na tabela'),
    "time": fields.String(required=True, description='Nome do Time'),
    "pontos": fields.String(required=True, description='Quantidade de pontos obtidos'),
    "jogos": fields.String(required=True, description='Quantidade de partidas disputadas'),
    "vitorias": fields.String(required=True, description='Número de vitórias'),
    "empates": fields.String(required=True, description='Número de empates'),
    "derrotas": fields.String(required=True, description='Número de derrotas'),
    "gols_pro": fields.String(required=True, description='Gols Marcados'),
    "gols_sofridos": fields.String(required=True, description='Gols sofridos'),
    "saldo_gols": fields.String(required=True, description='Saldo de gols'),
    "cartoes_amarelos": fields.String(required=True, description='Quantidads de cartões amarelos recebidos'),
    "cartoes_vermelhos": fields.String(required=True, description='Quantidads de cartões vermelhos recebidos'),
    "aproveitamento": fields.String(required=True, description='Taxa de aproveitamento no campeonato'),
})


class ApiClass(object):
    def __init__(self):
        self.counter = 0
        self.teams = []

    def get(self, id):
        for team in self.teams:
            if team['id'] == id:
                return team
        api.abort(404, "O Time {} não existe nesse campeonato!".format(id))

    def create(self, data):
        team = data
        team['id'] = self.counter = self.counter + 1
        self.teams.append(team)
        return team

    

API = ApiClass()

clubs = []
request = requests.get('https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a')
soup = BeautifulSoup(request.text, 'html.parser')
info = soup.find_all('tr', class_='expand-trigger')

for td in info:
	clubs.append(td.get_text()[3:70].split('\n'))

lista_api=[]

for x in range(20):
      api_brasileirao = {"posicao":clubs[x][0], "pos_att": clubs[x][1],
      "time": clubs[x][3],
	  "pontos": clubs[x][5],
	  "jogos": clubs[x][6],
	  "vitorias": clubs[x][7],
	  "empates": clubs[x][8],
      "derrotas": clubs[x][9],
	  "gols_pro": clubs[x][10],
	  "gols_sofridos": clubs[x][11],
      "saldo_gols": clubs[x][12],
      "cartoes_amarelos": clubs[x][13],
      "cartoes_vermelhos": clubs[x][14],
      "aproveitamento": str(clubs[x][15])+'%'
      
      }
      API.create(api_brasileirao)
  

@cross_origin()
@ns.route('/')
class ApiList(Resource):
    @ns.doc('list_teams')
    @ns.marshal_list_with(team)
    def get(self):
        
        return API.teams
    
@cross_origin()
@ns.route('/<int:id>')
@ns.response(404, 'Time nao encontrado.')
@ns.param('id', 'Necessario para localizar a equipe')
class ApiGet(Resource):
    
    @ns.doc('get_team')
    @ns.marshal_with(team)
    def get(self, id):
        
        return API.get(id)

@app.route("/")
def beta():
        return render_template("index.html")


if __name__ == '__main__':
    #app.run(debug=True)
    # Bind to PORT if defined, otherwise default to 5000.
    port = float(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
     #app.run()
