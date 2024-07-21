import { UserRepository } from "../../user/repositories/user.repository";
import { ListWorkoutController } from "../controllers/list-controller";
import { WorkoutRepository } from "../repositories/workout.repository";
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
}