import { IGeneralDTO } from "@modules/fees/dtos/IGeneralDTO";
import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { inject, injectable } from "tsyringe";
import { IGroupActionRepository } from "../../../repositories/IGroupActionRepository";
import dayjs from "dayjs";

@injectable()
export class GeneralUseCase {
  constructor(
    @inject('GroupActionRepository')
    private groupActionRepository: IGroupActionRepository,
    @inject("FeesRepository")
    private feesRepository: IFeesRepository,
    ){}

  async execute(): Promise<IGeneralDTO[]> {
    const groupAction = await this.groupActionRepository.list();
    const fees = await this.feesRepository.list();

    const newGeneral = groupAction.map(groupAction => {

      const newGeneral = {
        data: {
          id: groupAction.id,
          name: groupAction.name,
          created_at: groupAction.created_at,
        },
        january: 0,
        february: 0,
        march: 0,
        april: 0,
        may: 0,
        june: 0,
        july: 0,
        august: 0,
        september: 0,
        october: 0,
        november: 0,
        december: 0,
        total: 0,
      }
  
      fees.map(fees =>{

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 0){
          newGeneral.january = newGeneral.january + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 1){
          newGeneral.february = newGeneral.february + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 2){
          newGeneral.march = newGeneral.march + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 3){
          newGeneral.april = newGeneral.april + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 4){
          newGeneral.may = newGeneral.may + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 5){
          newGeneral.june = newGeneral.june + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 6){
          newGeneral.july = newGeneral.july + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 7){
          newGeneral.august = newGeneral.august + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 8){
          newGeneral.september = newGeneral.september + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 9){
          newGeneral.october = newGeneral.october + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 10){
          newGeneral.november = newGeneral.november + Number(fees.value);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 11){
          newGeneral.december = newGeneral.december + Number(fees.value);
        }
      });
  
      newGeneral.total = newGeneral.january + 
      newGeneral.february + 
      newGeneral.march + 
      newGeneral.april + 
      newGeneral.may + 
      newGeneral.june + 
      newGeneral.july + 
      newGeneral.august +
      newGeneral.september +
      newGeneral.october +
      newGeneral.november +
      newGeneral.december;
  
      return newGeneral;
    });
  
    

    return newGeneral;
  }
}