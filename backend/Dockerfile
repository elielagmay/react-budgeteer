FROM python:3.6.3

ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y \
    libffi-dev \
    libldap2-dev \
    libpq-dev \
    libssl-dev \
    libxml2-dev \
    libxmlsec1-dev \
    openssl \
    postgresql-client-9.4

RUN mkdir -p /app/backend
WORKDIR /app/backend

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .
