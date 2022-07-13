import { Lawyers } from "../infra/typeorm/entities/Lawyers";
import { ILawyersDTO } from "../dtos/ILawyersDTO";

export interface ILawyersRepository {
  create(data: ILawyersDTO): Promise<void>;
  findByName(name: string): Promise<Lawyers>;
  findById(id: string): Promise<Lawyers>;
  list(): Promise<Lawyers[]>;
  update(data: ILawyersDTO): Promise<void>;
  delete(id: string):Promise<void>;
}