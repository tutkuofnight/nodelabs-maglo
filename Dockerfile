FROM node:22.15.1-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml package-lock.json* ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
