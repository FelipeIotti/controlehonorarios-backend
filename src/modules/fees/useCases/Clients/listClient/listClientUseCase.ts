import { inject, injectable } from "tsyringe";
import { Clients } from "../../../infra/typeorm/entities/Clients";
import { IClientsRepository } from "../../../repositories/IClientsRepository";

@injectable()
export class ListClientsUseCase {
  constructor(
    @inject('ClientsRepository')
    private clientsRepository: IClientsRepository) {}

  async execute(): Promise<Clients[]> {
    const Clients = await this.clientsRepository.list();

    return Clients;
  }
}