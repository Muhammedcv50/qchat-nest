import { BaseEntity } from "@/common/entities/BaseEntity";
import { Entity, Column } from "typeorm";
@Entity()
export class FriendshipStatus extends BaseEntity {

  @Column()
  requesterId: string;

  @Column( )
  addresseeId: Date;

  @Column()
  isAccepted: boolean;

  @Column()
  isDeleted: boolean;


}
