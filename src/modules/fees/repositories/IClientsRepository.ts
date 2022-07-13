import { IClientsDTO } from "../dtos/IClientsDTO";
import { Clients } from "../infra/typeorm/entities/Clients";

export interface IClientsRepository {
  create(data: IClientsDTO): Promise<void>;
  findByName(name: string): Promise<Clients>;
  findById(id: string): Promise<Clients>;
  list(): Promise<Clients[]>;
  update(data: IClientsDTO): Promise<void>;
  delete(id: string):Promise<void>;
}