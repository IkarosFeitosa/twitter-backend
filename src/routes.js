const express = require('express');

const routes = express.Router();
const multer = require('multer');
const mulerConfigPerfil = require('./config/multer');
const mulerConfigCapa = require('./config/multerCapa');
const TweetController = require('./controllers/TweetController');
const LikeController = require('./controllers/LikeController');

routes.get('/tweets',TweetController.index);
routes.post('/tweets',TweetController.store);
routes.post('/likes/:id',LikeController.store);
routes.post('/perfil',multer(mulerConfigPerfil).single('perfil'),(req,res)=>{
    return res.json(req.perfil);
});
routes.post('/capa',multer(mulerConfigCapa).single('capa'),(req,res)=>{
    return res.json(req.capa);
});
routes.get('/perfil',(req,res)=>{
    ///return 'perfil.jpg';
});


module.exports = routes;