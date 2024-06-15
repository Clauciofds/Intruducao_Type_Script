type TClasses = {
    id: number
    name: string
}

type TInstructors = {
    id: number
    name: string
    email: string
    classes?: TClasses
}

type TDadaBase = {
    nextId: number
    instructors: TInstructors[]
}

const dataBase: TDadaBase = {
    nextId: 3,
    instructors: [
        {
            id: 1,
            name: 'Claucio',
            email: 'claucio@email.com',
            classes: {
                id: 1,
                name: 'htmal'
            }
        },
        {
            id: 2,
            name: 'Cleiton',
            email: 'cleiton@email'
        }
    ]
}

export default dataBase