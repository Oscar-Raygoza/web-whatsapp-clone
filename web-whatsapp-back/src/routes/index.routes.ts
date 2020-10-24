import { Request, Response, Router } from 'express';
import { ctrl } from '../controllers/index.controllers';
class IndexRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes(): void {
    this.router.get('/', ctrl.getIndex);
  }
}

const indexRoutes = new IndexRoutes();
indexRoutes.routes();

export default indexRoutes.router;
