FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
RUN npx tailwindcss -i ./src/css/tailwind.css -o ./dist/output.css # Add Tailwind CSS build step

FROM node:20-alpine
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY --from=build /app/server.js ./server.js
COPY --from=build /app/dist ./dist
COPY --from=build /app/sendMail.js ./sendMail.js
COPY --from=build /app/bin ./bin

EXPOSE 3000

CMD ["node", "./bin/www"]