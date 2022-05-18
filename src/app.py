# from crypt import methods
from flask import Flask, jsonify, request, Response
from flask_pymongo import PyMongo
from werkzeug.security import generate_password_hash
from bson import json_util
from bson.objectid import ObjectId
from flask_cors import CORS

#from function_jwt import write_token


# Conexión con BDD

app = Flask(__name__)
CORS(app)

app.config['MONGO_URI'] = 'mongodb://localhost/Hero_p'

mongo = PyMongo(app)


# ------------Rutas para "PODERES" POST, GET (lista)----------------
@app.route('/api/poderes', methods=['POST'])
def create_poder():
    name_poder = request.json['name_poder']
    description_poder = request.json['description_poder']

    if name_poder and description_poder:
        id = mongo.db.powers.insert_one(
            {'name_poder': name_poder, 'description_poder': description_poder})

        response = {
            'id': str(id),
            'name_poder': name_poder,
            'description_poder': description_poder,
        }
        return response
    else:
        return not_found()


@app.route('/api/poderes', methods=['GET'])
def get_popwers():
    powers = mongo.db.powers.find()
    response = json_util.dumps(powers)
    return Response(response, mimetype=('application/json'))

# -----------Rutas para "PODERES"  PUT DELETE GET (SINGULAR)) por ID ------------


@app.route('/api/poderes/<id_poder>', methods=['GET'])
def get_power(id_poder):
    power = mongo.db.powers.find_one({'_id': ObjectId(id_poder)})

    if power:
        response = json_util.dumps(power)
        return Response(response, mimetype=('application/json'))
    else:
        return not_found()


@app.route('/api/poderes/<id_poder>', methods=['PUT'])
def update_power(id_poder):
    name_poder = request.json['name_poder']
    description_poder = request.json['description_poder']

    if name_poder and description_poder:
        mongo.db.powers.update_one({'_id': ObjectId(id_poder)}, {'$set': {
            'name_poder': name_poder,
            'description_poder': description_poder
        }})
        response = jsonify(
            {"message": 'User  was update successfully'})
        return Response(response, mimetype='application/json')
    else:
        return not_found()


@app.route('/api/poderes/<id_poder>', methods=['DELETE'])
def delete_power(id_poder):
    mongo.db.powers.delete_one({'_id': ObjectId(id_poder)})
    return 'Poder Eliminado'


# //////////////////////////////////////////////////////////////////////////////////
# //////////////////////////////////////////////////////////////////////////////////
# --------------Rutas para "AUTHS" POST, GET (lista)--------------------
@app.route('/api/auths', methods=['POST'])
def create_user():
    username = request.json['username']
    password = request.json['password']
    email = request.json['email']

    if username and password and email:
        hashed_password = generate_password_hash(password)
        id = mongo.db.users.insert_one(
            {'username': username, 'password': password, 'email': email}
        )
        response = {
            'id': str(id),
            'username': username,
            'password': hashed_password,
            'email': email
        }
        return response
    else:
        return not_found()


@app.route('/api/auths', methods=['GET'])
def get_users():
    users = mongo.db.users.find()
    response = json_util.dumps(users)
    return Response(response, mimetype='application/json')


# -----------Rutas para "AUTHS" PUT DELETE GET (SINGULAR) por ID------------
@app.route('/api/auths/<id_autorizacion>', methods=['GET'])
def get_user(id_autorizacion):
    user = mongo.db.users.find_one({'_id': ObjectId(id_autorizacion)})
    response = json_util.dumps(user)
    return Response(response, mimetype="application/json")


@app.route('/api/auths/<id_autorizacion>', methods=['PUT'])
def update_user(id_autorizacion):
    username = request.json['username']
    email = request.json['email']
    password = request.json['password']

    if username and email and password:
        hashed_password = generate_password_hash(password)
        mongo.db.users.update_one({'_id': ObjectId(id_autorizacion)}, {'$set': {
            'username': username,
            'email': email,
            'password': hashed_password
        }})
        response = jsonify(
            {"message": 'User  was update successfully'})
        return Response(response, mimetype='application/json')


@app.route('/api/auths/<id_autorizacion>', methods=['DELETE'])
def delete_user(id_autorizacion):
    mongo.db.users.delete_one({'id': ObjectId(id_autorizacion)})
    response = jsonify({'message': 'User was Delete succesfully'})
    return response


# //////////////////////////////////////////////////////////////////////////////////
# //////////////////////////////////////////////////////////////////////////////////
# ---------Rutas para "SUPERHEROES" POST GET(lista)----------------
@app.route('/api/superheroes', methods=['POST'])
def create_heroe():
    nombre_heroe = request.json['nombre_heroe']
    identidad_secreta = request.json['identidad_secreta']
    poderes = request.json['poderes']
    gente_salvada = request.json['gente_salvada']

    if nombre_heroe and identidad_secreta and poderes:
        id = mongo.db.heroes.insert_one({
            'nombre_heroe': nombre_heroe,
            'identidad_secreta': identidad_secreta,
            'poderes': poderes,
            'gente_salvada': gente_salvada
        })
        response = {
            'id': str(id),
            'nombre_heroe': nombre_heroe,
            'identidad_secreta': identidad_secreta,
            'poderes': poderes,
            'gente_salvada': gente_salvada
        }
        return response
    else:
        return not_found()


@app.route('/api/superheroes', methods=['GET'])
def get_heroes():
    heroes = mongo.db.heroes.find()
    response = json_util.dumps(heroes)
    return Response(response, mimetype=('application/json'))


# ---------Rutas para "SUPERHEROES" PUT DELETE GET(singular) por ID----------------
@app.route('/api/superheroes/<id_heroe>', methods=['GET'])
def get_heroe(id_heroe):
    heroe = mongo.db.heroes.find_one({'_id': ObjectId(id_heroe)})
    response = json_util.dumps(heroe)
    return Response(response, mimetype=("application/json"))


@app.route('/api/superheroes/<id_heroe>', methods=['PUT'])
def update_heroe(id_heroe):
    nombre_heroe = request.json['nombre_heroe']
    identidad_secreta = request.json['identidad_secreta']
    poderes = request.json['poderes']
    gente_salvada = request.json['gente_salvada']

    if nombre_heroe and identidad_secreta and poderes and gente_salvada:
        mongo.db.heroes.update_one({'_id': ObjectId(id_heroe)}, {'$set': {
            "nombre_heroe": nombre_heroe,
            "identidad_secreta": identidad_secreta,
            "poderes": poderes,
            "gente_salvada": gente_salvada
        }})
        return "El Super-Heroe a sido modificado"


@app.route('/api/superheroes/<id_heroe>', methods=['DELETE'])
def delete_heroe(id_heroe):
    mongo.db.heroes.delete_one({'_id': ObjectId(id_heroe)})
    return 'El heroe a sido eliminado'


# //////////////////////////////////////////////////////////////////////////////////
# //////////////////////////////////////////////////////////////////////////////////
# ---------Rutas para "SALVADOS POR HEROE" POST GET (lista)----------------
@app.route('/api/superheroes/<id_heroe>/salvados', methods=['POST'])
def create_gente_salvada(id_heroe):
    nombre = request.json['nombre']
    edad = request.json['edad']
    genero = request.json['genero']

    if nombre and edad and genero:
        mongo.db.salvados.insert_one({
            'nombre': nombre,
            'edad': edad,
            'genero': genero,
            '_tag': id_heroe

        })
        mongo.db.heroes.find_one_and_update({'_id': ObjectId(id_heroe)}, {'$push': {
            'gente_salvada': mongo.db.salvados.find_one({"nombre": nombre, "edad": edad, "genero": genero})
        }})
        return 'Agregado correctamente'


@ app.route('/api/superheroes/<id_heroe>/salvados', methods=['GET'])
def get_salvados(id_heroe):
    salvados = mongo.db.salvados.find({'_tag': id_heroe})
    response = json_util.dumps(salvados)
    return Response(response, mimetype='application/json')


# ---------Rutas para "SALVADOS POR HEROE" PUT DELETE GET(singular)-------------------
@ app.route('/api/superheroes/<id_heroe>/salvados/<id_salvado>', methods=['GET'])
def get_salvado(id_heroe, id_salvado):
    salvado = mongo.db.salvados.find_one(
        {'_tag': id_heroe, '_id': ObjectId(id_salvado)})
    response = json_util.dumps(salvado)
    return Response(response, mimetype='application/json')


@ app.route('/api/superheroes/<id_heroe>/salvados/<id_salvado>', methods=['PUT'])
def update_salvado(id_heroe, id_salvado):
    nombre = request.json['nombre']
    edad = request.json['edad']
    genero = request.json['genero']

    if nombre and edad and genero:
        mongo.db.salvados.update_one({'_id': ObjectId(id_salvado)}, {'$set': {
            'nombre': nombre,
            'edad': edad,
            'genero': genero
        }})

        mongo.db.heroes.find_one_and_update({"_id": ObjectId(id_heroe), "gente_salvada._id": ObjectId(id_salvado)}, {'$set': {
            'gente_salvada.$': mongo.db.salvados.find_one({'_id': ObjectId(id_salvado)})
        }})
    return 'La persona salvada ha sido modificada'


@ app.route('/api/superheroes/<id_heroe>/salvados/<id_salvado>', methods=['DELETE'])
def delete_salvado(id_heroe, id_salvado):
    mongo.db.heroes.find_one_and_update({}, {'$pull': {
        'gente_salvada': {'_id': ObjectId(id_salvado)}
    }})
    mongo.db.salvados.find_one_and_delete({"_id": ObjectId(id_salvado)})
    return 'Persona salvada ha sido eliminada'


# //////////////////////////////////////////////////////////////////////////////////
# //////////////////////////////////////////////////////////////////////////////////
@ app.errorhandler(404)
def not_found(error=None):
    response = jsonify({
        'message': 'Resource Not Found: ' + request.url,
        'status': 404
    })
    response.status_code = 404
    return response


if __name__ == "__main__":

    app.run(debug=True)
