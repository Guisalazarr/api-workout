import { DeleteWorkoutUsecase } from "../usecases/delete-workout.usecase";
import { ApiResponse } from '../../../shared/util/http-response.adapter';
import { Request, Response } from 'express';


export class DeleteWorkoutController{
    constructor(private deleteUsecase: DeleteWorkoutUsecase){}

    public async delete (req: Request, res: Response){
        try{
            const {id, workoutId} = req.params

            const result = await this.deleteUsecase.execute({
                userId: id,
                workoutId
            })

            return res.status(result.code).send(result)

        }catch(error: any){
            return ApiResponse.serverError(res, error)
        }
    }
}