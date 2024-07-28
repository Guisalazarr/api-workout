import { ApiResponse } from "../../../shared/util/http-response.adapter";
import { GetExerciseUsecase } from "../usecasess/get-exercise.usecase";
import { Request, Response } from 'express';


export class GetExerciseController {
    constructor (private getUsecase: GetExerciseUsecase){}

    public async get(req: Request, res: Response){
        try{
            const {workoutId, exerciseId} = req.params

            const result = await this.getUsecase.execute({
                workoutId,
                exerciseId
            })

            return res.status(result.code).send(result)

        }catch(error: any){
            return ApiResponse.serverError(res, error)
        }
    }
}