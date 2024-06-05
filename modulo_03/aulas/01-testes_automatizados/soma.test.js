const soma = require("./soma")

test('deve verificar o resultado de um soma', () => {
    expect(soma(3, 8)).toBe(11)
})

