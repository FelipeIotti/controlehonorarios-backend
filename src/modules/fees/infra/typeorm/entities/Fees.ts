import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity("fees")
export class Fees {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  lawyers: string;

  @Column()
  clients: string;

  @Column()
  group_action: string;

  @Column()
  opposing_party: string;

  @Column()
  value: string;

  @Column()
  status: string;

  @Column()
  endDate: Date;

  @Column()
  payment_date: Date;

  @CreateDateColumn()
  created_at: Date;
}