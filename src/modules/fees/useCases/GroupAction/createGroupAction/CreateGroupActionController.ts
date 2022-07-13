import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateGroupActionUseCase } from "./CreateGroupActionUseCase";

export class CreateGroupActionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {name} = request.body;

    const createGroupActionUseCase = container.resolve(CreateGroupActionUseCase);

    await createGroupActionUseCase.execute({name});

    return response.status(201).send();
  }
}