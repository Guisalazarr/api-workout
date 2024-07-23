import { Return } from "../../../shared/util/return.adpter";
import { UserRepository } from "../../user/repositories/user.repository";
import { WorkoutRepository } from "../repositories/workout.repository";


interface DeleteWorkoutParams{
    userId: string,
    workoutId: string
}

export class DeleteWorkoutUsecase{
    constructor (
        private userRepository: UserRepository,
        private workoutRepository: WorkoutRepository
    ){}

    public async execute (params: DeleteWorkoutParams){
        const user = await this.userRepository.get(params.userId)

        if(!user) return Return.notFound('User')

        const workoutDeleted = await this.workoutRepository.delete(params.workoutId)

        if (workoutDeleted == 0 ) return Return.notFound('Workout')

        const result = await this.workoutRepository.list()

        return Return.success(
            'Workout successfully listed',
        result.map((workout)=> workout.toJson())
    )
    }
}