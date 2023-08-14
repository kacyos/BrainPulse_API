class User {
  id?: string;
  name!: string;
  email!: string;
  userName!: string;
  password!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor() {
    if (!this.id) {
      this.id = crypto.randomUUID();
    }
  }
}
