import { BaseEntity } from '@/common/entities/BaseEntity';
import { Entity, Column } from 'typeorm';
@Entity()
export class Conversation extends BaseEntity {
  @Column('text', { array: true, default: [] })
  participants: string[];

  @Column()
  joinedAt: Date;

  @Column()
  leftAt: Date;
}
