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

export const classesDelete = (req: Request, res: Response) => {
    const { id, idClasse } = req.params
   

    const instructor = dataBase.instructors.find((item) => item.id === Number(id))
    if (!instructor) {
        return res.status(404).json({
            mensagem: 'Instructor not found!'
        })
    }

    if (!instructor.classes) {
        return res.status(404).json({
            mensagem: 'Class not found!'
        })
    }
    
    const classeIndex = instructor.classes?.findIndex((id) => id.id === Number(idClasse))
    if (classeIndex === -1) {
        return res.status(404).json({
            mensagem: 'Id class not found!'
        })
    }

    instructor.classes?.splice(classeIndex, 1)

    return res.status(204).send()
}