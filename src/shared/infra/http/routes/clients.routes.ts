import { Router } from "express";

import { CreateClientsController } from "@modules/fees/useCases/Clients/createClient/CreateClientController";
import { DeleteClientsController } from "@modules/fees/useCases/Clients/deleteClient/DeleteClientController";
import { ListClientsController } from "@modules/fees/useCases/Clients/listClient/listClientController";
import { UpdateClientsController } from "@modules/fees/useCases/Clients/updateClient/UpdateClientController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

export const clientsRoutes = Router();

const createClientsController = new CreateClientsController();
const listClientsController = new ListClientsController();
const updateClientsController = new UpdateClientsController();
const deleteClientsController = new DeleteClientsController();

clientsRoutes.post('/',ensureAdmin,createClientsController.handle);

clientsRoutes.get('/', listClientsController.handle);

clientsRoutes.put('/:id',ensureAdmin, updateClientsController.handle);

clientsRoutes.delete('/:id', ensureAdmin,deleteClientsController.handle);