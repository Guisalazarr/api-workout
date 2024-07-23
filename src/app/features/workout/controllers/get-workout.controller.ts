import { ApiResponse } from "../../../shared/util/http-response.adapter";
import { GetWorkoutUsecase } from "../usecases/get-workout.usecase";
import { Request, Response } from 'express';


export class GetWorkoutController {
    constructor (private getUsecase: GetWorkoutUsecase){}

    public async get (req: Request, res: Response){
        try{

            const {id, workoutId} = req.params

            const result = await this.getUsecase.execute({
                userId:id,
                workoutId
            })

            return res.status(result.code).send(result)

        }catch(error:any){
            return ApiResponse.serverError(res, error)
        }
    }
}