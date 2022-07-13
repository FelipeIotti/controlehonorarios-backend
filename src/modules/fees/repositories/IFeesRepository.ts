import { Fees } from "../infra/typeorm/entities/Fees";
import { IFeesDTO } from "../dtos/IFeesDTO";

export interface IFeesRepository {
  create(data: IFeesDTO): Promise<void>;
  findByName(name: string): Promise<Fees>;
  findByNameClient(name: string): Promise<Fees>;
  findByNameLawyer(name: string): Promise<Fees>;
  findByNameGroupAction(name: string): Promise<Fees>;
  findById(id: string): Promise<Fees>;
  list(): Promise<Fees[]>;
  update(data: Fees): Promise<void>;
  delete(id:string):Promise<void>;
}