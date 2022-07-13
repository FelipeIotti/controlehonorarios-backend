import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteFeesUseCase {
  constructor(
      @inject("FeesRepository")
      private feesRepository: IFeesRepository,
    ){}

  async execute({id}:IRequest): Promise<void> {

    await this.feesRepository.delete(id);
  }
}