import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity("groupAction")
export class GroupAction {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  january: number;

  @Column()
  february: number;

  @Column()
  march: number;

  @Column()
  april: number;

  @Column()
  may: number;

  @Column()
  june: number;

  @Column()
  july: number;

  @Column()
  august: number;

  @Column()
  september: number;

  @Column()
  october: number;

  @Column()
  november: number;

  @Column()
  december: number;

  @Column()
  total: number;

  @CreateDateColumn()
  created_at: Date;
}