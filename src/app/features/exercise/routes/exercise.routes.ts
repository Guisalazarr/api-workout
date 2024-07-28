import { ExerciseContoller } from "../util/exercise.factory"
import { Request, Response, Router } from 'express';


export const exerciseRoutes = () => {
    const app = Router({
        mergeParams: true
    })

    const controller = new ExerciseContoller()

    app.get('/', (req: Request, res: Response) => 
            controller.listExercise.list(req, res)
    )

    return app
}