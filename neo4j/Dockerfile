FROM neo4j:enterprise


# Set Environment Variables
ENV NEO4J_ACCEPT_LICENSE_AGREEMENT yes
ENV NEO4J_dbms_directories_data /data
ENV NEO4J_dbms_default_database basf
ENV NEO4J_AUTH=neo4j/basf

# Copy over entrypoint.sh and give it execute permissions
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Overwrite the docker entrypoint
ENTRYPOINT ["/sbin/tini", "-g", "--", "/entrypoint.sh"]

# Run the neo4j command
CMD ["neo4j"]