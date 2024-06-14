import { Request, Response } from "express"

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