import { Router } from 'express'
import { 
    deleteteResgistration,
    detailInstructors,
    listInstructors,
    registerInstructor,
    updateEmail,
    updateResgistration
} from './controllers/Instructor'
import { classesDelete,
    classesRegister
} from './controllers/classes'

const routers = Router()

routers.get('/instructors', listInstructors)
routers.get('/instructors/:id', detailInstructors)
routers.post('/instructors', registerInstructor)
routers.put('/instructors/:id', updateResgistration)
routers.delete('/instructors/:id', deleteteResgistration)
routers.patch('/instructors/:id/updateEmail', updateEmail)
routers.post('/instructors/:id/classes', classesRegister)
routers.delete('/instructors/:id/classes/:idClasse', classesDelete)

export default routers