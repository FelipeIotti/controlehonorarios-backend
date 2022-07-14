import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { ILawyersRepository } from "@modules/fees/repositories/ILawyersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  id: string;
}

@injectable()
export class DeleteLawyersUseCase {
  constructor(
      @inject("LawyersRepository")
      private lawyersRepository: ILawyersRepository,
      @inject("FeesRepository")
      private feesRepository: IFeesRepository,
    ){}

  async execute({id}:IRequest): Promise<void> {

    const lawyer = await this.lawyersRepository.findById(id);
    

    const fees = await this.feesRepository.findByNameLawyer(lawyer.name);
    
    if (fees) {
      await this.feesRepository.delete(String(fees.id));
    }
    
    
    await this.lawyersRepository.delete(id);
  }
}