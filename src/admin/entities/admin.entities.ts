import { BaseEntity } from "@/common/entities/BaseEntity";
import { Entity, Column } from "typeorm";
@Entity()
export class Admin extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true})
  username: string;

  @Column({ select: false })
  password: string;

  @Column()
  profilePic: string;

}
