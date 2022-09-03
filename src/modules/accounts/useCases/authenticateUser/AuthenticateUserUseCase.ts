import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import {compare} from 'bcryptjs';
import { sign } from "jsonwebtoken";
import { AppError } from "@shared/errors/AppErros";
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository";
import auth from "@config/auth";
import dayjs from "dayjs";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
    permission: boolean;
  },
  token: string;
  refresh_token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    // @inject('DayjsDateProvider')
    // private dateProvider: IDateProvider
  ){}

  async execute({email,password}: IRequest):Promise<IResponse >{
    const user = await this.usersRepository.findByEmail(email);
    const {expires_in_token, secret_token,secret_refresh_token,expires_in_refresh_token,expires_refresh_token_days} = auth;

    if (!user) {
      throw new AppError('Email or password incorrect!');
    }

    const passwordMatch = await compare(password, user.password);
    

    if(!passwordMatch) {
      throw new AppError('Email or password incorrect!');
    }

    const token = sign({},secret_token,{
      subject: String(user.id),
      expiresIn: expires_in_token
    });

    const refresh_token = sign({email},secret_refresh_token,{
      subject: String(user.id),
      expiresIn: expires_in_refresh_token,
    });

    const refresh_token_expires_date = dayjs().add(expires_refresh_token_days, "days").toDate();
    
    await this.usersTokensRepository.create({
      user_id: String(user.id),
      refresh_token,
      expires_date: refresh_token_expires_date,
    })

    const tokenReturn : IResponse ={
      token,
      user: {
        name: user.name,
        email: user.email,
        permission: user.isAdmin
      },
      refresh_token,
    }

    return tokenReturn;
  }
}