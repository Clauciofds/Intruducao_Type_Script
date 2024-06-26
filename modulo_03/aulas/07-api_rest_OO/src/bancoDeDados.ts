import Autor from "./models/Autor";
import Post from "./models/Post";

export const autores: Autor[] = []
export const posts: Post[] = [
    new Post({
        titulo: 'Meu primeiro post',
        descricacao: 'Descrição do meu primeiro post',
        autor: new Autor({
            nome: 'Claucio',
            idade: 51
        })
    })
]