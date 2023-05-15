import { BaseEntity } from "@/common/entities/BaseEntity";
import { Column, Entity, Index } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true})
  username: string;

  @Column({ select: false })
  password: string;

  @Column()
  profilePic: string;

  @Column("text", { array: true })
  friends: string[];

}
