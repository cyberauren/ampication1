FROM node:18.12.1 AS base

ARG REACT_APP_SERVER_URL

ENV REACT_APP_SERVER_URL=$REACT_APP_SERVER_URL

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

FROM nginx:stable-alpine AS prod

COPY --from=base /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"] /app/dist ./dist
COPY --from=base /app/prisma ./prisma
COPY --from=base /app/scripts ./scripts
COPY --from=base /app/src ./src
COPY --from=base /app/tsconfig* ./

EXPOSE 3000

CMD [ "node", "./dist/main"]
