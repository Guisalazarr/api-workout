import { Workout } from "../../../models/workout.models";
import { Result } from "../../../shared/contracts/result.contract";
import { Return } from "../../../shared/util/return.adpter";
import { UserRepository } from "../../user/repositories/user.repository";
import { WorkoutRepository } from "../repositories/workout.repository";

interface CreateWorkoutParamns{
    idUser: string
    name: string,
    repetitions: number,
    series: number,
    weeks: number,
    cardio: string,
    description: string,
}

export class CreateWorkoutUsecase{
    constructor(
        private userRepository: UserRepository,
        private workoutRepository: WorkoutRepository
    ){}

    public async execute(params: CreateWorkoutParamns): Promise<Result>{
        const user = await this.userRepository.get(params.idUser)

        if(!user) return Return.notFound('User')

        const workout = new Workout (
            params.name, 
            user,
            params.repetitions,
            params.series,
            params.weeks,
            params.cardio,
            params.description,
          )

          await this.workoutRepository.create(workout)

          return Return.create('Workout', workout.toJson())
    }
}