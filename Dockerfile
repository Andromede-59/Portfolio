FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/server.js ./server.js
COPY --from=build /app/dist ./dist
COPY --from=build /app/sendMail.js ./sendMail.js
COPY --from=build /app/bin ./bin
COPY --from=build /app/build ./build

EXPOSE 3000
RUN sh -c "if [ -d build ] && [ ! -d dist ]; then mv build dist; fi"

CMD ["node", "./bin/www"]