import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  clients: string;
  group_action: string;
  lawyers1: string;
  lawyers2: string;
  lawyers3: string;
  lawyers4: string;
  opposing_party: string;
  status: string;
  payment_date: Date;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  endDate: Date;
}

@injectable()
export class CreateFeesUseCase {
  constructor(
    @inject("FeesRepository")
    private feesRepository: IFeesRepository,
   
  ) {}

  async execute({clients,group_action,lawyers1,lawyers2,lawyers3,lawyers4,opposing_party,status,payment_date,value1,value2,value3,value4,endDate }: IRequest): Promise<void> {

    // const groupAction = await this.groupActionRepository.findByName(group_action);

    // const client = await this.clientsRepository.findByName(clients);

    // const lawyer = await this.lawyersRepository.findByName(lawyers);
    await this.feesRepository.create({clients,group_action,lawyers1,lawyers2,lawyers3,lawyers4,opposing_party,status,payment_date,value1,value2,value3,value4,endDate});
  }
}
