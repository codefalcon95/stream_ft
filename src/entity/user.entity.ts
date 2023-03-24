import { BaseEntity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UserQueries } from './user_queries.entity';

export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userName: string;

  @OneToMany(() => UserQueries, (userQueries) => userQueries.user)
  userQueries?: UserQueries[];
}
