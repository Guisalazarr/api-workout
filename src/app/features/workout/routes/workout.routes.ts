import { Request, Response, Router } from 'express';
import { WorkoutContoller } from "../util/workout.factory"
import { exerciseRoutes } from '../../exercise/routes/exercise.routes';


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

    app.put('/:workoutId', (req: Request, res: Response) => 
        controller.updateWorkout.update(req, res)
    )

    app.delete('/:workoutId', (req: Request, res: Response) => 
        controller.deleteWorkout.delete(req, res)
    )

    app.use("/:workoutId/exercise", exerciseRoutes());
    return app
}