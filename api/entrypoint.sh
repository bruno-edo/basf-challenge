#!/bin/sh

# wait for Neo4j
while true; do
    sleep 5
    if curl -s -I neo4j:$NEO4J_HTTP_PORT | grep "200 OK"; then
        echo "Neo4J Ready"
        break
    else
        echo "Neo4J Not Ready"
        continue
    fi
done

flask run