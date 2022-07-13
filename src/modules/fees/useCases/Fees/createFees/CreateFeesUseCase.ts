import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  clients: string;
  group_action: string;
  lawyers: string;
  opposing_party: string;
  status: string;
  payment_date: Date;
  value: string;
  endDate: Date;
}

@injectable()
export class CreateFeesUseCase {
  constructor(
    @inject("FeesRepository")
    private feesRepository: IFeesRepository,
   
  ) {}

  async execute({clients,group_action,lawyers,opposing_party,status,payment_date,value,endDate }: IRequest): Promise<void> {

    // const groupAction = await this.groupActionRepository.findByName(group_action);

    // const client = await this.clientsRepository.findByName(clients);

    // const lawyer = await this.lawyersRepository.findByName(lawyers);
    await this.feesRepository.create({clients,group_action,lawyers,opposing_party,status,payment_date,value,endDate});
  }
}
