// unkown -> desconhecido

const json = '{ "name": "07-tipos-dados-2" }'

const resultado = JSON.parse(json) as unknown

if (
    resultado !== null &&
    typeof resultado === 'object' &&
    'name' in resultado &&
    typeof resultado.name === 'string') {
        console.log('é u objeto com uma propriedade');
} else {
    console.log('Formato desconhecido')
}

