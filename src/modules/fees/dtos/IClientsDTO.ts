import { ObjectID } from "typeorm";

export interface IClientsDTO {
  id?: ObjectID;
  name: string;
}