import { Router } from "express";

import { CreateLawyersController } from "@modules/fees/useCases/Lawyer/createLawyer/CreateLawyerController";
import { DeleteLawyersController } from "@modules/fees/useCases/Lawyer/deleteLawyers/DeleteLawyersController";
import { ListLawyersController } from "@modules/fees/useCases/Lawyer/listLawyers/ListLawyersController";
import { UpdateLawyersController } from "@modules/fees/useCases/Lawyer/updateLawyers/UpdateLawyersController";
import { GeneralController } from "@modules/fees/useCases/Lawyer/general/GeneralController";
import { GeneralQuantityController } from "@modules/fees/useCases/Lawyer/generalQuantity/GeneralController";
import { GeneralStatusController } from "@modules/fees/useCases/Lawyer/generalStatus/GeneralController";

export const lawyersRoutes = Router();

const createLawyersController = new CreateLawyersController();
const listLawyersController = new ListLawyersController();
const updateLawyersController = new UpdateLawyersController();
const deleteLawyersController = new DeleteLawyersController();
const generalController = new GeneralController();
const generalQuantityController = new GeneralQuantityController();
const generalStatusController = new GeneralStatusController();

lawyersRoutes.post('/',createLawyersController.handle);

lawyersRoutes.get('/', listLawyersController.handle);

lawyersRoutes.put('/:id', updateLawyersController.handle);

lawyersRoutes.delete('/:id', deleteLawyersController.handle);

lawyersRoutes.get('/general', generalController.handle);

lawyersRoutes.get('/generalQuantity', generalQuantityController.handle);

lawyersRoutes.get('/generalStatus', generalStatusController.handle);

