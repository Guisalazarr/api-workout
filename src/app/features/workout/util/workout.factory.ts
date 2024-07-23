import { UserRepository } from "../../user/repositories/user.repository";
import { CreateWorkoutController } from "../controllers/create-workout.controller";
import { DeleteWorkoutController } from "../controllers/delete-workout.controller";
import { GetWorkoutController } from "../controllers/get-workout.controller";
import { ListWorkoutController } from "../controllers/list-workout.controller";
import { WorkoutRepository } from "../repositories/workout.repository";
import { CreateWorkoutUsecase } from "../usecases/create-workout.usecase";
import { DeleteWorkoutUsecase } from "../usecases/delete-workout.usecase";
import { GetWorkoutUsecase } from "../usecases/get-workout.usecase";
import { ListWorkoutUseCase } from "../usecases/list-workouts.usecase";


export class WorkoutContoller {
    private get userRepository(){
        return new UserRepository()
    }

    private get workoutRepository(){
        return new WorkoutRepository()
    }

    public get listWorkout(){
        const listUsecase = new ListWorkoutUseCase(
            this.userRepository,
            this.workoutRepository
        )
        return new ListWorkoutController(listUsecase)
    }

    public get getWorkout(){
        const getUsecase = new GetWorkoutUsecase(
            this.userRepository,
            this.workoutRepository
        )
        return new GetWorkoutController(getUsecase)
    }

    
    public get createWorkout(){
        const createUsecase = new CreateWorkoutUsecase(
            this.userRepository,
            this.workoutRepository
        )
        return new CreateWorkoutController(createUsecase)
    }

    public get deleteWorkout(){
        const deleteUsecase = new DeleteWorkoutUsecase(
            this.userRepository,
            this.workoutRepository
        )
        return new DeleteWorkoutController(deleteUsecase)
    }
}