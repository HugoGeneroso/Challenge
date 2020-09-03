// const express = require('express');
// const app = express();
// const router = express.Router();
// //Rotas
// const index = require('./routes/index');
// const tasksRoute = require('./routes/tasks');
// app.use('/', index);
// app.use('/tasks', tasksRoute);

// module.exports = app;

//esse arquivo é o nosso servidor
const Koa = require('koa');
const Router = require('koa-router');
const logger = require('koa-logger');
const bodyParser = require('koa-body');

//iniciamos uma nova aplicação Koa
const app = new Koa();
//iniciamos as rotas
const router = new Router();

const tasksRouter = require('../routes/tasks.js');
//habilitamos o uso do Koa Logger
app.use(logger());
app.use(bodyParser())
app.use(tasksRouter.routes());
app.use(router.allowedMethods());

const server = app.listen(3000);
module.exports = server;