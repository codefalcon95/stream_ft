import { BaseEntity, Column, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

export class UserQueries extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  queryString: string;

  @Column({})
  userId?: string;

  @ManyToOne(() => User, (user) => user.userQueries)
  @JoinColumn({ name: 'userId' })
  user: User;
}
