import express from "express";
import { router } from "./routes";

class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    this.json();
    this.router();
  }

  private json() {
    this.server.use(express.json());
  }

  private router() {
    this.server.use(router);
  }
}

export const app = new App();
