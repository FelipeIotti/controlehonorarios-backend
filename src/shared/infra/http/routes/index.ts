import { Router } from "express";
import { clientsRoutes } from "./clients.routes";
import { feesRoutes } from "./fees.routes";
import { groupActionRoutes } from "./groupAction.routes";
import { lawyersRoutes } from "./lawyers.routes";

export const router = Router();

router.use('/clients',clientsRoutes);
router.use('/fees', feesRoutes);
router.use('/groupAction', groupActionRoutes);
router.use('/lawyers', lawyersRoutes);

