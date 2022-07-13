import { IFeesDTO } from "@modules/fees/dtos/IFeesDTO";
import { IClientsRepository } from "@modules/fees/repositories/IClientsRepository";
import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { IGroupActionRepository } from "@modules/fees/repositories/IGroupActionRepository";
import { ILawyersRepository } from "@modules/fees/repositories/ILawyersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  lawyers: string;
  clients: string;
  group_action: string;
  opposing_party: string;
  value: string;
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

  async execute({id,clients,group_action,lawyers,opposing_party,status,payment_date,value,endDate}:IRequest): Promise<void> {
    const fees = await this.feesRepository.findById(id);

    const groupAction = await this.groupActionRepository.findByName(fees.group_action);

    const client = await this.clientsRepository.findByName(fees.clients);

    const lawyer = await this.lawyersRepository.findByName(fees.lawyers);
    
    fees.clients = clients;
    fees.group_action = group_action;
    fees.lawyers = lawyers;
    fees.opposing_party = opposing_party;
    fees.status = status;
    fees.payment_date = payment_date;
    fees.value = value;
    fees.endDate = endDate;

    if (groupAction){
      groupAction.name = group_action;
      await this.groupActionRepository.update(groupAction);
    }
    
    if(client){
      client.name = clients;
      await this.clientsRepository.update(client);
    }

    if(lawyer){
      lawyer.name = lawyers;
      await this.lawyersRepository.update(lawyer);
    }

    await this.feesRepository.update(fees);
  }
}