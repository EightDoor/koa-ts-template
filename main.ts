import * as Koa from 'koa';
import * as Router from 'koa-router';
import { logger } from '@/utils/log';
import Config from './src/config';

const app = new Koa();
const router = new Router();

app.use(router.routes()).use(router.allowedMethods());

app.listen(Config.port, () => {
  logger.info(`服务启动成功,端口: ${Config.port}`);
});
