import { Router } from "express";

import { CreateGroupActionController } from "@modules/fees/useCases/GroupAction/createGroupAction/CreateGroupActionController";
import { DeleteGroupActionController } from "@modules/fees/useCases/GroupAction/deleteGroupAction/DeleteGroupActionController";
import { ListGroupActionController } from "@modules/fees/useCases/GroupAction/listGroupAction/ListGroupActionController";
import { UpdateGroupActionController } from "@modules/fees/useCases/GroupAction/updateGroupAction/UpdateGroupActionController";
import { GeneralController } from "@modules/fees/useCases/GroupAction/general/GeneralController";
import { ensureAdmin } from "../middlewares/ensureAdmin";

export const groupActionRoutes = Router();

const createGroupActionController = new CreateGroupActionController();
const listGroupActionController = new ListGroupActionController();
const updateGroupActionController = new UpdateGroupActionController();
const deleteGroupActionController = new DeleteGroupActionController();
const generalController = new GeneralController();

groupActionRoutes.post('/',ensureAdmin, createGroupActionController.handle);

groupActionRoutes.get('/', listGroupActionController.handle);

groupActionRoutes.put('/:id',ensureAdmin, updateGroupActionController.handle);

groupActionRoutes.delete('/:id',ensureAdmin, deleteGroupActionController.handle);

groupActionRoutes.get('/general',generalController.handle);