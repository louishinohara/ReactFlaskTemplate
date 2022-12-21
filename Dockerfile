FROM ubuntu:latest

RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    curl

RUN curl -sL https://deb.nodesource.com/setup_18.x | bash &&\
    apt-get install nodejs

WORKDIR /app 

COPY /requirements.txt /app
COPY /src/client/package.json /app/src/client/package.json

RUN npm cache clean -f && \
    npm install -g npm@9.2.0 &&\
    pip3 install -r requirements.txt &&\
    mkdir -p /app/logs 

WORKDIR /app/src/client


RUN npm install

WORKDIR /app 
COPY . .

WORKDIR /app/src/client


RUN npm run build 

WORKDIR /app/src/server

CMD ["python3", "app.py"]