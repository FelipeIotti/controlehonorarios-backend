import { Router } from "express";

import { CreateFeesController } from "@modules/fees/useCases/Fees/createFees/CreateFeesController";
import { DeleteFeesController } from "@modules/fees/useCases/Fees/deleteFees/DeleteFeesController";
import { ListFeesController } from "@modules/fees/useCases/Fees/listFees/ListFeesController";
import { UpdateFeesController } from "@modules/fees/useCases/Fees/updateFees/UpdateFeesController";

export const feesRoutes = Router();

const createFeesController = new CreateFeesController();
const listFeesController = new ListFeesController();
const updateFeesController = new UpdateFeesController();
const deleteFeesController = new DeleteFeesController();

feesRoutes.post('/',createFeesController.handle);

feesRoutes.get('/', listFeesController.handle);

feesRoutes.put('/:id', updateFeesController.handle);

feesRoutes.delete('/:id', deleteFeesController.handle);