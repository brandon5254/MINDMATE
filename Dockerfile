# Etapa 1: Build de Angular
FROM node:18 as build-frontend

WORKDIR /app
COPY angular/ ./angular/
WORKDIR /app/angular

RUN npm install
RUN npm run build --prod

# Etapa 2: Backend con Flask
FROM python:3.10-slim

WORKDIR /app

# Instalar dependencias del sistema (si es necesario)
RUN apt-get update && apt-get install -y build-essential && rm -rf /var/lib/apt/lists/*

# Copiar archivos del backend
COPY . .

# Instalar dependencias Python
RUN pip install --no-cache-dir -r requirements.txt

# Copiar los archivos compilados de Angular al folder estático de Flask
COPY --from=build-frontend /app/angular/dist/angular/ ./tdsk-flask/static/

# Comando para producción con Gunicorn
CMD ["gunicorn", "tdsk-flask.app:app", "--bind", "0.0.0.0:8000"]
