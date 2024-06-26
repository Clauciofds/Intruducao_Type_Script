import { Router } from 'express'
import AutorControlador from './controllers/AutorControlador'
import PostControlador from './controllers/PostControladores'

const routes = Router()

const autorControlador = new AutorControlador()
const postControlador = new PostControlador()

routes.get('/autores', autorControlador.listar)
routes.get('/detalhar/:id', autorControlador.detalhar)
routes.post('/autores', autorControlador.cadastrar)
routes.put('/autores/:id', autorControlador.editar)
routes.delete('/autores/:id', autorControlador.excluir)

routes.get('/postagens', postControlador.listar)
routes.get('/postagens/:id', postControlador.detalhar)
routes.post('/postagens/', postControlador.cadastrar)
routes.patch('/postagens/:id', postControlador.editar)
routes.delete('/postagens/:id', postControlador.excluir)

export default routes