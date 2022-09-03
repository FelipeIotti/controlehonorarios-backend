import { Router } from "express"
import { AuthenticateUserController } from "@modules/accounts/useCases/authenticateUser/AuthenticateUserController";
import { RefreshTokenController } from "@modules/accounts/useCases/refreshToken/RefreshTokenController";
import { CreateUsersController } from "@modules/accounts/useCases/createUsers/CreateUsersController";
import { AuthenticateRefreshController } from "@modules/accounts/useCases/authenticateRefresh/AuthenticateRefreshController";

export const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const authenticateRefreshController = new AuthenticateRefreshController();
const refreshTokenController = new RefreshTokenController();
const createUsersController = new CreateUsersController();

authenticateRoutes.post('/sessions', authenticateUserController.handle);
authenticateRoutes.get('/sessions', authenticateRefreshController.handle);
authenticateRoutes.post('/sessions-create', createUsersController.handle);
authenticateRoutes.post('/refresh-token', refreshTokenController.handle);