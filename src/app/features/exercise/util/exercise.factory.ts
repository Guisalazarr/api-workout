import { WorkoutRepository } from "../../workout/repositories/workout.repository"
import { ListExeciseController } from "../controllers/list-exercises.controllers"
import { ExerciseRepository } from "../repositories/exercise.repository"
import { ListExerciseUsecase } from "../usecasess/list-exercise.usecase"



export class ExerciseContoller {
    private get workoutRepository(){
        return new WorkoutRepository()
    }

    private get exerciseRepository(){
        return new ExerciseRepository()
    }

    public get listExercise(){
        const listUsecase = new ListExerciseUsecase(
            this.workoutRepository,
            this.exerciseRepository
        )
        return new ListExeciseController(listUsecase)
    }

}