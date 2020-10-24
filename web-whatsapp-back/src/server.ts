import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import bodyParser from 'body-parser';
import chalk from 'chalk';
const log = console.log;

//database
import { connect } from './database';

// dotenv
import { config } from 'dotenv';
config();

// import routes
import IndexRoutes from './routes/index.routes';
import MessageRoutes from './routes/messages.routes';

// Server Class
class Server {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public config(): void {
    // Settings
    this.app.set('port', process.env.PORT || 3005);

    // middlewares
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }

  public routes(): void {
    const router: express.Router = express.Router();

    this.app.use('/api/v1/', IndexRoutes);
    this.app.use('/api/v1/messages/', MessageRoutes);
  }

  public start(): void {
    connect();
    this.app.listen(this.app.get('port'), () => {
      log(
        chalk.bgGreen.black(
          `⚡️[server]: Server is running on port ${this.app.get('port')}`
        )
      );
    });
  }
}

const server = new Server();
server.start();
