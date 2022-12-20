FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    python3 \
    nodejs \
    npm

WORKDIR /app 
COPY /requirements.txt /app
COPY /src/client/package.json /app/src/client

RUN npm cache clean -f && \
    pip install -r requirements.txt &&\
    mkdir -p /app/logs 

WORKDIR /app/src/client

RUN npm install
RUN npm run build 

