import { bancoDeDados } from "./bancoDeDados"
import TEvento from "./tipos/Evento"


const { eventos } = bancoDeDados

let newEvent = []
let i

for (const evento of eventos){
    const eventoParaGravar: TEvento[] = [{
        id: evento.id,
        nome: evento.nome,
        endereco: evento.endereco,
        data: evento.data,
        preco: evento.preco
    }]
    newEvent.push(eventoParaGravar)
}

console.table(newEvent[1])