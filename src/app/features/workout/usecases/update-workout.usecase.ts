import { Return } from "../../../shared/util/return.adpter";
import { UserRepository } from "../../user/repositories/user.repository";
import { WorkoutRepository } from "../repositories/workout.repository";
import { editWorkout } from "../util/function.update";


export interface UpdateWorkoutParams{
    userId: string,
    workoutId:string,
    name: string,
    repetitions?: number,
    series?: number,
    weeks?: number,
    cardio?: string,
    description?: string,
}

export class UpdateWorkoutUsecase{
    constructor(
        private userRepository: UserRepository,
        private workoutRepository: WorkoutRepository
    ){}

    public async execute(params: UpdateWorkoutParams){

        const user = await this.userRepository.get(params.userId)
        if(!user) return Return.notFound('User')

        const workout = await this.workoutRepository.get(params.workoutId)
        if(!workout) return Return.notFound('Workout')

        const workoutEdited = editWorkout(params, workout)
        await this.workoutRepository.update(workoutEdited)

        const workouts = await this.workoutRepository.list()
        const result = workouts.map((workout)=> workout.toJson())

        return Return.success('Workout successfully Edited', result)

    }
}


