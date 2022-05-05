const express = require( 'express' );
const AutorRouter = express.Router();
const Autorcontroller = require ( './../controladores/autor.controller');

AutorRouter.post('/new', Autorcontroller.crearAutor);
AutorRouter.get ('', Autorcontroller.getAllAutores);
AutorRouter.delete ( '/delete/:id' , Autorcontroller.deleteAutor);
AutorRouter.put ( '/:id/edit' , Autorcontroller.updateAutor);
AutorRouter.get ( '/:id', Autorcontroller.getOneAutor);

module.exports = AutorRouter;