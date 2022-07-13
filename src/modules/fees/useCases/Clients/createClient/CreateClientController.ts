import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateClientsUseCase } from "./CreateClientUseCase";

export class CreateClientsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name} = request.body;
    
    const createClientsUseCase = container.resolve(CreateClientsUseCase);

    await createClientsUseCase.execute({name});
    
    return response.status(201).send();
  }
}