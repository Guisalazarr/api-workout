import { Result } from "../../../shared/contracts/result.contract";
import { Return } from "../../../shared/util/return.adpter";
import { UserRepository } from "../../user/repositories/user.repository";
import { WorkoutRepository } from "../repositories/workout.repository";


export class ListWorkoutUseCase{
    constructor(
        private userRepository: UserRepository,
        private workoutRepository: WorkoutRepository
    ){}
    
    public async execute(userId: string): Promise <Result>{
        const user = await this.userRepository.get(userId)

        if(!user) return Return.notFound('User')

        const workouts = await this.workoutRepository.list()

        const result = workouts.map((workout)=> workout.toJson())

        return Return.success('Workouts successfuly listed', result)
    }
}