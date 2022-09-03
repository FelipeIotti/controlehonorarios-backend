import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateRefreshUseCase } from "./AuthenticateRefreshUseCase";

export class AuthenticateRefreshController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authenticateRefreshUseCase = container.resolve(AuthenticateRefreshUseCase);

    const token = await authenticateRefreshUseCase.execute();

    return response.status(201).json(token);
  }
}
