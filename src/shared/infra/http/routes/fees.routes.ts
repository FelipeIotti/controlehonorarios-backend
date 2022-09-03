import { Router } from "express";

import { CreateFeesController } from "@modules/fees/useCases/Fees/createFees/CreateFeesController";
import { DeleteFeesController } from "@modules/fees/useCases/Fees/deleteFees/DeleteFeesController";
import { ListFeesController } from "@modules/fees/useCases/Fees/listFees/ListFeesController";
import { UpdateFeesController } from "@modules/fees/useCases/Fees/updateFees/UpdateFeesController";
import {GeneralQuantityController} from '@modules/fees/useCases/Fees/generalQuantity/GeneralController'
import {GeneralStatusController} from '@modules/fees/useCases/Fees/generalStatus/GeneralController'
import { ensureAdmin } from "../middlewares/ensureAdmin";

export const feesRoutes = Router();

const createFeesController = new CreateFeesController();
const listFeesController = new ListFeesController();
const updateFeesController = new UpdateFeesController();
const deleteFeesController = new DeleteFeesController();
const generalQuantityController = new GeneralQuantityController();
const generalStatusController = new GeneralStatusController();

feesRoutes.post('/',ensureAdmin,createFeesController.handle);

feesRoutes.get('/', listFeesController.handle);

feesRoutes.put('/:id',ensureAdmin, updateFeesController.handle);

feesRoutes.delete('/:id',ensureAdmin, deleteFeesController.handle);

feesRoutes.get('/generalQuantity', generalQuantityController.handle);

feesRoutes.get('/generalStatus', generalStatusController.handle);