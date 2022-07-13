import { IClientsRepository } from "@modules/fees/repositories/IClientsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
}

@injectable()
export class CreateClientsUseCase {
  constructor(
    @inject("ClientsRepository")
    private clientsRepository: IClientsRepository,
   
  ) {}

  async execute({name}: IRequest): Promise<void> {
    
    await this.clientsRepository.create({name});
  }
}