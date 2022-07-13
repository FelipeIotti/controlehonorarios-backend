import { IGroupActionDTO } from "@modules/fees/dtos/IGroupActionDTO";
import { IGroupActionRepository } from "@modules/fees/repositories/IGroupActionRepository";
import { getMongoRepository, MongoRepository} from "typeorm";
import { GroupAction } from "../entities/GroupAction";

export class GroupActionRepository implements IGroupActionRepository {
  private repository: MongoRepository<GroupAction>;

  constructor(){
    this.repository = getMongoRepository(GroupAction);
  }

  async create({name}:IGroupActionDTO): Promise<void> {
    const groupAction = this.repository.create({
      
      name
    })
  
    await this.repository.save(groupAction)
  }

  async findById(id: string): Promise<GroupAction> {
    const groupAction = await this.repository.findOne(id);
    return groupAction;
  }

  async findByName(name: string): Promise<GroupAction> {
    //console.log(client);
    const groupAction = await this.repository.findOne({
      where: {
       'name': { $eq: `${name}`}
      }
    });
    return groupAction;
  }

  async list(): Promise<GroupAction[]> {
    const groupAction = await this.repository.find();
    return groupAction;
  }

  async update({id,name}:IGroupActionDTO):Promise<void> {
    const groupAction = await this.repository.findOne(id);

    groupAction.name = name;

    await this.repository.save(groupAction);
  }

  async delete(id: string): Promise<void> {
    const groupAction = await this.repository.findOne(id);
    
    await this.repository.delete(groupAction);
  }
}