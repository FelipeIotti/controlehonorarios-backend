import { IClientsRepository } from "@modules/fees/repositories/IClientsRepository";
import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteClientsUseCase {
  constructor(
      @inject("ClientsRepository")
      private clientsRepository: IClientsRepository,
      @inject("FeesRepository")
      private feesRepository: IFeesRepository,
    ){}

  async execute({id}:IRequest): Promise<void> {
    const clients = await this.clientsRepository.findById(id);

    const fees = await this.feesRepository.findByNameClient(clients.name);

    await this.feesRepository.delete(String(fees.id));

    await this.clientsRepository.delete(id);
  }
}