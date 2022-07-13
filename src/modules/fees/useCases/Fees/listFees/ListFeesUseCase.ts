import { inject, injectable } from "tsyringe";
import { Fees } from "../../../infra/typeorm/entities/Fees";
import { IFeesRepository } from "../../../repositories/IFeesRepository";

@injectable()
export class ListFeesUseCase {
  constructor(
    @inject('FeesRepository')
    private feesRepository: IFeesRepository) {}

  async execute(): Promise<Fees[]> {
    const fees = await this.feesRepository.list();

    return fees;
  }
}