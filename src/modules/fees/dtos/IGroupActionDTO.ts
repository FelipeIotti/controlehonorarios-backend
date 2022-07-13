import { ObjectID } from "typeorm";

export interface IGroupActionDTO {
  id?: ObjectID;
  name: string;
}