import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';
import Utils from './index';

const { format, transports } = winston;
const customFormat = format.combine(
  format.timestamp({ format: 'MMM-DD-YYYY HH:mm:ss' }),
  format.align(),
  format.printf(
    (i) => `${i.level}: ${[Utils.formatTime(i.timestamp)]}: ${i.message}`,
  ),
);

const defaultOptions = {
  format: customFormat,
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
};

const transportsAll: DailyRotateFile = new DailyRotateFile({
  filename: '../../log/business_log/index-%DATE%.log',
  ...defaultOptions,
});
const transportsInfo: DailyRotateFile = new DailyRotateFile({
  filename: '../../log/business_log/info-%DATE%.log',
  level: 'info',
  ...defaultOptions,
});
const transportsError: DailyRotateFile = new DailyRotateFile({
  filename: '../../log/business_log/error-%DATE%.log',
  level: 'error',
  ...defaultOptions,
});
const transportsDebug: DailyRotateFile = new DailyRotateFile({
  filename: '../../log/business_log/debug-%DATE%.log',
  level: 'debug',
  ...defaultOptions,
});

transportsAll.on('rotate', function (oldFilename, newFilename) {
  // do something fun
  console.log(oldFilename);
  console.log(newFilename);
});
const logger = winston.createLogger({
  // format: winston.format.json(),
  format: customFormat,
  transports: [
    new transports.Console(),
    transportsAll,
    transportsInfo,
    transportsError,
    transportsDebug,
  ],
});

export { logger };
