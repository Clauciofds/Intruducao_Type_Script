function bissexto(ano: number) {
    return (ano % 400 === 0) || (ano % 4 === 0 && ano % 100 != 0)
}

console.log(bissexto(2025))
