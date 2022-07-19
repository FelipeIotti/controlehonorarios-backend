import { IGeneralDTO } from "@modules/fees/dtos/IGeneralDTO";
import { IFeesRepository } from "@modules/fees/repositories/IFeesRepository";
import { inject, injectable } from "tsyringe";
import dayjs from "dayjs";

@injectable()
export class GeneralQuantityUseCase {
  constructor(
    @inject("FeesRepository")
    private feesRepository: IFeesRepository,
    ){}

  async execute(): Promise<IGeneralDTO[]> {
    
    const fees = await this.feesRepository.list();

     const newGeneralQuantity = fees.map(fees => {

      const newGeneral = {
        data: {
          id: fees.id,
          name: fees.opposing_party,
          created_at: fees.created_at,
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

        if(dayjs(fees.endDate).get('month')=== 0){
          newGeneral.january = newGeneral.january + 1;
        }

        if( dayjs(fees.endDate).get('month')=== 1){
          newGeneral.february = newGeneral.february + 1;
        }

        if( dayjs(fees.endDate).get('month')=== 2){
          newGeneral.march = newGeneral.march + 1;
        }

        if( dayjs(fees.endDate).get('month')=== 3){
          newGeneral.april = newGeneral.april + 1;
        }

        if( dayjs(fees.endDate).get('month')=== 4){
          newGeneral.may = newGeneral.may + 1;
        }

        if( dayjs(fees.endDate).get('month')=== 5){
          newGeneral.june = newGeneral.june + 1;
        }

        if( dayjs(fees.endDate).get('month')=== 6){
          newGeneral.july = newGeneral.july + 1;
        }

        if( dayjs(fees.endDate).get('month')=== 7){
          newGeneral.august = newGeneral.august + 1;
        }

        if( dayjs(fees.endDate).get('month')=== 8){
          newGeneral.september = newGeneral.september + 1;
        }

        if( dayjs(fees.endDate).get('month')=== 9){
          newGeneral.october = newGeneral.october + 1;
        }

        if( dayjs(fees.endDate).get('month')=== 10){
          newGeneral.november = newGeneral.november + 1;
        }

        if(dayjs(fees.endDate).get('month')=== 11){
          newGeneral.december = newGeneral.december + 1;
        }
        //2

      
  
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
  
    return newGeneralQuantity;
  }
}