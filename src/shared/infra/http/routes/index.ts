import { Router } from "express";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { authenticateRoutes } from "./authenticate.routes";
import { clientsRoutes } from "./clients.routes";
import { feesRoutes } from "./fees.routes";
import { groupActionRoutes } from "./groupAction.routes";
import { lawyersRoutes } from "./lawyers.routes";
import { usersRoutes } from "./users.routes";

export const router = Router();

router.use('/clients',ensureAuthenticated,clientsRoutes);
router.use('/fees',ensureAuthenticated, feesRoutes);
router.use('/groupAction',ensureAuthenticated, groupActionRoutes);
router.use('/lawyers',ensureAuthenticated, lawyersRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);
