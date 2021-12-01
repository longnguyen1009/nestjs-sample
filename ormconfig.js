module.exports = {
  'type': 'postgres',
  'host': process.env.POSTGRES_HOST,
  'port': 5432,
  'username': process.env.POSTGRES_USERNAME,
  'password': process.env.DATABASE_PASSWORD,
  'database': process.env.DATABASE_DB,
  'url': process.env.DATABASE_URL,
  'entities': [process.env.ENTITY_PATH],
  'migrationsTableName': 'migration',
  'migrations': ['src/migration/*.ts'],
  'cli': {
    'migrationsDir': 'src/migration',
  },
  'connectionString': process.env.DATABASE_URL,
  'ssl': { 'rejectUnauthorized': false },
  'synchronize': true,
}