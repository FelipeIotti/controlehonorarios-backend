import { IGroupActionDTO } from "@modules/fees/dtos/IGroupActionDTO";
import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { IGroupActionRepository } from "@modules/fees/repositories/IGroupActionRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
  name: string;
}

@injectable()
export class UpdateGroupActionUseCase {
  constructor(
      @inject("FeesRepository")
      private feesRepository: IFeesRepository,
      @inject("GroupActionRepository")
      private groupActionRepository: IGroupActionRepository,
    ){}

  async execute({id,name}:IRequest): Promise<void> {

    const groupAction = await this.groupActionRepository.findById(id);

    const fees = await this.feesRepository.findByNameGroupAction(groupAction.name);
    
    if(fees){
      fees.group_action = name;
      await this.feesRepository.update(fees);
    }
    groupAction.name = name;

    await this.groupActionRepository.update(groupAction);
  }
}