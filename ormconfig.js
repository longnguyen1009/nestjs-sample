module.exports = {
  url: process.env.DB_URL,
  type: 'postgres',
  ssl: {
    rejectUnauthorized: false,
  },
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true, // This for development
  autoLoadEntities: true,
}