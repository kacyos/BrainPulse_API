interface IUserRepository {
  create(user: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findByUsername(username: string): Promise<User>;
  login(userName: string, password: string): Promise<User>;
  logout(userId: string): Promise<User>;
  update(user: User): Promise<User>;
}
