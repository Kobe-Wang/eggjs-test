FROM node:8.12
RUN apt-get update \
  && rm -rf /var/lib/apt/lists/*

# Change/create work folder
WORKDIR /usr/src/app

# Install and freeze requirement packages
COPY package.json /usr/src/app/package.json
RUN npm install --only=prod && npm cache clean --force
COPY . /usr/src/app

# 8000 port
EXPOSE 8000

CMD ["npm", "start", "--", "--port", "8000", "--cluster", "--sticky", "--workers", "2"]
