import { Router } from 'express'
import AutorControlador from './controllers/AutorControlador'

const routes = Router()

const autorControlador = new AutorControlador()

routes.get('/autores', autorControlador.listar)
routes.get('/detalhar/:id', autorControlador.detalhar)
routes.post('/autores', autorControlador.cadastrar)
routes.put('/autores/:id', autorControlador.editar)
routes.delete('/autores/:id', autorControlador.excluir)


export default routes