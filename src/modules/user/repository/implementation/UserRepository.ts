class UserRepository implements IUserRepository {
  create(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }

  findByEmail(email: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  findByUsername(username: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  login(userName: string, password: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  logout(userId: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
