import { Request, Response } from "express"
import { it } from "node:test"

type TInstructors = {
    id: number
    name: string
    email: string
}

const instructors: TInstructors[] = [
    {
        id: 1,
        name: 'Claucio',
        email: 'claucio@email.com'
    },
    {
        id: 2,
        name: 'Cleiton',
        email: 'cleiton@email'
    }
]

export const listInstructors = (req: Request, res: Response) => {
    return res.status(200).json(instructors)
}

export const detailInstructors = (req: Request, res: Response) => {
    const { id } = req.params
    const instructor = instructors.find((item) => item.id === Number(id))
    if (!instructor) {
        return res.status(404).json({
            mensagem: 'Instructor not found!'
        })
    }
    return res.status(200).json(instructor)
}
