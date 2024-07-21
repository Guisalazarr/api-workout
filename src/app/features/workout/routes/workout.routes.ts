import { Request, Response, Router } from 'express';
import { WorkoutContoller } from "../util/workout.factory"


export const workoutRoutes = () => {
    const app = Router({
        mergeParams: true,
    })

    const controller = new WorkoutContoller()

    app.get('/', (req: Request, res: Response) => 
        controller.listWorkout.list(req, res)
    )

    return app
}