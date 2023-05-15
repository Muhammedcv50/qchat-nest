import { BaseEntity } from "@/common/entities/BaseEntity";
import { Entity, Column } from "typeorm";
@Entity()
export class Message extends BaseEntity {

  @Column()
  authorId: string;

  @Column()
  content: string;

  @Column()
  conversationId: string;


}
