#!/bin/sh

echo "Generating .env (environment) file..."

tee .env <<END

# Application
PORT=3100
APP_NAME="QChat"
NODE_ENV=local

# Postgres
POSTGRES_HOST=localhost
POSTGRES_PORT=5400
POSTGRES_DB=qchat_db
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_SCHEMA=qchat

END
