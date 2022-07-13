import { inject, injectable } from "tsyringe";
import { GroupAction } from "../../../infra/typeorm/entities/GroupAction";
import { IGroupActionRepository } from "../../../repositories/IGroupActionRepository";

@injectable()
export class ListGroupActionUseCase {
  constructor(
    @inject('GroupActionRepository')
    private groupActionRepository: IGroupActionRepository) {}

  async execute(): Promise<GroupAction[]> {
    const groupAction = await this.groupActionRepository.list();

    return groupAction;
  }
}