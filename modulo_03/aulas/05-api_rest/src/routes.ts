import { Router } from 'express'
import test from 'node:test'
import { listInstructors } from './Instructorcontroller'

const routers = Router()

routers.get('/instructors',listInstructors)

export default routers