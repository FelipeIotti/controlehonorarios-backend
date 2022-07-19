import { IFeesDTO } from "@modules/fees/dtos/IFeesDTO";
import { IClientsRepository } from "@modules/fees/repositories/IClientsRepository";
import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { IGroupActionRepository } from "@modules/fees/repositories/IGroupActionRepository";
import { ILawyersRepository } from "@modules/fees/repositories/ILawyersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  lawyers1: string;
  lawyers2: string;
  lawyers3: string;
  lawyers4: string;
  clients: string;
  group_action: string;
  opposing_party: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  status: string;
  endDate: Date;
  payment_date: Date;
}

@injectable()
export class UpdateFeesUseCase {
  constructor(
      @inject("FeesRepository")
      private feesRepository: IFeesRepository,
      @inject("GroupActionRepository")
      private groupActionRepository: IGroupActionRepository,
      @inject("ClientsRepository")
      private clientsRepository: IClientsRepository,
      @inject("LawyersRepository")
      private lawyersRepository: ILawyersRepository,
    ){}

  async execute({id,clients,group_action,lawyers1,lawyers2,lawyers3,lawyers4,opposing_party,status,payment_date,value1,value2,value3,value4,endDate}:IRequest): Promise<void> {
    const fees = await this.feesRepository.findById(id);

    const groupAction = await this.groupActionRepository.findByName(fees.group_action);

    const client = await this.clientsRepository.findByName(fees.clients);

    const lawyer1 = await this.lawyersRepository.findByName(fees.lawyers1);

    const lawyer2 = await this.lawyersRepository.findByName(fees.lawyers2);

    const lawyer3 = await this.lawyersRepository.findByName(fees.lawyers2);

    const lawyer4 = await this.lawyersRepository.findByName(fees.lawyers4);
    
    fees.clients = clients;
    fees.group_action = group_action;
    fees.lawyers1 = lawyers1;
    fees.lawyers2 = lawyers2;
    fees.lawyers3 = lawyers3;
    fees.lawyers4 = lawyers4;
    fees.opposing_party = opposing_party;
    fees.status = status;
    fees.payment_date = payment_date;
    fees.value1 = value1;
    fees.value2 = value2;
    fees.endDate = endDate;

    if (groupAction){
      groupAction.name = group_action;
      await this.groupActionRepository.update(groupAction);
    }
    
    if(client){
      client.name = clients;
      await this.clientsRepository.update(client);
    }

    if(lawyer1){
      lawyer1.name = lawyers1;
      await this.lawyersRepository.update(lawyer1);
    }

    if(lawyer2){
      lawyer2.name = lawyers2;
      await this.lawyersRepository.update(lawyer2);
    }

    if(lawyer3){
      lawyer3.name = lawyers3;
      await this.lawyersRepository.update(lawyer3);
    }

    if(lawyer4){
      lawyer4.name = lawyers4;
      await this.lawyersRepository.update(lawyer4);
    }


    await this.feesRepository.update(fees);
  }
}