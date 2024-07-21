import { ApiResponse } from "../../../shared/util/http-response.adapter";
import { ListWorkoutUseCase } from "../usecases/list-workouts.usecase";
import { Request, Response } from 'express';

export class ListWorkoutController {
    constructor(private listUsecase: ListWorkoutUseCase){}

    public async list (req: Request, res: Response){
        try{
            const {id} = req.params
            
            const result = await this.listUsecase.execute(id)

            return res.status(result.code).send(result)
        }catch(error: any){
            return ApiResponse.serverError(res, error)
        }
    }
}