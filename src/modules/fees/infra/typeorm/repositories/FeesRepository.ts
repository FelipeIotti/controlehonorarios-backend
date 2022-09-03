import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { getMongoRepository, MongoRepository} from "typeorm";
import { Fees } from "../entities/Fees";
import {IFeesDTO} from '@modules/fees/dtos/IFeesDTO'
// import { Clients } from "../entities/Clients";
// import { GroupAction } from "../entities/GroupAction";
// import { Lawyers } from "../entities/Lawyers";

export class FeesRepository implements IFeesRepository {
  private repository: MongoRepository<Fees>;

  // private groupActionRepository: MongoRepository<GroupAction>;

  // private lawyersRepository: MongoRepository<Lawyers>;

  // private clientsRepository: MongoRepository<Clients>;

  constructor(){
    this.repository = getMongoRepository(Fees);

    // this.groupActionRepository = getMongoRepository(GroupAction);

    // this.lawyersRepository = getMongoRepository(Lawyers);

    // this.clientsRepository = getMongoRepository(Clients);
  }

  async create({totalValue,clients,group_action,lawyers1,lawyers2,lawyers3,lawyers4,opposing_party,status,payment_date,value1,value2,value3,value4,endDate}: IFeesDTO): Promise<void> {
    const fees = this.repository.create({
      totalValue,
      clients,
      group_action,
      lawyers1,
      lawyers2,
      lawyers3,
      lawyers4,
      opposing_party,
      status,
      payment_date,
      value1,
      value2,
      value3,
      value4,
      endDate
      });
    await this.repository.save(fees);
  }

  async findByName(name: string): Promise<Fees> {
    //console.log(client);
    const fees = await this.repository.findOne({
      where: {
       'name': { $eq: `${name}`}
      }
    });
    return fees;
  }
  
  async findByNameClient(name: string): Promise<Fees> {

    const fees = await this.repository.findOne({
      where: {
       'clients': { $eq: `${name}`}
      }
    });

    return fees;
  }

  async findByNameLawyer1(name: string): Promise<Fees> {

    const fees = await this.repository.findOne({
      where: {
       'lawyers1': { $eq: `${name}`}
      }
    });

    return fees;
  }

  async findByNameLawyer2(name: string): Promise<Fees> {

    const fees = await this.repository.findOne({
      where: {
       'lawyers2': { $eq: `${name}`}
      }
    });

    return fees;
  }

  async findByNameLawyer3(name: string): Promise<Fees> {

    const fees = await this.repository.findOne({
      where: {
       'lawyers3': { $eq: `${name}`}
      }
    });

    return fees;
  }

  async findByNameLawyer4(name: string): Promise<Fees> {

    const fees = await this.repository.findOne({
      where: {
       'lawyers4': { $eq: `${name}`}
      }
    });

    return fees;
  }


  async findByNameGroupAction(name: string): Promise<Fees> {

    const fees = await this.repository.findOne({
      where: {
       'group_action': { $eq: `${name}`}
      }
    });

    return fees;
  }

  async findById(id: string): Promise<Fees> {
    const fees = await this.repository.findOne(id);
    return fees;
  }

  async list(): Promise<Fees[]> {
    const client = await this.repository.find();
    return client;
  }

  async update(data:IFeesDTO):Promise<void> {
    const fees = await this.repository.findOne(data.id);

    fees.lawyers1 = data.lawyers1;
    fees.lawyers2 = data.lawyers2;
    fees.clients = data.clients;
    fees.group_action = data.group_action;
    fees.opposing_party = data.opposing_party;
    fees.value1 = data.value1;
    fees.value2 = data.value2;
    fees.status = data.status;
    fees.endDate = data.endDate;
    fees.payment_date = data.payment_date;

    await this.repository.save(fees);
  }

  async delete(id: string): Promise<void> {
    const fees = await this.repository.findOne(id);
    
    await this.repository.delete(fees);
  }
}