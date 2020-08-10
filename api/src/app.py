import atexit
import time
import os

from flask import Flask, jsonify
from neo4j import GraphDatabase

neo4j_username = os.environ.get('NEO4J_USERNAME')
neo4j_password = os.environ.get('NEO4J_PASSWORD')
neo4j_bolt_port = os.environ.get('NEO4J_BOLT_PORT')
neo4j_db_name = os.environ.get('NEO4J_DB_NAME')

neo4j_driver = GraphDatabase.driver(
    'bolt://neo4j:{}'.format(neo4j_bolt_port), auth=(neo4j_username, neo4j_password))

app = Flask(__name__)

def close_connection():
    print('closing neo4j driver session')
    neo4j_driver.close()

atexit.register(close_connection)

@app.route('/chemical/<chemical_name>', methods=['GET'])
def get_chemicals(chemical_name):
    with neo4j_driver.session(database=neo4j_db_name) as session:
        query = (
            "match(c: Chemical {{name: '{}'}})-[:CITATION]-(p: Patent) "
            'match(p)-[:CITATION]-(c2: Chemical) '
            'match(c2)-[:CITATION]-(p2: Patent) '
            'with count(distinct p2) as chemicalTotal, c2 '
            'return c2 as chemical, chemicalTotal '
            'order by c2.name'
        ).format(chemical_name.strip().lower())

        result = session.run(query)

        return jsonify(result.data())


@app.route('/patent/<chemical_name>/<int:chemical_type>', methods=['GET'])
def get_patents(chemical_name, chemical_type):
    with neo4j_driver.session(database=neo4j_db_name) as session:
        query = (
            "match (c:Chemical {{name: '{}', type: {}}})-[:CITATION]-(p:Patent) "
            'return p as patent'
        ).format(chemical_name.strip().lower(), chemical_type)

        result = session.run(query)

        return jsonify(result.data())
