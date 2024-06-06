import divisao from "./divisao"

describe('Teste de multiplicação', () => {
    test('deve verificar o resultado de um multiplicação', () => {
        expect(divisao(13.4, 2)).toBeCloseTo(6.7)
        expect(divisao(8, 2)).toBe(4)
        expect(divisao(60, 2)).toBe(30)
    })

    test('deve verificar o resultado incorreto de um multiplicação', () => {
        expect(divisao(6, 2)).not.toBe(2)
    })
})