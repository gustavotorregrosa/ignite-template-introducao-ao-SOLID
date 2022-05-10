import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const {user_id} = request.body
    
    try {
      return response.send(this.showUserProfileUseCase.execute(user_id))
    } catch (error) {
      return response.status(400).json({error})
    }
  }
}

export { ShowUserProfileController };
