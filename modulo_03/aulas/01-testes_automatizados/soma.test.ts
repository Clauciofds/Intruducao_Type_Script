import soma from "./soma"

describe("Testes de soma", () => {
    test('deve verificar o resultado de um soma', () => {
        expect(soma(3, 8)).toBe(11)
    })

    test('deve verificar o resultado inconrreto de uma soma', () => {
        expect(soma(3, 8)).not.toBe(12)
    })
})
