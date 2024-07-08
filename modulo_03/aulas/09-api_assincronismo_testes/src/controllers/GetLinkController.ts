import { Request, Response } from "express"
import { conuterVisits, readDataBase } from "../utils/filesUtils"

export default class GetLink {
    async controller(req: Request, res: Response) {
        const { indentifier } = req.params

        const dataBase = await readDataBase()
        const existLink = dataBase.find(link => link.identificador === indentifier)
        if (!existLink) {
            return res.status(404).json({
                message: 'Link not exists.'
            })
        }

        await conuterVisits(existLink.identificador)

        return res.json({
            url: existLink.url
        })
    }
}