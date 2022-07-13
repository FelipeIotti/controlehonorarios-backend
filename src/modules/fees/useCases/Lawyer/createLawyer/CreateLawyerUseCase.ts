import { ILawyersRepository } from "@modules/fees/repositories/ILawyersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  name: string;
  oab: string;
  phone: string;
  email: string;
  specialty: string;
  cpf: string;
}

@injectable()
export class CreateLawyersUseCase {
  constructor(
    @inject("LawyersRepository")
    private lawyersRepository: ILawyersRepository,
   
  ) {}

  async execute({name, oab, phone, email, specialty, cpf}: IRequest): Promise<void> {

    await this.lawyersRepository.create({name, oab, phone, email, specialty, cpf});
  }
}