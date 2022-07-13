import {container} from 'tsyringe';



import { ClientsRepository } from '@modules/fees/infra/typeorm/repositories/ClientsRepository';
import { IClientsRepository } from '@modules/fees/repositories/IClientsRepository';

import { IFeesRepository } from '@modules/fees/repositories/IFeesRepository';
import { FeesRepository } from '@modules/fees/infra/typeorm/repositories/FeesRepository';

import { GroupActionRepository } from '@modules/fees/infra/typeorm/repositories/GroupActionRepository';
import { IGroupActionRepository } from '@modules/fees/repositories/IGroupActionRepository';

import { ILawyersRepository } from '@modules/fees/repositories/ILawyersRepository';
import { LawyersRepository } from '@modules/fees/infra/typeorm/repositories/LawyersRepository';


container.registerSingleton<IClientsRepository>('ClientsRepository',ClientsRepository);

container.registerSingleton<IFeesRepository>('FeesRepository',FeesRepository);

container.registerSingleton<IGroupActionRepository>('GroupActionRepository',GroupActionRepository);

container.registerSingleton<ILawyersRepository>('LawyersRepository',LawyersRepository);