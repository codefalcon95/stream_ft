import { User } from 'src/entity/user.entity';
import { DataSource } from 'typeorm';

export const userProvider = {
  provide: 'USER_REPOSITORY',
  useFactory: (datasource: DataSource) => datasource.getRepository(User),
  inject: ['DATA_SOURCE'],
};
