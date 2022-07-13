import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity("clients")
export class Clients {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @CreateDateColumn()
  created_at: Date;
}