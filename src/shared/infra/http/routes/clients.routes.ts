import { Router } from "express";

import { CreateClientsController } from "@modules/fees/useCases/Clients/createClient/CreateClientController";
import { DeleteClientsController } from "@modules/fees/useCases/Clients/deleteClient/DeleteClientController";
import { ListClientsController } from "@modules/fees/useCases/Clients/listClient/listClientController";
import { UpdateClientsController } from "@modules/fees/useCases/Clients/updateClient/UpdateClientController";

export const clientsRoutes = Router();

const createClientsController = new CreateClientsController();
const listClientsController = new ListClientsController();
const updateClientsController = new UpdateClientsController();
const deleteClientsController = new DeleteClientsController();

clientsRoutes.post('/',createClientsController.handle);

clientsRoutes.get('/', listClientsController.handle);

clientsRoutes.put('/:id', updateClientsController.handle);

clientsRoutes.delete('/:id', deleteClientsController.handle);