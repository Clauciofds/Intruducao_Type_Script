const aprovado: string[] = []
const numeroInscricao: string = '1'

function solucao(aprovados: string[], numeroInscricao: string): string {
    let aprovado = "REPROVADO"
    if (aprovado.length > 0) {
        for (let numeroInscricaoAprovado of aprovados) {
          if (numeroInscricaoAprovado === numeroInscricao) {
            aprovado = "APROVADO"
          }
        }
    }
    return aprovado
  }

console.log(solucao(aprovado, numeroInscricao))