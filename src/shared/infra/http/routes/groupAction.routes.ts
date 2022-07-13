import { Router } from "express";

import { CreateGroupActionController } from "@modules/fees/useCases/GroupAction/createGroupAction/CreateGroupActionController";
import { DeleteGroupActionController } from "@modules/fees/useCases/GroupAction/deleteGroupAction/DeleteGroupActionController";
import { ListGroupActionController } from "@modules/fees/useCases/GroupAction/listGroupAction/ListGroupActionController";
import { UpdateGroupActionController } from "@modules/fees/useCases/GroupAction/updateGroupAction/UpdateGroupActionController";
import { GeneralController } from "@modules/fees/useCases/GroupAction/general/GeneralController";

export const groupActionRoutes = Router();

const createGroupActionController = new CreateGroupActionController();
const listGroupActionController = new ListGroupActionController();
const updateGroupActionController = new UpdateGroupActionController();
const deleteGroupActionController = new DeleteGroupActionController();
const generalController = new GeneralController();

groupActionRoutes.post('/',createGroupActionController.handle);

groupActionRoutes.get('/', listGroupActionController.handle);

groupActionRoutes.put('/:id', updateGroupActionController.handle);

groupActionRoutes.delete('/:id', deleteGroupActionController.handle);

groupActionRoutes.get('/general',generalController.handle);