
var IndexController = require('../controllers/index');
module.exports = function(router) {
    router.get('/', IndexController.index);
    router.get('/login', IndexController.login);
    router.get('/regist', IndexController.regist);
    router.get('/info', IndexController.info);
    router.get('/diary', IndexController.diary);
    router.get('/photowall',IndexController.photowall);
    router.post('/login', IndexController.doLogin);
    router.post('/logout', IndexController.doLogout);
    router.post('/regist', IndexController.doRegist);
}
