import { ObjectID } from "typeorm";

export interface IFeesDTO {
  id?: ObjectID;

  lawyers: string;

  clients: string;

  group_action: string;

  opposing_party: string;

  value: string;

  status: string;

  endDate: Date;

  payment_date: Date;
}