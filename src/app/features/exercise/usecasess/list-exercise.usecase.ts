import { Result } from "../../../shared/contracts/result.contract";
import { Return } from "../../../shared/util/return.adpter";
import { WorkoutRepository } from "../../workout/repositories/workout.repository";
import { ExerciseRepository } from "../repositories/exercise.repository";


export class ListExerciseUsecase{
    constructor(
        private workoutRepository: WorkoutRepository,
        private exerciseRepository: ExerciseRepository
    ){}

    public async execute(workoutId: string): Promise<Result>{
        const workout = await this.workoutRepository.get(workoutId)

        if(!workout) return Return.notFound('Workout')

        const result = await this.exerciseRepository.list()

        return Return.success(
            'Exercises successfully listed',
            result.map((exercise) => exercise.toJson())
        )
    }
}