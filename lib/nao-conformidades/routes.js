const controllers = require('./controllers');
const { isAuthenticated } = require('../authorization/authorization-bearer-strategy');

const naoConformidadesRoutes = (router) => {
  router.get('/nao-conformidades', isAuthenticated, controllers.get);
  router.post('/nao-conformidades', isAuthenticated, controllers.post);
};

module.exports = naoConformidadesRoutes;