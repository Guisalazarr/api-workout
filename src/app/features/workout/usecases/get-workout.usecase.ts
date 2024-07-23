import { Result } from "../../../shared/contracts/result.contract";
import { Return } from "../../../shared/util/return.adpter";
import { UserRepository } from "../../user/repositories/user.repository";
import { WorkoutRepository } from "../repositories/workout.repository";


interface GetUSerParamns{
    userId: string,
    workoutId: string
}

export class GetWorkoutUsecase{
    constructor(
        private userRepository: UserRepository,
        private workoutRepository: WorkoutRepository
    ){}

    public async execute(params: GetUSerParamns): Promise<Result>{
        const user = await this.userRepository.get(params.userId)

        if(!user) return  Return.notFound('User')

        const workout = await this.workoutRepository.get(params.workoutId)

        if(!workout) return Return.notFound('Workout')
        
        return Return.success('Workout succesfully obtained', workout.toJson())
    }
}