FROM node:14.17.0-alpine3.11
ENV NODE_ENV=development
WORKDIR /usr/app 
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["npm", "run", "dev"]
