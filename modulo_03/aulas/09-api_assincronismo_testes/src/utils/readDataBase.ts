import fs from 'fs/promises'
import Link from '../models/Link'

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