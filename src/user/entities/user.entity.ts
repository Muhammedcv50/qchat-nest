import { BaseEntity } from '@/common/entities/BaseEntity';
import { Column, Entity, Index } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ select: false })
  password: string;

  @Column({ nullable: true })
  profilePicUrl: string;

  @Column('text', { array: true, default: [] })
  friends: string[];
}
