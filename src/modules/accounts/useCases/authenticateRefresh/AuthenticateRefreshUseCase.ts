import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { User } from "@modules/accounts/infra/typeorm/entities/User";


@injectable()
export class AuthenticateRefreshUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ){}

  async execute():Promise<User>{
    const email = 'financeiro@zagoadvogados.com.br'
    const user = await this.usersRepository.findByEmail(email);

    return user;
  }
}