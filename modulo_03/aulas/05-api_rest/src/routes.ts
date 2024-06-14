import { Router } from 'express'
import test from 'node:test'

const routers = Router()

routers.get('/', test)

export default routers