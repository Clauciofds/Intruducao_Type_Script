import { Request, Response } from "express"
import dataBase from '../dataBase'

export const listInstructors = (req: Request, res: Response) => {
    return res.status(200).json(dataBase.instructors)
}

export const detailInstructors = (req: Request, res: Response) => {
    const { id } = req.params
    const instructor = dataBase.instructors.find((item) => item.id === Number(id))
    if (!instructor) {
        return res.status(404).json({
            mensagem: 'Instructor not found!'
        })
    }
    return res.status(200).json(instructor)
}

export const registerInstructor = (req: Request, res: Response) => {
    const { name, email } = req.body

    const newInstructor = {
        id: dataBase.nextId++,
        name,
        email
    }
    
    dataBase.instructors.push(newInstructor)
    
    return res.status(201).json(newInstructor)
}

export const updateResgistration = (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email } = req.body


    const instructor = dataBase.instructors.find((item) => item.id === Number(id))
    if (!instructor) {
        return res.status(404).json({
            mensagem: 'Instructor not found!'
        })
    }

    instructor.name = name
    instructor.email = email

    return res.status(204).send()
}

export const deleteteResgistration = (req: Request, res: Response) => {
    const { id } = req.params
    
    const indexInstructor = dataBase.instructors.findIndex((item) => item.id === Number(id))
    if (indexInstructor === -1) {
        return res.status(404).json({
            mensagem: 'Instructor not found!'
        })
    }

    dataBase.instructors.splice(indexInstructor, 1)
    
    return res.status(204).send()
}

export const updateEmail = (req: Request, res: Response) => {
    const { id } = req.params
    const { email } = req.body


    const instructor = dataBase.instructors.find((item) => item.id === Number(id))
    if (!instructor) {
        return res.status(404).json({
            mensagem: 'Instructor not found!'
        })
    }

    instructor.email = email

    return res.status(204).send()
}