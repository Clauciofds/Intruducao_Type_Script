import { Request, Response } from "express"
import { addDataBaseJson, readDataBase } from "../utils/filesUtils"
import Link from "../models/Link"

export default class RegisterLink {
    async controller(req: Request, res: Response) {
        const { url, identificador } = req.body

        if (!url || !identificador){
            return res.status(401).json({
                message: "All form fields are required"
            })
        }

        const dataBase = await readDataBase()

        const existLink = dataBase.find(link => link.identificador === identificador)

        if (existLink) {
            return res.status(400).json({
                message: 'Link already exists.'
            })
        }

        const newLink = new Link(identificador, url)

        await addDataBaseJson(newLink)

        return res.status(201).json(newLink)
    }
}