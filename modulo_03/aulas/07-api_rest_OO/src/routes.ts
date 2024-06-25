import { Router } from 'express'
import AutorControlador from './controllers/AutorControlador'

const routes = Router()

const autorControlador = new AutorControlador()

routes.get('/autores', autorControlador.listar)


export default routes