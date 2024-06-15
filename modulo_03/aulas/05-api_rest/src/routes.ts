import { Router } from 'express'
import { deleteteResgistration, detailInstructors, listInstructors, registerInstructor, updateEmail, updateResgistration } from './InstructorController'

const routers = Router()

routers.get('/instructors', listInstructors)
routers.get('/instructors/:id', detailInstructors)
routers.post('/instructors', registerInstructor)
routers.put('/instructors/:id', updateResgistration)
routers.delete('/instructors/:id', deleteteResgistration)
routers.patch('/instructors/:id/updateEmail', updateEmail)

export default routers