import { UserRepository } from "../../user/repositories/user.repository";
import { CreateWorkoutController } from "../controllers/create-workout.controller";
import { ListWorkoutController } from "../controllers/list-workout.controller";
import { WorkoutRepository } from "../repositories/workout.repository";
import { CreateWorkoutUsecase } from "../usecases/create-workout.usecase";
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

    
    public get createWorkout(){
        const createUsecase = new CreateWorkoutUsecase(
            this.userRepository,
            this.workoutRepository
        )
        return new CreateWorkoutController(createUsecase)
    }
}