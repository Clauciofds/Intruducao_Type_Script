import { Request, Response } from "express";
import { autores, posts } from "../bancoDeDados";
import Autor from "../models/Autor";

export default class PostControlador {    
    listar(req: Request, res: Response){
        return res.status(200).json(posts)
    }

    detalhar(req: Request, res: Response){
        const { id } = req.params

    }

    cadastrar(req: Request, res: Response){
        const { nome, idade } = req.body

       
    }

    editar(req: Request, res: Response){
        const { id } = req.params
        const { nome, idade } = req.body

       
        return res.status(204).send()
    }

    excluir(req: Request, res: Response){
        const { id } = req.params

       

        return res.status(204).send()
    }
}