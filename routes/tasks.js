const Router = require('koa-router');
const router = new Router();
const TasksController = require('../src/controllers/TasksController.js');

router.post('/analyzeTasks', async (ctx, next) => {
    if(ctx.request.body.inputString !== 'undefined'){        
        var inputString = ctx.request.body.inputString;
        var response =  await TasksController.analyzeTasks(inputString);
        ctx.status = 200;
        ctx.body = response;
        return next();
    }else{
        return 'Invalid InputString';
    }
})

module.exports = router;