import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
    res.json('Ok')
})

export default routes