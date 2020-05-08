// Declare all routes in rote config file

const indexRouter = require('../routes/index');
const oauth2Router = require('../routes/oauth2');

module.exports = (app) => {
  app.use('/', indexRouter);
  app.use('/oauth2', oauth2Router);
};
