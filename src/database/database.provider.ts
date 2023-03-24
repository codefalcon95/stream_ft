import { ENV } from 'src/types';
import { DataSource } from 'typeorm';
export const ENV_VARIABLES = process.env as any as ENV;

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        url: ENV_VARIABLES.DATABASE_URL,
        ssl: {
          rejectUnauthorized: false,
        },
        entities: [__dirname + '/../**/*.entity.{js,ts}'],
        migrations: ['dist/migrations/*{.ts,.js}'],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];
