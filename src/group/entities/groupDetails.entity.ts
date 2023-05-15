import { BaseEntity } from "@/common/entities/BaseEntity";
import { Entity, Column } from "typeorm";

@Entity()
export class GroupDetails extends  BaseEntity{

  @Column()
  conversationId: string;

  @Column()
  name: Date;

  @Column()
  groupPic: Date;

  @Column("text", { array: true })
  admins: string[];


}
