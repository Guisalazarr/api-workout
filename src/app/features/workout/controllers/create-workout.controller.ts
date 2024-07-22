import { ApiResponse } from "../../../shared/util/http-response.adapter";
import { CreateWorkoutUsecase } from "../usecases/create-workout.usecase";
import { Request, Response } from 'express';

export class CreateWorkoutController {
    constructor(private createUsecase: CreateWorkoutUsecase){}
    
    public async create(req: Request, res: Response){
        try{
            const {id} = req.params
            const {name, repetitions, series, weeks, cardio, description} = req.body

            const result = await this.createUsecase.execute({
                idUser: id,
                name,
                repetitions,
                series,
                weeks,
                cardio,
                description,
            })

            return res.status(result.code).send(result)
        }catch(error:any){
            return ApiResponse.serverError(res, error)
        }
    }
}