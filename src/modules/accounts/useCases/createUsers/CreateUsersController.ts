import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "./CreateUsersUseCase";

export class CreateUsersController {
  async handle(request: Request, response: Response): Promise<Response>{
    const {name, email, password,isAdmin} = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      name, 
      email, 
      password,
      isAdmin, 
    });

    return response.status(201).send();
  }
}