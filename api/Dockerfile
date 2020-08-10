FROM python:3.8-alpine

# Copy our api code into the container
WORKDIR /api
COPY ./src .

# Installs cURL for us to check if neo4j is up or not
RUN apk --no-cache add curl

# Installs the project libs
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

# Copy over entrypoint.sh and give it execute permissions
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Overwrite the docker entrypoint
ENTRYPOINT ["../entrypoint.sh"]