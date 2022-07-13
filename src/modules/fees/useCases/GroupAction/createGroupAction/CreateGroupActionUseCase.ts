import { IGroupActionRepository } from "@modules/fees/repositories/IGroupActionRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
}

@injectable()
export class CreateGroupActionUseCase {
  constructor(
    @inject("GroupActionRepository")
    private groupActionRepository: IGroupActionRepository,
   
  ) {}

  async execute({name}: IRequest): Promise<void> {

    await this.groupActionRepository.create({name});
  }
}