module.exports = (app) => {
  app.use('/', require('../routes/index'));
  app.use('/oauth2', require('../routes/oauth2'));
};
