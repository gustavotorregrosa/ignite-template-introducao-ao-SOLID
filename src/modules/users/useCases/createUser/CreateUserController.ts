import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body

    try {
      return response.status(201).send(this.createUserUseCase.execute({email, name}))
    } catch (error) {
      return response.status(400).json({error})
    }
  }
}

export { CreateUserController };
