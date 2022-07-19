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
        //1
        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 0){
          newGeneral.january = newGeneral.january + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 1){
          newGeneral.february = newGeneral.february + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 2){
          newGeneral.march = newGeneral.march + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 3){
          newGeneral.april = newGeneral.april + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 4){
          newGeneral.may = newGeneral.may + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 5){
          newGeneral.june = newGeneral.june + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 6){
          newGeneral.july = newGeneral.july + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 7){
          newGeneral.august = newGeneral.august + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 8){
          newGeneral.september = newGeneral.september + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 9){
          newGeneral.october = newGeneral.october + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 10){
          newGeneral.november = newGeneral.november + Number(fees.value1);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 11){
          newGeneral.december = newGeneral.december + Number(fees.value1);
        }
        //2
        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 0){
          newGeneral.january = newGeneral.january + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 1){
          newGeneral.february = newGeneral.february + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 2){
          newGeneral.march = newGeneral.march + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 3){
          newGeneral.april = newGeneral.april + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 4){
          newGeneral.may = newGeneral.may + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 5){
          newGeneral.june = newGeneral.june + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 6){
          newGeneral.july = newGeneral.july + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 7){
          newGeneral.august = newGeneral.august + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 8){
          newGeneral.september = newGeneral.september + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 9){
          newGeneral.october = newGeneral.october + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 10){
          newGeneral.november = newGeneral.november + Number(fees.value2);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 11){
          newGeneral.december = newGeneral.december + Number(fees.value2);
        }
        //3
        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 0){
          newGeneral.january = newGeneral.january + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 1){
          newGeneral.february = newGeneral.february + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 2){
          newGeneral.march = newGeneral.march + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 3){
          newGeneral.april = newGeneral.april + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 4){
          newGeneral.may = newGeneral.may + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 5){
          newGeneral.june = newGeneral.june + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 6){
          newGeneral.july = newGeneral.july + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 7){
          newGeneral.august = newGeneral.august + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 8){
          newGeneral.september = newGeneral.september + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 9){
          newGeneral.october = newGeneral.october + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 10){
          newGeneral.november = newGeneral.november + Number(fees.value3);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 11){
          newGeneral.december = newGeneral.december + Number(fees.value3);
        }
        //4
        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 0){
          newGeneral.january = newGeneral.january + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 1){
          newGeneral.february = newGeneral.february + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 2){
          newGeneral.march = newGeneral.march + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 3){
          newGeneral.april = newGeneral.april + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 4){
          newGeneral.may = newGeneral.may + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 5){
          newGeneral.june = newGeneral.june + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 6){
          newGeneral.july = newGeneral.july + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 7){
          newGeneral.august = newGeneral.august + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 8){
          newGeneral.september = newGeneral.september + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 9){
          newGeneral.october = newGeneral.october + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 10){
          newGeneral.november = newGeneral.november + Number(fees.value4);
        }

        if(fees.group_action=== groupAction.name && dayjs(fees.endDate).get('month')=== 11){
          newGeneral.december = newGeneral.december + Number(fees.value4);
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