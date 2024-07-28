import { Response ,Request} from "express";
import { UpdateWorkoutUsecase } from "../usecases/update-workout.usecase";
import { ApiResponse } from "../../../shared/util/http-response.adapter";


export class UpdateWorkoutController {
    constructor(private updateUsecase: UpdateWorkoutUsecase){}

    public async update(req: Request, res: Response){
        try{
            const {id, workoutId} = req.params
            const {name, repetitions, series, weeks, cardio, description} = req.body

            const result = await this.updateUsecase.execute({
                userId: id,
                workoutId,
                name,
                repetitions,
                series,
                weeks,
                cardio,
                description
            })

            return res.status(result.code).send(result)

        }catch(error: any){
            return ApiResponse.serverError(res, error)
        }
    }
}