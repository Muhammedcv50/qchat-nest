export const AppConfig = () => ({
  environment: process.env.NODE_ENV || 'local',
  app: {
    name: process.env.APP_NAME,
    port: process.env.PORT,
  },
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    database: process.env.POSTGRES_DB,
    schema: process.env.POSTGRES_SCHEMA,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
  },
});
