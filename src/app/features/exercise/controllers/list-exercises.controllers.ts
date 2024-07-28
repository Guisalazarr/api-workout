import { ApiResponse } from "../../../shared/util/http-response.adapter";
import { ListExerciseUsecase } from "../usecasess/list-exercise.usecase";
import { Request, Response } from 'express';


export class ListExeciseController{
    constructor(private listUsecase: ListExerciseUsecase){}

    public async list (req: Request, res: Response){
        try{
            const {workoutId} = req.params

            const result = await this.listUsecase.execute(workoutId)

            return res.status(result.code).send(result)

        }catch(error: any){
            return ApiResponse.serverError(res, error)
        }
    }
}