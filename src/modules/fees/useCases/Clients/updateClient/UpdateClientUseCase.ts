import { IClientsDTO } from "@modules/fees/dtos/IClientsDTO";
import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { IClientsRepository } from "@modules/fees/repositories/IClientsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  name: string;
}

@injectable()
export class UpdateClientsUseCase {
  constructor(
      @inject("FeesRepository")
      private feesRepository: IFeesRepository,
      @inject("ClientsRepository")
      private clientsRepository: IClientsRepository,
    ){}

  async execute({id,name}:IRequest): Promise<void> {

    const clients = await this.clientsRepository.findById(id);

    const fees = await this.feesRepository.findByNameClient(clients.name);
    
    clients.name = name;

    fees.clients = name;

    await this.feesRepository.update(fees);
    await this.clientsRepository.update(clients);
    
  }
}