import { v4 as uuidv4 } from 'uuid'
import Autor from './Autor'

type TPost = {
    titulo: string
    descricacao: string
    autor: Autor
}

export default class Post {
    readonly id: string
    titulo: string
    descricacao: string
    autor: Autor
    data_criacao: Date

    constructor(post: TPost){
        this.id = this.gerarId()
        this.titulo = post.titulo
        this.descricacao = post.descricacao
        this.autor = post.autor
        this.data_criacao = new Date()
    }

    private gerarId(): string {
        return uuidv4()
    }
}