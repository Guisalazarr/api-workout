import { Return } from "../../../shared/util/return.adpter";
import { WorkoutRepository } from "../../workout/repositories/workout.repository";
import { ExerciseRepository } from "../repositories/exercise.repository";

interface GetExerciseParams{
    workoutId: string,
    exerciseId: string
}

export class GetExerciseUsecase{
    constructor(
        private workoutRepository: WorkoutRepository,
        private exerciseRepository: ExerciseRepository,
    ){}

    public async execute(params: GetExerciseParams){
        const workout = await this.workoutRepository.get(params.workoutId)

        if(!workout) return Return.notFound('Workout')

        const exercise = await this.exerciseRepository.get(params.exerciseId)

        if(!exercise) return Return.notFound('Exercise')

        return Return.success('Exercise successfully obteined', exercise.toJson())
    }
}