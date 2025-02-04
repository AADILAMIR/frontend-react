FROM node:16-alpine
WORKDIR /app

COPY package.json yarn.lock ./

# not needed because alpine image already have yarn
# RUN npm install yarn

RUN yarn install

COPY . .
EXPOSE 3000

CMD ["yarn", "start"]

# node-alpine node 16 image size node-slim->image size less ||
# -p port 3000 ip public accessible ni hota || 
# docker layers how help us to optimize image ||
# COPY vs ADD --> || curl can be in case of add if we need to fetch from url then after we need to extract it then rm .tar folder
# ENV vs ARG --> ||
# cmd vs entrypoint (which one is better in which situation) ||
# more than one cmd or entry point what is the behavior ||
# multi stage docker files (why we use it) ||
# docker file optimization (how to optimize docker file) ||