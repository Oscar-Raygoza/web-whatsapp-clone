import mongoose from 'mongoose';

import chalk from 'chalk';
const log = console.log;

export const connect = async (): Promise<void> => {
  try {
    const connection = mongoose.connection;
    console.log(process.env.MONGODB);
    //mongoose.set('useFindAndModify', false);
    await mongoose.connect(process.env.MONGODB || '', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    connection.on('connected', () => {
      log(
        chalk.bgGreen.black(
          `⚡️[mongodb]: Server is connected on port ${process.env.MONGODB}`
        )
      );
    });

    connection.on('disconnected', () => {
      log(
        chalk.bgYellow.black(
          `⚡️[mongodb]: Server is disconnected - ${process.env.MONGODB}`
        )
      );
    });

    connection.on('error', () => {
      log(
        chalk.bgRed.black(
          `⚡️[mongodb]: Server is running on port ${process.env.MONGODB}`
        )
      );
    });
  } catch (error) {
    log(chalk.bgRed.black(`⚡️[mongodb]: Server error: ${error}`));
  }
};
