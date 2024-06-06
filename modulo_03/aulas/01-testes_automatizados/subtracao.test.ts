import subtracao from "./subtracao"

describe('Teste de subtração', () => {
    test('deve verificar o resultado de um subtração', () => {
        expect(subtracao(6.7, 2.5)).toBeCloseTo(4.2)
        expect(subtracao(6, 8)).toBe(-2)
        expect(subtracao(60, 2)).toBe(58)
    })

    test('deve verificar o resultado incorreto de um subtração', () => {
        expect(subtracao(6, 2)).not.toBe(5)
    })
})