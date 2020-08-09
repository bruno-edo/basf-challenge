FROM python:3.8-alpine

# Copy our api code into the container
WORKDIR /api
COPY ./src .

# Installs the project libs
COPY requirements.txt requirements.txt
RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["flask", "run"]