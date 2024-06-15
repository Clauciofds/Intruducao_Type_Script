type TClasses = {
    id: number
    name: string
}

type TInstructors = {
    id: number
    name: string
    email: string
    classes?: TClasses[]
}

type TDadaBase = {
    nextId: number
    nextIdClasse: number
    instructors: TInstructors[]
}

const dataBase: TDadaBase = {
    nextId: 3,
    nextIdClasse: 2,
    instructors: [
        {
            id: 1,
            name: 'Claucio',
            email: 'claucio@email.com',
            classes: [{
                id: 1,
                name: 'htmal'
            }]
        },
        {
            id: 2,
            name: 'Cleiton',
            email: 'cleiton@email',
            classes: []
        }
    ]
}

export default dataBase