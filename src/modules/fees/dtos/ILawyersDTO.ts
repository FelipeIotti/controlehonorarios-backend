import { ObjectID } from "typeorm";

export interface ILawyersDTO {
  id?: ObjectID;

  name: string;

  oab: string;

  phone: string;

  email: string;

  specialty: string;

  cpf: string;
}