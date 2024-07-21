import { Request, Response, Router } from "express";
import { UserValidator } from "../validators/user.validator";
import { LoginValidator } from "../validators/login.validator";
import { UserController } from "../util/user.factory";

export const appRoutes = () => {
  const app = Router();

  const controller = new UserController();

  app.get("/", (req: Request, res: Response) =>
    controller.listUser.list(req, res)
  );
  app.get("/:id", (req: Request, res: Response) =>
    controller.getUser.get(req, res)
  );
  app.post(
    "/",
    [UserValidator.validateCreateFields, UserValidator.validatePassword],
    (req: Request, res: Response) => controller.createUser.create(req, res)
  );
  app.post(
    "/login",
    [LoginValidator.validateFieldsLogin],
    (req: Request, res: Response) => controller.loginUser.login(req, res)
  );
  return app;
};
