import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { getMongoRepository, MongoRepository} from "typeorm"
import { User } from "../entities/User";

export class UsersRepository implements IUsersRepository {
  private repository: MongoRepository<User>;

  constructor() {
    this.repository = getMongoRepository(User);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({email});

    return user;
  }

  async create({id,name,email,password}: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      password,
      id,
    });

    await this.repository.save(user);
  }

  async findById(id: string):Promise<User> {
    const user = await this.repository.findOne(id);

    return user;
  }
}