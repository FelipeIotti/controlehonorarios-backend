import { Column, CreateDateColumn, Entity, ObjectID, ObjectIdColumn} from 'typeorm';

@Entity("lawyers")
export class Lawyers {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  oab: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  specialty: string;

  @Column()
  cpf: string;

  @CreateDateColumn()
  created_at: Date;
}