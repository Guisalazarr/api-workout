import { WorkoutRepository } from "../../workout/repositories/workout.repository"
import { GetExerciseController } from "../controllers/get-exercise.controller"
import { ListExeciseController } from "../controllers/list-exercises.controllers"
import { ExerciseRepository } from "../repositories/exercise.repository"
import { GetExerciseUsecase } from "../usecasess/get-exercise.usecase"
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

    public get getExercise(){
        const getUsecase = new GetExerciseUsecase(
            this.workoutRepository,
            this.exerciseRepository
        )
        return new GetExerciseController(getUsecase)
    }

}