import { inject, injectable } from "tsyringe";
import { Lawyers } from "../../../infra/typeorm/entities/Lawyers";
import { ILawyersRepository } from "../../../repositories/ILawyersRepository";

@injectable()
export class ListLawyersUseCase {
  constructor(
    @inject('LawyersRepository')
    private lawyersRepository: ILawyersRepository) {}

  async execute(): Promise<Lawyers[]> {
    const lawyers = await this.lawyersRepository.list();

    return lawyers;
  }
}