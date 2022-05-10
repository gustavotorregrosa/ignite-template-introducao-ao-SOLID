import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User(name, email)
    this.users.push(user)
    return user
  }

  findById(id: string): User | undefined {
    return this.users.find(user => user.id == id)

  }

  findByEmail(email: string): User | undefined {
    return this.users.find(user => user.email == email)
  }

  turnAdmin(receivedUser: User): User {
    let myUserIndex: number = null
    const myuser: User = this.users.find((user, index) => {
      if(user.id == receivedUser.id){
        myUserIndex = index
        return true
      }
      return false
    })

    myuser.admin = true
    myuser.updated_at = new Date()

    receivedUser.admin = true
    receivedUser.updated_at = new Date()
    this.users.splice(myUserIndex, 1, receivedUser)
    return myuser
    

  }

  list(): User[] {
    return this.users
  }
}

export { UsersRepository };
