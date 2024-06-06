import multiplicacao from "./divisao"

describe('Teste de multiplicação', () => {
    test('deve verificar o resultado de um multiplicação', () => {
        expect(multiplicacao(6.7, 2)).toBeCloseTo(13.4)
        expect(multiplicacao(6, 8)).toBe(48)
        expect(multiplicacao(60, 2)).toBe(120)
    })

    test('deve verificar o resultado incorreto de um multiplicação', () => {
        expect(multiplicacao(6, 2)).not.toBe(13)
    })
})