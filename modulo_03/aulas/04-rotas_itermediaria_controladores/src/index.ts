import 'dotenv/config'
import express, { Request, Response, NextFunction } from 'express'
import { itemProduts, searchUser, searchUserQuery } from './controlers'
import { intermediaryDefault, myFirstItermediary } from './intermediary'

const server = express()

server.get('/produts/:item', myFirstItermediary, itemProduts)

server.use(intermediaryDefault)

server.get('/users/:email', searchUser)
server.get('/users', searchUserQuery)

server.listen(process.env.PORT)