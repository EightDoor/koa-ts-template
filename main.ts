import * as Koa from 'koa';
import * as Router from 'koa-router';
import { logger } from './src/utils/log';
import Config from './src/config/index';

const app = new Koa();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

app.listen(Config.port, () => {
  logger.info(`应用已经启动,端口${Config.port}`);
});
