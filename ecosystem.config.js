module.exports = {
  apps: [
    {
      name: 'koa-ts-example',
      script: './dist/main.js',
      watch: './dist/',
      cwd: './',
      instances: 'max',
      exec_mode: 'cluster',
      ignore_watch: ['[/\\]./', 'node_modules'],
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      error_file: './log/app-error.log',
      out_file: './log/app-out.log',
      combine_logs: true,
      merge_logs: true,
    },
  ],
};
