import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { IGroupActionRepository } from "@modules/fees/repositories/IGroupActionRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteGroupActionUseCase {
  constructor(
      @inject("GroupActionRepository")
      private groupActionRepository: IGroupActionRepository,
      @inject("FeesRepository")
      private feesRepository: IFeesRepository,
    ){}

  async execute({id}:IRequest): Promise<void> {
    const groupAction = await this.groupActionRepository.findById(id);

    const fees = await this.feesRepository.findByNameGroupAction(groupAction.name);

    if(fees){
      await this.feesRepository.delete(String(fees.id));
    }

    await this.groupActionRepository.delete(id);
  }
}