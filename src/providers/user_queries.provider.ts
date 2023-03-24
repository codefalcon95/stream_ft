import { UserQueries } from 'src/entity/user_queries.entity';
import { DataSource } from 'typeorm';

export const userQueryProvider = {
  provide: 'USER_QUERY_REPOSITORY',
  useFactory: (datasource: DataSource) => datasource.getRepository(UserQueries),
  inject: ['DATA_SOURCE'],
};
