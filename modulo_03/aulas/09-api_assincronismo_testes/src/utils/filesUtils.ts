import fs from 'fs/promises'
import Link from '../models/Link'
import { link } from 'fs'

const pathDataBase = 'src/dataBase.json'

export async function readDataBase(): Promise<Link[]> {
    const data = await fs.readFile(pathDataBase)
    const parse = JSON.parse(data.toString())
    return parse
}

export async function addDataBaseJson(link: Link) {
    const data = await readDataBase()
    data.push(link)
    await fs.writeFile(pathDataBase, JSON.stringify(data, null, '\t'))
}

export async function conuterVisits(identificador:string) {
    const data = await readDataBase()

    const link = data.find( link => 
        link.identificador === identificador
    )

    const linkWhitVisist: Link = {
        identificador: link!.identificador,
        url: link!.url,
        visitas: link!.visitas + 1
    }

    const findIndex = data.findIndex( index => 
        index.identificador === identificador
    )

    data.splice(findIndex, 1, linkWhitVisist)

    await fs.writeFile(pathDataBase, JSON.stringify(data, null, '\t'))
}