import { ILawyersDTO } from "@modules/fees/dtos/ILawyersDTO";
import { ILawyersRepository } from "@modules/fees/repositories/ILawyersRepository";
import { getMongoRepository, MongoRepository} from "typeorm";
import { Lawyers } from "../entities/Lawyers";

export class LawyersRepository implements ILawyersRepository {
  private repository: MongoRepository<Lawyers>;

  constructor(){
    this.repository = getMongoRepository(Lawyers);
  }

  async create({name,email,cpf,oab,phone,specialty}: ILawyersDTO): Promise<void> {
    const lawyers = this.repository.create({
      
      name,
      email,
      cpf,
      oab,
      phone,
      specialty
    });
  
    await this.repository.save(lawyers)
  }

  async findById(id: string): Promise<Lawyers> {
    const lawyers = await this.repository.findOne(id);
    return lawyers;
  }

  async findByName(name: string): Promise<Lawyers> {
    //console.log(client);
    const layers = await this.repository.findOne({
      where: {
       'name': { $eq: `${name}`}
      }
    });
    
    return layers;
  }

  async list(): Promise<Lawyers[]> {
    const lawyers = await this.repository.find();
    return lawyers;
  }

  async update(data: ILawyersDTO):Promise<void> {
    const lawyers = await this.repository.findOne(data.id);

    lawyers.name = data.name;
    lawyers.email = data.email;
    lawyers.cpf = data.cpf;
    lawyers.oab = data.oab;
    lawyers.phone = data.phone;
    lawyers.specialty = data.specialty;

    await this.repository.save(lawyers);
  }

  async delete(id: string): Promise<void> {
    const lawyer = await this.repository.findOne(id);
    
    await this.repository.delete(lawyer.id);
  }
}