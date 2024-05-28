// Record<Chave(s), Tipo>

type TPessoa = Record<'nome' | 'email' | 'senha', string>

type TDupla = Record<'jogador1' | 'jogador2', TPessoa>

const time1: TDupla = {
    jogador1: {
        nome: 'Clauco',
        email: 'claucio@emai.com',
        senha: 'jjjçk'
    },
    jogador2: {
        nome: 'Cleiton',
        email: 'cleiton@email.com',
        senha: 'kjjçsadf'
    }
}

type TPredio = {
    andares: number
    endereco: {
        rua: number
        bairro: string
        cep: number
    }
    portaria: boolean
}

type TCondominio = Record<'bloco01' | 'bloco02', TPredio>

const condAndorinha: TCondominio = {
    bloco01: {
        andares: 5,
        endereco: {
            bairro: 'AlfaVillie',
            rua: 3,
            cep: 456789456
        },
        portaria: true
    },
    bloco02: {
        andares: 5,
        endereco: {
            bairro: 'AlfaVillie',
            rua: 3,
            cep: 456789456
        },
        portaria: false
    }
}

// console.log(for (const i of condAndorinha) {
//     console.log(i);
// })

const listaCompleta = [];

for (const [bloco, predio] of Object.entries(condAndorinha)) {
    const informacoesPrédio = {
        bloco,
        andares: predio.andares,
        endereco: {
            rua: predio.endereco.rua,
            bairro: predio.endereco.bairro,
            cep: predio.endereco.cep
        },
        portaria: predio.portaria
    };

    listaCompleta.push(informacoesPrédio);
}

console.log(listaCompleta);

for (const [bloco, predio] of Object.entries(condAndorinha)) {
    console.log(`Bloco: ${bloco}`);
    console.log(`Andares: ${predio.andares}`);
    console.log(`Bairro: ${predio.endereco.bairro}`);
    console.log(`Portaria: ${predio.portaria}`);
}
