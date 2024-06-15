import { Router } from 'express'
import { detailInstructors, listInstructors, registerInstructor } from './Instructorcontroller'

const routers = Router()

routers.get('/instructors', listInstructors)
routers.get('/instructors/:id', detailInstructors)
routers.post('/instructors', registerInstructor)

export default routers