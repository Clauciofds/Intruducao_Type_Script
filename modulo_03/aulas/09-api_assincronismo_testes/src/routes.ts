import { Router } from "express"
import RegisterLink from "./controllers/RegisterLinkController"
import GetLink from "./controllers/GetLinkController"

const routes = Router()

routes.post('/', new RegisterLink().controller)
routes.get('/:indentifier', new GetLink().controller)

export default routes

