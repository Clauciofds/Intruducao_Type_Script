/*
    De acordo com o array de professores abaixo, com suas respctivas stacks, faça o setuinte:
    a) filtrar todos os professores de backend
    b) filtrar todos os professores de frontend
*/

type TTeacher = {
    nome: string
    stack: string
}

const teacherList: TTeacher[] = [
    { nome: 'Guido', stack: 'backend' },
    { nome: 'José', stack: 'backend' },
    { nome: 'Ana', stack: 'frontend' },
    { nome: 'Paulo', stack: 'frontend' },
    { nome: 'Beatriz', stack: 'backend' },
    { nome: 'Joana', stack: 'frontend' }
]

// const teacherListFilter = teacherList.filter((t) => {
//     return (t.stack.includes('backend'))
// })

// console.log(teacherListFilter)

const teacherListFilter = (list: TTeacher[]) => {
    const backendList = list.filter((bl) => 
        bl.stack.includes('backend')
    )
    const frontendList = list.filter((fl) => 
        fl.stack.includes('frontend')
    )
    return {
        backend: backendList,
        frontend: frontendList
    }
}

console.log(teacherListFilter(teacherList))