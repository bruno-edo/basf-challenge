FROM neo4j:enterprise

# Copy over entrypoint.sh and give it execute permissions
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Overwrite the docker entrypoint
ENTRYPOINT ["/sbin/tini", "-g", "--", "/entrypoint.sh"]

# Run the neo4j command
CMD ["neo4j"]