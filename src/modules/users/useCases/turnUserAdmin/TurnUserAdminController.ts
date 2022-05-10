import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.body
    try {
      return response.send(this.turnUserAdminUseCase.execute(user_id))
    } catch (error) {
      return response.status(404).json({error})
    }
    
  }
}

export { TurnUserAdminController };
