import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity("fees")
export class Fees {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  lawyers1: string;

  @Column()
  lawyers2: string;

  @Column()
  lawyers3: string;

  @Column()
  lawyers4: string;

  @Column()
  clients: string;

  @Column()
  group_action: string;

  @Column()
  opposing_party: string;

  @Column()
  value1: string;

  @Column()
  value2: string;

  @Column()
  value3: string;

  @Column()
  value4: string;

  @Column()
  status: string;

  @Column()
  endDate: Date;

  @Column()
  payment_date: Date;

  @CreateDateColumn()
  created_at: Date;
}