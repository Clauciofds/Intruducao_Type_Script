const requiredValues = [
    'joao',
    'Flavio',
    1,
    1,
    1,
    1,
    'aprovado'
]

const res = {
    nota: 0
}

console.log(typeof res.nota)

// for (let value of requiredValues) {
//     if (!req.body[value]) {
//         return res.status(400).json(`O campo ${value} é obrigatório`)
//     }
// }

// let test: (string | number)[] = [];
// for (let value = 2; value < 6; value++) {
//     if (typeof requiredValues[value] === 'number' || isNaN(requiredValues[value] as number)) {
//         test.push(requiredValues[value]);
//     }
// }
// console.log(test)