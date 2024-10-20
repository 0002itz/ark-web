FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm i
RUN npm run build

FROM httpd:2.4 AS runtime
COPY --from=build /app/dist /usr/local/apache2/htdocs/
RUN apt-get update && apt-get install
EXPOSE 4321
CMD [ "apachectl", "-D", "FOREGROUND" ]
#ENTRYPOINT [ "/usr/local/apache2/htdocs/" ]
