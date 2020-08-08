#!/bin/sh

echo "Running database restoration script"

chown -R neo4j:neo4j /data

neo4j-admin load --from=data/basf-challenge-database.dump --database=basf --force

/docker-entrypoint.sh neo4j