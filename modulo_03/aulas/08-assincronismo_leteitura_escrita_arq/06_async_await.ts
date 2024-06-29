import fs from 'fs/promises'

async function principal(resultado:string) {
//     const bancoDeDados = await fs.readFile('./bancoDeDados.json')
//     console.log(bancoDeDados)

    await fs.writeFile('/teste.txt', 'Gabriel')

    const arquvio = await fs.readFile('teste.txt')

    console.log(arquvio.toString())
}