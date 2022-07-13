import { IGroupActionDTO } from "../dtos/IGroupActionDTO";
import { GroupAction } from "../infra/typeorm/entities/GroupAction";

export interface IGroupActionRepository {
  create(data:IGroupActionDTO): Promise<void>;
  findByName(name: string): Promise<GroupAction>;
  findById(id: string): Promise<GroupAction>;
  list(): Promise<GroupAction[]>;
  update(data: IGroupActionDTO): Promise<void>;
  delete(id: string):Promise<void>;
}