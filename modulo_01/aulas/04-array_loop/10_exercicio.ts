/*
Faça um programa que percorra uma lista de usuários
para encontrar o usuário "México". Caso encontre, imprima
"Encontrado", caso contrário, impima "Não encontrado"
*/

const countryslist = ['Brasil', 'México', 'Austrália', 'Inglaterra', 'EUA']
let found: boolean = false

for (let item of countryslist){
    if(item==='México'){
        found = true
        break
    }
}

if(found){
    console.log('Encontrado')
}else{
    console.log('Não encontrado')
}