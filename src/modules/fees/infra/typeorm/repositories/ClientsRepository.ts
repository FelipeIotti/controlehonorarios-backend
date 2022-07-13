import { IClientsDTO } from "@modules/fees/dtos/IClientsDTO";
import { IClientsRepository } from "@modules/fees/repositories/IClientsRepository";
import { getMongoRepository, MongoRepository} from "typeorm";
import { Clients } from "../entities/Clients";

export class ClientsRepository implements IClientsRepository {
  private repository: MongoRepository<Clients>;

  constructor(){
    this.repository = getMongoRepository(Clients);
  }

  async create({name}:IClientsDTO): Promise<void> {
    const client = this.repository.create({
      
      name
    })

    await this.repository.save(client)
  }

  async findById(id: string): Promise<Clients> {
    const client = await this.repository.findOne(id);
    return client;
  }

  async findByName(name: string): Promise<Clients> {
    //console.log(client);
    const client = await this.repository.findOne({
      where: {
       'name': { $eq: `${name}`}
      }
    });
    return client;
  }

  async list(): Promise<Clients[]> {
    const client = await this.repository.find();
    return client;
  }

  async update({id,name}:IClientsDTO):Promise<void> {
    const client = await this.repository.findOne(id);

    client.name = name;

    await this.repository.save(client);
  }

  async delete(id: string): Promise<void> {
    const client = await this.repository.findOne(id);
    
    await this.repository.delete(client);
  }

}