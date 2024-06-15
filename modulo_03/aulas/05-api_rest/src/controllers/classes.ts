import { Request, Response } from "express"
import dataBase from "../../dataBase"

export const classesRegister = (req: Request, res: Response) => {
    const { id } = req.params
    const { name } = req.body

    const instructor = dataBase.instructors.find((item) => item.id === Number(id))
    if (!instructor) {
        return res.status(404).json({
            mensagem: 'Instructor not found!'
        })
    }

    const newClasse = {
        id: dataBase.nextIdClasse++,
        name
    }

    if (instructor.classes) {
        instructor.classes.push(newClasse)
        return res.status(201).json(newClasse)
    }

    instructor.classes = [newClasse]
    return res.status(201).json(newClasse)
}