#Build the React App

FROM node:16 AS build 

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install 

COPY . .
RUN yarn build

# Serve app with Nginx 

FROM nginx:1.19-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT [ "nginx", "-g","daemon off;" ]