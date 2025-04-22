# Etapa 1: Crear la imagen para Angular
FROM node:16-alpine as angular-build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto Angular al contenedor
COPY ./angular /app/

# Instala las dependencias de Angular
RUN npm install

# Construir la aplicación Angular para producción
RUN npm run build --prod

# Etapa 2: Crear la imagen para Flask
FROM python:3.9-slim as flask-build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos del proyecto Flask al contenedor
COPY ./tdsk-flask /app/

# Instala las dependencias del proyecto Flask
RUN pip install --no-cache-dir -r requirements.txt

# Configura las variables de entorno de Flask
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Instala Gunicorn para ejecutar Flask
RUN pip install gunicorn

# Etapa 3: Crear la imagen final con Nginx y Flask + Angular
FROM nginx:alpine

# Instalar dependencias de Python y Gunicorn para Flask
COPY --from=flask-build /app /app
COPY --from=angular-build /app/dist /usr/share/nginx/html

# Copia la configuración personalizada de Nginx para redirigir las peticiones
COPY nginx.conf /etc/nginx/nginx.conf

# Exponer puertos
EXPOSE 80 5000

# Comando para iniciar ambos servicios: Flask y Nginx
CMD ["sh", "-c", "gunicorn --bind 0.0.0.0:5000 app:app & nginx -g 'daemon off;'"]
