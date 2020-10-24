import { Router, Request, Response, NextFunction } from 'express';

import Message from '../database/models/Message';

class MessagesRouter {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async newMessage(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    const { message, name } = req.body;
    const newMessage = new Message({ message, name });
    await newMessage.save();
    res.json({ status: res.status, data: newMessage });
  }

  routes() {
    this.router.post('/new', this.newMessage);
    //this.router.get('/:url', this.getPost);
  }
}

const messagesRouter = new MessagesRouter();

export default messagesRouter.router;
