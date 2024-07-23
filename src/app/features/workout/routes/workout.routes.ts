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

    app.get('/:workoutId', (req: Request, res: Response) => 
        controller.getWorkout.get(req, res)
    )
    app.post('/', (req: Request, res: Response) => 
        controller.createWorkout.create(req, res)
    )

    app.delete('/:workoutId', (req: Request, res: Response) => 
        controller.deleteWorkout.delete(req, res)
    )

    return app
}