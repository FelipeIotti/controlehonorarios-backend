import { Router } from "express";


import { CreateUsersController } from "@modules/accounts/useCases/createUsers/CreateUsersController";

import { ensureAuthenticated } from "@shared/infra/http/middlewares/ensureAuthenticated";

export const usersRoutes = Router();


const createUserController = new CreateUsersController();

usersRoutes.post('/', createUserController.handle);

