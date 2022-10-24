export const typeOrmConfig: Record<
  string,
  string | number | string[] | boolean | undefined
> = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [`${__dirname}/**/entities/*{.ts,.js}`],
  charset: 'utf8mb4_unicode_ci',
  synchronize: false,
  logging: process.env.NODE_ENV === 'production' ? false : true,
};
