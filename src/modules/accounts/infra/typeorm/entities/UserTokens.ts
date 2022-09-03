import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
} from "typeorm";

import { User } from "./User";

@Entity("usersTokens")
class UserTokens {
  @ObjectIdColumn()
  id: string;

  @Column()
  refresh_token: string;

  @Column()
  user_id: string;

  @Column(()=> User)
  user: User;

  @Column()
  expires_date: Date;

  @CreateDateColumn()
  created_at: Date;
}

export { UserTokens };