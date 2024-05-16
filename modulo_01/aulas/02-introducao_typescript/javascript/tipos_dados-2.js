"use strict";
let nome1 = 'Claucio Santos';
console.log(typeof nome1);
console.log(nome1);
let age = 50;
age = 'Claucio';
console.log(age);
// comando para rodar transpilar de ts para js.
// npx tsc <nome_do_arquivo.ts>
const nomeCompleto = 'Claucio F D dos Santos';
console.log(nomeCompleto);
// para rodar um arquivo ts sem precisar transpilar e necessário instalar o ts-node com o comando:
// npm install -D ts-node
// para tranpilar o arquivo basta usar o comando
// npx txc <nome do arquivo>
// para rodar um arquivo ts deve usar o comando:
// npx ts-node <nome do arquivo>
// para instalar o tsconfig basta usar o comando:
// npx tsc --init
// após instalar e configura a opção do tsconfig -- outDir basta usar o comando:
// npx txc para transpilar todos os arquivo .ts para pasta configurada no outDir para .js
