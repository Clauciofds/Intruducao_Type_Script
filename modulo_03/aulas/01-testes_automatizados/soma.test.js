const soma = require("./soma")

describe("Testes de soma", () => {
    test('deve verificar o resultado de um soma', () => {
        expect(soma(3, 8)).toBe(11)
    })

    test('deve verificar o resultado inconrreto de uma soma', () => {
        expect(soma(3, 8)).not.toBe(12)
    })
})

describe("Testes de soma_2", () => {
    it('deve verificar o resultado de um soma', () => {
        expect(soma(3, 8)).toBe(11)
    })

    it('deve verificar o resultado inconrreto de uma soma', () => {
        expect(soma(3, 8)).not.toBe(12)
    })
})