
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import {DeleteFeesUseCase} from './DeleteFeesUseCase';

export class DeleteFeesController {
  
  async handle(request: Request, response: Response): Promise<Response> {
    const {id} = request.params;
    
    const deleteFeesUseCase = container.resolve(DeleteFeesUseCase);
    
    await deleteFeesUseCase.execute({id});
    

    return response.status(201).send();
  }
}