# Etapa 1: Construir el proyecto Angular
FROM node:16 AS angular-build

# Establece el directorio de trabajo para Angular
WORKDIR /app/angular

# Copia los archivos de Angular y las dependencias
COPY ./angular/package*.json ./
RUN npm install
COPY ./angular ./
RUN npm run build --prod

# Etapa 2: Configuración del servidor Flask con Gunicorn
FROM python:3.9-slim AS flask

# Establece el directorio de trabajo para Flask
WORKDIR /app/flask

# Copia los archivos de la aplicación Flask
COPY ./tdsk-flask/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
COPY ./tdsk-flask ./

# Configura variables de entorno de Flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Etapa 3: Servir el frontend Angular con Nginx y configurar Flask
FROM nginx:alpine

# Copia los archivos de Angular construidos por la etapa anterior al directorio adecuado de Nginx
COPY --from=angular-build /app/angular/dist/ /usr/share/nginx/html

# Copia la configuración personalizada de Nginx
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copia los archivos de Flask para Gunicorn
COPY --from=flask /app/flask /app/flask

# Expone el puerto 80 para Nginx
EXPOSE 80

# Expone el puerto 5000 para Flask
EXPOSE 5000

# Inicia Nginx y Gunicorn en paralelo
CMD ["sh", "-c", "gunicorn --bind 0.0.0.0:5000 tdsk-flask.app:app & nginx -g 'daemon off;'"]
