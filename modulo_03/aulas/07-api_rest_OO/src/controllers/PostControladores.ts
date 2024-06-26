import { Request, Response } from "express";
import { autores, posts } from "../bancoDeDados";
import Post from "../models/Post";

export default class PostControlador {    
    listar(req: Request, res: Response){
        return res.status(200).json(posts)
    }

    detalhar(req: Request, res: Response){
        const { id } = req.params

        const post = posts.find( i => i.id === id)
        if ( !post ){
            return res.status(404).json({
                mensagem: "A postagem não existe!"
            })
        }

        return res.json(post)
    }

    cadastrar(req: Request, res: Response){
        const { titulo, descricao, autor_id } = req.body

        if ( !titulo || !descricao || !autor_id ){
            return res.status(400).json({
                mensagem: "Todos os campos são obrigatórios!"
            })
        }

        const autor = autores.find( i => i.id === autor_id )
        if ( !autor ){
            return res.status(400).json({
                mensgagem: "Autor não encontrado!"
            })
        }

        const post = new Post({
            titulo,
            descricao,
            autor
        })

        posts.push(post)

        return res.status(201).json(post)
    }

    editar(req: Request, res: Response){
        const { id } = req.params
        const { titulo, descricao } = req.body

        if ( !titulo || !descricao ){
            return res.status(400).json({
                mensagem: "Todos os campos são obrigatório"
            })
        }

        const post = posts.find( i => i.id === id )
        if ( !post ){
            return res.status(404).json({
                mensagem: "A postagem não existe!"
            })
        }

        post.titulo = titulo
        post.descricao = descricao

        return res.status(204).send()
    }

    excluir(req: Request, res: Response){
        const { id } = req.params

        const postIndice = posts.findIndex( i => i.id === id )
        if ( postIndice === -1 ){
            return res.status(404).json({
                mensagem: "Post não encontrado!"
            })
        }

        posts.splice(postIndice, 1)

        return res.status(204).send()
    }
}