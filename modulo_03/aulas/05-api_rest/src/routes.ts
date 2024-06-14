import { Router } from 'express'
import test from 'node:test'
import { detailInstructors, listInstructors } from './Instructorcontroller'

const routers = Router()

routers.get('/instructors', listInstructors)
routers.get('/instructors/:id', detailInstructors)

export default routers