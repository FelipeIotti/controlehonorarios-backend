import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLawyersUseCase } from "./CreateLawyerUseCase";

export class CreateLawyersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name, oab, phone, email, specialty, cpf} = request.body;

    const createLawyersUseCase = container.resolve(CreateLawyersUseCase);

    await createLawyersUseCase.execute({name, oab, phone, email, specialty, cpf});

    return response.status(201).send();
  }
}