import { v4 as uuidV4 } from "uuid";

class User {
  public id: string;
  public admin: boolean;
  public created_at: Date;
  public updated_at: Date;

  public constructor(public name: string, public email: string) {
    this.id = uuidV4()
    this.admin = false
    this.updated_at = new Date()
    this.created_at = new Date()
  }
}

export { User };
