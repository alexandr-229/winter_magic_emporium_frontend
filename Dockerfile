FROM node:20-alpine
WORKDIR /
ADD package.json package.json
RUN npm install --force
ADD . .
RUN npm run build
CMD ["npm", "run", "start"]
